/**
 * Crypto Image Mapping Utility
 * 
 * Maps crypto topics and keywords to appropriate image URLs
 * Uses free crypto logos and icons from public sources
 */

// Free crypto logo URLs from various sources
const CRYPTO_IMAGES = {
  // Major cryptocurrencies
  'bitcoin': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'btc': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'ethereum': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'eth': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'binance': 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
  'bnb': 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
  'cardano': 'https://cryptologos.cc/logos/cardano-ada-logo.png',
  'ada': 'https://cryptologos.cc/logos/cardano-ada-logo.png',
  'solana': 'https://cryptologos.cc/logos/solana-sol-logo.png',
  'sol': 'https://cryptologos.cc/logos/solana-sol-logo.png',
  'polkadot': 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
  'dot': 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
  'chainlink': 'https://cryptologos.cc/logos/chainlink-link-logo.png',
  'link': 'https://cryptologos.cc/logos/chainlink-link-logo.png',
  'litecoin': 'https://cryptologos.cc/logos/litecoin-ltc-logo.png',
  'ltc': 'https://cryptologos.cc/logos/litecoin-ltc-logo.png',
  'ripple': 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
  'xrp': 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
  'dogecoin': 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
  'doge': 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
  'avalanche': 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
  'avax': 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
  'polygon': 'https://cryptologos.cc/logos/polygon-matic-logo.png',
  'matic': 'https://cryptologos.cc/logos/polygon-matic-logo.png',
  'uniswap': 'https://cryptologos.cc/logos/uniswap-uni-logo.png',
  'uni': 'https://cryptologos.cc/logos/uniswap-uni-logo.png',
  'aave': 'https://cryptologos.cc/logos/aave-aave-logo.png',
  'compound': 'https://cryptologos.cc/logos/compound-comp-logo.png',
  'comp': 'https://cryptologos.cc/logos/compound-comp-logo.png',
  'maker': 'https://cryptologos.cc/logos/maker-mkr-logo.png',
  'mkr': 'https://cryptologos.cc/logos/maker-mkr-logo.png',
  'sushi': 'https://cryptologos.cc/logos/sushiswap-sushi-logo.png',
  'sushiswap': 'https://cryptologos.cc/logos/sushiswap-sushi-logo.png',
  'curve': 'https://cryptologos.cc/logos/curve-dao-token-crv-logo.png',
  'crv': 'https://cryptologos.cc/logos/curve-dao-token-crv-logo.png',
  'yearn': 'https://cryptologos.cc/logos/yearn-finance-yfi-logo.png',
  'yfi': 'https://cryptologos.cc/logos/yearn-finance-yfi-logo.png',
  '1inch': 'https://cryptologos.cc/logos/1inch-1inch-logo.png',
  'pancakeswap': 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png',
  'cake': 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png',
  'terra': 'https://cryptologos.cc/logos/terra-luna-logo.png',
  'luna': 'https://cryptologos.cc/logos/terra-luna-logo.png',
  'cosmos': 'https://cryptologos.cc/logos/cosmos-atom-logo.png',
  'atom': 'https://cryptologos.cc/logos/cosmos-atom-logo.png',
  'algorand': 'https://cryptologos.cc/logos/algorand-algo-logo.png',
  'algo': 'https://cryptologos.cc/logos/algorand-algo-logo.png',
  'vechain': 'https://cryptologos.cc/logos/vechain-vet-logo.png',
  'vet': 'https://cryptologos.cc/logos/vechain-vet-logo.png',
  'tezos': 'https://cryptologos.cc/logos/tezos-xtz-logo.png',
  'xtz': 'https://cryptologos.cc/logos/tezos-xtz-logo.png',
  'monero': 'https://cryptologos.cc/logos/monero-xmr-logo.png',
  'xmr': 'https://cryptologos.cc/logos/monero-xmr-logo.png',
  'stellar': 'https://cryptologos.cc/logos/stellar-xlm-logo.png',
  'xlm': 'https://cryptologos.cc/logos/stellar-xlm-logo.png',
  'tron': 'https://cryptologos.cc/logos/tron-trx-logo.png',
  'trx': 'https://cryptologos.cc/logos/tron-trx-logo.png',
  'eos': 'https://cryptologos.cc/logos/eos-eos-logo.png',
  'neo': 'https://cryptologos.cc/logos/neo-neo-logo.png',
  'iota': 'https://cryptologos.cc/logos/iota-iota-logo.png',
  'dash': 'https://cryptologos.cc/logos/dash-dash-logo.png',
  'zcash': 'https://cryptologos.cc/logos/zcash-zec-logo.png',
  'zec': 'https://cryptologos.cc/logos/zcash-zec-logo.png',
  'bitcoin-cash': 'https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png',
  'bch': 'https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png',
  'bitcoin-sv': 'https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png',
  'bsv': 'https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png',
  'shiba-inu': 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png',
  'shib': 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png',
  'usdt': 'https://cryptologos.cc/logos/tether-usdt-logo.png',
  'tether': 'https://cryptologos.cc/logos/tether-usdt-logo.png',
  'usdc': 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
  'usd-coin': 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
  'dai': 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png',
  'wrapped-bitcoin': 'https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png',
  'wbtc': 'https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png',
  
  // General crypto concepts
  'blockchain': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', // Use Bitcoin as blockchain representation
  'cryptocurrency': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'crypto': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'defi': 'https://cryptologos.cc/logos/ethereum-eth-logo.png', // Use Ethereum as DeFi representation
  'decentralized': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'smart-contracts': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'smart-contract': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'nft': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'nfts': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'mining': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'wallet': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'exchange': 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
  'trading': 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
  'staking': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'yield-farming': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'liquidity': 'https://cryptologos.cc/logos/uniswap-uni-logo.png',
  'governance': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'dao': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'metaverse': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'web3': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'dapp': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'dapps': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'token': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'tokens': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'altcoin': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'altcoins': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'stablecoin': 'https://cryptologos.cc/logos/tether-usdt-logo.png',
  'stablecoins': 'https://cryptologos.cc/logos/tether-usdt-logo.png',
  'fork': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'hard-fork': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'soft-fork': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'consensus': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'proof-of-work': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'proof-of-stake': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'pow': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'pos': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'hash': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'hashrate': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'difficulty': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'halving': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'whitepaper': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'ico': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'ido': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'airdrop': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'airdrops': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'bridge': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'bridges': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'layer-2': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'l2': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'rollup': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'rollups': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'sidechain': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'sidechains': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'cross-chain': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'multichain': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'interoperability': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'scalability': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'privacy': 'https://cryptologos.cc/logos/monero-xmr-logo.png',
  'anonymity': 'https://cryptologos.cc/logos/monero-xmr-logo.png',
  'security': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'audit': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'audits': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'hack': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'hacks': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'exploit': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'exploits': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'rug-pull': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'rug-pulls': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'scam': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'scams': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'regulation': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'regulations': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'compliance': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'kyc': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'aml': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'tax': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'taxes': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'institutional': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'institutions': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'adoption': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'mass-adoption': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'mainstream': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'bull-market': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'bear-market': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'bullish': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'bearish': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'volatility': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'correlation': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'diversification': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'portfolio': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'risk-management': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'technical-analysis': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'fundamental-analysis': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'ta': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'fa': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'chart': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'charts': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'candlestick': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'support': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'resistance': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'trend': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'trends': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'breakout': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'breakdown': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'volume': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'liquidity': 'https://cryptologos.cc/logos/uniswap-uni-logo.png',
  'order-book': 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
  'market-maker': 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
  'market-taker': 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
  'spread': 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
  'slippage': 'https://cryptologos.cc/logos/uniswap-uni-logo.png',
  'gas': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'gas-fee': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'gas-fees': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'network-congestion': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'mempool': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'confirmation': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'confirmations': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'block-time': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'block-size': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  'throughput': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'tps': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  'transactions-per-second': 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
}

