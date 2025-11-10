import React from 'react';

const LeadArticle = ({ lead, catName, onArticleClick }) => (  // 1. Add onArticleClick prop
  <article className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative">
      <img 
        src={lead.img}
        className="w-full h-80 object-cover" 
        alt={lead.title}
      />
      {/* BREAKING badge on top of image */}
      <div className="absolute top-4 left-4">
        <span className="bg-red-600 text-white px-3 py-1.5 font-bold text-sm rounded shadow-lg">
          <i className="fas fa-bolt mr-1"></i>BREAKING
        </span>
      </div>
    </div>
    <div className="p-6">
      {/* Category tag back in original position */}
      <div className="mb-2">
        <span className="text-red-600 font-bold text-sm uppercase tracking-wide">{catName}</span>
      </div>
      <h1 
        className="text-3xl font-bold mt-2 mb-3 leading-tight cursor-pointer hover:text-red-700 transition"  // 2. Add cursor-pointer
        style={{fontFamily: "'Playfair Display', serif"}}
        onClick={() => onArticleClick && onArticleClick(lead.id)}  // 3. Add onClick
      >
        {lead.title}  {/* Remove the <a> tag, just keep the title */}
      </h1>
      <p className="text-gray-700 mb-4 leading-relaxed">{lead.summary}</p>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1"><i className="fas fa-user-circle text-blue-600"></i> {lead.author}</span>
        <span className="flex items-center gap-1"><i className="fas fa-clock text-green-600"></i> {lead.time}</span>
      </div>
    </div>
  </article>
);

export default LeadArticle;