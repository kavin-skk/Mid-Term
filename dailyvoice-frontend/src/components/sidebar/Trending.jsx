import React from 'react';

const Trending = ({ items }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
    <h3 className="font-bold text-base text-gray-900 mb-4 pb-2 border-b flex items-center">
      <i className="fas fa-fire text-orange-500 mr-2"></i>Trending Updates
    </h3>
    {items.map((item, i) => (
      <div key={i} className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition mb-3 bg-white border border-gray-100">
        <img 
          src={`https://source.unsplash.com/random/200x200/?${item.img},news`} 
          className="w-20 h-20 object-cover rounded flex-shrink-0" 
          alt={item.title}
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm line-clamp-2 leading-snug mb-1 hover:text-red-600 transition cursor-pointer">
            <a href="#">{item.title}</a>
          </h4>
          <p className="text-xs text-gray-500 line-clamp-1">{item.summary}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Trending;