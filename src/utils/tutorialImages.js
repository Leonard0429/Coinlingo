/**
 * Tutorial Image Mapping Utility
 * 
 * Maps tutorial lesson titles to appropriate Unsplash search queries
 * Uses dynamic Unsplash API images for tutorial covers
 */

// Unsplash search queries for different crypto concepts
const TUTORIAL_QUERIES = {
  // Basic crypto concepts
  'what is crypto': 'bitcoin cryptocurrency',
  'cryptocurrency': 'bitcoin cryptocurrency',
  'crypto basics': 'bitcoin cryptocurrency',
  'digital currency': 'bitcoin cryptocurrency',
  'virtual currency': 'bitcoin cryptocurrency',
  
  // Blockchain concepts
  'what is blockchain': 'blockchain technology',
  'blockchain': 'blockchain technology',
  'blockchain technology': 'blockchain technology',
  'distributed ledger': 'blockchain technology',
  'blocks': 'blockchain technology',
  'chain': 'blockchain technology',
  
  // Mining concepts
  'what is mining': 'bitcoin mining computer',
  'mining': 'bitcoin mining computer',
  'crypto mining': 'bitcoin mining computer',
  'bitcoin mining': 'bitcoin mining computer',
  'mining rig': 'bitcoin mining computer',
  'hashrate': 'bitcoin mining computer',
  'proof of work': 'bitcoin mining computer',
  'pow': 'bitcoin mining computer',
  
  // Wallet concepts
  'what are wallets': 'crypto wallet digital',
  'wallets': 'crypto wallet digital',
  'crypto wallet': 'crypto wallet digital',
  'digital wallet': 'crypto wallet digital',
  'wallet security': 'crypto wallet digital',
  'private key': 'crypto wallet digital',
  'public key': 'crypto wallet digital',
  'seed phrase': 'crypto wallet digital',
  'hardware wallet': 'crypto wallet digital',
  'software wallet': 'crypto wallet digital',
  'hot wallet': 'crypto wallet digital',
  'cold wallet': 'crypto wallet digital',
  
  // Exchange concepts
  'what are exchanges': 'crypto trading exchange',
  'exchanges': 'crypto trading exchange',
  'crypto exchange': 'crypto trading exchange',
  'trading': 'crypto trading exchange',
  'trading platform': 'crypto trading exchange',
  'marketplace': 'crypto trading exchange',
  'order book': 'crypto trading exchange',
  'buy sell': 'crypto trading exchange',
  'market order': 'crypto trading exchange',
  'limit order': 'crypto trading exchange',
  'spot trading': 'crypto trading exchange',
  'futures trading': 'crypto trading exchange',
  
  // DeFi concepts
  'what is defi': 'DeFi decentralized finance',
  'defi': 'DeFi decentralized finance',
  'decentralized finance': 'DeFi decentralized finance',
  'yield farming': 'DeFi decentralized finance',
  'liquidity': 'DeFi decentralized finance',
  'liquidity pool': 'DeFi decentralized finance',
  'automated market maker': 'DeFi decentralized finance',
  'amm': 'DeFi decentralized finance',
  'lending': 'DeFi decentralized finance',
  'borrowing': 'DeFi decentralized finance',
  'staking': 'DeFi decentralized finance',
  'proof of stake': 'DeFi decentralized finance',
  'pos': 'DeFi decentralized finance',
  'governance': 'DeFi decentralized finance',
  'dao': 'DeFi decentralized finance',
  'token': 'DeFi decentralized finance',
  'tokens': 'DeFi decentralized finance',
  'smart contract': 'DeFi decentralized finance',
  'smart contracts': 'DeFi decentralized finance',
  
  // NFT concepts
  'what are nfts': 'NFT art digital',
  'nft': 'NFT art digital',
  'nfts': 'NFT art digital',
  'non-fungible token': 'NFT art digital',
  'non-fungible tokens': 'NFT art digital',
  'digital art': 'NFT art digital',
  'collectibles': 'NFT art digital',
  'nft marketplace': 'NFT art digital',
  'opensea': 'NFT art digital',
  'minting': 'NFT art digital',
  'metadata': 'NFT art digital',
  
  // Security concepts
  'security': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'crypto security': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'scams': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'phishing': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'rug pull': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'rug-pull': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'hack': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'hacks': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'audit': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'audits': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'best practices': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'safety': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  
  // Trading concepts
  'trading strategies': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'technical analysis': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'fundamental analysis': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'chart': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'charts': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'candlestick': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'support': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'resistance': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'trend': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'trends': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'volume': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'volatility': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'bull market': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'bear market': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'bullish': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'bearish': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  
  // Investment concepts
  'investment': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'investing': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'portfolio': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'diversification': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'risk management': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'hodl': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'dca': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'dollar cost averaging': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  
  // Regulation concepts
  'regulation': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'regulations': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'compliance': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'kyc': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'aml': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'tax': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'taxes': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'legal': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'government': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'policy': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  
  // Future concepts
  'future': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'adoption': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'mass adoption': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'mainstream': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'institutional': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'institutions': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'web3': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'metaverse': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'dapp': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center',
  'dapps': 'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center'
}

// Default fallback image - CoinLingo branded placeholder
const DEFAULT_IMAGE = '/tutorial/cover-template.svg'

/**
 * Get tutorial image URL based on lesson title
 * @param {string} title - Lesson title
 * @returns {string} Image URL
 */
export function getTutorialImage(title = '') {
  if (!title) {
    return DEFAULT_IMAGE
  }

  // Normalize the title for matching
  const normalizedTitle = title.toLowerCase().trim()
  
  // Check for exact matches first
  if (TUTORIAL_IMAGES[normalizedTitle]) {
    return TUTORIAL_IMAGES[normalizedTitle]
  }
  
  // Check for partial matches
  for (const [key, url] of Object.entries(TUTORIAL_IMAGES)) {
    if (normalizedTitle.includes(key) || key.includes(normalizedTitle)) {
      return url
    }
  }
  
  // Check for word-by-word matching
  const words = normalizedTitle.split(/\s+/)
  for (const word of words) {
    if (TUTORIAL_IMAGES[word]) {
      return TUTORIAL_IMAGES[word]
    }
  }
  
  // Return default image if no match found
  return DEFAULT_IMAGE
}

/**
 * Get a placeholder image component for fallback
 * @param {string} text - Text to display in placeholder
 * @param {string} size - Size of the placeholder
 * @returns {Object} Style object for placeholder
 */
export function getTutorialPlaceholderStyle(text = 'CoinLingo', size = '200px') {
  return {
    width: '100%',
    height: size,
    backgroundColor: '#FFD600',
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    fontSize: size === '200px' ? '24px' : '16px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    border: '2px solid #000000'
  }
}

/**
 * Check if an image URL is valid
 * @param {string} url - Image URL to check
 * @returns {Promise<boolean>} True if image loads successfully
 */
export async function isValidTutorialImageUrl(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok && response.headers.get('content-type')?.startsWith('image/')
  } catch (error) {
    return false
  }
}
