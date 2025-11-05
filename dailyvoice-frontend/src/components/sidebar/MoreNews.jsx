import React from 'react';
import Ad from '../common/Ad';

const MoreNews = ({ items }) => {
  // Default items if none provided
  const defaultItems = [
    {
      title: "AI Revolution: New Breakthrough in Machine Learning",
      image: "https://picsum.photos/200/150?random=1",
      category: "TECHNOLOGY",
      time: "1 hour ago"
    },
    {
      title: "Medical Research Unveils Promising Treatment Option",
      image: "https://picsum.photos/200/150?random=2",
      category: "HEALTH",
      time: "2 hours ago"
    },
    {
      title: "Championship Finals: Underdog Team Makes History",
      image: "https://picsum.photos/200/150?random=3",
      category: "SPORTS",
      time: "3 hours ago"
    },
    {
      title: "Education Policy Reform Announced",
      summary: "New curriculum framework for schools nationwide.",
      time: "9h"
    },
    {
      title: "Healthcare Scheme Extended",
      summary: "Free treatment coverage increased to ₹10 lakhs.",
      time: "10h"
    },
    {
      title: "Digital India Mission Progress",
      summary: "90% villages now connected with broadband.",
      time: "11h"
    },
    {
      title: "Market Analysis: Tech Sector Shows Strong Growth",
      image: "https://picsum.photos/200/150?random=7",
      category: "BUSINESS",
      time: "4 hours ago"
    },
    {
      title: "Space Exploration: New Discovery on Distant Planet",
      image: "https://picsum.photos/200/150?random=8",
      category: "SCIENCE",
      time: "6 hours ago"
    }
  ];

  const newsItems = items || defaultItems;

  return (
    <div className="space-y-6">
      {/* More News Section - First 3 items */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="border-b-2 border-blue-600 pb-2 mb-4">
          <h2 className="text-xl font-bold text-gray-900">MORE NEWS</h2>
        </div>
        <div className="space-y-4">
          {newsItems.slice(0, 3).map((item, index) => (
            <RegularNewsCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Bigger Ad Block */}
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-lg shadow-lg p-8 border-2 border-dashed border-purple-300">
        <div className="text-center">
          <p className="text-gray-700 font-bold text-lg mb-2">Advertisement</p>
          <p className="text-gray-500 text-sm">Premium Ad Space - 300x250</p>
          <div className="mt-4 text-4xl">📢</div>
        </div>
      </div>

      {/* Compact UI for items 4, 5, 6 - Same as Quick Reads */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="divide-y divide-gray-100">
          {newsItems.slice(3, 6).map((item, index) => (
            <CompactNewsCard key={index + 3} item={item} />
          ))}
        </div>
      </div>

      {/* Another Bigger Ad Block */}
      <div className="bg-gradient-to-br from-green-100 via-teal-100 to-blue-100 rounded-lg shadow-lg p-8 border-2 border-dashed border-green-300">
        <div className="text-center">
          <p className="text-gray-700 font-bold text-lg mb-2">Advertisement</p>
          <p className="text-gray-500 text-sm">Your Brand Here - 300x250</p>
          <div className="mt-4 text-4xl">🎯</div>
        </div>
      </div>

      {/* Remaining News Items - Last 2 items */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {newsItems.slice(6).map((item, index) => (
            <RegularNewsCard key={index + 6} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Regular News Card with Image (for items 1-3 and 7-8)
const RegularNewsCard = ({ item }) => (
  <div className="flex gap-3 pb-4 border-b border-gray-200 last:border-0 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
    <img 
      src={item.image} 
      alt={item.title}
      className="w-24 h-20 object-cover rounded flex-shrink-0"
    />
    <div className="flex-1">
      <span className="text-xs text-blue-600 font-semibold">{item.category}</span>
      <h3 className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
        {item.title}
      </h3>
      {item.summary && (
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
          {item.summary}
        </p>
      )}
      <span className="text-xs text-gray-500 mt-1 block">{item.time}</span>
    </div>
  </div>
);

// Compact News Card (for items 4, 5, 6) - Same style as Quick Reads
const CompactNewsCard = ({ item }) => (
  <div className="px-3 py-2 hover:bg-gray-50 transition-colors cursor-pointer">
    <div className="flex items-start justify-between gap-2 mb-1">
      <h3 className="font-semibold text-gray-900 text-xs leading-tight flex-1 line-clamp-2">
        {item.title}
      </h3>
      <span className="text-xs text-gray-500 whitespace-nowrap">{item.time}</span>
    </div>
    {item.summary && (
      <p className="text-xs text-gray-600 leading-snug line-clamp-2">
        {item.summary}
      </p>
    )}
  </div>
);

export default MoreNews;