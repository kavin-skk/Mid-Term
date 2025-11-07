import React from 'react';
import Header from '../components/layout/Header';
import Ticker from '../components/layout/Ticker';
import Subcategories from '../components/layout/Subcategories';
import Footer from '../components/layout/Footer';
import Ad from '../components/common/Ad';
import LeadArticle from '../components/articles/LeadArticle';
import BreakingNews from '../components/articles/BreakingNews';
import BelowBreakingNews from '../components/articles/BelowBreakingNews';
import ArticlesGrid from '../components/articles/ArticlesGrid';
import EditorsPick from '../components/articles/EditorsPick';
import PopularArticle from '../components/sidebar/PopularArticle';
import LatestTimeline from '../components/sidebar/LatestTimeline';
import MoreNews from '../components/sidebar/MoreNews';
import MoreStories from '../components/sidebar/MoreStories';
import Poll from '../components/sidebar/Poll';
import Trending from '../components/sidebar/Trending';
//import YouMissed from '../components/sidebar/YouMissed';
import Newsletter from '../components/sidebar/Newsletter';
import Opinion from '../components/sections/Opinion';
import Videos from '../components/sections/Videos';
import YouMissed from '../components/sidebar/YouMissed';
import NewsListSection from '../components/sections/NewsListSection';
import Further from '../components/sidebar/Further';
// import YouMissed from '../components/sidebar/YouMissed';
import CompactNews from '../components/sidebar/CompactNews';
import Chatbot from '../components/common/Chatbot';
import { CATEGORIES } from '../data/categories';
import Breakingbreaking from "../components/articles/Breakingbreaking"

const CategoryPage = ({ category = 'politics' }) => {
  const cat = CATEGORIES[category] || CATEGORIES.politics;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Ticker text={cat.ticker} />
      
      <div className="max-w-7xl mx-auto px-4 my-6">
        <Ad size="h-24" colors="bg-gradient-to-r from-blue-100 to-purple-100" />
      </div>

      <Subcategories items={cat.sub} />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-6 py-6">
        {/* LEFT SIDEBAR */}
        <aside className="md:col-span-3 space-y-6">
          <PopularArticle item={cat.popular[0]} catKey={category} catName={cat.name} />
          <Ad size="h-64" colors="bg-gradient-to-br from-green-100 to-blue-100" />
          <MoreNews items={cat.moreNews} />
          <MoreStories />
          <CompactNews items={cat.quickReads} />
           {/* <Ad size="h-64" colors="bg-gradient-to-br from-green-100 to-blue-100" /> */}
        </aside>

        {/* MAIN CONTENT */}
        <main className="md:col-span-6 space-y-8">
          {/* <LeadArticle lead={cat.lead} catName={cat.name} /> */}
          <Breakingbreaking />
          <BreakingNews items={cat.breaking} />
          <BelowBreakingNews items={cat.belowBreaking} />
          <ArticlesGrid articles={cat.articles} catKey={category} />
          <Ad size="h-32" colors="bg-gradient-to-r from-yellow-100 to-orange-100" />
          <EditorsPick items={cat.editorsPick} />
          <Opinion items={cat.opinion} />
          <Videos items={cat.videos} />
          <YouMissed items={cat.missed} />
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="md:col-span-3 space-y-8">
          <LatestTimeline items={cat.latest} />
          <Poll poll={cat.poll} />
          <Trending items={cat.trending} />
          {/* <YouMissed item={cat.missed} /> */}
          <Newsletter />
          <NewsListSection />
           <Ad size="h-64 w-full" colors="bg-gray-100" text="ADVERTISEMENT" />
           <Further items={cat.further} />
           <Ad size="h-64" colors="bg-gradient-to-br from-green-100 to-blue-100" />
            {/* <CompactNews items={cat.quickReads} /> */}
          {/* <YouMissed item={cat.missed} /> */}
        </aside>
      </div>

      
      <Chatbot catName={cat.name} />
      <Footer />
    </div>
  );
};

export default CategoryPage;