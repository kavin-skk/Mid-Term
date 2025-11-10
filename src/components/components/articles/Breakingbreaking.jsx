import React, { useEffect, useState } from "react";
import LeadArticle from "./LeadArticle";
 
export default function Breakingbreaking() {
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchBreakingNews = async () => {
      try {
        // fetch your Lambda API
        const res = await fetch("https://wo4afzvewc.execute-api.us-east-2.amazonaws.com/prod/fetch/1");
        if (!res.ok) throw new Error("Failed to fetch breaking news");
        const data = await res.json();
  
        // map API response to LeadArticle format
        setLead({
          id: data.RdsId,
          title: data.Title,
          summary: data.Summary,
          author: data.AuthorId || "Editorial Team",
          time: data.PublishedTime
            ? new Date(data.PublishedTime).toLocaleString()
            : "Just now",
          img:  data.AdImageUrl || data.AdImageURL || data.ImageUrl || "https://newsorg-media-uploads.s3.amazonaws.com/ads/Sports/ad-0552829a-2d43-4386-9c5d-62bf637b899a.jpeg",
        });
        console.log("AdImageUrl:", data.AdImageUrl);
 
        setLoading(false);
      } catch (err) {
        console.error("Error fetching breaking news:", err);
        setLoading(false);
      }
    };
 
    fetchBreakingNews();
  }, []);
 
  if (loading) return <p className="text-center text-gray-500">Loading breaking news...</p>;
  if (!lead) return <p className="text-center text-gray-500">No breaking news available</p>;
 
  return <LeadArticle lead={lead} catName="Breaking" />;
}