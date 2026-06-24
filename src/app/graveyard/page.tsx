"use client";

import { useState } from "react";
import { Search, Skull, ShieldAlert, AlertTriangle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { graveyardStartups } from "@/lib/mockData";

export default function GraveyardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("All");

  const filteredStartups = graveyardStartups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.postMortem.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector =
      selectedSector === "All" || startup.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  const sectors = ["All", "EdTech", "AutoTech", "CleanTech / EV", "Entertainment B2C", "HealthTech", "FinTech B2B"];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <PageHeader
        title="Startup Graveyard"
        subtitle="15,921 failed startups analyzed. Study their post-mortems so you don't repeat history."
      />

      {/* ── METRIC BLOCK ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-2xl border border-border-color flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-400">
            <Skull size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-sage uppercase tracking-wider">Total Capital Dissolved</p>
            <p className="text-2xl font-black text-cream font-mono">$17.5 Billion</p>
          </div>
        </div>

        <div className="glass p-6 rounded-2xl border border-border-color flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/25 flex items-center justify-center text-amber">
            <AlertTriangle size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-sage uppercase tracking-wider">Indexed Failures</p>
            <p className="text-2xl font-black text-cream font-mono">15,921 cases</p>
          </div>
        </div>

        <div className="glass p-6 rounded-2xl border border-border-color flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/25 flex items-center justify-center text-teal">
            <ShieldAlert size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-sage uppercase tracking-wider">Top Failure Cause</p>
            <p className="text-2xl font-black text-cream">No Market Need (43%)</p>
          </div>
        </div>
      </div>

      {/* ── FILTER CONTROLS ── */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-card-bg/20 p-6 rounded-2xl border border-border-color">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cream/45" size={16} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-navy/80 border border-border-color rounded-xl pl-10 pr-4 py-2.5 text-xs font-semibold text-cream placeholder-cream/40 focus:border-amber outline-none"
            placeholder="Search by startup name or keywords..."
          />
        </div>

        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                selectedSector === sector
                  ? "bg-teal border-teal text-cream"
                  : "bg-navy/60 border-border-color text-cream/70 hover:border-sage"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
      </div>

      {/* ── CARDS LIST ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStartups.map((startup) => (
          <div
            key={startup.id}
            className="glass p-6 rounded-2xl border border-border-color hover:border-red-400/40 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h4 className="font-extrabold text-lg text-cream">{startup.name}</h4>
                  <p className="text-[10px] text-cream/40 font-bold uppercase tracking-wider">{startup.sector}</p>
                </div>
                <span className="text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded font-extrabold">
                  FAILED {startup.yearFailed}
                </span>
              </div>

              <p className="text-xs text-cream/75 leading-relaxed italic">
                &ldquo;{startup.postMortem}&rdquo;
              </p>
            </div>

            <div className="border-t border-border-color/60 pt-4 space-y-2">
              <div className="flex justify-between text-[10px] font-bold text-cream/55">
                <span>Location: {startup.location}</span>
                <span>Active: {startup.yearFounded} - {startup.yearFailed}</span>
              </div>
              <div className="flex justify-between text-[11px] font-extrabold text-amber">
                <span>Reason: {startup.failureReason}</span>
                <span className="font-mono">Raised: ${(startup.totalFunding / 1e6).toFixed(1)}M</span>
              </div>
            </div>
          </div>
        ))}

        {filteredStartups.length === 0 && (
          <div className="col-span-full text-center py-16 text-cream/40 font-bold">
            No failed case studies found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}
