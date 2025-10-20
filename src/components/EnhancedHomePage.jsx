import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingUp, 
  Shield, 
  Lock, 
  ArrowRight, 
  Star,
  Target,
  BookOpen,
  Zap,
  Award,
  Users,
  Play
} from 'lucide-react'

function EnhancedHomePage() {
  const [mascotMessage, setMascotMessage] = useState("Ready to level up your money game?")
  const [showBubble, setShowBubble] = useState(true)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const messages = [
      "Ready to level up your money game?",
      "Let's make money fun! 💰",
      "Smart money moves start here! 🚀"
    ]
    
    const interval = setInterval(() => {
      setMascotMessage(messages[Math.floor(Math.random() * messages.length)])
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6
    }))
    setParticles(newParticles)
  }, [])

  const previewCards = [
    {
      icon: TrendingUp,
      emoji: "💸",
      title: "Budgeting 101",
      description: "Track, save, and spend smart.",
        gradient: "linear-gradient(135deg, #FFD700, #FFA500)",
        link: "/learn",
        xp: "+10 XP",
        color: "#FFD700"
    },
    {
      icon: Shield,
      emoji: "🛡️",
      title: "Scam & Fraud Prevention",
      description: "Spot the red flags online.",
        gradient: "linear-gradient(135deg, #FFA500, #FF8C00)",
        link: "/learn",
        xp: "+15 XP",
        color: "#FFA500"
    },
    {
      icon: Lock,
      emoji: "🔐",
      title: "Wallet Safety",
      description: "Protect your money like a pro.",
        gradient: "linear-gradient(135deg, #FF8C00, #FF6600)",
        link: "/learn",
        xp: "+20 XP",
        color: "#FF8C00"
    }
  ]

  const stats = [
    { icon: Users, value: "10K+", label: "Active Learners" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Star, value: "4.9", label: "User Rating" },
    { icon: Zap, value: "24/7", label: "Available" }
  ]

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`
            }}
            animate={{
              y: [-20, -100],
              x: [0, 50],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16 pt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          {/* Animated Mascot */}
          <motion.div 
            className="relative inline-block mb-6"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="text-8xl mb-4">🐂</div>
            <AnimatePresence>
              {showBubble && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  className="absolute -top-4 -right-4 glass-card p-4 max-w-xs shadow-2xl"
                >
                  <div className="text-sm font-medium text-gray-800">
                    {mascotMessage}
                  </div>
                  <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 glass-card border-r border-b"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.h1 
            className="text-6xl font-bold gradient-text mb-4 glow-text"
            variants={itemVariants}
          >
            💰 Learn How to Be Smart With Money
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-700 mb-8 font-medium"
            variants={itemVariants}
          >
            The Fun Way.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            CoinLingo helps you learn budgeting, scam safety, and wallet management — one fun lesson at a time.
          </motion.p>
        </motion.div>

        {/* Start Learning Button */}
        <motion.div variants={itemVariants}>
          <Link 
            to="/learn"
            className="inline-flex items-center gap-3 px-10 py-5 glass-button text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500"
          >
            <Play size={28} />
            Start Learning
            <ArrowRight size={24} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Preview Cards Section */}
      <motion.div 
        className="grid md:grid-cols-3 gap-8 mb-16 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {previewCards.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={card.link} className="block">
              <div 
                className="premium-card sparkle p-8 text-center card-hover group relative overflow-hidden"
                style={{ 
                  background: card.gradient,
                  backgroundOpacity: 0.1,
                  animation: `fadeIn 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                {/* XP Badge */}
                <div className="absolute top-4 right-4 xp-badge">
                  {card.xp}
                </div>

                {/* Gradient Border Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{ background: card.gradient }}
                ></div>

                <motion.div 
                  className="text-6xl mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {card.emoji}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{card.description}</p>
                
                <motion.div 
                  className="flex items-center justify-center text-sm font-bold text-gray-700 group-hover:text-gray-900"
                  whileHover={{ x: 5 }}
                >
                  Start Learning
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="premium-card ambient-glow p-8 mb-16"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        style={{ animation: 'fadeIn 1s ease-out' }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          variants={itemVariants}
        >
          Join Thousands of Smart Learners
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="text-4xl mb-3 mx-auto w-16 h-16 glass-card flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon size={24} className="text-gray-700" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        className="glass-card p-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold gradient-text mb-8 text-center"
          variants={itemVariants}
        >
          Why Choose CoinLingo?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🎮",
              title: "Gamified Learning",
              description: "Earn XP, unlock achievements, and level up your financial knowledge with our fun, interactive system!"
            },
            {
              icon: "🛡️",
              title: "Real-World Protection",
              description: "Learn to spot and avoid common online scams targeting young people with practical, up-to-date examples."
            },
            {
              icon: "💡",
              title: "Practical Skills",
              description: "Build real money management skills you'll use for life, from budgeting to secure digital payments."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 glass-card card-hover"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-16"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/learn"
            className="inline-flex items-center gap-3 px-12 py-6 glass-button text-2xl font-bold rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500"
          >
            <Star size={32} />
            Start Your Learning Journey
            <ArrowRight size={28} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default EnhancedHomePage

