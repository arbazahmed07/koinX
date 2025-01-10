import React from 'react';

const Footer = () => (
  <footer className="bg-white border-t mt-12">
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold text-blue-600 mb-4">KoinX</div>
          <p className="text-gray-600">Your trusted crypto tracking and tax reporting platform.</p>
        </div>
        <div>
          <h3 className="font-medium mb-4">Resources</h3>
          <div className="space-y-2">
            <a href="#" className="block text-gray-600 hover:text-blue-600">Help Center</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Blog</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Newsletter</a>
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-4">Company</h3>
          <div className="space-y-2">
            <a href="#" className="block text-gray-600 hover:text-blue-600">About Us</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Careers</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-4">Legal</h3>
          <div className="space-y-2">
            <a href="#" className="block text-gray-600 hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Terms of Service</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;