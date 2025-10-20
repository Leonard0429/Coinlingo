import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Shield, 
  DollarSign, 
  TrendingUp, 
  Coins,
  Lock, 
  Unlock,
  Star,
  Trophy,
  ArrowRight,
  CheckCircle,
  Play,
  Award,
  Zap,
  BookOpen,
  Brain,
  Gamepad2,
  Newspaper,
  Clock
} from 'lucide-react'
import { useStore } from '../context/Store.jsx'

function OriginalLearningInterface() {
  const { balance, unlockedTopics, UNLOCK_COST, setActiveTopicIndex, activeTopicIndex, unlockTopic, completedSectionsByTopic, completeSection } = useStore()
  const navigate = useNavigate()
  const [selectedTopic, setSelectedTopic] = useState(0)

  // Updated topics with minty theme
  const BASIC_TOPICS = [
    'Safety First',
    'Money Basics', 
    'Investing & Future',
    'Digital & Crypto',
    'What is Cryptocurrency?',
    'Bitcoin (BTC) Basics',
    'What is Blockchain?',
    'Coins vs Tokens',
    'Market Basics',
    'Wallets & Security',
    'How People Use Crypto'
  ]

  const SECTIONS_PER_TOPIC = 5

  const getTopicIcon = (index) => {
    const icons = ['🛡️', '💰', '📈', '₿', '💎', '₿', '⛓️', '🪙', '📊', '🔐', '⚡']
    return icons[index] || '📚'
  }

  const getTopicProgress = (index) => {
    const completed = completedSectionsByTopic[index] || 0
    const total = SECTIONS_PER_TOPIC
    return { completed, total, percentage: Math.round((completed / total) * 100) }
  }

  const sections = [
    { id: 1, name: 'Tutorial', icon: BookOpen, emoji: '📚', description: 'Learn the basics with interactive flashcards' },
    { id: 2, name: 'Quiz', icon: Brain, emoji: '🧠', description: 'Test your knowledge with multiple choice questions' },
    { id: 3, name: 'Simulation', icon: Gamepad2, emoji: '🎮', description: 'Hands-on experience with interactive games' },
    { id: 4, name: 'News Q&A', icon: Newspaper, emoji: '📰', description: 'Apply knowledge to real-world scenarios' },
    { id: 5, name: 'Claim', icon: Trophy, emoji: '🏆', description: 'Claim your rewards and complete the topic' },
  ]

  function isSectionLocked(sectionId) {
    const completedSections = completedSectionsByTopic[selectedTopic] || 0
    if (sectionId === 1) return false
    return completedSections < sectionId - 1
  }

  const handleTopicSelect = (index) => {
    setSelectedTopic(index)
    setActiveTopicIndex(index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen" style={{ padding: '0' }}>
      
      {/* Main Learning Content */}
      <motion.div 
        className="glass-card"
        style={{ 
          height: 'fit-content', 
          position: 'relative', 
          top: 12,
          padding: '20px'
        }}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <BookOpen size={18} style={{ color: '#FFD700' }} />
          <strong style={{ color: '#FFD700' }}>Learning Interface</strong>
        </div>

        {/* Right Content - Topic Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.div 
            className="glass-card"
            style={{ 
              backgroundColor: '#000000',
              border: '2px solid #FFD700',
              padding: '24px'
            }}
            variants={itemVariants}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: 32 }}>{getTopicIcon(selectedTopic)}</span>
              <h2 style={{ color: '#FFD700', margin: 0, fontSize: '28px', fontWeight: 'bold' }}>
                {BASIC_TOPICS[selectedTopic]}
              </h2>
            </div>

          {!unlockedTopics.has(selectedTopic) && (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <Lock size={48} style={{ color: '#6B7280', marginBottom: 16 }} />
              <p style={{ color: '#FFFFFF', fontSize: 18, marginBottom: 24 }}>
                This topic is locked. Complete previous topics or unlock with {UNLOCK_COST} BTC.
              </p>
              <button 
                className="glass-button"
                onClick={() => unlockTopic(selectedTopic)}
                style={{ 
                  padding: '12px 24px',
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                Unlock Topic ({UNLOCK_COST} BTC)
              </button>
            </div>
          )}

          {unlockedTopics.has(selectedTopic) && (
            <>
              {/* Progress Overview */}
              <div style={{ 
                marginBottom: 24, 
                padding: 20, 
                backgroundColor: '#1a1a1a', 
                borderRadius: 16, 
                border: '1px solid #FFD700' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <h4 style={{ margin: 0, color: '#FFD700', fontSize: 18, fontWeight: 'bold' }}>Progress Overview</h4>
                  <span style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>
                    {completedSectionsByTopic[selectedTopic] || 0}/{SECTIONS_PER_TOPIC} sections completed
                  </span>
                </div>
                <div style={{ 
                  width: '100%', 
                  height: 12, 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: 6,
                  overflow: 'hidden',
                  marginBottom: 12
                }}>
                  <motion.div 
                    style={{ 
                      height: '100%', 
                      background: 'linear-gradient(135deg, #FF6A00, #FFD700)',
                      borderRadius: 6
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${((completedSectionsByTopic[selectedTopic] || 0) / SECTIONS_PER_TOPIC) * 100}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  fontSize: 12,
                  color: '#FFFFFF'
                }}>
                  <span>0%</span>
                  <span>{Math.round(((completedSectionsByTopic[selectedTopic] || 0) / SECTIONS_PER_TOPIC) * 100)}%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Sections */}
              <div style={{ display: 'grid', gap: 16 }}>
                {sections.map((section, sectionIndex) => {
                  const locked = isSectionLocked(section.id)
                  const completed = (completedSectionsByTopic[selectedTopic] || 0) >= section.id
                  
                  return (
                    <motion.div
                      key={section.id}
                      style={{
                        padding: 20,
                        backgroundColor: locked ? '#111111' : completed ? '#1a1a1a' : '#1a1a1a',
                        borderRadius: 16,
                        border: locked ? '2px solid #6B7280' : completed ? '2px solid #FFD700' : '2px solid #FFD700',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: locked ? 'not-allowed' : 'pointer',
                        opacity: locked ? 0.6 : 1
                      }}
                      whileHover={!locked ? { scale: 1.02 } : {}}
                      whileTap={!locked ? { scale: 0.98 } : {}}
                    >
                      {/* Section Number Badge */}
                      <div style={{
                        position: 'absolute',
                        top: -8,
                        left: 16,
                        width: 32,
                        height: 32,
                        backgroundColor: locked ? '#6B7280' : completed ? '#FFD700' : '#FFD700',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: locked ? '#FFFFFF' : '#000000',
                        border: '2px solid rgba(255, 255, 255, 0.2)'
                      }}>
                        {completed ? '✓' : section.id}
                      </div>

                      {/* Status Indicator */}
                      <div style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        fontSize: 20
                      }}>
                        {locked ? '🔒' : completed ? '✅' : '⏳'}
                      </div>

                      {/* Section Content */}
                      <div style={{ marginTop: 16 }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          marginBottom: 12
                        }}>
                          <div style={{
                            fontSize: 32,
                            opacity: locked ? 0.5 : 1
                          }}>
                            {section.emoji}
                          </div>
                          <div>
                            <h3 style={{
                              margin: 0,
                              fontSize: 18,
                              fontWeight: 'bold',
                              color: locked ? '#6B7280' : completed ? '#FFD700' : '#FFFFFF'
                            }}>
                              Section {section.id}: {section.name}
                            </h3>
                            <p style={{
                              margin: '4px 0 0 0',
                              fontSize: 14,
                              color: locked ? '#6B7280' : '#FFFFFF',
                              opacity: 0.8
                            }}>
                              {section.description}
                            </p>
                          </div>
                        </div>

                        {/* Status Text */}
                        <div style={{
                          padding: 12,
                          borderRadius: 8,
                          backgroundColor: locked ? '#2a2a2a' : completed ? '#1a1a1a' : '#1a1a1a',
                          border: locked ? '1px solid #6B7280' : completed ? '1px solid #FFD700' : '1px solid #FFD700',
                          textAlign: 'center'
                        }}>
                          <span style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: locked ? '#6B7280' : completed ? '#FFD700' : '#FFFFFF'
                          }}>
                            {locked ? 'Locked - Complete previous section' : 
                             completed ? 'Completed - Well done!' : 'Available'}
                          </span>
                        </div>

                        {/* Action Button */}
                        {!locked && (
                          <div style={{ marginTop: 12 }}>
                            <Link 
                              to={`/topic/${selectedTopic}/section/${section.id}`}
                              className="glass-button"
                              style={{ 
                                display: 'block',
                                textAlign: 'center',
                                padding: '12px 24px',
                                textDecoration: 'none',
                                fontSize: 16,
                                fontWeight: 'bold'
                              }}
                            >
                              {completed ? 'Review Section' : 'Start Section'}
                              <ArrowRight size={16} style={{ marginLeft: 8 }} />
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </>
          )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default OriginalLearningInterface
