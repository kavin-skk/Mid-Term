import React from 'react';

const EditorsPick = ({ items ,onArticleClick }) => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-700 flex items-center" style={{fontFamily: "'Playfair Display', serif"}}>
      <i className="fas fa-star text-yellow-500 mr-2"></i>Editor's Pick
    </h2>
    {items.map((item, i) => (
      <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden mb-5 hover:shadow-lg transition hover:-translate-y-1 cursor-pointer"
      onClick={() => onArticleClick && onArticleClick(item.id)} >
        <img 
          src={`https://source.unsplash.com/random/600x300/?${item.img}`} 
          className="w-full h-48 object-cover" 
          alt={item.title}
        />
        <div className="p-5">
          <span className="text-red-600 font-bold text-xs uppercase flex items-center gap-1">
            <i className="fas fa-award"></i> Editor's Choice
          </span>
          <h3 className="font-bold text-lg mb-2 mt-1 leading-tight hover:text-red-700 transition cursor-pointer">
            <a href="#">{item.title}</a>
          </h3>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.summary}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span><i className="fas fa-user"></i> {item.author}</span>
            <span><i className="fas fa-clock"></i> {item.time} ago</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default EditorsPick;