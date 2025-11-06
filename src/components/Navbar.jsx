import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [location, setLocation] = useState("Fetching location...");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          try {
            const res = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await res.json();
            setLocation(
              `${data.city || data.locality || "Unknown"}, ${data.countryName || ""}`
            );
          } catch {
            setError("Unable to fetch location name");
          }
        },
        () => setError("Location access denied")
      );
    } else {
      setError("Geolocation not supported");
    }
  }, []);

  const menuItems = [
    "Home",
    "Regional",
    "World",
    "Politics",
    "Defense",
    "Economy",
    "Entertainment",
    "Sports",
    "Translate",
    "Video",
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          borderBottom: "3px solid #dc2626",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: 70 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* Hamburger Menu */}
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ 
                color: "#1a1a1a",
                "&:hover": { backgroundColor: "#fef2f2" }
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Location */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1,
                background: "#fef2f2",
                px: 2,
                py: 1,
                borderRadius: "0px",
                border: "1px solid #e8e8e8",
                fontWeight: 600,
                fontSize: "0.85rem",
              }}
            >
              <span style={{ fontSize: "1rem", color: "#dc2626" }}>📍</span>
              <Typography 
                sx={{ 
                  fontSize: 13, 
                  fontWeight: 700,
                  color: "#1a1a1a",
                  fontFamily: "'Georgia', 'Garamond', serif"
                }}
              >
                {error ? error : location}
              </Typography>
            </Box>
          </Stack>

          {/* Logo/Brand - Professional Newspaper Style */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              textAlign: "center",
              flexGrow: 1,
              letterSpacing: 4,
              fontFamily: "'Georgia', 'Garamond', serif",
              fontSize: "1.8rem",
            }}
          >
            <span
              style={{
                background: "#dc2626",
                color: "#ffffff",
                padding: "4px 16px",
                borderRadius: "0px",
                marginRight: "6px",
                fontWeight: 900,
              }}
            >
              M
            </span>
            <span
              style={{
                background: "#dc2626",
                color: "#ffffff",
                padding: "4px 16px",
                borderRadius: "0px",
                marginRight: "6px",
                fontWeight: 900,
              }}
            >
              I
            </span>
            <span
              style={{
                background: "#dc2626",
                color: "#ffffff",
                padding: "4px 16px",
                borderRadius: "0px",
                fontWeight: 900,
              }}
            >
              D
            </span>
          </Typography>

          {/* Actions - Professional Red & White */}
          <Stack direction="row" spacing={1.5}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#dc2626",
                color: "#ffffff",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "0.8rem",
                borderRadius: "0px",
                px: 3,
                py: 1,
                fontFamily: "'Georgia', 'Garamond', serif",
                "&:hover": { 
                  backgroundColor: "#991b1b",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s ease",
              }}
              onClick={() => navigate("/plans")}
            >
              Subscribe
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#dc2626",
                border: "2px solid #dc2626",
                color: "#dc2626",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "0.8rem",
                borderRadius: "0px",
                px: 3,
                py: 1,
                fontFamily: "'Georgia', 'Garamond', serif",
                "&:hover": { 
                  borderColor: "#991b1b",
                  backgroundColor: "#fef2f2",
                  color: "#991b1b",
                  border: "2px solid #991b1b",
                },
                transition: "all 0.2s ease",
              }}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
          </Stack>
        </Toolbar>

        {/* Secondary menu - Professional Categories */}
        <Toolbar
          variant="dense"
          sx={{
            justifyContent: "center",
            gap: 0,
            overflowX: "auto",
            background: "#ffffff",
            borderTop: "1px solid #e8e8e8",
            display: { xs: "none", sm: "flex" },
            minHeight: 50,
            px: 0,
          }}
        >
          {menuItems.map((link, index) => (
            <Button
              key={link}
              sx={{
                color: "#6D2323",
                fontWeight: 700,
                fontSize: "0.85rem",
                textTransform: "none",
                fontFamily: "'Georgia', 'Garamond', serif",
                px: 2.5,
                py: 1.5,
                minWidth: "auto",
                borderRadius: "0px",
                borderRight: index < menuItems.length - 1 ? "1px solid #e8e8e8" : "none",
                "&:hover": {
                  backgroundColor: "#dc2626",
                  color: "#ffffff",
                },
                transition: "all 0.2s ease",
              }}
            >
              {link}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view - Professional Style */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { 
            backgroundColor: "#ffffff",
            color: "#1a1a1a",
            width: 260,
            borderRight: "3px solid #dc2626",
          },
        }}
      >
        <Box sx={{ p: 0 }}>
          {/* Drawer Header */}
          <Box
            sx={{
              background: "#dc2626",
              color: "#ffffff",
              p: 3,
              textAlign: "center",
              borderBottom: "1px solid #991b1b",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                letterSpacing: 3,
                fontFamily: "'Georgia', 'Garamond', serif",
                fontSize: "1.5rem",
              }}
            >
              MID NEWS
            </Typography>
          </Box>

          {/* Menu Items */}
          {menuItems.map((text, idx) => (
            <Button
              key={idx}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                color: "#1a1a1a",
                fontWeight: 700,
                fontSize: "0.95rem",
                py: 1.8,
                px: 3,
                borderRadius: "0px",
                borderBottom: "1px solid #e8e8e8",
                fontFamily: "'Georgia', 'Garamond', serif",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#dc2626",
                  color: "#ffffff",
                  paddingLeft: "32px",
                },
                transition: "all 0.2s ease",
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
