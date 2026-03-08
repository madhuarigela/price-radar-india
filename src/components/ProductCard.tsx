import { Link } from 'react-router-dom';
import { TrendingDown, Star, ExternalLink } from 'lucide-react';
import { Product, PLATFORM_LABELS } from '@/data/types';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);

const ProductCard = ({ product }: { product: Product }) => {
  const bestListing = product.listings.reduce((a, b) => (a.price < b.price ? a : b));
  const savings = bestListing.originalPrice - bestListing.price;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-card-hover"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {bestListing.discount >= 20 && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-lg bg-destructive px-2 py-1 text-xs font-semibold text-destructive-foreground">
            <TrendingDown className="h-3 w-3" />
            {bestListing.discount}% OFF
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{product.brand}</p>
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">{product.name}</h3>
        <div className="flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="text-xs font-medium text-foreground">{product.avgRating}</span>
          <span className="text-xs text-muted-foreground">({product.totalReviews.toLocaleString()})</span>
        </div>
        <div className="mt-auto pt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-lg font-bold text-foreground">{formatPrice(bestListing.price)}</span>
            <span className="text-xs text-muted-foreground line-through">{formatPrice(bestListing.originalPrice)}</span>
          </div>
          <p className="mt-1 flex items-center gap-1 text-xs text-accent">
            <TrendingDown className="h-3 w-3" />
            Save {formatPrice(savings)} · Best on {PLATFORM_LABELS[bestListing.platform]}
          </p>
        </div>
        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <span>Across {product.listings.length} platforms</span>
          <ExternalLink className="h-3 w-3" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
