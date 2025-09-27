import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Lock, Unlock, BookOpen, Blocks, Newspaper, Trophy, ArrowRight } from 'lucide-react'
import { StoreProvider, useStore } from './context/Store.jsx'
import { TOPIC_CONTENT } from './store.js'
import CryptoDashboard from './components/CryptoDashboard.jsx'
import NewsFeed from './components/NewsFeed.jsx'
import About from './components/About.jsx'
import Logo from './components/Logo.jsx'
import CryptoImage from './components/CryptoImage.jsx'
import TutorialImage from './components/TutorialImage.jsx'
import './App.css'


function Layout({ children }) {
  const { balance, notifications, streak, achievements, resetProgress, getLastSavedTime, restoreFromBackup } = useStore()
  const [lastSaved, setLastSaved] = useState(null)
  
  // Update last saved time every 5 seconds
  useEffect(() => {
    const updateLastSaved = () => {
      const saved = getLastSavedTime()
      if (saved) setLastSaved(saved)
    }
    updateLastSaved()
    const interval = setInterval(updateLastSaved, 5000)
    return () => clearInterval(interval)
  }, [getLastSavedTime])
  return (
    <div>
      {/* Enhanced Header */}
      <div className="card" style={{ 
        marginBottom: 16, 
        backgroundColor: '#000000', 
        border: '2px solid #fbbf24',
        padding: '20px 24px'
      }}>
        {/* Top Row - Logo and Navigation */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: 16
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              padding: '8px 16px',
              backgroundColor: '#1a1a1a',
              borderRadius: 12,
              border: '1px solid #fbbf24'
            }}>
              <div style={{ 
                width: 32, 
                height: 32, 
                backgroundColor: '#fbbf24', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000000'
              }}>
                ₿
              </div>
              <h1 style={{ margin: 0, color: '#fbbf24', fontSize: 24, fontWeight: 'bold' }}>
                CoinLingo
              </h1>
            </div>
            <Link 
              to="/" 
              style={{ 
                fontSize: 14, 
                color: '#ffffff', 
                textDecoration: 'none',
                padding: '6px 12px',
                backgroundColor: '#1a1a1a',
                borderRadius: 8,
                border: '1px solid #fbbf24',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#fbbf24'
                e.target.style.color = '#000000'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#1a1a1a'
                e.target.style.color = '#ffffff'
              }}
            >
              🏠 Home
            </Link>
            <Link 
              to="/crypto" 
              style={{ 
                fontSize: 14, 
                color: '#ffffff', 
                textDecoration: 'none',
                padding: '6px 12px',
                backgroundColor: '#1a1a1a',
                borderRadius: 8,
                border: '1px solid #fbbf24',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#fbbf24'
                e.target.style.color = '#000000'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#1a1a1a'
                e.target.style.color = '#ffffff'
              }}
            >
              📈 Live Crypto
            </Link>
            
            <Link 
              to="/news" 
              style={{ 
                fontSize: 14, 
                color: '#ffffff', 
                textDecoration: 'none',
                padding: '6px 12px',
                backgroundColor: '#1a1a1a',
                borderRadius: 8,
                border: '1px solid #fbbf24',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#fbbf24'
                e.target.style.color = '#000000'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#1a1a1a'
                e.target.style.color = '#ffffff'
              }}
            >
              📰 Live News
            </Link>
            
            <Link 
              to="/about" 
              style={{ 
                fontSize: 14, 
                color: '#ffffff', 
                textDecoration: 'none',
                padding: '6px 12px',
                backgroundColor: '#1a1a1a',
                borderRadius: 8,
                border: '1px solid #fbbf24',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#fbbf24'
                e.target.style.color = '#000000'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#1a1a1a'
                e.target.style.color = '#ffffff'
              }}
            >
              ℹ️ About
            </Link>
          </div>
        </div>

        {/* Bottom Row - Stats and Actions */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: 16,
          alignItems: 'center'
        }}>
          {/* Balance Card */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 12,
            padding: '12px 16px',
            backgroundColor: '#1a1a1a',
            borderRadius: 10,
            border: '1px solid #fbbf24'
          }}>
            <div style={{ 
              width: 40, 
              height: 40, 
              backgroundColor: '#fbbf24', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000000'
            }}>
              💰
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#ffffff', marginBottom: 2 }}>Balance</div>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: '#fbbf24' }}>{balance} BTC</div>
            </div>
          </div>

          {/* Streak Card */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 12,
            padding: '12px 16px',
            backgroundColor: '#1a1a1a',
            borderRadius: 10,
            border: '1px solid #fbbf24'
          }}>
            <div style={{ 
              width: 40, 
              height: 40, 
              backgroundColor: '#fbbf24', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000000'
            }}>
              🔥
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#ffffff', marginBottom: 2 }}>Streak</div>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: '#fbbf24' }}>{streak} days</div>
            </div>
          </div>

          {/* Save Status Card */}
          {lastSaved && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              padding: '12px 16px',
              backgroundColor: '#1a1a1a',
              borderRadius: 10,
              border: '1px solid #fbbf24'
            }}>
              <div style={{ 
                width: 40, 
                height: 40, 
                backgroundColor: '#fbbf24', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#000000'
              }}>
                💾
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#ffffff', marginBottom: 2 }}>Last Saved</div>
                <div style={{ fontSize: 14, fontWeight: 'bold', color: '#fbbf24' }}>{lastSaved}</div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: 8,
            justifyContent: 'flex-end'
          }}>
            <button 
              onClick={restoreFromBackup} 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12, 
                padding: '8px 12px', 
                backgroundColor: '#fbbf24', 
                color: '#000000', 
                border: 'none', 
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#ffffff'
                e.target.style.transform = 'translateY(-1px)'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#fbbf24'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              🔄 Restore
            </button>
            <button 
              onClick={resetProgress}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                backgroundColor: '#ffffff', 
                color: '#000000', 
                border: 'none', 
                borderRadius: 8,
                padding: '8px 12px',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 'bold',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#fbbf24'
                e.target.style.transform = 'translateY(-1px)'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#ffffff'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              🗑️ Reset
            </button>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 16 }}>
        <Sidebar />
      <div>
          {children}
        </div>
      </div>
      {notifications.map((n) => (
        <div key={n.id} className="toast">{n.text}</div>
      ))}
    </div>
  )
}

