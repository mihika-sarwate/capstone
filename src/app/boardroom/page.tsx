"use client";

import { useState } from "react";
import { Users, ShieldCheck, Play, ArrowDownToLine, MessageSquare } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { boardroomAgents } from "@/lib/mockData";

export default function BoardroomPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [isDebating, setIsDebating] = useState(false);
  const [debateFinished, setDebateFinished] = useState(false);

  const startDebate = () => {
    setIsDebating(true);
    setDebateFinished(false);
    setMessages([]);

    const fullTranscript = [
      {
        agentId: "investor",
        name: "Vikas Singhania",
        role: "Investor Agent (VC Partner)",
        avatar: "💼",
        text: "Let's be brutally honest here. ₹20 Lakhs ($25K) is a rounding error in InsurTech. If you launch this now, regulatory compliance fees will eat your entire budget. You have less than 4 months of runway before you go under.",
        verdict: "Hard Pass on Current Terms",
        style: "v-fail"
      },
      {
        agentId: "product",
        name: "Dr. Sarah Chen",
        role: "Product Agent (ex-Stripe Product Lead)",
        avatar: "🛠️",
        text: "Vikas makes a fair financial point, but the product-market fit is the real killer. College students do not buy insurance. Their perceived value of risk is zero. Pivot to freelancers or micro-delivery teams.",
        verdict: "ICP Pivot Necessary",
        style: "v-warn"
      },
      {
        agentId: "marketing",
        name: "Liam O'Connor",
        role: "Marketing Agent (GTM Specialist)",
        avatar: "📢",
        text: "I agree with Sarah. InsurTech customer acquisition cost (CAC) runs $38–120 per user. You can buy maybe 200 users before you're dead. Try embedding distribution inside freelance job boards.",
        verdict: "Revise GTM Model",
        style: "v-warn"
      },
      {
        agentId: "financial",
        name: "Marcus Aurelius Group",
        role: "Financial Auditor Agent",
        avatar: "💰",
        text: "The financial runway calculation is final. A burn rate of $6,000 against $25,000 yields exactly 4.1 months. Delay all core hires, operate on no-code tools, and raise at least $150K before writing code.",
        verdict: "Critical Cash Warning",
        style: "v-fail"
      }
    ];

    // Stream messages one by one
    fullTranscript.forEach((msg, idx) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, msg]);
        if (idx === fullTranscript.length - 1) {
          setIsDebating(false);
          setDebateFinished(true);
        }
      }, (idx + 1) * 2000);
    });
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <PageHeader
        title="AI Boardroom"
        subtitle="Simulated boardroom debate. Witness specialized LLM agents grading your GTM, financial, and product strategy."
        action={
          <button
            onClick={startDebate}
            disabled={isDebating}
            className="bg-amber hover:bg-amber/90 disabled:opacity-50 text-navy font-black uppercase tracking-wider px-6 py-3.5 rounded-2xl text-xs flex items-center gap-2 transition-all cursor-pointer select-none"
          >
            <Play size={14} fill="currentColor" /> {isDebating ? "Debating..." : "Start Board Debate"}
          </button>
        }
      />

      {/* ── AGENTS GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {boardroomAgents.map((agent) => (
          <div key={agent.id} className="glass p-5 rounded-2xl border border-border-color space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">{agent.avatar}</span>
              <span className="text-xs font-mono font-bold text-cream/40">Score: {agent.score}/10</span>
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-cream">{agent.name}</h4>
              <p className="text-[10px] text-sage font-bold tracking-wider uppercase mt-0.5">{agent.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── DEBATE CHAT WINDOW ── */}
      <div className="glass-premium rounded-3xl border border-border-color min-h-[400px] flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="bg-black/25 border-b border-border-color p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider text-cream/80">Active Live Debate Log</span>
          </div>
          <span className="text-[10px] font-bold text-cream/40">4 AGENTS SYNCED</span>
        </div>

        {/* Message body */}
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          {messages.length === 0 && !isDebating && (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
              <MessageSquare size={36} className="text-cream/20" />
              <p className="text-sm font-bold text-cream/40">Click &ldquo;Start Board Debate&rdquo; to begin agent roasts.</p>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div key={idx} className="flex gap-4 items-start animate-fadeIn max-w-3xl">
              <div className="w-10 h-10 rounded-xl bg-teal/20 border border-border-color flex items-center justify-center text-xl shrink-0">
                {msg.avatar}
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-cream">{msg.name}</span>
                  <span className="text-[9px] bg-amber/15 text-amber border border-amber/35 px-2.5 py-0.5 rounded font-extrabold">
                    {msg.verdict}
                  </span>
                </div>
                <p className="text-xs text-cream/80 leading-relaxed font-medium bg-navy/40 p-4 rounded-xl border border-border-color/60">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}

          {isDebating && (
            <div className="flex gap-2 items-center justify-center text-xs text-cream/40 py-4">
              <span className="w-2 h-2 rounded-full bg-teal animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-teal animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-teal animate-bounce [animation-delay:0.4s]" />
              <span className="font-bold text-[10px] uppercase tracking-wider ml-1">Agent critiques writing...</span>
            </div>
          )}
        </div>

        {/* Consensus Box */}
        {debateFinished && (
          <div className="bg-teal/20 border-t border-border-color p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-extrabold text-sm text-cream flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-400" /> AI Boardroom Consensus Reached
              </h4>
              <p className="text-xs text-cream/60 max-w-xl">
                Proposal rejected under current financial structure. Absolute pivot to B2B2C distribution and tripling of seed target required for subsequent review.
              </p>
            </div>

            <button
              onClick={() => alert("Simulated PDF Board Report downloaded successfully.")}
              className="bg-navy hover:bg-card-bg text-cream border border-border-color font-bold px-5 py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
            >
              <ArrowDownToLine size={14} /> Download Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
