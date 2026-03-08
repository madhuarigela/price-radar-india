import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bell, Star, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import PriceChart from '@/components/PriceChart';
import PlatformComparison from '@/components/PlatformComparison';
import { products } from '@/data/mockData';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container flex flex-col items-center gap-4 py-20 text-center">
        <p className="font-heading text-lg font-semibold text-foreground">Product not found</p>
        <Link to="/" className="text-sm text-primary hover:underline">Go back home</Link>
      </div>
    );
  }

  const bestListing = product.listings.reduce((a, b) => (a.price < b.price ? a : b));

  return (
    <div className="container py-6">
      <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="overflow-hidden rounded-2xl border border-border bg-card"
        >
          <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
        </motion.div>

        {/* Right: Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-5"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{product.brand}</p>
            <h1 className="mt-1 font-heading text-2xl font-bold leading-tight text-foreground lg:text-3xl">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-medium text-foreground">{product.avgRating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({product.totalReviews.toLocaleString()} reviews)</span>
            </div>
          </div>

          <div className="rounded-xl border border-accent/30 bg-accent/5 p-4">
            <p className="text-xs font-medium text-muted-foreground">Best Price Available</p>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="font-heading text-3xl font-bold text-foreground">{formatPrice(bestListing.price)}</span>
              <span className="text-sm text-muted-foreground line-through">{formatPrice(bestListing.originalPrice)}</span>
              <span className="rounded-md bg-accent/15 px-2 py-0.5 text-xs font-bold text-accent">
                {bestListing.discount}% OFF
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              You save {formatPrice(bestListing.originalPrice - bestListing.price)}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="flex gap-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 font-heading text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              <Bell className="h-4 w-4" /> Track Price
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Price Comparison */}
      <section className="mt-10">
        <h2 className="font-heading text-xl font-bold text-foreground">Price Comparison</h2>
        <div className="mt-4">
          <PlatformComparison listings={product.listings} />
        </div>
      </section>

      {/* Price History */}
      <section className="mt-10 pb-12">
        <h2 className="font-heading text-xl font-bold text-foreground">Price History</h2>
        <div className="mt-4 rounded-2xl border border-border bg-card p-6">
          <PriceChart data={product.priceHistory} />
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
