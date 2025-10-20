import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  INITIAL_BALANCE,
  UNLOCK_COST,
  SECTION_REWARD,
  SECTIONS_PER_TOPIC,
  STORAGE_KEY,
  BASIC_TOPICS,
  todayKey,
} from '../store.js'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [balance, setBalance] = useState(INITIAL_BALANCE)
  const [unlockedTopics, setUnlockedTopics] = useState(new Set([0]))
  const [activeTopicIndex, setActiveTopicIndex] = useState(0)
  const [completedSectionsByTopic, setCompletedSectionsByTopic] = useState({ 0: 0 })
  const [claimedSectionsByTopic, setClaimedSectionsByTopic] = useState({})
  const [dailyMissions, setDailyMissions] = useState({
    completeTopic: false,
    shareOnSocial: false,
    dailyAltcoinQuiz: false,
    claimedShareBonus: false,
  })
  const [streak, setStreak] = useState(0)
  const [lastActiveDay, setLastActiveDay] = useState(null)
  const [streakMultiplier, setStreakMultiplier] = useState(1)
  const [achievements, setAchievements] = useState([])
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const data = JSON.parse(raw)
      if (typeof data.balance === 'number') setBalance(data.balance)
      if (Array.isArray(data.unlockedTopics)) setUnlockedTopics(new Set(data.unlockedTopics))
      if (typeof data.activeTopicIndex === 'number') setActiveTopicIndex(data.activeTopicIndex)
      if (data.completedSectionsByTopic && typeof data.completedSectionsByTopic === 'object') {
        setCompletedSectionsByTopic(data.completedSectionsByTopic)
      }
      if (data.claimedSectionsByTopic && typeof data.claimedSectionsByTopic === 'object') {
        setClaimedSectionsByTopic(data.claimedSectionsByTopic)
      }
      if (data.dailyMissions && typeof data.dailyMissions === 'object') {
        setDailyMissions({
          completeTopic: !!data.dailyMissions.completeTopic,
          shareOnSocial: !!data.dailyMissions.shareOnSocial,
          dailyAltcoinQuiz: !!data.dailyMissions.dailyAltcoinQuiz,
          claimedShareBonus: !!data.dailyMissions.claimedShareBonus,
        })
      }
      if (typeof data.streak === 'number') setStreak(data.streak)
      if (typeof data.lastActiveDay === 'string') setLastActiveDay(data.lastActiveDay)
      if (typeof data.streakMultiplier === 'number') setStreakMultiplier(data.streakMultiplier)
      if (Array.isArray(data.achievements)) setAchievements(data.achievements)
    } catch {}
  }, [])

  // Enhanced automatic saving with backup and error handling
  useEffect(() => {
    const saveProgress = () => {
      try {
        const progressData = {
          balance,
          unlockedTopics: Array.from(unlockedTopics),
          activeTopicIndex,
          completedSectionsByTopic,
          claimedSectionsByTopic,
          dailyMissions,
          streak,
          lastActiveDay,
          streakMultiplier,
          achievements,
          lastSaved: new Date().toISOString(), // Track when progress was last saved
          version: '1.0' // For future compatibility
        }
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData))
        
        // Create a backup every 10 saves
        const backupKey = `${STORAGE_KEY}_backup`
        const backupData = localStorage.getItem(backupKey)
        if (!backupData) {
          localStorage.setItem(backupKey, JSON.stringify(progressData))
        }
        
        console.log('Progress automatically saved:', new Date().toLocaleTimeString())
      } catch (error) {
        console.error('Failed to save progress:', error)
        // Try to save to backup if main storage fails
        try {
          const backupKey = `${STORAGE_KEY}_backup`
          localStorage.setItem(backupKey, JSON.stringify({
            balance,
            unlockedTopics: Array.from(unlockedTopics),
            activeTopicIndex,
            completedSectionsByTopic,
            claimedSectionsByTopic,
            dailyMissions,
            streak,
            lastActiveDay,
            achievements,
            lastSaved: new Date().toISOString(),
            version: '1.0'
          }))
        } catch (backupError) {
          console.error('Backup save also failed:', backupError)
        }
      }
    }

    // Save immediately when state changes
    saveProgress()
    
    // Also save on page unload as extra safety
    const handleBeforeUnload = () => saveProgress()
    window.addEventListener('beforeunload', handleBeforeUnload)
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [balance, unlockedTopics, activeTopicIndex, completedSectionsByTopic, claimedSectionsByTopic, dailyMissions, streak, lastActiveDay, streakMultiplier, achievements])

  // Enhanced streak tracking with compounding multipliers
  useEffect(() => {
    const today = todayKey()
    if (lastActiveDay === today) return
    if (!lastActiveDay) {
      setStreak(1)
      setStreakMultiplier(1)
      setLastActiveDay(today)
      return
    }
    const last = new Date(lastActiveDay)
    const t = new Date(today)
    const diff = Math.round((t - last) / (1000 * 60 * 60 * 24))
    if (diff === 1) {
      setStreak((s) => {
        const newStreak = s + 1
        // Calculate compounding multiplier: 1.0x for day 1, 1.2x for day 2, 1.5x for day 3, etc.
        const newMultiplier = Math.min(1 + (newStreak - 1) * 0.2, 3.0) // Cap at 3.0x
        setStreakMultiplier(newMultiplier)
        return newStreak
      })
    } else if (diff > 1) {
      setStreak(1)
      setStreakMultiplier(1)
    }
    setLastActiveDay(today)
  }, [])

  const canClaimShareBonus = useMemo(() => {
    return dailyMissions.completeTopic && !dailyMissions.claimedShareBonus
  }, [dailyMissions])

  function markMission(key) {
    setDailyMissions((m) => ({ ...m, [key]: true }))
  }

  function claimShareBonus() {
    if (!canClaimShareBonus) return
    setDailyMissions((m) => ({ ...m, claimedShareBonus: true }))
    setBalance((b) => b + 2)
    pushNotification('Claimed +2 BTC from social share')
  }

  function unlockTopic(index) {
    if (unlockedTopics.has(index)) return false
    if (balance < UNLOCK_COST) return false
    setBalance((b) => b - UNLOCK_COST)
    setUnlockedTopics((prev) => new Set([...prev, index]))
    pushNotification(`Unlocked topic: ${BASIC_TOPICS[index]}`)
    return true
  }

  function completeSection(topicIndex) {
    const current = completedSectionsByTopic[topicIndex] || 0
    if (current >= SECTIONS_PER_TOPIC) return false
    const nextCount = current + 1
    setCompletedSectionsByTopic((prev) => ({ ...prev, [topicIndex]: nextCount }))
    setBalance((b) => b + SECTION_REWARD)
    
    // Auto-unlock next section
    pushNotification(`Section ${nextCount} completed! Section ${nextCount + 1} unlocked.`)
    
    if (nextCount >= SECTIONS_PER_TOPIC) {
      // auto-mark mission available
      setDailyMissions((m) => ({ ...m, completeTopic: true }))
      maybeUnlockAchievement('First Topic Complete')
      pushNotification('Topic completed! Daily mission available')
    }
    return true
  }

  function isSectionClaimed(topicIndex, sectionNumber) {
    const topicClaims = claimedSectionsByTopic[topicIndex] || {}
    return !!topicClaims[sectionNumber]
  }

  function claimSection(topicIndex, sectionNumber) {
    if (isSectionClaimed(topicIndex, sectionNumber)) return false
    
    setClaimedSectionsByTopic((prev) => ({
      ...prev,
      [topicIndex]: {
        ...prev[topicIndex],
        [sectionNumber]: true
      }
    }))
    setBalance((b) => b + SECTION_REWARD)
    
    // Update completed sections count to unlock next section
    const currentCompleted = completedSectionsByTopic[topicIndex] || 0
    if (sectionNumber > currentCompleted) {
      setCompletedSectionsByTopic((prev) => ({ 
        ...prev, 
        [topicIndex]: sectionNumber 
      }))
      
      // Auto-unlock next section notification
      if (sectionNumber < SECTIONS_PER_TOPIC) {
        pushNotification(`Section ${sectionNumber} completed! Section ${sectionNumber + 1} unlocked.`)
      }
      
      // Check if topic is fully completed
      if (sectionNumber >= SECTIONS_PER_TOPIC) {
        setDailyMissions((m) => ({ ...m, completeTopic: true }))
        maybeUnlockAchievement('First Topic Complete')
        pushNotification('Topic completed! Daily mission available')
      }
    }
    
    pushNotification(`Claimed +${SECTION_REWARD} BTC from Section ${sectionNumber}`)
    return true
  }

  function pushNotification(text) {
    const id = Date.now()
    setNotifications((n) => [...n, { id, text }])
    setTimeout(() => {
      setNotifications((n) => n.filter((x) => x.id !== id))
    }, 3000)
  }

  function maybeUnlockAchievement(name) {
    setAchievements((a) => (a.includes(name) ? a : [...a, name]))
  }

  function resetProgress() {
    setBalance(INITIAL_BALANCE)
    setUnlockedTopics(new Set([0]))
    setActiveTopicIndex(0)
    setCompletedSectionsByTopic({ 0: 0 })
    setClaimedSectionsByTopic({})
    setDailyMissions({ completeTopic: false, shareOnSocial: false, dailyAltcoinQuiz: false, claimedShareBonus: false })
    setStreak(0)
    setLastActiveDay(todayKey())
    setAchievements([])
    setNotifications([])
  }

  function restoreFromBackup() {
    try {
      const backupKey = `${STORAGE_KEY}_backup`
      const backupData = localStorage.getItem(backupKey)
      if (!backupData) {
        pushNotification('No backup found')
        return false
      }
      
      const data = JSON.parse(backupData)
      if (typeof data.balance === 'number') setBalance(data.balance)
      if (Array.isArray(data.unlockedTopics)) setUnlockedTopics(new Set(data.unlockedTopics))
      if (typeof data.activeTopicIndex === 'number') setActiveTopicIndex(data.activeTopicIndex)
      if (data.completedSectionsByTopic && typeof data.completedSectionsByTopic === 'object') {
        setCompletedSectionsByTopic(data.completedSectionsByTopic)
      }
      if (data.claimedSectionsByTopic && typeof data.claimedSectionsByTopic === 'object') {
        setClaimedSectionsByTopic(data.claimedSectionsByTopic)
      }
      if (data.dailyMissions && typeof data.dailyMissions === 'object') {
        setDailyMissions({
          completeTopic: !!data.dailyMissions.completeTopic,
          shareOnSocial: !!data.dailyMissions.shareOnSocial,
          dailyAltcoinQuiz: !!data.dailyMissions.dailyAltcoinQuiz,
          claimedShareBonus: !!data.dailyMissions.claimedShareBonus,
        })
      }
      if (typeof data.streak === 'number') setStreak(data.streak)
      if (typeof data.lastActiveDay === 'string') setLastActiveDay(data.lastActiveDay)
      if (Array.isArray(data.achievements)) setAchievements(data.achievements)
      
      pushNotification('Progress restored from backup!')
      return true
    } catch (error) {
      console.error('Failed to restore from backup:', error)
      pushNotification('Failed to restore backup')
      return false
    }
  }

  function getLastSavedTime() {
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      if (!data) return null
      const parsed = JSON.parse(data)
      return parsed.lastSaved ? new Date(parsed.lastSaved).toLocaleString() : null
    } catch {
      return null
    }
  }

  const value = {
    // data
    balance,
    unlockedTopics,
    activeTopicIndex,
    completedSectionsByTopic,
    dailyMissions,
    canClaimShareBonus,
    streak,
    streakMultiplier,
    // constants
    BASIC_TOPICS,
    UNLOCK_COST,
    SECTIONS_PER_TOPIC,
    SECTION_REWARD,
    // actions
    setActiveTopicIndex,
    markMission,
    claimShareBonus,
    unlockTopic,
    completeSection,
    isSectionClaimed,
    claimSection,
    resetProgress,
    restoreFromBackup,
    getLastSavedTime,
    notifications,
    achievements,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}


