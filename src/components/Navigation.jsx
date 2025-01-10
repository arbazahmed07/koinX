import React from 'react';
import { Menu } from 'lucide-react';

const Navigation = () => (
  <header className="bg-white border-b">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-600">KoinX</div>
          <nav className="hidden md:ml-8 md:flex md:space-x-6">
            <a href="#" className="text-gray-900 hover:text-blue-600">Crypto Taxes</a>
            <a href="#" className="text-gray-900 hover:text-blue-600">Free Tools</a>
            <a href="#" className="text-gray-900 hover:text-blue-600">Resource Center</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Navigation;