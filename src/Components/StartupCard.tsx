import { useNavigate } from 'react-router-dom';
import { Building2, DollarSign, Users, Briefcase } from 'lucide-react';
import { Article, categories } from '../data/articles';

interface StartupCardProps {
  article: Article;
  onCategoryClick: (category: string) => void;
}

export function StartupCard({ article, onCategoryClick }: StartupCardProps) {
  const navigate = useNavigate();
  const categoryColor = categories.find((c) => c.id === article.category)?.color || '#007AFF';
  const categoryName = categories.find((c) => c.id === article.category)?.name || article.category;

  const handleCardClick = () => {
    navigate(`/article/${article.id}`);
  };

  // Extract startup info from title and excerpt
  const extractFunding = () => {
    const match = article.title.match(/\$(\d+(?:\.\d+)?[MBK]?)/);
    return match ? match[0] : null;
  };

  const extractCompanyType = () => {
    if (article.title.toLowerCase().includes('seeks') || article.excerpt.toLowerCase().includes('seeking')) {
      return 'Seeking Funding';
    }
    if (article.title.toLowerCase().includes('raises') || article.title.toLowerCase().includes('secures')) {
      return 'Recently Funded';
    }
    if (article.title.toLowerCase().includes('hiring') || article.excerpt.toLowerCase().includes('recruiting')) {
      return 'Actively Hiring';
    }
    return 'Startup News';
  };

  const isHiring = article.excerpt.toLowerCase().includes('talent') || 
                  article.excerpt.toLowerCase().includes('recruiting') ||
                  article.title.toLowerCase().includes('seeks cto') ||
                  article.title.toLowerCase().includes('hiring');

  const isFunding = article.title.toLowerCase().includes('raises') || 
                   article.title.toLowerCase().includes('secures') ||
                   article.title.toLowerCase().includes('seeks') && article.title.includes('$');

  return (
    <div 
      className="card h-100 border-0 shadow-sm startup-card" 
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
        />
        
        {/* Startup badges overlay */}
        <div className="position-absolute top-0 start-0 p-2">
          {isFunding && (
            <span className="badge bg-success text-white me-1 mb-1">
              <DollarSign size={12} className="me-1" />
              Funding
            </span>
          )}
          {isHiring && (
            <span className="badge bg-info text-white me-1 mb-1">
              <Briefcase size={12} className="me-1" />
              Hiring
            </span>
          )}
        </div>
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

        {/* Startup type indicator */}
        <div className="d-flex align-items-center mb-2">
          <Building2 size={16} className="text-muted me-2" />
          <small className="text-muted fw-semibold">{extractCompanyType()}</small>
          {extractFunding() && (
            <>
              <span className="mx-2 text-muted">•</span>
              <small className="text-success fw-bold">{extractFunding()}</small>
            </>
          )}
        </div>
        
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

        {/* Key highlights for startups */}
        <div className="startup-highlights mb-3">
          {isHiring && (
            <div className="d-flex align-items-center text-info small mb-1">
              <Users size={14} className="me-2" />
              <span>Actively recruiting talent</span>
            </div>
          )}
          {isFunding && (
            <div className="d-flex align-items-center text-success small mb-1">
              <DollarSign size={14} className="me-2" />
              <span>Recent funding activity</span>
            </div>
          )}
        </div>
        
        <div className="d-flex align-items-center justify-content-between text-muted small mt-auto">
          <div>
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime}</span>
          </div>
          <span className="text-primary small fw-semibold">Read More →</span>
        </div>
      </div>
    </div>
  );
}