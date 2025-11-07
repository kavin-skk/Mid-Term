import React from 'react';

const BelowBreakingNews = ({ items }) => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300 flex items-center" style={{fontFamily: "'Playfair Display', serif"}}>
      <i className="fas fa-newspaper text-red-600 mr-2"></i>Top Stories
    </h2>
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100">
          <img 
            src={`https://source.unsplash.com/random/300x200/?${item.img},sports`} 
            className="w-36 h-24 object-cover flex-shrink-0" 
            alt={item.title}
          />
          <div className="flex-1 py-3 pr-3 flex flex-col justify-center">
            <h4 className="font-semibold text-sm line-clamp-2 mb-1 leading-snug hover:text-red-600 transition">
              <a href={`/article?id=${item.id}`}>{item.title}</a>
            </h4>
            <div className="flex items-center text-xs text-gray-500">
              <span><i className="fas fa-clock"></i> {item.time} ago</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BelowBreakingNews;