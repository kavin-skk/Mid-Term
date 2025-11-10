import React from 'react';

const Newsletter = () => (
  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-lg shadow-lg text-white">
    <h3 className="font-bold text-base mb-2 flex items-center">
      <i className="fas fa-envelope mr-2"></i>Daily Newsletter
    </h3>
    <p className="text-sm mb-3 opacity-90">Get top stories in your inbox every morning</p>
    <input 
      type="email" 
      placeholder="Your email" 
      className="w-full px-3 py-2 rounded text-gray-900 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
    <button className="w-full bg-white text-blue-700 py-2 rounded font-bold text-sm hover:bg-gray-100 transition">
      Subscribe Now
    </button>
  </div>
);

export default Newsletter;