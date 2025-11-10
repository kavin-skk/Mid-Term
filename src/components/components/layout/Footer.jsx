import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 mt-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 style={{fontFamily: "'Playfair Display', serif"}} className="text-2xl font-bold text-red-600 mb-3">DailyVoice</h3>
          <p className="text-sm text-gray-400">Your trusted source for news that matters.</p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-facebook text-xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter text-xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-youtube text-xl"></i></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Advertise</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Categories</h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Politics</a></li>
            <li><a href="#" className="hover:text-white transition">Sports</a></li>
            <li><a href="#" className="hover:text-white transition">Entertainment</a></li>
            <li><a href="#" className="hover:text-white transition">Technology</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Legal</h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-400">
        © 2025 DailyVoice. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;