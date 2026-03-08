import { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  large?: boolean;
  initialQuery?: string;
}

const SearchBar = ({ large, initialQuery = '' }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex items-center gap-3 rounded-2xl border border-border bg-card shadow-card transition-shadow focus-within:shadow-card-hover focus-within:border-primary/30 ${
          large ? 'px-6 py-4' : 'px-4 py-2.5'
        }`}
      >
        <Search className={`text-muted-foreground ${large ? 'h-6 w-6' : 'h-5 w-5'}`} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products across Amazon, Flipkart, Meesho..."
          className={`w-full bg-transparent font-body text-foreground placeholder:text-muted-foreground focus:outline-none ${
            large ? 'text-lg' : 'text-sm'
          }`}
        />
        <button
          type="submit"
          className={`shrink-0 rounded-xl bg-primary font-medium text-primary-foreground transition-opacity hover:opacity-90 ${
            large ? 'px-6 py-2.5 text-base' : 'px-4 py-1.5 text-sm'
          }`}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
