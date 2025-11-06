import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CategoryBadge from "./CategoryBadge";
import TimeStamp from "./TimeStamp";
import ViewCount from "./ViewCount";
import ReadMoreButton from "./ReadMoreButton";

import pickImg1 from "../assets/climatechange.png";
import pickImg2 from "../assets/AI.png";
import pickImg3 from "../assets/economy.png";
import pickImg4 from "../assets/indianworldcup.png";

const picks = [
  {
    category: "Technology",
    title: "Inside India's AI Revolution",
    desc: "Editor's analysis of India's advancements in AI, ethics, and regulation.",
    img: pickImg1,
    time: "1 day ago",
    views: 156000,
  },
  {
    category: "World",
    title: "Climate Policies: Editor's Choice",
    desc: "A look at government and NGOs collaborating for change.",
    img: pickImg2,
    time: "2 days ago",
    views: 98000,
  },
  {
    category: "Economy",
    title: "Markets: The Next Big Wave",
    desc: "Expert insight on bullish sectors for the second half of the year.",
    img: pickImg3,
    time: "1 day ago",
    views: 112000,
  },
  {
    category: "Sports",
    title: "Women Leaders in Tech",
    desc: "Celebrating the rise of impactful female entrepreneurs.",
    img: pickImg4,
    time: "3 days ago",
    views: 87000,
  },
];

export default function EditorsPicks() {
  const [page, setPage] = useState(0);

  const handleNext = () => setPage(1);
  const handlePrev = () => setPage(0);

  const visiblePicks = picks.slice(page * 4, page * 4 + 4);

  return (
    <Box
      sx={{
        width: "100%",
        background: "#ffffff",
        py: 4,
        px: 3,
        borderTop: "3px solid #dc2626",
        borderBottom: "1px solid #e8e8e8",
      }}
    >
      {/* Section Header with Navigation */}
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          mb: 3,
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              color: "#dc2626",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: { xs: "1.3rem", md: "1.5rem" },
              fontFamily: "'Georgia', 'Garamond', serif",
            }}
          >
            Editors Picks
          </Typography>

          {/* Navigation Arrows */}
          <Box sx={{ display: "flex", gap: 1, ml: "auto" }}>
            <IconButton
              onClick={handlePrev}
              disabled={page === 0}
              sx={{
                bgcolor: page === 0 ? "#e8e8e8" : "#dc2626",
                color: "#ffffff",
                width: 35,
                height: 35,
                "&:hover": { bgcolor: "#991b1b" },
                "&:disabled": { bgcolor: "#e8e8e8", color: "#999999" },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={page === 1}
              sx={{
                bgcolor: page === 1 ? "#e8e8e8" : "#dc2626",
                color: "#ffffff",
                width: 35,
                height: 35,
                "&:hover": { bgcolor: "#991b1b" },
                "&:disabled": { bgcolor: "#e8e8e8", color: "#999999" },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ width: "80px", height: "3px", background: "#dc2626", mt: 1 }} />
      </Box>

      {/* Cards Grid */}
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: 2.5,
        }}
      >
        {visiblePicks.map((pick, idx) => (
          <Box
            key={idx}
            sx={{
              background: "#ffffff",
              border: "1px solid #e8e8e8",
              borderRadius: "0px",
              overflow: "hidden",
              transition: "all 0.3s ease",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                borderColor: "#dc2626",
                borderWidth: "2px",
                transform: "translateY(-4px)",
                boxShadow: "0 4px 8px rgba(220, 38, 38, 0.15)",
              },
            }}
          >
            {/* Image */}
            <Box
              sx={{
                width: "100%",
                height: "180px",
                overflow: "hidden",
                borderBottom: "2px solid #e8e8e8",
              }}
            >
              <img
                src={pick.img}
                alt={pick.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Content */}
            <Box sx={{ p: 2, display: "flex", flexDirection: "column", flex: 1 }}>
              {/* Category + Time */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 1.5,
                  flexWrap: "wrap",
                }}
              >
                <CategoryBadge category={pick.category} />
                <TimeStamp time={pick.time} />
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  color: "#1a1a1a",
                  mb: 1,
                  lineHeight: 1.3,
                  fontFamily: "'Georgia', 'Garamond', serif",
                  flex: 1,
                }}
              >
                {pick.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#666666",
                  lineHeight: 1.5,
                  fontFamily: "'Georgia', 'Garamond', serif",
                  mb: 1.5,
                }}
              >
                {pick.desc}
              </Typography>

              {/* Bottom Row: Views + Read More */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pt: 1,
                  borderTop: "1px solid #e8e8e8",
                }}
              >
                <ViewCount count={pick.views} />
                <ReadMoreButton onClick={() => console.log("Navigate to article")} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
