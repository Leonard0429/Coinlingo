import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen, 
  Shield, 
  Lock, 
  TrendingUp,
  Star,
  Target,
  ArrowRight,
  CheckCircle,
  XCircle,
  RotateCcw,
  Zap,
  Trophy,
  Award,
  Play
} from 'lucide-react'

function EnhancedLearningPage() {
  const [searchParams] = useSearchParams()
  const [selectedTopic, setSelectedTopic] = useState(searchParams.get('topic') || 'budgeting')
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [xpEarned, setXpEarned] = useState(0)
  const [showXpAnimation, setShowXpAnimation] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const topics = {
    budgeting: {
      icon: TrendingUp,
      emoji: "💸",
      title: "Budgeting 101",
      gradient: "linear-gradient(135deg, #A8E6CF, #A1C4FD)",
      color: "#A8E6CF",
      level: "Beginner",
      lessons: [
        {
          id: 1,
          title: "What is a budget?",
          description: "Learn the basics of budgeting and why it's important for managing your money.",
          xp: 5,
          questions: [
            {
              question: "What is a budget?",
              options: ["A type of bank account", "A plan for how to spend your money", "A savings goal", "A credit card"],
              correct: 1
            },
            {
              question: "Why is budgeting important?",
              options: ["To spend more money", "To help you save money and reach goals", "To get rich quick", "To avoid taxes"],
              correct: 1
            },
            {
              question: "What should you do first when creating a budget?",
              options: ["Buy something expensive", "Track your income and expenses", "Open a new bank account", "Ask your parents for money"],
              correct: 1
            }
          ]
        },
        {
          id: 2,
          title: "Needs vs Wants",
          description: "Understand the difference between things you need and things you want.",
          xp: 6,
          questions: [
            {
              question: "Which is an example of a NEED?",
              options: ["New video game", "School supplies", "Latest smartphone", "Designer clothes"],
              correct: 1
            },
            {
              question: "Which is an example of a WANT?",
              options: ["Food", "Shelter", "New shoes", "Water"],
              correct: 2
            },
            {
              question: "What should you prioritize in your budget?",
              options: ["Wants first", "Needs first", "Entertainment only", "Savings only"],
              correct: 1
            }
          ]
        },
        {
          id: 3,
          title: "How to plan your allowance",
          description: "Learn to manage your allowance or part-time job money effectively.",
          xp: 7,
          questions: [
            {
              question: "What's the 50/30/20 rule?",
              options: ["50% needs, 30% wants, 20% savings", "50% wants, 30% needs, 20% savings", "50% savings, 30% needs, 20% wants", "50% spending, 30% saving, 20% investing"],
              correct: 0
            },
            {
              question: "How much should you save from your allowance?",
              options: ["Nothing", "At least 20%", "All of it", "Only if you have extra"],
              correct: 1
            },
            {
              question: "What's a good way to track your allowance spending?",
              options: ["Guess", "Use a budgeting app or notebook", "Ask your parents", "Don't track it"],
              correct: 1
            }
          ]
        },
        {
          id: 4,
          title: "Saving challenge: 20% rule",
          description: "Master the art of saving money with the 20% rule challenge.",
          xp: 8,
          questions: [
            {
              question: "What is the 20% rule?",
              options: ["Save 20% of your income", "Spend 20% on wants", "Invest 20% in stocks", "Give 20% to charity"],
              correct: 0
            },
            {
              question: "If you earn $50 per week, how much should you save?",
              options: ["$5", "$10", "$15", "$20"],
              correct: 1
            },
            {
              question: "Where should you keep your savings?",
              options: ["Under your mattress", "In a savings account", "In your wallet", "Give it to friends"],
              correct: 1
            }
          ]
        }
      ]
    },
    scams: {
      icon: Shield,
      emoji: "🛡️",
      title: "Scam & Fraud Prevention",
      gradient: "linear-gradient(135deg, #A1C4FD, #CBB2FE)",
      color: "#A1C4FD",
      level: "Intermediate",
      lessons: [
        {
          id: 1,
          title: "Common online scams",
          description: "Learn about the most common scams targeting young people online.",
          xp: 8,
          questions: [
            {
              question: "What is a phishing scam?",
              options: ["A type of fish", "Fake emails trying to steal your info", "A video game", "A social media trend"],
              correct: 1
            },
            {
              question: "What should you do if someone asks for your password?",
              options: ["Give it to them", "Never give it to anyone", "Ask them why they need it", "Change it first"],
              correct: 1
            },
            {
              question: "Which is a red flag of a scam?",
              options: ["Asking for personal info", "Promising easy money", "Both of the above", "Neither"],
              correct: 2
            }
          ]
        },
        {
          id: 2,
          title: "How to verify links",
          description: "Learn to spot fake links and protect yourself from phishing attacks.",
          xp: 9,
          questions: [
            {
              question: "How can you check if a link is safe?",
              options: ["Click it immediately", "Hover over it to see the real URL", "Ignore it completely", "Ask a friend"],
              correct: 1
            },
            {
              question: "What does 'https://' in a URL mean?",
              options: ["It's always safe", "It's encrypted and more secure", "It's a scam", "It's slow"],
              correct: 1
            },
            {
              question: "What should you do with suspicious links?",
              options: ["Click them anyway", "Delete them immediately", "Share them with friends", "Save them for later"],
              correct: 1
            }
          ]
        },
        {
          id: 3,
          title: "Red flags: guaranteed profit",
          description: "Learn to spot investment scams that promise guaranteed returns.",
          xp: 10,
          questions: [
            {
              question: "What's a red flag in investment offers?",
              options: ["Guaranteed high returns", "No risk mentioned", "Both of the above", "Neither"],
              correct: 2
            },
            {
              question: "What should you do if someone promises easy money?",
              options: ["Give them money immediately", "Research and be skeptical", "Tell all your friends", "Ignore them completely"],
              correct: 1
            },
            {
              question: "Are there any guaranteed ways to make money quickly?",
              options: ["Yes, many", "No, legitimate investments have risks", "Only for rich people", "Only online"],
              correct: 1
            }
          ]
        },
        {
          id: 4,
          title: "Spot the scam mini-game",
          description: "Test your scam detection skills with real-world examples.",
          xp: 12,
          questions: [
            {
              question: "You get a message: 'You won $1000! Click here to claim!' What do you do?",
              options: ["Click immediately", "Delete the message", "Forward to friends", "Reply asking for more info"],
              correct: 1
            },
            {
              question: "Someone asks for your bank account details to 'verify your identity'. What do you do?",
              options: ["Give them the details", "Never share bank details", "Ask them to prove they're legitimate", "Give them a fake account number"],
              correct: 1
            },
            {
              question: "A 'friend' asks you to send money urgently via gift cards. What do you do?",
              options: ["Send money immediately", "Verify it's really your friend first", "Ignore them", "Ask for more details"],
              correct: 1
            }
          ]
        }
      ]
    },
    wallet: {
      icon: Lock,
      emoji: "🔐",
      title: "Wallet Safety",
      gradient: "linear-gradient(135deg, #CBB2FE, #FFB6C1)",
      color: "#CBB2FE",
      level: "Advanced",
      lessons: [
        {
          id: 1,
          title: "What's a digital wallet?",
          description: "Learn about digital wallets and how they work to store your money safely.",
          xp: 6,
          questions: [
            {
              question: "What is a digital wallet?",
              options: ["A physical wallet", "An app that stores payment info digitally", "A type of bank account", "A credit card"],
              correct: 1
            },
            {
              question: "What can you store in a digital wallet?",
              options: ["Only cash", "Credit cards, gift cards, and loyalty cards", "Only gift cards", "Only credit cards"],
              correct: 1
            },
            {
              question: "Are digital wallets safe?",
              options: ["No, never use them", "Yes, when used properly", "Only for small amounts", "Only for online purchases"],
              correct: 1
            }
          ]
        },
        {
          id: 2,
          title: "Password & 2FA basics",
          description: "Learn to create strong passwords and use two-factor authentication.",
          xp: 7,
          questions: [
            {
              question: "What makes a strong password?",
              options: ["Your name and birthday", "Random letters, numbers, and symbols", "Just numbers", "Your pet's name"],
              correct: 1
            },
            {
              question: "What is two-factor authentication (2FA)?",
              options: ["Having two passwords", "Using two different devices", "An extra security step to verify your identity", "Having two bank accounts"],
              correct: 2
            },
            {
              question: "Should you use the same password for everything?",
              options: ["Yes, it's easier", "No, use unique passwords for each account", "Only for important accounts", "Only for social media"],
              correct: 1
            }
          ]
        },
        {
          id: 3,
          title: "Hot vs Cold wallet (simple)",
          description: "Understand the difference between hot and cold wallets for crypto storage.",
          xp: 8,
          questions: [
            {
              question: "What is a hot wallet?",
              options: ["A wallet that's always connected to the internet", "A physical wallet", "A bank account", "A credit card"],
              correct: 0
            },
            {
              question: "What is a cold wallet?",
              options: ["A wallet stored offline", "A hot wallet", "A bank account", "A gift card"],
              correct: 0
            },
            {
              question: "Which is generally more secure for large amounts?",
              options: ["Hot wallet", "Cold wallet", "Both are equally secure", "Neither"],
              correct: 1
            }
          ]
        },
        {
          id: 4,
          title: "Protect your money online",
          description: "Learn essential tips for keeping your money safe when using digital payment methods.",
          xp: 9,
          questions: [
            {
              question: "When shopping online, what should you look for?",
              options: ["The lowest price", "HTTPS in the URL and secure payment methods", "The most reviews", "The fastest shipping"],
              correct: 1
            },
            {
              question: "What should you do with your wallet app when not using it?",
              options: ["Leave it open", "Lock your phone", "Share it with friends", "Keep it in airplane mode"],
              correct: 1
            },
            {
              question: "What's the safest way to make online payments?",
              options: ["Credit cards", "Debit cards", "Both offer similar protection", "Gift cards only"],
              correct: 2
            }
          ]
        }
      ]
    }
  }

  const currentTopic = topics[selectedTopic]

  const startLesson = (lesson) => {
    setSelectedLesson(lesson)
    setCurrentQuestion(0)
    setUserAnswers([])
    setShowResult(false)
    setXpEarned(0)
    setShowXpAnimation(false)
    setShowConfetti(false)
  }

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...userAnswers, answerIndex]
    setUserAnswers(newAnswers)

    if (currentQuestion < selectedLesson.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz completed
      const correctAnswers = newAnswers.filter((answer, index) => 
        answer === selectedLesson.questions[index].correct
      ).length
      
      const earned = Math.round((correctAnswers / selectedLesson.questions.length) * selectedLesson.xp)
      setXpEarned(earned)
      setShowResult(true)
      setShowXpAnimation(true)
      setShowConfetti(true)
      
      setTimeout(() => setShowXpAnimation(false), 3000)
      setTimeout(() => setShowConfetti(false), 5000)
    }
  }

  const resetQuiz = () => {
    setSelectedLesson(null)
    setCurrentQuestion(0)
    setUserAnswers([])
    setShowResult(false)
    setXpEarned(0)
    setShowConfetti(false)
  }

  if (selectedLesson) {
    const question = selectedLesson.questions[currentQuestion]
    const progress = ((currentQuestion + (showResult ? 1 : 0)) / selectedLesson.questions.length) * 100

    return (
      <div className="min-h-screen relative">
        {/* Confetti Animation */}
        <AnimatePresence>
          {showConfetti && (
            <div className="fixed inset-0 pointer-events-none z-50">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    background: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][Math.floor(Math.random() * 5)]
                  }}
                  initial={{ y: -100, x: Math.random() * 100, rotate: 0 }}
                  animate={{ 
                    y: window.innerHeight + 100, 
                    x: Math.random() * 200 - 100,
                    rotate: 720 
                  }}
                  transition={{ duration: 3, delay: Math.random() * 2 }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        <motion.div 
          className="glass-card p-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <motion.button
              onClick={resetQuiz}
              className="flex items-center gap-2 px-6 py-3 glass-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="rotate-180" size={20} />
              Back to Lessons
            </motion.button>
            <div className="text-sm text-gray-600 font-medium">
              {currentQuestion + (showResult ? 1 : 0)} / {selectedLesson.questions.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div 
                className="h-3 rounded-full"
                style={{ 
                  background: currentTopic.gradient,
                  width: `${progress}%` 
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div className="text-center mb-10">
            <motion.h2 
              className="text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {selectedLesson.title}
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {selectedLesson.description}
            </motion.p>
          </div>

          {!showResult ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                {question.question}
              </h3>
              <div className="grid gap-4">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="glass-card p-6 text-left hover:transform hover:-translate-y-2 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-blue-400 transition-colors">
                        <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">
                          {String.fromCharCode(65 + index)}
                        </span>
                      </div>
                      <span className="text-gray-800 text-lg">{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="text-8xl mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                🎉
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Quiz Complete!</h3>
              
              <div className="glass-card p-8 mb-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Your Results:</h4>
                <div className="grid grid-cols-3 gap-6 text-center">
                  {selectedLesson.questions.map((q, index) => (
                    <motion.div 
                      key={index} 
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        userAnswers[index] === q.correct ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {userAnswers[index] === q.correct ? <CheckCircle size={24} /> : <XCircle size={24} />}
                      </div>
                      <span className="text-sm text-gray-600 font-medium">Q{index + 1}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                className={`glass-card p-8 mb-8 ${showXpAnimation ? 'animate-pulse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={showXpAnimation ? { rotate: [0, 10, -10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  ⭐
                </motion.div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">+{xpEarned} XP Earned!</h4>
                <p className="text-gray-600">Great job! Keep learning to level up!</p>
              </motion.div>

              <div className="flex gap-6 justify-center">
                <motion.button
                  onClick={resetQuiz}
                  className="glass-button px-8 py-4 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Another Lesson
                </motion.button>
                <Link
                  to="/xp"
                  className="glass-button px-8 py-4 text-lg flex items-center gap-2"
                >
                  View Progress
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold gradient-text mb-4 glow-text">Choose Your Learning Path</h1>
        <p className="text-xl text-gray-600">Pick a topic and start earning XP!</p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-3 gap-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, staggerChildren: 0.1 }}
      >
        {Object.entries(topics).map(([key, topic], index) => (
          <motion.div 
            key={key} 
            className="glass-card p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              {/* Topic Header */}
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl"
                style={{ background: topic.gradient }}
              >
                {topic.emoji}
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{topic.title}</h2>
              <div className="level-badge mx-auto mb-6">
                Level: {topic.level}
              </div>
              
              <p className="text-gray-600 mb-8">
                {topic.lessons.length} interactive lessons
              </p>
              
              <div className="space-y-4">
                {topic.lessons.map((lesson, lessonIndex) => (
                  <motion.button
                    key={lesson.id}
                    onClick={() => startLesson(lesson)}
                    className="w-full glass-button p-4 text-left hover:transform hover:-translate-y-1 transition-all duration-300 group relative"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + lessonIndex * 0.05 }}
                  >
                    {/* XP Badge */}
                    <div className="absolute top-2 right-2 xp-badge text-xs">
                      +{lesson.xp} XP
                    </div>
                    
                    <div className="flex items-center justify-between pr-16">
                      <div>
                        <div className="font-bold text-gray-800 text-lg">{lesson.title}</div>
                        <div className="text-sm text-gray-600 mt-1">{lesson.description}</div>
                      </div>
                      <Play size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default EnhancedLearningPage

