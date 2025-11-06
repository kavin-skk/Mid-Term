import { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CategoryBadge from "./CategoryBadge";
import ViewCount from "./ViewCount";

import videoThumb1 from "../assets/economy.png";
import videoThumb2 from "../assets/AI.png";
import videoThumb3 from "../assets/climatechange.png";
import videoThumb4 from "../assets/indianworldcup.png";
import videoThumb5 from "../assets/supremecourt.png";

const videos = [
  {
    title: "LIVE: PM Modi's Address to Nation",
    category: "Politics",
    duration: "45:23",
    views: 234000,
    thumbnail: videoThumb1,
  },
  {
    title: "IPL 2025: Match Highlights - India vs Australia",
    category: "Sports",
    duration: "12:45",
    views: 189000,
    thumbnail: videoThumb2,
  },
  {
    title: "Budget 2025: Key Takeaways and Analysis",
    category: "Economy",
    duration: "8:30",
    views: 156000,
    thumbnail: videoThumb3,
  },
  {
    title: "Breaking: Supreme Court Major Verdict",
    category: "Politics",
    duration: "15:20",
    views: 142000,
    thumbnail: videoThumb4,
  },
  {
    title: "Tech Giants Launch New AI Products",
    category: "Technology",
    duration: "10:15",
    views: 98000,
    thumbnail: videoThumb5,
  },
];

export default function TrendingVideos() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

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
        Trending Videos 📹
      </Typography>

      {/* Swipeable Container */}
      <Box sx={{ position: "relative" }}>
        {/* Left Arrow */}
        <IconButton
          onClick={scrollLeft}
          sx={{
            position: "absolute",
            left: "-15px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "#ffffff",
            border: "1px solid #e8e8e8",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            width: "32px",
            height: "32px",
            "&:hover": {
              background: "#dc2626",
              color: "#ffffff",
            },
          }}
        >
          ←
        </IconButton>

        {/* Scrollable Video Cards */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            pb: 1,
          }}
        >
          {videos.map((video, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "280px",
                background: "#ffffff",
                border: "1px solid #e8e8e8",
                borderRadius: "0px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#dc2626",
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 20px rgba(220, 38, 38, 0.2)",
                },
              }}
            >
              {/* Video Thumbnail with Play Button */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "160px",
                  overflow: "hidden",
                  background: "#000000",
                }}
              >
                {/* Thumbnail Image */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.75,
                  }}
                />

                {/* Play Button Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "rgba(220, 38, 38, 0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "#dc2626",
                      transform: "translate(-50%, -50%) scale(1.15)",
                    },
                  }}
                >
                  {/* Play Icon Triangle */}
                  <Box
                    sx={{
                      width: 0,
                      height: 0,
                      borderLeft: "14px solid #ffffff",
                      borderTop: "9px solid transparent",
                      borderBottom: "9px solid transparent",
                      marginLeft: "3px",
                    }}
                  />
                </Box>

                {/* Duration Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    background: "rgba(0, 0, 0, 0.9)",
                    color: "#ffffff",
                    padding: "3px 6px",
                    borderRadius: "3px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  {video.duration}
                </Box>
              </Box>

              {/* Video Info */}
              <Box sx={{ p: 1.5 }}>
                {/* Category */}
                <Box sx={{ mb: 1 }}>
                  <CategoryBadge category={video.category} />
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: "#1a1a1a",
                    mb: 0.8,
                    lineHeight: 1.3,
                    fontFamily: "'Georgia', 'Garamond', serif",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "34px",
                  }}
                >
                  {video.title}
                </Typography>

                {/* Views */}
                <ViewCount count={video.views} />
              </Box>
            </Box>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={scrollRight}
          sx={{
            position: "absolute",
            right: "-15px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "#ffffff",
            border: "1px solid #e8e8e8",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            width: "32px",
            height: "32px",
            "&:hover": {
              background: "#dc2626",
              color: "#ffffff",
            },
          }}
        >
          →
        </IconButton>
      </Box>
    </Box>
  );
}
