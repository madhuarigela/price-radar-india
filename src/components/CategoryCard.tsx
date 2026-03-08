import { Link } from 'react-router-dom';
import { Category } from '@/data/types';

const CategoryCard = ({ category }: { category: Category }) => (
  <Link
    to={`/search?category=${category.id}`}
    className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover hover:border-primary/20"
  >
    <span className="text-3xl">{category.icon}</span>
    <span className="font-heading text-sm font-semibold text-foreground">{category.name}</span>
    <span className="text-xs text-muted-foreground">{category.count.toLocaleString()} products</span>
  </Link>
);

export default CategoryCard;
