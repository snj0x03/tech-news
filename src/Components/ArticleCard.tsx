import { useNavigate } from 'react-router-dom';
import { Article, categories } from '../data/articles';

interface ArticleCardProps {
  article: Article;
  onCategoryClick: (category: string) => void;
}

export function ArticleCard({ article, onCategoryClick }: ArticleCardProps) {
  const navigate = useNavigate();
  const categoryColor = categories.find((c) => c.id === article.category)?.color || '#007AFF';
  const categoryName = categories.find((c) => c.id === article.category)?.name || article.category;

  const handleCardClick = () => {
    console.log('Article card clicked, navigating to:', `/article/${article.id}`);
    navigate(`/article/${article.id}`);
    navigate(0);
  };

  return (
    <div 
      className="card h-100 border-0 shadow-sm" 
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
        <img
          src={article.image}
          alt={article.title}
          className="card-img-top w-100 h-100"
          style={{ 
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>
      
      <div className="card-body d-flex flex-column">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCategoryClick(article.category);
          }}
          className="btn btn-sm text-white text-uppercase fw-bold mb-2 align-self-start"
          style={{ 
            backgroundColor: categoryColor,
            fontSize: '0.75rem',
            letterSpacing: '0.05em'
          }}
        >
          {categoryName}
        </button>
        
        <h5 className="card-title mb-2 flex-grow-1">
          {article.title}
        </h5>
        
        <p className="card-text text-muted mb-3" style={{
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          {article.excerpt}
        </p>
        
        <div className="d-flex align-items-center text-muted small mt-auto">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </div>
  );
}