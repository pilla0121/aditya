"use client";

import { useEffect, useState } from "react";

type CreatorProfile = {
  instagramUsername: string;
  country: string;
  contentLanguage: string;
  audienceCountry: string;
  niche: string;
  followers: string;
  averageViews: string;
  postingFrequency: string;
  mainGoal: string;
};

type ScoreItem = {
  title: string;
  score: number;
  note: string;
};

function getNumber(value: string) {
  const number = Number(value.replace(/,/g, ""));
  return Number.isNaN(number) ? 0 : number;
}

function buildAudit(profile: CreatorProfile) {
  const followers = getNumber(profile.followers);
  const averageViews = getNumber(profile.averageViews);

  const viewRatio =
    followers > 0 ? Math.min(Math.round((averageViews / followers) * 100), 100) : 0;

  const consistencyScore =
    profile.postingFrequency === "Daily"
      ? 85
      : profile.postingFrequency === "4-6 times per week"
        ? 76
        : profile.postingFrequency === "2-3 times per week"
          ? 63
          : profile.postingFrequency === "Once per week"
            ? 48
            : 35;

  const nicheScore = profile.niche ? 72 : 40;
  const hookScore = Math.max(45, Math.min(82, 52 + Math.round(viewRatio / 3)));
  const monetizationScore =
    profile.mainGoal === "Brand deals" || profile.mainGoal === "Monetization"
      ? 58
      : profile.mainGoal === "Sell my product or service"
        ? 64
        : 46;

  const scores: ScoreItem[] = [
    {
      title: "Niche Clarity",
      score: nicheScore,
      note: `${profile.niche || "Your"} content needs 3 clear repeatable pillars.`,
    },
    {
      title: "Hook Strength",
      score: hookScore,
      note: "Your first 2 seconds should make a specific promise or create curiosity.",
    },
    {
      title: "Content Consistency",
      score: consistencyScore,
      note: `Your current posting rhythm: ${profile.postingFrequency || "not selected"}.`,
    },
    {
      title: "Monetization Readiness",
      score: monetizationScore,
      note: `Your selected goal is ${profile.mainGoal || "growth"}. Your profile needs one clear action path.`,
    },
  ];

  const growthScore = Math.round(
    scores.reduce((total, item) => total + item.score, 0) / scores.length
  );

  const problems = [
    {
      number: "01",
      title: `Make your ${profile.niche || "content"} niche easier to understand`,
      why: `New visitors need to know what they will get by following @${profile.instagramUsername.replace("@", "") || "your account"}.`,
      fix: `Use three clear content pillars for your ${profile.niche || "creator"} account. Repeat them in your bio, reel topics and captions.`,
    },
    {
      number: "02",
      title: "Make every reel begin with a stronger hook",
      why: "The first few seconds decide whether people continue watching or scroll away.",
      fix: "Open with a direct pain point, a bold question, a contrarian opinion or a very specific promise.",
    },
    {
      number: "03",
      title: `Turn views into ${profile.mainGoal || "results"}`,
      why: "Attention only becomes growth when the viewer knows what to do next.",
      fix:
        profile.mainGoal === "More followers"
          ? "Use one clear CTA: Follow for the next part or follow for daily niche-specific ideas."
          : profile.mainGoal === "More saves"
            ? "Create checklists, steps and mistakes content, then ask viewers to save the reel."
            : profile.mainGoal === "Brand deals"
              ? "Add a clear niche value proposition and business email to your bio."
              : "End every reel with one clear action: follow, save, comment a keyword or visit your profile.",
    },
  ];

  const sevenDayPlan = [
    [
      "Day 1",
      `Rewrite your bio for your ${profile.niche || "content"} audience: who you help + the result + why they should follow.`,
    ],
    [
      "Day 2",
      `Create a problem-first ${profile.niche || "niche"} reel with a curiosity hook.`,
    ],
    [
      "Day 3",
      "Use your best past topic again, but present it using a completely different hook.",
    ],
    [
      "Day 4",
      `Create a relatable story for your ${profile.audienceCountry || "target"} audience.`,
    ],
    [
      "Day 5",
      "Make a save-worthy list, checklist, steps or common-mistakes reel.",
    ],
    [
      "Day 6",
      `Use a CTA that supports your goal: ${profile.mainGoal || "More views"}.`,
    ],
    [
      "Day 7",
      "Review performance, note the strongest hook, and remake the winning format with a new topic.",
    ],
  ];

  return { scores, growthScore, problems, sevenDayPlan };
}

