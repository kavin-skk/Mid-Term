import React from 'react';

const Ad = ({ size, colors, text = "ADVERTISEMENT" }) => (
  <div className={`${colors} border-2 border-dashed border-gray-300 rounded-xl ${size} flex items-center justify-center text-gray-600 font-bold`}>
    [{text}] {size}
  </div>
);

export default Ad;