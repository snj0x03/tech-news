import { TrendingUp, Briefcase, DollarSign, Users, Target } from 'lucide-react';
import { NewsBoard } from './NewsBoard';
import { articles } from '../data/articles';
import { useAppContext } from '../context/AppContext';

export function StartupsPage() {
  const { handleCategoryChange } = useAppContext();

  const startupArticles = articles.filter(article => article.category === 'startups');
  
  // Statistics for the startup ecosystem
  const stats = [
    { icon: TrendingUp, label: 'Active Startups', value: '156+', color: '#FF6B6B' },
    { icon: Briefcase, label: 'Open Positions', value: '2.3K+', color: '#4ECDC4' },
    { icon: DollarSign, label: 'Total Funding', value: '$1.2B+', color: '#45B7D1' },
    { icon: Users, label: 'Hiring Companies', value: '89+', color: '#96CEB4' }
  ];

  return (
    <>
      {/* Hero Section for Startups */}
      <section className="bg-gradient py-5 mb-5" style={{
        background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">
                Startup Ecosystem Hub
              </h1>
              <p className="lead mb-4">
                Discover emerging tech startups, funding opportunities, and career possibilities. 
                Connect talented individuals with innovative companies shaping the future.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn border-0 h-100 shadow-sm btn-lg fw-semibold">
                  <Target className="me-2" size={20} />
                  Find Opportunities
                </button>
                <button className="btn border-0 h-100 shadow-sm btn-lg fw-semibold">
                  <Users className="me-2" size={20} />
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mb-5">
        <div className="row g-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="col-6 col-lg-3">
                <div className="card border-0 shadow-sm h-100 text-center">
                  <div className="card-body">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: stat.color + '20',
                        color: stat.color
                      }}
                    >
                      <IconComponent size={24} />
                    </div>
                    <h3 className="h4 fw-bold mb-1" style={{ color: stat.color }}>
                      {stat.value}
                    </h3>
                    <p className="text-muted mb-0 small">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Categories */}
      <section className="container mb-5">
        <div className="row">
          <div className="col-12 mb-4">
            <h2 className="h3 fw-bold mb-3">What You'll Find Here</h2>
            <p className="text-muted">Our startup section covers everything from funding news to career opportunities</p>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <DollarSign className="text-success me-3" size={24} />
                  <h5 className="mb-0">Funding & Investment</h5>
                </div>
                <p className="text-muted mb-0">
                  Latest funding rounds, investment opportunities, and startup valuations. 
                  Connect with VCs and angel investors.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <Briefcase className="text-info me-3" size={24} />
                  <h5 className="mb-0">Career Opportunities</h5>
                </div>
                <p className="text-muted mb-0">
                  Discover exciting roles at fast-growing startups. From technical positions 
                  to leadership opportunities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <TrendingUp className="text-warning me-3" size={24} />
                  <h5 className="mb-0">Market Insights</h5>
                </div>
                <p className="text-muted mb-0">
                  Industry trends, market analysis, and success stories from startup 
                  founders and entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <h2 className="h3 fw-bold">Latest Startup News</h2>
            <p className="text-muted">Stay updated with the newest developments in the startup ecosystem</p>
          </div>
        </div>
        <NewsBoard
          articles={startupArticles}
          currentCategory="startups"
          onCategoryClick={handleCategoryChange}
        />
      </div>
    </>
  );
}