import { Star, Truck, ExternalLink, Check, X } from 'lucide-react';
import { PlatformListing, PLATFORM_LABELS, Platform } from '@/data/types';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);

const PlatformComparison = ({ listings }: { listings: PlatformListing[] }) => {
  const sorted = [...listings].sort((a, b) => a.price - b.price);
  const lowestPrice = sorted[0]?.price;

  return (
    <div className="space-y-3">
      {sorted.map((listing, i) => (
        <div
          key={listing.platform}
          className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${
            i === 0 ? 'border-accent/40 bg-accent/5' : 'border-border bg-card'
          }`}
        >
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="font-heading text-sm font-semibold text-foreground">
                {PLATFORM_LABELS[listing.platform]}
              </span>
              {i === 0 && (
                <span className="rounded-md bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">
                  Lowest Price
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-primary text-primary" />
                {listing.sellerRating}
              </span>
              <span className="flex items-center gap-1">
                <Truck className="h-3 w-3" />
                {listing.deliveryDays === 1 ? 'Tomorrow' : `${listing.deliveryDays} days`}
              </span>
              <span className="flex items-center gap-1">
                {listing.inStock ? (
                  <><Check className="h-3 w-3 text-accent" /> In Stock</>
                ) : (
                  <><X className="h-3 w-3 text-destructive" /> Out of Stock</>
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="font-heading text-lg font-bold text-foreground">{formatPrice(listing.price)}</span>
            <span className="text-xs text-muted-foreground line-through">{formatPrice(listing.originalPrice)}</span>
          </div>
          <a
            href={listing.url}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default PlatformComparison;
