import SmartTutorialImage from './SmartTutorialImage'

/**
 * TutorialImage Component
 * 
 * Features:
 * - Multiple fallback image sources (Picsum, Unsplash)
 * - Consistent layout ratio across all tutorial cards
 * - Proper image fitting with object-fit: cover
 * - Robust error handling with multiple fallbacks
 * - Loading states with spinner
 * - Auto-generates relevant images for any topic
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Lesson title for image matching
 * @param {string} [props.size] - Image height (default: '200px')
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.alt] - Alt text for image
 * @returns {JSX.Element} The TutorialImage component
 */
function TutorialImage({ 
  title = '', 
  size = '200px', 
  className = '', 
  alt = 'Tutorial concept illustration' 
}) {
  return (
    <SmartTutorialImage 
      title={title}
      size={size}
      alt={alt}
      className={className}
    />
  )
}

export default TutorialImage