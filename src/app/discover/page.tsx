"use client";

import { useState } from "react";
import { Search, Compass, AlertTriangle, ShieldCheck, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function SimilarDiscovery() {
  const [selectedIndustry, setSelectedIndustry] = useState("InsurTech");

  const successes = [
    {
      name: "Digit Insurance",
      similarity: 94,
      funding: "$540M",
      mrr: "$4.2M",
      lessons: "Secured initial scale by partnering with e-commerce portals for travel micro-insurance addon policies, bypassing direct search-ad acquisition costs.",
      location: "Bengaluru, India"
    },
    {
      name: "Acko",
      similarity: 88,
      funding: "$450M",
      mrr: "$3.5M",
      lessons: "Leveraged partnerships with ride-hailing apps (Ola, Rapido) to embed trip insurance, capturing millions of users with zero friction onboarding.",
      location: "Mumbai, India"
    }
  ];

  const failures = [
    {
      name: "InsurShield Alpha (Mock failure)",
      similarity: 96,
      funding: "$15K",
      failureMode: "Burn exhaustion & regulatory non-compliance",
      lessons: "Launched without legal advisory panel. IRDAI regulatory fines consumed the remaining cash reserves in under 3 months.",
      location: "Delhi, India"
    },
    {
      name: "CoverFox (Restructured)",
      similarity: 82,
      funding: "$58M",
      failureMode: "High customer acquisition cost (CAC) bubble",
      lessons: "Attempted to acquire direct consumer insurance buyers through generic search advertising. Paid acquisition costs exceeded lifetime customer value.",
      location: "Mumbai, India"
    }
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <PageHeader
        title="Similar Startup Discovery"
        subtitle="Vector similarity index. Benchmarks your idea's business structure against historical peer cohorts."
      />

      {/* ── SECTOR FILTER ── */}
      <div className="flex gap-2 bg-card-bg/25 p-4 rounded-2xl border border-border-color overflow-x-auto">
        {["InsurTech", "FinTech", "EdTech", "HealthTech", "AI / SaaS"].map((ind) => (
          <button
            key={ind}
            onClick={() => setSelectedIndustry(ind)}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
              selectedIndustry === ind
                ? "bg-teal border-teal text-cream"
                : "bg-navy/50 border-border-color text-cream/70 hover:border-sage"
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      {/* ── PEER SECTIONS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Success Cohorts */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-cream flex items-center gap-2">
            <span className="p-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 rounded-lg">
              <ShieldCheck size={18} />
            </span>
            Similar Success Cohorts (Peers to Benchmark)
          </h3>

          <div className="space-y-6">
            {successes.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-border-color space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-extrabold text-base text-cream flex items-center gap-2">
                      {item.name}
                      <span className="text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/35 px-2.5 py-0.5 rounded-full font-bold">
                        {item.similarity}% match
                      </span>
                    </h4>
                    <p className="text-[10px] text-cream/40 font-bold uppercase tracking-wider mt-1">{item.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-sage uppercase tracking-wider">Total Funding</p>
                    <p className="text-sm font-black text-cream font-mono">{item.funding}</p>
                  </div>
                </div>

                <div className="bg-navy/55 border border-border-color p-4 rounded-xl space-y-1.5">
                  <p className="text-[10px] font-bold text-amber uppercase tracking-wider flex items-center gap-1">
                    <span>💡</span> Core Scalability Lesson:
                  </p>
                  <p className="text-xs text-cream/80 leading-relaxed font-medium">
                    {item.lessons}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Failure Cohorts */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-cream flex items-center gap-2">
            <span className="p-1.5 bg-red-500/10 text-red-400 border border-red-500/25 rounded-lg">
              <AlertTriangle size={18} />
            </span>
            Similar Failure Cohorts (Graveyard Comparisons)
          </h3>

          <div className="space-y-6">
            {failures.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-border-color space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-extrabold text-base text-cream flex items-center gap-2">
                      {item.name}
                      <span className="text-[10px] bg-red-500/15 text-red-400 border border-red-500/35 px-2.5 py-0.5 rounded-full font-bold">
                        {item.similarity}% match
                      </span>
                    </h4>
                    <p className="text-[10px] text-cream/40 font-bold uppercase tracking-wider mt-1">{item.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-sage uppercase tracking-wider">Failure Cause</p>
                    <p className="text-xs font-black text-red-400">{item.failureMode}</p>
                  </div>
                </div>

                <div className="bg-navy/55 border border-border-color p-4 rounded-xl space-y-1.5">
                  <p className="text-[10px] font-bold text-amber uppercase tracking-wider flex items-center gap-1">
                    <span>⚠️</span> Failure Mitigation Checklist:
                  </p>
                  <p className="text-xs text-cream/80 leading-relaxed font-medium">
                    {item.lessons}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
