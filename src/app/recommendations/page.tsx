"use client";

import { useState } from "react";
import { Lightbulb, CheckCircle2, ShieldCheck, AlertCircle, Bookmark } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { recommendationsList } from "@/lib/mockData";

export default function RecommendationsPage() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(completed).filter(Boolean).length;
  const progressPercent = recommendationsList.length
    ? Math.round((completedCount / recommendationsList.length) * 100)
    : 0;

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <PageHeader
        title="Action Recommendations"
        subtitle="Ranked checklist from the RAG matching engine to optimize survival metrics."
      />

      {/* ── PROGRESS CARD ── */}
      <div className="glass-premium p-6 rounded-3xl border border-border-color flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-extrabold text-base text-cream flex items-center gap-1.5">
            <CheckCircle2 size={18} className="text-emerald-400" /> Action Roadmap Progress
          </h3>
          <p className="text-xs text-cream/50 max-w-sm">
            Check off accomplished milestones to simulate how your overall risk index declines.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex-1 md:w-48 bg-navy/60 rounded-full h-3 overflow-hidden border border-border-color">
            <div
              className="h-full bg-emerald-400 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-sm font-extrabold text-cream font-mono whitespace-nowrap">
            {completedCount} / {recommendationsList.length} done ({progressPercent}%)
          </span>
        </div>
      </div>

      {/* ── ROADMAP CHECKS ── */}
      <div className="space-y-4">
        {recommendationsList.map((item) => {
          const isDone = !!completed[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`glass p-6 rounded-2xl border transition-all cursor-pointer flex gap-4 items-start ${
                isDone ? "border-emerald-500/40 bg-emerald-500/5 opacity-80" : "border-border-color hover:border-amber/40"
              }`}
            >
              <button
                type="button"
                className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                  isDone ? "bg-emerald-500 border-emerald-500 text-navy" : "border-border-color text-transparent"
                }`}
              >
                <CheckCircle2 size={16} fill={isDone ? "currentColor" : "none"} />
              </button>

              <div className="space-y-1.5 flex-1 select-none">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className={`font-extrabold text-sm ${isDone ? "line-through text-cream/40" : "text-cream"}`}>
                    {item.title}
                  </h4>
                  <span className="text-[9px] bg-teal/15 text-sage border border-border-color px-2 py-0.5 rounded font-extrabold uppercase">
                    {item.category}
                  </span>
                  <span
                    className={`text-[9px] border px-2 py-0.5 rounded font-extrabold uppercase ${
                      item.impact === "High"
                        ? "bg-red-500/10 border-red-500/30 text-red-400"
                        : "bg-amber/15 border-amber/35 text-amber"
                    }`}
                  >
                    {item.impact} Impact
                  </span>
                </div>
                <p className={`text-xs ${isDone ? "text-cream/30" : "text-cream/70"} leading-relaxed font-medium`}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
