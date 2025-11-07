import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { toast } from "react-toastify";

const categories = [
  { id: "politics", name: "Politics", price: 99 },
  { id: "sports", name: "Sports", price: 99 },
  { id: "entertainment", name: "Entertainment", price: 99 },
  { id: "finance", name: "Finance", price: 99 },
  { id: "defense", name: "Defence", price: 99 },
  { id: "region", name: "Regional", price: 99 },
  { id: "mainpage", name: "Main Page", price: 99 },
];

export default function SubscriptionForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan || "monthly";
  
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const pricePerCategory = plan === "yearly" ? 399 : 99;
  const totalPrice = selectedCategories.length * pricePerCategory;

  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
    setSelectAll(false);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCategories([]);
      setSelectAll(false);
    } else {
      setSelectedCategories(categories.map((cat) => cat.id));
      setSelectAll(true);
    }
  };

const handleConfirmSubscription = () => {
  if (selectedCategories.length === 0) {
    alert("Please select at least one category!");
    return;
  }
  
  // Get current user from sessionStorage
  const storedUser = sessionStorage.getItem("user");
  
  if (!storedUser) {
    alert("Please sign in first!");
    navigate("/signin");
    return;
  }
  
  try {
    const user = JSON.parse(storedUser);
    
    // Add subscription to user object
    user.subscription = {
      plan: plan.toUpperCase(),
      categories: selectedCategories,
      price: totalPrice,
      subscribedAt: new Date().toISOString(),
    };
    
    // Save updated user back to sessionStorage
    sessionStorage.setItem("user", JSON.stringify(user));
    
    // Success message
    alert(`Subscription confirmed!\nPlan: ${user.subscription.plan}\nCategories: ${selectedCategories.length}\nTotal: ₹${totalPrice}`);
    
    // Redirect to home
    navigate("/");
  } catch (error) {
    console.error("Error saving subscription:", error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f8f8f8", // Same as main page
        py: 6,
        px: 3,
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: 900,
            color: "#dc2626",
            fontFamily: "'Georgia', 'Garamond', serif",
            mb: 1,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Subscription
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            color: "#1a1a1a",
            fontFamily: "'Georgia', 'Garamond', serif",
          }}
        >
          Selected Plan: <span style={{ color: "#dc2626", fontWeight: 800 }}>{plan.toUpperCase()}</span>
        </Typography>
      </Box>

      {/* Main Container */}
      <Box
        sx={{
          maxWidth: "700px",
          mx: "auto",
        }}
      >
        {/* Category Selection Card */}
        <Card
          sx={{
            background: "#ffffff",
            borderRadius: "4px",
            border: "3px solid #dc2626",
            mb: 3,
            boxShadow: "0 4px 12px rgba(220, 38, 38, 0.1)",
          }}
        >
          <CardContent sx={{ p: 4 }}>
            {/* Card Title */}
            <Typography
              sx={{
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "#dc2626",
                textAlign: "center",
                fontFamily: "'Georgia', 'Garamond', serif",
                mb: 3,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Select Categories
            </Typography>

            {/* Categories Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                mb: 3,
              }}
            >
              {categories.map((category) => (
                <FormControlLabel
                  key={category.id}
                  control={
                    <Checkbox
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => handleCategoryToggle(category.id)}
                      sx={{
                        color: "#dc2626",
                        "&.Mui-checked": {
                          color: "#dc2626",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "#1a1a1a",
                        fontFamily: "'Georgia', 'Garamond', serif",
                      }}
                    >
                      {category.name}
                    </Typography>
                  }
                />
              ))}
            </Box>

            <Divider sx={{ my: 2, borderColor: "#e8e8e8" }} />

            {/* Select All */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAll}
                  sx={{
                    color: "#dc2626",
                    "&.Mui-checked": {
                      color: "#dc2626",
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "#dc2626",
                    fontFamily: "'Georgia', 'Garamond', serif",
                  }}
                >
                  Select All Categories
                </Typography>
              }
            />
          </CardContent>
        </Card>

        {/* Total Price Card */}
        <Card
          sx={{
            background: "#ffffff",
            borderRadius: "4px",
            border: "1px solid #e8e8e8",
            mb: 3,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#1a1a1a",
                  fontFamily: "'Georgia', 'Garamond', serif",
                }}
              >
                Total Price:
              </Typography>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: "#dc2626",
                  fontFamily: "'Georgia', 'Garamond', serif",
                }}
              >
                ₹{totalPrice}
              </Typography>
            </Box>

            {selectedCategories.length > 0 && (
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "#666666",
                  textAlign: "right",
                  mt: 1,
                  fontFamily: "'Georgia', 'Garamond', serif",
                }}
              >
                {selectedCategories.length} {selectedCategories.length === 1 ? "category" : "categories"} × ₹{pricePerCategory}
              </Typography>
            )}
          </CardContent>
        </Card>

        {/* Confirm Button */}
        <Button
          fullWidth
          onClick={handleConfirmSubscription}
          disabled={selectedCategories.length === 0}
          sx={{
            background: selectedCategories.length > 0 
              ? "#dc2626"
              : "#cccccc",
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "1.2rem",
            textTransform: "none",
            py: 2,
            borderRadius: "4px",
            fontFamily: "'Georgia', 'Garamond', serif",
            mb: 2,
            "&:hover": {
              background: selectedCategories.length > 0
                ? "#991b1b"
                : "#cccccc",
            },
            "&:disabled": {
              color: "#999999",
            },
          }}
        >
          {selectedCategories.length === 0 
            ? "Select Categories to Continue"
            : "Confirm Subscription"}
        </Button>

        {/* Back Button */}
        <Button
          fullWidth
          onClick={() => navigate("/plans")}
          sx={{
            color: "#666666",
            fontWeight: 700,
            textTransform: "none",
            fontSize: "1rem",
            border: "2px solid #e8e8e8",
            py: 1.5,
            borderRadius: "4px",
            background: "#ffffff",
            "&:hover": {
              background: "#f8f8f8",
              borderColor: "#dc2626",
              color: "#dc2626",
            },
          }}
        >
          ← Back to Plans
        </Button>
      </Box>
    </Box>
  );
}
