import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CategoryBadge from "./CategoryBadge";
import TimeStamp from "./TimeStamp";
import ViewCount from "./ViewCount";
import ReadMoreButton from "./ReadMoreButton";

import supremeCourtImg from "../assets/supremecourt.png";
import aiImg from "../assets/AI.png";
import cricketImg from "../assets/indianworldcup.png";
import climateImg from "../assets/climatechange.png";
import economyImg from "../assets/economy.png";

export default function BreakingNewsSection() {
  const mainNews = {
    category: "Breaking",
    title: "Breaking News: US Supreme Court Limits Executive Trade Powers",
    desc: "In a landmark ruling, the US top court restricts the President's ability to make unilateral trade decisions — a move experts say could bring stability to global markets.",
    img: supremeCourtImg,
    time: "2 hours ago",
    views: 125000,
  };

  const subNews = [
    {
      category: "Technology",
      title: "Tech Giants Face New AI Regulation",
      desc: "Global leaders agree on guidelines for responsible artificial intelligence use.",
      img: aiImg,
      time: "5 hours ago",
      views: 89000,
    },
    {
      category: "Sports",
      title: "Cricket World Cup 2025: India Through to Semis",
      desc: "India secures semifinal spot after a thrilling win against Australia.",
      img: cricketImg,
      time: "1 hour ago",
      views: 234000,
    },
    {
      category: "World",
      title: "Global Climate Talks Gain Momentum",
      desc: "Nations commit to faster carbon reduction in the latest UN summit.",
      img: climateImg,
      time: "3 hours ago",
      views: 67000,
    },
    {
      category: "Economy",
      title: "Economic Outlook Brightens for Asia",
      desc: "IMF projects strong growth rebound led by India and Southeast Asia.",
      img: economyImg,
      time: "4 hours ago",
      views: 52000,
    },
  ];

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* HERO BREAKING NEWS - More Compact & Professional */}
        <Box
          sx={{
            width: "100%",
            background: "#ffffff",
            border: "2px solid #c41e3a",
            borderRadius: "3px",
            overflow: "hidden",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: "pointer",
            "&:hover": {
              borderColor: "#a31828",
              boxShadow: "0 6px 16px rgba(196, 30, 58, 0.15)",
              transform: "translateY(-2px)",
            },
          }}
        >
          {/* Breaking Badge - Compact */}
          <Box
            sx={{
              background: "linear-gradient(135deg, #c41e3a 0%, #a31828 100%)",
              color: "#ffffff",
              padding: "8px 16px",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontFamily: "'Segoe UI', sans-serif",
              borderBottom: "1px solid #8b1522",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#ffffff",
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0.4 },
                },
              }}
            />
            Breaking News
          </Box>

          {/* Hero Image - Taller for Impact */}
          <Box
            sx={{
              width: "100%",
              height: "450px",
              overflow: "hidden",
              position: "relative",
              background: "#000",
            }}
          >
            <img
              src={mainNews.img}
              alt="Breaking News"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
            {/* Enhanced Gradient Overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "60%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)",
                pointerEvents: "none",
              }}
            />
          </Box>

          {/* Content - More Compact Spacing */}
          <Box sx={{ p: 2.5 }}>
            {/* Meta Info Row - Compact */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 1.5,
                flexWrap: "wrap",
              }}
            >
              <CategoryBadge category={mainNews.category} />
              <TimeStamp time={mainNews.time} />
              <ViewCount count={mainNews.views} />
            </Box>

            {/* Headline - Bigger & Bolder */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                color: "#1a1a1a",
                lineHeight: 1.2,
                mb: 1.5,
                fontFamily: "'Georgia', serif",
                letterSpacing: "-0.5px",
              }}
            >
              {mainNews.title}
            </Typography>

            {/* Description - Professional */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
                color: "#4a4a4a",
                fontFamily: "'Segoe UI', sans-serif",
                mb: 2,
              }}
            >
              {mainNews.desc}
            </Typography>

            <ReadMoreButton onClick={() => console.log("Navigate to article")} />
          </Box>
        </Box>

        {/* SUB-NEWS GRID - More Compact Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 2,
            width: "100%",
          }}
        >
          {subNews.map((news, index) => (
            <Box
              key={index}
              sx={{
                background: "#ffffff",
                border: "1px solid #e0e0e0",
                borderRadius: "3px",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                "&:hover": {
                  borderColor: "#c41e3a",
                  borderWidth: "2px",
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              {/* Image - Compact 16:9 Ratio */}
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  borderBottom: "1px solid #e0e0e0",
                  background: "#000",
                  position: "relative",
                }}
              >
                <img
                  src={news.img}
                  alt={news.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </Box>

              {/* Content - Tighter Spacing */}
              <Box sx={{ p: 2 }}>
                {/* Meta Info - Compact */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1.5,
                    flexWrap: "wrap",
                  }}
                >
                  <CategoryBadge category={news.category} />
                  <TimeStamp time={news.time} />
                  <ViewCount count={news.views} />
                </Box>

                {/* Title - Bold & Professional */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#1a1a1a",
                    mb: 1,
                    lineHeight: 1.3,
                    fontFamily: "'Georgia', serif",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {news.title}
                </Typography>

                {/* Description - Compact */}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.9rem",
                    color: "#6a6a6a",
                    lineHeight: 1.5,
                    fontFamily: "'Segoe UI', sans-serif",
                    mb: 1.5,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {news.desc}
                </Typography>

                <ReadMoreButton onClick={() => console.log("Navigate to article")} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
