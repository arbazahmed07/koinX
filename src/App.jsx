import React from 'react';
import { Activity, DollarSign } from 'lucide-react';
import Navigation from './components/Navigation';
import PriceChart from './components/PriceChart';
import MarketStats from './components/MarketStats';
import TrendingCoins from './components/TrendingCoins';
import Footer from './components/Footer';
import { priceHistory, marketStats, trendingCoins } from './Data/sampleData';
import Dashboard from './components/Dashboard';
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
            <h3 className="text-lg font-bold mb-4">What is Bitcoin?</h3>
            <p className="text-gray-700 mb-4">
              Bitcoin is the first decentralized cryptocurrency. Launched in 2009 by an unknown person or group known as Satoshi Nakamoto, Bitcoin is a digital currency that enables instant payments to anyone, anywhere in the world without the need for traditional intermediaries like banks.
            </p>
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1"><Activity className="text-blue-600" /></div>
                  <div>
                    <h4 className="font-semibold">Decentralized Network</h4>
                    <p className="text-gray-700">
                      Bitcoin operates on a decentralized network, meaning it is not controlled by any central authority, such as a government or bank.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1"><DollarSign className="text-blue-600" /></div>
                  <div>
                    <h4 className="font-semibold">Digital Currency</h4>
                    <p className="text-gray-700">
                      Bitcoin is a digital form of money. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;