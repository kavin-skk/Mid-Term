import React from 'react';

const LatestTimeline = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 px-5 py-3 flex items-center gap-2">
        <span className="text-white text-lg">⚡</span>
        <h2 className="text-base font-bold text-white">LATEST UPDATES</h2>
      </div>

      {/* Timeline Items */}
      <div className="divide-y divide-gray-200">
        {latestUpdates.map((item, index) => (
          <div key={index} className="p-4 hover:bg-gray-50 transition cursor-pointer">
            <div className="flex items-start gap-3">
              {/* Time */}
              <div className="flex-shrink-0 text-center min-w-[60px]">
                <div className="bg-red-100 rounded-md px-2 py-1">
                  <div className="text-sm font-bold text-red-700">{item.time}</div>
                  <div className="text-[10px] text-red-600">{item.period}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                {item.label && (
                  <span className="inline-block bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded mb-1.5">
                    {item.label}
                  </span>
                )}
                <p className="text-sm text-gray-800 leading-snug mb-1">
                  {item.text}
                </p>
                {item.category && (
                  <span className="text-xs text-gray-500">#{item.category}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const latestUpdates = [
  { time: "2 min ago", text: "Breaking: Major policy announcement expected this evening" },
  { time: "15 min ago", text: "Stock markets reach all-time high amid positive economic data" },
  { time: "32 min ago", text: "International summit concludes with landmark agreement" },
  // Add more items
];

export default LatestTimeline;