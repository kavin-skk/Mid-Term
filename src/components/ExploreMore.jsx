import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CategoryBadge from "./CategoryBadge";
import TimeStamp from "./TimeStamp";
import ViewCount from "./ViewCount";
import ReadMoreButton from "./ReadMoreButton";

import newsImg1 from "../assets/climatechange.png";
import newsImg2 from "../assets/economy.png";
import newsImg3 from "../assets/AI.png";
import newsImg4 from "../assets/indianworldcup.png";

const exploreBlocks = [
  {
    category: "World",
    title: "Global Climate Talks Gain Momentum",
    desc: "Nations commit to faster carbon reduction at the latest UN summit.",
    img: newsImg1,
    time: "6 hours ago",
    views: 45000,
  },
  {
    category: "Economy",
    title: "Economic Outlook Brightens for Asia",
    desc: "IMF projects strong growth rebound led by India and Southeast Asia.",
    img: newsImg2,
    time: "4 hours ago",
    views: 38000,
  },
  {
    category: "Technology",
    title: "Tech Giants Face Fresh Data Privacy Scrutiny",
    desc: "Major tech firms are under review for new privacy regulations worldwide.",
    img: newsImg3,
    time: "8 hours ago",
    views: 62000,
  },
  {
    category: "Sports",
    title: "ISRO Prepares for Chandrayaan-4 Mission",
    desc: "Final testing begins as India plans a new lunar surface study.",
    img: newsImg4,
    time: "3 hours ago",
    views: 91000,
  },
];

export default function ExploreMore() {
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
      {/* Section Header */}
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          mb: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,
            color: "#dc2626",
            mb: 1,
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: { xs: "1.3rem", md: "1.5rem" },
            fontFamily: "'Georgia', 'Garamond', serif",
          }}
        >
          Explore More
        </Typography>
        <Box
          sx={{
            width: "80px",
            height: "3px",
            background: "#dc2626",
          }}
        />
      </Box>

      {/* Grid Cards */}
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
        {exploreBlocks.map((item, idx) => (
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
                <CategoryBadge category={item.category} />
                <TimeStamp time={item.time} />
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
                {item.title}
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
                {item.desc}
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
                <ViewCount count={item.views} />
                <ReadMoreButton onClick={() => console.log("Navigate to article")} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
