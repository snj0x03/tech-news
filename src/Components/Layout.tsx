import { Outlet } from 'react-router-dom';
import { AppProvider, useAppContext } from '../context/AppContext';
import { Header } from './Header';

function LayoutContent() {
  const { theme, currentCategory, handleCategoryChange, toggleTheme } = useAppContext();

  return (
    <div className="min-vh-100">
      <Header
        currentCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <Outlet />
    </div>
  );
}

export function Layout() {
  return (
    <AppProvider>
      <LayoutContent />
    </AppProvider>
  );
}