import React from 'react';

const Opinion = ({ items }) => {
  if (!items || items.length === 0) return null;
  
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-700 flex items-center" style={{fontFamily: "'Playfair Display', serif"}}>
        <i className="fas fa-comment-dots text-purple-600 mr-2"></i>Opinion
      </h2>
      {items.map((op, i) => (
        <div key={i} className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 text-white mb-4 relative overflow-hidden">
          <div className="absolute -top-5 left-3 text-white opacity-10 text-9xl" style={{fontFamily: 'Georgia, serif'}}>"</div>
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <img src={op.avatar} alt={op.author} className="w-12 h-12 rounded-full border-2 border-white" />
            <div>
              <h4 className="font-bold text-base">{op.author}</h4>
              <p className="text-xs opacity-90">{op.designation}</p>
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2 relative z-10">{op.title}</h3>
          <p className="text-sm opacity-95 leading-relaxed relative z-10">{op.excerpt}</p>
          <a href="#" className="inline-block mt-3 text-sm font-semibold hover:underline relative z-10">Read Full Opinion →</a>
        </div>
      ))}
    </div>
  );
};

export default Opinion;