import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CryptoSection = () => {
  const sections = [
    {
      title: "You May Also Like",
      coins: [
        {
          name: "BNB",
          price: "$319.34",
          change: "+0.52%",
          positive: true,
          graph: [5, 10, 8, 15, 12, 20, 18, 22, 19, 25, 23],
        },
        {
          name: "SOL",
          price: "$109.33",
          change: "-2.89%",
          positive: false,
          graph: [20, 15, 10, 12, 9, 8, 7, 5, 4, 3, 2],
        },
        {
          name: "XRP",
          price: "$0.634810",
          change: "+0.78%",
          positive: true,
          graph: [2, 4, 6, 8, 10, 12, 14, 16, 14, 18, 20],
        },
        {
          name: "ADA",
          price: "$0.614869",
          change: "-1.57%",
          positive: false,
          graph: [12, 10, 8, 6, 8, 7, 5, 4, 6, 3, 2],
        },
        {
          name: "AVAX",
          price: "$41.05",
          change: "-3.78%",
          positive: false,
          graph: [5, 3, 7, 4, 8, 6, 10, 8, 9, 7, 6],
        },
      ],
    },
    {
      title: "Trending Coins",
      coins: [
        {
          name: "BTC",
          price: "$45,332.83",
          change: "+0.10%",
          positive: true,
          graph: [30, 40, 35, 45, 50, 48, 55, 53, 58, 60, 57],
        },
        {
          name: "ETH",
          price: "$2,375.15",
          change: "-0.21%",
          positive: false,
          graph: [25, 20, 15, 18, 22, 19, 24, 23, 22, 21, 20],
        },
        {
          name: "stETH",
          price: "$2,371.72",
          change: "-0.34%",
          positive: false,
          graph: [15, 20, 25, 22, 30, 28, 35, 32, 34, 30, 29],
        },
        {
          name: "UNI",
          price: "$7.3192",
          change: "-4.02%",
          positive: false,
          graph: [7, 6, 8, 7, 9, 6, 8, 5, 7, 6, 5],
        },
        {
          name: "CFG",
          price: "$0.773600",
          change: "-1.76%",
          positive: false,
          graph: [0.7, 0.75, 0.8, 0.85, 0.78, 0.77, 0.76, 0.78, 0.8, 0.79, 0.78],
        },
      ],
    },
  ];

  return (
    <div className="p-4">
      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-bold mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {section.coins.map((coin, idx) => (
              <div
                key={idx}
                className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{coin.name}</h3>
                  <span
                    className={`text-sm font-medium ${
                      coin.positive ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {coin.change}
                  </span>
                </div>
                <p className="text-2xl font-bold mt-2">{coin.price}</p>
                <Sparklines data={coin.graph} className="mt-2">
                  <SparklinesLine
                    color={coin.positive ? "green" : "red"}
                    style={{ strokeWidth: 3, fill: "none", curve: "smooth" }}
                  />
                </Sparklines>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoSection;
