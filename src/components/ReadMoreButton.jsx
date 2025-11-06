import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ReadMoreButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: "#dc2626",
        fontWeight: 700,
        fontSize: "0.8rem",
        textTransform: "none",
        padding: 0,
        minWidth: "auto",
        fontFamily: "'Georgia', 'Garamond', serif",
        "&:hover": {
          background: "transparent",
          color: "#991b1b",
          "& .arrow": {
            transform: "translateX(4px)",
          },
        },
      }}
    >
      Read More
      <ArrowForwardIcon
        className="arrow"
        sx={{
          fontSize: "0.9rem",
          ml: 0.5,
          transition: "transform 0.3s ease",
        }}
      />
    </Button>
  );
}
