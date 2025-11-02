import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Moon, Sun } from 'lucide-react';
import { categories } from '../data/articles';
import { SearchModal } from './SearchModal';

interface HeaderProps {
  currentCategory: string;
  onCategoryChange: (category: string) => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export function Header({ currentCategory, onCategoryChange, theme, onThemeToggle }: HeaderProps) {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="sticky-top border-bottom bg-white" style={{ zIndex: 1050 }}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* Logo */}
          <div 
            className="navbar-brand" 
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            <h1 className="h4 mb-0 fw-bold text-uppercase">TechNexus</h1>
          </div>

          {/* Mobile toggle button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {categories.map((category) => (
                <li key={category.id} className="nav-item">
                  <button
                    onClick={() => onCategoryChange(category.id)}
                    className={`nav-link btn btn-link text-decoration-none text-uppercase fw-semibold px-3 ${
                      currentCategory === category.id
                        ? 'text-dark'
                        : 'text-muted'
                    }`}
                    style={{
                      borderBottom: currentCategory === category.id 
                        ? `3px solid ${category.color}` 
                        : '3px solid transparent',
                      borderRadius: 0
                    }}
                  >
                    {category.name === 'Home' ? category.name : category.name.split(' ')[0]}
                  </button>
                </li>
              ))}
            </ul>

            {/* Right Actions */}
            <div className="d-flex align-items-center">
              <button 
                className="btn btn-outline-secondary me-2 d-flex align-items-center" 
                style={{ border: 'none' }}
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search articles"
                title="Search (Ctrl+K)"
              >
                <Search size={20} />
                <span className="d-none d-lg-inline ms-2 small text-muted">Ctrl+K</span>
              </button>
              <button
                onClick={onThemeToggle}
                className="btn btn-outline-secondary"
                style={{ border: 'none' }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Categories */}
        <div className="d-lg-none pb-2">
          <div className="d-flex flex-nowrap overflow-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`btn btn-sm me-2 text-nowrap text-uppercase fw-semibold ${
                  currentCategory === category.id
                    ? 'text-dark'
                    : 'text-muted'
                }`}
                style={{
                  borderBottom: currentCategory === category.id 
                    ? `2px solid ${category.color}` 
                    : '2px solid transparent',
                  borderRadius: 0,
                  background: 'none',
                  border: 'none'
                }}
              >
                {category.name === 'Home' ? category.name : category.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </header>
  );
}