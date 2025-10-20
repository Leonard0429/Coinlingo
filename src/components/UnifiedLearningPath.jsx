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
  Zap
} from 'lucide-react'
import { useStore } from '../context/Store.jsx'

function UnifiedLearningPath() {
  const { balance, unlockedTopics, unlockTopic, completedSectionsByTopic } = useStore()
  const navigate = useNavigate()
  const [hoveredTopic, setHoveredTopic] = useState(null)

  // Unified Learning Path Topics
  const learningTopics = [
    // Safety First
    {
      id: 'safety',
      title: 'Safety First',
      subtitle: 'Protect yourself from scams',
      icon: Shield,
      emoji: '🛡️',
      gradient: 'linear-gradient(135deg, #A8FFCE, #5DF2D6)',
      isLocked: false,
      isCompleted: false,
      xpReward: 10,
      description: 'Learn to spot scams and protect your money',
      lessons: [
        'Spotting online scams',
        'Fraud prevention basics',
        'Safe payment methods'
      ]
    },
    
    // Money Basics
    {
      id: 'money-basics',
      title: 'Money Basics',
      subtitle: 'Budgeting & savings',
      icon: DollarSign,
      emoji: '💰',
      gradient: 'linear-gradient(135deg, #5DF2D6, #45D7C2)',
      isLocked: false,
      isCompleted: false,
      xpReward: 15,
      description: 'Master budgeting and saving techniques',
      lessons: [
        'Budgeting game',
        'Savings challenge',
        'Debt trap simulator'
      ]
    },
    
    // Investing & Future
    {
      id: 'investing',
      title: 'Investing & Future',
      subtitle: 'Grow your wealth',
      icon: TrendingUp,
      emoji: '📈',
      gradient: 'linear-gradient(135deg, #45D7C2, #2BC4A8)',
      isLocked: false,
      isCompleted: false,
      xpReward: 20,
      description: 'Learn about investing and long-term planning',
      lessons: [
        'Compound interest simulation',
        'Risk vs. reward',
        'Long-term planning'
      ]
    },
    
    // Digital & Crypto
    {
      id: 'digital-crypto',
      title: 'Digital & Crypto',
      subtitle: 'Modern money',
      icon: Coins,
      emoji: '₿',
      gradient: 'linear-gradient(135deg, #2BC4A8, #1FA890)',
      isLocked: false,
      isCompleted: false,
      xpReward: 25,
      description: 'Understand digital currencies and blockchain',
      lessons: [
        'Blockchain explained simply',
        'Hot vs. cold wallet',
        'How to use crypto safely'
      ]
    },
    
    // Existing Crypto Topics (Keep Original Format)
    {
      id: 'crypto-basics',
      title: 'What is Cryptocurrency?',
      subtitle: 'Digital money basics',
      icon: Coins,
      emoji: '💎',
      gradient: 'linear-gradient(135deg, #1FA890, #0F8A7A)',
      isLocked: false,
      isCompleted: false,
      xpReward: 30,
      description: 'Introduction to cryptocurrency concepts',
      lessons: [
        'Digital currency fundamentals',
        'How crypto works',
        'Types of cryptocurrencies'
      ]
    },
    
    {
      id: 'bitcoin-basics',
      title: 'Bitcoin (BTC) Basics',
      subtitle: 'The first cryptocurrency',
      icon: Coins,
      emoji: '₿',
      gradient: 'linear-gradient(135deg, #0F8A7A, #0A6B5F)',
      isLocked: false,
      isCompleted: false,
      xpReward: 35,
      description: 'Learn about Bitcoin and its features',
      lessons: [
        'Bitcoin history',
        'How Bitcoin works',
        'Bitcoin transactions'
      ]
    },
    
    {
      id: 'blockchain',
      title: 'What is Blockchain?',
      subtitle: 'The technology behind crypto',
      icon: TrendingUp,
      emoji: '⛓️',
      gradient: 'linear-gradient(135deg, #0A6B5F, #054B43)',
      isLocked: false,
      isCompleted: false,
      xpReward: 40,
      description: 'Understand blockchain technology',
      lessons: [
        'Blockchain fundamentals',
        'How blocks work',
        'Decentralization concepts'
      ]
    },
    
    {
      id: 'coins-tokens',
      title: 'Coins vs Tokens',
      subtitle: 'Different types of crypto',
      icon: Star,
      emoji: '🪙',
      gradient: 'linear-gradient(135deg, #054B43, #033A33)',
      isLocked: false,
      isCompleted: false,
      xpReward: 45,
      description: 'Learn the difference between coins and tokens',
      lessons: [
        'Native coins explained',
        'Token types and uses',
        'Choosing the right crypto'
      ]
    },
    
    {
      id: 'market-basics',
      title: 'Market Basics',
      subtitle: 'Trading fundamentals',
      icon: TrendingUp,
      emoji: '📊',
      gradient: 'linear-gradient(135deg, #033A33, #022B26)',
      isLocked: false,
      isCompleted: false,
      xpReward: 50,
      description: 'Understand crypto markets and trading',
      lessons: [
        'Market mechanics',
        'Price movements',
        'Trading strategies'
      ]
    },
    
    {
      id: 'wallets-security',
      title: 'Wallets & Security',
      subtitle: 'Keep your crypto safe',
      icon: Shield,
      emoji: '🔐',
      gradient: 'linear-gradient(135deg, #022B26, #011C1A)',
      isLocked: false,
      isCompleted: false,
      xpReward: 55,
      description: 'Secure storage and wallet management',
      lessons: [
        'Wallet types explained',
        'Security best practices',
        'Backup and recovery'
      ]
    },
    
    {
      id: 'crypto-usage',
      title: 'How People Use Crypto',
      subtitle: 'Real-world applications',
      icon: Zap,
      emoji: '⚡',
      gradient: 'linear-gradient(135deg, #011C1A, #001A18)',
      isLocked: false,
      isCompleted: false,
      xpReward: 60,
      description: 'Practical uses of cryptocurrency',
      lessons: [
        'Payment methods',
        'DeFi applications',
        'NFTs and digital assets'
      ]
    }
  ]

  const handleTopicClick = (topic) => {
    if (!topic.isLocked) {
      navigate(`/topic/${topic.id}`)
    }
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
    <div className="min-h-screen">
      <motion.div 
        className="text-center mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl font-bold gradient-text mb-4 glow-text"
          variants={itemVariants}
        >
          Learning Path
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600"
          variants={itemVariants}
        >
          Master financial literacy and cryptocurrency step by step
        </motion.p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div 
        className="glass-card p-8 mb-12 max-w-4xl mx-auto"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">{balance} BTC</div>
            <div className="text-sm text-gray-300">Total Balance</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">
              {Object.values(completedSectionsByTopic).reduce((sum, count) => sum + count, 0)}
            </div>
            <div className="text-sm text-gray-300">Lessons Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">{unlockedTopics.size}</div>
            <div className="text-sm text-gray-300">Topics Unlocked</div>
          </div>
        </div>
      </motion.div>

      {/* Learning Path Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {learningTopics.map((topic, index) => (
          <motion.div
            key={topic.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div 
              className={`glass-card p-8 cursor-pointer relative overflow-hidden ${
                topic.isLocked ? 'opacity-60' : ''
              }`}
              onClick={() => handleTopicClick(topic)}
              onMouseEnter={() => setHoveredTopic(topic.id)}
              onMouseLeave={() => setHoveredTopic(null)}
            >
              {/* Lock Overlay */}
              {topic.isLocked && (
                <div className="absolute inset-0 glass-card flex items-center justify-center z-10">
                  <Lock size={48} className="text-gray-400" />
                </div>
              )}

              {/* Completed Badge */}
              {topic.isCompleted && (
                <div className="absolute top-4 right-4">
                  <CheckCircle size={24} className="text-green-400" />
                </div>
              )}

              {/* XP Badge */}
              <div className="absolute top-4 left-4 glass-button text-xs">
                +{topic.xpReward} XP
              </div>

              {/* Topic Icon */}
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl"
                style={{ background: topic.gradient }}
              >
                {topic.emoji}
              </div>

              {/* Topic Content */}
              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                {topic.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center">
                {topic.subtitle}
              </p>
              <p className="text-sm text-gray-400 mb-6 text-center">
                {topic.description}
              </p>

              {/* Lessons Preview */}
              <div className="space-y-2 mb-6">
                {topic.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span>{lesson}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="text-center">
                {topic.isLocked ? (
                  <div className="glass-button opacity-50 cursor-not-allowed">
                    <Lock size={16} className="inline mr-2" />
                    Locked
                  </div>
                ) : (
                  <motion.div 
                    className="glass-button inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Play size={16} />
                    Start Learning
                    <ArrowRight size={16} />
                  </motion.div>
                )}
              </div>

              {/* Hover Effect */}
              <AnimatePresence>
                {hoveredTopic === topic.id && !topic.isLocked && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: topic.gradient, opacity: 0.1 }}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievement Section */}
      <motion.div 
        className="glass-card p-10 mt-12 max-w-4xl mx-auto"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🏆', title: 'First Steps', description: 'Complete your first lesson' },
            { icon: '🔥', title: 'Streak Master', description: 'Learn for 7 days straight' },
            { icon: '💎', title: 'Crypto Explorer', description: 'Complete all crypto topics' },
            { icon: '🛡️', title: 'Safety Expert', description: 'Master fraud prevention' }
          ].map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center p-4 glass-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
              <p className="text-sm text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default UnifiedLearningPath

