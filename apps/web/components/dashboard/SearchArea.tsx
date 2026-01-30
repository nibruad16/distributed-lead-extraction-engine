import { Search, Rocket } from "lucide-react";

export function SearchArea() {
  return (
    <div className="relative mb-8">
      <div className="relative flex items-center w-full max-w-3xl mx-auto">
        <div className="relative w-full group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full rounded-2xl border border-zinc-800 bg-zinc-900/50 py-4 pl-12 pr-32 text-white placeholder:text-zinc-600 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all shadow-xl shadow-black/20"
            placeholder="Search for leads (e.g. 'Software companies in San Francisco')..."
          />
          <div className="absolute inset-y-2 right-2 flex items-center">
            <button className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:bg-emerald-400 transition-all active:scale-95">
              <Rocket className="h-4 w-4" />
              Launch Scraper
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-4 text-sm text-zinc-500">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          Proxy Network Active
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
          Redis Connected
        </span>
      </div>
    </div>
  );
}
