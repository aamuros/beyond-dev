interface StatCardProps {
  label: string;
  value: string | number;
  trend?: string;
}

export function StatCard({ label, value, trend }: StatCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-4">
      <p className="text-sm text-text-muted">{label}</p>
      <p className="text-2xl font-bold text-text-primary mt-1">{value}</p>
      {trend && <p className="text-xs text-text-faint mt-1">{trend}</p>}
    </div>
  );
}
