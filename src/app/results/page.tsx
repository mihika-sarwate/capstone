"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Users,
  Compass,
  Lightbulb,
  Dna,
  Search,
  CheckCircle,
  Skull
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Load variables from params, fallback to InsurShield defaults
  const name = searchParams.get("name") || "InsurShield";
  const industry = searchParams.get("industry") || "InsurTech";
  const funding = Number(searchParams.get("funding") || "25000");
  const burn = Number(searchParams.get("burn") || "6000");
  const mrr = Number(searchParams.get("mrr") || "1200");
  const geography = searchParams.get("geography") || "India - Tier 1";
  const team = searchParams.get("team") || "2 - Co-founders";
  const model = searchParams.get("model") || "Subscription (SaaS)";

  // Compute calculated metrics
  const monthlyRunway = burn > 0 ? (funding / burn).toFixed(1) : "N/A";
  
  // Custom success logic based on variables
  let successProbability = 68;
  let statusText = "Medium Risk";
  let statusColor = "text-amber border-amber/30 bg-amber/10";
  
  if (funding < 50000 && industry === "InsurTech") {
    successProbability = 51;
    statusText = "High Failure Risk";
    statusColor = "text-red-400 border-red-500/30 bg-red-500/10";
  } else if (funding > 200000) {
    successProbability = 82;
    statusText = "Low Failure Risk";
    statusColor = "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${name} Prediction Analysis`}
        subtitle={`${industry} · ${model} · ${geography} · ${team} · Runway: ${monthlyRunway} months`}
        action={
          <button
            onClick={() => router.push("/analyze")}
            className="bg-card-bg hover:bg-card-bg/85 border border-border-color text-cream font-bold px-5 py-2.5 rounded-2xl text-xs transition-all cursor-pointer"
          >
            Re-run Sandbox
          </button>
        }
      />

      {/* ── TOP HIGHLIGHTS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Score Panel */}
        <div className="glass-premium p-8 rounded-3xl border border-border-color text-center flex flex-col items-center justify-center space-y-6">
          <p className="text-xs font-bold text-sage uppercase tracking-wider">Success Probability</p>
          
          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* SVG circle stroke representation */}
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="88" cy="88" r="76" fill="none" stroke="rgba(108,163,162,0.1)" strokeWidth="12" />
              <circle
                cx="88"
                cy="88"
                r="76"
                fill="none"
                stroke={successProbability > 60 ? "#6CA3A2" : "#EA9940"}
                strokeWidth="12"
                strokeDasharray="478"
                strokeDashoffset={478 - (478 * successProbability) / 100}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
              <span className="text-4xl font-extrabold text-cream font-mono">{successProbability}%</span>
              <span className="text-[10px] text-cream/45 uppercase tracking-widest font-bold">Confidence</span>
            </div>
          </div>

          <div className={`border px-4 py-1.5 rounded-full text-xs font-bold ${statusColor}`}>
            {statusText}
          </div>
        </div>

        {/* Risk Attribution List */}
        <div className="glass p-8 rounded-3xl border border-border-color space-y-6 lg:col-span-2">
          <div>
            <h3 className="font-extrabold text-lg text-cream">Top Feature Risk Attribution</h3>
            <p className="text-xs text-cream/50 mt-0.5">SHAP attribution analysis against EdTech, InsurTech databases</p>
          </div>

          <div className="space-y-4">
            {/* Risk 1 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-cream">Product-Market Fit (ICP Alignment)</span>
                <span className="text-amber">43% Risk Factor</span>
              </div>
              <div className="h-3 bg-navy/60 rounded-full overflow-hidden border border-border-color">
                <div className="h-full bg-amber rounded-full" style={{ width: "43%" }} />
              </div>
              <p className="text-[10px] text-cream/50 leading-relaxed">
                High risk of target audience alignment failure. Similar demographics showed zero willingness-to-pay in past profiles.
              </p>
            </div>

            {/* Risk 2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-cream">Cash Runway Exhaustion</span>
                <span className="text-red-400 font-mono">70% Risk Factor</span>
              </div>
              <div className="h-3 bg-navy/60 rounded-full overflow-hidden border border-border-color">
                <div className="h-full bg-red-400 rounded-full" style={{ width: "70%" }} />
              </div>
              <p className="text-[10px] text-cream/50 leading-relaxed">
                Burn rate will exhaust current funding in {monthlyRunway} months. InsurTech Median time-to-market is 12-18 months.
              </p>
            </div>

            {/* Risk 3 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-cream">Co-founder & Skill Gaps</span>
                <span className="text-teal font-mono">23% Risk Factor</span>
              </div>
              <div className="h-3 bg-navy/60 rounded-full overflow-hidden border border-border-color">
                <div className="h-full bg-teal rounded-full" style={{ width: "23%" }} />
              </div>
              <p className="text-[10px] text-cream/50 leading-relaxed">
                Operations density is high. Team lacks active regulatory advisory profile.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ── INTERACTIVE EXPLORATION BUTTONS ── */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-cream flex items-center gap-2">
          <span>🧠</span> Intelligent Core Modules
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <Link
            href="/multiverse"
            className="glass p-6 rounded-2xl border border-border-color hover:border-amber/40 transition-all flex flex-col justify-between h-40 group"
          >
            <Compass className="text-amber group-hover:scale-110 transition-transform" size={24} />
            <div>
              <h4 className="font-extrabold text-sm text-cream">Multiverse Simulator</h4>
              <p className="text-[10px] text-cream/50 mt-1">Iterate variables in real-time</p>
            </div>
          </Link>

          <Link
            href="/boardroom"
            className="glass p-6 rounded-2xl border border-border-color hover:border-sage/40 transition-all flex flex-col justify-between h-40 group"
          >
            <Users className="text-sage group-hover:scale-110 transition-transform" size={24} />
            <div>
              <h4 className="font-extrabold text-sm text-cream">AI Boardroom</h4>
              <p className="text-[10px] text-cream/50 mt-1">Review agent roasting transcript</p>
            </div>
          </Link>

          <Link
            href="/founder-dna"
            className="glass p-6 rounded-2xl border border-border-color hover:border-teal/40 transition-all flex flex-col justify-between h-40 group"
          >
            <Dna className="text-teal group-hover:scale-110 transition-transform" size={24} />
            <div>
              <h4 className="font-extrabold text-sm text-cream">Founder DNA</h4>
              <p className="text-[10px] text-cream/50 mt-1">Explore archetype mapping</p>
            </div>
          </Link>

          <Link
            href="/discover"
            className="glass p-6 rounded-2xl border border-border-color hover:border-sage/40 transition-all flex flex-col justify-between h-40 group"
          >
            <Search className="text-sage group-hover:scale-110 transition-transform" size={24} />
            <div>
              <h4 className="font-extrabold text-sm text-cream">Similar Discovery</h4>
              <p className="text-[10px] text-cream/50 mt-1">Find sector peers & vector cases</p>
            </div>
          </Link>

          <Link
            href="/recommendations"
            className="glass p-6 rounded-2xl border border-border-color hover:border-amber/40 transition-all flex flex-col justify-between h-40 group"
          >
            <Lightbulb className="text-amber group-hover:scale-110 transition-transform" size={24} />
            <div>
              <h4 className="font-extrabold text-sm text-cream">Recommendations</h4>
              <p className="text-[10px] text-cream/50 mt-1">Get custom founder checklist</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center min-h-[400px] text-cream/55 text-xs font-bold gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-t-amber border-border-color animate-spin" />
          Loading simulation results...
        </div>
      }>
        <ResultsContent />
      </Suspense>
    </div>
  );
}
