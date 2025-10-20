import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('coinlingo-language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('coinlingo-language', language);
  }, [language]);

  const translations = {
    en: {
      // Header & Navigation
      home: '🏠 Home',
      liveCrypto: '📈 Live Crypto',
      liveNews: '📰 Live News',
      about: 'ℹ️ About',
      balance: 'Balance',
      streak: 'Streak',
      lastSaved: 'Last Saved',
      
      // Learning System
      learningPath: 'Learning Path',
      progressOverview: 'Progress Overview',
      completed: 'completed',
      unlocked: 'unlocked',
      locked: 'Locked',
      startLesson: 'Start Lesson',
      continueLearning: 'Continue Learning',
      progress: 'Progress',
      level: 'Level',
      xp: 'XP',
      experience: 'Experience',
      
      // Topics & Lessons
      safetyFirst: 'Safety First',
      moneyBasics: 'Money Basics',
      investingFuture: 'Investing & Future',
      digitalCrypto: 'Digital & Crypto',
      whatIsCryptocurrency: 'What is Cryptocurrency?',
      bitcoinBasics: 'Bitcoin (BTC) Basics',
      whatIsBlockchain: 'What is Blockchain?',
      coinsVsTokens: 'Coins vs Tokens',
      marketBasics: 'Market Basics',
      walletsSecurity: 'Wallets & Security',
      howPeopleUseCrypto: 'How People Use Crypto',
      
      // Crypto Dashboard
      liveCryptoDashboard: 'Live Crypto Dashboard',
      loadingLiveCryptoData: 'Loading Live Crypto Data...',
      fetchingCryptocurrencyPrices: 'Fetching cryptocurrency prices',
      loadingPriceData: 'Loading price data...',
      pleaseWaitWhileWeFetch: 'Please wait while we fetch the latest cryptocurrency prices',
      lastUpdated: 'Last updated',
      refresh: 'Refresh',
      marketCap: 'Market Cap',
      volume24h: '24h Volume',
      change1h: '1h Change',
      change7d: '7d Change',
      
      // News Feed
      liveNewsFeed: 'Live News Feed',
      latestCryptoNews: 'Latest Crypto News',
      readMore: 'Read More',
      source: 'Source',
      published: 'Published',
      
      // About Page
      aboutCoinLingo: 'About CoinLingo',
      learnCryptocurrency: 'Learn Cryptocurrency',
      interactiveLearning: 'Interactive Learning',
      realTimeData: 'Real-time Data',
      gamifiedExperience: 'Gamified Experience',
      learnMoneyCryptoFunWay: 'Learn Money & Crypto the Fun Way',
      ourStory: 'Our Story',
      ourMission: 'Our Mission',
      ourValues: 'Our Values',
      accessibility: 'Accessibility',
      engagement: 'Engagement',
      simplicity: 'Simplicity',
      trust: 'Trust',
      contactUs: 'Contact Us',
      getInTouch: 'Get in Touch',
      sendMessage: 'Send Message',
      
      // Streak & Rewards
      dailyStreak: 'Daily Streak',
      keepItUp: 'Keep it up! Your rewards are compounding!',
      streakMultiplier: 'Streak Multiplier',
      days: 'days',
      rewards: 'Rewards',
      achievements: 'Achievements',
      
      // Buttons & Actions
      start: 'Start',
      continue: 'Continue',
      next: 'Next',
      previous: 'Previous',
      back: 'Back',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm',
      reset: 'Reset',
      restore: 'Restore',
      
      // Status & Messages
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      warning: 'Warning',
      info: 'Info',
      noData: 'No data available',
      tryAgain: 'Try Again',
      
      // Time & Units
      btc: 'BTC',
      sections: 'sections',
      minutes: 'minutes',
      hours: 'hours',
      today: 'Today',
      yesterday: 'Yesterday',
      thisWeek: 'This Week',
      thisMonth: 'This Month',
      
      // Common UI Elements
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      view: 'View',
      edit: 'Edit',
      delete: 'Delete',
      add: 'Add',
      remove: 'Remove',
      select: 'Select',
      choose: 'Choose',
      all: 'All',
      none: 'None',
      
      // Learning Interface
      lesson: 'Lesson',
      chapter: 'Chapter',
      topic: 'Topic',
      quiz: 'Quiz',
      test: 'Test',
      practice: 'Practice',
      review: 'Review',
      complete: 'Complete',
      incomplete: 'Incomplete',
      passed: 'Passed',
      failed: 'Failed',
      
      // Crypto Terms
      cryptocurrency: 'Cryptocurrency',
      blockchain: 'Blockchain',
      wallet: 'Wallet',
      exchange: 'Exchange',
      mining: 'Mining',
      trading: 'Trading',
      investment: 'Investment',
      portfolio: 'Portfolio',
      price: 'Price',
      market: 'Market',
      volume: 'Volume',
      supply: 'Supply',
      demand: 'Demand'
    },
    zh: {
      // Header & Navigation
      home: '🏠 首页',
      liveCrypto: '📈 实时加密货币',
      liveNews: '📰 实时新闻',
      about: 'ℹ️ 关于',
      balance: '余额',
      streak: '连胜',
      lastSaved: '最后保存',
      
      // Learning System
      learningPath: '学习路径',
      progressOverview: '进度概览',
      completed: '已完成',
      unlocked: '已解锁',
      locked: '已锁定',
      startLesson: '开始课程',
      continueLearning: '继续学习',
      progress: '进度',
      level: '等级',
      xp: '经验值',
      experience: '经验',
      
      // Topics & Lessons
      safetyFirst: '安全第一',
      moneyBasics: '金钱基础',
      investingFuture: '投资与未来',
      digitalCrypto: '数字与加密货币',
      whatIsCryptocurrency: '什么是加密货币？',
      bitcoinBasics: '比特币（BTC）基础',
      whatIsBlockchain: '什么是区块链？',
      coinsVsTokens: '代币与通证',
      marketBasics: '市场基础',
      walletsSecurity: '钱包与安全',
      howPeopleUseCrypto: '人们如何使用加密货币',
      
      // Crypto Dashboard
      liveCryptoDashboard: '实时加密货币仪表板',
      loadingLiveCryptoData: '正在加载实时加密货币数据...',
      fetchingCryptocurrencyPrices: '正在获取加密货币价格',
      loadingPriceData: '正在加载价格数据...',
      pleaseWaitWhileWeFetch: '请稍等，我们正在获取最新的加密货币价格',
      lastUpdated: '最后更新',
      refresh: '刷新',
      marketCap: '市值',
      volume24h: '24小时交易量',
      change1h: '1小时变化',
      change7d: '7天变化',
      
      // News Feed
      liveNewsFeed: '实时新闻源',
      latestCryptoNews: '最新加密货币新闻',
      readMore: '阅读更多',
      source: '来源',
      published: '发布时间',
      
      // About Page
      aboutCoinLingo: '关于CoinLingo',
      learnCryptocurrency: '学习加密货币',
      interactiveLearning: '互动学习',
      realTimeData: '实时数据',
      gamifiedExperience: '游戏化体验',
      learnMoneyCryptoFunWay: '以有趣的方式学习金钱和加密货币',
      ourStory: '我们的故事',
      ourMission: '我们的使命',
      ourValues: '我们的价值观',
      accessibility: '可访问性',
      engagement: '参与度',
      simplicity: '简单性',
      trust: '信任',
      contactUs: '联系我们',
      getInTouch: '取得联系',
      sendMessage: '发送消息',
      
      // Streak & Rewards
      dailyStreak: '每日连胜',
      keepItUp: '继续加油！您的奖励正在复利增长！',
      streakMultiplier: '连胜倍数',
      days: '天',
      rewards: '奖励',
      achievements: '成就',
      
      // Buttons & Actions
      start: '开始',
      continue: '继续',
      next: '下一步',
      previous: '上一步',
      back: '返回',
      close: '关闭',
      save: '保存',
      cancel: '取消',
      confirm: '确认',
      reset: '重置',
      restore: '恢复',
      
      // Status & Messages
      loading: '加载中...',
      error: '错误',
      success: '成功',
      warning: '警告',
      info: '信息',
      noData: '暂无数据',
      tryAgain: '重试',
      
      // Time & Units
      btc: 'BTC',
      sections: '章节',
      minutes: '分钟',
      hours: '小时',
      today: '今天',
      yesterday: '昨天',
      thisWeek: '本周',
      thisMonth: '本月',
      
      // Common UI Elements
      search: '搜索',
      filter: '筛选',
      sort: '排序',
      view: '查看',
      edit: '编辑',
      delete: '删除',
      add: '添加',
      remove: '移除',
      select: '选择',
      choose: '选择',
      all: '全部',
      none: '无',
      
      // Learning Interface
      lesson: '课程',
      chapter: '章节',
      topic: '主题',
      quiz: '测验',
      test: '测试',
      practice: '练习',
      review: '复习',
      complete: '完成',
      incomplete: '未完成',
      passed: '通过',
      failed: '失败',
      
      // Crypto Terms
      cryptocurrency: '加密货币',
      blockchain: '区块链',
      wallet: '钱包',
      exchange: '交易所',
      mining: '挖矿',
      trading: '交易',
      investment: '投资',
      portfolio: '投资组合',
      price: '价格',
      market: '市场',
      volume: '交易量',
      supply: '供应量',
      demand: '需求量'
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  const value = {
    language,
    t,
    switchLanguage,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
