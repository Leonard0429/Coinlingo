import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  AlertTriangle, 
  Shield, 
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Clock,
  Tag
} from 'lucide-react'

function NewNewsPage() {
  const [articles] = useState([
    {
      id: 1,
      title: "New TikTok Scam Alert: Fake Investment Schemes Targeting Teens",
      summary: "Recent reports show scammers using TikTok to promote fake cryptocurrency investments to young people.",
      category: "Scam Alert",
      readTime: "3 min read",
      date: "2024-01-15",
      color: "from-red-400 to-pink-500",
      tags: ["TikTok", "Investment Scams", "Teens"]
    },
    {
      id: 2,
      title: "Why Young People Lose Money to Fake Investments",
      summary: "Understanding the psychology behind why young adults are vulnerable to investment scams and how to protect yourself.",
      category: "Education",
      readTime: "5 min read",
      date: "2024-01-12",
      color: "from-blue-400 to-purple-500",
      tags: ["Psychology", "Investment", "Protection"]
    },
    {
      id: 3,
      title: "Instagram DMs: The New Frontier for Scammers",
      summary: "Learn about the latest scam tactics using Instagram direct messages and how to spot them.",
      category: "Social Media",
      readTime: "4 min read",
      date: "2024-01-10",
      color: "from-purple-400 to-pink-500",
      tags: ["Instagram", "Social Media", "DMs"]
    },
    {
      id: 4,
      title: "Budgeting Apps: Which Ones Actually Help Teens Save?",
      summary: "A comprehensive review of budgeting apps designed specifically for young adults and students.",
      category: "Tools",
      readTime: "6 min read",
      date: "2024-01-08",
      color: "from-green-400 to-blue-500",
      tags: ["Budgeting", "Apps", "Teens"]
    },
    {
      id: 5,
      title: "Spot the Red Flags: Common Online Scam Patterns",
      summary: "Learn to identify the warning signs that scream 'SCAM' before you lose your money.",
      category: "Safety Tips",
      readTime: "4 min read",
      date: "2024-01-05",
      color: "from-yellow-400 to-orange-500",
      tags: ["Red Flags", "Online Safety", "Patterns"]
    },
    {
      id: 6,
      title: "Digital Wallet Security: What Every Teen Should Know",
      summary: "Essential security tips for keeping your digital payments safe and secure.",
      category: "Security",
      readTime: "5 min read",
      date: "2024-01-03",
      color: "from-indigo-400 to-purple-500",
      tags: ["Digital Wallet", "Security", "Payments"]
    }
  ])

  const categories = ["All", "Scam Alert", "Education", "Social Media", "Tools", "Safety Tips", "Security"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Scam Alert": return <AlertTriangle size={20} />
      case "Education": return <Shield size={20} />
      case "Social Media": return <TrendingUp size={20} />
      case "Tools": return <Tag size={20} />
      case "Safety Tips": return <Shield size={20} />
      case "Security": return <Shield size={20} />
      default: return <Tag size={20} />
    }
  }

  return (
    <div className="min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Stay Safe & Informed</h1>
        <p className="text-gray-600">Real-world tips to protect your money and make smart financial decisions</p>
      </div>

      {/* Category Filter */}
      <div className="glass-card p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter by Category:</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg'
                  : 'glass-button'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div key={article.id} className="glass-card p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <div className={`p-2 rounded-full bg-gradient-to-r ${article.color} text-white`}>
                {getCategoryIcon(article.category)}
              </div>
              <span className="text-sm font-medium text-gray-700">{article.category}</span>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
              {article.title}
            </h3>

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {article.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {article.readTime}
              </div>
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>

            <button className="w-full glass-button p-3 flex items-center justify-center gap-2">
              Read Article
              <ExternalLink size={16} />
            </button>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="glass-card p-8 text-center">
          <div className="text-4xl mb-4">📰</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">No articles found</h3>
          <p className="text-gray-600">Try selecting a different category.</p>
        </div>
      )}

      {/* Safety Tips Section */}
      <div className="glass-card p-8 mt-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Safety Tips</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🚨</div>
            <h4 className="font-bold text-gray-800 mb-2">Never Share Passwords</h4>
            <p className="text-sm text-gray-600">Keep your login information private, even from friends.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🔍</div>
            <h4 className="font-bold text-gray-800 mb-2">Verify Before Trusting</h4>
            <p className="text-sm text-gray-600">Always double-check information from unknown sources.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">💳</div>
            <h4 className="font-bold text-gray-800 mb-2">Use Secure Payment</h4>
            <p className="text-sm text-gray-600">Only make payments through trusted, secure platforms.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">📞</div>
            <h4 className="font-bold text-gray-800 mb-2">Ask for Help</h4>
            <p className="text-sm text-gray-600">When in doubt, ask a trusted adult for advice.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <Shield size={24} />
          Learn to Protect Yourself
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  )
}

export default NewNewsPage

