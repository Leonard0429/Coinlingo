import { useState, useEffect } from 'react'

/**
 * PexelsImage Component
 * 
 * Features:
 * - Fetches random images from Pexels API
 * - Displays images with proper styling
 * - Handles API failures gracefully
 * - Shows fallback message if image unavailable
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.query - Search query for the image
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.alt] - Alt text for image
 * @returns {JSX.Element} The PexelsImage component
 */
function PexelsImage({ query = 'cryptocurrency', className = '', alt = 'Tutorial image' }) {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true)
        setError(false)

        const apiKey = import.meta.env.VITE_PEXELS_API_KEY
        if (!apiKey || apiKey === 'your_pexels_api_key_here') {
          throw new Error('Pexels API key not configured')
        }

        // Add randomization and digital art filters
        const randomPage = Math.floor(Math.random() * 50) + 1 // Random page 1-50
        const timestamp = Date.now() // Add timestamp for cache busting
        const digitalArtQuery = `${query} digital art illustration futuristic cartoon vector graphic ${timestamp}`
        
        const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(digitalArtQuery)}&per_page=15&page=${randomPage}`, {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          },
          cache: 'no-cache'
        })

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`)
        }

        const data = await response.json()
        
        if (data.photos && data.photos.length > 0) {
          // Shuffle the results for better randomization
          const shuffledPhotos = [...data.photos].sort(() => Math.random() - 0.5)
          // Get a random photo from the shuffled results
          const randomPhoto = shuffledPhotos[Math.floor(Math.random() * shuffledPhotos.length)]
          setImageUrl(randomPhoto.src.large)
        } else {
          throw new Error('No images found')
        }
      } catch (err) {
        console.error('Error fetching Pexels image:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [query])

  if (loading) {
    return (
      <div className={`w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-gray-500 text-sm">Loading image...</div>
      </div>
    )
  }

  if (error || !imageUrl) {
    return (
      <div className={`w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-gray-500 text-sm">Image not available</div>
      </div>
    )
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={`w-full h-48 object-cover rounded-lg ${className}`}
      onError={() => setError(true)}
    />
  )
}

export default PexelsImage
