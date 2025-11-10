import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // ← Added useNavigate

// ✅ Article components (from components/components/articles/)
import LeadArticle from '../components/components/articles/LeadArticle';
import BreakingNews from '../components/components/articles/BreakingNews';
import BelowBreakingNews from '../components/components/articles/BelowBreakingNews';
import ArticlesGrid from '../components/components/articles/ArticlesGrid';
import EditorsPick from '../components/components/articles/EditorsPick';
import Breakingbreaking from '../components/components/articles/Breakingbreaking';

// ✅ Sidebar components (from components/components/sidebar/)
import PopularArticle from '../components/components/sidebar/PopularArticle';
import LatestTimeline from '../components/components/sidebar/LatestTimeline';
import MoreNews from '../components/components/sidebar/MoreNews';
import MoreStories from '../components/components/sidebar/MoreStories';
import Poll from '../components/components/sidebar/Poll';
import Trending from '../components/components/sidebar/Trending';
import Newsletter from '../components/components/sidebar/Newsletter';
import YouMissed from '../components/components/sidebar/YouMissed';
import Further from '../components/components/sidebar/Further';
import CompactNews from '../components/components/sidebar/CompactNews';

// ✅ Section components (from components/components/sections/)
import Opinion from '../components/components/sections/Opinion';
import Videos from '../components/components/sections/Videos';
import NewsListSection from '../components/components/sections/NewsListSection';

// ✅ Layout components (from components/components/layout/)
import Subcategories from '../components/components/layout/Subcategories';

// ✅ Common components (from components/components/common/)
import Ad from '../components/components/common/Ad';
import Chatbot from '../components/components/common/Chatbot';

// ✅ Data
import { CATEGORIES } from '../data/categories';

const CategoryPage = () => {
  const { category } = useParams(); // Gets 'politics', 'sports', etc from URL
  const navigate = useNavigate(); // ← ADD THIS for navigation
  
  // Map the category to your CATEGORIES data
  const cat = CATEGORIES[category] || CATEGORIES.politics;

  return (
    <div className="bg-gray-50 min-h-screen" style={{ paddingTop: '120px' }}>
      <div className="max-w-7xl mx-auto px-4 my-6">
        <Ad size="h-24" colors="bg-gradient-to-r from-blue-100 to-purple-100" />
      </div>

      <Subcategories items={cat.sub} />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-6 py-6">
        {/* LEFT SIDEBAR */}
        <aside className="md:col-span-3 space-y-6">
          <PopularArticle 
            item={cat.popular?.[0]} 
            catKey={category} 
            catName={cat.name}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <Ad size="h-64" colors="bg-gradient-to-br from-green-100 to-blue-100" />
          <MoreNews 
            items={cat.moreNews}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <MoreStories 
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <CompactNews 
            items={cat.quickReads}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
        </aside>

        {/* MAIN CONTENT */}
        <main className="md:col-span-6 space-y-8">
          <LeadArticle 
            lead={cat.lead} 
            catName={cat.name}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <BreakingNews 
            items={cat.breaking}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <BelowBreakingNews 
            items={cat.belowBreaking}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <ArticlesGrid 
            articles={cat.articles} 
            catKey={category}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <Ad size="h-32" colors="bg-gradient-to-r from-yellow-100 to-orange-100" />
          <EditorsPick 
            items={cat.editorsPick}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <Opinion 
            items={cat.opinion}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <Videos 
            items={cat.videos}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <YouMissed 
            items={cat.missed}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="md:col-span-3 space-y-8">
          <LatestTimeline 
            items={cat.latest}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <Poll poll={cat.poll} />
          <Trending 
            items={cat.trending}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <Newsletter />
          <NewsListSection 
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <Ad size="h-64 w-full" colors="bg-gray-100" text="ADVERTISEMENT" />
          <Further 
            items={cat.further}
            onArticleClick={(id) => navigate(`/news/${id}`)} // ← Pass navigation function
          />
          <Ad size="h-64" colors="bg-gradient-to-br from-green-100 to-blue-100" />
        </aside>
      </div>

      <Chatbot catName={cat.name} />
    </div>
  );
};

export default CategoryPage;