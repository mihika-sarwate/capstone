"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PlusCircle, Search, Compass, TrendingUp, Skull, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { dashboardProjects } from "@/lib/mockData";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <PageHeader
        title="Dashboard"
        subtitle="Manage and analyze your startup simulations and predictive profiles."
        action={
          <Link
            href="/analyze"
            className="bg-amber hover:bg-amber/90 text-navy font-extrabold px-5 py-3 rounded-2xl text-sm shadow-[0_4px_20px_rgba(234,153,64,0.25)] flex items-center gap-2 transition-all cursor-pointer"
          >
            <PlusCircle size={18} /> Analyze Startup
          </Link>
        }
      />

      {/* ── METRIC CARDS ── */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass p-6 rounded-2xl border border-border-color space-y-1">
          <p className="text-[10px] font-bold text-sage uppercase tracking-wider">Active Projects</p>
          <p className="text-3xl font-extrabold text-cream font-mono">
            {dashboardProjects.length}
          </p>
          <p className="text-xs text-cream/40 font-semibold">Simulations saved in profile</p>
        </div>
        <div className="glass p-6 rounded-2xl border border-border-color space-y-1">
          <p className="text-[10px] font-bold text-sage uppercase tracking-wider">Avg. Success Chance</p>
          <p className="text-3xl font-extrabold text-amber font-mono">65%</p>
          <p className="text-xs text-cream/40 font-semibold">Across all iterations</p>
        </div>
        <div className="glass p-6 rounded-2xl border border-border-color space-y-1">
          <p className="text-[10px] font-bold text-sage uppercase tracking-wider">Graveyard Database</p>
          <p className="text-3xl font-extrabold text-cream font-mono">15,921</p>
          <p className="text-xs text-cream/40 font-semibold">Real failed cases indexed</p>
        </div>
        <div className="glass p-6 rounded-2xl border border-border-color space-y-1">
          <p className="text-[10px] font-bold text-sage uppercase tracking-wider">Model Status</p>
          <p className="text-3xl font-extrabold text-emerald-400 font-mono">Active</p>
          <p className="text-xs text-cream/40 font-semibold">Version 1.05.3 Neural Net</p>
        </div>
      </div>

      {/* ── TWO-COLUMN CONTENT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Projects List */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg font-bold text-cream flex items-center gap-2">
            <span>📁</span> Recent Startup Profiles
          </h3>
          <div className="space-y-4">
            {dashboardProjects.map((project) => (
              <div
                key={project.id}
                className="glass p-6 rounded-2xl border border-border-color hover:border-sage/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-extrabold text-base text-cream">{project.name}</h4>
                    <span className="text-[10px] bg-teal/20 text-sage border border-border-color px-2.5 py-0.5 rounded-full font-bold">
                      {project.industry}
                    </span>
                  </div>
                  <p className="text-xs text-cream/60 line-clamp-1 max-w-md">
                    {project.description}
                  </p>
                  <p className="text-[10px] text-cream/40 font-medium">
                    Created: {project.createdAt} · Stage: {project.stage}
                  </p>
                </div>

                <div className="flex items-center gap-6 justify-between md:justify-end">
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-sage">Success Prob.</p>
                    <p className={`text-xl font-extrabold font-mono ${project.successProbability > 60 ? "text-emerald-400" : "text-amber"}`}>
                      {project.successProbability}%
                    </p>
                  </div>
                  <button
                    onClick={() => router.push(`/results?id=${project.id}`)}
                    className="p-3 bg-teal/20 hover:bg-teal text-cream rounded-xl border border-border-color hover:scale-105 transition-all cursor-pointer"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tools & Tips */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-cream flex items-center gap-2">
            <span>⚡</span> Platform Quick Tools
          </h3>
          <div className="space-y-4">
            <Link
              href="/graveyard"
              className="block glass p-5 rounded-2xl border border-border-color hover:border-amber/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-500/10 border border-red-500/25 text-red-400 rounded-xl group-hover:bg-red-500/20 transition-all">
                  <Skull size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-cream group-hover:text-amber">Startup Graveyard</h4>
                  <p className="text-xs text-cream/50 mt-0.5">Explore 15K+ failed post-mortems</p>
                </div>
              </div>
            </Link>

            <Link
              href="/market-pulse"
              className="block glass p-5 rounded-2xl border border-border-color hover:border-emerald-400/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-xl group-hover:bg-emerald-500/20 transition-all">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-cream group-hover:text-emerald-400">Market Pulse</h4>
                  <p className="text-xs text-cream/50 mt-0.5">Track live funding timing metrics</p>
                </div>
              </div>
            </Link>

            <Link
              href="/multiverse"
              className="block glass p-5 rounded-2xl border border-border-color hover:border-sage/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-teal/10 border border-teal/25 text-sage rounded-xl group-hover:bg-teal/20 transition-all">
                  <Compass size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-cream group-hover:text-sage">Multiverse Simulator</h4>
                  <p className="text-xs text-cream/50 mt-0.5">Iterate variables to increase odds</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
