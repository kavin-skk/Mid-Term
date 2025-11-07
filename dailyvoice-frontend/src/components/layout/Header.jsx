import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      <div className="bg-red-700 text-white text-xs py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
          <span>Friday, Oct 31, 2025 | Delhi 28°C</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">ePaper</a>
            <a href="#" className="hover:underline">Hindi</a>
            <a href="#" className="hover:underline">Login</a>
          </div>
        </div>
      </div>
      
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
            <a href="/" style={{fontFamily: "'Playfair Display', serif"}} className="text-4xl font-bold text-red-700">DailyVoice</a>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-bold">
            <a href="/" className="hover:text-red-700">Home</a>
            <a href="?cat=politics" className="hover:text-red-700">Politics</a>
            <a href="?cat=sports" className="hover:text-red-700">Sports</a>
            <a href="?cat=entertainment" className="hover:text-red-700">Entertainment</a>
            <a href="?cat=tech" className="hover:text-red-700">Finance</a>
            <a href="?category=defence">Defence</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 bg-blue-600 text-white rounded font-bold text-sm hover:bg-blue-700 transition">SUBSCRIBE</button>
            <button className="px-5 py-2 bg-red-600 text-white rounded font-bold text-sm hover:bg-red-700 transition">REGISTER</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;