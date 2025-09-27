# Pexels API Setup for Tutorial Images

## 🔑 Getting Your Pexels API Key

1. Go to [Pexels API](https://www.pexels.com/api/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Add it to your `.env` file:

```env
VITE_PEXELS_API_KEY=your_actual_pexels_api_key_here
```

## 📸 How It Works

- **PexelsImage Component**: Fetches random images from Pexels API
- **Smart Query Mapping**: Maps tutorial topics to relevant search terms
- **Fallback Handling**: Shows "Image not available" if API fails
- **Responsive Design**: Images fit perfectly in tutorial cards

## 🎯 Search Query Examples

- **Bitcoin topics** → "cryptocurrency"
- **Blockchain topics** → "blockchain technology" 
- **DeFi topics** → "defi decentralized finance"
- **Wallet topics** → "digital wallet"
- **NFT topics** → "nft digital art"
- **Trading topics** → "crypto trading"

## 🚀 Features

- ✅ **Free API**: 200 requests/hour on free plan
- ✅ **High-quality images**: Professional stock photos
- ✅ **Random selection**: Different images each time
- ✅ **Error handling**: Graceful fallbacks
- ✅ **Responsive**: Works on all screen sizes

## 🔧 Usage

The PexelsImage component is automatically used in TutorialImage:

```jsx
<TutorialImage 
  title="Bitcoin is the first cryptocurrency..."
  size="200px"
  alt="Bitcoin tutorial illustration"
/>
```

## 📝 Notes

- Images are fetched dynamically based on lesson content
- API key is required for production use
- Free plan includes 200 requests per hour
- Images are cached by the browser for better performance
