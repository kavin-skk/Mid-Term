import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function ViewCount({ count }) {
  const formatCount = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

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
      <VisibilityIcon sx={{ fontSize: "0.9rem", color: "#dc2626" }} />
      <span>{formatCount(count)}</span>
    </Box>
  );
}
