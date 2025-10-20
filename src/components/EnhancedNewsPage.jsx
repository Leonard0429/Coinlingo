import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  AlertTriangle, 
  Shield, 
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Clock,
  Tag,
  Star,
  BookOpen,
  Eye,
  Heart
} from 'lucide-react'

function EnhancedNewsPage() {
  const [articles] = useState([
    {
      id: 1,
      title: "New TikTok Scam Alert: Fake Investment Schemes Targeting Teens",
      summary: "Recent reports show scammers using TikTok to promote fake cryptocurrency investments to young people. Learn how to spot these red flags.",
      category: "Scam Alert",
      readTime: "3 min read",
      date: "2024-01-15",
      gradient: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
      tags: ["TikTok", "Investment Scams", "Teens"],
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: "Why Young People Lose Money to Fake Investments",
      summary: "Understanding the psychology behind why young adults are vulnerable to investment scams and how to protect yourself from falling victim.",
      category: "Education",
      readTime: "5 min read",
      date: "2024-01-12",
      gradient: "linear-gradient(135deg, #A1C4FD, #CBB2FE)",
      tags: ["Psychology", "Investment", "Protection"],
      views: 890,
      likes: 67,
      featured: false
    },
    {
      id: 3,
      title: "Instagram DMs: The New Frontier for Scammers",
      summary: "Learn about the latest scam tactics using Instagram direct messages and how to spot them before they steal your money.",
      category: "Social Media",
      readTime: "4 min read",
      date: "2024-01-10",
      gradient: "linear-gradient(135deg, #CBB2FE, #FFB6C1)",
      tags: ["Instagram", "Social Media", "DMs"],
      views: 2100,
      likes: 156,
      featured: true
    },
    {
      id: 4,
      title: "Budgeting Apps: Which Ones Actually Help Teens Save?",
      summary: "A comprehensive review of budgeting apps designed specifically for young adults and students. Find the perfect tool for your financial goals.",
      category: "Tools",
      readTime: "6 min read",
      date: "2024-01-08",
      gradient: "linear-gradient(135deg, #A8E6CF, #A1C4FD)",
      tags: ["Budgeting", "Apps", "Teens"],
      views: 1580,
      likes: 124,
      featured: false
    },
    {
      id: 5,
      title: "Spot the Red Flags: Common Online Scam Patterns",
      summary: "Learn to identify the warning signs that scream 'SCAM' before you lose your money. Real examples and practical tips.",
      category: "Safety Tips",
      readTime: "4 min read",
      date: "2024-01-05",
      gradient: "linear-gradient(135deg, #FFD93D, #FF6B6B)",
      tags: ["Red Flags", "Online Safety", "Patterns"],
      views: 3200,
      likes: 245,
      featured: true
    },
    {
      id: 6,
      title: "Digital Wallet Security: What Every Teen Should Know",
      summary: "Essential security tips for keeping your digital payments safe and secure. Protect your money with these expert recommendations.",
      category: "Security",
      readTime: "5 min read",
      date: "2024-01-03",
      gradient: "linear-gradient(135deg, #4ECDC4, #45B7D1)",
      tags: ["Digital Wallet", "Security", "Payments"],
      views: 1870,
      likes: 134,
      featured: false
    }
  ])

  const categories = ["All", "Scam Alert", "Education", "Social Media", "Tools", "Safety Tips", "Security"]
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedArticles, setLikedArticles] = useState(new Set())

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  const featuredArticles = articles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Scam Alert": return <AlertTriangle size={20} />
      case "Education": return <BookOpen size={20} />
      case "Social Media": return <TrendingUp size={20} />
      case "Tools": return <Tag size={20} />
      case "Safety Tips": return <Shield size={20} />
      case "Security": return <Shield size={20} />
      default: return <Tag size={20} />
    }
  }

  const toggleLike = (articleId) => {
    setLikedArticles(prev => {
      const newSet = new Set(prev)
      if (newSet.has(articleId)) {
        newSet.delete(articleId)
      } else {
        newSet.add(articleId)
      }
      return newSet
    })
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
          Stay Safe & Informed
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600"
          variants={itemVariants}
        >
          Real-world tips to protect your money and make smart financial decisions
        </motion.p>
      </motion.div>

      {/* Featured Articles */}
      <motion.div 
        className="mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              className="glass-card p-8 card-hover group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                ⭐ Featured
              </div>

              {/* Gradient Background */}
              <div 
                className="absolute inset-0 opacity-10 rounded-2xl"
                style={{ background: article.gradient }}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="p-2 rounded-full text-white"
                    style={{ background: article.gradient }}
                  >
                    {getCategoryIcon(article.category)}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{article.category}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-gray-900 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      {article.views}
                    </div>
                  </div>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <motion.button 
                    className="glass-button p-3 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Article
                    <ExternalLink size={16} />
                  </motion.button>

                  <motion.button
                    onClick={() => toggleLike(article.id)}
                    className={`p-2 rounded-full transition-colors ${
                      likedArticles.has(article.id) 
                        ? 'text-red-500 bg-red-50' 
                        : 'text-gray-400 hover:text-red-500'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart 
                      size={20} 
                      fill={likedArticles.has(article.id) ? 'currentColor' : 'none'} 
                    />
                    <span className="ml-1 text-xs">
                      {article.likes + (likedArticles.has(article.id) ? 1 : 0)}
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        className="glass-card p-6 mb-8"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Filter by Category:</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'glass-button text-white shadow-lg'
                  : 'glass-button'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Regular Articles Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {regularArticles.map((article, index) => (
          <motion.article 
            key={article.id} 
            className="glass-card p-6 card-hover group relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            {/* Gradient Background */}
            <div 
              className="absolute inset-0 opacity-5 rounded-2xl"
              style={{ background: article.gradient }}
            ></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="p-2 rounded-full text-white"
                  style={{ background: article.gradient }}
                >
                  {getCategoryIcon(article.category)}
                </div>
                <span className="text-sm font-medium text-gray-700">{article.category}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight group-hover:text-gray-900 transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {article.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  {article.readTime}
                </div>
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>

              <div className="flex items-center justify-between">
                <motion.button 
                  className="glass-button p-3 flex items-center gap-2 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read
                  <ExternalLink size={14} />
                </motion.button>

                <motion.button
                  onClick={() => toggleLike(article.id)}
                  className={`p-2 rounded-full transition-colors ${
                    likedArticles.has(article.id) 
                      ? 'text-red-500 bg-red-50' 
                      : 'text-gray-400 hover:text-red-500'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart 
                    size={16} 
                    fill={likedArticles.has(article.id) ? 'currentColor' : 'none'} 
                  />
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {filteredArticles.length === 0 && (
        <motion.div 
          className="glass-card p-8 text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-4xl mb-4">📰</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">No articles found</h3>
          <p className="text-gray-600">Try selecting a different category.</p>
        </motion.div>
      )}

      {/* Safety Tips Section */}
      <motion.div 
        className="glass-card p-10 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Safety Tips</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🚨",
              title: "Never Share Passwords",
              description: "Keep your login information private, even from friends."
            },
            {
              icon: "🔍",
              title: "Verify Before Trusting",
              description: "Always double-check information from unknown sources."
            },
            {
              icon: "💳",
              title: "Use Secure Payment",
              description: "Only make payments through trusted, secure platforms."
            },
            {
              icon: "📞",
              title: "Ask for Help",
              description: "When in doubt, ask a trusted adult for advice."
            }
          ].map((tip, index) => (
            <motion.div
              key={index}
              className="text-center p-6 glass-card card-hover"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tip.icon}
              </motion.div>
              <h4 className="font-bold text-gray-800 mb-2">{tip.title}</h4>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-12"
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
            className="inline-flex items-center gap-3 px-10 py-5 glass-button text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500"
          >
            <Shield size={28} />
            Learn to Protect Yourself
            <ArrowRight size={24} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default EnhancedNewsPage

