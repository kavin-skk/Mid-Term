import React from 'react';

const Videos = ({ items }) => {
  if (!items || items.length === 0) return null;
  
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-700 flex items-center" style={{fontFamily: "'Playfair Display', serif"}}>
        <i className="fas fa-play-circle text-blue-600 mr-2"></i>Must Watch
      </h2>
      {items.map((video, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden mb-4 hover:shadow-lg transition">
          <div className="relative h-44">
            <img 
              src={`https://source.unsplash.com/random/600x400/?${video.img},video`} 
              className="w-full h-full object-cover" 
              alt={video.title}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 bg-opacity-90 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer hover:bg-red-600 hover:scale-110 transition">
                <i className="fas fa-play ml-1"></i>
              </div>
            </div>
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
              {video.duration}
            </span>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-sm mb-1 line-clamp-2">{video.title}</h4>
            <p className="text-xs text-gray-500"><i className="fas fa-eye"></i> {video.views} views</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;