import React from 'react';

const CompactNews = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="px-3 py-2 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900">Quick Reads</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {items.slice(0, 4).map((news, index) => (
          <div key={index} className="px-3 py-2 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-gray-900 text-xs leading-tight flex-1 line-clamp-2">
                {news.title}
              </h3>
              <span className="text-xs text-gray-500 whitespace-nowrap">{news.time}</span>
            </div>
            {news.summary && (
              <p className="text-xs text-gray-600 leading-snug line-clamp-2">
                {news.summary}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompactNews;