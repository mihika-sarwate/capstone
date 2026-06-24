"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ShieldAlert, Cpu, CheckCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function AnalyzeForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "InsurShield",
    industry: "InsurTech",
    stage: "Pre-seed",
    funding: "25000",
    burn: "6000",
    mrr: "1200",
    revenueModel: "Subscription (SaaS)",
    geography: "India - Tier 1",
    teamSize: "2 - Co-founders",
    description: "AI-powered microinsurance platform targeting college students and freelancers with low-premium, flexible policy structures."
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate high-performance model digesting the inputs
    setTimeout(() => {
      setLoading(false);
      router.push(`/results?name=${formData.name}&industry=${formData.industry}&funding=${formData.funding}&burn=${formData.burn}&mrr=${formData.mrr}&geography=${formData.geography}&team=${formData.teamSize}&model=${formData.revenueModel}`);
    }, 2500);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-navy text-center space-y-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-teal/20 animate-pulse" />
          <div className="absolute inset-0 rounded-full border-4 border-t-amber border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          <Cpu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber animate-bounce" size={28} />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-extrabold text-cream">Digesting Startup Data...</h2>
          <p className="text-xs text-cream/50 max-w-sm">
            Evaluating profile against 15,921 failure post-mortems, running SHAP feature attribution, and assembling AI courtroom agents.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      <PageHeader
        title="Startup Intelligence Form"
        subtitle="Fill in details to benchmark your startup idea against historical success and failure models."
      />

      <form onSubmit={handleSubmit} className="glass-premium p-8 rounded-3xl border border-border-color space-y-8">
        {/* Step Header */}
        <div className="flex items-center justify-between border-b border-border-color pb-5">
          <div>
            <h3 className="font-extrabold text-lg text-cream">Configure Simulation Variables</h3>
            <p className="text-xs text-cream/50 mt-0.5">Please provide accurate financial and operational projections</p>
          </div>
          <span className="text-[10px] font-black uppercase bg-teal text-cream px-3 py-1 rounded-full border border-border-color tracking-wider">
            STEP 1 OF 1
          </span>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Startup Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-navy/60 border border-border-color rounded-xl p-3 text-sm font-semibold text-cream focus:border-amber focus:ring-1 focus:ring-amber outline-none"
              placeholder="e.g. InsurShield"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Target Sector</label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full bg-navy/60 border border-border-color rounded-xl p-3 text-sm font-semibold text-cream focus:border-amber outline-none"
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
            <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Funding Stage</label>
            <select
              value={formData.stage}
              onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
              className="w-full bg-navy/60 border border-border-color rounded-xl p-3 text-sm font-semibold text-cream focus:border-amber outline-none"
            >
              <option>Pre-seed</option>
              <option>Seed</option>
              <option>Series A</option>
              <option>Bootstrapped</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Revenue Model</label>
            <select
              value={formData.revenueModel}
              onChange={(e) => setFormData({ ...formData, revenueModel: e.target.value })}
              className="w-full bg-navy/60 border border-border-color rounded-xl p-3 text-sm font-semibold text-cream focus:border-amber outline-none"
            >
              <option>Subscription (SaaS)</option>
              <option>Marketplace</option>
              <option>Freemium</option>
              <option>D2C</option>
              <option>Transaction fee</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Total Funding Raised ($)</label>
            <input
              type="number"
              required
              value={formData.funding}
              onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
              className="w-full bg-navy/60 border border-border-color rounded-xl p-3 text-sm font-semibold text-cream focus:border-amber outline-none"
              placeholder="e.g. 25000"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Monthly Cash Burn ($)</label>
            <input
              type="number"
              required
              value={formData.burn}
              onChange={(e) => setFormData({ ...formData, burn: e.target.value })}
              className="w-full bg-navy/60 border border-border-color rounded-xl p-3 text-sm font-semibold text-cream focus:border-amber outline-none"
              placeholder="e.g. 6000"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Monthly Recurring Revenue ($)</label>
            <input
              type="number"
              required
              value={formData.mrr}
              onChange={(e) => setFormData({ ...formData, mrr: e.target.value })}
              className="w-full bg-navy/60 border border-border-color rounded-xl p-3 text-sm font-semibold text-cream focus:border-amber outline-none"
              placeholder="e.g. 1200"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Target Geography</label>
            <select
              value={formData.geography}
              onChange={(e) => setFormData({ ...formData, geography: e.target.value })}
              className="w-full bg-navy/60 border border-border-color rounded-xl p-3 text-sm font-semibold text-cream focus:border-amber outline-none"
            >
              <option>India - Tier 1</option>
              <option>India - Tier 2/3</option>
              <option>Southeast Asia</option>
              <option>Global</option>
            </select>
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Founding Team Size</label>
            <select
              value={formData.teamSize}
              onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
              className="w-full bg-navy/60 border border-border-color rounded-xl p-3 text-sm font-semibold text-cream focus:border-amber outline-none"
            >
              <option>Solo founder</option>
              <option>2 - Co-founders</option>
              <option>3–5 people</option>
              <option>6–10 people</option>
            </select>
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-sage">Product Description & Strategy</label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-navy/60 border border-border-color rounded-xl p-3 text-sm font-semibold text-cream focus:border-amber outline-none resize-none"
              placeholder="Describe what your product does, distribution strategy, and core user benefit."
            />
          </div>
        </div>

        {/* Form Note & Submit */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border-color pt-6">
          <span className="text-xs text-cream/40 flex items-center gap-1.5">
            <ShieldAlert size={14} className="text-amber" />
            Your sandbox projections are stored locally and will never be shared.
          </span>
          <button
            type="submit"
            className="w-full md:w-auto bg-gradient-to-r from-amber to-amber/90 text-navy font-black uppercase tracking-wider px-8 py-3.5 rounded-xl text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_4px_24px_rgba(234,153,64,0.25)] cursor-pointer"
          >
            Compute Prediction Score
          </button>
        </div>
      </form>
    </div>
  );
}
