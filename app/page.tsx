"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleGetStarted() {
    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("You are on the early-access list! We will contact you soon.");
    setEmail("");
  }

  function scrollToFeatures() {
    document
      .getElementById("features")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <section className="relative isolate min-h-screen">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(109,75,255,0.35),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(0,196,255,0.18),transparent_27%),radial-gradient(circle_at_50%_95%,rgba(65,64,255,0.20),transparent_35%)]" />

        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-lg font-black text-[#07111f]">
              R
            </div>
            <span className="text-lg font-bold tracking-tight">
              ReelDoctor <span className="text-cyan-300">AI</span>
            </span>
          </div>

          <button
            onClick={scrollToFeatures}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Explore
          </button>
        </nav>

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-16 pt-14 text-center sm:px-8 sm:pt-24">
          <div className="mb-6 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            Built for creators who want smarter growth
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
            Your personal{" "}
            <span className="bg-gradient-to-r from-violet-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Instagram Growth Coach.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            ReelDoctor AI studies your content, niche, audience and performance
            patterns to tell you exactly what to improve—and what reel to make
            next.
          </p>

          <div className="mt-10 flex w-full max-w-xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-violet-950/30 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email for early access"
              className="h-12 flex-1 rounded-xl border border-white/10 bg-[#0d1a2b] px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
            />

            <a
              href="/onboarding"
              className="flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 text-sm font-bold text-[#05101d] transition hover:scale-[1.02]"
            >
              Get Free Audit
            </a>
          </div>

          {message && (
            <p className="mt-3 text-sm text-cyan-200">{message}</p>
          )}

          <p className="mt-4 text-xs text-slate-500">
            No spam. Free account audit. No credit card needed.
          </p>

          <div className="mt-16 grid w-full max-w-5xl gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
              <p className="text-3xl">01</p>
              <h2 className="mt-4 text-lg font-bold">Account Audit</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Find weak hooks, unclear content strategy, profile mistakes and
                missed growth opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
              <p className="text-3xl">02</p>
              <h2 className="mt-4 text-lg font-bold">Smart Reel Scripts</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Get hooks, scripts, captions, hashtags and CTAs made for your
                niche, language and target audience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
              <p className="mt-2 text-3xl">03</p>
              <h2 className="mt-4 text-lg font-bold">Creator Brain</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                The AI learns what performs for you and gives better
                recommendations over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="border-t border-white/10 bg-[#0a1627] px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            More than a script tool
          </p>

          <div className="mt-4 grid gap-10 lg:grid-cols-2 lg:items-end">
            <h2 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl">
              Stop guessing what to post. Build a growth system.
            </h2>

            <p className="max-w-xl text-base leading-7 text-slate-300">
              Every recommendation is based on your selected niche, content
              language, country, audience and goals. ReelDoctor AI does not
              promise virality—it helps you make smarter content decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Growth Score",
                "Know exactly where your profile needs improvement.",
              ],
              [
                "Hook Analyzer",
                "Make your first three seconds stronger.",
              ],
              [
                "Script Planner",
                "Turn one topic into a complete reel plan.",
              ],
              [
                "Global Ready",
                "Create naturally for India or any audience worldwide.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#0d1b30] p-5"
              >
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-500/15 to-cyan-400/10 p-8 text-center sm:p-12">
            <h2 className="text-3xl font-black sm:text-4xl">
              Make your next reel more intentional.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Begin with a free account audit, then let the AI guide your
              content strategy one reel at a time.
            </p>

            <a
              href="/onboarding"
              className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#091526] transition hover:bg-cyan-100"
            >
              Start Free Audit
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}