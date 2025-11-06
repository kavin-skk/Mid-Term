import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const quickReads = [
  {
    title: "₹500 Crore Scam Exposed",
    time: "10 min ago",
    emoji: "🚨",
  },
  {
    title: "New Tax Rules from Jan 2026",
    time: "25 min ago",
    emoji: "💰",
  },
  {
    title: "Metro Expansion Approved",
    time: "40 min ago",
    emoji: "🚇",
  },
  {
    title: "Monsoon Alert: Heavy Rains",
    time: "1 hour ago",
    emoji: "🌧️",
  },
  {
    title: "Gold Prices Hit Record High",
    time: "2 hours ago",
    emoji: "📈",
  },
];

export default function QuickRead() {
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
        Quick Read ⚡
      </Typography>

      {/* Quick Read Items */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {quickReads.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 1.5,
              alignItems: "flex-start",
              p: 1.2,
              background: "#ffffff",
              border: "1px solid #e8e8e8",
              borderRadius: "0px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              "&:hover": {
                borderColor: "#dc2626",
                transform: "translateX(4px)",
                boxShadow: "0 4px 12px rgba(220, 38, 38, 0.1)",
              },
            }}
          >
            {/* Emoji */}
            <Typography sx={{ fontSize: "1.5rem" }}>{item.emoji}</Typography>

            {/* Content */}
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: "#1a1a1a",
                  mb: 0.5,
                  lineHeight: 1.3,
                  fontFamily: "'Georgia', 'Garamond', serif",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "#999999",
                }}
              >
                {item.time}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
