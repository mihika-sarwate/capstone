"use client";

import { useState } from "react";
import { Compass, ShieldAlert, Sparkles, Check, X, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function MultiversePage() {
  const [funding, setFunding] = useState(25000);
  const [hasCoFounder, setHasCoFounder] = useState(false);
  const [targetMarket, setTargetMarket] = useState("B2C - Students");

  // Dynamically compute success odds based on simulation settings
  let successProbability = 51;
  if (hasCoFounder) successProbability += 11;
  if (funding >= 150000) successProbability += 17;
  else if (funding >= 75000) successProbability += 8;
  if (targetMarket === "B2B - SMEs") successProbability += 10;

  // Clip probability at 95% maximum representable confidence
  successProbability = Math.min(successProbability, 95);

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <PageHeader
        title="Multiverse Simulator™"
        subtitle="Recalibrate core project metrics to forecast how execution pivots alter startup survival rates."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Simulator Controls */}
        <div className="lg:col-span-5 glass p-8 rounded-3xl border border-border-color space-y-6">
          <div>
            <h3 className="font-extrabold text-base text-cream">Variable Overrides</h3>
            <p className="text-[10px] text-cream/50 mt-0.5">Toggle parameters to recalculate failure outcomes</p>
          </div>

          <div className="space-y-6">
            {/* Funding slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-cream/80">Operational Capital Raised</span>
                <span className="text-amber font-mono">${funding.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="250000"
                step="5000"
                value={funding}
                onChange={(e) => setFunding(Number(e.target.value))}
                className="w-full h-1 bg-navy/70 rounded-lg appearance-none cursor-pointer accent-amber"
              />
              <div className="flex justify-between text-[9px] text-cream/40 font-bold">
                <span>$10,000 (Tight)</span>
                <span>$250,000 (Target)</span>
              </div>
            </div>

            {/* Co-founder check */}
            <div className="flex items-center justify-between p-4 bg-navy/40 border border-border-color rounded-xl">
              <div>
                <p className="text-xs font-bold text-cream">Domain Co-founder present?</p>
                <p className="text-[10px] text-cream/50 mt-0.5">Adds critical regulatory and industry contacts</p>
              </div>
              <button
                type="button"
                onClick={() => setHasCoFounder(!hasCoFounder)}
                className={`w-12 h-6 rounded-full p-1 transition-all ${
                  hasCoFounder ? "bg-teal" : "bg-navy/80 border border-border-color"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-cream transition-all ${
                    hasCoFounder ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Market select */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-sage">ICP / Target Demographic</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setTargetMarket("B2C - Students")}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    targetMarket === "B2C - Students"
                      ? "bg-teal border-teal text-cream"
                      : "bg-navy/60 border-border-color text-cream/65"
                  }`}
                >
                  B2C - Students (Lower WTP)
                </button>
                <button
                  type="button"
                  onClick={() => setTargetMarket("B2B - SMEs")}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    targetMarket === "B2B - SMEs"
                      ? "bg-teal border-teal text-cream"
                      : "bg-navy/60 border-border-color text-cream/65"
                  }`}
                >
                  B2B - SMEs (Premium WTP)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Projections Visual Panel */}
        <div className="lg:col-span-7 glass-premium p-8 rounded-3xl border border-border-color flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between border-b border-border-color pb-4">
            <div>
              <p className="text-[10px] font-bold text-sage uppercase tracking-wider">Dynamic Survival Forecast</p>
              <h3 className="text-xl font-extrabold text-cream mt-0.5">Iterative Probability Model</h3>
            </div>
            <span className="p-2 bg-teal/15 text-teal border border-teal/35 rounded-xl">
              <Sparkles size={20} />
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-around gap-6 py-6">
            <div className="text-center space-y-2">
              <p className="text-[10px] font-bold text-cream/55 uppercase tracking-wider">Baseline Survival Chance</p>
              <p className="text-4xl font-extrabold text-cream/50 font-mono line-through">51%</p>
            </div>
            <div className="text-5xl text-cream/20 font-bold hidden md:block">→</div>
            <div className="text-center space-y-2 bg-teal/10 border border-teal/30 px-8 py-6 rounded-3xl min-w-[200px]">
              <p className="text-[10px] font-bold text-amber uppercase tracking-wider">Simulated Odds</p>
              <p className="text-5xl font-black text-amber font-mono mt-1">{successProbability}%</p>
              <p className="text-[10px] text-cream/40 font-bold mt-1">CONFIDENCE INTERVAL</p>
            </div>
          </div>

          <div className="space-y-3 bg-navy/40 p-4 border border-border-color rounded-xl text-xs leading-relaxed text-cream/70 font-semibold">
            <div className="flex items-center gap-2">
              {hasCoFounder ? <Check size={16} className="text-emerald-400" /> : <X size={16} className="text-red-400" />}
              <span>Domain Expert advisor onboarded (+11% odds)</span>
            </div>
            <div className="flex items-center gap-2">
              {funding >= 150000 ? (
                <Check size={16} className="text-emerald-400" />
              ) : (
                <X size={16} className="text-red-400" />
              )}
              <span>Secure capital runway above $150K target threshold (+17% odds)</span>
            </div>
            <div className="flex items-center gap-2">
              {targetMarket === "B2B - SMEs" ? (
                <Check size={16} className="text-emerald-400" />
              ) : (
                <X size={16} className="text-red-400" />
              )}
              <span>ICP pivoting to corporate budgets (+10% odds)</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
