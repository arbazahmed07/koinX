import React from 'react';

const TeamMember = ({ name, designation, description }) => (
  <div className="bg-blue-50 rounded-lg p-6">
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left Column - Image and Details */}
      <div className="flex flex-col items-center md:items-start min-w-[200px]">
        <img 
          src="./src/assets/john.jpeg" 
          alt={name}
          className="w-32 h-32 rounded-lg object-cover shadow-sm"
        />
        <h3 className="text-xl font-bold mt-4">{name}</h3>
        <p className="text-gray-500 text-sm">{designation}</p>
      </div>

      {/* Right Column - Description */}
      <div className="flex-1">
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const Teams = () => {
  const teamMembers = [
    {
      name: "John Smith",
      designation: "Chief Executive Officer",
      description: "John brings over 15 years of experience in blockchain technology and financial markets. Previously, he led technology initiatives at major financial institutions and co-founded two successful fintech startups. His expertise in cryptographic systems and distributed ledger technology has been instrumental in shaping our platform's architecture and vision."
    },
    {
      name: "Elina Williams",
      designation: "Chief Technology Officer",
      description: "Elina is a seasoned software architect with a strong background in cryptography and distributed systems. She previously worked at leading tech companies where she developed scalable blockchain solutions. Her innovative approach to technical challenges and leadership in implementing complex systems has been crucial to our platform's development."
    },
    {
      name: "Michael Chen",
      designation: "Head of Product Development",
      description: "Michael has extensive experience in product management and blockchain technology. With a background in both traditional finance and cryptocurrency markets, he excels at bridging the gap between technical capabilities and user needs. His focus on user experience and market dynamics drives our product strategy."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm max-w-6xl mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-6">Team</h2>
      
      <div className="space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Our team brings together experts from blockchain technology, finance, and software development. With decades of combined experience, we're committed to building innovative solutions that bridge the gap between traditional finance and the crypto ecosystem.
        </p>
        
        <div className="space-y-6 mt-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              designation={member.designation}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;