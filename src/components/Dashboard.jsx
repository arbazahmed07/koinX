import React from 'react';
import { Info, ChevronRight, Newspaper, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const data = {
    performance: {
      todayLow: 46930.22,
      todayHigh: 49343.83,
      current: 48637.83,
      low52W: 16930.22,
      high52W: 49743.83,
    },
    fundamentals: {
      bitcoinPrice: 16815.46,
      low24h: 16382.07,
      high24h: 16874.12,
      low7d: 16382.07,
      high7d: 16874.12,
      tradingVolume: 23249202782,
      marketCapRank: 1,
      marketCap: 323507290047,
      marketCapDominance: 38.343,
      volumeMarketCap: 0.0718,
      allTimeHigh: {
        value: 69044.77,
        date: "Nov 10, 2021",
        change: -75.6,
      },
      allTimeLow: {
        value: 67.81,
        date: "Jul 06, 2013",
        change: 24729.1,
      },
    },
  };
 
  const sentimentData = {
    keyEvents: [
      {
        icon: <Newspaper className="w-8 h-8 text-white" />,
        bgColor: "bg-blue-500",
        title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
        description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
      },
      {
        icon: <TrendingUp className="w-8 h-8 text-white" />,
        bgColor: "bg-green-500",
        title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
        description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisine metus quis del"
      }
    ],
    analystEstimates: {
      buy: 76,
      hold: 8,
      sell: 16
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 py-4">
            <span className="text-blue-600 border-b-2 border-blue-600 font-medium">Overview</span>
            <span className="text-gray-500 hover:text-blue-600">Fundamentals</span>
            <span className="text-gray-500 hover:text-blue-600">News Insights</span>
            <span className="text-gray-500 hover:text-blue-600">Sentiments</span>
            <span className="text-gray-500 hover:text-blue-600">Team</span>
            <span className="text-gray-500 hover:text-blue-600">Technicals</span>
            <span className="text-gray-500 hover:text-blue-600">Tokenomics</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Performance Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance</h2>
          
          {/* Today's Range */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Today's Low</span>
              <span className="text-gray-500">Today's High</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{data.performance.todayLow}</span>
              <div className="flex-grow mx-4 h-2 relative">
                <div className="absolute w-full h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #FF4444 0%, #FFFF00 50%, #44FF44 100%)'
                  }}
                />
                <div className="absolute w-0 h-0"
                  style={{
                    left: `${((data.performance.current - data.performance.todayLow) /
                      (data.performance.todayHigh - data.performance.todayLow)) *
                      100}%`,
                    transform: 'translateX(-50%)',
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderBottom: '8px solid black',
                    top: '-10px'
                  }}
                />
              </div>
              <span className="font-medium">{data.performance.todayHigh}</span>
            </div>
            <div className="text-center font-medium mb-6">${data.performance.current}</div>
          </div>

          {/* 52W Range */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">52W Low</span>
              <span className="text-gray-500">52W High</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">{data.performance.low52W}</span>
              <div className="flex-grow mx-4 h-2 relative">
                <div className="absolute w-full h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #FF4444 0%, #FFFF00 50%, #44FF44 100%)'
                  }}
                />
              </div>
              <span className="font-medium">{data.performance.high52W}</span>
            </div>
          </div>
        </div>

        {/* Fundamentals Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Fundamentals</h2>
            <Info className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-500">Bitcoin Price</span>
                <span className="font-medium">${data.fundamentals.bitcoinPrice.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-500">24h Low / 24h High</span>
                <span className="font-medium">
                  ${data.fundamentals.low24h.toLocaleString()} / ${data.fundamentals.high24h.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-500">7d Low / 7d High</span>
                <span className="font-medium">
                  ${data.fundamentals.low7d.toLocaleString()} / ${data.fundamentals.high7d.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-500">Trading Volume</span>
                <span className="font-medium">${data.fundamentals.tradingVolume.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-500">Market Cap Rank</span>
                <span className="font-medium">#{data.fundamentals.marketCapRank}</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-500">Market Cap</span>
                <span className="font-medium">${data.fundamentals.marketCap.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-500">Market Cap Dominance</span>
                <span className="font-medium">{data.fundamentals.marketCapDominance}%</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-500">Volume / Market Cap</span>
                <span className="font-medium">{data.fundamentals.volumeMarketCap}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-500">All-Time High</span>
                <div className="text-right">
                  <div className="font-medium">
                    ${data.fundamentals.allTimeHigh.value.toLocaleString()} 
                    <span className="text-red-500 ml-1">{data.fundamentals.allTimeHigh.change}%</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {data.fundamentals.allTimeHigh.date} (about 1 year)
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-500">All-Time Low</span>
                <div className="text-right">
                  <div className="font-medium">
                    ${data.fundamentals.allTimeLow.value.toLocaleString()} 
                    <span className="text-green-500 ml-1">{data.fundamentals.allTimeLow.change}%</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {data.fundamentals.allTimeLow.date} (over 9 years)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Sentiment Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-bold mb-6">Sentiment</h2>
        
        {/* Key Events */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl text-gray-700 font-semibold">Key Events</h3>
            <Info className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="relative">
            <div className="flex gap-4 overflow-hidden">
              {sentimentData.keyEvents.map((event, index) => (
                <div key={index} className={`flex-1 p-6 rounded-xl ${index === 0 ? 'bg-blue-50' : 'bg-green-50'}`}>
                  <div className="flex gap-4 mb-4">
                    <div className={`rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-green-500'} p-2`}>
                      {event.icon}
                    </div>
                    <p className="font-medium">{event.title}</p>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Analyst Estimates */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl text-gray-700 font-semibold">Analyst Estimates</h3>
            <Info className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
              <span className="text-4xl text-green-500 font-bold">76<span className="text-2xl">%</span></span>
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-12 text-gray-500">Buy</span>
                <div className="flex-1 h-2 bg-green-500 rounded-full" style={{width: '76%'}}></div>
                <span className="w-12 text-right text-gray-700">76%</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="w-12 text-gray-500">Hold</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full" style={{width: '8%'}}></div>
                <span className="w-12 text-right text-gray-700">8%</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="w-12 text-gray-500">Sell</span>
                <div className="flex-1 h-2 bg-red-500 rounded-full" style={{width: '16%'}}></div>
                <span className="w-12 text-right text-gray-700">16%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Placeholder Sections */}
        <div className="space-y-6">
  {/* News Insights */}
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">News Insights</h2>
    <ul className="space-y-2 text-gray-500">
      <li>
        <strong>Breaking News:</strong> Bitcoin sees a 10% surge after institutional investors enter the market.
      </li>
      <li>
        <strong>Market Update:</strong> Analysts predict a strong year for cryptocurrency investments.
      </li>
      <li>
        <strong>Headline:</strong> Ethereum 2.0 upgrade is expected to roll out next month.
      </li>
    </ul>
  </div>

  {/* Sentiments */}
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Sentiments</h2>
    <div className="text-gray-500">
      <p><strong>Positive:</strong> 65% of users express optimism about Bitcoin reaching $50,000 again.</p>
      <p><strong>Neutral:</strong> 25% of users are waiting for clearer market trends.</p>
      <p><strong>Negative:</strong> 10% of users believe the crypto winter is far from over.</p>
    </div>
  </div>

  {/* Team */}
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Team</h2>
    <ul className="space-y-2 text-gray-500">
      <li>
        <strong>CEO:</strong> Jane Doe - 10 years of experience in blockchain and cryptocurrency.
      </li>
      <li>
        <strong>CTO:</strong> John Smith - Expert in decentralized technologies and smart contracts.
      </li>
      <li>
        <strong>Marketing Lead:</strong> Sarah Brown - Managed multiple high-profile crypto campaigns.
      </li>
    </ul>
  </div>

  {/* Technicals */}
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Technicals</h2>
    <ul className="space-y-2 text-gray-500">
      <li>
        <strong>RSI:</strong> 70 (Overbought zone).
      </li>
      <li>
        <strong>Support Level:</strong> $45,000.
      </li>
      <li>
        <strong>Resistance Level:</strong> $50,000.
      </li>
    </ul>
  </div>

  {/* Tokenomics */}
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Tokenomics</h2>
    <ul className="space-y-2 text-gray-500">
      <li>
        <strong>Total Supply:</strong> 21,000,000 BTC.
      </li>
      <li>
        <strong>Circulating Supply:</strong> 19,200,000 BTC.
      </li>
      <li>
        <strong>Market Cap:</strong> $900 billion.
      </li>
      <li>
        <strong>Burn Rate:</strong> 0.01% per year.
      </li>
    </ul>
  </div>
</div>

      </main>
    </div>
  );
};

export default Dashboard;