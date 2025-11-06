import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import newsImg1 from "../assets/economy.png";
import newsImg2 from "../assets/AI.png";
import newsImg3 from "../assets/climatechange.png";
import newsImg4 from "../assets/indianworldcup.png";
import newsImg5 from "../assets/supremecourt.png";

const trendingData = [
  {
    title: "Global Markets See Mixed Reaction to Rate Cut",
    count: "1245",
    img: newsImg1,
  },
  {
    title: "PM Announces New Green Energy Initiative",
    count: "892",
    img: newsImg2,
  },
  {
    title: "Tech Giants Face Fresh Data Privacy Scrutiny",
    count: "756",
    img: newsImg3,
  },
  {
    title: "Cricket World Cup: India Secures Dominant Win",
    count: "623",
    img: newsImg4,
  },
  {
    title: "Oil Prices Surge Amid Middle East Tensions",
    count: "541",
    img: newsImg5,
  },
];

export default function TrendingSection() {
  return (
    <Box sx={{ mb: 3 }}>
      {/* Header with Fire */}
      <Box sx={{ position: "relative", mb: 1.5 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            fontSize: "0.9rem",
            color: "#1a1a1a",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            fontFamily: "'Georgia', 'Garamond', serif",
          }}
        >
          Trending
        </Typography>

        {/* Fire icon */}
        <Box
          className="fire-animation"
          sx={{
            position: "absolute",
            top: "-10px",
            right: "0px",
            fontSize: "1.5rem",
          }}
        >
          🔥
        </Box>
      </Box>

      {/* Trending Items with Images */}
      <Box
        sx={{
          background: "#ffffff",
          border: "1px solid #e8e8e8",
          borderRadius: "0px",
        }}
      >
        {trendingData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              p: 1.2,
              borderBottom:
                index < trendingData.length - 1 ? "1px solid #f5f5f5" : "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              "&:hover": {
                background: "#fafafa",
              },
            }}
          >
            {/* Thumbnail Image */}
            <Box
              sx={{
                width: "50px",
                height: "50px",
                flexShrink: 0,
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid #e8e8e8",
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

            {/* Text Content */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  lineHeight: 1.3,
                  fontFamily: "'Georgia', 'Garamond', serif",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.title}
              </Typography>
            </Box>

            {/* View Count */}
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: 900,
                color: "#dc2626",
                fontFamily: "'Georgia', 'Garamond', serif",
                flexShrink: 0,
              }}
            >
              {item.count}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
