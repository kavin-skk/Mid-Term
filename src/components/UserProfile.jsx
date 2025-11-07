import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarIcon from "@mui/icons-material/Star";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user from sessionStorage
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  const handleSubscribe = () => {
    navigate("/plans");
  };

  // If no user logged in, show sign-in prompt
  if (!user) {
    return (
      <Card
        sx={{
          background: "#ffffff",
          border: "1px solid #e8e8e8",
          borderRadius: "4px",
          mb: 3,
        }}
      >
        <CardContent sx={{ p: 3, textAlign: "center" }}>
          <AccountCircleIcon sx={{ fontSize: "4rem", color: "#dc2626", mb: 2 }} />
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 1,
              fontFamily: "'Georgia', 'Garamond', serif",
            }}
          >
            Sign In to Access Premium Content
          </Typography>
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "#666666",
              mb: 2,
              fontFamily: "'Georgia', 'Garamond', serif",
            }}
          >
            Get personalized news and exclusive features
          </Typography>
          <Button
            fullWidth
            onClick={() => navigate("/signin")}
            sx={{
              background: "#dc2626",
              color: "#ffffff",
              fontWeight: 700,
              textTransform: "none",
              py: 1.2,
              borderRadius: "4px",
              "&:hover": {
                background: "#991b1b",
              },
            }}
          >
            Sign In Now
          </Button>
        </CardContent>
      </Card>
    );
  }

  // If user logged in, show profile
  return (
    <Card
      sx={{
        background: "#ffffff",
        border: "2px solid #dc2626",
        borderRadius: "4px",
        mb: 3,
        boxShadow: "0 4px 12px rgba(220, 38, 38, 0.1)",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Profile Header */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Avatar
            sx={{
              width: 70,
              height: 70,
              margin: "0 auto",
              mb: 1.5,
              background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
              fontSize: "2rem",
              fontWeight: 900,
            }}
          >
            {user.name?.charAt(0).toUpperCase() || "U"}
          </Avatar>
          
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "#1a1a1a",
              mb: 0.5,
              fontFamily: "'Georgia', 'Garamond', serif",
            }}
          >
            {user.name}
          </Typography>
          
          <Typography
            sx={{
              fontSize: "0.8rem",
              color: "#666666",
              mb: 1,
            }}
          >
            {user.email}
          </Typography>

          {/* Subscription Status Badge */}
          {user.subscription ? (
            <Chip
              icon={<VerifiedIcon />}
              label={`${user.subscription.plan} Member`}
              sx={{
                background: "#16a34a",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.75rem",
                height: "24px",
              }}
            />
          ) : (
            <Chip
              label="Free User"
              sx={{
                background: "#e8e8e8",
                color: "#666666",
                fontWeight: 600,
                fontSize: "0.75rem",
                height: "24px",
              }}
            />
          )}
        </Box>

        {/* Subscribed Categories */}
        {user.subscription && user.subscription.categories && user.subscription.categories.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#1a1a1a",
                mb: 1,
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              Your Subscriptions:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {user.subscription.categories.map((category, index) => (
                <Chip
                  key={index}
                  icon={<StarIcon />}
                  label={category}
                  size="small"
                  sx={{
                    background: "rgba(220, 38, 38, 0.1)",
                    color: "#dc2626",
                    fontWeight: 600,
                    fontSize: "0.7rem",
                  }}
                />
              ))}
            </Box>
          </Box>
        )}

        {/* Action Buttons */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {!user.subscription && (
            <Button
              fullWidth
              onClick={handleSubscribe}
              sx={{
                background: "#dc2626",
                color: "#ffffff",
                fontWeight: 700,
                textTransform: "none",
                py: 1,
                borderRadius: "4px",
                fontSize: "0.85rem",
                "&:hover": {
                  background: "#991b1b",
                },
              }}
            >
              Upgrade to Premium
            </Button>
          )}
          
          <Button
            fullWidth
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
            sx={{
              background: "#ffffff",
              color: "#666666",
              border: "1px solid #e8e8e8",
              fontWeight: 600,
              textTransform: "none",
              py: 1,
              borderRadius: "4px",
              fontSize: "0.85rem",
              "&:hover": {
                background: "#f8f8f8",
                borderColor: "#dc2626",
                color: "#dc2626",
              },
            }}
          >
            Sign Out
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