export default function AuditPage() {
  const [profile, setProfile] = useState<CreatorProfile | null>(null);
  const [showPlan, setShowPlan] = useState(false);

  useEffect(() => {
    const storedProfile = localStorage.getItem("reeldoctor_creator_profile");

    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  if (!profile) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-5 text-white">
        <div className="max-w-md rounded-3xl border border-white/10 bg-[#0d1b30] p-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            ReelDoctor AI
          </p>

          <h1 className="mt-4 text-3xl font-black">
            Create your profile first.
          </h1>

          <p className="mt-4 leading-7 text-slate-300">
            We need your creator details to create a personalized demo audit.
          </p>

          <a
            href="/onboarding"
            className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-[#06111f]"
          >
            Go to Onboarding
          </a>
        </div>
      </main>
    );
  }

  const { scores, growthScore, problems, sevenDayPlan } = buildAudit(profile);

  return (
    <main className="min-h-screen bg-[#07111f] px-5 py-8 text-white sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-10 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black text-[#07111f]">
              R
            </div>

            <span className="font-bold">
              ReelDoctor <span className="text-cyan-300">AI</span>
            </span>
          </a>

          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">
            Free Audit
          </span>
        </nav>

        <section className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_80%_10%,rgba(0,196,255,0.18),transparent_25%),radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.3),transparent_30%),#0d1b30] p-6 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            @{profile.instagramUsername.replace("@", "")} • {profile.niche} creator
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">
                Your Growth Score is{" "}
                <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                  {growthScore}/100.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                This demo audit uses your selected niche, posting frequency,
                followers, average views and primary goal. Your biggest
                opportunity is to make your content promise, hooks and CTA
                system more intentional.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-100">
                  Goal: {profile.mainGoal}
                </span>

                <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-sm text-violet-100">
                  Audience: {profile.audienceCountry}
                </span>
              </div>
            </div>

            <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full border-[14px] border-cyan-300/20 bg-[#07111f] shadow-[0_0_60px_rgba(34,211,238,0.18)]">
              <div className="text-center">
                <p className="text-6xl font-black text-cyan-300">
                  {growthScore}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Growth Score
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scores.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#0d1b30] p-5"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-200">
                  {item.title}
                </h2>

                <span className="text-xl font-black text-cyan-300">
                  {item.score}
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                  style={{ width: `${item.score}%` }}
                />
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                {item.note}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Priority fixes
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Fix these three things first.
          </h2>

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {problems.map((problem) => (
              <article
                key={problem.number}
                className="rounded-2xl border border-white/10 bg-[#0d1b30] p-6"
              >
                <p className="text-2xl font-black text-violet-300">
                  {problem.number}
                </p>

                <h3 className="mt-5 text-xl font-bold">{problem.title}</h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  <span className="font-bold text-slate-200">
                    Why it matters:{" "}
                  </span>
                  {problem.why}
                </p>

                <div className="mt-5 rounded-xl border border-cyan-300/15 bg-cyan-300/5 p-4 text-sm leading-6 text-cyan-50">
                  <span className="font-bold text-cyan-300">Your fix: </span>
                  {problem.fix}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-500/15 to-cyan-400/10 p-6 sm:p-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Your next seven days
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Stop guessing. Follow a plan.
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-slate-200">
                Your plan is adapted to your niche, audience country and growth
                goal.
              </p>
            </div>

            <button
              onClick={() => setShowPlan((current) => !current)}
              className="rounded-xl bg-white px-6 py-3 text-sm font-black text-[#091526] transition hover:bg-cyan-100"
            >
              {showPlan ? "Hide 7-Day Plan" : "Show My 7-Day Plan"}
            </button>
          </div>

          {showPlan && (
            <div className="mt-8 grid gap-3">
              {sevenDayPlan.map(([day, task]) => (
                <div
                  key={day}
                  className="grid gap-2 rounded-2xl border border-white/10 bg-[#07111f]/70 p-4 sm:grid-cols-[100px_1fr] sm:items-center"
                >
                  <p className="font-black text-cyan-300">{day}</p>
                  <p className="text-sm leading-6 text-slate-200">{task}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-[#0d1b30] p-6 text-center sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Next step
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Ready to create a stronger reel?
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-300">
            Generate your first topic-specific reel script with high-retention
            hooks, a caption, CTA and visual directions.
          </p>

          <a
            href="/scripts"
            className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-[#06111f] transition hover:scale-[1.01]"
          >
            Create My First Script
          </a>
        </section>
      </div>
    </main>
  );
}