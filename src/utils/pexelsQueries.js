/**
 * Pexels Query Mapping Utility
 * 
 * Maps tutorial lesson titles to appropriate Pexels search queries
 * for fetching relevant images
 */

// Pexels search queries for different crypto concepts
const PEXELS_QUERIES = {
  // Basic crypto concepts
  'what is crypto': 'cryptocurrency',
  'cryptocurrency': 'cryptocurrency',
  'crypto basics': 'cryptocurrency',
  'digital currency': 'digital money',
  'virtual currency': 'virtual money',
  
  // Blockchain concepts
  'what is blockchain': 'blockchain technology',
  'blockchain': 'blockchain technology',
  'blockchain technology': 'blockchain technology',
  'distributed ledger': 'blockchain',
  'blocks': 'blockchain blocks',
  'chain': 'blockchain chain',
  
  // Mining concepts
  'what is mining': 'crypto mining',
  'mining': 'crypto mining',
  'crypto mining': 'crypto mining',
  'bitcoin mining': 'bitcoin mining',
  'mining rig': 'mining rig',
  'hashrate': 'crypto mining',
  'proof of work': 'crypto mining',
  'pow': 'crypto mining',
  
  // Wallet concepts
  'what are wallets': 'digital wallet',
  'wallets': 'digital wallet',
  'crypto wallet': 'digital wallet',
  'digital wallet': 'digital wallet',
  'wallet security': 'wallet security',
  'private key': 'digital security',
  'public key': 'digital security',
  'seed phrase': 'digital security',
  'hardware wallet': 'hardware wallet',
  'software wallet': 'digital wallet',
  'hot wallet': 'digital wallet',
  'cold wallet': 'hardware wallet',
  
  // Exchange concepts
  'what are exchanges': 'crypto exchange',
  'exchanges': 'crypto exchange',
  'crypto exchange': 'crypto exchange',
  'trading': 'crypto trading',
  'trading platform': 'trading platform',
  'marketplace': 'crypto marketplace',
  'order book': 'trading',
  'buy sell': 'trading',
  'market order': 'trading',
  'limit order': 'trading',
  'spot trading': 'trading',
  'futures trading': 'trading',
  
  // DeFi concepts
  'what is defi': 'defi decentralized finance',
  'defi': 'defi decentralized finance',
  'decentralized finance': 'defi decentralized finance',
  'yield farming': 'defi yield farming',
  'liquidity': 'defi liquidity',
  'liquidity pool': 'defi liquidity',
  'automated market maker': 'defi',
  'amm': 'defi',
  'lending': 'defi lending',
  'borrowing': 'defi borrowing',
  'staking': 'crypto staking',
  'proof of stake': 'crypto staking',
  'pos': 'crypto staking',
  'governance': 'defi governance',
  'dao': 'dao governance',
  'token': 'crypto token',
  'tokens': 'crypto token',
  'smart contract': 'smart contract',
  'smart contracts': 'smart contract',
  
  // NFT concepts
  'what are nfts': 'nft digital art',
  'nft': 'nft digital art',
  'nfts': 'nft digital art',
  'non-fungible token': 'nft digital art',
  'non-fungible tokens': 'nft digital art',
  'digital art': 'digital art',
  'collectibles': 'digital collectibles',
  'nft marketplace': 'nft marketplace',
  'opensea': 'nft marketplace',
  'minting': 'nft minting',
  'metadata': 'nft metadata',
  
  // Security concepts
  'security': 'cybersecurity',
  'crypto security': 'cybersecurity',
  'scams': 'cybersecurity',
  'phishing': 'cybersecurity',
  'rug pull': 'cybersecurity',
  'rug-pull': 'cybersecurity',
  'hack': 'cybersecurity',
  'hacks': 'cybersecurity',
  'audit': 'security audit',
  'audits': 'security audit',
  'best practices': 'cybersecurity',
  'safety': 'cybersecurity',
  
  // Trading concepts
  'trading strategies': 'trading analysis',
  'technical analysis': 'trading analysis',
  'fundamental analysis': 'trading analysis',
  'chart': 'trading chart',
  'charts': 'trading chart',
  'candlestick': 'trading chart',
  'support': 'trading analysis',
  'resistance': 'trading analysis',
  'trend': 'trading trend',
  'trends': 'trading trend',
  'volume': 'trading volume',
  'volatility': 'trading volatility',
  'bull market': 'bull market',
  'bear market': 'bear market',
  'bullish': 'bull market',
  'bearish': 'bear market',
  
  // Investment concepts
  'investment': 'crypto investment',
  'investing': 'crypto investment',
  'portfolio': 'investment portfolio',
  'diversification': 'investment diversification',
  'risk management': 'risk management',
  'hodl': 'crypto investment',
  'dca': 'dollar cost averaging',
  'dollar cost averaging': 'dollar cost averaging',
  
  // Regulation concepts
  'regulation': 'crypto regulation',
  'regulations': 'crypto regulation',
  'compliance': 'crypto compliance',
  'kyc': 'kyc compliance',
  'aml': 'aml compliance',
  'tax': 'crypto tax',
  'taxes': 'crypto tax',
  'legal': 'crypto legal',
  'government': 'crypto government',
  'policy': 'crypto policy',
  
  // Future concepts
  'future': 'crypto future',
  'adoption': 'crypto adoption',
  'mass adoption': 'crypto adoption',
  'mainstream': 'crypto mainstream',
  'institutional': 'institutional crypto',
  'institutions': 'institutional crypto',
  'web3': 'web3',
  'metaverse': 'metaverse',
  'dapp': 'dapp',
  'dapps': 'dapp'
}

// Default fallback query
const DEFAULT_QUERY = 'cryptocurrency'

/**
 * Get Pexels search query based on lesson title
 * @param {string} title - Lesson title
 * @returns {string} Pexels search query
 */
export function getPexelsQuery(title = '') {
  if (!title) {
    return DEFAULT_QUERY
  }

  // Normalize the title for matching
  const normalizedTitle = title.toLowerCase().trim()
  
  // Check for exact matches first
  if (PEXELS_QUERIES[normalizedTitle]) {
    return PEXELS_QUERIES[normalizedTitle]
  }
  
  // Check for partial matches
  for (const [key, query] of Object.entries(PEXELS_QUERIES)) {
    if (normalizedTitle.includes(key) || key.includes(normalizedTitle)) {
      return query
    }
  }
  
  // Check for word-by-word matching
  const words = normalizedTitle.split(/\s+/)
  for (const word of words) {
    if (PEXELS_QUERIES[word]) {
      return PEXELS_QUERIES[word]
    }
  }
  
  // Return default query if no match found
  return DEFAULT_QUERY
}

export default PEXELS_QUERIES
