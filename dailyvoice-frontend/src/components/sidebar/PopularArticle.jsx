import React from 'react';

const PopularArticle = ({ item, catKey, catName }) => (
  <div>
    <h2 className="text-2xl font-bold text-red-700 border-b-2 border-red-700 pb-2 mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
      Popular in {catName}
    </h2>
    <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition">
      <div className="relative">
        <img 
          src={`https://source.unsplash.com/random/400x250/?${catKey},india`} 
          className="w-full h-52 object-cover" 
          alt="Popular"
        />
        <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
          <i className="fas fa-fire"></i> POPULAR
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 leading-tight">
          <a href="/article?id=1" className="hover:text-red-700 transition">{item.title}</a>
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3 leading-relaxed">{item.summary}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span><i className="fas fa-clock"></i> {item.time} ago</span>
          <span><i className="fas fa-bookmark"></i> Save</span>
        </div>
      </div>
    </article>
  </div>
);

export default PopularArticle;