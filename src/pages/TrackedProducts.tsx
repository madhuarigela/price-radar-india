import { Bell, BellOff } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/mockData';

const TrackedProducts = () => {
  // Demo: show first 2 as "tracked"
  const tracked = products.slice(0, 2);

  return (
    <div className="container py-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <Bell className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="font-heading text-xl font-bold text-foreground">Tracked Products</h1>
          <p className="text-sm text-muted-foreground">You'll be notified when prices drop</p>
        </div>
      </div>

      {tracked.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tracked.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <BellOff className="h-12 w-12 text-muted-foreground/40" />
          <p className="font-heading text-lg font-semibold text-foreground">No tracked products yet</p>
          <p className="text-sm text-muted-foreground">Search for products and click "Track Price" to get alerts.</p>
        </div>
      )}
    </div>
  );
};

export default TrackedProducts;
