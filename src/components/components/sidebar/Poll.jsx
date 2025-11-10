import React from 'react';

const Poll = ({ poll }) => {
  if (!poll) return null;
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-bold text-base mb-4 text-gray-900 flex items-center">
        <i className="fas fa-poll text-red-600 mr-2"></i>{poll.q}
      </h3>
      <div className="space-y-2 mb-4">
        {poll.o.map((option, i) => {
          const percentage = option.match(/\d+/)[0];
          const label = option.split('(')[0].trim();
          return (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">{label}</span>
                <span className="font-bold text-gray-900">{percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-500" 
                  style={{width: `${percentage}%`}}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="w-full mt-2 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg text-sm font-bold transition shadow-md hover:shadow-lg">
        <i className="fas fa-vote-yea mr-1"></i> Vote Now
      </button>
    </div>
  );
};

export default Poll;