export const CATEGORIES = {
  politics: {
    name: "Politics", 
    sub: ["National", "Tamil Nadu", "Bihar", "UP", "International","cities"],
    ticker: "Parliament Debate Live | Opposition Walkout | TN CM Speech | Bihar Election Updates",
    lead: { 
      id: 1, 
      title: "Opposition Walks Out Over Controversial Tax Bill", 
      img: "parliament", 
      author: "J. Smith", 
      time: "2h", 
      views: "8.1k",
      summary: "Major political showdown as opposition parties stage walkout during crucial tax reform debate in parliament."
    },
   breaking: [
  { 
    id: 11, 
    title: "Opposition Stages Walkout Over New Tax Bill", 
    summary: "Major political showdown in parliament as opposition parties protest against proposed tax reforms.",
    img: "parliament",
    author: "Rajesh Kumar",
    time: "15m"
  },
  { 
    id: 12, 
    title: "TN CM Announces Major Infrastructure Push", 
    summary: "State government allocates ₹5000 crore for road and bridge development across Tamil Nadu.",
    img: "infrastructure",
    author: "Priya Sharma",
    time: "30m"
  },
  { 
    id: 13, 
    title: "Supreme Court Delivers Landmark Verdict on Privacy Laws", 
    summary: "Historic ruling strengthens digital privacy rights and data protection measures.",
    img: "court",
    author: "Anil Verma",
    time: "45m"
  },
  { 
    id: 14, 
    title: "Election Commission Announces Bihar Poll Dates", 
    summary: "Three-phase polling scheduled for November; results expected by December 5th.",
    img: "election",
    author: "Meera Patel",
    time: "1h"
  }
],
    belowBreaking: [
      { id: 21, title: "Yashasvi Jaiswal sends strong message to Australia ahead of Border-Gavaskar Trophy", img: "cricket", time: "2h" },
      { id: 22, title: "IHPL drama: DDCA sacks Delhi chief junior selector for alleged age fraud", img: "cricket", time: "3h" },
      { id: 23, title: "Smriti Mandhana loses top spot! Laura Wolvaardt becomes No. 1 in ICC Women's ODI batting rankings", img: "cricket", time: "4h" },
      { id: 24, title: "Yaraana Down Under! Shubman Gill and Abhishek Sharma twin their return to whites", img: "cricket", time: "5h" },
      { id: 25, title: "On this day in 2001: Inaugural Champions Trophy gets underway in Kenya", img: "cricket", time: "6h" },
      { id: 26, title: "Mumbai Indians picks a new captain; Washington Sundar to replace Pandya", img: "cricket", time: "7h" }
    ],
    articles: [
      { id: 2, title: "TN CM Announces Free Power Scheme", summary: "Free electricity for households up to 100 units; scheme starts next month.", time: "3h", img: "electricity" },
      { id: 3, title: "Bihar Election Dates Announced", summary: "Polling in 3 phases starting Nov 15; results on Dec 5.", time: "4h", img: "election" },
      { id: 4, title: "UP Budget 2025 Passed", summary: "₹7.5 lakh crore budget with focus on infrastructure and rural jobs.", time: "5h", img: "budget" },
      { id: 5, title: "Supreme Court Verdict on Land Rights", summary: "Historic ruling strengthens tribal land ownership across India.", time: "6h", img: "court" }
    ],
    popular: [
      { 
        title: "PM Modi Announces New Economic Package for Farmers", 
        summary: "A ₹2 lakh crore relief fund will be rolled out over the next 5 years, focusing on irrigation, crop insurance, and minimum support prices.", 
        time: "1h" 
      }
    ],
    latest: [
      { time: "5:30 PM", title: "RBI announces new digital currency regulation", summary: "New rules to secure fintech and curb fraud." },
      { time: "4:45 PM", title: "Parliament passes Climate Bill", summary: "50% renewable energy mandate by 2030." },
      { time: "3:20 PM", title: "Delhi CM meets PM on pollution", summary: "Emergency talks to tackle rising AQI." }
    ],
    moreNews: [
     { 
    title: "GST Council Meeting Concludes", 
    summary: "New tax slabs announced for electronics and automobiles.", 
    image: "gst-image-url",
    category: "ECONOMY",
    time: "7h" 
  },
  { 
    title: "Railway Budget Increased by 15%", 
    summary: "Focus on high-speed rail and safety upgrades.", 
    image: "railway-image-url",
    category: "TRANSPORT",
    time: "8h" 
  },
  { 
    title: "Education Policy Reform Announced", 
    summary: "New curriculum framework for schools nationwide.", 
    image: "education-image-url",
    category: "EDUCATION",
    time: "9h" 
  },
      { title: "Healthcare Scheme Extended", summary: "Free treatment coverage increased to ₹10 lakhs.", time: "10h" },
      { title: "Digital India Mission Progress", summary: "90% villages now connected with broadband.", time: "11h" },
      { title: "Green Energy Target Revised", summary: "India aims for 70% renewable by 2035.", time: "12h" }
    ],
    trending: [
      { 
        title: "Kranti Gaud recreates Hardik Pandya's iconic moment; po...", 
        summary: "Seven cut out of my face': Michael Clarke reveals long...", 
        img: "cricket"
      },
      { 
        title: "IPL trade talk: What is preventing a KL Rahul move...", 
        summary: "'Hope you are ready...': Jemimah Rodrigues reminds...", 
        img: "ipl"
      },
      { 
        title: "'Gutted!': R Ashwin ruled out of Australia's BBL due to kne...", 
        summary: "'We got just ₹1,000 a game': Mithali Raj's shocking...", 
        img: "ashwin"
      }
    ],
    editorsPick: [
      { 
        title: "The Future of Indian Democracy: A Critical Analysis", 
        summary: "An in-depth analysis of electoral reforms and their impact on grassroots politics. Experts weigh in on what changes are needed for a more transparent system.", 
        img: "democracy", 
        time: "5h",
        author: "Dr. Rajesh Kumar"
      },
      { 
        title: "Climate Crisis: How State Governments Are Leading the Charge", 
        summary: "State governments are implementing innovative solutions against climate change despite federal challenges. From solar initiatives to water conservation.", 
        img: "climate", 
        time: "6h",
        author: "Priya Sharma"
      }
    ],
    opinion: [
      {
        title: "Why India's Youth Need Political Representation",
        excerpt: "The average age of Indian voters is decreasing, yet our parliament remains dominated by older generations. It's time for change.",
        author: "Arun Malhotra",
        designation: "Political Analyst",
        avatar: "https://i.pravatar.cc/150?img=12"
      }
    ],
    videos: [
      {
        title: "Live: Parliament Session Highlights",
        duration: "12:45",
        views: "125K",
        img: "parliament"
      },
      {
        title: "Expert Panel Discusses Tax Reform Impact",
        duration: "18:20",
        views: "89K",
        img: "debate"
      }
      
    ],
    poll: { 
      q: "Who Will Win Delhi Elections?", 
      o: ["BJP (62%)", "AAP (28%)", "Others (10%)"] 
    },

    further: [
  { title: "New Story 1", summary: "Summary here...", time: "1h" },
  { title: "Expert Panel Discusses Tax Reform Impact", summary: "NASA moon mission doubts raised by international scientists", time: "2h" },
  { title: "New Story 3", summary: "Summary here...", time: "3h" }
],

quickReads: [
  { 
    title: "Breaking: Supreme Court ruling on digital privacy", 
    summary: "Court mandates stricter data protection laws for tech companies operating in India.",
    time: "30m" 
  },
  { 
    title: "Stock market hits new high amid economic recovery", 
    summary: "Sensex crosses 75,000 mark as investor confidence grows in manufacturing sector.",
    time: "1h" 
  },
  { 
    title: "New metro line inaugurated in Chennai", 
    summary: "Phase 2 extension connects airport to city center, reducing travel time by 40 minutes.",
    time: "2h" 
  },
  { 
    title: "Government announces new education policy reforms", 
    summary: "Focus on vocational training and digital literacy in rural schools across India.",
    time: "3h" 
  },
  { 
    title: "Renewable energy sector sees record investment", 
    summary: "Solar and wind projects attract ₹50,000 crore in Q3, surpassing expectations.",
    time: "4h" 
  },
  { 
    title: "Healthcare initiative targets rural areas", 
    summary: "Mobile medical units deployed to 500 villages for free diagnostic services.",
    time: "5h" 
  }
],
missed: [
  { 
    title: "Major Infrastructure Project Unveiled in Mumbai", 
    summary: "New metro line to connect suburbs with business district",
    time: "8h",
    img: "infrastructure"
  },
  { 
    title: "Tech Giants Announce AI Collaboration Initiative", 
    summary: "Partnership aims to advance machine learning research",
    time: "10h",
    img: "technology"
  },
  { 
    title: "Historic Trade Agreement Signed with EU", 
    summary: "Deal expected to boost exports by 30% over next five years",
    time: "12h",
    img: "trade"
  }
]
  }
  
  
};