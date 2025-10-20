import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Lock, Unlock, Play, CheckCircle, Star, Zap } from 'lucide-react';

const EnhancedLearningCard = ({ 
  topic, 
  index, 
  isUnlocked, 
  isActive, 
  progress, 
  onSelect, 
  streakMultiplier 
}) => {
  const { t } = useLanguage();
  
  const getTopicIcon = (index) => {
    const icons = ['🛡️', '💰', '📈', '₿', '💎', '₿', '⛓️', '🪙', '📊', '🔐', '⚡'];
    return icons[index] || '📚';
  };

  const getTopicName = (index) => {
    const names = [
      t('safetyFirst'),
      t('moneyBasics'),
      t('investingFuture'),
      t('digitalCrypto'),
      t('whatIsCryptocurrency'),
      t('bitcoinBasics'),
      t('whatIsBlockchain'),
      t('coinsVsTokens'),
      t('marketBasics'),
      t('walletsSecurity'),
      t('howPeopleUseCrypto')
    ];
    return names[index] || topic;
  };

  const getRewardAmount = () => {
    const baseReward = 0.001;
    const streakBonus = baseReward * (streakMultiplier - 1);
    return (baseReward + streakBonus).toFixed(4);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
        delay: index * 0.1
      }
    },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${progress.percentage}%`,
      transition: { duration: 0.8, delay: 0.5 + index * 0.1 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={isUnlocked ? "hover" : {}}
      className="learning-card"
      style={{
        background: isActive 
          ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.05) 100%)'
          : isUnlocked 
            ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.8) 100%)'
            : 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(26, 26, 26, 0.6) 100%)',
        border: isActive 
          ? '2px solid #fbbf24'
          : isUnlocked 
            ? '1px solid rgba(251, 191, 36, 0.4)'
            : '1px solid rgba(107, 114, 128, 0.3)',
        borderRadius: '16px',
        padding: '20px',
        cursor: isUnlocked ? 'pointer' : 'not-allowed',
        opacity: isUnlocked ? 1 : 0.6,
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        boxShadow: isActive 
          ? '0 8px 32px rgba(251, 191, 36, 0.3)'
          : '0 4px 16px rgba(0, 0, 0, 0.3)'
      }}
      onClick={() => isUnlocked && onSelect(index)}
    >
      {/* Background Gradient Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: isUnlocked 
          ? 'radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)'
          : 'radial-gradient(circle at 20% 20%, rgba(107, 114, 128, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginBottom: '16px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            fontSize: '28px',
            filter: isUnlocked ? 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))' : 'none'
          }}>
            {getTopicIcon(index)}
          </div>
          <div>
            <h3 style={{
              margin: 0,
              fontSize: '16px',
              fontWeight: 'bold',
              color: isActive ? '#fbbf24' : isUnlocked ? '#ffffff' : '#6b7280'
            }}>
              {getTopicName(index)}
            </h3>
            <div style={{
              fontSize: '12px',
              color: isUnlocked ? '#d1d5db' : '#6b7280',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              {isUnlocked ? (
                <>
                  <CheckCircle size={12} />
                  {t('unlocked')}
                </>
              ) : (
                <>
                  <Lock size={12} />
                  {t('locked')}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div style={{
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '10px',
          fontWeight: 'bold',
          background: isActive 
            ? 'linear-gradient(45deg, #fbbf24, #f59e0b)'
            : isUnlocked 
              ? 'linear-gradient(45deg, #10b981, #059669)'
              : 'linear-gradient(45deg, #6b7280, #4b5563)',
          color: isActive || isUnlocked ? '#000000' : '#ffffff'
        }}>
          {isActive ? 'ACTIVE' : isUnlocked ? 'READY' : 'LOCKED'}
        </div>
      </div>

      {/* Progress Section */}
      {isUnlocked && (
        <div style={{ marginBottom: '16px', position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '8px'
          }}>
            <span style={{ 
              fontSize: '12px', 
              color: '#d1d5db',
              fontWeight: '500'
            }}>
              {progress.completed}/{progress.total} {t('sections')}
            </span>
            <span style={{ 
              fontSize: '12px', 
              color: '#fbbf24', 
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Zap size={12} />
              {progress.percentage}%
            </span>
          </div>
          
          {/* Progress Bar */}
          <div style={{
            width: '100%',
            height: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <motion.div
              variants={progressBarVariants}
              initial="hidden"
              animate="visible"
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
                borderRadius: '3px',
                boxShadow: '0 0 8px rgba(251, 191, 36, 0.5)'
              }}
            />
          </div>
        </div>
      )}

      {/* Reward Section */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginBottom: '16px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          background: 'rgba(251, 191, 36, 0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(251, 191, 36, 0.3)'
        }}>
          <Star size={16} style={{ color: '#fbbf24' }} />
          <span style={{ 
            fontSize: '12px', 
            color: '#fbbf24',
            fontWeight: 'bold'
          }}>
            {getRewardAmount()} {t('btc')}
          </span>
          {streakMultiplier > 1 && (
            <span style={{
              fontSize: '10px',
              color: '#fbbf24',
              background: 'rgba(251, 191, 36, 0.2)',
              padding: '2px 6px',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}>
              {streakMultiplier.toFixed(1)}x
            </span>
          )}
        </div>

        {/* Action Button */}
        {isUnlocked && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: isActive 
                ? 'linear-gradient(45deg, #fbbf24, #f59e0b)'
                : 'linear-gradient(45deg, #10b981, #059669)',
              color: '#000000',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
            }}
          >
            {isActive ? <CheckCircle size={14} /> : <Play size={14} />}
            {isActive ? t('continueLearning') : t('startLesson')}
          </motion.button>
        )}
      </div>

      {/* Locked State */}
      {!isUnlocked && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '12px',
          background: 'rgba(107, 114, 128, 0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(107, 114, 128, 0.3)'
        }}>
          <Lock size={16} style={{ color: '#6b7280' }} />
          <span style={{ 
            fontSize: '12px', 
            color: '#6b7280',
            fontWeight: '500'
          }}>
            {t('locked')} - 0.001 {t('btc')}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default EnhancedLearningCard;
