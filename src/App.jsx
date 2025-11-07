import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Typography from "@mui/material/Typography";
import Navbar from "./components/Navbar";
import SocialFeed from "./components/SocialFeed";
import BreakingNewsSection from "./components/BreakingNewsSection";
import LatestHeadlines from "./components/LatestHeadlines";
import SidebarAdBanner from "./components/SidebarAdBanner";
import StockWidget from "./components/StockWidget";
import LatestTimeline from "./components/LatestTimeline";
import LiveTicker from "./components/LiveTicker";
import TrendingNews from "./components/TrendingNews";
import ExploreMore from "./components/ExploreMore";
import EditorsPicks from "./components/EditorsPicks";
import TopStories from "./components/TopStories";
import LeftColumnAd from "./components/LeftColumnAd";
import StateUpdates from "./components/StateUpdates";
import AdBanner from "./components/AdBanner";
import PopularTags from "./components/PopularTags";
import FactOfTheDay from "./components/FactOfTheDay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import SubscriptionForm from "./pages/SubscriptionForm";
import GoogleSignIn from "./components/GoogleSignIn";
import TrendingVideos from "./components/TrendingVideos";
import OpinionAnalysis from "./components/MustReadToday";
import QuickRead from "./components/QuickRead";
import PhotoStories from "./components/PhotoStories";


function MainPageContent() {
  return (
    <div
      style={{
        backgroundColor: "#f8f8f8",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* 1. NAVBAR - Fixed at top */}
      <Navbar />

      {/* 2. LIVE TICKER - Scrolls with page */}
      <LiveTicker />

      {/* 3. ADVERTISEMENT PLACEHOLDER - Space for backend */}
      <div style={{ marginTop: 170 }}>
        {/* 🔸 Full-width Top Ad Banner - Professional Style */}
{/* Advertisement */}
<AdBanner />

        {/* 🔹 MAIN 3-COLUMN LAYOUT: 18% | 64% | 18% */}
        {/* 🔹 MAIN 3-COLUMN LAYOUT: 18% | 64% | 18% */}
        <main
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            marginTop: 32,
            paddingBottom: 50,
            paddingLeft: 12,
            paddingRight: 12,
          }}
        >
          {/* Flexbox Container for precise width control */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "flex-start",
            }}
          >
            {/* 🔸 LEFT COLUMN - Exactly 18% */}
            <div
              style={{
                width: "18%",
                minWidth: "220px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                borderRight: "2px solid #e8e8e8",
                paddingRight: "24px",
              }}
            >
              <LatestHeadlines />
              <SidebarAdBanner />
              <TrendingNews />
              <TrendingVideos />
              <LeftColumnAd />
              <PopularTags />

            </div>

            {/* 🔹 CENTER COLUMN - Exactly 64% */}
            <div
              style={{
                width: "64%",
                flex: "1",
                display: "flex",
                flexDirection: "column",

              }}
            >
              <BreakingNewsSection />
              
              <FactOfTheDay />
            </div>
<Box sx={{ height: "40px" }} />
            {/* 🔸 RIGHT COLUMN - Exactly 18% */}
            <div
              style={{
                width: "18%",
                minWidth: "220px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                borderLeft: "2px solid #e8e8e8",
                paddingLeft: "24px",
              }}
            >
              <StockWidget />
              <LatestTimeline />
              <TopStories />
              <QuickRead />
              <SocialFeed />
            </div>
          </div>
        </main>

        {/* 🌐 FULL-WIDTH SECTIONS */}

        {/* ExploreMore Section */}
        <Box
          sx={{
            mb: 4,
            background: "#ffffff",
            borderTop: "3px solid #dc2626",
            borderBottom: "1px solid #e8e8e8",
            width: "100%",
            mt: 4,
          }}
        >
          <ExploreMore />
        </Box>
<Box sx={{ height: "40px" }} />
        {/* Editors Picks Section */}
        <Box
          sx={{
            mb: 4,
            background: "#ffffff",
            borderTop: "3px solid #dc2626",
            borderBottom: "1px solid #e8e8e8",
            width: "100%",
          }}
        >
          <EditorsPicks />
        </Box>

        {/* State Updates Section */}
        <Box
          sx={{
            mb: 4,
            background: "#ffffff",
            borderTop: "3px solid #dc2626",
            borderBottom: "1px solid #e8e8e8",
            width: "100%",
          }}
        >
          <StateUpdates />
        </Box>
          
        {/* Footer */}
        <Box
          sx={{
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTop: "3px solid #dc2626",
            background: "#ffffff",
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#999999",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontSize: "0.75rem",
            }}
          >
            © 2025 MID News. All Rights Reserved.
          </Typography>
         
        </Box>
         <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home/news page */}
        <Route path="/" element={<MainPageContent />} />
        {/* Subscription pages */}
        <Route path="/plans" element={<SubscriptionPlans />} />
        <Route path="/subscribe" element={<SubscriptionForm />} />
        <Route path="/signin" element={<GoogleSignIn />} />
      </Routes>
    </Router>
  );
}
