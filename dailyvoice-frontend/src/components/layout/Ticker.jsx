import React from 'react';

const Ticker = ({ text }) => (
  <div className="bg-black text-white py-2 overflow-hidden">
    <div className="flex items-center">
      <span className="bg-red-600 px-3 py-1 font-bold text-xs mr-2">LIVE</span>
      <div className="flex-1 overflow-hidden">
        <div className="whitespace-nowrap animate-ticker">
          {text}
        </div>
      </div>
    </div>
  </div>
);

export default Ticker;