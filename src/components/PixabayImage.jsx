import { useState, useEffect } from 'react'

// Global set to track used image URLs
const usedImageUrls = new Set()

// Function to reset used images (useful for testing or when you want to start fresh)
export const resetUsedImages = () => {
  usedImageUrls.clear()
}

// Function to get count of used images (for debugging)
export const getUsedImageCount = () => {
  return usedImageUrls.size
}

// Function to force refresh and get a completely new image
export const forceImageRefresh = () => {
  usedImageUrls.clear()
  // Trigger a page reload to get fresh images
  window.location.reload()
}

/**
 * PixabayImage Component
 * 
 * Features:
 * - Fetches images from Pixabay API
 * - Displays images with proper styling
 * - Handles API failures gracefully
 * - Shows fallback if no images found
 * - Prevents duplicate images from being used
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.query - Search query for the image
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.alt] - Alt text for image
 * @returns {JSX.Element} The PixabayImage component
 */
function PixabayImage({ query = 'crypto', className = '', alt = 'Tutorial image' }) {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true)
        setError(false)

        const apiKey = import.meta.env.VITE_PIXABAY_API_KEY
        if (!apiKey || apiKey === 'your_real_key_here') {
          throw new Error('Pixabay API key not configured')
        }

        // Add randomization and digital art filters
        const randomPage = Math.floor(Math.random() * 20) + 1 // Random page 1-20
        const timestamp = Date.now() // Add timestamp for cache busting
        const digitalArtQuery = `${query} digital art illustration futuristic cartoon vector graphic ${timestamp}`
        const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(digitalArtQuery)}&image_type=photo&category=digital-art&per_page=20&page=${randomPage}&safesearch=true&order=popular`, {
          cache: 'no-cache',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        })

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`)
        }

        const data = await response.json()
        
        if (data.hits && data.hits.length > 0) {
          // Shuffle the results for better randomization
          const shuffledHits = [...data.hits].sort(() => Math.random() - 0.5)
          
          // Find an unused image from the shuffled results
          let selectedImage = null
          for (const hit of shuffledHits) {
            if (!usedImageUrls.has(hit.webformatURL)) {
              selectedImage = hit.webformatURL
              usedImageUrls.add(hit.webformatURL)
              break
            }
          }
          
          if (selectedImage) {
            setImageUrl(selectedImage)
          } else {
            // If all images are used, pick a random one and add it to used set
            const randomHit = shuffledHits[Math.floor(Math.random() * shuffledHits.length)]
            setImageUrl(randomHit.webformatURL)
            usedImageUrls.add(randomHit.webformatURL)
          }
        } else {
          throw new Error('No images found')
        }
      } catch (err) {
        console.error('Error fetching Pixabay image:', err)
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

export default PixabayImage
