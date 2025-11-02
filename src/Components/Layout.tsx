import { ReactNode } from 'react';
import { useAppContext } from '../context/AppContext';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme, currentCategory, handleCategoryChange, toggleTheme } = useAppContext();

  return (
    <div className="min-vh-100">
      <Header
        currentCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      {children}
    </div>
  );
}