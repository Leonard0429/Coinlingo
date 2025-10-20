import { useState, useEffect } from 'react'

/**
 * StaticTutorialImage Component
 * 
 * Features:
 * - Multiple fallback image sources (Picsum, Lorem Picsum, Unsplash)
 * - Consistent layout ratio across all tutorial cards
 * - Proper image fitting with object-fit: cover
 * - Error handling with multiple fallbacks
 * - Loading states
 * - Auto-generates relevant placeholder images for missing images
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Lesson title for image matching
 * @param {string} [props.size] - Image height (default: '200px')
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.alt] - Alt text for image
 * @returns {JSX.Element} The StaticTutorialImage component
 */
function StaticTutorialImage({ 
  title = '', 
  size = '200px', 
  className = '', 
  alt = 'Tutorial illustration' 
}) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentImageUrl, setCurrentImageUrl] = useState('')
  const [fallbackIndex, setFallbackIndex] = useState(0)

  // Multiple fallback image sources
  const generateImageUrls = (topicTitle) => {
    const keywords = topicTitle.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 2)
      .slice(0, 2)
      .join(',')
    
    // Create a seed based on the title for consistent images
    const seed = topicTitle.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    const imageUrls = [
      // Picsum Photos - High quality, reliable
      `https://picsum.photos/600/400?random=${Math.abs(seed)}`,
      
      // Lorem Picsum with specific categories
      `https://picsum.photos/600/400?random=${Math.abs(seed + 1)}`,
      
      // Unsplash with crypto/finance keywords
      `https://source.unsplash.com/600x400/?${encodeURIComponent(`${keywords},crypto,blockchain,finance,technology`)}`,
      
      // Unsplash with business/tech keywords
      `https://source.unsplash.com/600x400/?${encodeURIComponent(`${keywords},business,technology,digital,money`)}`,
      
      // Picsum with different seed
      `https://picsum.photos/600/400?random=${Math.abs(seed + 2)}`,
      
      // Generic tech/business image
      `https://source.unsplash.com/600x400/?technology,business,finance`
    ]
    
    return imageUrls
  }

  useEffect(() => {
    const imageUrls = generateImageUrls(title)
    setCurrentImageUrl(imageUrls[0])
    setIsLoading(true)
    setImageError(false)
    setFallbackIndex(0)
  }, [title])

  const handleImageError = () => {
    const imageUrls = generateImageUrls(title)
    const nextIndex = fallbackIndex + 1
    
    if (nextIndex < imageUrls.length) {
      console.log(`📸 Image ${fallbackIndex + 1} failed for "${title}", trying fallback ${nextIndex + 1}...`)
      setCurrentImageUrl(imageUrls[nextIndex])
      setFallbackIndex(nextIndex)
      setIsLoading(true)
    } else {
      // All fallbacks failed, show placeholder
      console.log(`📸 All image fallbacks failed for "${title}"`)
      setIsLoading(false)
      setImageError(true)
    }
  }

  const handleImageLoad = () => {
    setIsLoading(false)
    setImageError(false)
    if (fallbackIndex > 0) {
      console.log(`✅ Fallback image ${fallbackIndex + 1} loaded successfully for "${title}"`)
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
        position: 'relative'
      }}
      className={className}
    >
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
          <div style={{ color: '#FFD600', fontSize: '14px' }}>Loading...</div>
        </div>
      )}
      
      {!isLoading && imageError && (
        <div 
          style={{ 
            color: '#FFD600', 
            fontSize: '14px', 
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '20px',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '32px', opacity: 0.7 }}>📚</div>
          <div style={{ fontWeight: 'bold' }}>{title}</div>
          <div style={{ fontSize: '12px', opacity: 0.8 }}>Tutorial Image</div>
        </div>
      )}

      {currentImageUrl && (
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
            transition: 'transform 0.3s ease',
            opacity: isLoading ? 0 : 1
          }}
          className="hover:scale-[1.02]"
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      )}
    </div>
  )
}

export default StaticTutorialImage
