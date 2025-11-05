import React from 'react';

const ArticlesGrid = ({ articles, catKey }) => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300" style={{fontFamily: "'Playfair Display', serif"}}>
      More Stories
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <article key={article.id} className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition">
          <img 
            src={`https://source.unsplash.com/random/400x250/?${article.img || catKey}`} 
            className="w-full h-44 object-cover rounded mb-3" 
            alt={article.title}
          />
          <h3 className="font-bold text-base mb-2 line-clamp-2">
            <a href={`/article?id=${article.id}`} className="hover:text-red-700 transition">{article.title}</a>
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.summary}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span><i className="fas fa-clock"></i> {article.time} ago</span>
            <span><i className="fas fa-share-alt"></i> Share</span>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default ArticlesGrid;