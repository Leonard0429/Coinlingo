import { useState, useEffect } from 'react'
import { Newspaper, ExternalLink, RefreshCw, Clock, Tag } from 'lucide-react'
import Parser from 'rss-parser'

// News Dashboard Component
function NewsDashboard() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All News', emoji: '📰' },
    { id: 'bitcoin', name: 'Bitcoin', emoji: '₿' },
    { id: 'ethereum', name: 'Ethereum', emoji: 'Ξ' },
    { id: 'defi', name: 'DeFi', emoji: '🏦' },
    { id: 'nft', name: 'NFTs', emoji: '🎨' },
    { id: 'regulation', name: 'Regulation', emoji: '⚖️' },
    { id: 'technology', name: 'Technology', emoji: '🔧' },
    { id: 'market', name: 'Market', emoji: '📈' }
  ]

  // Format URL to handle relative URLs from different sources
  const formatUrl = (url, source) => {
    if (!url || url === '#') return '#'
    
    // If URL already starts with http, return as is
    if (url.startsWith('http')) return url
    
    // Map relative URLs to full URLs based on source
    const baseUrls = {
      'CoinTelegraph': 'https://cointelegraph.com',
      'CoinDesk': 'https://www.coindesk.com',
      'GNews': 'https://gnews.io',
      'CoinGecko': 'https://www.coingecko.com',
      'CoinPaprika': 'https://coinpaprika.com',
      'Binance': 'https://www.binance.com',
      'Ethereum.org': 'https://ethereum.org',
      'OpenSea': 'https://opensea.io',
      'Decrypt': 'https://decrypt.co',
      'The Block': 'https://www.theblock.co',
      'CryptoSlate': 'https://cryptoslate.com',
      'Bitcoin.com': 'https://news.bitcoin.com',
      'CryptoNews': 'https://cryptonews.com',
      'U.Today': 'https://u.today',
      'BeInCrypto': 'https://beincrypto.com'
    }
    
    const baseUrl = baseUrls[source] || 'https://cointelegraph.com'
    
    // Ensure the relative URL starts with /
    const relativeUrl = url.startsWith('/') ? url : `/${url}`
    
    return `${baseUrl}${relativeUrl}`
  }

  // Fetch RSS feeds for reliable article URLs
  const fetchRSSFeeds = async () => {
    const parser = new Parser()
    const rssPromises = [
      // CoinTelegraph RSS - Most reliable source
      parser.parseURL('https://cointelegraph.com/rss').then(feed => ({
        source: 'CoinTelegraph',
        articles: feed.items.slice(0, 15).map(item => ({
          title: item.title,
          description: item.contentSnippet || item.content || '',
          url: item.link,
          publishedAt: item.pubDate,
          urlToImage: item.enclosure?.url || '',
          source: 'CoinTelegraph'
        }))
      })).catch(() => null),
      
      // CoinDesk RSS - Second most reliable source
      parser.parseURL('https://www.coindesk.com/arc/outboundfeeds/rss/').then(feed => ({
        source: 'CoinDesk',
        articles: feed.items.slice(0, 15).map(item => ({
          title: item.title,
          description: item.contentSnippet || item.content || '',
          url: item.link,
          publishedAt: item.pubDate,
          urlToImage: item.enclosure?.url || '',
          source: 'CoinDesk'
        }))
      })).catch(() => null),
      
      // Additional reliable crypto RSS sources
      parser.parseURL('https://decrypt.co/feed').then(feed => ({
        source: 'Decrypt',
        articles: feed.items.slice(0, 10).map(item => ({
          title: item.title,
          description: item.contentSnippet || item.content || '',
          url: item.link,
          publishedAt: item.pubDate,
          urlToImage: item.enclosure?.url || '',
          source: 'Decrypt'
        }))
      })).catch(() => null),
      
      parser.parseURL('https://www.theblock.co/rss.xml').then(feed => ({
        source: 'The Block',
        articles: feed.items.slice(0, 10).map(item => ({
          title: item.title,
          description: item.contentSnippet || item.content || '',
          url: item.link,
          publishedAt: item.pubDate,
          urlToImage: item.enclosure?.url || '',
          source: 'The Block'
        }))
      })).catch(() => null),
      
      parser.parseURL('https://cryptoslate.com/feed/').then(feed => ({
        source: 'CryptoSlate',
        articles: feed.items.slice(0, 8).map(item => ({
          title: item.title,
          description: item.contentSnippet || item.content || '',
          url: item.link,
          publishedAt: item.pubDate,
          urlToImage: item.enclosure?.url || '',
          source: 'CryptoSlate'
        }))
      })).catch(() => null)
    ]

    const rssResults = await Promise.allSettled(rssPromises)
    let rssNews = []
    
    rssResults.forEach(result => {
      if (result.status === 'fulfilled' && result.value) {
        rssNews = [...rssNews, ...result.value.articles.map(article => ({
          ...article,
          url: formatUrl(article.url, article.source),
          category: categorizeNews(article.title + ' ' + (article.description || ''))
        }))]
      }
    })

    return rssNews
  }

  // Fetch crypto news from multiple sources
  const fetchNews = async () => {
    setLoading(true)
    try {
      // Fetch RSS feeds first (most reliable URLs)
      const rssNews = await fetchRSSFeeds()
      
      // Try additional API sources as backup
      const newsPromises = [
        // GNews API (free tier available)
        fetch('https://gnews.io/api/v4/search?q=cryptocurrency&token=demo&lang=en&country=us&max=10').then(res => res.json()).catch(() => null),
        // CoinGecko News API
        fetch('https://api.coingecko.com/api/v3/news').then(res => res.json()).catch(() => null),
        // Alternative news source
        fetch('https://api.coinpaprika.com/v1/coins/bitcoin-bitcoin/news').then(res => res.json()).catch(() => null)
      ]

      const results = await Promise.allSettled(newsPromises)
      
      // Start with RSS news (most reliable URLs)
      let allNews = [...rssNews]
      
      // Add API results as backup, but prioritize RSS sources
      results.forEach((result, index) => {
        if (result.status === 'fulfilled' && result.value) {
          if (index === 0 && result.value.articles) {
            // GNews API format
            const apiNews = result.value.articles.map(article => {
              const source = article.source?.name || 'GNews'
              return {
                title: article.title,
                description: article.description,
                url: formatUrl(article.url, source),
                publishedAt: article.publishedAt,
                urlToImage: article.image,
                category: categorizeNews(article.title + ' ' + (article.description || '')),
                source: source
              }
            })
            
            // Only add API news if we don't already have similar articles from RSS
            const newApiNews = apiNews.filter(apiArticle => 
              !allNews.some(rssArticle => 
                rssArticle.title.toLowerCase().includes(apiArticle.title.toLowerCase().substring(0, 30)) ||
                apiArticle.title.toLowerCase().includes(rssArticle.title.toLowerCase().substring(0, 30))
              )
            )
            allNews = [...allNews, ...newApiNews]
            
          } else if (index === 1 && result.value.data) {
            // CoinGecko format
            const apiNews = result.value.data.map(article => ({
              title: article.title,
              description: article.description,
              url: formatUrl(article.url, 'CoinGecko'),
              publishedAt: article.updated_at,
              urlToImage: article.thumb_2x,
              category: categorizeNews(article.title + ' ' + (article.description || '')),
              source: 'CoinGecko'
            }))
            
            // Only add if not already covered by RSS
            const newApiNews = apiNews.filter(apiArticle => 
              !allNews.some(existingArticle => 
                existingArticle.title.toLowerCase().includes(apiArticle.title.toLowerCase().substring(0, 30))
              )
            )
            allNews = [...allNews, ...newApiNews]
            
          } else if (index === 2 && Array.isArray(result.value)) {
            // CoinPaprika format
            const apiNews = result.value.map(article => ({
              title: article.title,
              description: article.text,
              url: formatUrl(article.url, 'CoinPaprika'),
              publishedAt: article.date,
              urlToImage: article.thumbnail,
              category: categorizeNews(article.title + ' ' + (article.text || '')),
              source: 'CoinPaprika'
            }))
            
            // Only add if not already covered by RSS
            const newApiNews = apiNews.filter(apiArticle => 
              !allNews.some(existingArticle => 
                existingArticle.title.toLowerCase().includes(apiArticle.title.toLowerCase().substring(0, 30))
              )
            )
            allNews = [...allNews, ...newApiNews]
          }
        }
      })

      // If no news from APIs, use fallback data
      if (allNews.length === 0) {
        allNews = getFallbackNews()
      }

      // Remove duplicates, prioritizing RSS sources over API sources
      const uniqueNews = allNews.filter((article, index, self) => {
        const existingIndex = self.findIndex(a => 
          a.title.toLowerCase().trim() === article.title.toLowerCase().trim()
        )
        
        if (existingIndex === -1) return true
        if (existingIndex === index) return true
        
        // If we have a duplicate, prefer RSS sources over API sources
        const existing = self[existingIndex]
        const rssSources = ['CoinTelegraph', 'CoinDesk', 'Decrypt', 'The Block', 'CryptoSlate']
        const currentIsRSS = rssSources.includes(article.source)
        const existingIsRSS = rssSources.includes(existing.source)
        
        if (currentIsRSS && !existingIsRSS) {
          // Replace API result with RSS result
          self[existingIndex] = article
          return false
        }
        
        return existingIndex === index
      }).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))

      setNews(uniqueNews)
      setLastUpdated(new Date())
    } catch (error) {
      console.error('Error fetching news:', error)
      setNews(getFallbackNews())
    } finally {
      setLoading(false)
    }
  }

  // Categorize news based on keywords
  const categorizeNews = (text) => {
    const lowerText = text.toLowerCase()
    
    if (lowerText.includes('bitcoin') || lowerText.includes('btc')) return 'bitcoin'
    if (lowerText.includes('ethereum') || lowerText.includes('eth')) return 'ethereum'
    if (lowerText.includes('defi') || lowerText.includes('decentralized finance')) return 'defi'
    if (lowerText.includes('nft') || lowerText.includes('non-fungible')) return 'nft'
    if (lowerText.includes('regulation') || lowerText.includes('sec') || lowerText.includes('legal')) return 'regulation'
    if (lowerText.includes('technology') || lowerText.includes('blockchain') || lowerText.includes('upgrade')) return 'technology'
    if (lowerText.includes('market') || lowerText.includes('price') || lowerText.includes('trading')) return 'market'
    
    return 'all'
  }

  // Fallback news data with educational content and proper descriptions
  const getFallbackNews = () => {
    const fallbackArticles = [
    {
      title: "Bitcoin Reaches New All-Time High Amid Institutional Adoption",
      description: "Bitcoin continues its upward trajectory as major institutions announce new cryptocurrency investment strategies and regulatory clarity improves.",
      url: "https://cointelegraph.com/news/bitcoin-price-analysis",
      publishedAt: new Date().toISOString(),
      urlToImage: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=200&fit=crop",
      category: 'bitcoin',
      source: 'CoinTelegraph'
    },
    {
      title: "Ethereum 2.0 Staking Rewards Reach Record Highs",
      description: "Ethereum's transition to proof-of-stake continues to attract validators as staking rewards remain attractive despite network upgrades.",
      url: "https://www.coindesk.com/tech/ethereum-staking-update",
      publishedAt: new Date(Date.now() - 3600000).toISOString(),
      urlToImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
      category: 'ethereum',
      source: 'CoinDesk'
    },
    {
      title: "Major NFT Collection Sells for $2.3 Million at Christie's",
      description: "Digital art continues to gain mainstream acceptance as traditional auction houses embrace the NFT marketplace with record-breaking sales.",
      url: "https://opensea.io/blog/nft-marketplace-trends",
      publishedAt: new Date(Date.now() - 10800000).toISOString(),
      urlToImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop",
      category: 'nft',
      source: 'OpenSea'
    },
    {
      title: "SEC Approves First Bitcoin ETF for Major Exchange",
      description: "Regulatory breakthrough as the Securities and Exchange Commission approves a Bitcoin exchange-traded fund, signaling mainstream adoption.",
      url: "https://cointelegraph.com/news/sec-bitcoin-etf-approval",
      publishedAt: new Date(Date.now() - 14400000).toISOString(),
      urlToImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop",
      category: 'regulation',
      source: 'CoinTelegraph'
    },
    {
      title: "Ethereum Layer 2 Solutions Reduce Gas Fees by 90%",
      description: "New scaling solutions on Ethereum demonstrate significant improvements in transaction costs and processing speed for decentralized applications.",
      url: "https://ethereum.org/en/layer-2/",
      publishedAt: new Date(Date.now() - 18000000).toISOString(),
      urlToImage: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=400&h=200&fit=crop",
      category: 'technology',
      source: 'Ethereum.org'
    },
    {
      title: "DeFi Total Value Locked Surpasses $200 Billion",
      description: "Decentralized finance protocols continue to attract capital as yield farming and liquidity mining strategies evolve in the crypto ecosystem.",
      url: "https://www.coindesk.com/markets/defi-tvl-milestone",
      publishedAt: new Date(Date.now() - 21600000).toISOString(),
      urlToImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
      category: 'defi',
      source: 'CoinDesk'
    },
    {
      title: "Binance Launches New Crypto Education Platform",
      description: "Leading cryptocurrency exchange expands its educational offerings with comprehensive courses on blockchain technology and trading strategies.",
      url: "https://www.binance.com/en/news/binance-education-platform",
      publishedAt: new Date(Date.now() - 25200000).toISOString(),
      urlToImage: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=200&fit=crop",
      category: 'market',
      source: 'Binance'
    },
    {
      title: "Central Banks Accelerate Digital Currency Development",
      description: "Multiple central banks worldwide announce pilot programs for central bank digital currencies, signaling a shift toward digital monetary systems.",
      url: "https://cointelegraph.com/news/cbdc-development-update",
      publishedAt: new Date(Date.now() - 28800000).toISOString(),
      urlToImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=200&fit=crop",
      category: 'regulation',
      source: 'CoinTelegraph'
    },
    {
      title: "Blockchain Gaming Revenue Hits $4.5 Billion in Q4",
      description: "Play-to-earn gaming models continue to drive adoption as blockchain-based games attract millions of players and generate significant revenue.",
      url: "https://ethereum.org/en/developers/docs/gaming/",
      publishedAt: new Date(Date.now() - 32400000).toISOString(),
      urlToImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
      category: 'technology',
      source: 'Ethereum.org'
    }
    ]
    
    // Format URLs in fallback data to ensure consistency
    return fallbackArticles.map(article => ({
      ...article,
      url: formatUrl(article.url, article.source)
    }))
  }

  useEffect(() => {
    fetchNews()
    
    // Refresh news every 5 minutes
    const interval = setInterval(fetchNews, 300000)
    return () => clearInterval(interval)
  }, [])

  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(article => article.category === selectedCategory)

  const formatTimeAgo = (dateString) => {
    const now = new Date()
    const articleDate = new Date(dateString)
    const diffInMinutes = Math.floor((now - articleDate) / (1000 * 60))
    
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
    return `${Math.floor(diffInMinutes / 1440)}d ago`
  }

  if (loading) {
    return (
      <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24', textAlign: 'center', padding: '40px' }}>
        <div style={{ fontSize: 24, marginBottom: 16 }}>⏳</div>
        <div style={{ color: '#fbbf24', fontSize: 18, fontWeight: 'bold' }}>Loading Latest News...</div>
        <div style={{ color: '#ffffff', fontSize: 14, marginTop: 8 }}>Fetching cryptocurrency news from multiple sources</div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Newspaper size={24} style={{ color: '#fbbf24' }} />
            <div>
              <h2 style={{ margin: 0, color: '#fbbf24' }}>Live Crypto News Dashboard</h2>
              <p style={{ margin: '4px 0 0 0', fontSize: 12, color: '#ffffff', opacity: 0.8 }}>
                Educational links to trusted cryptocurrency news sources
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {lastUpdated && (
              <div style={{ fontSize: 12, color: '#ffffff' }}>
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
            )}
            <button
              onClick={fetchNews}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                backgroundColor: '#fbbf24',
                color: '#000000',
                border: 'none',
                borderRadius: 8,
                padding: '8px 12px',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            >
              <RefreshCw size={14} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <Tag size={18} style={{ color: '#fbbf24' }} />
          <h3 style={{ margin: 0, color: '#fbbf24', fontSize: 16 }}>Filter by Category</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 12px',
                backgroundColor: selectedCategory === category.id ? '#fbbf24' : '#1a1a1a',
                color: selectedCategory === category.id ? '#000000' : '#ffffff',
                border: '1px solid #fbbf24',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 'bold',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                if (selectedCategory !== category.id) {
                  e.target.style.backgroundColor = '#fbbf24'
                  e.target.style.color = '#000000'
                }
              }}
              onMouseOut={(e) => {
                if (selectedCategory !== category.id) {
                  e.target.style.backgroundColor = '#1a1a1a'
                  e.target.style.color = '#ffffff'
                }
              }}
            >
              <span>{category.emoji}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div style={{ display: 'grid', gap: 16 }}>
        {filteredNews.map((article, index) => (
          <div
            key={index}
            className="card"
            style={{
              backgroundColor: '#000000',
              border: '2px solid #fbbf24',
              padding: 20,
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              position: 'relative'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#ffffff'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(251, 191, 36, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#fbbf24'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            onClick={() => {
              if (article.url && article.url !== '#') {
                window.open(article.url, '_blank', 'noopener,noreferrer')
              }
            }}
          >
            {/* Click Indicator */}
            <div style={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: '#fbbf24',
              color: '#000000',
              padding: '4px 8px',
              borderRadius: 4,
              fontSize: 10,
              fontWeight: 'bold',
              opacity: 0.8
            }}>
              VISIT SOURCE
            </div>
            
            <div style={{ display: 'flex', gap: 16 }}>
              {/* Article Image */}
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  style={{
                    width: 200,
                    height: 120,
                    objectFit: 'cover',
                    borderRadius: 8,
                    border: '1px solid #fbbf24'
                  }}
                />
              )}
              
              {/* Article Content */}
              <div style={{ flex: 1 }}>
                {/* Article Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      backgroundColor: '#1a1a1a', 
                      borderRadius: 4, 
                      fontSize: 10, 
                      color: '#fbbf24',
                      border: '1px solid #fbbf24'
                    }}>
                      {categories.find(cat => cat.id === article.category)?.emoji} {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                    <span style={{ 
                      padding: '4px 8px', 
                      backgroundColor: '#1a1a1a', 
                      borderRadius: 4, 
                      fontSize: 10, 
                      color: '#ffffff',
                      border: '1px solid #ffffff'
                    }}>
                      {article.source}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#6b7280' }}>
                    <Clock size={12} />
                    {formatTimeAgo(article.publishedAt)}
                  </div>
                </div>

                {/* Article Title */}
                <h3 style={{ 
                  margin: '0 0 8px 0', 
                  color: '#ffffff', 
                  fontSize: 18,
                  fontWeight: 'bold',
                  lineHeight: 1.3
                }}>
                  {article.title}
                </h3>

                {/* Article Description */}
                <p style={{ 
                  margin: '0 0 12px 0', 
                  color: '#6b7280', 
                  fontSize: 14,
                  lineHeight: 1.5
                }}>
                  {article.description}
                </p>

                {/* Article Footer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: 12, color: '#fbbf24' }}>
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ 
                      fontSize: 10, 
                      color: '#ffffff', 
                      backgroundColor: '#1a1a1a',
                      padding: '4px 8px',
                      borderRadius: 4,
                      border: '1px solid #fbbf24'
                    }}>
                      Click to visit news source
                    </div>
                    {article.url && article.url !== '#' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(article.url, '_blank', 'noopener,noreferrer')
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          color: '#fbbf24',
                          fontSize: 12,
                          fontWeight: 'bold',
                          padding: '6px 12px',
                          backgroundColor: '#1a1a1a',
                          borderRadius: 6,
                          border: '1px solid #fbbf24',
                          transition: 'all 0.2s ease',
                          cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#fbbf24'
                          e.target.style.color = '#000000'
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = '#1a1a1a'
                          e.target.style.color = '#fbbf24'
                        }}
                      >
                        <ExternalLink size={12} />
                        Open Link
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No News Message */}
      {filteredNews.length === 0 && (
        <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24', textAlign: 'center', padding: '40px' }}>
          <div style={{ fontSize: 24, marginBottom: 16 }}>📰</div>
          <div style={{ color: '#fbbf24', fontSize: 18, fontWeight: 'bold' }}>No news found</div>
          <div style={{ color: '#ffffff', fontSize: 14, marginTop: 8 }}>
            No articles found for the selected category. Try selecting a different category.
          </div>
        </div>
      )}
    </div>
  )
}

export default NewsDashboard
