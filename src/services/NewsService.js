import axios from 'axios';

const NEWS_API_KEY = 'a4d46c30312f4af3bed4152f318f8c01'; // Replace with your free key from newsapi.org
const NEWS_API_URL = 'https://newsapi.org/v2';

// Professional fallback sample data (Times of India style)
const SAMPLE_NEWS = {
  articles: [
    {
      id: 1,
      title: 'Breaking: US Supreme Court Limits Executive Trade Powers',
      description: 'In a landmark ruling, the US top court restricts the President\'s ability to make unilateral trade decisions.',
      urlToImage: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=800&h=450&fit=crop',
      source: { name: 'BBC News' },
      publishedAt: new Date().toISOString(),
      category: 'World',
      url: 'https://example.com/news1',
    },
    {
      id: 2,
      title: 'Tech Giants Face AI Regulation Challenges',
      description: 'Global leaders agree on new guidelines for responsible AI use in technology sector.',
      urlToImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
      source: { name: 'TechCrunch' },
      publishedAt: new Date(Date.now() - 3600000).toISOString(),
      category: 'Technology',
      url: 'https://example.com/news2',
    },
    {
      id: 3,
      title: 'India Wins Cricket Series Against Australia',
      description: 'India secures semifinal spot after a thrilling victory against Australia in World Cup.',
      urlToImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop',
      source: { name: 'ESPN' },
      publishedAt: new Date(Date.now() - 7200000).toISOString(),
      category: 'Sports',
      url: 'https://example.com/news3',
    },
    {
      id: 4,
      title: 'Global Climate Summit Shows Progress',
      description: 'Nations commit to accelerated carbon reduction targets at latest UN climate summit.',
      urlToImage: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=450&fit=crop',
      source: { name: 'Reuters' },
      publishedAt: new Date(Date.now() - 10800000).toISOString(),
      category: 'World',
      url: 'https://example.com/news4',
    },
    {
      id: 5,
      title: 'Economic Outlook Brightens for Asia',
      description: 'IMF projects strong growth rebound led by India and Southeast Asia.',
      urlToImage: 'https://images.unsplash.com/photo-1526628652108-aa09b6003ae3?w=800&h=450&fit=crop',
      source: { name: 'Financial Times' },
      publishedAt: new Date(Date.now() - 14400000).toISOString(),
      category: 'Economy',
      url: 'https://example.com/news5',
    },
    {
      id: 6,
      title: 'New AI Model Breaks Records in Medical Diagnosis',
      description: 'Revolutionary AI system achieves 99% accuracy in detecting rare diseases.',
      urlToImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop',
      source: { name: 'Nature' },
      publishedAt: new Date(Date.now() - 18000000).toISOString(),
      category: 'Technology',
      url: 'https://example.com/news6',
    },
    {
      id: 7,
      title: 'Bollywood Box Office Records New Heights',
      description: 'Latest blockbuster film breaks all-time opening weekend records.',
      urlToImage: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&h=450&fit=crop',
      source: { name: 'Variety' },
      publishedAt: new Date(Date.now() - 21600000).toISOString(),
      category: 'Entertainment',
      url: 'https://example.com/news7',
    },
    {
      id: 8,
      title: 'Education Technology Transforms Learning',
      description: 'New platform provides personalized learning experience to millions worldwide.',
      urlToImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=450&fit=crop',
      source: { name: 'EdTech Today' },
      publishedAt: new Date(Date.now() - 25200000).toISOString(),
      category: 'Education',
      url: 'https://example.com/news8',
    },
  ]
};

class NewsService {
  // Get breaking news
  async getBreakingNews() {
    try {
      if (NEWS_API_KEY === 'demo') {
        return SAMPLE_NEWS.articles.slice(0, 1);
      }
      const response = await axios.get(`${NEWS_API_URL}/top-headlines`, {
        params: {
          apiKey: NEWS_API_KEY,
          country: 'us',
          pageSize: 1,
        }
      });
      return response.data.articles;
    } catch (error) {
      console.log('Using sample breaking news');
      return SAMPLE_NEWS.articles.slice(0, 1);
    }
  }

  // Get news by category
  async getNewsByCategory(category) {
    try {
      if (NEWS_API_KEY === 'demo') {
        return SAMPLE_NEWS.articles.filter(
          (article) => article.category.toLowerCase() === category.toLowerCase()
        );
      }
      const response = await axios.get(`${NEWS_API_URL}/top-headlines`, {
        params: {
          apiKey: NEWS_API_KEY,
          category: category.toLowerCase(),
          pageSize: 6,
        }
      });
      return response.data.articles;
    } catch (error) {
      console.log(`Using sample ${category} news`);
      return SAMPLE_NEWS.articles.filter(
        (article) => article.category.toLowerCase() === category.toLowerCase()
      );
    }
  }

  // Get all news
  async getAllNews() {
    try {
      if (NEWS_API_KEY === 'demo') {
        return SAMPLE_NEWS.articles;
      }
      const response = await axios.get(`${NEWS_API_URL}/top-headlines`, {
        params: {
          apiKey: NEWS_API_KEY,
          country: 'us',
          pageSize: 20,
        }
      });
      return response.data.articles;
    } catch (error) {
      console.log('Using sample news');
      return SAMPLE_NEWS.articles;
    }
  }

  // Search news
  async searchNews(query) {
    try {
      if (NEWS_API_KEY === 'demo') {
        return SAMPLE_NEWS.articles.filter((article) =>
          article.title.toLowerCase().includes(query.toLowerCase())
        );
      }
      const response = await axios.get(`${NEWS_API_URL}/everything`, {
        params: {
          apiKey: NEWS_API_KEY,
          q: query,
          pageSize: 10,
        }
      });
      return response.data.articles;
    } catch (error) {
      console.log('Search failed, using sample data');
      return SAMPLE_NEWS.articles;
    }
  }
}

export default new NewsService();
