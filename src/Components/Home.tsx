import { useAppContext } from '../context/AppContext';
import { Hero } from './Hero';
import { NewsBoard } from './NewsBoard';
import { Sidebar } from './Sidebar';
import { StartupsPage } from './StartupsPage';
import { articles, trendingArticles, editorsPicks } from '../data/articles';

export function Home() {
  const { currentCategory, handleCategoryChange } = useAppContext();

  // If startups category is selected, show the specialized startups page
  if (currentCategory === 'startups') {
    return <StartupsPage />;
  }

  // Filter articles based on category
  const filteredArticles = currentCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === currentCategory);

  // Get featured article
  const featuredArticle = articles.find(article => article.featured) || articles[0];

  return (
    <>
      {/* Hero Section - Only show on home page */}
      {currentCategory === 'all' && (
        <Hero 
          article={featuredArticle} 
          onCategoryChange={handleCategoryChange} 
        />
      )}

      {/* Main Content */}
      <div className="container-fluid py-4">
        <div className="row">
          {/* Article Grid */}
          <main className={`${currentCategory === 'all' ? 'col-lg-8' : 'col-12'}`}>
            <NewsBoard
              articles={filteredArticles}
              currentCategory={currentCategory}
              onCategoryClick={handleCategoryChange}
            />
          </main>

          {/* Sidebar - Only on home page */}
          {currentCategory === 'all' && (
            <aside className="col-lg-4">
              <Sidebar
                trendingArticles={trendingArticles}
                editorsPicks={editorsPicks}
              />
            </aside>
          )}
        </div>
      </div>
    </>
  );
}