function Sidebar() {
  const { BASIC_TOPICS, unlockedTopics, UNLOCK_COST, setActiveTopicIndex, activeTopicIndex, unlockTopic, completedSectionsByTopic } = useStore()
  const navigate = useNavigate()
  
  const getTopicIcon = (index) => {
    const icons = ['💰', '₿', '⛓️', '🪙', '📈', '🔒', '🎮']
    return icons[index] || '📚'
  }
  
  const getTopicProgress = (index) => {
    const completed = completedSectionsByTopic[index] || 0
    const total = 5
    return { completed, total, percentage: Math.round((completed / total) * 100) }
  }
  
  return (
    <div className="card" style={{ height: '100%', position: 'sticky', top: 12, backgroundColor: '#000000', border: '2px solid #fbbf24' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <BookOpen size={18} style={{ color: '#fbbf24' }} />
        <strong style={{ color: '#fbbf24' }}>Learning Path</strong>
      </div>
      
      <div style={{ display: 'grid', gap: 8 }}>
        {BASIC_TOPICS.map((name, index) => {
          const unlocked = unlockedTopics.has(index)
          const isActive = index === activeTopicIndex
          const progress = getTopicProgress(index)
          const icon = getTopicIcon(index)
          
          return (
            <div 
              key={index} 
              style={{ 
                padding: 12, 
                backgroundColor: isActive ? '#1a1a1a' : unlocked ? '#1a1a1a' : '#000000',
                borderRadius: 8, 
                border: isActive ? '2px solid #fbbf24' : unlocked ? '1px solid #fbbf24' : '1px solid #6b7280',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => { setActiveTopicIndex(index); navigate(`/topic/${index}`) }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <div>
                    <div style={{ 
                      fontSize: 13, 
                      fontWeight: 'bold', 
                      color: isActive ? '#fbbf24' : unlocked ? '#ffffff' : '#6b7280'
                    }}>
                      {name}
                    </div>
                    {unlocked && (
                      <div style={{ fontSize: 11, color: '#ffffff' }}>
                        {progress.completed}/{progress.total} sections
                      </div>
                    )}
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {unlocked ? (
                    <div style={{ 
                      fontSize: 12, 
                      color: progress.percentage === 100 ? '#fbbf24' : '#ffffff',
                      fontWeight: 'bold'
                    }}>
                      {progress.percentage}%
                    </div>
                  ) : (
                    <button 
                      onClick={(e) => { e.stopPropagation(); unlockTopic(index) }}
                      style={{ 
                        padding: '4px 8px', 
                        fontSize: 11, 
                        backgroundColor: '#fbbf24', 
                        color: '#000000', 
                        border: 'none', 
                        borderRadius: 4,
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                      title={`Unlock (-${UNLOCK_COST} BTC)`}
                    >
                      🔓 {UNLOCK_COST} BTC
                    </button>
                  )}
                </div>
              </div>
              
              {unlocked && (
                <div style={{ marginTop: 8 }}>
                  <div className="progress" style={{ height: 4, backgroundColor: '#000000', border: '1px solid #fbbf24' }}>
                    <span 
                      style={{ 
                        width: `${progress.percentage}%`, 
                        backgroundColor: progress.percentage === 100 ? '#fbbf24' : '#ffffff'
                      }} 
                    />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
      
      {/* Quick Stats */}
      <div style={{ marginTop: 16, padding: 12, backgroundColor: '#1a1a1a', borderRadius: 8, border: '1px solid #fbbf24' }}>
        <div style={{ fontSize: 12, color: '#fbbf24', marginBottom: 8 }}>Progress Overview</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
          <span style={{ color: '#fbbf24' }}>
            ✅ {Object.values(completedSectionsByTopic).reduce((sum, count) => sum + count, 0)} completed
          </span>
          <span style={{ color: '#ffffff' }}>
            🔓 {unlockedTopics.size} unlocked
          </span>
        </div>
      </div>
    </div>
  )
}

function Home() {
  const { BASIC_TOPICS, unlockedTopics, UNLOCK_COST, setActiveTopicIndex, activeTopicIndex, unlockTopic, balance, streak, completedSectionsByTopic } = useStore()
  const navigate = useNavigate()
  
  // Calculate total progress
  const totalSections = BASIC_TOPICS.length * 5
  const completedSections = Object.values(completedSectionsByTopic).reduce((sum, count) => sum + count, 0)
  const progressPercentage = Math.round((completedSections / totalSections) * 100)
  
  return (
    <div>
      {/* Welcome Section */}
      <div className="card" style={{ marginBottom: 16, background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)', border: '2px solid #fbbf24' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <Logo size="48px" />
              <div>
                <h2 style={{ margin: 0, color: '#fbbf24', fontSize: '28px', fontWeight: 'bold' }}>
                  COINLINGO
                </h2>
                <p style={{ margin: '4px 0 0 0', color: '#FFD600', fontSize: '16px', fontWeight: '500' }}>
                  Learn Crypto the Fun Way
                </p>
              </div>
            </div>
            <p style={{ margin: '8px 0 0 0', color: '#ffffff', fontSize: '16px' }}>
              Master cryptocurrency investing through interactive learning
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: '#fbbf24' }}>{balance} BTC</div>
            <div style={{ fontSize: 14, color: '#ffffff' }}>Balance</div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 16 }}>
          <div style={{ textAlign: 'center', padding: 12, backgroundColor: '#000000', borderRadius: 8, border: '1px solid #fbbf24' }}>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: '#fbbf24' }}>{streak}</div>
            <div style={{ fontSize: 12, color: '#ffffff' }}>Day Streak 🔥</div>
          </div>
          <div style={{ textAlign: 'center', padding: 12, backgroundColor: '#000000', borderRadius: 8, border: '1px solid #fbbf24' }}>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: '#fbbf24' }}>{completedSections}</div>
            <div style={{ fontSize: 12, color: '#ffffff' }}>Sections Done</div>
          </div>
          <div style={{ textAlign: 'center', padding: 12, backgroundColor: '#000000', borderRadius: 8, border: '1px solid #fbbf24' }}>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: '#fbbf24' }}>{progressPercentage}%</div>
            <div style={{ fontSize: 12, color: '#ffffff' }}>Progress</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 14, color: '#ffffff' }}>Overall Progress</span>
            <span style={{ fontSize: 14, color: '#ffffff' }}>{completedSections}/{totalSections}</span>
          </div>
          <div className="progress" style={{ height: 8, backgroundColor: '#000000', border: '1px solid #fbbf24' }}>
            <span style={{ width: `${progressPercentage}%`, backgroundColor: '#fbbf24' }} />
          </div>
        </div>
        
        {/* Quick Actions */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button 
            onClick={() => navigate('/topic/0')}
            style={{ 
              padding: '8px 16px', 
              backgroundColor: '#fbbf24', 
              color: '#000000', 
              border: 'none', 
              borderRadius: 6,
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 'bold'
            }}
          >
            📚 Start Learning
          </button>
          <button 
            onClick={() => navigate('/topic/0')}
            style={{ 
              padding: '8px 16px', 
              backgroundColor: '#ffffff', 
              color: '#000000', 
              border: 'none', 
              borderRadius: 6,
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 'bold'
            }}
          >
            🎯 View Topics
          </button>
        </div>
      </div>
      
      {/* Daily Missions - Simplified */}
      <DailyMissions />
    </div>
  )
}

function TopicPage() {
  const { topicIndex } = useParams()
  const index = Number(topicIndex || 0)
  const { BASIC_TOPICS, unlockedTopics, SECTIONS_PER_TOPIC, completedSectionsByTopic, completeSection } = useStore()
  const unlocked = unlockedTopics.has(index)
  const completedSections = completedSectionsByTopic[index] || 0
  
  const sections = [
    { id: 1, name: 'Tutorial', path: `/topic/${index}/section/1`, icon: '📚', description: 'Learn the basics with interactive flashcards' },
    { id: 2, name: 'Quiz', path: `/topic/${index}/section/2`, icon: '🧠', description: 'Test your knowledge with multiple choice questions' },
    { id: 3, name: 'Simulation', path: `/topic/${index}/section/3`, icon: '🎮', description: 'Hands-on experience with interactive games' },
    { id: 4, name: 'News Q&A', path: `/topic/${index}/section/4`, icon: '📰', description: 'Apply knowledge to real-world scenarios' },
    { id: 5, name: 'Claim', path: `/topic/${index}/section/5`, icon: '🏆', description: 'Claim your rewards and complete the topic' },
  ]
  
  function isSectionLocked(sectionId) {
    // Section 1 is always unlocked if topic is unlocked
    if (sectionId === 1) return false
    // Other sections require previous section to be completed
    // If completedSections is 1, then section 2 is unlocked
    // If completedSections is 2, then section 3 is unlocked, etc.
    return completedSections < sectionId - 1
  }
  
  return (
    <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24' }}>
      <h2 style={{ color: '#fbbf24' }}>{BASIC_TOPICS[index]}</h2>
      {!unlocked && <p style={{ color: '#ffffff' }}>This topic is locked. Go back and unlock it.</p>}
      {unlocked && (
        <>
          {/* Progress Overview */}
          <div style={{ 
            marginBottom: 24, 
            padding: 16, 
            backgroundColor: '#1a1a1a', 
            borderRadius: 12, 
            border: '1px solid #fbbf24' 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <h4 style={{ margin: 0, color: '#fbbf24', fontSize: 16 }}>Progress Overview</h4>
              <span style={{ color: '#ffffff', fontSize: 14 }}>
                {completedSections}/{SECTIONS_PER_TOPIC} sections completed
              </span>
            </div>
            <div className="progress" style={{ height: 8, backgroundColor: '#000000', border: '1px solid #fbbf24' }}>
              <span style={{ width: `${(completedSections/SECTIONS_PER_TOPIC)*100}%` }} />
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: 8, 
              fontSize: 12, 
              color: '#ffffff' 
            }}>
              <span>0%</span>
              <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>
                {Math.round((completedSections/SECTIONS_PER_TOPIC)*100)}%
              </span>
              <span>100%</span>
            </div>
          </div>

          {/* Section Cards Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: 16, 
            marginBottom: 24 
          }}>
            {sections.map((section) => {
              const locked = isSectionLocked(section.id)
              const completed = completedSections >= section.id
              const isNext = completedSections === section.id - 1
              
              return (
                <div 
                  key={section.id}
                  style={{
                    padding: 20,
                    backgroundColor: locked ? '#111111' : completed ? '#1a1a1a' : '#1a1a1a',
                    borderRadius: 16,
                    border: locked ? '2px solid #6b7280' : completed ? '2px solid #fbbf24' : '2px solid #fbbf24',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    opacity: locked ? 0.6 : 1
                  }}
                >
                  {/* Section Number Badge */}
                  <div style={{
                    position: 'absolute',
                    top: -8,
                    left: 16,
                    width: 32,
                    height: 32,
                    backgroundColor: locked ? '#6b7280' : completed ? '#fbbf24' : '#fbbf24',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: locked ? '#ffffff' : '#000000',
                    border: '2px solid #000000'
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
                        {section.icon}
                      </div>
      <div>
                        <h3 style={{
                          margin: 0,
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: locked ? '#6b7280' : completed ? '#fbbf24' : '#ffffff'
                        }}>
                          Section {section.id}: {section.name}
                        </h3>
                        <p style={{
                          margin: 4,
                          fontSize: 12,
                          color: locked ? '#6b7280' : '#ffffff',
                          opacity: 0.8
                        }}>
                          {section.description}
                        </p>
      </div>
                    </div>

                    {/* Status Text */}
                    <div style={{
                      padding: 8,
                      borderRadius: 8,
                      backgroundColor: locked ? '#2a2a2a' : completed ? '#1a1a1a' : '#1a1a1a',
                      border: locked ? '1px solid #6b7280' : completed ? '1px solid #fbbf24' : '1px solid #ffffff',
                      textAlign: 'center'
                    }}>
                      <span style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: locked ? '#6b7280' : completed ? '#fbbf24' : '#ffffff'
                      }}>
                        {locked ? 'Locked - Complete previous section' : 
                         completed ? 'Completed - Well done!' : 'Available'}
                      </span>
                    </div>

                    {/* Action Button */}
                    {!locked && (
                      <div style={{ marginTop: 12 }}>
                        <Link 
                          to={section.path}
                          style={{ textDecoration: 'none' }}
                        >
                          <button style={{
                            width: '100%',
                            padding: '12px 16px',
                            backgroundColor: completed ? '#fbbf24' : '#ffffff',
                            color: '#000000',
                            border: 'none',
                            borderRadius: 8,
                            fontSize: 14,
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-2px)'
                            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)'
                          }}
                          onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)'
                            e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)'
                          }}
                          >
                            {completed ? 'Review Section' : 'Start Section'}
        </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick Actions */}
          <div style={{ 
            display: 'flex', 
            gap: 12, 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {completedSections < SECTIONS_PER_TOPIC && (
              <Link to={`/topic/${index}/section/${Math.min(completedSections + 1, 5)}`}>
                <button style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: '#fbbf24', 
                  color: '#000000', 
                  border: 'none', 
                  borderRadius: 8,
                  padding: '12px 20px',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 'bold',
                  transition: 'all 0.2s ease'
                }}>
                  ⚡ Continue Learning →
                </button>
              </Link>
            )}
            {completedSections === SECTIONS_PER_TOPIC && (
              <div style={{
                padding: 16,
                backgroundColor: '#1a1a1a',
                borderRadius: 12,
                border: '2px solid #fbbf24',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>🎉</div>
                <div style={{ color: '#fbbf24', fontWeight: 'bold', marginBottom: 4 }}>
                  Topic Completed!
                </div>
                <div style={{ color: '#ffffff', fontSize: 14 }}>
                  Great job! You've mastered this topic.
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function SectionRouter() {
  const { topicIndex, sectionNumber } = useParams()
  const { completedSectionsByTopic } = useStore()
  const index = Number(topicIndex || 0)
  const section = Number(sectionNumber || 1)
  const completedSections = completedSectionsByTopic[index] || 0
  
  // Check if section is locked
  const isSectionLocked = (sectionId) => {
    if (sectionId === 1) return false
    // If completedSections is 1, then section 2 is unlocked
    // If completedSections is 2, then section 3 is unlocked, etc.
    return completedSections < sectionId - 1
  }
  
  if (isSectionLocked(section)) {
    return (
      <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24' }}>
        <h3 style={{ color: '#fbbf24' }}>Section {section} Locked</h3>
        <p style={{ color: '#ffffff' }}>Complete the previous section first to unlock this one.</p>
        <Link to={`/topic/${index}`}>
          <button style={{ 
            backgroundColor: '#fbbf24', 
            color: '#000000', 
            border: 'none', 
            borderRadius: 4,
            padding: '8px 16px',
            cursor: 'pointer'
          }}>
            ← Back to Topic
          </button>
        </Link>
      </div>
    )
  }
  
  switch (section) {
    case 1:
      return <Section1Tutorial />
    case 2:
      return <Section2Quiz />
    case 3:
      return <Section3Simulation />
    case 4:
      return <Section4NewsQA />
    case 5:
      return <Section5Claim />
    default:
      return <div className="card">Unknown section</div>
  }
}

function Section1Tutorial() {
  const { claimSection, isSectionClaimed, activeTopicIndex } = useStore()
  const navigate = useNavigate()
  const { topicIndex } = useParams()
  const index = Number(topicIndex || 0)
  const content = TOPIC_CONTENT[index] || TOPIC_CONTENT[0]
  const claimed = isSectionClaimed(index, 1)
  
  // Load saved progress or start from beginning
  const [cardIndex, setCardIndex] = useState(() => {
    if (claimed) {
      // If already claimed, show the last card (completion panel)
      return content.tutorial.length - 1
    }
    
    // Try to load saved progress from localStorage
    const savedProgress = localStorage.getItem(`tutorial_progress_${index}`)
    if (savedProgress) {
      const progress = JSON.parse(savedProgress)
      return progress.cardIndex || 0
    }
    
    return 0
  })

  // Add state for redo mode
  const [isRedoing, setIsRedoing] = useState(false)

  function getTopicImages(i) {
    switch (i) {
      case 0: // What is Cryptocurrency?
        return [
          'https://source.unsplash.com/featured/?cryptocurrency',
          'https://source.unsplash.com/featured/?blockchain',
          'https://source.unsplash.com/featured/?digital+money',
          'https://source.unsplash.com/featured/?decentralized',
          'https://source.unsplash.com/featured/?bitcoin',
          'https://source.unsplash.com/featured/?public+ledger',
        ]
      case 1: // Bitcoin Basics
        return [
          'https://source.unsplash.com/featured/?bitcoin',
          'https://source.unsplash.com/featured/?btc',
          'https://source.unsplash.com/featured/?mining',
          'https://source.unsplash.com/featured/?halving',
          'https://source.unsplash.com/featured/?digital+gold',
          'https://source.unsplash.com/featured/?peer-to-peer',
        ]
      case 2: // Blockchain
        return [
          'https://source.unsplash.com/featured/?blockchain',
          'https://source.unsplash.com/featured/?ledger',
          'https://source.unsplash.com/featured/?cryptography',
          'https://source.unsplash.com/featured/?consensus',
          'https://source.unsplash.com/featured/?hash',
          'https://source.unsplash.com/featured/?nodes',
        ]
      case 3: // Coins vs Tokens
        return [
          'https://source.unsplash.com/featured/?ethereum',
          'https://source.unsplash.com/featured/?token',
          'https://source.unsplash.com/featured/?smart+contract',
          'https://source.unsplash.com/featured/?erc20',
          'https://source.unsplash.com/featured/?gas+fees',
          'https://source.unsplash.com/featured/?layer2',
        ]
      case 4: // Market Basics
        return [
          'https://source.unsplash.com/featured/?market',
          'https://source.unsplash.com/featured/?stock+chart',
          'https://source.unsplash.com/featured/?volatility',
          'https://source.unsplash.com/featured/?liquidity',
          'https://source.unsplash.com/featured/?bull+market',
          'https://source.unsplash.com/featured/?bear+market',
        ]
      case 5: // Wallets & Security
        return [
          'https://source.unsplash.com/featured/?wallet',
          'https://source.unsplash.com/featured/?hardware+wallet',
          'https://source.unsplash.com/featured/?private+key',
          'https://source.unsplash.com/featured/?seed+phrase',
          'https://source.unsplash.com/featured/?2fa',
          'https://source.unsplash.com/featured/?security',
        ]
      case 6: // How People Use Crypto
        return [
          'https://source.unsplash.com/featured/?defi',
          'https://source.unsplash.com/featured/?nft',
          'https://source.unsplash.com/featured/?crypto+payments',
          'https://source.unsplash.com/featured/?trading+crypto',
          'https://source.unsplash.com/featured/?investing',
          'https://source.unsplash.com/featured/?crypto+gaming',
        ]
      default:
        return ['/vite.svg', reactLogo]
    }
  }

  const images = getTopicImages(index)

  // Save progress to localStorage
  const saveProgress = (newCardIndex) => {
    const progress = {
      cardIndex: newCardIndex,
      timestamp: Date.now()
    }
    localStorage.setItem(`tutorial_progress_${index}`, JSON.stringify(progress))
  }

  function nextCard() {
    setCardIndex((i) => {
      const newIndex = Math.min(i + 1, content.tutorial.length - 1)
      saveProgress(newIndex)
      return newIndex
    })
  }

  function prevCard() {
    setCardIndex((i) => {
      const newIndex = Math.max(i - 1, 0)
      saveProgress(newIndex)
      return newIndex
    })
  }

  function claimReward() {
    if (claimed) return
    claimSection(index, 1)
    // Clear saved progress since tutorial is completed
    localStorage.removeItem(`tutorial_progress_${index}`)
  }

  function goBackToTopic() {
    navigate(`/topic/${index}`)
  }

  function startRedo() {
    setIsRedoing(true)
    setCardIndex(0)
    // Clear any saved progress when starting redo
    localStorage.removeItem(`tutorial_progress_${index}`)
  }
  
  // If section is already claimed and not redoing, show completion state
  if (claimed && !isRedoing) {
    return (
      <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24' }}>
        <h3 style={{ color: '#fbbf24' }}>Tutorial</h3>
        
        {/* Completion State */}
        <div style={{ 
          padding: 24, 
          backgroundColor: '#1a1a1a', 
          borderRadius: 12, 
          border: '1px solid #fbbf24',
          textAlign: 'center',
          marginBottom: 20
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
          <h4 style={{ color: '#fbbf24', margin: '0 0 8px 0', fontSize: 20 }}>
            Tutorial Completed!
          </h4>
          <p style={{ color: '#ffffff', margin: '0 0 16px 0', fontSize: 14 }}>
            You've successfully completed this tutorial and claimed your BTC reward.
          </p>
          <div style={{ 
            padding: 12, 
            backgroundColor: '#000000', 
            borderRadius: 8, 
            border: '1px solid #fbbf24',
            marginBottom: 16
          }}>
            <div style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: 16 }}>
              ✅ BTC Reward Claimed (+2 BTC)
      </div>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={startRedo}
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: 14
              }}
            >
              🔄 Redo Tutorial
            </button>
            <button 
              onClick={goBackToTopic}
              style={{
                backgroundColor: '#fbbf24',
                color: '#000000',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: 14
              }}
            >
              ← Go back to previous page to start next section
            </button>
          </div>
        </div>

        {/* Tutorial Summary */}
        <div style={{ 
          padding: 16, 
          backgroundColor: '#1a1a1a', 
          borderRadius: 12, 
          border: '1px solid #fbbf24'
        }}>
          <h4 style={{ color: '#fbbf24', margin: '0 0 12px 0', fontSize: 16 }}>
            📚 What You Learned
          </h4>
          <div style={{ display: 'grid', gap: 8 }}>
            {content.tutorial.map((point, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: 8,
                padding: 8,
                backgroundColor: '#000000',
                borderRadius: 6,
                border: '1px solid #fbbf24'
              }}>
                <span style={{ color: '#fbbf24', fontSize: 12, marginTop: 2 }}>✓</span>
                <div>
                  <div style={{ color: '#ffffff', fontSize: 14, fontWeight: 'bold', marginBottom: 2 }}>
                    {point}
                  </div>
                  {content.tutorialKids && content.tutorialKids[i] && (
                    <div style={{ color: '#fbbf24', fontSize: 12, fontStyle: 'italic' }}>
                      💡 {content.tutorialKids[i]}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24' }}>
      <h3 style={{ color: '#fbbf24' }}>Tutorial</h3>
      <p style={{ color: '#ffffff' }}>Learn the key concepts for this topic:</p>

      {/* Flashcard Slider */}
      <div className="flashcard">
        <div className="flashcard-media">
          <TutorialImage 
            title={content.tutorial[cardIndex]}
            size="200px"
            alt={`${content.title} tutorial illustration`}
          />
        </div>
        <div className="flashcard-body">
          <div className="flashcard-title">{content.tutorial[cardIndex]}</div>
          {content.tutorialKids && content.tutorialKids[cardIndex] && (
            <div className="flashcard-analogy"><span className="badge">Analogy</span> {content.tutorialKids[cardIndex]}</div>
          )}
        </div>
        <div className="flashcard-controls">
          <button onClick={prevCard} className="flashcard-btn" disabled={cardIndex === 0}>← Prev</button>
          <div className="flashcard-progress">
            {cardIndex + 1} / {content.tutorial.length}
          </div>
          <button onClick={nextCard} className="flashcard-btn" disabled={cardIndex === content.tutorial.length - 1}>Next →</button>
        </div>
        <div className="flashcard-dots">
          {content.tutorial.map((_, i) => (
            <span
              key={i}
              className={i === cardIndex ? 'dot active' : 'dot'}
              onClick={() => {
                setCardIndex(i)
                saveProgress(i)
              }}
            />
          ))}
        </div>
        {cardIndex === content.tutorial.length - 1 && (
          <div style={{ padding: 16, borderTop: '1px solid #fbbf24', textAlign: 'center', display: 'grid', gap: 10 }}>
            <div style={{ fontWeight: 'bold', color: '#fbbf24' }}>🎉 Tutorial Completed</div>
            <button 
              onClick={claimReward}
              style={{
                backgroundColor: '#fbbf24',
                color: '#000000',
                border: 'none',
                padding: '10px 16px',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Claim +2 BTC
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function Section2Quiz() {
  const { claimSection, isSectionClaimed, activeTopicIndex } = useStore()
  const navigate = useNavigate()
  const { topicIndex } = useParams()
  const index = Number(topicIndex || 0)
  const content = TOPIC_CONTENT[index] || TOPIC_CONTENT[0]
  const [answers, setAnswers] = useState({})
  const [completed, setCompleted] = useState(false)
  const [showKidExplanation, setShowKidExplanation] = useState(false)
  const [isRedoing, setIsRedoing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const claimed = isSectionClaimed(index, 2)
  
  // Load saved answers if quiz was previously completed
  useEffect(() => {
    if (claimed) {
      // If BTC is claimed, load the user's actual previous answers
      const savedAnswers = localStorage.getItem(`quiz_answers_${index}`)
      if (savedAnswers) {
        setAnswers(JSON.parse(savedAnswers))
      } else {
        // Fallback: if no saved answers, show correct answers
        const correctAnswers = {}
        content.quiz.forEach((it, i) => {
          correctAnswers[i] = it.correct
        })
        setAnswers(correctAnswers)
      }
      setCompleted(true)
      setShowResults(true)
    }
  }, [claimed, content.quiz, index])
  
  function resetIncorrect() {
    const corrected = {}
    content.quiz.forEach((it, i) => {
      if (answers[i] && answers[i] === it.correct) {
        corrected[i] = answers[i]
      }
    })
    setAnswers(corrected)
  }

  function claimReward() {
    if (claimed) return
    // Save user's answers before claiming
    localStorage.setItem(`quiz_answers_${index}`, JSON.stringify(answers))
    claimSection(index, 2)
  }

  function goBackToTopic() {
    navigate(`/topic/${index}`)
  }
  
  function startRedo() {
    setIsRedoing(true)
    setAnswers({})
    setCompleted(false)
    setShowResults(false)
    // Clear saved answers when starting redo
    localStorage.removeItem(`quiz_answers_${index}`)
  }
  
  function select(i, val) { 
    const newAnswers = { ...answers, [i]: val }
    setAnswers(newAnswers)
    
    // Check if all questions are answered
    const allAnswered = content.quiz.every((it, j) => newAnswers[j])
    if (allAnswered && !showResults) {
      setShowResults(true)
      const allCorrect = content.quiz.every((it, j) => newAnswers[j] === it.correct)
      if (allCorrect) {
        setCompleted(true)
      }
    }
  }
  
  const allAnswered = content.quiz.every((it, i) => answers[i])
  const correct = content.quiz.every((it, i) => answers[i] === it.correct)
  
  return (
    <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24' }}>
      <h3 style={{ color: '#fbbf24' }}>Section 2: Quiz</h3>
      {claimed && !isRedoing && (
        <div style={{ 
          marginBottom: 16, 
          padding: 12, 
          backgroundColor: '#1a1a1a', 
          borderRadius: 8, 
          border: '1px solid #fbbf24',
          textAlign: 'center'
        }}>
          <div style={{ color: '#fbbf24', fontWeight: 'bold', marginBottom: 8 }}>
            ✅ Quiz Completed & BTC Claimed
          </div>
          <div style={{ fontSize: 14, color: '#ffffff', marginBottom: 12 }}>
            You can review your answers below or redo the quiz for practice
          </div>
          <button 
            onClick={startRedo}
            style={{
              backgroundColor: '#fbbf24',
              color: '#000000',
              border: 'none',
              padding: '8px 16px',
              borderRadius: 6,
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: 14
            }}
          >
            🔄 Redo Questions (No BTC Reward)
          </button>
        </div>
      )}
      {content.quiz.map((it, i) => {
        const userAnswer = answers[i]
        const isCorrect = userAnswer === it.correct
        const showResult = (showResults || claimed) && !isRedoing // Show result when all answered or claimed, but allow interaction when redoing
        
        return (
          <div key={`${i}-${userAnswer || 'none'}`} style={{ marginBottom: 20, textAlign: 'left', border: '1px solid #fbbf24', padding: 12, borderRadius: 8, backgroundColor: '#1a1a1a' }}>
            <div style={{ marginBottom: 8, fontWeight: 'bold', color: '#ffffff' }}>{i + 1}. {it.q}</div>
            <div>
              {Object.entries(it.options).map(([key, value]) => {
                let optionStyle = { display: 'block', marginBottom: 4, color: '#ffffff' }
                if (showResult) {
                  if (key === it.correct) {
                    optionStyle = { ...optionStyle, color: '#fbbf24', fontWeight: 'bold' }
                  } else if (key === userAnswer && !isCorrect) {
                    optionStyle = { ...optionStyle, color: '#ef4444', textDecoration: 'line-through' }
                  }
                }
                
                return (
                  <label key={key} style={optionStyle}>
                    <input 
                      type="radio" 
                      name={`question-${i}`} 
                      value={key}
                      onChange={() => select(i, key)}
                      style={{ marginRight: 8 }}
                      disabled={showResult && !isRedoing}
                    />
                    {key}) {value}
                    {showResult && key === it.correct && <span style={{ marginLeft: 8 }}>✅</span>}
                    {showResult && key === userAnswer && !isCorrect && <span style={{ marginLeft: 8 }}>❌</span>}
                  </label>
                )
              })}
            </div>
            {showResult && (
              <div style={{ marginTop: 8, padding: 8, backgroundColor: isCorrect ? '#1f2937' : '#2d1b1b', borderRadius: 4 }}>
                <div style={{ color: isCorrect ? '#4ade80' : '#f87171', fontWeight: 'bold' }}>
                  {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
                </div>
                <div style={{ fontSize: 14, marginTop: 4 }}>
                  <strong>Correct Answer:</strong> {it.correct}) {it.options[it.correct]}
                </div>
                {!isCorrect && userAnswer && (
                  <div style={{ fontSize: 14, marginTop: 2, color: '#f87171' }}>
                    <strong>Your Answer:</strong> {userAnswer}) {it.options[userAnswer]}
                  </div>
                )}
                {it.explanation && (
                  <div style={{ fontSize: 14, marginTop: 4, color: '#94a3b8' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <strong>Why:</strong>
                      <button 
                        onClick={() => setShowKidExplanation(!showKidExplanation)}
                        style={{ fontSize: 12, padding: '2px 6px', background: '#333', border: '1px solid #555', borderRadius: 4 }}
                      >
                        {showKidExplanation ? 'Show Regular' : 'Show Simple'}
                      </button>
                    </div>
                    <div>
                      {showKidExplanation && it.kidExplanation ? it.kidExplanation : it.explanation}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
      
      {showResults && (
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          {/* Quiz Results Summary */}
          <div style={{ 
            padding: 16, 
            backgroundColor: '#1a1a1a', 
            borderRadius: 12, 
            border: '2px solid #fbbf24',
            marginBottom: 16
          }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>📊</div>
            <h4 style={{ color: '#fbbf24', margin: '0 0 8px 0', fontSize: 18 }}>
              Quiz Results
            </h4>
            <div style={{ color: '#ffffff', marginBottom: 12 }}>
              You answered {content.quiz.filter((_, i) => answers[i] === content.quiz[i].correct).length} out of {content.quiz.length} questions correctly
            </div>
            {correct ? (
              <div style={{ color: '#4ade80', fontWeight: 'bold', fontSize: 16 }}>
                🎉 Perfect! All answers are correct!
              </div>
            ) : (
              <div style={{ color: '#f87171', fontWeight: 'bold', fontSize: 16 }}>
                📝 Some answers need review. Check the explanations above.
              </div>
            )}
          </div>

          {/* Completion Actions */}
          {completed && (
            <div style={{ display: 'grid', gap: 10 }}>
              <div style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: 16 }}>
                {isRedoing ? '🎉 Quiz Redone Successfully!' : '🎉 Quiz Complete!'}
              </div>
              {claimed && !isRedoing && (
                <div style={{ fontSize: 14, color: '#ffffff', marginBottom: 8 }}>
                  ✅ BTC already claimed for this section
                </div>
              )}
              {!claimed && (
                <button 
                  onClick={claimReward}
                  style={{
                    backgroundColor: '#fbbf24',
                    color: '#000000',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: 16
                  }}
                >
                  Claim +2 BTC
                </button>
              )}
              {claimed && (
                <button 
                  onClick={goBackToTopic}
                  style={{
                    backgroundColor: '#000000',
                    color: '#fbbf24',
                    border: '1px solid #fbbf24',
                    padding: '12px 24px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: 16
                  }}
                >
                  ← Go back to previous page to start next section
                </button>
              )}
              {isRedoing && (
                <div style={{ fontSize: 14, color: '#94a3b8', marginTop: 8 }}>
                  Great job! You can continue practicing or go back to the topic page.
                </div>
              )}
            </div>
          )}
        </div>
      )}
      
      {!completed && allAnswered && !correct && (
        <div style={{ color: '#f87171', fontWeight: 'bold', marginTop: 16, textAlign: 'center' }}>
          ❌ Some answers were incorrect. Please review and try again!
          <button onClick={resetIncorrect} style={{ marginLeft: 12 }}>
            Make corrections
          </button>
        </div>
      )}
    </div>
  )
}

function Section3Simulation() {
  const { claimSection, isSectionClaimed, activeTopicIndex } = useStore()
  const { topicIndex } = useParams()
  const index = Number(topicIndex || 0)
  const content = TOPIC_CONTENT[index] || TOPIC_CONTENT[0]
  const [blocks, setBlocks] = useState([])
  const [simulationStep, setSimulationStep] = useState(0)
  const [isMining, setIsMining] = useState(false)
  const [miningProgress, setMiningProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [sectionCompleted, setSectionCompleted] = useState(false)
  const claimed = isSectionClaimed(index, 3)
  
  const steps = [
    "Collecting transactions...",
    "Solving the puzzle...",
    "Creating the block...",
    "Adding to blockchain!"
  ]
  
  // Load saved blocks if section was previously completed
  useEffect(() => {
    if (claimed) {
      // If BTC is claimed, load the saved blocks to show user's previous results
      const savedBlocks = localStorage.getItem(`simulation_blocks_${index}`)
      if (savedBlocks) {
        setBlocks(JSON.parse(savedBlocks))
      } else {
        // Fallback: create 3 blocks to show completion
        const defaultBlocks = [
          { id: 1, hash: 'a1b2c3', transactions: 3 },
          { id: 2, hash: 'd4e5f6', transactions: 2 },
          { id: 3, hash: 'g7h8i9', transactions: 4 }
        ]
        setBlocks(defaultBlocks)
      }
      setSectionCompleted(true)
    }
  }, [claimed, index])
  
  function mineBlock() {
    if (isMining) return
    
    setIsMining(true)
    setMiningProgress(0)
    setCurrentStep(0)
    
    // Simulate mining process with progress
    const interval = setInterval(() => {
      setMiningProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsMining(false)
          setMiningProgress(0)
          setCurrentStep(0)
          
          // Add the new block
          const newBlock = {
            id: blocks.length + 1,
            hash: Math.random().toString(16).slice(2, 8),
            transactions: Math.floor(Math.random() * 5) + 1
          }
          setBlocks(b => [...b, newBlock])
          return 0
        }
        
        // Update step based on progress
        const step = Math.floor((prev / 100) * 4)
        setCurrentStep(step)
        
        return prev + 2
      })
    }, 50)
  }
  
  function nextStep() {
    setSimulationStep(s => s + 1)
  }
  
  const canFinish = (blocks.length >= 3 || simulationStep >= 2) && !sectionCompleted
  
  function handleComplete() {
    if (!sectionCompleted && canFinish) {
      // Save blocks before claiming
      localStorage.setItem(`simulation_blocks_${index}`, JSON.stringify(blocks))
      claimSection(index, 3)
      setSectionCompleted(true)
    }
  }
  
  return (
    <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24' }}>
      <h3 style={{ color: '#fbbf24', textAlign: 'center', marginBottom: 20, fontSize: 24 }}>
        🎮 Section 3: Mining Simulation
      </h3>
      <p style={{ color: '#ffffff', textAlign: 'center', marginBottom: 24, fontSize: 16 }}>
        {content.simulation}
      </p>
      
      {/* Review Header for Completed Section */}
      {claimed && (
        <div style={{ 
          marginBottom: 24, 
          padding: 20, 
          backgroundColor: '#1a1a1a', 
          borderRadius: 12, 
          border: '2px solid #fbbf24',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
          <h4 style={{ color: '#fbbf24', margin: '0 0 8px 0', fontSize: 20 }}>
            Simulation Completed!
          </h4>
          <p style={{ color: '#ffffff', margin: '0 0 16px 0', fontSize: 14 }}>
            You've successfully completed the mining simulation and claimed your BTC reward.
          </p>
          <div style={{ 
            padding: 12, 
            backgroundColor: '#000000', 
            borderRadius: 8, 
            border: '1px solid #fbbf24',
            marginBottom: 16
          }}>
            <div style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: 16 }}>
              ✅ BTC Reward Claimed (+2 BTC)
            </div>
          </div>
          <div style={{ 
            padding: 12, 
            backgroundColor: '#000000', 
            borderRadius: 8, 
            border: '1px solid #4ade80',
            marginBottom: 16
          }}>
            <div style={{ color: '#4ade80', fontWeight: 'bold', fontSize: 16 }}>
              🏆 Mining Achievement: {blocks.length} Blocks Mined
            </div>
            <div style={{ color: '#ffffff', fontSize: 14, marginTop: 4 }}>
              Total Rewards: {blocks.length * 6.25} BTC
            </div>
          </div>
          
          {/* Redo Button */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => {
                setBlocks([])
                setSectionCompleted(false)
                localStorage.removeItem(`simulation_blocks_${index}`)
              }}
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: 14,
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.3)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              🔄 Redo Simulation (No BTC Reward)
            </button>
            <button 
              onClick={() => window.history.back()}
              style={{
                backgroundColor: '#fbbf24',
                color: '#000000',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: 14,
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 4px 12px rgba(251, 191, 36, 0.4)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              ← Go back to previous page to start next section
            </button>
          </div>
        </div>
      )}
      
      {index === 0 && (
        <div>
          {/* Enhanced Mining Simulator Header */}
          <div style={{ 
            marginBottom: 24, 
            padding: 24, 
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b1b 100%)', 
            borderRadius: 16, 
            border: '2px solid #fbbf24',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(251, 191, 36, 0.1)'
          }}>
            <div style={{ fontSize: 48, marginBottom: 16, animation: 'pulse 2s infinite' }}>⛏️</div>
            <h4 style={{ margin: '0 0 16px 0', color: '#fbbf24', fontSize: 24, fontWeight: 'bold' }}>
              Bitcoin Mining Simulator
            </h4>
            
            {/* Enhanced Visual Concept Cards */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: 16, 
              marginBottom: 20 
            }}>
              <div style={{ 
                padding: 20, 
                background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                borderRadius: 12, 
                border: '2px solid #4ade80',
                boxShadow: '0 4px 16px rgba(74, 222, 128, 0.2)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🔍</div>
                <div style={{ fontSize: 14, fontWeight: 'bold', color: '#4ade80', marginBottom: 6 }}>
                  Find Puzzle Solution
                </div>
                <div style={{ fontSize: 12, color: '#ffffff', lineHeight: 1.4 }}>
                  Solve cryptographic hash puzzle to create new block
                </div>
              </div>
              
              <div style={{ 
                padding: 20, 
                background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                borderRadius: 12, 
                border: '2px solid #fbbf24',
                boxShadow: '0 4px 16px rgba(251, 191, 36, 0.2)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🔗</div>
                <div style={{ fontSize: 14, fontWeight: 'bold', color: '#fbbf24', marginBottom: 6 }}>
                  Create Block
                </div>
                <div style={{ fontSize: 12, color: '#ffffff', lineHeight: 1.4 }}>
                  Add verified transactions to the blockchain
                </div>
              </div>
            </div>

            {/* Enhanced Game Description */}
            <div style={{ 
              padding: 16, 
              backgroundColor: '#000000', 
              borderRadius: 12, 
              border: '1px solid #fbbf24',
              marginBottom: 16
            }}>
              <div style={{ fontSize: 16, color: '#ffffff', marginBottom: 8 }}>
                <span style={{ color: '#4ade80', fontWeight: 'bold' }}>🌍 Real World:</span> Miners compete globally every 10 minutes
              </div>
              <div style={{ fontSize: 16, color: '#ffffff' }}>
                <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>🎮 Game:</span> You're a treasure hunter solving riddles for gold!
              </div>
            </div>
          </div>
          
          {/* Enhanced Mining Progress */}
          {isMining && (
            <div style={{ 
              marginBottom: 24, 
              padding: 24, 
              background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
              borderRadius: 16, 
              border: '2px solid #4ade80',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(74, 222, 128, 0.2)'
            }}>
              <div style={{ 
                fontSize: 20, 
                color: '#4ade80', 
                marginBottom: 16, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: 12,
                fontWeight: 'bold'
              }}>
                <span style={{ fontSize: 32, animation: 'spin 2s linear infinite' }}>⛏️</span>
                <span>{steps[currentStep]}</span>
              </div>
              
              {/* Enhanced Progress Bar */}
              <div style={{ 
                width: '100%', 
                height: 20, 
                backgroundColor: '#000000', 
                borderRadius: 12, 
                overflow: 'hidden', 
                marginBottom: 16,
                border: '2px solid #4ade80',
                position: 'relative'
              }}>
                <div style={{ 
                  width: `${miningProgress}%`, 
                  height: '100%', 
                  background: 'linear-gradient(90deg, #4ade80, #22c55e, #16a34a)',
                  transition: 'width 0.1s ease',
                  borderRadius: 10,
                  position: 'relative',
                  boxShadow: '0 0 20px rgba(74, 222, 128, 0.5)'
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    right: 12, 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    color: '#000000', 
                    fontWeight: 'bold', 
                    fontSize: 14,
                    textShadow: '1px 1px 2px rgba(255,255,255,0.3)'
                  }}>
                    {miningProgress}%
                  </div>
                </div>
              </div>
              
              {/* Enhanced Visual Step Indicator */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
                {steps.map((step, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8
                  }}>
                    <div style={{
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      backgroundColor: i <= currentStep ? '#4ade80' : '#444',
                      border: i === currentStep ? '3px solid #22c55e' : '2px solid #666',
                      boxShadow: i <= currentStep ? '0 0 12px rgba(74, 222, 128, 0.6)' : 'none',
                      transition: 'all 0.3s ease'
                    }} />
                    <div style={{
                      fontSize: 10,
                      color: i <= currentStep ? '#4ade80' : '#666',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      maxWidth: 60
                    }}>
                      {step.split(' ')[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Enhanced Blockchain Visualization */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12, 
              marginBottom: 16 
            }}>
              <h5 style={{ margin: 0, color: '#fbbf24', fontSize: 20, fontWeight: 'bold' }}>
                🔗 Your Blockchain
              </h5>
              <div style={{ 
                padding: '4px 12px', 
                backgroundColor: '#1a1a1a', 
                borderRadius: 20, 
                border: '1px solid #fbbf24',
                fontSize: 12,
                color: '#fbbf24',
                fontWeight: 'bold'
              }}>
                {blocks.length}/3 Blocks
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: 16, 
              flexWrap: 'wrap', 
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
              backgroundColor: '#1a1a1a',
              borderRadius: 16,
              border: '2px solid #fbbf24'
            }}>
              {blocks.map((b, i) => (
                <div key={b.id} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ 
                    border: '3px solid #4ade80', 
                    padding: 16, 
                    borderRadius: 12, 
                    background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
                    minWidth: 140,
                    textAlign: 'center',
                    position: 'relative',
                    boxShadow: '0 8px 24px rgba(74, 222, 128, 0.3)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div style={{ 
                      position: 'absolute', 
                      top: -8, 
                      left: '50%', 
                      transform: 'translateX(-50%)',
                      backgroundColor: '#4ade80',
                      color: '#000000',
                      padding: '4px 8px',
                      borderRadius: 12,
                      fontSize: 10,
                      fontWeight: 'bold'
                    }}>
                      #{b.id}
                    </div>
                    <div style={{ fontWeight: 'bold', color: '#4ade80', fontSize: 18, marginTop: 8 }}>
                      Block {b.id}
                    </div>
                    <div style={{ fontSize: 12, color: '#ffffff', marginTop: 6, marginBottom: 4 }}>
                      {b.transactions} transactions
                    </div>
                    <div style={{ 
                      fontSize: 9, 
                      color: '#fbbf24', 
                      wordBreak: 'break-all',
                      backgroundColor: '#000000',
                      padding: '4px 6px',
                      borderRadius: 4,
                      marginBottom: 8
                    }}>
                      {b.hash}
                    </div>
                    {i > 0 && (
                      <div style={{ 
                        fontSize: 10, 
                        fontWeight: 'bold',
                        backgroundColor: '#10b981',
                        color: '#000000',
                        padding: '2px 6px',
                        borderRadius: 8
                      }}>
                        ✅ Linked
                      </div>
                    )}
                  </div>
                  {i < blocks.length - 1 && (
                    <div style={{ 
                      width: 24, 
                      height: 4, 
                      background: 'linear-gradient(90deg, #4ade80, #22c55e)', 
                      margin: '0 8px',
                      borderRadius: 4,
                      boxShadow: '0 2px 8px rgba(74, 222, 128, 0.4)'
                    }} />
                  )}
                </div>
              ))}
              {blocks.length < 3 && (
                <div style={{ 
                  border: '3px dashed #666', 
                  padding: 16, 
                  borderRadius: 12, 
                  background: 'linear-gradient(135deg, #2d1b1b 0%, #1f2937 100%)',
                  minWidth: 140,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  textAlign: 'center',
                  opacity: 0.6
                }}>
                  <div>
                    <div style={{ fontSize: 18, marginBottom: 4 }}>⏳</div>
                    <div style={{ fontSize: 16, fontWeight: 'bold' }}>Block {blocks.length + 1}</div>
                    <div style={{ fontSize: 12, marginTop: 4 }}>Not mined yet</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Enhanced Progress Bar */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: 12,
              padding: '0 4px'
            }}>
              <span style={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}>
                🎯 Mining Progress: {blocks.length}/3 blocks
              </span>
              <span style={{ 
                fontSize: 16, 
                fontWeight: 'bold',
                padding: '4px 12px',
                backgroundColor: blocks.length >= 3 ? '#10b981' : '#4ade80',
                color: '#000000',
                borderRadius: 20
              }}>
                {blocks.length >= 3 ? '🎉 Complete!' : `${Math.round((blocks.length / 3) * 100)}%`}
              </span>
            </div>
            <div style={{ 
              width: '100%', 
              height: 16, 
              backgroundColor: '#000000', 
              borderRadius: 12, 
              overflow: 'hidden',
              border: '2px solid #fbbf24',
              position: 'relative'
            }}>
              <div style={{ 
                width: `${(blocks.length / 3) * 100}%`, 
                height: '100%', 
                background: blocks.length >= 3 
                  ? 'linear-gradient(90deg, #10b981, #059669, #047857)' 
                  : 'linear-gradient(90deg, #4ade80, #22c55e, #16a34a)',
                transition: 'width 0.8s ease',
                borderRadius: 10,
                boxShadow: blocks.length >= 3 
                  ? '0 0 20px rgba(16, 185, 129, 0.6)' 
                  : '0 0 20px rgba(74, 222, 128, 0.6)'
              }} />
            </div>
          </div>
          
          {/* Enhanced Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: 16, 
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 24
          }}>
            <button 
              onClick={mineBlock} 
              disabled={blocks.length >= 3 || isMining}
              style={{ 
                backgroundColor: (blocks.length >= 3 || isMining) ? '#666' : '#4ade80',
                color: '#000000',
                border: 'none',
                padding: '16px 32px',
                borderRadius: 12,
                cursor: (blocks.length >= 3 || isMining) ? 'not-allowed' : 'pointer',
                fontSize: 18,
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: (blocks.length >= 3 || isMining) 
                  ? 'none' 
                  : '0 8px 24px rgba(74, 222, 128, 0.4)',
                transform: (blocks.length >= 3 || isMining) ? 'none' : 'translateY(0)'
              }}
              onMouseOver={(e) => {
                if (!(blocks.length >= 3 || isMining)) {
                  e.target.style.transform = 'translateY(-4px)'
                  e.target.style.boxShadow = '0 12px 32px rgba(74, 222, 128, 0.6)'
                }
              }}
              onMouseOut={(e) => {
                if (!(blocks.length >= 3 || isMining)) {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 8px 24px rgba(74, 222, 128, 0.4)'
                }
              }}
            >
              {isMining ? '⛏️ Mining...' : blocks.length >= 3 ? '🎉 All Mined!' : '⛏️ Start Mining'}
            </button>
            {canFinish && (
              <button 
                onClick={handleComplete} 
                disabled={sectionCompleted}
                style={{ 
                  backgroundColor: sectionCompleted ? '#666' : '#fbbf24',
                  color: '#000000',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: 12,
                  cursor: !sectionCompleted ? 'pointer' : 'not-allowed',
                  fontSize: 18,
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: sectionCompleted 
                    ? 'none' 
                    : '0 8px 24px rgba(251, 191, 36, 0.4)',
                  transform: sectionCompleted ? 'none' : 'translateY(0)'
                }}
                onMouseOver={(e) => {
                  if (!sectionCompleted) {
                    e.target.style.transform = 'translateY(-4px)'
                    e.target.style.boxShadow = '0 12px 32px rgba(251, 191, 36, 0.6)'
                  }
                }}
                onMouseOut={(e) => {
                  if (!sectionCompleted) {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 8px 24px rgba(251, 191, 36, 0.4)'
                  }
                }}
              >
                {sectionCompleted ? '✅ Reward Claimed' : '💰 Claim +2 BTC'}
              </button>
            )}
          </div>
          
          {/* Enhanced Rewards Display */}
          {blocks.length > 0 && (
            <div style={{ 
              marginTop: 20, 
              padding: 20, 
              background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
              borderRadius: 16, 
              border: '2px solid #fbbf24',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(251, 191, 36, 0.2)'
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>💰</div>
              <div style={{ color: '#fbbf24', fontSize: 16, marginBottom: 8, fontWeight: 'bold' }}>
                Mining Rewards Earned
              </div>
              <div style={{ 
                fontSize: 28, 
                fontWeight: 'bold', 
                color: '#4ade80',
                marginBottom: 8,
                textShadow: '0 0 10px rgba(74, 222, 128, 0.5)'
              }}>
                {blocks.length * 6.25} BTC
              </div>
              <div style={{ 
                fontSize: 14, 
                color: '#ffffff', 
                marginTop: 4,
                padding: '8px 16px',
                backgroundColor: '#000000',
                borderRadius: 20,
                border: '1px solid #4ade80'
              }}>
                {blocks.length} blocks × 6.25 BTC each
              </div>
            </div>
          )}


          {/* Learning Summary */}
          {blocks.length >= 3 && (
            <div style={{ marginTop: 16, padding: 20, backgroundColor: '#1f2937', borderRadius: 12, textAlign: 'center' }}>
              <h5 style={{ margin: '0 0 16px 0', color: '#4ade80', fontSize: 18 }}>🎓 Mission Complete!</h5>
              

              {/* Key Takeaway Section */}
              <div style={{ padding: 16, backgroundColor: '#2d1b1b', borderRadius: 8, border: '1px solid #444' }}>
                <div style={{ fontSize: 16, color: '#4ade80', fontWeight: 'bold', marginBottom: 12, textAlign: 'center' }}>
                  🔑 Key Takeaway: Understanding Your Blocks
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 12, fontSize: 13 }}>
                  <div style={{ padding: 12, backgroundColor: '#1f2937', borderRadius: 6, border: '1px solid #333' }}>
                    <div style={{ color: '#4ade80', fontWeight: 'bold', marginBottom: 6 }}>Block Number (1, 2, 3...)</div>
                    <div style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.4 }}>
                      Each block has a unique sequence number. This creates the "chain" in blockchain - 
                      each block points to the previous one, making it impossible to change old blocks.
                    </div>
                  </div>
                  
                  <div style={{ padding: 12, backgroundColor: '#1f2937', borderRadius: 6, border: '1px solid #333' }}>
                    <div style={{ color: '#fbbf24', fontWeight: 'bold', marginBottom: 6 }}>Transactions (3 transactions)</div>
                    <div style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.4 }}>
                      The actual data being stored. In Bitcoin, these are money transfers between people. 
                      Each block can hold thousands of transactions, creating a permanent record.
                    </div>
                  </div>
                  
                  <div style={{ padding: 12, backgroundColor: '#1f2937', borderRadius: 6, border: '1px solid #333' }}>
                    <div style={{ color: '#f87171', fontWeight: 'bold', marginBottom: 6 }}>Hash (baf33a...)</div>
                    <div style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.4 }}>
                      A unique "fingerprint" for each block. If anyone tries to change the block's data, 
                      the hash changes completely, alerting everyone that something is wrong.
                    </div>
                  </div>
                  
                  <div style={{ padding: 12, backgroundColor: '#1f2937', borderRadius: 6, border: '1px solid #333' }}>
                    <div style={{ color: '#22c55e', fontWeight: 'bold', marginBottom: 6 }}>Blockchain Security</div>
                    <div style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.4 }}>
                      All blocks are linked together. To hack one block, you'd need to hack ALL previous blocks too, 
                      which becomes exponentially harder with each new block added.
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: 12, padding: 8, backgroundColor: '#1f2937', borderRadius: 4, textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: '#94a3b8' }}>
                    <strong>Real Example:</strong> Your "Block 1" with "3 transactions" and hash "baf33a" represents 
                    a real Bitcoin block that would contain actual money transfers and have a unique cryptographic signature.
                  </div>
                </div>
              </div>
              
              {/* Section 3 Complete Message */}
              {sectionCompleted && (
                <div style={{ marginTop: 16, padding: 16, backgroundColor: '#1f2937', borderRadius: 8, textAlign: 'center', border: '2px solid #4ade80' }}>
                  <div style={{ fontSize: 18, color: '#4ade80', fontWeight: 'bold', marginBottom: 8 }}>
                    🎉 Section 3 Complete!
                  </div>
                  {claimed && (
                    <div style={{ fontSize: 14, color: '#94a3b8', marginBottom: 8 }}>
                      ✅ BTC already claimed for this section
                    </div>
                  )}
                  <div style={{ fontSize: 14, color: '#94a3b8', marginBottom: 12 }}>
                    You've successfully learned about blockchain mining and earned 2 BTC!
                  </div>
                  <div 
                    onClick={() => window.history.back()}
                    style={{ 
                      fontSize: 13, 
                      color: '#fbbf24', 
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      padding: '8px 12px',
                      borderRadius: 6,
                      backgroundColor: '#2d1b1b',
                      border: '1px solid #fbbf24',
                      display: 'inline-block',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#fbbf24'
                      e.target.style.color = '#000'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#2d1b1b'
                      e.target.style.color = '#fbbf24'
                    }}
                  >
                    ← Go back to the previous page to start Section 4: News Q&A
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      
      {index === 1 && (
        <div>
          <div style={{ marginBottom: 16, padding: 12, backgroundColor: '#1f2937', borderRadius: 8 }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#f59e0b' }}>⛏️ Bitcoin Mining & Halving</h4>
            <div style={{ fontSize: 14, lineHeight: 1.6 }}>
              <p style={{ margin: '0 0 8px 0' }}>
                <strong>Bitcoin Mining</strong> is like a global competition where computers race to solve puzzles:
              </p>
              <ul style={{ margin: '0 0 8px 0', paddingLeft: 20 }}>
                <li><strong>Puzzle</strong> - Find a number that makes the block's hash start with many zeros</li>
                <li><strong>Competition</strong> - Thousands of computers try to solve it first</li>
                <li><strong>Winner</strong> - First computer to solve it gets Bitcoin reward</li>
                <li><strong>Halving</strong> - Every 4 years, the reward gets cut in half (6.25 BTC → 3.125 BTC)</li>
              </ul>
              <p style={{ margin: 0, color: '#94a3b8' }}>
                Click "Mine Block" to see how mining works and watch the halving happen!
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
            {blocks.map((b, i) => (
              <div key={b.id} style={{ 
                border: '2px solid #f59e0b', 
                padding: 12, 
                borderRadius: 8, 
                backgroundColor: '#1f2937',
                minWidth: 140
              }}>
                <div style={{ fontWeight: 'bold', color: '#f59e0b' }}>Block {b.id}</div>
                <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 4 }}>
                  Reward: <span style={{ color: i < 2 ? '#10b981' : '#ef4444' }}>
                    {i < 2 ? '6.25 BTC' : '3.125 BTC'}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: '#fbbf24', marginTop: 2 }}>
                  Hash: {b.hash}
                </div>
                {i === 2 && (
                  <div style={{ fontSize: 10, color: '#ef4444', marginTop: 4 }}>
                    ⚠️ Halving occurred!
                  </div>
                )}
              </div>
            ))}
            {blocks.length < 3 && (
              <div style={{ 
                border: '2px dashed #666', 
                padding: 12, 
                borderRadius: 8, 
                backgroundColor: '#2d1b1b',
                minWidth: 140,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666'
              }}>
                Block {blocks.length + 1}
              </div>
            )}
          </div>
          
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, color: '#94a3b8', marginBottom: 8 }}>
              Progress: {blocks.length}/3 blocks mined
            </div>
            <div style={{ width: '100%', height: 8, backgroundColor: '#333', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ 
                width: `${(blocks.length / 3) * 100}%`, 
                height: '100%', 
                backgroundColor: '#f59e0b',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: 8 }}>
            <button 
              onClick={mineBlock} 
              disabled={blocks.length >= 3}
              style={{ 
                backgroundColor: blocks.length >= 3 ? '#666' : '#f59e0b',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: 6,
                cursor: blocks.length >= 3 ? 'not-allowed' : 'pointer'
              }}
            >
              {blocks.length >= 3 ? 'All Blocks Mined!' : '⛏️ Mine Block'}
            </button>
            <button 
              onClick={() => completeSection(activeTopicIndex)} 
              disabled={!canFinish}
              style={{ 
                backgroundColor: canFinish ? '#10b981' : '#666',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: 6,
                cursor: canFinish ? 'pointer' : 'not-allowed'
              }}
            >
              {canFinish ? '✅ Complete Simulation (+2 BTC)' : 'Mine 3 blocks first'}
            </button>
          </div>
        </div>
      )}
      
      {index > 1 && (
        <div>
          <p>Interactive simulation for this topic</p>
          <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
            <button onClick={nextStep}>Next Step</button>
            <button onClick={() => completeSection(activeTopicIndex)} disabled={!canFinish}>Finish (+2 BTC)</button>
          </div>
        </div>
      )}
    </div>
  )
}

function Section4NewsQA() {
  const { claimSection, isSectionClaimed, activeTopicIndex } = useStore()
  const { topicIndex } = useParams()
  const index = Number(topicIndex || 0)
  const content = TOPIC_CONTENT[index] || TOPIC_CONTENT[0]
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [claimed, setClaimed] = useState(false)
  
  const allQuestions = content.news || []
  const currentQuestion = allQuestions[currentQuestionIndex]
  
  // Check if section is already claimed
  useEffect(() => {
    if (isSectionClaimed(activeTopicIndex, 4)) {
      setClaimed(true)
    }
  }, [activeTopicIndex, isSectionClaimed])
  
  const handleAnswerSelect = (questionIndex, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }))
  }
  
  const handleNext = () => {
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      // All questions answered, check results
      setShowResults(true)
    }
  }
  
  const handleClaimBTC = () => {
    claimSection(activeTopicIndex, 4)
    setClaimed(true)
  }
  
  const handleTryAgain = () => {
    setShowResults(false)
    setCurrentQuestionIndex(0)
    setAnswers({})
  }
  
  const isCurrentQuestionAnswered = answers[currentQuestionIndex] !== undefined
  const isAllCorrect = allQuestions.every((q, index) => answers[index] === q.correct)
  
  // If already claimed, show completion message with review
  if (claimed) {
    return (
      <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24' }}>
        <h3 style={{ color: '#fbbf24', textAlign: 'center', marginBottom: 20, fontSize: 24 }}>
          📰 Section 4: News Q&A
        </h3>
        
        {/* Completion Header */}
        <div style={{ 
          marginBottom: 24, 
          padding: 20, 
          backgroundColor: '#1a1a1a', 
          borderRadius: 12, 
          border: '2px solid #fbbf24',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
          <h4 style={{ color: '#fbbf24', margin: '0 0 8px 0', fontSize: 20 }}>
            News Q&A Completed!
          </h4>
          <p style={{ color: '#ffffff', margin: '0 0 16px 0', fontSize: 14 }}>
            You've successfully answered all news questions and claimed your BTC reward.
          </p>
          <div style={{ 
            padding: 12, 
            backgroundColor: '#000000', 
            borderRadius: 8, 
            border: '1px solid #fbbf24',
            marginBottom: 16
          }}>
            <div style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: 16 }}>
              ✅ BTC Reward Claimed (+2 BTC)
            </div>
          </div>
        </div>

        {/* Review of Questions and Answers */}
        {allQuestions.length > 0 && (
          <div style={{ 
            marginBottom: 24, 
            padding: 20, 
            backgroundColor: '#1a1a1a', 
            borderRadius: 12, 
            border: '1px solid #fbbf24'
          }}>
            <h4 style={{ color: '#fbbf24', margin: '0 0 16px 0', fontSize: 18, textAlign: 'center' }}>
              📊 Your News Q&A Results
            </h4>
            <div style={{ display: 'grid', gap: 12 }}>
              {allQuestions.map((question, index) => {
                const userAnswer = answers[index] || question.correct // Show correct answer if no saved answer
                const isCorrect = userAnswer === question.correct
                
                return (
                  <div key={index} style={{ 
                    padding: 16, 
                    backgroundColor: '#000000', 
                    borderRadius: 8, 
                    border: `1px solid ${isCorrect ? '#4ade80' : '#ef4444'}`
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 8, 
                      marginBottom: 8 
                    }}>
                      <span style={{ 
                        fontSize: 20, 
                        color: isCorrect ? '#4ade80' : '#ef4444' 
                      }}>
                        {isCorrect ? '✅' : '❌'}
                      </span>
                      <span style={{ 
                        color: '#ffffff', 
                        fontWeight: 'bold', 
                        fontSize: 16 
                      }}>
                        Question {index + 1}
                      </span>
                    </div>
                    <div style={{ color: '#ffffff', marginBottom: 8, fontSize: 14 }}>
                      {question.q}
                    </div>
                    <div style={{ fontSize: 12, color: '#94a3b8' }}>
                      <strong>Your Answer:</strong> {userAnswer}) {question.options[userAnswer]}
                    </div>
                    <div style={{ fontSize: 12, color: '#4ade80', marginTop: 4 }}>
                      <strong>Correct Answer:</strong> {question.correct}) {question.options[question.correct]}
                    </div>
                    
                    {/* Explanation Section */}
                    {question.explanation && (
                      <div style={{ 
                        marginTop: 12, 
                        padding: 12, 
                        backgroundColor: '#1a1a1a', 
                        borderRadius: 8, 
                        border: '1px solid #fbbf24'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 8, 
                          marginBottom: 8 
                        }}>
                          <span style={{ fontSize: 16 }}>💡</span>
                          <span style={{ 
                            color: '#fbbf24', 
                            fontWeight: 'bold', 
                            fontSize: 14 
                          }}>
                            Explanation:
                          </span>
                        </div>
                        <div style={{ 
                          color: '#ffffff', 
                          fontSize: 13, 
                          lineHeight: 1.4,
                          marginBottom: 8
                        }}>
                          {question.explanation}
                        </div>
                        
                        {/* Kid-Friendly Analogy */}
                        {question.kidExplanation && (
                          <div style={{ 
                            padding: 8, 
                            backgroundColor: '#000000', 
                            borderRadius: 6, 
                            border: '1px solid #4ade80'
                          }}>
                            <div style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: 6, 
                              marginBottom: 4 
                            }}>
                              <span style={{ fontSize: 14 }}>🧒</span>
                              <span style={{ 
                                color: '#4ade80', 
                                fontWeight: 'bold', 
                                fontSize: 12 
                              }}>
                                Simple Analogy:
                              </span>
                            </div>
                            <div style={{ 
                              color: '#fbbf24', 
                              fontSize: 12, 
                              fontStyle: 'italic',
                              lineHeight: 1.3
                            }}>
                              {question.kidExplanation}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div style={{ textAlign: 'center', display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => {
              setClaimed(false)
              setCurrentQuestionIndex(0)
              setAnswers({})
              setShowResults(false)
            }}
            style={{ 
              backgroundColor: '#ffffff',
              color: '#000000',
              border: 'none',
              padding: '12px 24px',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: 16,
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.3)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
          >
            🔄 Redo News Q&A (No BTC Reward)
          </button>
          <button 
            onClick={() => window.history.back()}
            style={{ 
              backgroundColor: '#fbbf24',
              color: '#000000',
              border: 'none',
              padding: '12px 24px',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: 16,
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 4px 12px rgba(251, 191, 36, 0.4)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
          >
            ← Go back to the previous page to start Section 5: Claim
          </button>
        </div>
      </div>
    )
  }
  
  // If no questions available, show error message
  if (allQuestions.length === 0) {
    return (
      <div className="card">
        <h3>Section 4: News from Bob</h3>
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{ fontSize: 16, color: '#ef4444', marginBottom: 8 }}>
            ⚠️ No news questions available for this topic
          </div>
          <div style={{ fontSize: 14, color: '#94a3b8', marginBottom: 16 }}>
            Please check the topic content configuration.
          </div>
          <div 
            onClick={() => window.history.back()}
            style={{ 
              fontSize: 13, 
              color: '#fbbf24', 
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: '8px 12px',
              borderRadius: 6,
              backgroundColor: '#2d1b1b',
              border: '1px solid #fbbf24',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}
          >
            ← Go back to the previous page
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="card">
      <h3>Section 4: News from Bob</h3>
      
      {!showResults ? (
        <>
          <div style={{ marginBottom: 16, padding: 12, backgroundColor: '#1f2937', borderRadius: 8 }}>
            <div style={{ fontSize: 14, color: '#94a3b8', marginBottom: 8 }}>
              Question {currentQuestionIndex + 1} of {allQuestions.length}
            </div>
            <div style={{ fontSize: 16, fontWeight: 'bold', color: '#e0e0e0', marginBottom: 12 }}>
              {currentQuestion.text}
            </div>
          </div>
          
          <div style={{ textAlign: 'left', marginBottom: 20 }}>
            {Object.entries(currentQuestion.options).map(([k, v]) => (
              <label key={k} style={{ 
                display: 'block', 
                marginBottom: 8, 
                padding: 12, 
                backgroundColor: '#1f2937', 
                borderRadius: 8,
                border: answers[currentQuestionIndex] === k ? '2px solid #4ade80' : '1px solid #333',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}>
                <input 
                  type="radio" 
                  name="news" 
                  value={k}
                  checked={answers[currentQuestionIndex] === k}
                  onChange={() => handleAnswerSelect(currentQuestionIndex, k)}
                  style={{ marginRight: 8 }}
                /> 
                <span style={{ fontWeight: 'bold', color: '#4ade80' }}>{k})</span> {v}
              </label>
            ))}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button 
              onClick={handleNext}
              disabled={!isCurrentQuestionAnswered}
              style={{
                backgroundColor: isCurrentQuestionAnswered ? '#4ade80' : '#666',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 'bold',
                cursor: isCurrentQuestionAnswered ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s ease'
              }}
            >
              {currentQuestionIndex < allQuestions.length - 1 ? 'Next' : 'Submit All Answers'}
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={{ marginBottom: 20 }}>
            <h4 style={{ color: '#4ade80', marginBottom: 16 }}>📰 News Q&A Results</h4>
            
            {allQuestions.map((question, index) => {
              const userAnswer = answers[index]
              const isCorrect = userAnswer === question.correct
              
              return (
                <div key={index} style={{ 
                  marginBottom: 16, 
                  padding: 16, 
                  backgroundColor: '#1f2937', 
                  borderRadius: 8,
                  border: isCorrect ? '2px solid #4ade80' : '2px solid #ef4444'
                }}>
                  <div style={{ fontSize: 14, color: '#94a3b8', marginBottom: 8 }}>
                    Question {index + 1}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 'bold', color: '#e0e0e0', marginBottom: 12 }}>
                    {question.text}
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ 
                      fontSize: 20, 
                      marginRight: 8,
                      color: isCorrect ? '#4ade80' : '#ef4444'
                    }}>
                      {isCorrect ? '✅' : '❌'}
                    </span>
                    <span style={{ 
                      fontSize: 14, 
                      color: isCorrect ? '#4ade80' : '#ef4444',
                      fontWeight: 'bold'
                    }}>
                      {isCorrect ? 'Correct!' : 'Incorrect'}
                    </span>
                  </div>
                  
                  <div style={{ fontSize: 14, color: '#94a3b8', marginBottom: 8 }}>
                    Your answer: <span style={{ color: '#fbbf24' }}>{userAnswer}) {question.options[userAnswer]}</span>
                  </div>
                  
                  {!isCorrect && (
                    <div style={{ fontSize: 14, color: '#4ade80' }}>
                      Correct answer: <span style={{ fontWeight: 'bold' }}>{question.correct}) {question.options[question.correct]}</span>
                    </div>
                  )}
                  
                  {/* Explanation Section */}
                  {question.explanation && (
                    <div style={{ 
                      marginTop: 12, 
                      padding: 12, 
                      backgroundColor: '#000000', 
                      borderRadius: 8, 
                      border: '1px solid #fbbf24'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 8, 
                        marginBottom: 8 
                      }}>
                        <span style={{ fontSize: 16 }}>💡</span>
                        <span style={{ 
                          color: '#fbbf24', 
                          fontWeight: 'bold', 
                          fontSize: 14 
                        }}>
                          Explanation:
                        </span>
                      </div>
                      <div style={{ 
                        color: '#ffffff', 
                        fontSize: 13, 
                        lineHeight: 1.4,
                        marginBottom: 8
                      }}>
                        {question.explanation}
                      </div>
                      
                      {/* Kid-Friendly Analogy */}
                      {question.kidExplanation && (
                        <div style={{ 
                          padding: 8, 
                          backgroundColor: '#1a1a1a', 
                          borderRadius: 6, 
                          border: '1px solid #4ade80'
                        }}>
                          <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 6, 
                            marginBottom: 4 
                          }}>
                            <span style={{ fontSize: 14 }}>🧒</span>
                            <span style={{ 
                              color: '#4ade80', 
                              fontWeight: 'bold', 
                              fontSize: 12 
                            }}>
                              Simple Analogy:
                            </span>
                          </div>
                          <div style={{ 
                            color: '#fbbf24', 
                            fontSize: 12, 
                            fontStyle: 'italic',
                            lineHeight: 1.3
                          }}>
                            {question.kidExplanation}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            {isAllCorrect ? (
              <>
                <div style={{ fontSize: 18, color: '#4ade80', fontWeight: 'bold', marginBottom: 8 }}>
                  🎉 All Questions Correct!
                </div>
                <div style={{ fontSize: 14, color: '#94a3b8', marginBottom: 16 }}>
                  You've successfully answered all news questions correctly!
                </div>
                <button 
                  onClick={handleClaimBTC}
                  style={{
                    backgroundColor: '#4ade80',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: 8,
                    fontSize: 16,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginBottom: 12
                  }}
                >
                  Claim +2 BTC
                </button>
                <div 
                  onClick={() => window.history.back()}
                  style={{ 
                    fontSize: 13, 
                    color: '#fbbf24', 
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: '8px 12px',
                    borderRadius: 6,
                    backgroundColor: '#2d1b1b',
                    border: '1px solid #fbbf24',
                    display: 'inline-block',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#fbbf24'
                    e.target.style.color = '#000'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#2d1b1b'
                    e.target.style.color = '#fbbf24'
                  }}
                >
                  ← Go back to the previous page to start Section 5: Claim
                </div>
              </>
            ) : (
              <>
                <div style={{ fontSize: 18, color: '#ef4444', fontWeight: 'bold', marginBottom: 8 }}>
                  ❌ Some Answers Incorrect
                </div>
                <div style={{ fontSize: 14, color: '#94a3b8', marginBottom: 16 }}>
                  Please review the incorrect answers above and try again.
                </div>
                <button 
                  onClick={handleTryAgain}
                  style={{
                    backgroundColor: '#fbbf24',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: 8,
                    fontSize: 16,
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Try Again
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function Section5Claim() {
  const { completeSection, activeTopicIndex, isSectionClaimed, claimSection } = useStore()
  const { topicIndex } = useParams()
  const index = Number(topicIndex || 0)
  const content = TOPIC_CONTENT[index] || TOPIC_CONTENT[0]
  const claimed = isSectionClaimed(index, 5)
  
  function handleClaim() {
    if (!claimed) {
      claimSection(index, 5)
      completeSection(index)
    }
  }
  
  function goBackToTopic() {
    window.history.back()
  }
  
  return (
    <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24' }}>
      <h3 style={{ color: '#fbbf24', textAlign: 'center', marginBottom: 20, fontSize: 24 }}>
        🏆 Section 5: Final Claim
      </h3>
      
      {claimed ? (
        // Review State - Already Claimed
        <div>
          {/* Completion Header */}
          <div style={{ 
            marginBottom: 24, 
            padding: 24, 
            backgroundColor: '#1a1a1a', 
            borderRadius: 12, 
            border: '2px solid #fbbf24',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
            <h4 style={{ color: '#fbbf24', margin: '0 0 8px 0', fontSize: 24 }}>
              Topic Completed!
            </h4>
            <p style={{ color: '#ffffff', margin: '0 0 16px 0', fontSize: 16 }}>
              Congratulations! You've successfully completed all sections of "{BASIC_TOPICS[index]}" and claimed your final reward.
            </p>
            <div style={{ 
              padding: 16, 
              backgroundColor: '#000000', 
              borderRadius: 8, 
              border: '1px solid #fbbf24',
              marginBottom: 16
            }}>
              <div style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: 18 }}>
                ✅ Final BTC Reward Claimed (+2 BTC)
              </div>
            </div>
          </div>

          {/* Topic Summary */}
          <div style={{ 
            marginBottom: 24, 
            padding: 20, 
            backgroundColor: '#1a1a1a', 
            borderRadius: 12, 
            border: '1px solid #fbbf24'
          }}>
            <h4 style={{ color: '#fbbf24', margin: '0 0 16px 0', fontSize: 18, textAlign: 'center' }}>
              📚 What You Learned
            </h4>
            <div style={{ display: 'grid', gap: 12 }}>
              {content.tutorial && content.tutorial.map((point, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 12,
                  padding: 12,
                  backgroundColor: '#000000',
                  borderRadius: 8,
                  border: '1px solid #fbbf24'
                }}>
                  <div style={{ flexShrink: 0, width: '60px', height: '60px' }}>
                    <TutorialImage 
                      title={point}
                      size="60px"
                      alt={`${point} illustration`}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#ffffff', fontSize: 14, fontWeight: 'bold', marginBottom: 4 }}>
                      {point}
                    </div>
                    {content.tutorialKids && content.tutorialKids[i] && (
                      <div style={{ color: '#fbbf24', fontSize: 12, fontStyle: 'italic' }}>
                        💡 {content.tutorialKids[i]}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Summary */}
          <div style={{ 
            marginBottom: 24, 
            padding: 20, 
            backgroundColor: '#1a1a1a', 
            borderRadius: 12, 
            border: '1px solid #4ade80'
          }}>
            <h4 style={{ color: '#4ade80', margin: '0 0 16px 0', fontSize: 18, textAlign: 'center' }}>
              🏆 Achievement Summary
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              <div style={{ 
                padding: 12, 
                backgroundColor: '#000000', 
                borderRadius: 8, 
                border: '1px solid #fbbf24',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 24, marginBottom: 4 }}>📚</div>
                <div style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: 14 }}>Tutorial</div>
                <div style={{ color: '#ffffff', fontSize: 12 }}>Completed</div>
              </div>
              <div style={{ 
                padding: 12, 
                backgroundColor: '#000000', 
                borderRadius: 8, 
                border: '1px solid #fbbf24',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 24, marginBottom: 4 }}>🧠</div>
                <div style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: 14 }}>Quiz</div>
                <div style={{ color: '#ffffff', fontSize: 12 }}>Completed</div>
              </div>
              <div style={{ 
                padding: 12, 
                backgroundColor: '#000000', 
                borderRadius: 8, 
                border: '1px solid #fbbf24',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 24, marginBottom: 4 }}>🎮</div>
                <div style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: 14 }}>Simulation</div>
                <div style={{ color: '#ffffff', fontSize: 12 }}>Completed</div>
              </div>
              <div style={{ 
                padding: 12, 
                backgroundColor: '#000000', 
                borderRadius: 8, 
                border: '1px solid #fbbf24',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 24, marginBottom: 4 }}>📰</div>
                <div style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: 14 }}>News Q&A</div>
                <div style={{ color: '#ffffff', fontSize: 12 }}>Completed</div>
              </div>
              <div style={{ 
                padding: 12, 
                backgroundColor: '#000000', 
                borderRadius: 8, 
                border: '1px solid #4ade80',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 24, marginBottom: 4 }}>🏆</div>
                <div style={{ color: '#4ade80', fontWeight: 'bold', fontSize: 14 }}>Final Claim</div>
                <div style={{ color: '#ffffff', fontSize: 12 }}>Completed</div>
              </div>
            </div>
          </div>

          {/* Navigation Button */}
          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={goBackToTopic}
              style={{ 
                backgroundColor: '#fbbf24',
                color: '#000000',
                border: 'none',
                padding: '16px 32px',
                borderRadius: 12,
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: 18,
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px rgba(251, 191, 36, 0.4)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-4px)'
                e.target.style.boxShadow = '0 12px 32px rgba(251, 191, 36, 0.6)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 8px 24px rgba(251, 191, 36, 0.4)'
              }}
            >
              ← Back to Topic Overview
            </button>
          </div>
        </div>
      ) : (
        // Active State - Ready to Claim
        <div>
          <div style={{ 
            marginBottom: 24, 
            padding: 24, 
            backgroundColor: '#1a1a1a', 
            borderRadius: 12, 
            border: '2px solid #fbbf24',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🏆</div>
            <h4 style={{ color: '#fbbf24', margin: '0 0 8px 0', fontSize: 20 }}>
              Ready for Final Claim!
            </h4>
            <p style={{ color: '#ffffff', margin: '0 0 16px 0', fontSize: 14 }}>
              You've completed all sections of "{BASIC_TOPICS[index]}". Claim your final reward to complete this topic!
            </p>
            <div style={{ 
              padding: 12, 
              backgroundColor: '#000000', 
              borderRadius: 8, 
              border: '1px solid #4ade80',
              marginBottom: 16
            }}>
              <div style={{ color: '#4ade80', fontWeight: 'bold', fontSize: 16 }}>
                🎯 Final Reward: +2 BTC
              </div>
            </div>
          </div>

          {/* Claim Button */}
          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={handleClaim}
              style={{ 
                backgroundColor: '#4ade80',
                color: '#000000',
                border: 'none',
                padding: '16px 32px',
                borderRadius: 12,
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: 18,
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px rgba(74, 222, 128, 0.4)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-4px)'
                e.target.style.boxShadow = '0 12px 32px rgba(74, 222, 128, 0.6)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 8px 24px rgba(74, 222, 128, 0.4)'
              }}
            >
              🏆 Claim Final Reward (+2 BTC)
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function DailyMissions() {
  const { dailyMissions, canClaimShareBonus, claimShareBonus, markMission } = useStore()
  
  const missions = [
    {
      id: 1,
      title: "Complete a Topic",
      description: "Finish all 5 sections of any topic",
      reward: "+2 BTC",
      status: dailyMissions.completeTopic ? 'completed' : 'pending',
      icon: "📚"
    },
    {
      id: 2,
      title: "Share Achievement",
      description: "Share your progress on social media",
      reward: "+2 BTC",
      status: dailyMissions.claimedShareBonus ? 'completed' : canClaimShareBonus ? 'ready' : 'locked',
      icon: "📱",
      action: dailyMissions.completeTopic ? (
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <button 
            onClick={() => markMission('shareOnSocial')} 
            style={{ 
              padding: '4px 8px', 
              fontSize: 12, 
              backgroundColor: '#fbbf24', 
              color: '#000000', 
              border: 'none', 
              borderRadius: 4,
              cursor: 'pointer'
            }}
          >
            I shared it
          </button>
          <button 
            onClick={claimShareBonus} 
            disabled={!canClaimShareBonus}
            style={{ 
              padding: '4px 8px', 
              fontSize: 12, 
              backgroundColor: canClaimShareBonus ? '#ffffff' : '#6b7280', 
              color: canClaimShareBonus ? '#000000' : '#ffffff', 
              border: 'none', 
              borderRadius: 4,
              cursor: canClaimShareBonus ? 'pointer' : 'not-allowed'
            }}
          >
            Claim +2 BTC
          </button>
        </div>
      ) : null
    },
    {
      id: 3,
      title: "Daily Quiz",
      description: "Answer today's altcoin question",
      reward: "+1 BTC",
      status: dailyMissions.dailyAltcoinQuiz ? 'completed' : 'pending',
      icon: "🧠",
      action: (
        <button 
          onClick={() => markMission('dailyAltcoinQuiz')}
          style={{ 
            padding: '4px 8px', 
            fontSize: 12, 
            backgroundColor: '#fbbf24', 
            color: '#000000', 
            border: 'none', 
            borderRadius: 4,
            cursor: 'pointer',
            marginTop: 8
          }}
        >
          Answer Question
        </button>
      )
    }
  ]
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#fbbf24'
      case 'ready': return '#ffffff'
      case 'locked': return '#6b7280'
      default: return '#fbbf24'
    }
  }
  
  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return '✅ Done'
      case 'ready': return '🎯 Ready'
      case 'locked': return '🔒 Locked'
      default: return '⏳ Pending'
    }
  }
  
  return (
    <div className="card" style={{ backgroundColor: '#000000', border: '2px solid #fbbf24' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <Trophy size={18} style={{ color: '#fbbf24' }} />
        <h3 style={{ margin: 0, color: '#fbbf24' }}>Daily Missions</h3>
      </div>
      
      <div style={{ display: 'grid', gap: 12 }}>
        {missions.map((mission) => (
          <div 
            key={mission.id}
            style={{ 
              padding: 12, 
              backgroundColor: '#1a1a1a', 
              borderRadius: 8, 
              border: `1px solid ${getStatusColor(mission.status)}`
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 16 }}>{mission.icon}</span>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: 14, color: '#ffffff' }}>{mission.title}</div>
                  <div style={{ fontSize: 12, color: '#ffffff' }}>{mission.description}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 12, color: '#fbbf24', fontWeight: 'bold' }}>{mission.reward}</div>
                <div style={{ fontSize: 11, color: getStatusColor(mission.status) }}>
                  {getStatusText(mission.status)}
                </div>
              </div>
            </div>
            {mission.action}
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <StoreProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<CryptoDashboard />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/about" element={<About />} />
          <Route path="/topic/:topicIndex" element={<TopicPage />} />
          <Route path="/topic/:topicIndex/section/:sectionNumber" element={<SectionRouter />} />
        </Routes>
      </Layout>
    </StoreProvider>
  )
}

export default App
