import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentCategory, setCurrentCategory] = useState(searchParams.get('category') || 'all');

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-bs-theme', savedTheme);
    }
  }, []);

  // Update category when URL changes
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    setCurrentCategory(category);
  }, [searchParams]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    if (category === 'all') {
      navigate('/');
    } else {
      navigate(`/?category=${category}`);
    }
  };

  return (
    <div className="min-vh-100">
      <Header
        currentCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <Outlet context={{ theme, currentCategory, handleCategoryChange }} />
    </div>
  );
}