import React from 'react';

const YouMissed = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md border-l-4 border-yellow-500">
      <div className="p-3 border-b border-yellow-200">
        <h2 className="text-base font-bold text-gray-900 flex items-center">
          <span className="text-yellow-600 mr-2">🕒</span>
          You Missed
        </h2>
      </div>
      
      {/* Horizontal Grid Layout with Reduced Height */}
      <div className="p-3">
        <div className="grid grid-cols-3 gap-3">
          {items.slice(0, 3).map((news, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative">
                <img 
                  src={`https://picsum.photos/600/200?random=${news.img || index}`}
                  alt={news.title}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <h4 className="font-bold text-xs text-white line-clamp-2 leading-tight">
                    {news.title}
                  </h4>
                </div>
              </div>
              <div className="p-2">
                <div className="flex items-center text-xs text-gray-500">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{news.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouMissed;