import React from 'react';
import { Activity, DollarSign } from 'lucide-react';
import Navigation from './components/Navigation';
import PriceChart from './components/PriceChart';
import MarketStats from './components/MarketStats';
import TrendingCoins from './components/TrendingCoins';
import Footer from './components/Footer';
import { priceHistory, marketStats, trendingCoins } from './Data/sampleData';
import Dashboard from './components/Dashboard';
import TokenomicsSection from './components/TokenomicsSection';
import Teams from './components/Teams';
import CryptoSection from './components/CryptoSection';
const InvestmentChartSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-32 h-32">
    <defs>
      <linearGradient id="chartLine" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
      </linearGradient>
    </defs>
    
    <rect x="50" y="50" width="300" height="300" rx="20" fill="#1a1a1a"/>
    <rect x="60" y="60" width="280" height="280" rx="15" fill="#000"/>
    
    <text x="80" y="100" fill="#fff" fontSize="16" fontFamily="Arial">Investing</text>
    <text x="80" y="130" fill="#fff" fontSize="24" fontFamily="Arial, sans-serif" fontWeight="bold">$38,150.69</text>
    
    <path d="M80 220 Q130 180, 180 200 T280 160" stroke="#22c55e" fill="none" strokeWidth="2"/>
    <path d="M80 220 Q130 180, 180 200 T280 160 V250 H80 Z" fill="url(#chartLine)"/>
    
    <text x="80" y="270" fill="#666" fontSize="12">1H</text>
    <text x="140" y="270" fill="#666" fontSize="12">1D</text>
    <text x="200" y="270" fill="#666" fontSize="12">1W</text>
    <text x="260" y="270" fill="#666" fontSize="12">1M</text>
  </svg>
);

const TaxCalculatorSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-32 h-32">
    <rect x="50" y="50" width="300" height="300" rx="10" fill="#1a1a1a"/>
    <rect x="60" y="60" width="80" height="280" fill="#000"/>
    <rect x="150" y="60" width="190" height="280" fill="#111"/>
    
    <circle cx="85" cy="90" r="8" fill="#4f46e5"/>
    <rect x="70" y="120" width="60" height="8" rx="4" fill="#333"/>
    <rect x="70" y="140" width="60" height="8" rx="4" fill="#333"/>
    <rect x="70" y="160" width="60" height="8" rx="4" fill="#333"/>
    
    <rect x="170" y="80" width="150" height="20" rx="4" fill="#222"/>
    <rect x="170" y="110" width="150" height="20" rx="4" fill="#222"/>
    <rect x="170" y="140" width="150" height="20" rx="4" fill="#222"/>
    
    <rect x="170" y="180" width="150" height="140" rx="4" fill="#000"/>
    <line x1="170" y1="210" x2="320" y2="210" stroke="#333" strokeWidth="1"/>
    <line x1="170" y1="240" x2="320" y2="240" stroke="#333" strokeWidth="1"/>
    <line x1="170" y1="270" x2="320" y2="270" stroke="#333" strokeWidth="1"/>
    <line x1="220" y1="180" x2="220" y2="320" stroke="#333" strokeWidth="1"/>
    <line x1="270" y1="180" x2="270" y2="320" stroke="#333" strokeWidth="1"/>
  </svg>
);

const CalculatorCard = ({ title, children, buttonText, gradient }) => (
  <div className={`rounded-lg p-6 text-white ${gradient}`}>
    <div className="flex items-center gap-6">
      <div className="bg-black/20 rounded-lg p-2">
        {children}
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
          {buttonText}
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  </div>
);

