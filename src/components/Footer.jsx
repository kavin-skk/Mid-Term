import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "#1a1a1a",
        color: "#ffffff",
        mt: 6,
        pt: 4,
        pb: 3,
      }}
    >
      {/* Main Footer Content */}
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          px: 3,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "2fr 1fr 1fr 1fr",
          },
          gap: 4,
          mb: 3,
        }}
      >
        {/* About Section */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              fontSize: "2rem",
              mb: 2,
              fontFamily: "'Georgia', 'Garamond', serif",
              letterSpacing: "2px",
            }}
          >
            <Box component="span" sx={{ color: "#dc2626" }}>M</Box>
            <Box component="span" sx={{ color: "#dc2626" }}>I</Box>
            <Box component="span" sx={{ color: "#dc2626" }}>D</Box>
          </Typography>
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "#cccccc",
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            Your trusted source for breaking news, in-depth analysis, and
            stories that matter. Committed to truth and integrity since 2025.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {["📘", "🐦", "📸", "▶️"].map((emoji, idx) => (
              <Box
                key={idx}
                sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  background: "#2a2a2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "#dc2626",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                {emoji}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Sections */}
        <Box>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "0.9rem",
              mb: 2,
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontFamily: "'Georgia', 'Garamond', serif",
            }}
          >
            Sections
          </Typography>
          {["Home", "World", "Politics", "Economy", "Sports"].map((item) => (
            <Typography
              key={item}
              component={Link}
              to={`/${item.toLowerCase()}`}
              sx={{
                display: "block",
                fontSize: "0.85rem",
                color: "#cccccc",
                mb: 1.5,
                textDecoration: "none",
                transition: "color 0.2s ease",
                "&:hover": {
                  color: "#dc2626",
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Company */}
        <Box>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "0.9rem",
              mb: 2,
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontFamily: "'Georgia', 'Garamond', serif",
            }}
          >
            Company
          </Typography>
          {["About Us", "Contact", "Careers", "Advertise", "Privacy Policy"].map((item) => (
            <Typography
              key={item}
              sx={{
                display: "block",
                fontSize: "0.85rem",
                color: "#cccccc",
                mb: 1.5,
                cursor: "pointer",
                transition: "color 0.2s ease",
                "&:hover": {
                  color: "#dc2626",
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Newsletter */}
        <Box>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "0.9rem",
              mb: 2,
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontFamily: "'Georgia', 'Garamond', serif",
            }}
          >
            Newsletter
          </Typography>
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "#cccccc",
              mb: 2,
              lineHeight: 1.5,
            }}
          >
            Get the latest news delivered to your inbox daily.
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: "10px 12px",
                border: "1px solid #444444",
                borderRadius: "4px",
                background: "#2a2a2a",
                color: "#ffffff",
                fontSize: "0.85rem",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 16px",
                background: "#dc2626",
                color: "#ffffff",
                border: "none",
                borderRadius: "4px",
                fontWeight: "700",
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
            >
              →
            </button>
          </Box>
        </Box>
      </Box>

      {/* Bottom Bar */}
      <Box
        sx={{
          borderTop: "1px solid #333333",
          pt: 3,
          maxWidth: "1300px",
          mx: "auto",
          px: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.8rem",
              color: "#999999",
            }}
          >
            © 2025 MID News. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: "0.8rem",
                  color: "#999999",
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                  "&:hover": {
                    color: "#ffffff",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
