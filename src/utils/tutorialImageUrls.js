/**
 * Tutorial Image URLs
 * 
 * Maps tutorial lesson titles to specific image URLs provided by the user
 * Ensures consistent image display across all tutorial cards
 */

// Local image paths for each tutorial topic
const TUTORIAL_IMAGE_URLS = {
  // What is Cryptocurrency
  'what is crypto': '/images/tutorials/cryptocurrency.jpg',
  'cryptocurrency': '/images/tutorials/cryptocurrency.jpg',
  'crypto basics': '/images/tutorials/cryptocurrency.jpg',
  'digital currency': '/images/tutorials/cryptocurrency.jpg',
  'virtual currency': '/images/tutorials/cryptocurrency.jpg',

  // Bitcoin - Digital Gold
  'bitcoin': '/images/tutorials/bitcoin.jpg',
  'digital gold': '/images/tutorials/bitcoin.jpg',
  'btc': '/images/tutorials/bitcoin.jpg',
  'first cryptocurrency': '/images/tutorials/bitcoin.jpg',

  // Blockchain
  'blockchain': '/images/tutorials/blockchain.jpg',
  'what is blockchain': '/images/tutorials/blockchain.jpg',
  'blockchain technology': '/images/tutorials/blockchain.jpg',
  'distributed ledger': '/images/tutorials/blockchain.jpg',
  'blocks': '/images/tutorials/blockchain.jpg',
  'chain': '/images/tutorials/blockchain.jpg',

  // Coins vs Tokens
  'coins vs tokens': '/images/tutorials/coins-tokens.jpg',
  'coins and tokens': '/images/tutorials/coins-tokens.jpg',
  'tokens': '/images/tutorials/coins-tokens.jpg',
  'coin': '/images/tutorials/coins-tokens.jpg',
  'token': '/images/tutorials/coins-tokens.jpg',

  // Market Basics
  'market basics': '/images/tutorials/market.jpg',
  'market': '/images/tutorials/market.jpg',
  'trading': '/images/tutorials/market.jpg',
  'crypto market': '/images/tutorials/market.jpg',
  'market cap': '/images/tutorials/market.jpg',
  'price': '/images/tutorials/market.jpg',
  'volatility': '/images/tutorials/market.jpg',
  'liquidity': '/images/tutorials/market.jpg',

  // Wallet Security
  'wallet security': '/images/tutorials/wallet.jpg',
  'wallets': '/images/tutorials/wallet.jpg',
  'wallet': '/images/tutorials/wallet.jpg',
  'digital wallet': '/images/tutorials/wallet.jpg',
  'crypto wallet': '/images/tutorials/wallet.jpg',
  'private key': '/images/tutorials/wallet.jpg',
  'public key': '/images/tutorials/wallet.jpg',
  'seed phrase': '/images/tutorials/wallet.jpg',
  'hardware wallet': '/images/tutorials/wallet.jpg',
  'software wallet': '/images/tutorials/wallet.jpg',
  'hot wallet': '/images/tutorials/wallet.jpg',
  'cold wallet': '/images/tutorials/wallet.jpg'
}

// Default fallback image
const DEFAULT_IMAGE_URL = '/images/tutorials/default.jpg'

/**
 * Get tutorial image URL based on lesson title
 * @param {string} title - Lesson title
 * @returns {string} Image URL
 */
export function getTutorialImageUrl(title = '') {
  if (!title) {
    return DEFAULT_IMAGE_URL
  }

  // Normalize the title for matching
  const normalizedTitle = title.toLowerCase().trim()
  
  // Check for exact matches first
  if (TUTORIAL_IMAGE_URLS[normalizedTitle]) {
    return TUTORIAL_IMAGE_URLS[normalizedTitle]
  }
  
  // Check for partial matches
  for (const [key, url] of Object.entries(TUTORIAL_IMAGE_URLS)) {
    if (normalizedTitle.includes(key) || key.includes(normalizedTitle)) {
      return url
    }
  }
  
  // Check for word-by-word matching
  const words = normalizedTitle.split(/\s+/)
  for (const word of words) {
    if (TUTORIAL_IMAGE_URLS[word]) {
      return TUTORIAL_IMAGE_URLS[word]
    }
  }
  
  // Return default image if no match found
  return DEFAULT_IMAGE_URL
}

export default TUTORIAL_IMAGE_URLS
