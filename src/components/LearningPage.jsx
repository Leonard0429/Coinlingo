import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
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
  RotateCcw
} from 'lucide-react'

function LearningPage() {
  const [searchParams] = useSearchParams()
  const [selectedTopic, setSelectedTopic] = useState(searchParams.get('topic') || 'budgeting')
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [xpEarned, setXpEarned] = useState(0)
  const [showXpAnimation, setShowXpAnimation] = useState(false)

  const topics = {
    budgeting: {
      icon: TrendingUp,
      emoji: "💸",
      title: "Budgeting 101",
      color: "from-green-400 to-blue-500",
      lessons: [
        {
          id: 1,
          title: "What is a budget?",
          description: "Learn the basics of budgeting and why it's important for managing your money.",
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
      color: "from-blue-400 to-purple-500",
      lessons: [
        {
          id: 1,
          title: "Common online scams",
          description: "Learn about the most common scams targeting young people online.",
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
      color: "from-purple-400 to-pink-500",
      lessons: [
        {
          id: 1,
          title: "What's a digital wallet?",
          description: "Learn about digital wallets and how they work to store your money safely.",
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
      
      const earned = Math.round((correctAnswers / selectedLesson.questions.length) * 10)
      setXpEarned(earned)
      setShowResult(true)
      setShowXpAnimation(true)
      
      setTimeout(() => setShowXpAnimation(false), 3000)
    }
  }

  const resetQuiz = () => {
    setSelectedLesson(null)
    setCurrentQuestion(0)
    setUserAnswers([])
    setShowResult(false)
    setXpEarned(0)
  }

  if (selectedLesson) {
    const question = selectedLesson.questions[currentQuestion]
    const progress = ((currentQuestion + (showResult ? 1 : 0)) / selectedLesson.questions.length) * 100

    return (
      <div className="min-h-screen">
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 px-4 py-2 glass-button"
            >
              <ArrowRight className="rotate-180" size={16} />
              Back to Lessons
            </button>
            <div className="text-sm text-gray-600">
              {currentQuestion + (showResult ? 1 : 0)} / {selectedLesson.questions.length}
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedLesson.title}</h2>
            <p className="text-gray-600">{selectedLesson.description}</p>
          </div>

          {!showResult ? (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                {question.question}
              </h3>
              <div className="grid gap-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="glass-card p-4 text-left hover:transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <span className="text-sm font-medium">{String.fromCharCode(65 + index)}</span>
                      </div>
                      <span className="text-gray-800">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quiz Complete!</h3>
              
              <div className="glass-card p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Your Results:</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {selectedLesson.questions.map((q, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                        userAnswers[index] === q.correct ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {userAnswers[index] === q.correct ? <CheckCircle size={20} /> : <XCircle size={20} />}
                      </div>
                      <span className="text-sm text-gray-600">Q{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`glass-card p-6 mb-6 ${showXpAnimation ? 'animate-pulse' : ''}`}>
                <div className="text-4xl mb-2">⭐</div>
                <h4 className="text-xl font-bold text-gray-800">+{xpEarned} XP Earned!</h4>
                <p className="text-gray-600">Great job! Keep learning to level up!</p>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="glass-button px-6 py-3"
                >
                  Try Another Lesson
                </button>
                <Link
                  to="/xp"
                  className="glass-button px-6 py-3 flex items-center gap-2"
                >
                  View Progress
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Learning Path</h1>
        <p className="text-gray-600">Pick a topic and start earning XP!</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(topics).map(([key, topic]) => (
          <div key={key} className="glass-card p-6">
            <div className="text-center">
              <div className="text-5xl mb-4">{topic.emoji}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{topic.title}</h2>
              <p className="text-gray-600 mb-6">
                {topic.lessons.length} interactive lessons
              </p>
              
              <div className="space-y-3">
                {topic.lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => startLesson(lesson)}
                    className="w-full glass-button p-3 text-left hover:transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-800">{lesson.title}</div>
                        <div className="text-sm text-gray-600">{lesson.description}</div>
                      </div>
                      <ArrowRight size={16} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LearningPage

