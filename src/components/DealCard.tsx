import { Link } from 'react-router-dom';
import { Flame, Clock, TrendingDown } from 'lucide-react';
import { Deal } from '@/data/types';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);

const timeRemaining = (expiresAt: string) => {
  const diff = new Date(expiresAt).getTime() - Date.now();
  if (diff <= 0) return 'Expired';
  const hours = Math.floor(diff / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  return `${hours}h ${mins}m left`;
};

const DealCard = ({ deal }: { deal: Deal }) => {
  const bestListing = deal.product.listings.reduce((a, b) => (a.price < b.price ? a : b));

  const badgeStyles = {
    hot: 'bg-deal-hot text-primary-foreground',
    good: 'bg-deal-good text-primary-foreground',
    regular: 'bg-deal-regular text-primary-foreground',
  };

  return (
    <Link
      to={`/product/${deal.product.id}`}
      className="group flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover"
    >
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-secondary">
        <img src={deal.product.image} alt={deal.product.name} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-semibold ${badgeStyles[deal.dealType]}`}>
            {deal.dealType === 'hot' && <Flame className="h-3 w-3" />}
            {deal.dealType === 'hot' ? 'HOT DEAL' : deal.dealType === 'good' ? 'GOOD DEAL' : 'DEAL'}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {timeRemaining(deal.expiresAt)}
          </span>
        </div>
        <h3 className="line-clamp-1 text-sm font-semibold text-foreground">{deal.product.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-lg font-bold text-foreground">{formatPrice(bestListing.price)}</span>
          <span className="text-xs text-muted-foreground line-through">{formatPrice(bestListing.originalPrice)}</span>
          <span className="flex items-center gap-0.5 text-xs font-semibold text-accent">
            <TrendingDown className="h-3 w-3" />
            {deal.discountPercent}% off
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DealCard;
