import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Star, 
  Target, 
  Trophy, 
  Flame,
  TrendingUp,
  Shield,
  Lock,
  ArrowRight,
  Award,
  Zap
} from 'lucide-react'

function XpPage() {
  const [userStats, setUserStats] = useState({
    totalXp: 45,
    level: 3,
    streak: 7,
    completedLessons: 12,
    achievements: [
      { id: 1, title: "First Steps", description: "Complete your first lesson", earned: true },
      { id: 2, title: "Week Warrior", description: "7-day learning streak", earned: true },
      { id: 3, title: "Budget Master", description: "Complete all budgeting lessons", earned: false },
      { id: 4, title: "Scam Slayer", description: "Complete all scam prevention lessons", earned: false },
      { id: 5, title: "Wallet Guardian", description: "Complete all wallet safety lessons", earned: false }
    ],
    leaderboard: [
      { rank: 1, name: "Alex M.", xp: 156, avatar: "👑" },
      { rank: 2, name: "Sam K.", xp: 142, avatar: "🚀" },
      { rank: 3, name: "Jordan L.", xp: 128, avatar: "⭐" },
      { rank: 4, name: "You", xp: 45, avatar: "🎯" },
      { rank: 5, name: "Casey R.", xp: 38, avatar: "💎" }
    ]
  })

  const topics = [
    { name: "Budgeting", icon: TrendingUp, xp: 20, level: 2, color: "from-green-400 to-blue-500" },
    { name: "Scam Prevention", icon: Shield, xp: 15, level: 1, color: "from-blue-400 to-purple-500" },
    { name: "Wallet Safety", icon: Lock, xp: 10, level: 1, color: "from-purple-400 to-pink-500" }
  ]

  const xpToNextLevel = 60 - userStats.totalXp

  return (
    <div className="min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Progress</h1>
        <p className="text-gray-600">Track your learning journey and achievements!</p>
      </div>

      {/* XP and Level Section */}
      <div className="glass-card p-8 mb-8">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🎯</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Level {userStats.level}</h2>
          <p className="text-gray-600">{userStats.totalXp} Total XP</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress to Level {userStats.level + 1}</span>
            <span className="text-sm text-gray-600">{xpToNextLevel} XP to go</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-500 flex items-center justify-center"
              style={{ width: `${(userStats.totalXp / 60) * 100}%` }}
            >
              <span className="text-white text-xs font-medium">{userStats.totalXp}/60</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="glass-card p-4">
            <div className="text-2xl mb-2">🔥</div>
            <div className="text-lg font-bold text-gray-800">{userStats.streak}</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
          <div className="glass-card p-4">
            <div className="text-2xl mb-2">📚</div>
            <div className="text-lg font-bold text-gray-800">{userStats.completedLessons}</div>
            <div className="text-sm text-gray-600">Lessons Done</div>
          </div>
          <div className="glass-card p-4">
            <div className="text-2xl mb-2">🏆</div>
            <div className="text-lg font-bold text-gray-800">{userStats.achievements.filter(a => a.earned).length}</div>
            <div className="text-sm text-gray-600">Achievements</div>
          </div>
        </div>
      </div>

      {/* Topic Progress */}
      <div className="glass-card p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Topic Progress</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{topic.name}</h4>
              <div className="text-2xl font-bold text-gray-700 mb-2">{topic.xp} XP</div>
              <div className="text-sm text-gray-600 mb-4">Level {topic.level}</div>
              <Link
                to={`/learn?topic=${topic.name.toLowerCase().replace(' ', '')}`}
                className="glass-button px-4 py-2 text-sm flex items-center justify-center gap-2"
              >
                Continue Learning
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="glass-card p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Achievements</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userStats.achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`glass-card p-4 text-center ${
                achievement.earned ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <div className="text-3xl mb-2">
                {achievement.earned ? '🏆' : '🔒'}
              </div>
              <h4 className="font-bold text-gray-800 mb-1">{achievement.title}</h4>
              <p className="text-sm text-gray-600">{achievement.description}</p>
              {achievement.earned && (
                <div className="text-xs text-green-600 font-medium mt-2">✓ Earned</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Leaderboard</h3>
        <div className="space-y-3">
          {userStats.leaderboard.map((user, index) => (
            <div
              key={index}
              className={`glass-card p-4 flex items-center justify-between ${
                user.name === "You" ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{user.avatar}</div>
                <div>
                  <div className="font-bold text-gray-800">{user.name}</div>
                  <div className="text-sm text-gray-600">Rank #{user.rank}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-800">{user.xp} XP</div>
                {user.rank <= 3 && (
                  <div className="text-sm text-yellow-600">
                    {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="text-center mt-8">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <Zap size={24} />
          Keep Learning
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  )
}

export default XpPage

