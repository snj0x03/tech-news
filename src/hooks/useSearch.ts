import { useState, useEffect } from 'react';
import { articles, categories } from '../data/articles';
import { Article } from '../data/articles';

interface SearchFilters {
  category?: string;
  author?: string;
  dateRange?: 'today' | 'week' | 'month' | 'all';
  readTime?: '1-5' | '6-10' | '10+';
}

interface SearchResult {
  articles: Article[];
  totalCount: number;
  searchTime: number;
}

export function useSearch() {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // Load search history from localStorage
  useEffect(() => {
    const history = localStorage.getItem('searchHistory');
    if (history) {
      try {
        setSearchHistory(JSON.parse(history));
      } catch (e) {
        console.error('Error loading search history:', e);
      }
    }
  }, []);

  // Save search to history
  const saveSearch = (query: string) => {
    if (!query.trim() || searchHistory.includes(query)) return;
    
    const newHistory = [query, ...searchHistory.slice(0, 9)]; // Keep only 10 items
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  // Clear search history
  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  // Advanced search function
  const search = (query: string, filters: SearchFilters = {}): SearchResult => {
    const startTime = performance.now();
    
    if (!query.trim()) {
      return { articles: [], totalCount: 0, searchTime: 0 };
    }

    let filteredArticles = [...articles];

    // Apply filters
    if (filters.category && filters.category !== 'all') {
      filteredArticles = filteredArticles.filter(article => article.category === filters.category);
    }

    if (filters.author) {
      filteredArticles = filteredArticles.filter(article => 
        article.author.toLowerCase().includes(filters.author!.toLowerCase())
      );
    }

    if (filters.dateRange && filters.dateRange !== 'all') {
      const now = new Date();
      const filterDate = new Date();
      
      switch (filters.dateRange) {
        case 'today':
          filterDate.setDate(now.getDate() - 1);
          break;
        case 'week':
          filterDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          filterDate.setMonth(now.getMonth() - 1);
          break;
      }
      
      filteredArticles = filteredArticles.filter(article => {
        const articleDate = new Date(article.date);
        return articleDate >= filterDate;
      });
    }

    if (filters.readTime) {
      filteredArticles = filteredArticles.filter(article => {
        const readTimeNum = parseInt(article.readTime);
        switch (filters.readTime) {
          case '1-5':
            return readTimeNum <= 5;
          case '6-10':
            return readTimeNum >= 6 && readTimeNum <= 10;
          case '10+':
            return readTimeNum > 10;
          default:
            return true;
        }
      });
    }

    // Search in content
    const searchLower = query.toLowerCase();
    const searchResults = filteredArticles.filter(article => {
      const categoryName = categories.find(cat => cat.id === article.category)?.name || '';
      
      return (
        article.title.toLowerCase().includes(searchLower) ||
        article.excerpt.toLowerCase().includes(searchLower) ||
        article.author.toLowerCase().includes(searchLower) ||
        categoryName.toLowerCase().includes(searchLower) ||
        (article.content && article.content.toLowerCase().includes(searchLower))
      );
    });

    // Sort by relevance
    searchResults.sort((a, b) => {
      const aScore = getRelevanceScore(a, searchLower);
      const bScore = getRelevanceScore(b, searchLower);
      return bScore - aScore;
    });

    const endTime = performance.now();
    const searchTime = Math.round(endTime - startTime);

    // Save search to history
    saveSearch(query);

    return {
      articles: searchResults,
      totalCount: searchResults.length,
      searchTime
    };
  };

  // Calculate relevance score for sorting
  const getRelevanceScore = (article: Article, searchTerm: string): number => {
    let score = 0;
    const title = article.title.toLowerCase();
    const excerpt = article.excerpt.toLowerCase();
    const content = article.content?.toLowerCase() || '';
    
    // Title matches get highest score
    if (title.includes(searchTerm)) {
      score += title.startsWith(searchTerm) ? 100 : 50;
    }
    
    // Excerpt matches
    if (excerpt.includes(searchTerm)) {
      score += 25;
    }
    
    // Content matches
    if (content.includes(searchTerm)) {
      score += 10;
    }
    
    // Author matches
    if (article.author.toLowerCase().includes(searchTerm)) {
      score += 15;
    }
    
    return score;
  };

  // Get search suggestions based on existing articles
  const getSearchSuggestions = (query: string, limit = 5): string[] => {
    if (!query.trim()) return [];
    
    const suggestions = new Set<string>();
    const searchLower = query.toLowerCase();
    
    articles.forEach(article => {
      // Add title words that start with search query
      const titleWords = article.title.toLowerCase().split(' ');
      titleWords.forEach(word => {
        if (word.startsWith(searchLower) && word.length > query.length) {
          suggestions.add(word);
        }
      });
      
      // Add author names
      if (article.author.toLowerCase().includes(searchLower)) {
        suggestions.add(article.author);
      }
    });
    
    // Add category names
    categories.forEach(category => {
      if (category.name.toLowerCase().includes(searchLower)) {
        suggestions.add(category.name);
      }
    });
    
    return Array.from(suggestions).slice(0, limit);
  };

  return {
    search,
    searchHistory,
    clearSearchHistory,
    getSearchSuggestions
  };
}