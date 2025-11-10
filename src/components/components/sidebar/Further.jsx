import React from 'react';

const Further = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold text-red-600 mb-4 pb-2 border-b-2 border-red-600">
        Further
      </h2>
      <div className="space-y-4">
        {items.slice(0, 3).map((news, index) => (
          <div 
            key={index} 
            className="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50 transition cursor-pointer rounded p-2"
          >
            <h3 className="font-bold text-sm text-gray-900 mb-2 line-clamp-2">
              {news.title}
            </h3>
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              {news.summary}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-500 text-xs">
                <i className="far fa-clock mr-1"></i>
                <span>{news.time}</span>
              </div>
              <i className="fas fa-arrow-right text-red-600 text-sm"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Further;