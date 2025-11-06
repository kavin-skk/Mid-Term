import React from "react";

const headlines = [
  "📰 Opposition Walkout - Political developments",
  "🗳️ TN CM Speech - Assembly updates",
  "🇮🇳 Bihar Election Updates - Voting concludes",
  "📈 Market opens flat - Economic indicators",
  "🏏 Sports: India wins series - Cricket triumph",
  "🌍 Global Climate Summit - International news",
  "🤖 Tech Giants Face AI Regulations - Innovation debate",
  "💰 Economic Outlook Brightens - Markets rise",
];

export default function LiveTicker() {
  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .ticker-container {
          position: fixed;
          top: 120px;
          left: 0;
          width: 100%;
          height: 40px;
          background: linear-gradient(90deg, #dc2626 0%, #991b1b 100%);
          display: flex;
          align-items: center;
          padding: 0;
          margin: 0;
          overflow: hidden;
          border-bottom: 3px solid #ffffff;
          z-index: 1100;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .ticker-label {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 20px;
          background: rgba(255, 255, 255, 0.15);
          flex-shrink: 0;
          height: 100%;
          border-right: 2px solid rgba(255, 255, 255, 0.3);
          min-width: fit-content;
        }

        .ticker-dot {
          width: 10px;
          height: 10px;
          background: #ffffff;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        .ticker-label-text {
          color: #ffffff;
          font-weight: 900;
          font-size: 0.8rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: 'Georgia', 'Garamond', serif;
          white-space: nowrap;
        }

        .ticker-content {
          flex: 1;
          overflow: hidden;
          display: flex;
          height: 100%;
          align-items: center;
        }

        .ticker-text {
          display: flex;
          white-space: nowrap;
          animation: ticker-scroll 100s linear infinite;
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          padding: 0 20px;
          font-family: 'Georgia', 'Garamond', serif;
          align-items: center;
          gap: 3rem;
        }

        .ticker-item {
          display: inline-block;
          min-width: max-content;
          padding: 0 2rem;
          border-right: 2px solid rgba(255, 255, 255, 0.3);
        }

        .ticker-item:last-child {
          border-right: none;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .ticker-container {
            top: 110px;
            height: 45px;
          }

          .ticker-label {
            padding: 0 12px;
          }

          .ticker-label-text {
            font-size: 0.7rem;
            letter-spacing: 1.5px;
          }

          .ticker-text {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="ticker-container">
        {/* LIVE Badge */}
        <div className="ticker-label">
          <div className="ticker-dot"></div>
          <div className="ticker-label-text">Live</div>
        </div>

        {/* Scrolling Text */}
        <div className="ticker-content">
          <div className="ticker-text">
            {headlines.map((headline, idx) => (
              <span key={idx} className="ticker-item">
                {headline}
              </span>
            ))}
            {/* Repeat for seamless loop */}
            {headlines.map((headline, idx) => (
              <span key={`repeat-${idx}`} className="ticker-item">
                {headline}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
