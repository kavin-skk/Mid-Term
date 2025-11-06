import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function TimeStamp({ time }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        color: "#666666",
        fontSize: "0.75rem",
        fontWeight: 600,
      }}
    >
      <AccessTimeIcon sx={{ fontSize: "0.9rem", color: "#dc2626" }} />
      <span>{time}</span>
    </Box>
  );
}
