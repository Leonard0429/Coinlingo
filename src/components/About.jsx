import { Heart, Users, BookOpen, MessageCircle } from 'lucide-react'
import Logo from './Logo.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * About Page Component for Coinlingo
 * 
 * Features:
 * - Trust building content about the platform
 * - Contact/Feedback form integration
 * - Consistent branding with yellow accent color
 * - Responsive design with Tailwind CSS
 * 
 * @component
 * @returns {JSX.Element} The About page component
 */
function About() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo and Title */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="mr-4">
                <Logo size="64px" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">
                COINLINGO
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {t('learnMoneyCryptoFunWay')}
            </p>
          </div>

          {/* Main Story */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-16 border-2 border-yellow-400">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
              {t('ourStory')}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Coinlingo is a gamified platform that teaches kids, elderly people, and beginners about money basics and Web3/crypto through simple analogies and fun mini-games. 
              We believe that understanding money, finance, and cryptocurrency shouldn't be intimidating or boring.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our mission is to make financial education accessible, engaging, and enjoyable for learners of all ages and backgrounds - 
              from kids learning their first money basics to elderly users discovering digital finance, and everyone in between who finds 
              traditional finance "too complicated."
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 rounded-xl p-6 border border-yellow-400 hover:border-yellow-300 transition-colors">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Simple Learning</h3>
              <p className="text-gray-300">
                Complex financial and crypto concepts explained in easy-to-understand language with interactive content and fun analogies.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-yellow-400 hover:border-yellow-300 transition-colors">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">For Everyone</h3>
              <p className="text-gray-300">
                Perfect for kids (10-18), elderly (50+), and beginners who find finance "too complicated." Content tailored for all ages.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-yellow-400 hover:border-yellow-300 transition-colors">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Fun & Engaging</h3>
              <p className="text-gray-300">
                Learning should be enjoyable! We use gamification, mini-games, and interactive elements to make finance fun and engaging.
              </p>
            </div>
          </div>

          {/* Learning Levels Section */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-16 border-2 border-yellow-400">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">
              Our Learning Journey
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black rounded-xl p-6 border border-yellow-400 text-center">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Level 1: Safety First</h3>
                <p className="text-gray-300 text-sm">
                  Spotting scams & fraud (mandatory for everyone)
                </p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-yellow-400 text-center">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Level 2: Money Basics</h3>
                <p className="text-gray-300 text-sm">
                  Budgeting game, savings challenge, debt trap simulator
                </p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-yellow-400 text-center">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Level 3: Investing & Future</h3>
                <p className="text-gray-300 text-sm">
                  Compound interest simulation, risk vs reward, long-term planning
                </p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-yellow-400 text-center">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Level 4: Digital & Crypto</h3>
                <p className="text-gray-300 text-sm">
                  Blockchain explained simply, hot vs cold wallet, safe crypto usage
                </p>
              </div>
            </div>
          </div>

          {/* Contact/Feedback Section */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border-2 border-yellow-400">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
                Get in Touch
              </h2>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions, feedback, or suggestions? We'd love to hear from you! 
              Your input helps us make Coinlingo better for everyone.
            </p>
            
            {/* Google Form Embed */}
            <div className="max-w-4xl mx-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScQXOmUt5XX5FwLFQwkGBmEWjPb3DS5WPzgm2BlKO43Ljhe2w/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="rounded-lg"
                title="Coinlingo Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              Made with ❤️ for the crypto community
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Coinlingo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
