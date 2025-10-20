import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { 
  BookOpen, 
  Shield, 
  TrendingUp, 
  Users, 
  Star, 
  ArrowRight, 
  Play, 
  CheckCircle,
  Zap,
  Globe,
  Award,
  Target
} from 'lucide-react'
import CryptoImage from './CryptoImage.jsx'
import uiDesignConfig from '../../ui_design.js'

function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Crypto Newbie",
      content: "CoinLingo made learning cryptocurrency so easy! The tutorials are clear and the flashcards help me remember everything.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Investor",
      content: "Finally, a platform that explains crypto in simple terms. The mining simulation was especially helpful!",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Student",
      content: "The interactive learning approach is amazing. I went from zero knowledge to confident in just a few weeks.",
      rating: 5
    }
  ]

  const features = [
    {
      icon: BookOpen,
      title: "Interactive Tutorials",
      description: "Learn crypto concepts through engaging, step-by-step tutorials with real-world examples."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Master crypto security from day one with our comprehensive safety training modules."
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Stay updated with the latest crypto news and market trends in one place."
    },
    {
      icon: Zap,
      title: "Mining Simulation",
      description: "Experience blockchain mining firsthand with our interactive simulation tool."
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Join thousands of learners worldwide in your crypto education journey."
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Track your progress and earn badges as you master different crypto concepts."
    }
  ]

  const stats = [
    { number: "10K+", label: "Active Learners" },
    { number: "50+", label: "Tutorial Topics" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Learning Support" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Master <span className="gradient-text">Cryptocurrency</span>
              <br />
              From Zero to Hero
            </h1>
            <p className="hero-description">
              Learn cryptocurrency, blockchain, and DeFi through interactive tutorials, 
              flashcards, and hands-on simulations. Perfect for beginners and experts alike.
            </p>
            <div className="hero-buttons">
              <Link to="/tutorials" className="btn btn-primary">
                <BookOpen size={20} />
                Start Learning
                <ArrowRight size={20} />
              </Link>
              <button className="btn btn-secondary">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="crypto-dashboard-preview">
              <CryptoImage />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose CoinLingo?</h2>
            <p className="section-description">
              Our comprehensive learning platform combines education, practice, and real-world application
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="learning-path-section">
        <div className="container">
          <div className="learning-path-content">
            <div className="learning-path-text">
              <h2 className="section-title">Your Crypto Learning Journey</h2>
              <p className="section-description">
                Follow our structured curriculum designed by crypto experts to build your knowledge systematically.
              </p>
              <div className="learning-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Safety First</h4>
                    <p>Learn to identify scams and protect your investments</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Bitcoin Basics</h4>
                    <p>Understand the fundamentals of the world's first cryptocurrency</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Advanced Topics</h4>
                    <p>Explore DeFi, NFTs, and emerging crypto technologies</p>
                  </div>
                </div>
              </div>
              <Link to="/tutorials" className="btn btn-primary">
                <Target size={20} />
                Start Your Journey
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="learning-path-visual">
              <div className="path-progress">
                <div className="progress-ring">
                  <div className="progress-fill"></div>
                  <div className="progress-text">
                    <span className="progress-percentage">85%</span>
                    <span className="progress-label">Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Learners Say</h2>
            <p className="section-description">
              Join thousands of successful crypto learners who started their journey with CoinLingo
            </p>
          </div>
          <div className="testimonials-container">
            <div className="testimonial-card active">
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonials[currentTestimonial].content}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonials[currentTestimonial].name}</h4>
                    <p>{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Master Cryptocurrency?</h2>
            <p className="cta-description">
              Join CoinLingo today and start your journey to becoming a crypto expert. 
              It's free to start, and you can learn at your own pace.
            </p>
            <div className="cta-buttons">
              <Link to="/tutorials" className="btn btn-primary btn-large">
                <BookOpen size={24} />
                Start Learning Now
                <ArrowRight size={24} />
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

