"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Play, Skull, TrendingUp, Compass, ArrowRight, ShieldCheck, Flame, Users, Landmark } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    industry: "InsurTech",
    businessModel: "Subscription (SaaS)",
    targetMarket: "B2C - College students",
    teamSize: "2 - Co-founders",
    funding: "2,00,000",
    geography: "India - Tier 1 city"
  });

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, we would store this, but we will redirect to /results
    router.push(`/results?industry=${formData.industry}&funding=${formData.funding}&team=${formData.teamSize}`);
  };

  return (
    <div className="bg-navy min-h-screen text-cream font-sans relative overflow-x-hidden">


      {/* ── NAV ── */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-navy/90 border-b border-border-color sticky top-0 z-40 backdrop-blur-md">
        <div className="text-xl font-black tracking-tight flex items-center gap-2 select-none">
          <span className="text-amber text-2xl">✦</span> VentureVerse<span className="text-sage">AI</span>
          <span className="text-[10px] font-bold bg-teal text-cream px-2 py-0.5 rounded-full tracking-wide">BETA</span>
        </div>
        <div className="hidden md:flex gap-2">
          <Link href="/graveyard" className="px-4 py-2 text-sm font-semibold text-cream/70 hover:bg-card-bg hover:text-cream rounded-xl transition-all">
            Graveyard
          </Link>
          <Link href="/market-pulse" className="px-4 py-2 text-sm font-semibold text-cream/70 hover:bg-card-bg hover:text-cream rounded-xl transition-all">
            Market Pulse
          </Link>
          <Link href="/dashboard" className="px-4 py-2 text-sm font-semibold text-cream/70 hover:bg-card-bg hover:text-cream rounded-xl transition-all">
            My Startups
          </Link>
        </div>
        <Link href="/dashboard" className="bg-teal hover:bg-teal/80 text-cream px-5 py-2.5 rounded-xl text-sm font-bold shadow-[0_4px_20px_-4px_rgba(48,112,130,0.5)] transition-all flex items-center gap-1.5 border border-border-color">
          Launch App <ArrowRight size={16} />
        </Link>
      </nav>

      {/* ── HERO SECTION ── */}
      <header className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Background Lights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] bg-teal/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[30vw] h-[30vw] bg-amber/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-card-bg border border-border-color px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            <span className="text-amber">✦</span> AI-powered Startup Risk Simulation
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-cream">
            Would your startup <br />
            actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-sage">survive?</span>
          </h1>
          <p className="text-cream/75 font-medium text-base md:text-lg max-w-xl leading-relaxed">
            90% of startups fail. Most founders find out the hard way. Test your idea against 15,000+ real failures before you burn a single rupee building the wrong thing.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/analyze" className="bg-gradient-to-r from-amber to-amber/95 text-navy hover:scale-105 active:scale-95 px-8 py-4 rounded-2xl text-base font-black shadow-[0_4px_24px_rgba(234,153,64,0.3)] transition-all flex items-center gap-2">
              <Play size={18} fill="currentColor" /> Simulate My Startup
            </Link>
            <Link href="/graveyard" className="bg-card-bg hover:bg-card-bg/80 text-cream px-6 py-4 rounded-2xl text-base font-bold border border-border-color transition-all flex items-center gap-2">
              <Skull size={18} /> Search Graveyard
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-teal to-sage rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
          <div className="relative glass-premium p-8 rounded-3xl border border-border-color space-y-6">
            <div className="flex items-center justify-between border-b border-border-color pb-4">
              <div>
                <h3 className="font-extrabold text-lg text-cream">Fast Simulation Sandbox</h3>
                <p className="text-xs text-cream/60">Generate success odds instantaneously</p>
              </div>
              <span className="text-xs font-extrabold text-amber bg-amber/15 border border-amber/35 px-2.5 py-1 rounded-md">
                30s RUN
              </span>
            </div>

            <form onSubmit={handleSimulate} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Industry</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-navy/80 border border-border-color rounded-xl p-3 text-xs font-bold text-cream focus:border-amber outline-none"
                  >
                    <option>InsurTech</option>
                    <option>FinTech</option>
                    <option>EdTech</option>
                    <option>HealthTech</option>
                    <option>SaaS B2B</option>
                    <option>eCommerce</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Model</label>
                  <select
                    value={formData.businessModel}
                    onChange={(e) => setFormData({ ...formData, businessModel: e.target.value })}
                    className="w-full bg-navy/80 border border-border-color rounded-xl p-3 text-xs font-bold text-cream focus:border-amber outline-none"
                  >
                    <option>Subscription (SaaS)</option>
                    <option>Marketplace</option>
                    <option>Freemium</option>
                    <option>D2C</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Team Size</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full bg-navy/80 border border-border-color rounded-xl p-3 text-xs font-bold text-cream focus:border-amber outline-none"
                  >
                    <option>Solo founder</option>
                    <option>2 - Co-founders</option>
                    <option>3–5 people</option>
                    <option>6–10 people</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Funding (₹)</label>
                  <input
                    type="text"
                    value={formData.funding}
                    onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
                    className="w-full bg-navy/80 border border-border-color rounded-xl p-3 text-xs font-bold text-cream focus:border-amber outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-teal hover:bg-teal/95 text-cream py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-border-color cursor-pointer"
              >
                Run Simulation <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* ── STAT STRIP ── */}
      <section className="border-y border-border-color bg-card-bg/25">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border-color text-center py-10">
          <div className="py-6 lg:py-0 space-y-1">
            <p className="text-4xl font-extrabold text-amber font-mono">39K+</p>
            <p className="text-xs font-bold tracking-wider text-sage uppercase">India Closures (2023–25)</p>
            <p className="text-[10px] text-cream/40 font-medium">Tracxn Ecosystem Reports</p>
          </div>
          <div className="py-6 lg:py-0 space-y-1">
            <p className="text-4xl font-extrabold text-cream font-mono">$17.5B</p>
            <p className="text-xs font-bold tracking-wider text-sage uppercase">Raised by Failed Startups</p>
            <p className="text-[10px] text-cream/40 font-medium">CB Insights VC Reports</p>
          </div>
          <div className="py-6 lg:py-0 space-y-1">
            <p className="text-4xl font-extrabold text-amber font-mono">43%</p>
            <p className="text-xs font-bold tracking-wider text-sage uppercase">Fail Due to No Market Need</p>
            <p className="text-[10px] text-cream/40 font-medium">Based on 483 post-mortems</p>
          </div>
          <div className="py-6 lg:py-0 space-y-1">
            <p className="text-4xl font-extrabold text-cream font-mono">22mo</p>
            <p className="text-xs font-bold tracking-wider text-sage uppercase">Median Time to Shutdown</p>
            <p className="text-[10px] text-cream/40 font-medium">Following last institutional raise</p>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Investor-Grade Insights</h2>
          <p className="text-sm text-cream/60">
            A comprehensive suite of predictive ML engines, RAG context networks, and courtroom simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-2xl space-y-4 hover:border-amber transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/35 flex items-center justify-center text-amber">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-extrabold text-lg">Failure Predictor</h3>
            <p className="text-sm text-cream/70">
              Run variables against XGBoost models to compute success distributions and identify failure mode probabilities.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl space-y-4 hover:border-amber transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/35 flex items-center justify-center text-teal">
              <Compass size={24} />
            </div>
            <h3 className="font-extrabold text-lg">Multiverse Simulator</h3>
            <p className="text-sm text-cream/70">
              Tweak team composition, funding scale, or distribution models to preview mathematical probability changes.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl space-y-4 hover:border-amber transition-all">
            <div className="w-12 h-12 rounded-xl bg-sage/10 border border-sage/35 flex items-center justify-center text-sage">
              <Users size={24} />
            </div>
            <h3 className="font-extrabold text-lg">AI Boardroom</h3>
            <p className="text-sm text-cream/70">
              Witness debate transcripts between 4 specialised agents grading your product value, CAC, and regulatory risks.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border-color bg-black/30 py-8 text-center text-xs text-cream/40">
        <p className="font-bold">© 2026 VentureVerse AI. Built for Founders, backed by intelligence.</p>
      </footer>
    </div>
  );
}
