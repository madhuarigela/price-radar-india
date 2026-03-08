import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PricePoint, PLATFORM_COLORS, PLATFORM_LABELS, Platform } from '@/data/types';

const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

const PriceChart = ({ data }: { data: PricePoint[] }) => {
  const platforms = Object.keys(PLATFORM_COLORS) as Platform[];

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: 'hsl(220 10% 45%)' }}
            tickFormatter={(d) => new Date(d).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
          />
          <YAxis
            tick={{ fontSize: 11, fill: 'hsl(220 10% 45%)' }}
            tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`}
            width={55}
          />
          <Tooltip
            contentStyle={{ background: 'hsl(0 0% 100%)', border: '1px solid hsl(30 15% 90%)', borderRadius: '12px', fontSize: '12px' }}
            formatter={(value: number, name: string) => [formatPrice(value), PLATFORM_LABELS[name as Platform] || name]}
            labelFormatter={(d) => new Date(d).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: '12px' }}
            formatter={(value) => PLATFORM_LABELS[value as Platform] || value}
          />
          {platforms.map((p) => (
            <Line
              key={p}
              type="monotone"
              dataKey={p}
              stroke={PLATFORM_COLORS[p]}
              strokeWidth={2}
              dot={false}
              connectNulls
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
