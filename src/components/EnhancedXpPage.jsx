import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Star, 
  Target, 
  Trophy, 
  Flame,
  TrendingUp,
  Shield,
  Lock,
  ArrowRight,
  Award,
  Zap,
  Crown,
  Medal,
  Gift,
  Clock
} from 'lucide-react'

function EnhancedXpPage() {
  const [userStats, setUserStats] = useState({
    totalXp: 45,
    level: 3,
    streak: 7,
    completedLessons: 12,
    nextLevelXp: 60,
    achievements: [
      { id: 1, title: "First Steps", description: "Complete your first lesson", earned: true, icon: "👶" },
      { id: 2, title: "Week Warrior", description: "7-day learning streak", earned: true, icon: "🔥" },
      { id: 3, title: "Budget Master", description: "Complete all budgeting lessons", earned: false, icon: "💸" },
      { id: 4, title: "Scam Slayer", description: "Complete all scam prevention lessons", earned: false, icon: "🛡️" },
      { id: 5, title: "Wallet Guardian", description: "Complete all wallet safety lessons", earned: false, icon: "🔐" },
      { id: 6, title: "XP Collector", description: "Earn 100 total XP", earned: false, icon: "⭐" }
    ],
    leaderboard: [
      { rank: 1, name: "Alex M.", xp: 156, avatar: "👑", streak: 15 },
      { rank: 2, name: "Sam K.", xp: 142, avatar: "🚀", streak: 12 },
      { rank: 3, name: "Jordan L.", xp: 128, avatar: "⭐", streak: 10 },
      { rank: 4, name: "You", xp: 45, avatar: "🎯", streak: 7 },
      { rank: 5, name: "Casey R.", xp: 38, avatar: "💎", streak: 5 }
    ]
  })

  const [showDailyClaim, setShowDailyClaim] = useState(true)
  const [claimedToday, setClaimedToday] = useState(false)

  const topics = [
    { 
      name: "Budgeting", 
      icon: TrendingUp, 
      xp: 20, 
      level: 2, 
      gradient: "linear-gradient(135deg, #A8E6CF, #A1C4FD)",
      progress: 75,
      totalLessons: 4,
      completedLessons: 3
    },
    { 
      name: "Scam Prevention", 
      icon: Shield, 
      xp: 15, 
      level: 1, 
      gradient: "linear-gradient(135deg, #A1C4FD, #CBB2FE)",
      progress: 50,
      totalLessons: 4,
      completedLessons: 2
    },
    { 
      name: "Wallet Safety", 
      icon: Lock, 
      xp: 10, 
      level: 1, 
      gradient: "linear-gradient(135deg, #CBB2FE, #FFB6C1)",
      progress: 25,
      totalLessons: 4,
      completedLessons: 1
    }
  ]

  const xpToNextLevel = userStats.nextLevelXp - userStats.totalXp
  const progressPercentage = (userStats.totalXp / userStats.nextLevelXp) * 100

  const claimDailyXP = () => {
    if (!claimedToday) {
      setUserStats(prev => ({
        ...prev,
        totalXp: prev.totalXp + 5,
        streak: prev.streak + 1
      }))
      setClaimedToday(true)
      setShowDailyClaim(false)
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
          Your Progress
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600"
          variants={itemVariants}
        >
          Track your learning journey and achievements!
        </motion.p>
      </motion.div>

      {/* Daily Claim Banner */}
      <AnimatePresence>
        {showDailyClaim && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="glass-card p-6 mb-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🎁</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Daily XP Bonus!</h3>
                  <p className="text-sm text-gray-600">Claim your daily +5 XP reward</p>
                </div>
              </div>
              <motion.button
                onClick={claimDailyXP}
                className="glass-button px-6 py-3 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Gift size={20} />
                Claim +5 XP
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* XP and Level Section */}
      <motion.div 
        className="glass-card p-10 mb-8"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-8">
          <motion.div 
            className="text-8xl mb-6"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎯
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Level {userStats.level}</h2>
          <p className="text-xl text-gray-600">{userStats.totalXp} Total XP</p>
        </div>

        {/* XP Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-700">Progress to Level {userStats.level + 1}</span>
            <span className="text-lg text-gray-600">{xpToNextLevel} XP to go</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <motion.div 
              className="h-6 rounded-full relative"
              style={{ 
                background: "linear-gradient(135deg, #A8E6CF, #A1C4FD, #CBB2FE)",
                width: `${progressPercentage}%` 
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-white opacity-20 rounded-full"></div>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-sm font-bold">
                {Math.round(progressPercentage)}%
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6">
          <motion.div 
            className="glass-card p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="text-3xl mb-3 streak-fire"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🔥
            </motion.div>
            <div className="text-2xl font-bold text-gray-800">{userStats.streak}</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl mb-3">📚</div>
            <div className="text-2xl font-bold text-gray-800">{userStats.completedLessons}</div>
            <div className="text-sm text-gray-600">Lessons Done</div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl mb-3">🏆</div>
            <div className="text-2xl font-bold text-gray-800">{userStats.achievements.filter(a => a.earned).length}</div>
            <div className="text-sm text-gray-600">Achievements</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Topic Progress */}
      <motion.div 
        className="glass-card p-10 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Topic Progress</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-8 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ background: topic.gradient }}
              >
                <topic.icon size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{topic.name}</h4>
              <div className="level-badge mx-auto mb-4">
                Level {topic.level}
              </div>
              <div className="text-2xl font-bold text-gray-700 mb-4">{topic.xp} XP</div>
              
              {/* Progress Ring */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="progress-ring">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-800">
                      {topic.completedLessons}/{topic.totalLessons}
                    </span>
                  </div>
                </div>
              </div>
              
              <Link
                to={`/learn?topic=${topic.name.toLowerCase().replace(' ', '')}`}
                className="glass-button px-6 py-3 text-sm flex items-center justify-center gap-2 mx-auto"
              >
                Continue Learning
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div 
        className="glass-card p-10 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Achievements</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userStats.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className={`glass-card p-6 text-center card-hover ${
                achievement.earned ? 'opacity-100' : 'opacity-60'
              }`}
              variants={itemVariants}
              whileHover={{ scale: achievement.earned ? 1.05 : 1 }}
            >
              <motion.div 
                className="text-4xl mb-4"
                animate={achievement.earned ? {
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {achievement.earned ? achievement.icon : '🔒'}
              </motion.div>
              <h4 className="font-bold text-gray-800 mb-2">{achievement.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
              {achievement.earned ? (
                <motion.div 
                  className="text-xs text-green-600 font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✓ Earned
                </motion.div>
              ) : (
                <div className="text-xs text-gray-500">Locked</div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Leaderboard */}
      <motion.div 
        className="glass-card p-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Leaderboard</h3>
        <div className="space-y-4">
          {userStats.leaderboard.map((user, index) => (
            <motion.div
              key={index}
              className={`glass-card p-6 flex items-center justify-between ${
                user.name === "You" ? 'ring-2 ring-yellow-400 shadow-lg' : ''
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{user.avatar}</div>
                <div>
                  <div className="font-bold text-gray-800 text-lg">{user.name}</div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span>Rank #{user.rank}</span>
                    <span className="flex items-center gap-1">
                      <Flame size={14} className="text-orange-500" />
                      {user.streak}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-800 text-lg">{user.xp} XP</div>
                {user.rank <= 3 && (
                  <motion.div 
                    className="text-sm flex items-center gap-1"
                    animate={{ 
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                    <span className="text-yellow-600 font-bold">
                      {user.rank === 1 ? 'Champion' : user.rank === 2 ? 'Runner-up' : 'Bronze'}
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div 
        className="text-center mt-12"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/learn"
            className="inline-flex items-center gap-3 px-10 py-5 glass-button text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500"
          >
            <Zap size={28} />
            Keep Learning
            <ArrowRight size={24} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default EnhancedXpPage

