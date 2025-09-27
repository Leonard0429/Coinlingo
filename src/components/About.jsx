import { Heart, Users, BookOpen, MessageCircle } from 'lucide-react'
import Logo from './Logo.jsx'

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
              Learn Crypto the Fun Way
            </p>
          </div>

          {/* Main Story */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-16 border-2 border-yellow-400">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
              Our Story
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Coinlingo helps everyone learn Web3 & crypto through fun, simple content. 
              We believe that understanding cryptocurrency and blockchain technology shouldn't 
              be intimidating or boring.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our mission is to make crypto education accessible, engaging, and enjoyable for 
              learners of all levels - from complete beginners to advanced traders looking to 
              expand their knowledge.
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
                Complex crypto concepts explained in easy-to-understand language with interactive content.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-yellow-400 hover:border-yellow-300 transition-colors">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">For Everyone</h3>
              <p className="text-gray-300">
                Whether you're a beginner or advanced user, our content is designed for all skill levels.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-yellow-400 hover:border-yellow-300 transition-colors">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Fun & Engaging</h3>
              <p className="text-gray-300">
                Learning should be enjoyable! We use gamification and interactive elements to keep you engaged.
              </p>
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
