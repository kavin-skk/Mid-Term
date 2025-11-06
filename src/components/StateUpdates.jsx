import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CategoryBadge from "./CategoryBadge";
import TimeStamp from "./TimeStamp";

import climateImg from "../assets/climatechange.png";
import economyImg from "../assets/economy.png";

const statesData = [
  {
    state: "Tamil Nadu",
    news: [
      {
        title: "Seven held for attacking PMK MLA Arul's supporters in Salem",
        desc: "Police acted swiftly after the incident was reported on Monday.",
        category: "Politics",
        time: "3 hours ago",
        img: climateImg,
      },
      {
        title: "When Jayalalithaa proposed chemical castration for rapists",
        desc: "A controversial proposal revisited amidst ongoing debates.",
        category: "Politics",
        time: "5 hours ago",
        img: economyImg,
      },
    ],
  },
  {
    state: "Telangana",
    news: [
      {
        title: "Hyderabad Metro expansion gets cabinet nod",
        desc: "New phase will connect major IT hubs to the city center.",
        category: "Infrastructure",
        time: "2 hours ago",
        img: climateImg,
      },
      {
        title: "Heavy rains expected in coastal areas",
        desc: "Weather department issues alert for next 48 hours.",
        category: "Weather",
        time: "4 hours ago",
        img: economyImg,
      },
    ],
  },
  {
    state: "Karnataka",
    news: [
      {
        title: "Bengaluru traffic police launch new AI system",
        desc: "Advanced technology to reduce congestion in busy areas.",
        category: "Technology",
        time: "1 hour ago",
        img: climateImg,
      },
      {
        title: "State budget focuses on rural development",
        desc: "₹5000 crore allocated for infrastructure projects.",
        category: "Economy",
        time: "6 hours ago",
        img: economyImg,
      },
    ],
  },
  {
    state: "Kerala",
    news: [
      {
        title: "Tourism sector sees 40% growth this year",
        desc: "International arrivals double compared to last year.",
        category: "Tourism",
        time: "2 hours ago",
        img: climateImg,
      },
      {
        title: "New healthcare initiative launched",
        desc: "Free health checkups for senior citizens across state.",
        category: "Health",
        time: "4 hours ago",
        img: economyImg,
      },
    ],
  },
  {
    state: "Andhra Pradesh",
    news: [
      {
        title: "Amaravati development gains momentum",
        desc: "New projects worth ₹10,000 crore approved.",
        category: "Infrastructure",
        time: "3 hours ago",
        img: climateImg,
      },
      {
        title: "State achieves 100% vaccination target",
        desc: "Health minister congratulates team for milestone.",
        category: "Health",
        time: "5 hours ago",
        img: economyImg,
      },
    ],
  },
];

export default function StatesUpdates() {
  const [activeState, setActiveState] = useState(0);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ mb: 5, mt: 4 }}>
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          fontSize: "1.8rem",
          color: "#dc2626",
          mb: 2,
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontFamily: "'Georgia', 'Garamond', serif",
        }}
      >
        States Updates
      </Typography>

      {/* State Tabs */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mb: 3,
          borderBottom: "2px solid #e8e8e8",
          overflowX: "auto",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {statesData.map((state, index) => (
          <Typography
            key={index}
            onClick={() => setActiveState(index)}
            sx={{
              fontSize: "0.95rem",
              fontWeight: activeState === index ? 900 : 600,
              color: activeState === index ? "#D97706" : "#666666",
              pb: 1,
              borderBottom: activeState === index ? "3px solid #D97706" : "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              fontFamily: "'Georgia', 'Garamond', serif",
              "&:hover": {
                color: "#D97706",
              },
            }}
          >
            {state.state}
          </Typography>
        ))}
      </Box>

      {/* News Cards - Swipeable */}
      <Box sx={{ position: "relative" }}>
        {/* Left Arrow */}
        <IconButton
          onClick={scrollLeft}
          sx={{
            position: "absolute",
            left: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "#ffffff",
            border: "1px solid #e8e8e8",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            "&:hover": {
              background: "#dc2626",
              color: "#ffffff",
            },
          }}
        >
          ←
        </IconButton>

        {/* Scrollable Container */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {statesData[activeState].news.map((newsItem, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "350px",
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
              {/* Image */}
              <Box
                sx={{
                  width: "100%",
                  height: "180px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={newsItem.img}
                  alt={newsItem.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Content */}
              <Box sx={{ p: 2 }}>
                {/* Category + Time */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <CategoryBadge category={newsItem.category} />
                  <TimeStamp time={newsItem.time} />
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
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {newsItem.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "#666666",
                    lineHeight: 1.5,
                    fontFamily: "'Georgia', 'Garamond', serif",
                  }}
                >
                  {newsItem.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={scrollRight}
          sx={{
            position: "absolute",
            right: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "#ffffff",
            border: "1px solid #e8e8e8",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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
