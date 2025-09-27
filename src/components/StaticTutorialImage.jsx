import { useState } from 'react'
import { getTutorialImageUrl } from '../utils/tutorialImageUrls'

/**
 * StaticTutorialImage Component
 * 
 * Features:
 * - Uses specific image URLs provided by user
 * - Consistent layout ratio across all tutorial cards
 * - Proper image fitting with object-fit: cover
 * - Error handling with fallback
 * - Loading states
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

  // Get the specific image URL for this tutorial topic
  const imageUrl = getTutorialImageUrl(title)

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setImageError(false)
    setIsLoading(false)
  }

  // Show loading state
  if (isLoading) {
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
          justifyContent: 'center'
        }}
        className={className}
      >
        <div style={{ color: '#FFD600', fontSize: '14px' }}>Loading...</div>
      </div>
    )
  }

  // Show error state
  if (imageError) {
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
          justifyContent: 'center'
        }}
        className={className}
      >
        <div style={{ color: '#FFD600', fontSize: '14px' }}>Image not available</div>
      </div>
    )
  }

  // Show the image
  return (
    <div 
      style={{ 
        width: '100%', 
        height: size,
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#1a1a1a',
        border: '2px solid #FFD600'
      }}
      className={className}
    >
      <img
        src={imageUrl}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          aspectRatio: '16/9',
          borderRadius: '10px'
        }}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  )
}

export default StaticTutorialImage
