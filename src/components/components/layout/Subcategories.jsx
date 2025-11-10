import React from 'react';

const Subcategories = ({ items }) => (
  <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-3 border-y border-gray-200">
    <div className="max-w-7xl mx-auto px-4 overflow-x-auto whitespace-nowrap">
      {items.map((sub, i) => (
        <a 
          key={i} 
          href="#" 
          className="inline-block px-4 py-1.5 text-sm font-semibold bg-white rounded-full mr-2 hover:bg-red-600 hover:text-white transition shadow-sm"
        >
          {sub}
        </a>
      ))}
    </div>
  </div>
);

export default Subcategories;