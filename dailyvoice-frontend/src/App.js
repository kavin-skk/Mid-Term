import React from 'react';
import CategoryPage from './pages/CategoryPage';
import './index.css';

function App() {
  // Get category from URL query params
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('cat') || 'politics';

  return <CategoryPage category={category} />;
}

export default App;