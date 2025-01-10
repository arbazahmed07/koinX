import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const TokenomicsSection = () => {
  const distributionData = [
    { name: 'Crowdsale investors', value: 80, color: '#0088FE' },
    { name: 'Foundation', value: 20, color: '#FFA500' }
  ];

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Tokenomics</h2>
      
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Initial Distribution</h3>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Chart */}
          <div className="w-full md:w-1/2 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  startAngle={90}
                  endAngle={450}
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="space-y-4">
            {distributionData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-700">
                  {item.name}: {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 text-gray-700">
          <p>
            The token distribution model is designed to ensure both fair allocation and sustainable project development. The majority allocation of 80% to crowdsale investors demonstrates our commitment to community ownership and decentralization, allowing for broad participation in the project's governance and growth.
          </p>
          
          <p>
            The Foundation's 20% allocation serves multiple critical purposes:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Ecosystem Development (8%): Funding for partnerships, integrations, and developer grants</li>
            <li>Team & Advisors (5%): Incentivizing long-term commitment with a 3-year vesting schedule</li>
            <li>Research & Development (4%): Continuous platform improvement and innovation</li>
            <li>Liquidity Reserve (3%): Maintaining market stability and emergency reserves</li>
          </ul>
          
          <p>
            This distribution structure is locked in smart contracts with a transparent vesting schedule. The Foundation's tokens are subject to a 3-year vesting period with a 6-month cliff, ensuring long-term alignment with project goals. Crowdsale participants' tokens are released in stages to prevent market volatility while maintaining trading flexibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;