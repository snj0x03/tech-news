import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Heart } from 'lucide-react';
import { articles, categories } from '../data/articles';
import { useState } from 'react';

export function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  console.log('ArticleDetail - ID from params:', id);
  console.log('ArticleDetail - Articles available:', articles.length);
  
  const article = articles.find(a => a.id === id);
  console.log('ArticleDetail - Found article:', !!article);
  
  if (!article) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>Article not found</h2>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => navigate('/')}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const category = categories.find(cat => cat.id === article.category);
  const relatedArticles = articles.filter(a => 
    a.category === article.category && a.id !== article.id
  ).slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Article Header */}
          <article className="mb-5">
            {/* Category Badge */}
            {category && (
              <span 
                className="badge rounded-pill px-3 py-2 mb-3"
                style={{ 
                  backgroundColor: category.color + '20', 
                  color: category.color,
                  border: `1px solid ${category.color}40`
                }}
              >
                {category.name}
              </span>
            )}

            {/* Title */}
            <h1 className="display-5 fw-bold mb-4 lh-base">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="lead text-muted mb-4">
              {article.excerpt}
            </p>

            {/* Meta Information */}
            <div className="d-flex flex-wrap align-items-center gap-4 mb-4 text-muted">
              <div className="d-flex align-items-center">
                <User size={16} className="me-2" />
                <span>{article.author}</span>
              </div>
              <div className="d-flex align-items-center">
                <Calendar size={16} className="me-2" />
                <span>{article.date}</span>
              </div>
              <div className="d-flex align-items-center">
                <Clock size={16} className="me-2" />
                <span>{article.readTime} read</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-2 mb-4">
              <button 
                className={`btn ${isLiked ? 'btn-danger' : 'btn-outline-danger'} btn-sm`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart size={16} className={isLiked ? 'me-2' : 'me-2'} fill={isLiked ? 'currentColor' : 'none'} />
                Like
              </button>
              <button 
                className={`btn ${isBookmarked ? 'btn-warning' : 'btn-outline-warning'} btn-sm`}
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark size={16} className="me-2" fill={isBookmarked ? 'currentColor' : 'none'} />
                Bookmark
              </button>
              <button 
                className="btn btn-outline-secondary btn-sm"
                onClick={handleShare}
              >
                <Share2 size={16} className="me-2" />
                Share
              </button>
            </div>

            {/* Article Image */}
            <div className="mb-5">
              <img 
                src={article.image} 
                alt={article.title}
                className="img-fluid rounded-3 shadow-lg w-100"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>

            {/* Article Content */}
            <div className="article-content">
              <div className="row">
                <div className="col-12">
                  <div className="fs-5 lh-lg">
                    {article.content ? (
                      <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    ) : (
                      <>
                        <p className="mb-4">
                          In today's rapidly evolving technological landscape, the intersection of artificial intelligence 
                          and creative industries represents one of the most fascinating developments of our time. As neural 
                          networks become increasingly sophisticated, they're not just changing how we process information—they're 
                          fundamentally reshaping how we create, design, and innovate.
                        </p>
                        
                        <h3 className="h4 fw-bold mt-5 mb-3">The Creative Revolution</h3>
                        <p className="mb-4">
                          The emergence of generative AI models has democratized creative processes that were once the exclusive 
                          domain of highly skilled professionals. From generating stunning visual artwork to composing music and 
                          writing code, AI is becoming an indispensable creative partner rather than a replacement for human creativity.
                        </p>
                        
                        <p className="mb-4">
                          This technological shift is particularly evident in industries such as graphic design, content creation, 
                          and software development. Companies are increasingly integrating AI-powered tools into their workflows, 
                          resulting in unprecedented levels of productivity and creative output.
                        </p>
                        
                        <h3 className="h4 fw-bold mt-5 mb-3">Impact on Traditional Workflows</h3>
                        <p className="mb-4">
                          The integration of AI into creative workflows isn't just about automation—it's about augmentation. 
                          Professional designers now use AI to generate initial concepts, explore variations, and overcome 
                          creative blocks. Writers employ AI assistants to brainstorm ideas, refine prose, and even help 
                          with research and fact-checking.
                        </p>
                        
                        <div className="alert alert-info mt-4 mb-4">
                          <h5 className="alert-heading">Key Insight</h5>
                          <p className="mb-0">
                            The most successful implementations of AI in creative industries focus on human-AI collaboration 
                            rather than replacement, leading to enhanced creativity and productivity.
                          </p>
                        </div>
                        
                        <h3 className="h4 fw-bold mt-5 mb-3">Looking Ahead</h3>
                        <p className="mb-4">
                          As we move forward, the relationship between AI and human creativity will continue to evolve. 
                          The challenge lies not in competing with AI, but in learning to work alongside it effectively. 
                          The future belongs to those who can harness the power of AI while maintaining the uniquely 
                          human elements of creativity, emotion, and cultural understanding.
                        </p>
                        
                        <p className="mb-4">
                          The next generation of creative professionals will be those who understand both the capabilities 
                          and limitations of AI, using these tools to push the boundaries of what's possible while 
                          preserving the human touch that makes creative work truly meaningful.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-5 pt-5 border-top">
              <h3 className="h4 mb-4">Related Articles</h3>
              <div className="row">
                {relatedArticles.map((relatedArticle) => (
                  <div key={relatedArticle.id} className="col-md-4 mb-4">
                    <div 
                      className="card h-100 border-0 shadow-sm cursor-pointer"
                      onClick={() => navigate(`/article/${relatedArticle.id}`)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img 
                        src={relatedArticle.image} 
                        className="card-img-top" 
                        alt={relatedArticle.title}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <h6 className="card-title">{relatedArticle.title}</h6>
                        <p className="card-text text-muted small">
                          {relatedArticle.excerpt.substring(0, 100)}...
                        </p>
                        <div className="d-flex justify-content-between align-items-center text-muted small">
                          <span>{relatedArticle.author}</span>
                          <span>{relatedArticle.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}