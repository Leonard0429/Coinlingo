import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Info, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)',
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: 'clamp(16px, 4vw, 32px)', 
      position: 'relative', 
      overflow: 'hidden',
      width: '100%'
    }}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full opacity-5 blur-3xl" />
      </div>

      {/* Main Content */}
      <motion.div
        className="text-center relative z-10"
        style={{ 
          maxWidth: '700px', 
          margin: '0 auto',
          width: '700px'
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.h1
          className="text-7xl md:text-8xl font-bold mb-6"
          style={{
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 50px rgba(255, 215, 0, 0.3)',
            letterSpacing: '-0.02em'
          }}
          variants={itemVariants}
        >
          CoinLingo
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"
          variants={itemVariants}
        >
          Learn Crypto. Speak Web3.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Master cryptocurrency and blockchain technology through interactive lessons, 
          real-world examples, and gamified learning experiences. Start your Web3 journey today.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          {/* Start Learning Button */}
          <Link to="/learn">
            <motion.button
              className="group glass-button premium-button flex items-center gap-3 px-8 py-4 text-lg font-semibold"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 100%)',
                border: '2px solid rgba(255, 215, 0, 0.5)',
                borderRadius: '16px',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <BookOpen size={20} />
              Start Learning
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          {/* About Button */}
          <Link to="/about">
            <motion.button
              className="group glass-button secondary-button flex items-center gap-3 px-8 py-4 text-lg font-semibold"
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Info size={20} />
              About CoinLingo
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-gray-700"
          variants={itemVariants}
        >
          {[
            { number: '50+', label: 'Lessons' },
            { number: '10K+', label: 'Students' },
            { number: '95%', label: 'Success Rate' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
