import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend?: string;
  trendUp?: boolean;
}

export function StatCard({ title, value, icon, trend, trendUp }: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-sm hover:border-zinc-700 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-400">{title}</p>
          <div className="mt-2 flex items-baseline">
            <h3 className="text-2xl font-semibold text-white">{value}</h3>
            {trend && (
              <span
                className={cn(
                  "ml-2 text-xs font-medium",
                  trendUp ? "text-emerald-500" : "text-rose-500"
                )}
              >
                {trend}
              </span>
            )}
          </div>
        </div>
        <div className="rounded-lg bg-zinc-800/50 p-2 text-zinc-400">
          {icon}
        </div>
      </div>
    </div>
  );
}
