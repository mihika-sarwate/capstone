"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Award, BarChart3, AlertTriangle, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { marketPulseData } from "@/lib/mockData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function MarketPulsePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <PageHeader
        title="Market Pulse Engine"
        subtitle="Live macroeconomic trends, VC dry powder indicators, and sector-specific funding signals."
      />

      {/* ── MACRO INDICATORS ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketPulseData.macroIndicators.map((ind, idx) => (
          <div key={idx} className="glass p-5 rounded-2xl border border-border-color space-y-2">
            <p className="text-[10px] font-bold text-sage uppercase tracking-wider">{ind.name}</p>
            <p className="text-sm font-extrabold text-cream">{ind.status}</p>
            <div className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${ind.color === "green" ? "bg-emerald-400" : "bg-amber"}`} />
              <span className="text-[9px] font-bold text-cream/40 uppercase">Economic signal</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── RECHARTS VISUALIZATION ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Chart Panel */}
        <div className="lg:col-span-2 glass-premium p-6 rounded-3xl border border-border-color space-y-4">
          <div>
            <h3 className="font-extrabold text-base text-cream">Funding Trends Over Time ($ Billions)</h3>
            <p className="text-[10px] text-cream/50 mt-0.5">Comparative annual sector allocations</p>
          </div>

          <div className="h-72 w-full">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketPulseData.fundingHistory} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(108,163,162,0.1)" />
                  <XAxis dataKey="year" stroke="rgba(236,231,220,0.5)" style={{ fontSize: 10, fontWeight: 700 }} />
                  <YAxis stroke="rgba(236,231,220,0.5)" style={{ fontSize: 10, fontWeight: 700 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#12212E", borderColor: "rgba(108,163,162,0.3)", borderRadius: 12, color: "#ECE7DC" }}
                    labelStyle={{ fontWeight: "bold" }}
                  />
                  <Legend wrapperStyle={{ fontSize: 10, fontWeight: "bold", color: "#ECE7DC" }} />
                  <Line type="monotone" dataKey="AI_SaaS" stroke="#EA9940" strokeWidth={3} name="AI & SaaS" dot={{ fill: "#EA9940" }} />
                  <Line type="monotone" dataKey="FinTech" stroke="#307082" strokeWidth={2} name="FinTech" />
                  <Line type="monotone" dataKey="InsurTech" stroke="#6CA3A2" strokeWidth={2} name="InsurTech" />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-cream/40">
                Loading line visualizations...
              </div>
            )}
          </div>
        </div>

        {/* Sector Scores */}
        <div className="glass p-6 rounded-3xl border border-border-color space-y-4">
          <div>
            <h3 className="font-extrabold text-base text-cream">Sector Timing Metric Grid</h3>
            <p className="text-[10px] text-cream/50 mt-0.5">Current index score for market launches</p>
          </div>

          <div className="space-y-4">
            {marketPulseData.sectors.map((sec, idx) => (
              <div key={idx} className="flex items-center justify-between gap-4 border-b border-border-color/60 pb-3 last:border-b-0 last:pb-0">
                <div>
                  <h4 className="font-bold text-xs text-cream">{sec.name}</h4>
                  <span className="text-[9px] text-cream/40">Macro risk: {sec.economicRisk}</span>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono font-extrabold text-amber">{sec.timingScore}/100</p>
                  <p className="text-[9px] font-bold text-sage uppercase">Timing Index</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
