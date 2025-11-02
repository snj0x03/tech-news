import { ArticleCard } from "./ArticleCard";
import { StartupCard } from "./StartupCard";
import { Article } from "../data/articles";

interface NewsBoardProps {
  articles: Article[];
  currentCategory: string;
  onCategoryClick: (category: string) => void;
}

export function NewsBoard({ articles, currentCategory, onCategoryClick }: NewsBoardProps) {
  return (
    <main className="container-fluid py-4">
      {currentCategory !== 'all' && (
        <div className="mb-4">
          <h2 className="h3 mb-2 text-uppercase fw-bold">
            {articles.find(a => a.category === currentCategory)?.category || currentCategory}
          </h2>
          <p className="text-muted">
            Latest updates and insights in {currentCategory}
          </p>
        </div>
      )}

      <div className="row g-4">
        {articles.map((article) => (
          <div key={article.id} className="col-12 col-md-6 col-xl-4">
            {article.category === 'startups' ? (
              <StartupCard
                article={article}
                onCategoryClick={onCategoryClick}
              />
            ) : (
              <ArticleCard
                article={article}
                onCategoryClick={onCategoryClick}
              />
            )}
          </div>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted fs-5">No articles found in this category.</p>
        </div>
      )}
    </main>
  );
}