import React from 'react';

const MoreStories = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 px-5 py-3 flex items-center gap-2">
        <span className="text-white text-lg">📰</span>
        <h2 className="text-base font-bold text-white">MORE STORIES</h2>
      </div>

      {/* Stories List */}
      <div className="p-4 space-y-4">
        {stories.map((story, index) => (
          <article 
            key={index} 
            className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {story.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-sm text-gray-900 mb-2 leading-snug group-hover:text-red-600 transition line-clamp-2">
                {story.title}
              </h3>
              <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                {story.description}
              </p>
              
              {/* Footer */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 flex items-center gap-1">
                  <span>🕒</span> {story.time}
                </span>
                <span className="text-blue-600 font-semibold hover:underline">
                  Read more →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="px-4 pb-4">
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
          <span>Load More Stories</span>
          <span>↓</span>
        </button>
      </div>
    </div>
  );
};

const stories = [
  {
    title: "Government Unveils Major Infrastructure Development Plan",
    description: "New initiative promises to create thousands of jobs and modernize transportation networks across the country.",
    image: "https://picsum.photos/400/300?random=10",
    category: "POLITICS",
    time: "3 hrs ago"
  },
  {
    title: "Revolutionary Medical Device Gets Regulatory Approval",
    description: "Healthcare breakthrough expected to improve treatment outcomes for millions of patients worldwide.",
    image: "https://picsum.photos/400/300?random=11",
    category: "HEALTH",
    time: "4 hrs ago"
  },
  {
    title: "Tech Startup Raises Record-Breaking Funding Round",
    description: "Innovative company secures massive investment to expand operations and accelerate product development.",
    image: "https://picsum.photos/400/300?random=12",
    category: "BUSINESS",
    time: "5 hrs ago"
  },
  {
    title: "International Film Festival Announces Award Winners",
    description: "Prestigious ceremony celebrates outstanding achievements in cinema from around the globe.",
    image: "https://picsum.photos/400/300?random=13",
    category: "CULTURE",
    time: "6 hrs ago"
  },
  {
    title: "Scientists Make Breakthrough in Quantum Computing",
    description: "Research team achieves milestone that could revolutionize computing power and capabilities.",
    image: "https://picsum.photos/400/300?random=14",
    category: "SCIENCE",
    time: "7 hrs ago"
  },
  {
    title: "Major Sports League Announces Expansion Teams",
    description: "New franchises set to join competition next season, bringing professional sports to new markets.",
    image: "https://picsum.photos/400/300?random=15",
    category: "SPORTS",
    time: "8 hrs ago"
  }
];

export default MoreStories;