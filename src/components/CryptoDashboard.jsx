import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, ExternalLink, RefreshCw } from 'lucide-react'

// Crypto Dashboard Component
function CryptoDashboard() {
  const [prices, setPrices] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)

  // Fetch crypto prices from CoinGecko
  const fetchPrices = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
      const data = await response.json()
      setPrices(data)
      setLastUpdated(new Date())
    } catch (error) {
      console.error('Error fetching prices:', error)
    }
  }


  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      await fetchPrices()
      setLoading(false)
    }
    
    loadData()
    
    // Refresh data every 30 seconds
    const interval = setInterval(loadData, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price) => {
    if (price < 1) return `$${price.toFixed(6)}`
    if (price < 100) return `$${price.toFixed(4)}`
    return `$${price.toLocaleString()}`
  }

  const formatChange = (change) => {
    const isPositive = change >= 0
    return (
      <span style={{ color: isPositive ? '#10b981' : '#ef4444' }}>
        {isPositive ? '+' : ''}{change.toFixed(2)}%
      </span>
    )
  }

  const formatMarketCap = (cap) => {
    if (cap >= 1e12) return `$${(cap / 1e12).toFixed(2)}T`
    if (cap >= 1e9) return `$${(cap / 1e9).toFixed(2)}B`
    if (cap >= 1e6) return `$${(cap / 1e6).toFixed(2)}M`
    return `$${cap.toLocaleString()}`
  }

  const getSparklineColor = (sparkline) => {
    if (!sparkline || sparkline.length < 2) return '#6b7280'
    const first = sparkline[0]
    const last = sparkline[sparkline.length - 1]
    return last >= first ? '#10b981' : '#ef4444'
  }

  if (loading) {
    return (
      <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24', textAlign: 'center', padding: '40px' }}>
        <div style={{ fontSize: 24, marginBottom: 16 }}>⏳</div>
        <div style={{ color: '#fbbf24', fontSize: 18, fontWeight: 'bold' }}>Loading Live Crypto Data...</div>
        <div style={{ color: '#ffffff', fontSize: 14, marginTop: 8 }}>Fetching cryptocurrency prices</div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <TrendingUp size={24} style={{ color: '#fbbf24' }} />
            <h2 style={{ margin: 0, color: '#fbbf24' }}>Live Crypto Dashboard</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {lastUpdated && (
              <div style={{ fontSize: 12, color: '#ffffff' }}>
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
            )}
            <button
              onClick={() => {
                setLoading(true)
                fetchPrices().then(() => setLoading(false))
              }}
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

      {/* Price Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, marginBottom: 24 }}>
        {prices.slice(0, 12).map((coin) => (
          <div
            key={coin.id}
            className="card"
            style={{
              backgroundColor: '#000000',
              border: '2px solid #fbbf24',
              padding: 16,
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#ffffff'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#fbbf24'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {/* Coin Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: 32, height: 32, borderRadius: '50%' }}
                />
                <div>
                  <div style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 14 }}>
                    {coin.symbol.toUpperCase()}
                  </div>
                  <div style={{ color: '#6b7280', fontSize: 12 }}>
                    {coin.name}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold', color: '#fbbf24', fontSize: 16 }}>
                  {formatPrice(coin.current_price)}
                </div>
                <div style={{ fontSize: 12 }}>
                  {formatChange(coin.price_change_percentage_24h)}
                </div>
              </div>
            </div>

            {/* Mini Chart */}
            {coin.sparkline_in_7d && (
              <div style={{ marginBottom: 12 }}>
                <svg width="100%" height="40" style={{ border: '1px solid #1a1a1a', borderRadius: 4 }}>
                  <polyline
                    points={coin.sparkline_in_7d.price.map((price, index) => 
                      `${(index / (coin.sparkline_in_7d.price.length - 1)) * 100},${40 - ((price - Math.min(...coin.sparkline_in_7d.price)) / (Math.max(...coin.sparkline_in_7d.price) - Math.min(...coin.sparkline_in_7d.price))) * 40}`
                    ).join(' ')}
                    fill="none"
                    stroke={getSparklineColor(coin.sparkline_in_7d.price)}
                    strokeWidth="2"
                  />
                </svg>
              </div>
            )}

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 11 }}>
              <div>
                <div style={{ color: '#6b7280' }}>Market Cap</div>
                <div style={{ color: '#ffffff', fontWeight: 'bold' }}>
                  {formatMarketCap(coin.market_cap)}
                </div>
              </div>
              <div>
                <div style={{ color: '#6b7280' }}>24h Volume</div>
                <div style={{ color: '#ffffff', fontWeight: 'bold' }}>
                  {formatMarketCap(coin.total_volume)}
                </div>
              </div>
              <div>
                <div style={{ color: '#6b7280' }}>1h Change</div>
                <div style={{ fontWeight: 'bold' }}>
                  {formatChange(coin.price_change_percentage_1h_in_currency)}
                </div>
              </div>
              <div>
                <div style={{ color: '#6b7280' }}>7d Change</div>
                <div style={{ fontWeight: 'bold' }}>
                  {formatChange(coin.price_change_percentage_7d_in_currency)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CryptoDashboard
