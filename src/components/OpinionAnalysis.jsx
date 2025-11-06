import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import authorImg1 from "../assets/economy.png";
import authorImg2 from "../assets/AI.png";
import authorImg3 from "../assets/climatechange.png";

const opinions = [
  {
    title: "Why India's Economy is Resilient Despite Global Slowdown",
    author: "Dr. Rajesh Kumar",
    role: "Chief Economist",
    time: "2 hours ago",
    excerpt: "Despite global headwinds, India's diversified economy shows remarkable strength...",
    img: authorImg1,
  },
  {
    title: "The Future of AI: Opportunities and Challenges",
    author: "Priya Sharma",
    role: "Tech Analyst",
    time: "4 hours ago",
    excerpt: "As AI continues to evolve, we must address ethical concerns while embracing innovation...",
    img: authorImg2,
  },
  {
    title: "Climate Action: Time is Running Out",
    author: "Prof. Anil Verma",
    role: "Environmental Expert",
    time: "6 hours ago",
    excerpt: "The latest climate data paints a concerning picture that demands immediate action...",
    img: authorImg3,
  },
];

export default function OpinionAnalysis() {
  return (
    <Box sx={{ mb: 4, mt: 4 }}>
      {/* Header */}
      <Box sx={{ position: "relative", mb: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            fontSize: "1.8rem",
            color: "#dc2626",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontFamily: "'Georgia', 'Garamond', serif",
          }}
        >
          Opinion & Analysis
        </Typography>
        <Box
          sx={{
            width: "80px",
            height: "3px",
            background: "#dc2626",
            mt: 0.5,
          }}
        />
      </Box>

      {/* Opinion Cards Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
        }}
      >
        {opinions.map((opinion, index) => (
          <Box
            key={index}
            sx={{
              background: "#ffffff",
              border: "1px solid #e8e8e8",
              borderRadius: "0px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "#dc2626",
                transform: "translateY(-4px)",
                boxShadow: "0 8px 20px rgba(220, 38, 38, 0.15)",
              },
            }}
          >
            {/* Content */}
            <Box sx={{ p: 2.5 }}>
              {/* Author Info */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid #dc2626",
                  }}
                >
                  <img
                    src={opinion.img}
                    alt={opinion.author}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: "#1a1a1a",
                      fontFamily: "'Georgia', 'Garamond', serif",
                    }}
                  >
                    {opinion.author}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "#666666",
                    }}
                  >
                    {opinion.role}
                  </Typography>
                </Box>
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "#1a1a1a",
                  mb: 1.5,
                  lineHeight: 1.3,
                  fontFamily: "'Georgia', 'Garamond', serif",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {opinion.title}
              </Typography>

              {/* Excerpt */}
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#666666",
                  lineHeight: 1.6,
                  mb: 1.5,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {opinion.excerpt}
              </Typography>

              {/* Time + Read More */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "#999999",
                  }}
                >
                  {opinion.time}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "#dc2626",
                    fontWeight: 700,
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Read More →
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
