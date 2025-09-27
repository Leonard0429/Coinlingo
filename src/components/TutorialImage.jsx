import StaticTutorialImage from './StaticTutorialImage'

/**
 * TutorialImage Component
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
 * @returns {JSX.Element} The TutorialImage component
 */
function TutorialImage({ 
  title = '', 
  size = '200px', 
  className = '', 
  alt = 'Tutorial concept illustration' 
}) {
  return (
    <StaticTutorialImage 
      title={title}
      size={size}
      alt={alt}
      className={className}
    />
  )
}

export default TutorialImage