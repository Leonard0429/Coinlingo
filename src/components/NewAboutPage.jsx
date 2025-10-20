import { Link } from 'react-router-dom'
import { 
  Heart, 
  Target, 
  Users, 
  Shield,
  BookOpen,
  Star,
  ArrowRight,
  Mail,
  Twitter,
  Instagram,
  Github
} from 'lucide-react'

function NewAboutPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Learn through engaging, bite-sized lessons that make financial education fun and accessible."
    },
    {
      icon: Shield,
      title: "Real-World Protection",
      description: "Get practical skills to protect yourself from scams and make smart financial decisions."
    },
    {
      icon: Target,
      title: "Gamified Experience",
      description: "Earn XP, unlock achievements, and level up your financial knowledge with our game-like system."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Join thousands of young adults learning to be financially savvy in a supportive environment."
    }
  ]

  const stats = [
    { number: "10K+", label: "Active Learners" },
    { number: "50K+", label: "Lessons Completed" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Available Learning" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-6">🐂</div>
        <h1 className="text-5xl font-bold text-gray-800 mb-6">About CoinLingo</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          CoinLingo makes learning about money fun and easy. From avoiding scams to saving your first $100, 
          we help you grow smarter every day.
        </p>
      </div>

      {/* Mission Section */}
      <div className="premium-card ambient-glow p-8 mb-12" style={{ animation: 'fadeIn 1s ease-out' }}>
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">💡</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We believe that financial literacy shouldn't be boring or intimidating. That's why we've created 
            CoinLingo - a gamified learning platform that teaches young adults essential money skills through 
            interactive lessons, real-world scenarios, and fun challenges.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our goal is simple: empower the next generation with the knowledge and confidence to make 
            smart financial decisions, avoid common pitfalls, and build a secure financial future.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="premium-card ambient-glow p-8 mb-12" style={{ animation: 'fadeIn 1.2s ease-out' }}>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose CoinLingo?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="glass-card p-6 mb-4">
                <feature.icon size={32} className="mx-auto text-gray-700 mb-3" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="glass-card p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Impact</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Goals */}
      <div className="glass-card p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What You'll Learn</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Budgeting Basics</h3>
            <p className="text-gray-600">
              Learn to track your income, manage expenses, and save money effectively. 
              Master the fundamentals of personal finance.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Scam & Fraud Prevention</h3>
            <p className="text-gray-600">
              Protect yourself from online scams, phishing attacks, and fraudulent schemes 
              targeting young adults.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Wallet Safety</h3>
            <p className="text-gray-600">
              Keep your digital payments secure with strong passwords, two-factor authentication, 
              and safe online practices.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="glass-card p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Built with Love</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            CoinLingo was created by a team of educators, developers, and financial experts who believe 
            that everyone deserves access to quality financial education. We're passionate about making 
            learning fun, accessible, and practical.
          </p>
          <div className="flex justify-center items-center gap-2 text-gray-600">
            <Heart size={20} className="text-red-500" />
            <span>Made with love for young adults everywhere</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="glass-card p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Get in Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            Have questions, suggestions, or want to share your success story? We'd love to hear from you!
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:hello@coinlingo.com" className="glass-button p-3 rounded-full">
              <Mail size={24} />
            </a>
            <a href="https://twitter.com/coinlingo" className="glass-button p-3 rounded-full">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com/coinlingo" className="glass-button p-3 rounded-full">
              <Instagram size={24} />
            </a>
            <a href="https://github.com/coinlingo" className="glass-button p-3 rounded-full">
              <Github size={24} />
            </a>
          </div>

          <div className="text-gray-600">
            <p>Email: hello@coinlingo.com</p>
            <p>Follow us for tips and updates!</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <Star size={24} />
          Start Your Learning Journey
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  )
}

export default NewAboutPage

