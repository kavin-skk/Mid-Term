import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CategoryBadge from "./CategoryBadge";
import TimeStamp from "./TimeStamp";

import newsImg1 from "../assets/climatechange.png";
import newsImg2 from "../assets/AI.png";
import newsImg3 from "../assets/economy.png";
import newsImg4 from "../assets/indianworldcup.png";

const headlines = [
  {
    title: "Markets Rally on Strong Economic Data",
    category: "Economy",
    time: "1 hour ago",
    img: newsImg1,
  },
  {
    title: "Tech Summit Announces AI Breakthrough",
    category: "Technology",
    time: "2 hours ago",
    img: newsImg2,
  },
  {
    title: "Government Unveils New Infrastructure Plan",
    category: "Politics",
    time: "3 hours ago",
    img: newsImg3,
  },
  {
    title: "Cricket: India Wins Series Finale",
    category: "Sports",
    time: "4 hours ago",
    img: newsImg4,
  },
];

export default function LatestHeadlines() {
  return (
    <Box sx={{ mb: 3 }}>
      {/* Header */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
          fontSize: "0.9rem",
          color: "#1a1a1a",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          fontFamily: "'Georgia', 'Garamond', serif",
          mb: 1.5,
          pb: 0.5,
          borderBottom: "2px solid #dc2626",
        }}
      >
        Latest Headlines
      </Typography>

      {/* Headlines List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {headlines.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 1.5,
              background: "#ffffff",
              border: "1px solid #e8e8e8",
              borderRadius: "0px",
              p: 1.2,
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "#dc2626",
                transform: "translateX(4px)",
                boxShadow: "0 4px 12px rgba(220, 38, 38, 0.15)",
              },
            }}
          >
            {/* Image */}
            <Box
              sx={{
                width: "80px",
                height: "80px",
                flexShrink: 0,
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.8 }}>
              {/* Category + Time */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CategoryBadge category={item.category} />
                <TimeStamp time={item.time} />
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "#1a1a1a",
                  lineHeight: 1.3,
                  fontFamily: "'Georgia', 'Garamond', serif",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
