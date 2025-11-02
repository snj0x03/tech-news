import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Home } from './Components/Home';
import { ArticleDetail } from './Components/ArticleDetail';
import { SearchResults } from './Components/SearchResults';

export default function App() {
  console.log('App component rendering');
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="article/:id" element={<ArticleDetail />} />
          <Route path="search" element={<SearchResults />} />
        </Route>
      </Routes>
    </Router>
  );
}
