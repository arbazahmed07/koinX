import React from 'react';
import { Info } from 'lucide-react';

const MarketStats = ({ stats }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="flex items-center gap-2 mb-6">
      <h2 className="text-xl font-bold">Market Stats</h2>
      <Info className="w-4 h-4 text-gray-400" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <div className="text-gray-500 mb-1">Market Cap</div>
          <div className="text-lg font-medium">${stats.marketCap.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-gray-500 mb-1">Trading Volume (24h)</div>
          <div className="text-lg font-medium">${stats.volume24h.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-gray-500 mb-1">Circulating Supply</div>
          <div className="text-lg font-medium">{stats.circulatingSupply.toLocaleString()} BTC</div>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <div className="text-gray-500 mb-1">24h High / Low</div>
          <div className="text-lg font-medium">
            ${stats.high24h.toLocaleString()} / ${stats.low24h.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-gray-500 mb-1">7d High / Low</div>
          <div className="text-lg font-medium">
            ${stats.high7d.toLocaleString()} / ${stats.low7d.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-gray-500 mb-1">Max Supply</div>
          <div className="text-lg font-medium">{stats.maxSupply.toLocaleString()} BTC</div>
        </div>
      </div>
    </div>
  </div>
);

export default MarketStats;