export const INITIAL_BALANCE = 10
export const UNLOCK_COST = 2
export const SECTION_REWARD = 2
export const SECTIONS_PER_TOPIC = 5
export const STORAGE_KEY = 'coinlingo_state_v1'

export const BASIC_TOPICS = [
  'What is Cryptocurrency?',
  'Bitcoin (BTC) Basics',
  'What is Blockchain?',
  'Coins vs Tokens',
  'Market Basics',
  'Wallets & Security',
  'How People Use Crypto',
]

export const TOPIC_CONTENT = {
  0: { // What is Cryptocurrency?
    tutorial: [
      'Crypto is internet-native money that lives on public blockchains where everyone can verify transactions.',
      'Bitcoin is the first cryptocurrency with a hard cap of 21M, often called digital gold due to predictable scarcity.',
      'A blockchain is an ordered sequence of blocks containing transactions; once added, data is tamper-evident and transparent.',
      'Coins have their own blockchains (BTC/ETH) while tokens are issued on top of existing chains (like USDT on Ethereum).',
      'Market basics: market cap = price × circulating supply; prices are volatile; liquidity affects how easily you can trade.',
      'Wallet security: hot (online, convenient) vs cold (offline, safer). Never share private keys or seed phrases.',
    ],
    tutorialImages: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center', // Crypto concept
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center', // Bitcoin
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Blockchain
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center', // Coins vs tokens
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Market
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Wallets
    ],
    tutorialKids: [
      'Like money made for the internet that everyone can see.',
      'Like rare digital gold—only 21 million exist.',
      'Like a notebook everyone can read but no one can erase.',
      'Coins have their own house; tokens live in someone else’s house.',
      'Market cap = all toys value; prices wiggle; easy trade needs many friends.',
      'Hot = online backpack; Cold = safe at home; keep your secret key secret.',
    ],
    quiz: [
      { 
        q: 'Is crypto centralized by a single government?', 
        correct: 'B',
        options: {
          A: 'Yes, controlled by banks',
          B: 'No, it is decentralized',
          C: 'Only Bitcoin is decentralized'
        },
        explanation: 'Cryptocurrency is decentralized by design - no single entity controls it. This is one of its key advantages over traditional banking.',
        kidExplanation: 'Crypto is like a playground where no teacher is in charge - all the kids work together to make sure everyone plays fair!'
      },
      { 
        q: 'What does BTC cap at?', 
        correct: 'A',
        options: {
          A: '21 million BTC',
          B: '50 million BTC',
          C: 'Unlimited supply'
        },
        explanation: 'Bitcoin has a fixed supply of exactly 21 million coins. This scarcity is what makes it valuable and deflationary.',
        kidExplanation: 'Bitcoin is like a rare Pokemon card - only 21 million will ever exist, making each one super special!'
      },
      { 
        q: 'Blockchain is a chain of what?', 
        correct: 'B',
        options: {
          A: 'Banks and institutions',
          B: 'Blocks containing transactions',
          C: 'Cryptocurrency exchanges'
        },
        explanation: 'Blockchain is literally a chain of blocks, where each block contains a batch of transactions. This creates an immutable ledger.',
        kidExplanation: 'Blockchain is like building with LEGO blocks! Each block has some information, and they all connect together to make a super strong tower!'
      },
      { 
        q: 'Coins vs Tokens: which has its own chain?', 
        correct: 'A',
        options: {
          A: 'Coins (like Bitcoin)',
          B: 'Tokens (like USDT)',
          C: 'Both have their own chains'
        },
        explanation: 'Coins have their own blockchain (Bitcoin, Ethereum). Tokens are built on existing blockchains (USDT on Ethereum).',
        kidExplanation: 'Coins are like having your own treehouse. Tokens are like toys that live in someone else\'s treehouse!'
      },
      { 
        q: 'Market Cap equals?', 
        correct: 'C',
        options: {
          A: 'Price + Supply',
          B: 'Price - Supply',
          C: 'Price × Supply'
        },
        explanation: 'Market cap is like counting all your toys and multiplying by their price. It shows how much everything is worth together!'
      },
    ],
    simulation: 'Mine three blocks to form a simple chain.',
    news: [
      {
        text: 'Bob: "A major exchange halted withdrawals temporarily due to maintenance." What does this mean?',
        correct: 'B',
        options: {
          A: 'Blockchain is broken forever',
          B: 'A centralized platform paused service; blockchain still runs',
          C: 'All crypto prices go to zero',
        },
        explanation: 'Exchanges are like banks for crypto - they can pause services for maintenance, but the blockchain network continues running independently.',
        kidExplanation: 'It\'s like when your favorite toy store closes for cleaning - the toys still exist, just the store is temporarily closed!'
      },
      {
        text: 'Bob: "A project announced burning tokens." What happens to supply?',
        correct: 'A',
        options: {
          A: 'Supply decreases (tokens removed)',
          B: 'Supply increases',
          C: 'No change ever',
        },
        explanation: 'Token burning permanently removes tokens from circulation, reducing the total supply and potentially increasing the value of remaining tokens.',
        kidExplanation: 'It\'s like throwing away some of your trading cards - now there are fewer cards left, making the ones you keep more special!'
      },
    ],
  },
  1: { // Bitcoin (BTC) Basics
    tutorial: [
      'Bitcoin is the first successful cryptocurrency (2009), introduced by the pseudonymous Satoshi Nakamoto.',
      'Supply is fixed at 21,000,000 BTC; no central party can print more, ensuring scarcity.',
      'Mining secures the network by solving proof-of-work puzzles; miners earn BTC for validating transactions.',
      'The halving event reduces block rewards roughly every 4 years, slowing new supply issuance over time.',
      'It is often compared to digital gold: a store of value and an inflation hedge for many investors.',
      'Bitcoin transactions are peer-to-peer and typically confirm about every 10 minutes.',
    ],
    tutorialImages: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center', // Bitcoin introduction
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center', // Supply cap
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Mining
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Halving
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center', // Digital gold
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Transactions
    ],
    tutorialKids: [
      'The first famous digital money made by a mystery person.',
      'Only a set number of stickers will ever be printed (21 million).',
      'Computers solve puzzles to win coins.',
      'Every few years the prize gets sliced in half, like cake.',
      'People save it like treasure to keep value.',
      'Send coins directly to a friend, like handing them a card.',
    ],
    quiz: [
      { 
        q: 'Who created Bitcoin?', 
        correct: 'A',
        options: {
          A: 'Satoshi Nakamoto',
          B: 'Vitalik Buterin',
          C: 'Elon Musk'
        },
        explanation: 'Satoshi Nakamoto is the pseudonymous creator(s) of Bitcoin, who published the original whitepaper in 2008.',
        kidExplanation: 'Satoshi Nakamoto is like the inventor of the first video game - they created something amazing that changed everything!'
      },
      { 
        q: 'Bitcoin total supply?', 
        correct: 'B',
        options: {
          A: '50 million BTC',
          B: '21 million BTC',
          C: 'Unlimited supply'
        },
        explanation: 'Bitcoin is like a limited edition toy - only 21 million will ever be made, making each one special!'
      },
      { 
        q: 'Current mining reward per block?', 
        correct: 'A',
        options: {
          A: '6.25 BTC',
          B: '12.5 BTC',
          C: '25 BTC'
        },
        explanation: 'Mining rewards are the Bitcoin given to miners for validating transactions. Currently 6.25 BTC per block after the 2020 halving.',
        kidExplanation: 'Mining is like solving math puzzles to earn candy! Right now, miners get 6.25 Bitcoin candies for each puzzle they solve!'
      },
      { 
        q: 'How often do halvings occur?', 
        correct: 'C',
        options: {
          A: 'Every year',
          B: 'Every 2 years',
          C: 'Every ~4 years'
        },
        explanation: 'Halving is like cutting a pizza in half! Every 4 years, the Bitcoin reward gets cut in half to keep it rare.',
        kidExplanation: 'Halving is like sharing your birthday cake! Every 4 years, the Bitcoin reward gets cut in half so there\'s enough for everyone!'
      },
      { 
        q: 'Average Bitcoin confirmation time?', 
        correct: 'B',
        options: {
          A: '5 minutes',
          B: '10 minutes',
          C: '30 minutes'
        },
        explanation: 'Bitcoin transactions are like sending a letter - it takes about 10 minutes to be sure it\'s delivered safely!',
        kidExplanation: 'Bitcoin transactions are like sending a message in a bottle - it takes about 10 minutes to float safely to the other side!'
      },
    ],
    simulation: 'Click to mine Bitcoin blocks and see the halving effect.',
    news: [
      {
        text: 'Bob: "Bitcoin mining difficulty just increased by 15%." What does this mean?',
        correct: 'B',
        options: {
          A: 'Bitcoin is broken',
          B: 'More miners joined, making it harder to mine',
          C: 'Bitcoin price will crash',
        },
        explanation: 'Mining difficulty adjusts automatically based on network participation. More miners = harder puzzles = more secure network.',
        kidExplanation: 'It\'s like when more kids join a game - the game gets harder to win, but it becomes more fun and fair for everyone!'
      },
      {
        text: 'Bob: "The next Bitcoin halving is in 2024." What happens?',
        correct: 'A',
        options: {
          A: 'Mining reward drops from 6.25 to 3.125 BTC',
          B: 'Bitcoin supply doubles',
          C: 'Bitcoin stops working',
        },
        explanation: 'Halving cuts mining rewards in half every ~4 years, reducing new Bitcoin supply and maintaining scarcity.',
        kidExplanation: 'It\'s like when your allowance gets cut in half - you get less money, but the money you have becomes more valuable!'
      },
    ],
  },
  2: { // What is Blockchain?
    tutorial: [
      'A blockchain is a time-ordered chain of blocks, each bundling verified transactions and metadata.',
      'Immutability: altering a past block would break all subsequent links, making tampering detectable.',
      'Distribution: many independent nodes keep full copies, removing single points of failure.',
      'Consensus: nodes follow rules (e.g., proof-of-work) to agree on the next valid block.',
      'Transparency: transactions are public and auditable, while identities can remain pseudonymous.',
      'Security: attacking Bitcoin would require controlling >51% of network hash rate—prohibitively costly.',
    ],
    tutorialImages: [
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Blockchain structure
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Immutability
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Distribution
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Consensus
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Transparency
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Security
    ],
    tutorialKids: [
      'Like LEGO blocks snapped in a long line.',
      'Written with permanent marker—can’t erase it.',
      'Many classmates keep the same notebook copies.',
      'Everyone agrees only after solving a hard puzzle.',
      'A glass notebook anyone can peek into.',
      'You’d need more than half the class to cheat.',
    ],
    quiz: [
      { 
        q: 'Can blockchain blocks be changed after creation?', 
        correct: 'A',
        options: {
          A: 'No, they are immutable',
          B: 'Yes, easily changed',
          C: 'Only by the creator'
        },
        explanation: 'Blockchain blocks are like writing in permanent ink - once written, they can\'t be erased or changed!',
        kidExplanation: 'Blockchain blocks are like writing with magic ink - once you write something, it can never be erased or changed!'
      },
      { 
        q: 'How many computers typically run blockchain?', 
        correct: 'B',
        options: {
          A: 'Just one server',
          B: 'Thousands worldwide',
          C: 'Only 10-20 nodes'
        },
        explanation: 'Blockchain is like a game played by thousands of friends around the world - everyone helps keep it safe!',
        kidExplanation: 'Blockchain is like a giant game of telephone with thousands of kids - everyone helps pass the message and keep it safe!'
      },
      { 
        q: 'What prevents double-spending?', 
        correct: 'C',
        options: {
          A: 'Government regulation',
          B: 'Bank verification',
          C: 'Network consensus'
        },
        explanation: 'Double-spending is like trying to spend the same dollar twice. The network of computers all agree to stop this from happening!',
        kidExplanation: 'Double-spending is like trying to use the same toy ticket twice at the arcade - all the game machines work together to stop cheaters!'
      },
      { 
        q: 'What percentage needed to attack Bitcoin?', 
        correct: 'B',
        options: {
          A: '25%',
          B: '51%',
          C: '75%'
        },
        explanation: 'To attack Bitcoin, you\'d need to control more than half (51%) of all computers - that\'s like needing more than half your class to agree to break the rules!',
        kidExplanation: 'To attack Bitcoin, you\'d need to control more than half of all the computers - that\'s like needing more than half your class to agree to break the playground rules!'
      },
      { 
        q: 'Are blockchain transactions public?', 
        correct: 'A',
        options: {
          A: 'Yes, transparent ledger',
          B: 'No, completely private',
          C: 'Only to miners'
        },
        explanation: 'Blockchain is like a glass piggy bank - everyone can see the money moving, but they don\'t know whose money it is!',
        kidExplanation: 'Blockchain is like a see-through piggy bank - everyone can see the coins moving around, but they don\'t know which kid put them in!'
      },
    ],
    simulation: 'Build a blockchain by linking blocks with previous hash.',
    news: [
      {
        text: 'Bob: "A blockchain had a 51% attack but transactions were still valid." How?',
        correct: 'C',
        options: {
          A: 'The attack failed',
          B: 'Transactions were reversed',
          C: 'Attackers followed consensus rules',
        },
      },
    ],
  },
  3: { // Coins vs Tokens
    tutorial: [
      'Coins natively belong to their own blockchain (BTC on Bitcoin, ETH on Ethereum).',
      'Tokens are issued on top of existing chains (USDT/UNI/LINK on Ethereum).',
      'Smart contracts are on-chain programs that execute rules automatically.',
      'ERC-20 defines common rules for fungible tokens on Ethereum.',
      'Gas fees are payments for computation/storage when using the network.',
      'Layer 2 solutions increase throughput and reduce fees by processing off-chain.',
    ],
    tutorialImages: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center', // Coins
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center', // Tokens
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Smart contracts
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // ERC-20
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Gas fees
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Layer 2
    ],
    tutorialKids: [
      'Coins own a house; tokens rent a room in a friend’s house.',
      'Tokens live on big chains like Ethereum.',
      'Robot rules that run by themselves.',
      'A cookie recipe all tokens follow to work together.',
      'A small toll you pay to use the road.',
      'A fast lane that skips the traffic.',
    ],
    quiz: [
      { 
        q: 'Which has its own blockchain: BTC or USDT?', 
        correct: 'A',
        options: {
          A: 'BTC (Bitcoin)',
          B: 'USDT (Tether)',
          C: 'Both have their own chains'
        },
        explanation: 'Bitcoin is like having your own house, while USDT is like renting a room in someone else\'s house (Ethereum)!',
        kidExplanation: 'Bitcoin is like having your own treehouse, while USDT is like staying in your friend\'s treehouse!'
      },
      { 
        q: 'What standard do Ethereum tokens follow?', 
        correct: 'B',
        options: {
          A: 'ERC-721',
          B: 'ERC-20',
          C: 'ERC-1155'
        },
        explanation: 'ERC-20 is like a recipe that all Ethereum tokens follow - it makes sure they all work the same way!',
        kidExplanation: 'ERC-20 is like a recipe for making cookies - all Ethereum tokens follow the same recipe so they all work the same way!'
      },
      { 
        q: 'What are gas fees?', 
        correct: 'C',
        options: {
          A: 'Mining rewards',
          B: 'Exchange fees',
          C: 'Transaction costs'
        },
        explanation: 'Gas fees are transaction costs on blockchains like Ethereum, paid to miners/validators for processing transactions.',
        kidExplanation: 'Gas fees are like paying for gas in your toy car - you need to pay a small fee to make your transaction zoom around the blockchain!'
      },
      { 
        q: 'What is Layer 2 for?', 
        correct: 'A',
        options: {
          A: 'Speed and lower costs',
          B: 'Higher security',
          C: 'More decentralization'
        },
        explanation: 'Layer 2 is like a fast lane on a highway - it makes transactions faster and cheaper than the main road!',
        kidExplanation: 'Layer 2 is like a super-fast slide at the playground - it gets you where you want to go much faster than walking!'
      },
      { 
        q: 'Smart contracts run on which blockchain?', 
        correct: 'B',
        options: {
          A: 'Bitcoin only',
          B: 'Ethereum',
          C: 'All blockchains'
        },
        explanation: 'Smart contracts are like robot helpers that live on Ethereum - they automatically do things when certain conditions are met!',
        kidExplanation: 'Smart contracts are like magic robots that live on Ethereum - they automatically do things when you tell them to, just like magic!'
      },
    ],
    simulation: 'Deploy a token on the Ethereum network.',
    news: [
      {
        text: 'Bob: "Gas fees on Ethereum are $50 today." What does this mean?',
        correct: 'B',
        options: {
          A: 'Ethereum is broken',
          B: 'Network is congested, transactions cost more',
          C: 'Ethereum price dropped',
        },
      },
    ],
  },
  4: { // Market Basics
    tutorial: [
      'Market cap equals current price multiplied by circulating supply—an estimate of total network value.',
      'Volatility describes how sharply prices move; higher volatility means bigger, faster swings.',
      'Liquidity reflects how easily you can trade without moving price; deeper markets reduce slippage.',
      'A bull market features rising prices and optimism over extended periods.',
      'A bear market features falling prices and risk-off sentiment over time.',
      'HODL encourages long-term holding despite short-term noise.',
    ],
    tutorialImages: [
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Market cap
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Volatility
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Liquidity
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Bull market
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Bear market
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // HODL
    ],
    tutorialKids: [
      'Total toy value = toy price × how many toys.',
      'Like a roller coaster—prices zoom up and down.',
      'Lots of kids trading makes swapping easy.',
      'A strong bull running uphill (prices go up).',
      'A sleepy bear walking downhill (prices go down).',
      'Hold your treasure tight for a long time.',
    ],
    quiz: [
      { 
        q: 'Market cap formula?', 
        correct: 'C',
        options: {
          A: 'Price + Supply',
          B: 'Price - Supply',
          C: 'Price × Supply'
        },
        explanation: 'Market cap = current price × total supply. This shows the total value of all coins in circulation.',
        kidExplanation: 'Market cap is like counting all your toys and multiplying by their price - it shows how much your whole toy collection is worth!'
      },
      { 
        q: 'What is volatility?', 
        correct: 'B',
        options: {
          A: 'Price stability',
          B: 'Price swings',
          C: 'Trading volume'
        },
        explanation: 'Volatility is like a roller coaster - crypto prices go up and down a lot, which can be exciting but also scary!',
        kidExplanation: 'Volatility is like riding a roller coaster - crypto prices go up and down like a crazy ride, which can be super fun but also a little scary!'
      },
      { 
        q: 'High liquidity means?', 
        correct: 'A',
        options: {
          A: 'Easy to trade',
          B: 'High fees',
          C: 'Low volume'
        },
        explanation: 'High liquidity is like having lots of friends who want to trade toys with you - it\'s easy to buy and sell!',
        kidExplanation: 'High liquidity is like having lots of friends at the toy swap meet - everyone wants to trade with you, so it\'s super easy to buy and sell!'
      },
      { 
        q: 'Bull market trend?', 
        correct: 'C',
        options: {
          A: 'Down',
          B: 'Sideways',
          C: 'Up'
        },
        explanation: 'A bull market is like a happy bull charging upward - prices keep going up and everyone feels excited!',
        kidExplanation: 'A bull market is like a happy bull charging up a hill - prices keep going up and up, making everyone super excited!'
      },
      { 
        q: 'What does HODL mean?', 
        correct: 'B',
        options: {
          A: 'Sell quickly',
          B: 'Hold long-term',
          C: 'Trade frequently'
        },
        explanation: 'HODL means holding your crypto like a treasure - you keep it for a long time instead of selling it quickly!',
        kidExplanation: 'HODL means holding your crypto like a special treasure - you keep it safe for a long time instead of trading it away quickly!'
      },
    ],
    simulation: 'Trade crypto and see how market cap changes.',
    news: [
      {
        text: 'Bob: "Bitcoin market cap hit $1 trillion." What does this mean?',
        correct: 'A',
        options: {
          A: 'Total Bitcoin value is $1 trillion',
          B: 'Bitcoin price is $1 trillion',
          C: 'Bitcoin supply is $1 trillion',
        },
      },
    ],
  },
  5: { // Wallets & Security
    tutorial: [
      'Hot wallets are internet-connected and convenient, but they face online risks.',
      'Cold wallets keep keys offline (hardware/paper), offering the strongest protection.',
      'A private key grants full control of funds; revealing it compromises your wallet.',
      'A 12–24 word seed phrase can fully restore your wallet; store it securely offline.',
      'Two-factor authentication (2FA) adds a second approval step to logins and actions.',
      'Never share keys or seed phrases; treat them like the master key to your vault.',
    ],
    tutorialImages: [
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Hot wallets
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Cold wallets
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Private keys
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Seed phrases
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // 2FA
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Security
    ],
    tutorialKids: [
      'Online backpack—easy but riskier.',
      'Lockbox at home—super safe.',
      'Secret password to your treasure—never tell anyone.',
      'Magic recovery sentence with 12–24 special words.',
      'Two locks on your door for extra safety.',
      'Keep your secret words secret, always.',
    ],
    quiz: [
      { 
        q: 'Which is more secure: hot or cold wallet?', 
        correct: 'B',
        options: {
          A: 'Hot wallet',
          B: 'Cold wallet',
          C: 'Both equally secure'
        },
        explanation: 'Cold wallets are like keeping your money in a safe at home - they\'re offline and much harder for bad guys to steal!',
        kidExplanation: 'Cold wallets are like keeping your allowance in a piggy bank at home - they\'re not connected to the internet, so bad guys can\'t steal them!'
      },
      { 
        q: 'What is a private key?', 
        correct: 'A',
        options: {
          A: 'Your password to access crypto',
          B: 'Public address',
          C: 'Seed phrase'
        },
        explanation: 'A private key is like the secret password to your piggy bank - only you should know it, and never share it with anyone!',
        kidExplanation: 'A private key is like the secret code to your treasure chest - only you should know it, and never tell anyone else!'
      },
      { 
        q: 'Seed phrase length?', 
        correct: 'C',
        options: {
          A: '6-8 words',
          B: '10 words',
          C: '12-24 words'
        },
        explanation: 'Seed phrases are like a secret sentence with 12-24 words that can unlock your wallet if you ever lose it!',
        kidExplanation: 'Seed phrases are like a magic spell with 12-24 special words that can unlock your wallet if you ever lose it!'
      },
      { 
        q: 'Should you share private keys?', 
        correct: 'A',
        options: {
          A: 'Never',
          B: 'With trusted friends',
          C: 'On social media'
        },
        explanation: 'Never share your private key! It\'s like giving someone the key to your house - they could take everything!',
        kidExplanation: 'Never share your private key! It\'s like giving someone the key to your toy box - they could take all your favorite toys!'
      },
      { 
        q: 'What does 2FA add?', 
        correct: 'B',
        options: {
          A: 'Lower fees',
          B: 'Extra security',
          C: 'Faster transactions'
        },
        explanation: '2FA is like having two locks on your door - even if someone gets your password, they still need your phone to get in!',
        kidExplanation: '2FA is like having two locks on your toy box - even if someone guesses your secret word, they still need your special key to open it!'
      },
    ],
    simulation: 'Set up a secure wallet with seed phrase.',
    news: [
      {
        text: 'Bob: "Someone lost $1M because they shared their seed phrase." What happened?',
        correct: 'B',
        options: {
          A: 'They forgot their password',
          B: 'Scammer stole their crypto',
          C: 'Exchange was hacked',
        },
      },
    ],
  },
  6: { // How People Use Crypto
    tutorial: [
      'Investing focuses on long-term appreciation and fundamentals (HODL mindset).',
      'Trading seeks short-term opportunities but increases risk and complexity.',
      'Payments: some merchants accept crypto; settlement is peer-to-peer.',
      'DeFi enables lending, borrowing, and yield via smart contracts.',
      'NFTs represent unique digital ownership for art, collectibles, and games.',
      'Crypto gaming can reward players with tokens or tradable assets.',
    ],
    tutorialImages: [
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Investing
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Trading
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Payments
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // DeFi
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // NFTs
      'https://images.unsplash.com/photo-1639322537228-f912d6b7b1b1?w=400&h=300&fit=crop&crop=center', // Gaming
    ],
    tutorialKids: [
      'Plant a seed and wait for a big tree (hold long-term).',
      'Fast video-game moves to win quickly (riskier).',
      'Pay with digital coins at a shop.',
      'A bank made of computers you can use from home.',
      'Unique digital trading cards you can own.',
      'Play games and earn coins as prizes.',
    ],
    quiz: [
      { 
        q: 'HODL strategy means?', 
        correct: 'A',
        options: {
          A: 'Buy and hold long-term',
          B: 'Sell quickly for profit',
          C: 'Trade frequently'
        },
        explanation: 'HODL is like keeping your favorite toy for years - you buy crypto and hold it for a long time, hoping it gets more valuable!',
        kidExplanation: 'HODL is like keeping your favorite toy for years - you buy crypto and hold it tight for a long time, hoping it becomes super valuable!'
      },
      { 
        q: 'Trading vs investing: which is riskier?', 
        correct: 'B',
        options: {
          A: 'Investing',
          B: 'Trading',
          C: 'Both equally risky'
        },
        explanation: 'Trading is like playing a fast game where you win or lose quickly. Investing is like planting a tree and waiting for it to grow!',
        kidExplanation: 'Trading is like playing a super fast video game where you win or lose quickly. Investing is like planting a magic bean and waiting for it to grow into a giant beanstalk!'
      },
      { 
        q: 'What is DeFi?', 
        correct: 'C',
        options: {
          A: 'Digital finance',
          B: 'Bank finance',
          C: 'Decentralized finance'
        },
        explanation: 'DeFi is like having a bank that runs on computers instead of buildings - you can lend, borrow, and earn money without going to a real bank!',
        kidExplanation: 'DeFi is like having a magic bank that lives in your computer - you can lend, borrow, and earn money without ever leaving your room!'
      },
      { 
        q: 'NFTs are?', 
        correct: 'A',
        options: {
          A: 'Unique digital assets',
          B: 'Fungible tokens',
          C: 'Cryptocurrency'
        },
        explanation: 'NFTs are like digital trading cards - each one is unique and special, just like how no two trading cards are exactly the same!',
        kidExplanation: 'NFTs are like digital Pokemon cards - each one is unique and special, just like how no two Pokemon cards are exactly the same!'
      },
      { 
        q: 'Play-to-earn games reward?', 
        correct: 'B',
        options: {
          A: 'Traditional currency',
          B: 'Crypto tokens',
          C: 'Nothing'
        },
        explanation: 'Play-to-earn games are like getting paid to play! You earn crypto tokens by playing games, which you can then trade or sell!',
        kidExplanation: 'Play-to-earn games are like getting candy for playing! You earn crypto tokens by playing fun games, which you can then trade for other cool stuff!'
      },
    ],
    simulation: 'Try different crypto use cases: invest, trade, DeFi.',
    news: [
      {
        text: 'Bob: "DeFi protocol offers 20% APY on stablecoins." What does this mean?',
        correct: 'A',
        options: {
          A: 'You can earn 20% interest by lending',
          B: 'Stablecoins will increase 20% in price',
          C: 'The protocol is a scam',
        },
      },
    ],
  },
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}

export function todayKey() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}


