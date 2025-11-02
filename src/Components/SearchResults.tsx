import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search, Filter, ArrowLeft } from 'lucide-react';
import { NewsBoard } from './NewsBoard';
import { useSearch } from '../hooks/useSearch';
import { Article } from '../data/articles';

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'all';
  
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [searchTime, setSearchTime] = useState<number>(0);
  const [totalResults, setTotalResults] = useState<number>(0);
  
  const { search } = useSearch();

  useEffect(() => {
    if (query) {
      const result = search(query, { category: category !== 'all' ? category : undefined });
      setSearchResults(result.articles);
      setSearchTime(result.searchTime);
      setTotalResults(result.totalCount);
    }
  }, [query, category, search]);

  if (!query) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <Search size={64} className="text-muted mb-3" />
          <h2>No search query provided</h2>
          <p className="text-muted">Please enter a search term to find articles.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      {/* Search Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex align-items-center mb-3">
            <button 
              className="btn btn-outline-secondary me-3"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={18} />
            </button>
            <div className="flex-grow-1">
              <h1 className="h3 mb-1">Search Results</h1>
              <p className="text-muted mb-0">
                {totalResults} results for "<strong>{query}</strong>" 
                {searchTime > 0 && ` (${searchTime}ms)`}
              </p>
            </div>
          </div>
          
          {/* Search Query Display */}
          <div className="d-flex align-items-center gap-3 p-3 bg-light rounded">
            <Search size={20} className="text-muted" />
            <div className="flex-grow-1">
              <strong>"{query}"</strong>
              {category !== 'all' && (
                <span className="ms-2">
                  in <span className="badge bg-primary">{category}</span>
                </span>
              )}
            </div>
            <button className="btn btn-outline-secondary btn-sm">
              <Filter size={16} className="me-1" />
              Refine Search
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {searchResults.length > 0 ? (
        <NewsBoard
          articles={searchResults}
          currentCategory={category}
          onCategoryClick={(cat) => {
            const params = new URLSearchParams(searchParams);
            params.set('category', cat);
            navigate(`/search?${params.toString()}`);
          }}
        />
      ) : (
        <div className="text-center py-5">
          <Search size={64} className="text-muted mb-3" />
          <h3>No results found</h3>
          <p className="text-muted mb-4">
            We couldn't find any articles matching "<strong>{query}</strong>".
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button 
              className="btn btn-outline-secondary"
              onClick={() => navigate('/')}
            >
              Browse All Articles
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => {
                const params = new URLSearchParams();
                params.set('q', '');
                navigate(`/search?${params.toString()}`);
              }}
            >
              New Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}