import { useState, useEffect } from 'react'
import { getCryptoImageUrl, getPlaceholderStyle, isValidImageUrl } from '../utils/cryptoImages'

/**
 * CryptoImage Component
 * 
 * Features:
 * - Dynamically loads crypto-related images based on topic content
 * - Graceful fallback to placeholder if image fails to load
 * - Responsive sizing with rounded corners
 * - Error handling and loading states
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Topic title for image matching
 * @param {string} [props.content] - Topic content for image matching
 * @param {string} [props.size] - Image height (default: '200px')
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.alt] - Alt text for image
 * @returns {JSX.Element} The CryptoImage component
 */
function CryptoImage({ 
  title = '', 
  content = '', 
  size = '200px', 
  className = '', 
  alt = 'Crypto topic illustration' 
}) {
  const [imageUrl, setImageUrl] = useState('')
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadImage = async () => {
      setIsLoading(true)
      setImageError(false)
      
      try {
        // Get the appropriate image URL based on topic content
        const url = getCryptoImageUrl(title, content)
        setImageUrl(url)
        
        // Verify the image URL is valid
        const isValid = await isValidImageUrl(url)
        if (!isValid) {
          setImageError(true)
        }
      } catch (error) {
        console.error('Error loading crypto image:', error)
        setImageError(true)
      } finally {
        setIsLoading(false)
      }
    }

    loadImage()
  }, [title, content])

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setImageError(false)
    setIsLoading(false)
  }

  // Show placeholder if image failed to load or is still loading
  if (isLoading || imageError || !imageUrl) {
    return (
      <div 
        style={getPlaceholderStyle('CoinLingo', size)}
        className={className}
      >
        {isLoading ? 'Loading...' : 'CoinLingo'}
      </div>
    )
  }

  return (
    <div 
      style={{ 
        width: '100%', 
        height: size,
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
          borderRadius: '10px'
        }}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  )
}

export default CryptoImage

