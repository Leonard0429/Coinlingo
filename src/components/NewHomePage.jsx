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
  Users
} from 'lucide-react'

function NewHomePage() {
  const [mascotMessage, setMascotMessage] = useState("Ready to level up your money game?")
  const [showBubble, setShowBubble] = useState(true)

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

  const previewCards = [
    {
      icon: TrendingUp,
      emoji: "💸",
      title: "Budgeting 101",
      description: "Track, save, and spend smart.",
      color: "from-green-400 to-blue-500",
      gradient: "linear-gradient(135deg, #A8E6CF, #A1C4FD)",
      link: "/learn?topic=budgeting",
      xp: "+5 XP"
    },
    {
      icon: Shield,
      emoji: "🛡️",
      title: "Scam & Fraud Prevention",
      description: "Spot the red flags online.",
      color: "from-blue-400 to-purple-500",
      gradient: "linear-gradient(135deg, #A1C4FD, #CBB2FE)",
      link: "/learn?topic=scams",
      xp: "+8 XP"
    },
    {
      icon: Lock,
      emoji: "🔐",
      title: "Wallet Safety",
      description: "Protect your money like a pro.",
      color: "from-purple-400 to-pink-500",
      gradient: "linear-gradient(135deg, #CBB2FE, #FFB6C1)",
      link: "/learn?topic=wallet",
      xp: "+6 XP"
    }
  ]

  const stats = [
    { icon: Users, value: "10K+", label: "Active Learners" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Star, value: "4.9", label: "User Rating" },
    { icon: Zap, value: "24/7", label: "Available" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="mb-8">
          {/* Mascot Section */}
          <div className="relative inline-block mb-6">
            <div className="text-6xl mb-4">🐂</div>
            {showBubble && (
              <div className="absolute -top-4 -right-4 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white border-opacity-30 max-w-xs">
                <div className="text-sm font-medium text-gray-800">
                  {mascotMessage}
                </div>
                <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white bg-opacity-90 border-r border-b border-white border-opacity-30"></div>
              </div>
            )}
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            💰 Learn How to Be Smart With Money
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            The Fun Way.
          </p>
        </div>

        {/* Start Learning Button */}
        <Link 
          to="/learn"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <BookOpen size={24} />
          Start Learning
          <ArrowRight size={20} />
        </Link>
      </div>

      {/* Preview Cards Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {previewCards.map((card, index) => (
          <Link
            key={index}
            to={card.link}
            className="glass-card p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4">{card.emoji}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <div className="flex items-center justify-center text-sm font-medium text-gray-700 group-hover:text-gray-900">
              Learn more
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Features Section */}
      <div className="glass-card p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why Choose CoinLingo?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Gamified Learning</h3>
            <p className="text-gray-600">Earn XP, unlock achievements, and level up your financial knowledge!</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Scam Protection</h3>
            <p className="text-gray-600">Learn to spot and avoid common online scams targeting young people.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Real-World Skills</h3>
            <p className="text-gray-600">Build practical money management skills you'll use for life.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewHomePage
