import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/mockData';

const SearchResults = () => {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const category = params.get('category') || '';

  const filtered = products.filter((p) => {
    const matchesQuery = !query || p.name.toLowerCase().includes(query.toLowerCase()) || p.brand.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !category || p.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <SearchBar initialQuery={query} />
      </div>

      <div className="flex items-center justify-between">
        <h1 className="font-heading text-xl font-bold text-foreground">
          {query ? `Results for "${query}"` : category ? `Category: ${category}` : 'All Products'}
          <span className="ml-2 text-sm font-normal text-muted-foreground">({filtered.length} found)</span>
        </h1>
        <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <p className="font-heading text-lg font-semibold text-foreground">No products found</p>
          <p className="text-sm text-muted-foreground">Try a different search term or browse categories.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
