import Link from "next/link";
import { LayoutDashboard, Megaphone, Settings, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Campaigns", href: "/campaigns", icon: Megaphone },
  { name: "Data", href: "/data", icon: Database },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col border-r border-zinc-800 bg-zinc-950">
      <div className="flex h-16 items-center px-6 border-b border-zinc-800">
        <h1 className="text-xl font-bold text-white tracking-tighter">
          Lead<span className="text-emerald-500">Engine</span>
        </h1>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors",
              item.name === "Dashboard" && "bg-zinc-900 text-white"
            )}
          >
            <item.icon className="mr-3 h-5 w-5 flex-shrink-0 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-xs ring-1 ring-emerald-500/50">
            N
          </div>
          <div>
            <p className="text-sm font-medium text-white">Nibru</p>
            <p className="text-xs text-zinc-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
