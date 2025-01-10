import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const BitcoinTracker = () => {
  // More granular data points to create detailed curves
  const data = [
    { date: '16 Dec', price: 42100 },
    { date: '16 Dec 4h', price: 41800 },
    { date: '16 Dec 8h', price: 42200 },
    { date: '16 Dec 12h', price: 41900 },
    { date: '16 Dec 16h', price: 42400 },
    { date: '16 Dec 20h', price: 42100 },
    { date: '17 Dec', price: 42300 },
    { date: '17 Dec 4h', price: 42600 },
    { date: '17 Dec 8h', price: 42200 },
    { date: '17 Dec 12h', price: 41900 },
    { date: '17 Dec 16h', price: 42400 },
    { date: '17 Dec 20h', price: 42100 },
    { date: '18 Dec', price: 42000 },
    { date: '18 Dec 4h', price: 42300 },
    { date: '18 Dec 8h', price: 41800 },
    { date: '18 Dec 12h', price: 41600 },
    { date: '18 Dec 16h', price: 42000 },
    { date: '18 Dec 20h', price: 41500 },
    { date: '19 Dec', price: 42000 },
    { date: '19 Dec 4h', price: 44000 },
    { date: '19 Dec 8h', price: 45000 },
    { date: '19 Dec 12h', price: 46500 },
    { date: '19 Dec 16h', price: 45500 },
    { date: '19 Dec 20h', price: 44500 },
    { date: '20 Dec', price: 43500 },
    { date: '20 Dec 4h', price: 44000 },
    { date: '20 Dec 8h', price: 44500 },
    { date: '20 Dec 12h', price: 44800 },
    { date: '20 Dec 16h', price: 44200 },
    { date: '20 Dec 20h', price: 44600 },
    { date: '21 Dec', price: 44400 },
    { date: '21 Dec 4h', price: 44800 },
    { date: '21 Dec 8h', price: 44200 },
    { date: '21 Dec 12h', price: 43800 },
    { date: '21 Dec 16h', price: 43400 },
    { date: '21 Dec 20h', price: 43000 },
    { date: '22 Dec', price: 42800 },
    { date: '22 Dec 4h', price: 42400 },
    { date: '22 Dec 8h', price: 42000 },
    { date: '22 Dec 12h', price: 41800 },
    { date: '22 Dec 16h', price: 42200 },
    { date: '22 Dec 20h', price: 42000 }
  ];

  const timeframes = ['1H', '24H', '7D', '1M', '3M', '6M', '1Y', 'ALL'];

  return (
    <div className="bg-white p-6 rounded-lg max-w-4xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-orange-400 w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">₿</span>
          </div>
          <span className="text-xl font-bold">Bitcoin</span>
          <span className="text-gray-500">BTC</span>
        </div>
        <span className="bg-gray-200 px-2 py-1 rounded text-sm">Rank #1</span>
      </div>

      <div className="mb-6">
        <div className="text-3xl font-bold">$46,953.04</div>
        <div className="text-gray-600">₹ 39,42,343</div>
        <div className="inline-flex items-center gap-2 mt-2">
          <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">
            ▲ 2.51%
          </span>
          <span className="text-gray-500 text-sm">(24H)</span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Bitcoin Price Chart (USD)</h2>
          <div className="flex gap-2">
            {timeframes.map((timeframe) => (
              <button
                key={timeframe}
                className={`px-3 py-1 rounded text-sm ${
                  timeframe === '7D' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                dy={10}
                interval={6}  // Show fewer x-axis labels
                minTickGap={30}
              />
              <YAxis 
                domain={[41000, 47000]}
                axisLine={false}
                tickLine={false}
                dx={-10}
                tickFormatter={(value) => `${value.toLocaleString()}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  padding: '8px'
                }}
                formatter={(value) => [`$${value.toLocaleString()}`, 'Price']}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#2563eb" 
                strokeWidth={2} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BitcoinTracker;