// Default fallback image
const DEFAULT_IMAGE = 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'

/**
 * Get crypto image URL based on topic title and content
 * @param {string} title - Topic title
 * @param {string} content - Topic content (optional)
 * @returns {string} Image URL
 */
export function getCryptoImageUrl(title = '', content = '') {
  if (!title && !content) {
    return DEFAULT_IMAGE
  }

  // Combine title and content for keyword matching
  const text = `${title} ${content}`.toLowerCase()
  
  // Split text into words and clean them
  const words = text
    .replace(/[^\w\s-]/g, ' ') // Remove special characters except hyphens
    .split(/\s+/)
    .filter(word => word.length > 2) // Filter out short words
  
  // Check for exact matches first
  for (const word of words) {
    if (CRYPTO_IMAGES[word]) {
      return CRYPTO_IMAGES[word]
    }
  }
  
  // Check for partial matches
  for (const word of words) {
    for (const [key, url] of Object.entries(CRYPTO_IMAGES)) {
      if (key.includes(word) || word.includes(key)) {
        return url
      }
    }
  }
  
  // Check for multi-word phrases
  const phrases = [
    'smart contract', 'smart contracts',
    'proof of work', 'proof of stake',
    'layer 2', 'layer-2', 'l2',
    'cross chain', 'cross-chain',
    'yield farming', 'yield-farming',
    'rug pull', 'rug-pull',
    'hard fork', 'hard-fork',
    'soft fork', 'soft-fork',
    'bitcoin cash', 'bitcoin-cash',
    'bitcoin sv', 'bitcoin-sv',
    'shiba inu', 'shiba-inu',
    'usd coin', 'usd-coin',
    'wrapped bitcoin', 'wrapped-bitcoin',
    'multi collateral', 'multi-collateral',
    'yearn finance', 'yearn-finance',
    'curve dao', 'curve-dao',
    'pancake swap', 'pancake-swap',
    'sushi swap', 'sushi-swap',
    '1 inch', '1-inch',
    'terra luna', 'terra-luna',
    'bitcoin sv', 'bitcoin-sv'
  ]
  
  for (const phrase of phrases) {
    if (text.includes(phrase)) {
      const key = phrase.replace(/\s+/g, '-')
      if (CRYPTO_IMAGES[key]) {
        return CRYPTO_IMAGES[key]
      }
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
export function getPlaceholderStyle(text = 'CL', size = '200px') {
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
export async function isValidImageUrl(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok && response.headers.get('content-type')?.startsWith('image/')
  } catch (error) {
    return false
  }
}

