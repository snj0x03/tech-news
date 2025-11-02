import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

interface AppContextType {
  theme: 'light' | 'dark';
  currentCategory: string;
  handleCategoryChange: (category: string) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
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
    console.log('Category change requested:', category);
    setCurrentCategory(category);
    if (category === 'all') {
      console.log('Navigating to home');
      window.location.href = '/';
    } else {
      console.log('Navigating to category:', category);
      window.location.href = `/?category=${category}`;
    }
  };

  const value = {
    theme,
    currentCategory,
    handleCategoryChange,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};