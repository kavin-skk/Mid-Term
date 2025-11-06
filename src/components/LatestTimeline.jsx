import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function LatestTimeline() {
  const timelineData = [
    {
      time: "5:30 PM",
      title: "RBI announces new digital currency regulation",
      desc: "The new framework aims to ensure safer transactions across fintech platforms.",
    },
    {
      time: "4:45 PM",
      title: "Sensex jumps 250 points amid global rally",
      desc: "Investor sentiment improved after positive cues from Asian markets.",
    },
    {
      time: "4:00 PM",
      title: "ISRO prepares for Chandrayaan-4 mission",
      desc: "Final testing begins as India plans a new lunar surface study in 2026.",
    },
  ];

  return (
    <Box sx={{ mb: 3 }}>
      {/* Section Header */}
      <Box sx={{ mb: 1.5 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            fontSize: "0.95rem",
            color: "#1a1a1a",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            fontFamily: "'Georgia', 'Garamond', serif",
            mb: 0.8,
          }}
        >
          Latest Timeline
        </Typography>
        <Box
          sx={{
            width: "50px",
            height: "3px",
            background: "#dc2626",
            borderRadius: "2px",
          }}
        />
      </Box>

      {/* Timeline Container */}
      <Box
        sx={{
          background: "#ffffff",
          border: "1px solid #e8e8e8",
          borderRadius: "0px",
          p: 2,
          maxHeight: "500px",
          overflowY: "auto",
        }}
      >
        {timelineData.map((item, index) => (
          <Box
            key={index}
            sx={{
              mb: index < timelineData.length - 1 ? 2.5 : 0,
              pl: 2,
              borderLeft: "3px solid #dc2626",
              position: "relative",
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                borderLeftColor: "#991b1b",
                pl: 2.3,
              },
            }}
          >
            {/* Time Badge */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 0.8,
                gap: 0.5,
              }}
            >
              <AccessTimeIcon
                sx={{
                  fontSize: "0.9rem",
                  color: "#dc2626",
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#dc2626",
                  fontFamily: "'Georgia', 'Garamond', serif",
                }}
              >
                {item.time}
              </Typography>
            </Box>

            {/* Title */}
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "0.85rem",
                color: "#1a1a1a",
                mb: 0.5,
                lineHeight: 1.3,
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              {item.title}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: "#666666",
                lineHeight: 1.5,
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              {item.desc}
            </Typography>

            {/* Separator Line */}
            {index < timelineData.length - 1 && (
              <Box
                sx={{
                  height: "1px",
                  background: "#e8e8e8",
                  mt: 2,
                  ml: -2,
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