const BitcoinCalculators = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Already Holding Bitcoin?</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CalculatorCard 
          title="Calculate your Profits"
          buttonText="Check Now"
          gradient="bg-gradient-to-r from-emerald-400 to-blue-500"
        >
          <InvestmentChartSVG />
        </CalculatorCard>
        
        <CalculatorCard 
          title="Calculate your tax liability"
          buttonText="Check Now"
          gradient="bg-gradient-to-r from-orange-400 to-red-500"
        >
          <TaxCalculatorSVG />
        </CalculatorCard>

      </div>
      <p>Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous entity known as Satoshi Nakamoto. It operates without a central authority, using blockchain technology to ensure secure transactions. Bitcoin transactions are verified by network nodes through cryptography and recorded in a public ledger. It can be exchanged for other currencies or goods and services, and its value is often volatile. Bitcoin has gained popularity due to its potential as a store of value, its scarcity (only 21 million coins will ever be mined), and its ability to bypass traditional banking systems, offering a decentralized financial system.</p>
    </div>
  );
};
const GetStartedCard = () => (
  <div className="bg-blue-600 text-white p-8 rounded-lg">
    <h2 className="text-2xl font-bold mb-4">
      Get Started with KoinX
      <br />
      for FREE
    </h2>
    <p className="mb-8">
      With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
    </p>

    {/* Illustration */}
    <div className="relative mb-8 h-48">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Phone */}
        <div className="relative">
          <div className="w-24 h-40 bg-white rounded-lg transform rotate-12 relative z-10"></div>
          {/* Decorative Elements */}
          <div className="absolute -left-6 top-4 space-y-1">
            <div className="w-6 h-6 border-4 border-blue-400 rounded-full opacity-50"></div>
            <div className="w-4 h-4 border-4 border-blue-400 rounded-full opacity-50 ml-3"></div>
          </div>
          {/* Coin */}
          <div className="absolute -left-4 bottom-4">
            <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
          </div>
          {/* Person */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
            <div className="w-4 h-4 bg-yellow-900 rounded-full mb-1"></div>
            <div className="w-6 h-12 bg-teal-500 rounded-t-lg"></div>
          </div>
        </div>
      </div>
    </div>

    <button className="w-full bg-white text-black font-semibold py-4 px-6 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
      Get Started for FREE
      <span className="text-xl">→</span>
    </button>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-2">
            Cryptocurrencies {`>`} Bitcoin
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PriceChart data={priceHistory} />
            <Dashboard/>
            <MarketStats stats={marketStats} />
          </div>
          
          <div className="space-y-6">

            <GetStartedCard />
            <TrendingCoins coins={trendingCoins} />
          </div>
        </div>
        <div className="mt-8">
  <h2 className="text-xl font-bold mb-4">About Bitcoin</h2>
  <div className="bg-white rounded-lg p-6 shadow-sm">
    {/* What is Bitcoin? */}
    <h3 className="text-lg font-bold mb-4">What is Bitcoin?</h3>
    <p className="text-gray-700 mb-4">
      Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
    </p>

    {/* Divider */}
    <div className="border-t my-4"></div>

    {/* Additional Information Section */}
    <h3 className="text-lg font-bold mb-4">Key Developments</h3>
    <p className="text-gray-700 mb-4">
      Over the last decade, Bitcoin has revolutionized the concept of digital money. It has enabled a decentralized financial system free from government or central bank control. Adoption rates have surged, with institutions like Tesla and MicroStrategy holding significant amounts in Bitcoin.
    </p>
    <p className="text-gray-700 mb-4">
      The blockchain technology behind Bitcoin has paved the way for innovations such as smart contracts and decentralized finance (DeFi). With more than 40% of all cryptocurrencies' market capitalization, Bitcoin remains the leader in the space.
    </p>
    <p className="text-gray-700">
      While challenges such as scalability and environmental concerns persist, developers and researchers continue to work on solutions. Technologies like the Lightning Network are helping to reduce transaction times and costs, making Bitcoin more accessible to everyday users.
    </p>
  </div>
  
</div>
<BitcoinCalculators/>
<TokenomicsSection/>
<Teams/>
<CryptoSection/>
      </main>

      <Footer />
    </div>
  );
};

export default App;