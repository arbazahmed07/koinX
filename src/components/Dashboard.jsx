import React from "react";
import { Info, ChevronRight, Newspaper, TrendingUp } from "lucide-react";

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
        icon: <Newspaper className="w-6 h-6 text-white" />,
        bgColor: "bg-blue-500",
        title:
          "Bitcoin adoption surges as institutional investors enter the market.",
        description:
          "The adoption of Bitcoin has increased significantly with large institutions showing interest, indicating a maturing crypto market.",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-white" />,
        bgColor: "bg-green-500",
        title:
          "Ethereum upgrades drive blockchain efficiency and scalability.",
        description:
          "Recent Ethereum network updates have enhanced transaction speeds and reduced costs, improving user and developer experience.",
      },
    ],
    analystEstimates: {
      buy: 76,
      hold: 8,
      sell: 16,
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center py-4">
            <div className="flex space-x-8">
              <span className="text-blue-600 border-b-2 border-blue-600 font-medium">
                Overview
              </span>
              <span className="text-gray-500 hover:text-blue-600">
                Fundamentals
              </span>
              <span className="text-gray-500 hover:text-blue-600">
                News Insights
              </span>
              <span className="text-gray-500 hover:text-blue-600">
                Sentiments
              </span>
            </div>
            {/* Hamburger Menu for Smaller Screens */}
            <button className="block md:hidden p-2 bg-gray-100 rounded-full">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Performance Card */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
            Performance
          </h2>

          {/* Today's Range */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Today's Low</span>
              <span className="text-gray-500">Today's High</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm md:text-base">
                {data.performance.todayLow}
              </span>
              <div className="flex-grow mx-4 h-2 relative">
                <div
                  className="absolute w-full h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF4444 0%, #FFFF00 50%, #44FF44 100%)",
                  }}
                />
                <div
                  className="absolute w-0 h-0"
                  style={{
                    left: `${
                      ((data.performance.current - data.performance.todayLow) /
                        (data.performance.todayHigh -
                          data.performance.todayLow)) *
                      100
                    }%`,
                    transform: "translateX(-50%)",
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderBottom: "8px solid black",
                    top: "-10px",
                  }}
                />
              </div>
              <span className="font-medium text-sm md:text-base">
                {data.performance.todayHigh}
              </span>
            </div>
            <div className="text-center font-medium text-base mt-2">
              ${data.performance.current}
            </div>
          </div>
                    {/* 52-Week Range */}
                    <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">52W Low</span>
              <span className="text-gray-500">52W High</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm md:text-base">
                {data.performance.low52W}
              </span>
              <div className="flex-grow mx-4 h-2 relative">
                <div
                  className="absolute w-full h-full rounded-full bg-gray-200"
                />
                <div
                  className="absolute bg-green-500 h-full rounded-full"
                  style={{
                    width: `${
                      ((data.performance.current - data.performance.low52W) /
                        (data.performance.high52W - data.performance.low52W)) *
                      100
                    }%`,
                  }}
                />
              </div>
              <span className="font-medium text-sm md:text-base">
                {data.performance.high52W}
              </span>
            </div>
          </div>
        </div>

        {/* Fundamentals Section */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
            Fundamentals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Bitcoin Price</p>
              <p className="font-medium text-base">${data.fundamentals.bitcoinPrice}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">24H Low</p>
              <p className="font-medium text-base">${data.fundamentals.low24h}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">24H High</p>
              <p className="font-medium text-base">${data.fundamentals.high24h}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">7D Low</p>
              <p className="font-medium text-base">${data.fundamentals.low7d}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">7D High</p>
              <p className="font-medium text-base">${data.fundamentals.high7d}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Trading Volume</p>
              <p className="font-medium text-base">
                ${data.fundamentals.tradingVolume.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Market Cap Rank</p>
              <p className="font-medium text-base">#{data.fundamentals.marketCapRank}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Market Cap</p>
              <p className="font-medium text-base">
                ${data.fundamentals.marketCap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Key Events Section */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
            Key Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sentimentData.keyEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${event.bgColor}`}
                >
                  {event.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sentiment Section */}
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

      </main>
    </div>
  );
};

export default Dashboard;

