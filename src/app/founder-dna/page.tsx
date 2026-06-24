"use client";

import { useState } from "react";
import { Dna, ShieldAlert, Zap, Compass, RefreshCw } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { founderDNAArchetypes } from "@/lib/mockData";

export default function FounderDNAPage() {
  const [archetypeIndex, setArchetypeIndex] = useState(0);
  const [sliders, setSliders] = useState({
    gtmRisk: 80,
    technicalFocus: 45,
    financeGovernance: 30
  });

  const activeArchetype = founderDNAArchetypes[archetypeIndex];

  // Dynamically compute scores based on sliders to show visual responsiveness
  const computedLeadership = Math.round((sliders.gtmRisk * 0.6) + (sliders.financeGovernance * 0.4));
  const computedRiskAppetite = Math.round(sliders.gtmRisk);
  const computedCommunication = Math.round((sliders.gtmRisk * 0.7) + (sliders.technicalFocus * 0.3));

  const toggleArchetype = () => {
    setArchetypeIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <PageHeader
        title="Founder DNA Profiler"
        subtitle="Analyze founding team behavioral archetypes, operational risk limits, and structural skill gaps."
        action={
          <button
            onClick={toggleArchetype}
            className="bg-card-bg hover:bg-card-bg/85 border border-border-color text-cream font-bold px-5 py-2.5 rounded-2xl text-xs transition-all flex items-center gap-2 cursor-pointer select-none"
          >
            <RefreshCw size={14} /> Toggle Archetype Profile
          </button>
        }
      />

      {/* ── TWO COLUMN PROFILE ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* DNA Traits Card */}
        <div className="glass-premium p-8 rounded-3xl border border-border-color space-y-6 lg:col-span-2">
          <div className="flex justify-between items-start gap-4 border-b border-border-color pb-4">
            <div>
              <p className="text-[10px] font-bold text-amber uppercase tracking-wider">Identified Archetype</p>
              <h3 className="text-xl font-extrabold text-cream mt-0.5">{activeArchetype.name}</h3>
            </div>
            <span className="w-10 h-10 rounded-xl bg-amber/10 border border-amber/35 flex items-center justify-center text-amber text-lg">
              🧬
            </span>
          </div>

          <p className="text-xs text-cream/70 leading-relaxed font-medium">
            {activeArchetype.description}
          </p>

          {/* DNA Traits Slider Preview Output */}
          <div className="space-y-4 pt-2">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-cream">Leadership Density</span>
                <span className="text-sage font-mono">{computedLeadership}%</span>
              </div>
              <div className="h-2 bg-navy/60 rounded-full overflow-hidden border border-border-color">
                <div className="h-full bg-sage rounded-full" style={{ width: `${computedLeadership}%` }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-cream">Risk Appetite</span>
                <span className="text-amber font-mono">{computedRiskAppetite}%</span>
              </div>
              <div className="h-2 bg-navy/60 rounded-full overflow-hidden border border-border-color">
                <div className="h-full bg-amber rounded-full" style={{ width: `${computedRiskAppetite}%` }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-cream">Stakeholder Communication</span>
                <span className="text-teal font-mono">{computedCommunication}%</span>
              </div>
              <div className="h-2 bg-navy/60 rounded-full overflow-hidden border border-border-color">
                <div className="h-full bg-teal rounded-full" style={{ width: `${computedCommunication}%` }} />
              </div>
            </div>
          </div>

          {/* Decision style metadata */}
          <div className="grid grid-cols-2 gap-4 border-t border-border-color pt-4 text-xs">
            <div>
              <p className="font-bold text-cream/55">Decision-making Style:</p>
              <p className="font-extrabold text-cream mt-0.5">{activeArchetype.decisionStyle}</p>
            </div>
            <div>
              <p className="font-bold text-cream/55">Primary Vulnerability Gaps:</p>
              <p className="font-extrabold text-red-400 mt-0.5">{activeArchetype.gaps}</p>
            </div>
          </div>
        </div>

        {/* Behavioral Sandbox */}
        <div className="glass p-6 rounded-3xl border border-border-color space-y-6">
          <div>
            <h3 className="font-extrabold text-base text-cream">DNA Sandbox Variable Controls</h3>
            <p className="text-[10px] text-cream/50 mt-0.5">Tweak sliders to recalibrate DNA metrics</p>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-cream/80">GTM Aggression</span>
                <span className="text-amber font-mono">{sliders.gtmRisk}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={sliders.gtmRisk}
                onChange={(e) => setSliders({ ...sliders, gtmRisk: Number(e.target.value) })}
                className="w-full h-1 bg-navy/70 rounded-lg appearance-none cursor-pointer accent-amber"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-cream/80">Technical Focus</span>
                <span className="text-teal font-mono">{sliders.technicalFocus}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={sliders.technicalFocus}
                onChange={(e) => setSliders({ ...sliders, technicalFocus: Number(e.target.value) })}
                className="w-full h-1 bg-navy/70 rounded-lg appearance-none cursor-pointer accent-teal"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-cream/80">Financial Governance</span>
                <span className="text-sage font-mono">{sliders.financeGovernance}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={sliders.financeGovernance}
                onChange={(e) => setSliders({ ...sliders, financeGovernance: Number(e.target.value) })}
                className="w-full h-1 bg-navy/70 rounded-lg appearance-none cursor-pointer accent-sage"
              />
            </div>
          </div>

          <div className="bg-navy/40 p-4 border border-border-color rounded-xl flex items-start gap-2 text-[10px] leading-relaxed">
            <ShieldAlert size={16} className="text-amber shrink-0" />
            <p className="text-cream/60">
              Note: Extreme GTM Aggression combined with low Financial Governance corresponds to a 68% probability of early cash runway exhaust based on 2,400+ SaaS historical profiles.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
