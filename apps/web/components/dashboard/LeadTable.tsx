import { BadgeCheck, BadgeAlert, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const leads = [
  {
    id: 1,
    business: "Acme Corp",
    email: "contact@acme.com",
    phone: "+1 (555) 123-4567",
    status: "Success",
    date: "2 mins ago",
  },
  {
    id: 2,
    business: "TechFlow Inc",
    email: "info@techflow.io",
    phone: "+1 (555) 987-6543",
    status: "Pending",
    date: "5 mins ago",
  },
  {
    id: 3,
    business: "Global Logistics",
    email: "support@glogistics.net",
    phone: "--",
    status: "Failed",
    date: "12 mins ago",
  },
  {
    id: 4,
    business: "Stark Industries",
    email: "tony@stark.com",
    phone: "+1 (555) 999-8888",
    status: "Success",
    date: "1 hour ago",
  },
];

export function LeadTable() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
      <div className="border-b border-zinc-800 px-6 py-4">
        <h3 className="text-base font-semibold text-white">Recent Leads</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-zinc-900/50 text-xs uppercase text-zinc-500">
            <tr>
              <th className="px-6 py-3 font-medium">Business Name</th>
              <th className="px-6 py-3 font-medium">Email</th>
              <th className="px-6 py-3 font-medium">Phone</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Extracted</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-zinc-900/50 transition-colors">
                <td className="px-6 py-4 font-medium text-white">{lead.business}</td>
                <td className="px-6 py-4 text-zinc-400 font-mono text-xs">{lead.email}</td>
                <td className="px-6 py-4 text-zinc-400 font-mono text-xs">{lead.phone}</td>
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium",
                      lead.status === "Success" && "bg-emerald-500/10 text-emerald-500 ring-1 ring-inset ring-emerald-500/20",
                      lead.status === "Pending" && "bg-amber-500/10 text-amber-500 ring-1 ring-inset ring-amber-500/20",
                      lead.status === "Failed" && "bg-rose-500/10 text-rose-500 ring-1 ring-inset ring-rose-500/20"
                    )}
                  >
                    {lead.status === "Success" && <BadgeCheck className="h-3 w-3" />}
                    {lead.status === "Pending" && <Clock className="h-3 w-3" />}
                    {lead.status === "Failed" && <BadgeAlert className="h-3 w-3" />}
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-zinc-500">{lead.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
