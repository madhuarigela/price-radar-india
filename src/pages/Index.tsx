import { motion } from 'framer-motion';
import { TrendingDown, BarChart3, Bell, Radar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import ProductCard from '@/components/ProductCard';
import DealCard from '@/components/DealCard';
import CategoryCard from '@/components/CategoryCard';
import { products, deals, categories } from '@/data/mockData';

const features = [
  { icon: BarChart3, title: 'Price Comparison', desc: 'Compare across 5+ Indian platforms' },
  { icon: TrendingDown, title: 'Price History', desc: 'Track how prices change over time' },
  { icon: Bell, title: 'Drop Alerts', desc: 'Get notified when prices fall' },
];

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-card py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(24_95%_53%/0.08),transparent_70%)]" />
        <div className="container relative flex flex-col items-center gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <Radar className="h-3.5 w-3.5" /> Track prices across India
            </div>
            <h1 className="max-w-2xl font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Find the <span className="text-primary">lowest price</span> for any product
            </h1>
            <p className="max-w-lg text-base text-muted-foreground md:text-lg">
              Compare prices from Amazon, Flipkart, Meesho, Reliance Digital & Croma — all in one place.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="w-full max-w-xl"
          >
            <SearchBar large />
          </motion.div>
          <div className="flex items-center gap-6 md:gap-10">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">
                <f.icon className="h-4 w-4 text-primary" />
                <span>{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-12">
        <h2 className="font-heading text-xl font-bold text-foreground">Browse Categories</h2>
        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>

      {/* Hot Deals */}
      <section className="container py-8">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-foreground">🔥 Today's Best Deals</h2>
          <Link to="/deals" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {deals.slice(0, 4).map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="container py-8 pb-16">
        <h2 className="font-heading text-xl font-bold text-foreground">Trending Products</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
