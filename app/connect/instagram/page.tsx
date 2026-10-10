"use client";

import { useState } from "react";

export default function ConnectInstagramPage() {
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  function startConnection() {
    setStatus("loading");

    setTimeout(() => {
      alert(
        "Instagram connection setup is not complete yet. Next, we will add the secure Meta login URL and callback route."
      );
      setStatus("idle");
    }, 800);
  }

  return (
    <main className="min-h-screen bg-[#07111f] px-5 py-8 text-white sm:px-8 sm:py-12">
      <div className="mx-auto max-w-2xl">
        <nav className="mb-10 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black text-[#07111f]">
              R
            </div>

            <span className="font-bold">
              ReelDoctor <span className="text-cyan-300">AI</span>
            </span>
          </a>

          <a
            href="/onboarding"
            className="text-sm font-semibold text-slate-300 hover:text-cyan-300"
          >
            Back
          </a>
        </nav>

        <section className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_80%_10%,rgba(0,196,255,0.18),transparent_25%),radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.25),transparent_30%),#0d1b30] p-7 shadow-2xl shadow-violet-950/20 sm:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-violet-500 to-orange-400 text-3xl">
            ◎
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Secure Instagram connection
          </p>

          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            Connect your Instagram Creator or Business account.
          </h1>

          <p className="mt-4 leading-7 text-slate-300">
            ReelDoctor AI will import the profile and available performance
            insights you allow through Instagram. We never ask for or store
            your Instagram password.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Profile details, bio and follower count",
              "Available reel performance insights",
              "Account-level signals to calculate your growth dashboard",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#07111f]/70 p-4"
              >
                <span className="mt-0.5 text-cyan-300">✓</span>
                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-300/15 bg-amber-300/5 p-4 text-sm leading-6 text-amber-50">
            Your Instagram account must be a Professional account: Creator or
            Business. Personal accounts may not provide analytics access.
          </div>

          <button
            type="button"
            onClick={startConnection}
            disabled={status === "loading"}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3.5 text-sm font-black text-[#06111f] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading"
              ? "Preparing Secure Login..."
              : "Connect Instagram Securely"}
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            You will be redirected to Instagram for authorization. You can
            disconnect access anytime from your Instagram settings.
          </p>
        </section>
      </div>
    </main>
  );
}