import React from 'react';

const BreakingNews = ({ items }) => (
  <div>
    <div className="flex items-center mb-4">
      <span className="bg-red-600 text-white px-3 py-1.5 font-bold text-sm mr-3 rounded">
        <i className="fas fa-bolt mr-1"></i>BREAKING
      </span>
      <h2 className="text-xl font-bold text-gray-900" style={{fontFamily: "'Playfair Display', serif"}}>Latest Updates</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.id} className="relative rounded-lg overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 shadow-md hover:shadow-lg">
          <img 
            src={`https://source.unsplash.com/random/400x250/?${item.img},news`} 
            className="w-full h-40 object-cover" 
            alt={item.title}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-8">
            <h3 className="font-semibold text-sm text-white leading-tight line-clamp-2">
              <a href={`/article?id=${item.id}`} className="hover:text-red-300 transition">{item.title}</a>
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BreakingNews;