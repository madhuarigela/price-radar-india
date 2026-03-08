import { Flame } from 'lucide-react';
import DealCard from '@/components/DealCard';
import { deals } from '@/data/mockData';

const Deals = () => (
  <div className="container py-8">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-deal-hot/10">
        <Flame className="h-5 w-5 text-deal-hot" />
      </div>
      <div>
        <h1 className="font-heading text-xl font-bold text-foreground">Today's Deals</h1>
        <p className="text-sm text-muted-foreground">Unusually large discounts detected by our engine</p>
      </div>
    </div>
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {deals.map((deal) => (
        <DealCard key={deal.id} deal={deal} />
      ))}
    </div>
  </div>
);

export default Deals;
