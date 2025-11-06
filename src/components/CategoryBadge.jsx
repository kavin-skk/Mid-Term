import Box from "@mui/material/Box";

const categoryColors = {
  Politics: { bg: "#dc2626", text: "#ffffff" },
  Economy: { bg: "#16a34a", text: "#ffffff" },
  Sports: { bg: "#0284c7", text: "#ffffff" },
  Technology: { bg: "#7c3aed", text: "#ffffff" },
  Entertainment: { bg: "#d946ef", text: "#ffffff" },
  World: { bg: "#dc2626", text: "#ffffff" },
  Breaking: { bg: "#dc2626", text: "#ffffff" },
  Trending: { bg: "#f59e0b", text: "#ffffff" },
};

export default function CategoryBadge({ category }) {
  const colors = categoryColors[category] || { bg: "#6b7280", text: "#ffffff" };

  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        background: colors.bg,
        color: colors.text,
        px: 1.5,
        py: 0.3,
        fontSize: "0.7rem",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        borderRadius: "0px",
        fontFamily: "'Georgia', 'Garamond', serif",
      }}
    >
      {category}
    </Box>
  );
}
