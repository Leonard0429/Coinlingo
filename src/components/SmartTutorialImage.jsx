import { useState, useEffect } from 'react'

/**
 * SmartTutorialImage Component
 * 
 * A robust tutorial image component with multiple fallback sources
 * that automatically generates relevant images for any tutorial topic.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Lesson title for image matching
 * @param {string} [props.size] - Image height (default: '200px')
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.alt] - Alt text for image
 * @returns {JSX.Element} The SmartTutorialImage component
 */
function SmartTutorialImage({ 
  title = '', 
  size = '200px', 
  className = '', 
  alt = 'Tutorial illustration' 
}) {
  const [currentImageUrl, setCurrentImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [fallbackIndex, setFallbackIndex] = useState(0)
  const [hasError, setHasError] = useState(false)

  // Generate multiple image URLs with different sources
  const generateImageUrls = (topicTitle) => {
    // Create a consistent seed from the title
    const seed = topicTitle.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    // Extract relevant keywords
    const keywords = topicTitle.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 2)
      .slice(0, 2)
      .join(',')
    
    return [
      // Picsum Photos - Most reliable
      `https://picsum.photos/600/400?random=${Math.abs(seed)}`,
      
      // Different Picsum seed
      `https://picsum.photos/600/400?random=${Math.abs(seed + 100)}`,
      
      // Unsplash with crypto keywords
      `https://source.unsplash.com/600x400/?${encodeURIComponent(`${keywords},crypto,blockchain,finance`)}`,
      
      // Unsplash with tech keywords
      `https://source.unsplash.com/600x400/?${encodeURIComponent(`${keywords},technology,business,digital`)}`,
      
      // Generic business/tech image
      `https://source.unsplash.com/600x400/?technology,business,finance`,
      
      // Another Picsum variation
      `https://picsum.photos/600/400?random=${Math.abs(seed + 200)}`
    ]
  }

  useEffect(() => {
    if (title) {
      const imageUrls = generateImageUrls(title)
      setCurrentImageUrl(imageUrls[0])
      setIsLoading(true)
      setHasError(false)
      setFallbackIndex(0)
    }
  }, [title])

  const handleImageError = () => {
    const imageUrls = generateImageUrls(title)
    const nextIndex = fallbackIndex + 1
    
    if (nextIndex < imageUrls.length) {
      console.log(`🔄 Trying fallback ${nextIndex + 1} for "${title}"`)
      setCurrentImageUrl(imageUrls[nextIndex])
      setFallbackIndex(nextIndex)
      setIsLoading(true)
    } else {
      console.log(`❌ All fallbacks failed for "${title}"`)
      setIsLoading(false)
      setHasError(true)
    }
  }

  const handleImageLoad = () => {
    setIsLoading(false)
    setHasError(false)
    if (fallbackIndex > 0) {
      console.log(`✅ Fallback ${fallbackIndex + 1} loaded for "${title}"`)
    }
  }

  return (
    <div 
      style={{ 
        width: '100%', 
        height: size,
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#1a1a1a',
        border: '2px solid #FFD600',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        boxShadow: '0 4px 12px rgba(255, 215, 0, 0.1)'
      }}
      className={className}
    >
      {/* Loading State */}
      {isLoading && (
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a1a1a',
            zIndex: 2
          }}
        >
          <div style={{ 
            color: '#FFD600', 
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '16px',
              height: '16px',
              border: '2px solid #FFD600',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            Loading...
          </div>
        </div>
      )}
      
      {/* Error State - Custom Placeholder */}
      {!isLoading && hasError && (
        <div 
          style={{ 
            color: '#FFD600', 
            fontSize: '14px', 
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '20px',
            textAlign: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <div style={{ 
            fontSize: '48px', 
            opacity: 0.8,
            filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.3))'
          }}>
            📚
          </div>
          <div style={{ 
            fontWeight: 'bold', 
            fontSize: '16px',
            color: '#FFD700'
          }}>
            {title}
          </div>
          <div style={{ 
            fontSize: '12px', 
            opacity: 0.7,
            color: '#FFFFFF'
          }}>
            Tutorial Content
          </div>
        </div>
      )}

      {/* Image */}
      {currentImageUrl && !hasError && (
        <img
          src={currentImageUrl}
          alt={alt}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            aspectRatio: '16/9',
            borderRadius: '10px',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            opacity: isLoading ? 0 : 1
          }}
          className="hover:scale-[1.02]"
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default SmartTutorialImage



