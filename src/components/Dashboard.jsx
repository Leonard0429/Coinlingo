import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useStore } from '../context/Store.jsx';
import { Lock, Unlock, BookOpen } from 'lucide-react';

const Dashboard = ({ children }) => {
  const location = useLocation();
  const { balance, unlockedTopics, UNLOCK_COST, setActiveTopicIndex, activeTopicIndex, completedSectionsByTopic } = useStore();

  // Learning topics data
  const BASIC_TOPICS = [
    'Safety First',
    'Money Basics', 
    'Investing & Future',
    'Digital & Crypto',
    'What is Cryptocurrency?',
    'Bitcoin (BTC) Basics',
    'What is Blockchain?',
    'Coins vs Tokens',
    'Market Basics',
    'Wallets & Security',
    'How People Use Crypto'
  ];

  const getTopicIcon = (index) => {
    const icons = ['🛡️', '💰', '📈', '₿', '💎', '₿', '⛓️', '🪙', '📊', '🔐', '⚡'];
    return icons[index] || '📚';
  };

  const getTopicProgress = (index) => {
    const completed = completedSectionsByTopic[index] || 0;
    const total = 5; // SECTIONS_PER_TOPIC
    const percentage = Math.round((completed / total) * 100);
    return { completed, total, percentage };
  };

  const handleTopicSelect = (index) => {
    if (unlockedTopics.has(index)) {
      setActiveTopicIndex(index);
    }
  };

  return (
    <div className="dashboard" style={{ 
      display: 'grid', 
      gridTemplateColumns: '200px 1fr', 
      gap: '12px', 
      padding: '12px', 
      minHeight: 'calc(100vh - 120px)',
      width: '800px',
      maxWidth: '800px',
      margin: '80px auto 0 auto',
      position: 'relative'
    }}>
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Only show Learning Path on /learn route */}
        {location.pathname === "/learn" && (
          <motion.div 
            className="glass-card"
            style={{ 
              height: 'fit-content', 
              position: 'sticky',
              top: '20px',
              padding: '20px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '12px',
              backdropFilter: 'blur(20px)',
              zIndex: 10
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="learning-path">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <BookOpen size={18} style={{ color: '#FFD700' }} />
                <strong style={{ color: '#FFD700' }}>Learning Path</strong>
              </div>
              
              <div style={{ display: 'grid', gap: 8 }}>
                {BASIC_TOPICS.map((name, index) => {
                  const unlocked = unlockedTopics.has(index);
                  const isActive = index === activeTopicIndex;
                  const progress = getTopicProgress(index);
                  const icon = getTopicIcon(index);
                  
                  return (
                    <motion.div 
                      key={index} 
                      className={isActive ? 'glass-card' : unlocked ? 'glass-card' : ''}
                      style={{ 
                        padding: 12, 
                        backgroundColor: isActive ? 'rgba(255, 215, 0, 0.2)' : unlocked ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)',
                        border: isActive ? '2px solid #FFD700' : unlocked ? '1px solid rgba(255, 215, 0, 0.3)' : '1px solid rgba(255, 215, 0, 0.1)',
                        borderRadius: 12,
                        cursor: unlocked ? 'pointer' : 'not-allowed',
                        opacity: unlocked ? 1 : 0.6,
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => unlocked && handleTopicSelect(index)}
                      whileHover={unlocked ? { scale: 1.02 } : {}}
                      whileTap={unlocked ? { scale: 0.98 } : {}}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <span style={{ fontSize: 20 }}>{icon}</span>
                        <span style={{ 
                          color: isActive ? '#FFD700' : unlocked ? '#FFFFFF' : '#6B7280',
                          fontWeight: isActive ? 'bold' : 'normal',
                          fontSize: 14
                        }}>
                          {name}
                        </span>
                      </div>
                      
                      {unlocked && (
                        <>
                          <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center', 
                            marginBottom: 4 
                          }}>
                            <span style={{ color: '#FFFFFF', fontSize: 12 }}>
                              {progress.completed}/{progress.total} sections
                            </span>
                            <span style={{ color: '#FFD700', fontSize: 12, fontWeight: 'bold' }}>
                              {progress.percentage}%
                            </span>
                          </div>
                          <div style={{ 
                            width: '100%', 
                            height: 4, 
                            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                            borderRadius: 2,
                            overflow: 'hidden'
                          }}>
                            <motion.div 
                              style={{ 
                                height: '100%', 
                                backgroundColor: '#FFD700',
                                borderRadius: 2
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${progress.percentage}%` }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                        </>
                      )}
                      
                      {!unlocked && (
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 4,
                          color: '#6B7280',
                          fontSize: 12
                        }}>
                          <Lock size={12} />
                          <span>Locked - {UNLOCK_COST} BTC</span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </aside>

      {/* Main content */}
      <main className="content" style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </main>
    </div>
  );
};

export default Dashboard;
