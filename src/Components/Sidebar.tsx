import { useNavigate } from 'react-router-dom';
import { Article } from '../data/articles';

interface SidebarProps {
  trendingArticles: Article[];
  editorsPicks: Article[];
}

export function Sidebar({ trendingArticles, editorsPicks }: SidebarProps) {
  const navigate = useNavigate();

  const renderArticleItem = (article: Article) => (
    <div 
      key={article.id} 
      className="d-flex mb-3" 
      onClick={() => navigate(`/article/${article.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="flex-shrink-0 me-3">
        <img
          src={article.image}
          alt={article.title}
          className="rounded"
          style={{ 
            width: '60px', 
            height: '60px', 
            objectFit: 'cover' 
          }}
        />
      </div>
      <div className="flex-grow-1">
        <h6 className="mb-1 lh-sm" style={{
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          fontSize: '0.9rem'
        }}>
          {article.title}
        </h6>
        <small className="text-muted">
          {article.author} • {article.readTime}
        </small>
      </div>
    </div>
  );

  return (
    <div className="sticky-top" style={{ top: '120px' }}>
      {/* Trending Section */}
      <div className="card mb-4">
        <div className="card-header bg-primary text-white">
          <h5 className="card-title mb-0 fw-bold">🔥 Trending Now</h5>
        </div>
        <div className="card-body">
          {trendingArticles.map((article) => renderArticleItem(article))}
        </div>
      </div>

      {/* Startup Opportunities */}
      <div className="card mb-4">
        <div className="card-header text-white" style={{ backgroundColor: '#FF6B6B' }}>
          <h5 className="card-title mb-0 fw-bold">🚀 Startup Hub</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <h6 className="fw-bold mb-2">💼 Active Hiring</h6>
            <p className="small text-muted mb-2">2,300+ open positions at tech startups</p>
            <button className="btn btn-sm btn-outline-info w-100">View Jobs</button>
          </div>
          <hr />
          <div className="mb-3">
            <h6 className="fw-bold mb-2">💰 Seeking Funding</h6>
            <p className="small text-muted mb-2">150+ startups looking for investors</p>
            <button className="btn btn-sm btn-outline-success w-100">Explore</button>
          </div>
          <hr />
          <div>
            <h6 className="fw-bold mb-2">🎯 Success Stories</h6>
            <p className="small text-muted mb-2">Learn from funded startups</p>
            <button className="btn btn-sm btn-outline-warning w-100">Read More</button>
          </div>
        </div>
      </div>

      {/* Editor's Picks Section */}
      <div className="card">
        <div className="card-header bg-success text-white">
          <h5 className="card-title mb-0 fw-bold">✨ Editor's Picks</h5>
        </div>
        <div className="card-body">
          {editorsPicks.map((article) => renderArticleItem(article))}
        </div>
      </div>
    </div>
  );
}