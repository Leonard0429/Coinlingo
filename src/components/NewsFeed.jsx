import { useState, useEffect } from 'react'
import { Newspaper, ExternalLink, RefreshCw, Clock, AlertCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * NewsFeed Component using CoinStats API
 * 
 * Features:
 * - Fetches live crypto news from CoinStats API
 * - Displays clickable titles that open external articles in new tabs
 * - Shows descriptions and formatted publication dates
 * - Auto-refreshes every 5 minutes
 * - Handles loading states and errors gracefully
 * 
 * @component
 * @returns {JSX.Element} The NewsFeed component
 */
function NewsFeed() {
  const { t } = useLanguage()
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  // Fetch news from multiple sources with fallbacks
  const fetchNews = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Try multiple news sources in order of preference
      const newsSources = [
        {
          name: 'CoinStats (Original)',
          url: 'https://api.coinstats.app/public/v1/news?skip=0&limit=10',
          parser: (data) => data.news || [],
          useProxy: true
        },
        {
          name: 'CoinStats (Alternative)',
          url: 'https://api.coinstats.app/public/v1/news?limit=10',
          parser: (data) => data.news || [],
          useProxy: true
        },
        {
          name: 'CryptoPanic (Public)',
          url: 'https://cryptopanic.com/api/developer/v2/posts/?public=true&limit=10',
          parser: (data) => data.results ? data.results.map(item => ({
            id: item.id,
            title: item.title,
            description: item.meta?.description || '',
            link: item.url || `https://cryptopanic.com/news/${item.slug}/`,
            feedDate: item.published_at,
            source: item.source?.title || 'CryptoPanic',
            imgURL: item.img_url || null
          })) : []
        },
        {
          name: 'CoinTelegraph RSS',
          url: 'https://cointelegraph.com/rss',
          parser: async (data) => {
            // Parse RSS feed
            const parser = new DOMParser()
            const xmlDoc = parser.parseFromString(data, 'text/xml')
            const items = xmlDoc.querySelectorAll('item')
            
            return Array.from(items).slice(0, 10).map((item, index) => {
              const description = item.querySelector('description')?.textContent || ''
              // Extract image URL from description if available
              const imgMatch = description.match(/<img[^>]+src="([^"]+)"/)
              const imgURL = imgMatch ? imgMatch[1] : null
              
              return {
                id: `cointelegraph-${index}`,
                title: item.querySelector('title')?.textContent || '',
                description: description.replace(/<[^>]*>/g, '').substring(0, 150) + '...', // Strip HTML tags
                link: item.querySelector('link')?.textContent || '',
                feedDate: item.querySelector('pubDate')?.textContent || new Date().toISOString(),
                source: 'CoinTelegraph',
                imgURL: imgURL
              }
            })
          }
        },
        {
          name: 'CoinDesk RSS',
          url: 'https://www.coindesk.com/arc/outboundfeeds/rss/',
          parser: async (data) => {
            // Parse RSS feed
            const parser = new DOMParser()
            const xmlDoc = parser.parseFromString(data, 'text/xml')
            const items = xmlDoc.querySelectorAll('item')
            
            return Array.from(items).slice(0, 10).map((item, index) => {
              const description = item.querySelector('description')?.textContent || ''
              // Extract image URL from description if available
              const imgMatch = description.match(/<img[^>]+src="([^"]+)"/)
              const imgURL = imgMatch ? imgMatch[1] : null
              
              return {
                id: `coindesk-${index}`,
                title: item.querySelector('title')?.textContent || '',
                description: description.replace(/<[^>]*>/g, '').substring(0, 150) + '...', // Strip HTML tags
                link: item.querySelector('link')?.textContent || '',
                feedDate: item.querySelector('pubDate')?.textContent || new Date().toISOString(),
                source: 'CoinDesk',
                imgURL: imgURL
              }
            })
          }
        }
      ]
      
      let newsArray = []
      let lastError = null
      
      for (const source of newsSources) {
        try {
          console.log(`Trying ${source.name}...`)
          
          // Use CORS proxy if needed
          const fetchUrl = source.useProxy 
            ? `https://api.allorigins.win/get?url=${encodeURIComponent(source.url)}`
            : source.url
          
          const response = await fetch(fetchUrl)
          
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`)
          }
          
          // Handle different content types
          const contentType = response.headers.get('content-type')
          let data
          
          if (contentType && contentType.includes('application/json')) {
            const responseData = await response.json()
            
            // Handle proxy response
            if (source.useProxy && responseData.contents) {
              data = JSON.parse(responseData.contents)
            } else {
              data = responseData
            }
            
            // Check if this is a deprecation message
            if (data.message && data.message.includes('deprecated')) {
              console.log(`${source.name} is deprecated:`, data.message)
              continue
            }
          } else if (contentType && contentType.includes('application/rss+xml') || 
                     contentType && contentType.includes('text/xml') ||
                     source.name.includes('RSS')) {
            // Handle RSS feeds
            data = await response.text()
          } else {
            // Try to parse as JSON first, fallback to text
            try {
              data = await response.json()
            } catch {
              data = await response.text()
            }
          }
          
          // Parse the data
          if (typeof source.parser === 'function') {
            newsArray = await source.parser(data)
          } else {
            newsArray = source.parser(data)
          }
          
          if (newsArray && newsArray.length > 0) {
            console.log(`Successfully fetched ${newsArray.length} articles from ${source.name}`)
            break
          }
        } catch (error) {
          console.log(`${source.name} failed:`, error.message)
          lastError = error
          continue
        }
      }
      
      if (newsArray.length > 0) {
        setNews(newsArray)
        setLastUpdated(new Date())
      } else {
        throw new Error(lastError?.message || 'All news sources failed')
      }
    } catch (error) {
      console.error('Error fetching news:', error)
      setError(error.message)
      setNews([])
    } finally {
      setLoading(false)
    }
  }

  // Format date to readable format
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date'
    
    try {
      // Handle different date formats
      let date
      if (typeof dateString === 'number') {
        // Unix timestamp (milliseconds)
        date = new Date(dateString)
      } else if (typeof dateString === 'string') {
        // ISO string or other string format
        date = new Date(dateString)
      } else {
        return 'Invalid date'
      }
      
      const now = new Date()
      const diffInSeconds = Math.floor((now - date) / 1000)
      
      if (diffInSeconds < 60) {
        return 'Just now'
      } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60)
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
      } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600)
        return `${hours} hour${hours > 1 ? 's' : ''} ago`
      } else {
        const days = Math.floor(diffInSeconds / 86400)
        return `${days} day${days > 1 ? 's' : ''} ago`
      }
    } catch (error) {
      console.error('Error formatting date:', error)
      return 'Invalid date'
    }
  }

  // Initial fetch and setup auto-refresh
  useEffect(() => {
    fetchNews()
    
    // Refresh news every 5 minutes
    const interval = setInterval(fetchNews, 300000)
    return () => clearInterval(interval)
  }, [])

  // Loading state
  if (loading && news.length === 0) {
    return (
      <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24', textAlign: 'center', padding: '40px' }}>
        <div style={{ 
          fontSize: 24, 
          marginBottom: 16,
          animation: 'pulse 2s infinite'
        }}>⏳</div>
        <div style={{ color: '#fbbf24', fontSize: 18, fontWeight: 'bold' }}>{t('loading')} {t('latestCryptoNews').toLowerCase()}...</div>
        <div style={{ color: '#ffffff', fontSize: 14, marginTop: 8 }}>{t('fetchingCryptocurrencyPrices')}</div>
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    )
  }

  // Error state
  if (error && news.length === 0) {
    return (
      <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #ef4444', textAlign: 'center', padding: '40px' }}>
        <div style={{ fontSize: 24, marginBottom: 16 }}>⚠️</div>
        <div style={{ color: '#ef4444', fontSize: 18, fontWeight: 'bold' }}>Failed to load news</div>
        <div style={{ color: '#ffffff', fontSize: 14, marginTop: 8, marginBottom: 16 }}>{error}</div>
        <button
          onClick={fetchNews}
          style={{
            backgroundColor: '#ef4444',
            color: '#ffffff',
            border: 'none',
            borderRadius: 6,
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 'bold'
          }}
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      {/* Header */}
      <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #FFD600', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Newspaper size={24} style={{ color: '#FFD600' }} />
            <div>
              <h2 style={{ margin: 0, color: '#FFD600' }}>{t('liveNewsFeed')}</h2>
              <p style={{ margin: '4px 0 0 0', fontSize: 12, color: '#ffffff', opacity: 0.8 }}>
                Powered by CoinStats, CryptoPanic & RSS feeds
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {lastUpdated && (
              <div style={{ fontSize: 12, color: '#ffffff' }}>
                <Clock size={12} style={{ marginRight: 4 }} />
                Updated {formatDate(lastUpdated)}
              </div>
            )}
            <button
              onClick={fetchNews}
              disabled={loading}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                backgroundColor: '#1a1a1a',
                color: '#FFD600',
                border: '1px solid #FFD600',
                borderRadius: 6,
                padding: '6px 12px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: 12,
                fontWeight: 'bold',
                opacity: loading ? 0.6 : 1
              }}
            >
              <RefreshCw size={14} style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }} />
              {loading ? t('loading') : t('refresh')}
            </button>
          </div>
        </div>
      </div>

      {/* News List */}
      <div style={{ 
        display: 'grid', 
        gap: 20,
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
      }}>
        {loading && news.length > 0 ? (
          // Skeleton loading for refresh
          <div style={{ 
            gridColumn: '1 / -1', 
            textAlign: 'center', 
            padding: '20px',
            color: '#fbbf24',
            fontSize: 14
          }}>
            <RefreshCw size={16} style={{ 
              animation: 'spin 1s linear infinite',
              marginRight: 8,
              verticalAlign: 'middle'
            }} />
            Refreshing news...
          </div>
        ) : null}
        
        {news.length === 0 ? (
          <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24', textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: 24, marginBottom: 16 }}>📰</div>
            <div style={{ color: '#fbbf24', fontSize: 18, fontWeight: 'bold' }}>No news available</div>
            <div style={{ color: '#ffffff', fontSize: 14, marginTop: 8 }}>
              No news articles found at the moment.
            </div>
          </div>
        ) : (
          news.map((article, index) => (
            <div
              key={article.id || index}
              className="card"
              style={{
                backgroundColor: '#000000',
                border: '2px solid #FFD600',
                borderRadius: 12,
                padding: 0,
                transition: 'all 0.3s ease',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#ffffff'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(251, 191, 36, 0.3)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#fbbf24'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Article Image */}
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', backgroundColor: '#1a1a1a' }}>
                {article.imgURL ? (
                  <img
                    src={article.imgURL}
                    alt={article.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '10px 10px 0 0'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div 
                  style={{ 
                    display: article.imgURL ? 'none' : 'flex',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1a1a1a',
                    borderRadius: '10px 10px 0 0',
                    color: '#6b7280',
                    fontSize: 48
                  }}
                >
                  📰
                </div>
              </div>

              {/* Article Content */}
              <div style={{ padding: '20px' }}>
                {/* Article Title - Clickable */}
                <h3 style={{ 
                  margin: '0 0 12px 0', 
                  color: '#ffffff', 
                  fontSize: 18,
                  fontWeight: 'bold',
                  lineHeight: 1.4
                }}>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#FFD600',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#ffffff'
                      e.target.style.textDecoration = 'underline'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#FFD600'
                      e.target.style.textDecoration = 'none'
                    }}
                  >
                    {article.title}
                    <ExternalLink size={14} style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                  </a>
                </h3>

                {/* Article Description */}
                {article.description && (
                  <p style={{
                    margin: '0 0 16px 0',
                    color: '#d1d5db',
                    fontSize: 14,
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {article.description}
                  </p>
                )}

                {/* Article Meta */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  marginBottom: '16px',
                  paddingTop: '12px',
                  borderTop: '1px solid #374151'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#6b7280' }}>
                      <Clock size={12} />
                      {formatDate(article.feedDate)}
                    </div>
                    
                    {article.source && (
                      <div style={{ 
                        fontSize: 12, 
                        color: '#FFD600', 
                        fontWeight: 'bold',
                        backgroundColor: '#1a1a1a',
                        padding: '2px 8px',
                        borderRadius: 4
                      }}>
                        {article.source}
                      </div>
                    )}
                  </div>
                </div>

                {/* Read Article Button */}
                {article.link && (
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      backgroundColor: '#FFD600',
                      color: '#000000',
                      border: 'none',
                      borderRadius: 8,
                      padding: '12px 20px',
                      cursor: 'pointer',
                      fontSize: 16,
                      fontWeight: 'bold',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none',
                      width: '100%'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#ffffff'
                      e.target.style.transform = 'translateY(-2px)'
                      e.target.style.boxShadow = '0 8px 20px rgba(251, 191, 36, 0.4)'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#fbbf24'
                      e.target.style.transform = 'translateY(0)'
                      e.target.style.boxShadow = 'none'
                    }}
                  >
                    <ExternalLink size={16} />
                    Read Article
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: '#6b7280' }}>
        News powered by CoinStats, CryptoPanic & RSS feeds • Auto-refreshes every 5 minutes
      </div>
    </div>
  )
}

export default NewsFeed