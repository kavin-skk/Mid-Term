import React from 'react';

const NewsListSection = ({ onArticleClick }) => {  // ✅ Move onArticleClick HERE
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 px-6 py-3">
        <h2 className="text-lg font-bold text-white">TOP STORIES</h2>
      </div>

      {/* News List */}
      <div className="divide-y divide-gray-200">
        {newsItems.map((item, index) => (  // ✅ Remove onArticleClick from here
          <article 
            key={index} 
            className="p-6 hover:bg-gray-50 transition cursor-pointer"  // ✅ Remove duplicate cursor-pointer
            onClick={() => onArticleClick && onArticleClick(item.id || index)}  // ✅ Use item.id or index as fallback
          >
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {item.description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>{item.time}</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="font-semibold text-blue-600">{item.category}</span>
            </div>
          </article>
        ))}
      </div>

      {/* View More Button */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <button className="text-sm text-blue-600 font-semibold hover:text-blue-700 transition flex items-center gap-2">
          <span>View More Stories</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

const newsItems = [
  {
    id: 1,  // ✅ Add id to each item
    title: "Why a popular Hindu temple in India is mired in gold theft row",
    description: "The Kerala high court says some of the Sabarimala temple idols have been stripped of their gold covering.",
    time: "4 hrs ago",
    category: "Asia"
  },
  {
    id: 2,  // ✅ Add id
    title: "AI 'godmother' Fei-Fei Li says she is 'proud to be different'",
    description: "AI pioneer Professor Fei-Fei Li is set to receive a top engineering prize from the King for her contributions to the field.",
    time: "5 hrs ago",
    category: "Technology"
  },
  {
    id: 3,  // ✅ Add id
    title: "Global markets rally as economic indicators show strong growth",
    description: "Stock markets across major economies reached new highs today as investors responded positively to quarterly earnings reports and economic data.",
    time: "6 hrs ago",
    category: "Business"
  },
  {
    id: 4,  // ✅ Add id
    title: "Scientists discover potential breakthrough in renewable energy storage",
    description: "Researchers have developed a new battery technology that could revolutionize how we store and use renewable energy sources.",
    time: "7 hrs ago",
    category: "Science"
  },
  {
    id: 5,  // ✅ Add id
    title: "International climate summit reaches historic agreement",
    description: "World leaders have signed a comprehensive climate accord aimed at reducing global emissions by 50% within the next decade.",
    time: "8 hrs ago",
    category: "Environment"
  },
  {
    id: 6,  // ✅ Add id
    title: "Major streaming platform announces slate of original content",
    description: "The entertainment giant unveiled plans for dozens of new shows and films, featuring A-list talent and diverse storytelling.",
    time: "9 hrs ago",
    category: "Entertainment"
  },
  {
    id: 7,  // ✅ Add id
    title: "Championship finals see record-breaking attendance numbers",
    description: "The tournament concluded with sold-out crowds and millions of viewers tuning in worldwide to witness the thrilling finale.",
    time: "10 hrs ago",
    category: "Sports"
  },
  {
    id: 8,  // ✅ Add id
    title: "New medical study reveals promising results for treatment",
    description: "Clinical trials show significant improvement in patient outcomes using innovative therapeutic approach for chronic conditions.",
    time: "11 hrs ago",
    category: "Health"
  }
];

export default NewsListSection;