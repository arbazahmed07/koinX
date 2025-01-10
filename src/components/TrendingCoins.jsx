import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TrendingCoins = ({ coins }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold">Trending Coins</h2>
      <div className="flex gap-2">
        <button className="p-1 rounded hover:bg-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="p-1 rounded hover:bg-gray-100">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
    <div className="space-y-4">
      {coins.map((coin) => (
        <div key={coin.symbol} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full" />
            <div>
              <div className="font-medium">{coin.name}</div>
              <div className="text-sm text-gray-500">{coin.symbol}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">${coin.price.toLocaleString()}</div>
            <div className={`text-sm ${coin.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {coin.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TrendingCoins;