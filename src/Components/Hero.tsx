import { useNavigate } from 'react-router-dom';
import { Article, categories } from '../data/articles';

interface HeroProps {
  article: Article;
  onCategoryChange: (category: string) => void;
}

export function Hero({ article, onCategoryChange }: HeroProps) {
  const navigate = useNavigate();
  const categoryColor = categories.find((c) => c.id === article.category)?.color || '#007AFF';
  const categoryName = categories.find((c) => c.id === article.category)?.name || article.category;

  const handleHeroClick = () => {
    navigate(`/article/${article.id}`);
    navigate(0);
  };

  return (
    <section 
      className="position-relative overflow-hidden" 
      style={{ height: '60vh', minHeight: '400px', cursor: 'pointer' }}
      onClick={handleHeroClick}
    >
      {/* Background Image */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `url(${article.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}
      ></div>
      
      {/* Content Overlay */}
      <div className="position-absolute w-100 h-100 d-flex align-items-center" style={{ zIndex: 2 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-6">
              <button
                onClick={() => onCategoryChange(article.category)}
                className="btn btn-sm text-white text-uppercase fw-bold mb-3"
                style={{ 
                  backgroundColor: categoryColor,
                  fontSize: '0.825rem',
                  letterSpacing: '0.1em'
                }}
              >
                {categoryName}
              </button>
              
              <h1 className="display-4 fw-bold text-white mb-4 lh-sm" style={{fontSize: '1.75rem'}}>
                {article.title}
              </h1>
              
              <p className="lead text-white-50 mb-4">
                {article.excerpt}
              </p>
              
              <div className="d-flex align-items-center text-white-50">
                <span className="fw-semibold">{article.author}</span>
                <span className="mx-3">•</span>
                <span>{article.date}</span>
                <span className="mx-3">•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
          zIndex: 1
        }}
      ></div>
    </section>
  );
}