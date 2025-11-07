import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarIcon from "@mui/icons-material/Star";
import UpgradeIcon from "@mui/icons-material/Upgrade";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [location, setLocation] = useState("Fetching location...");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

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
            setError("Unable to fetch location");
          }
        },
        () => setError("Location denied")
      );
    } else {
      setError("Geolocation unavailable");
    }
  }, []);

  const handleProfileClick = (event) => {
    if (user) {
      setAnchorEl(event.currentTarget);
    } else {
      navigate("/signin");
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    handleClose();
    navigate("/signin");
  };

  const handleUpgrade = () => {
    handleClose();
    navigate("/plans");
  };

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
          borderBottom: "1px solid #e0e0e0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "60px !important",
            px: 2,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{
                color: "#1a1a1a",
                padding: "8px",
                "&:hover": {
                  backgroundColor: "#fef2f2",
                  transform: "scale(1.05)",
                },
                transition: "all 0.2s",
              }}
            >
              <MenuIcon sx={{ fontSize: 24 }} />
            </IconButton>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
                background: "#fef2f2",
                px: 1.5,
                py: 0.5,
                borderRadius: "3px",
                border: "1px solid #fee2e2",
              }}
            >
              <span style={{ fontSize: "0.85rem" }}>📍</span>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#1a1a1a",
                  fontFamily: "'Segoe UI', sans-serif",
                }}
              >
                {error ? error : location}
              </Typography>
            </Box>
          </Stack>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              textAlign: "center",
              flexGrow: 0,
              letterSpacing: 2,
              fontFamily: "'Georgia', serif",
              fontSize: "1.5rem",
              display: "flex",
              gap: "3px",
            }}
          >
            <Box component="span" sx={{ background: "#c41e3a", color: "#ffffff", padding: "2px 12px", fontWeight: 700 }}>M</Box>
            <Box component="span" sx={{ background: "#c41e3a", color: "#ffffff", padding: "2px 12px", fontWeight: 700 }}>I</Box>
            <Box component="span" sx={{ background: "#c41e3a", color: "#ffffff", padding: "2px 12px", fontWeight: 700 }}>D</Box>
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#c41e3a",
                color: "#ffffff",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontSize: "0.75rem",
                borderRadius: "3px",
                px: 2,
                py: 0.75,
                minHeight: "36px",
                fontFamily: "'Segoe UI', sans-serif",
                "&:hover": {
                  backgroundColor: "#a31828",
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 8px rgba(196,30,58,0.3)",
                },
                transition: "all 0.2s",
              }}
              onClick={() => navigate("/plans")}
            >
              Subscribe
            </Button>

            <IconButton onClick={handleProfileClick} sx={{ padding: 0 }}>
              {user ? (
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    background: "linear-gradient(135deg, #c41e3a 0%, #a31828 100%)",
                    fontSize: "1rem",
                    fontWeight: 900,
                    cursor: "pointer",
                    border: user.subscription ? "2px solid #16a34a" : "2px solid #e8e8e8",
                  }}
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </Avatar>
              ) : (
                <Avatar sx={{ width: 40, height: 40, background: "#e8e8e8", color: "#666666", cursor: "pointer" }}>
                  <AccountCircleIcon />
                </Avatar>
              )}
            </IconButton>
          </Stack>
        </Toolbar>

        <Toolbar
          variant="dense"
          sx={{
            justifyContent: "center",
            gap: 0,
            overflowX: "auto",
            background: "#ffffff",
            borderTop: "1px solid #e0e0e0",
            display: { xs: "none", md: "flex" },
            minHeight: "44px !important",
            px: 0,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {menuItems.map((link, index) => (
            <Button
              key={link}
              sx={{
                color: "#4a4a4a",
                fontWeight: 600,
                fontSize: "0.875rem",
                textTransform: "none",
                fontFamily: "'Segoe UI', sans-serif",
                px: 2,
                py: 1,
                minWidth: "auto",
                borderRadius: "0px",
                borderRight: index < menuItems.length - 1 ? "1px solid #f0f0f0" : "none",
                "&:hover": {
                  backgroundColor: "#c41e3a",
                  color: "#ffffff",
                  borderRight: index < menuItems.length - 1 ? "1px solid #c41e3a" : "none",
                },
                transition: "all 0.2s",
              }}
            >
              {link}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 300,
            borderRadius: "8px",
            border: "2px solid #c41e3a",
            boxShadow: "0 8px 20px rgba(196, 30, 58, 0.15)",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box sx={{ p: 2.5, borderBottom: "1px solid #e8e8e8" }}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
            <Avatar
              sx={{
                width: 55,
                height: 55,
                background: "linear-gradient(135deg, #c41e3a 0%, #a31828 100%)",
                fontSize: "1.4rem",
                fontWeight: 900,
              }}
            >
              {user && user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </Avatar>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", color: "#1a1a1a" }}>
                {user && user.name ? user.name : "User"}
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", color: "#666666" }}>
                {user && user.email ? user.email : ""}
              </Typography>
            </Box>
          </Stack>

          {user && user.subscription ? (
            <Chip
              icon={<VerifiedIcon sx={{ fontSize: "0.9rem" }} />}
              label={`${user.subscription.plan} Member`}
              size="small"
              sx={{ background: "#16a34a", color: "#ffffff", fontWeight: 700, fontSize: "0.7rem", height: "24px" }}
            />
          ) : (
            <Chip label="Free User" size="small" sx={{ background: "#e8e8e8", color: "#666666", fontWeight: 600, fontSize: "0.7rem", height: "24px" }} />
          )}

          {user && user.subscription && user.subscription.categories && user.subscription.categories.length > 0 && (
            <Box sx={{ mt: 1.5 }}>
              <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#666666", mb: 0.75 }}>
                Your Subscriptions:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {user.subscription.categories.map((category, index) => (
                  <Chip
                    key={index}
                    icon={<StarIcon sx={{ fontSize: "0.7rem" }} />}
                    label={category}
                    size="small"
                    sx={{ background: "rgba(196, 30, 58, 0.1)", color: "#c41e3a", fontWeight: 600, fontSize: "0.65rem", height: "20px" }}
                  />
                ))}
              </Box>
            </Box>
          )}
        </Box>

        {user && !user.subscription && (
          <MenuItem onClick={handleUpgrade}>
            <ListItemIcon>
              <UpgradeIcon sx={{ color: "#c41e3a" }} />
            </ListItemIcon>
            <ListItemText primary="Upgrade to Premium" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 700, color: "#c41e3a" }} />
          </MenuItem>
        )}

        <Divider />

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon sx={{ color: "#666666" }} />
          </ListItemIcon>
          <ListItemText primary="Sign Out" primaryTypographyProps={{ fontSize: "0.9rem", color: "#666666" }} />
        </MenuItem>
      </Menu>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#ffffff",
            width: 280,
            borderRight: "3px solid #c41e3a",
          },
        }}
      >
        <Box sx={{ p: 0 }}>
          <Box
            sx={{
              background: "linear-gradient(135deg, #c41e3a 0%, #a31828 100%)",
              color: "#ffffff",
              p: 3,
              textAlign: "center",
              borderBottom: "2px solid #8b1522",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: 4, fontFamily: "'Georgia', serif", mb: 0.5 }}>
              MID NEWS
            </Typography>
            <Typography sx={{ fontSize: "0.75rem", fontWeight: 500, opacity: 0.9, letterSpacing: 1 }}>
              Your Trusted News Source
            </Typography>
          </Box>

          {menuItems.map((text, idx) => (
            <Button
              key={idx}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                color: "#1a1a1a",
                fontWeight: 600,
                fontSize: "0.95rem",
                py: 1.75,
                px: 3,
                borderRadius: "0px",
                borderBottom: "1px solid #f0f0f0",
                fontFamily: "'Segoe UI', sans-serif",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#c41e3a",
                  color: "#ffffff",
                  paddingLeft: "36px",
                  borderBottom: "1px solid #c41e3a",
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {text}
            </Button>
          ))}

          <Box sx={{ p: 2, borderTop: "1px solid #e0e0e0", mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#c41e3a",
                color: "#ffffff",
                fontWeight: 700,
                py: 1.5,
                mb: 1,
                "&:hover": { backgroundColor: "#a31828" },
              }}
              onClick={() => navigate("/plans")}
            >
              Subscribe Now
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: "#c41e3a",
                color: "#c41e3a",
                fontWeight: 700,
                py: 1.5,
                "&:hover": { backgroundColor: "#fef2f2", borderColor: "#a31828" },
              }}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
