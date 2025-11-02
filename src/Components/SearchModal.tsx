import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import { Article } from '../data/articles';
import { Search, X, History, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { search, searchHistory, clearSearchHistory } = useSearch();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchResults, setSearchResults] = useState<Article[]>([]);

  const categories = ['All', 'Technology', 'AI & Machine Learning', 'Cybersecurity', 'Startups', 'Mobile Development', 'Web Development'];

  // Update search results when query or category changes
  useEffect(() => {
    if (searchQuery.trim()) {
      const result = search(searchQuery, { 
        category: selectedCategory === 'All' ? undefined : selectedCategory 
      });
      setSearchResults(result.articles);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, selectedCategory, search]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Enter' && searchQuery.trim()) {
        handleSearch();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, searchQuery]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}&category=${selectedCategory}`);
      onClose();
    }
  };

  const handleHistoryClick = (query: string) => {
    setSearchQuery(query);
    navigate(`/search?q=${encodeURIComponent(query)}&category=${selectedCategory}`);
    onClose();
  };

  const handleResultClick = (articleId: string) => {
    navigate(`/article/${articleId}`);
    navigate(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0 pb-0">
            <div className="w-100">
              <div className="d-flex align-items-center mb-3">
                <Search className="me-2 text-primary" size={24} />
                <h5 className="modal-title mb-0">Search Articles</h5>
                <button
                  type="button"
                  className="btn-close ms-auto"
                  onClick={onClose}
                >
                  <X size={20} />
                </button>
              </div>
              
              <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search for articles, topics, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={!searchQuery.trim()}
                  >
                    <Search size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="modal-body pt-2">
            <div className="mb-3">
              <small className="text-muted mb-2 d-block">Filter by category:</small>
              <div className="d-flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`btn btn-sm ${
                      selectedCategory === category ? 'btn-primary' : 'btn-outline-secondary'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {searchQuery && (
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="text-muted">Search Results:</small>
                  <small className="text-muted">{searchResults.length} results</small>
                </div>
                <div className="search-results" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {searchResults.length > 0 ? (
                    searchResults.slice(0, 5).map((article) => (
                      <div
                        key={article.id}
                        className="d-flex align-items-center p-2 border rounded mb-2 cursor-pointer"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleResultClick(article.id)}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className="rounded me-3"
                          style={{ width: '60px', height: '40px', objectFit: 'cover' }}
                        />
                        <div className="flex-grow-1">
                          <div className="fw-bold small">{article.title}</div>
                          <div className="text-muted small">{article.category}</div>
                        </div>
                        <ArrowRight size={16} className="text-muted" />
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-muted py-3">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              </div>
            )}

            {!searchQuery && searchHistory.length > 0 && (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="text-muted d-flex align-items-center">
                    <History size={14} className="me-1" />
                    Recent Searches:
                  </small>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={clearSearchHistory}
                  >
                    Clear
                  </button>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {searchHistory.slice(0, 8).map((query, index) => (
                    <button
                      key={index}
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleHistoryClick(query)}
                    >
                      {query}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};