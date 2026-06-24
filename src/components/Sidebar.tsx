"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  FileSpreadsheet,
  BarChart3,
  Skull,
  Search,
  Users,
  Dna,
  TrendingUp,
  Compass,
  Lightbulb,
  Menu,
  X
} from "lucide-react";

export const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analyze Startup", href: "/analyze", icon: FileSpreadsheet },
  { name: "Results Dashboard", href: "/results", icon: BarChart3 },
  { name: "Startup Graveyard", href: "/graveyard", icon: Skull },
  { name: "Similar Discovery", href: "/discover", icon: Search },
  { name: "AI Boardroom", href: "/boardroom", icon: Users },
  { name: "Founder DNA", href: "/founder-dna", icon: Dna },
  { name: "Market Pulse", href: "/market-pulse", icon: TrendingUp },
  { name: "Multiverse Simulator", href: "/multiverse", icon: Compass },
  { name: "Recommendations", href: "/recommendations", icon: Lightbulb }
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // If we are on the landing page, don't show the dashboard sidebar by default (or show a simplified version)
  // But let's keep the layout modular
  if (pathname === "/") return null;

  return (
    <>
      {/* Mobile Toggle Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-navy border-b border-border-color text-cream sticky top-0 z-40">
        <Link href="/dashboard" className="text-xl font-bold flex items-center gap-2">
          <span className="text-amber">✦</span> VentureVerse <span className="text-sage">AI</span>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-cream hover:text-amber">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Content */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-navy border-r border-border-color transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:h-screen`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-color">
          <Link href="/" className="text-2xl font-black tracking-tight text-cream flex items-center gap-2">
            <span className="text-amber">✦</span>
            VentureVerse<span className="text-sage">AI</span>
          </Link>
          <button onClick={() => setIsOpen(false)} className="lg:hidden p-1 text-cream hover:text-amber">
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-teal/30 text-amber border-l-4 border-amber shadow-[inset_0_1px_0_0_rgba(108,163,162,0.1)]"
                    : "text-cream/70 hover:bg-card-bg hover:text-cream"
                }`}
              >
                <Icon size={18} className={isActive ? "text-amber" : "text-sage"} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer Metadata */}
        <div className="p-6 border-t border-border-color bg-black/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sage/20 border border-sage flex items-center justify-center font-bold text-sage">
              V
            </div>
            <div>
              <p className="text-xs font-bold text-cream">Founder Sandbox</p>
              <span className="inline-block px-2 py-0.5 mt-1 text-[9px] font-extrabold uppercase bg-amber text-navy rounded">
                PRO TRIAL
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
