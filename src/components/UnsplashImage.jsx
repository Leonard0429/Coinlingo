import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * UnsplashImage Component
 * 
 * Features:
 * - Fetches random images from Unsplash API based on query
 * - Displays loading state while fetching
 * - Handles errors gracefully with fallback
 * - Uses landscape orientation for tutorial cards
 * - Responsive design with Tailwind classes
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.query - Search query for Unsplash API
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.alt] - Alt text for image
 * @returns {JSX.Element} The UnsplashImage component
 */
function UnsplashImage({ 
  query = 'cryptocurrency', 
  className = '', 
  alt = 'Tutorial cover image' 
}) {
  const [imageUrl, setImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Unsplash Access Key - you'll need to replace this with your actual key
  const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY_HERE'

  useEffect(() => {
    const fetchImage = async () => {
      if (!UNSPLASH_ACCESS_KEY || UNSPLASH_ACCESS_KEY === 'YOUR_UNSPLASH_ACCESS_KEY_HERE') {
        console.warn('Unsplash Access Key not configured. Using placeholder.')
        setError(true)
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        setError(false)

        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            query: query,
            orientation: 'landscape',
            w: 400,
            h: 225
          },
          headers: {
            'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
          }
        })

        if (response.data && response.data.urls && response.data.urls.regular) {
          setImageUrl(response.data.urls.regular)
        } else {
          setError(true)
        }
      } catch (error) {
        console.error('Error fetching Unsplash image:', error)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchImage()
  }, [query])

  if (isLoading) {
    return (
      <div className={`w-full h-64 bg-gray-800 rounded-xl shadow-lg flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400 mx-auto mb-2"></div>
          <p className="text-white text-sm">Loading image...</p>
        </div>
      </div>
    )
  }

  if (error || !imageUrl) {
    return (
      <div className={`w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-black font-bold text-xl">C</span>
          </div>
          <p className="text-white text-sm">CoinLingo</p>
        </div>
      </div>
    )
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={`w-full h-64 object-cover rounded-xl shadow-lg ${className}`}
      onError={() => setError(true)}
    />
  )
}

export default UnsplashImage
