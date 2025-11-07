import React from 'react';

const LeadArticle = ({ lead, catName }) => (
  <article className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative">
      <img 
        src={`https://source.unsplash.com/random/800x450/?${lead.img}`} 
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
      <h1 className="text-3xl font-bold mt-2 mb-3 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
        <a href={`/article?id=${lead.id}`} className="hover:text-red-700 transition">{lead.title}</a>
      </h1>
      <p className="text-gray-700 mb-4 leading-relaxed">{lead.summary}</p>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1"><i className="fas fa-user-circle text-blue-600"></i> {lead.author}</span>
        <span className="flex items-center gap-1"><i className="fas fa-clock text-green-600"></i> {lead.time} ago</span>
      </div>
    </div>
  </article>
);

export default LeadArticle;