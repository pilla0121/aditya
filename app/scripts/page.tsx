"use client";

import { FormEvent, useState } from "react";

const goals = [
  "More views",
  "More followers",
  "More saves",
  "Better engagement",
  "Brand deals",
];

const tones = [
  "Bold and direct",
  "Emotional storytelling",
  "Calm and relatable",
  "Educational and clear",
  "Funny and casual",
];

export default function ScriptsPage() {
  const [topic, setTopic] = useState("");
  const [goal, setGoal] = useState("More views");
  const [tone, setTone] = useState("Bold and direct");
  const [isGenerated, setIsGenerated] = useState(false);
  const [selectedHook, setSelectedHook] = useState(0);

  function handleGenerate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!topic.trim()) {
      alert("Please write a reel topic first.");
      return;
    }

    setIsGenerated(true);
    setSelectedHook(0);
  }

  const hooks = [
    `Stop scrolling—if you are struggling with ${topic || "this topic"}, you need to hear this.`,
    `Most people get ${topic || "this topic"} wrong. Here is the part nobody explains.`,
    `I wish someone told me this before I started learning about ${topic || "this topic"}.`,
  ];

  const script = {
    hook: hooks[selectedHook],
    lines: [
      `If ${topic || "this topic"} has ever felt confusing, you are not alone.`,
      "The biggest mistake is trying to do everything at once instead of fixing the one thing that actually matters.",
      "Start by identifying the result you want, then choose one small action you can repeat every day.",
      "This is how you turn random effort into real progress—and make your content more valuable for your audience.",
    ],
    cta:
      goal === "More followers"
        ? "Follow for practical creator lessons that make growth feel simpler."
        : goal === "More saves"
          ? "Save this reel so you can use this simple framework later."
          : goal === "Brand deals"
            ? "Follow for creator growth tips that help you build a brand-ready profile."
            : "Comment “PLAN” if you want more content ideas like this.",
  };

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

          <a
            href="/audit"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
          >
            View Audit
          </a>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="h-fit rounded-3xl border border-white/10 bg-[#0d1b30] p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Script studio
            </p>

            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Turn one topic into your next reel.
            </h1>

            <p className="mt-4 leading-7 text-slate-300">
              Choose the outcome you want. ReelDoctor creates a structured
              reel with hooks, speaking lines, caption, CTA and hashtags.
            </p>

            <form onSubmit={handleGenerate} className="mt-8 space-y-6">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">
                  What is your reel topic?
                </span>

                <textarea
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                  placeholder="Example: Why manifestation feels difficult when you do not believe in yourself"
                  className="min-h-30 w-full resize-none rounded-2xl border border-white/10 bg-[#07111f] p-4 text-sm leading-6 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
                />
              </label>

              <div>
                <p className="mb-3 text-sm font-semibold text-slate-200">
                  What is your goal?
                </p>

                <div className="flex flex-wrap gap-2">
                  {goals.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setGoal(item)}
                      className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                        goal === item
                          ? "border-cyan-300 bg-cyan-300/10 text-cyan-100"
                          : "border-white/10 bg-white/5 text-slate-400 hover:border-white/25"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold text-slate-200">
                  Choose a delivery tone
                </p>

                <div className="grid gap-2">
                  {tones.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setTone(item)}
                      className={`rounded-xl border p-3 text-left text-sm font-semibold transition ${
                        tone === item
                          ? "border-violet-300 bg-violet-400/10 text-violet-100"
                          : "border-white/10 bg-white/5 text-slate-400 hover:border-white/25"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3.5 text-sm font-black text-[#06111f] transition hover:scale-[1.01]"
              >
                Generate My Reel Script
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Free plan: 3 scripts per month. This is a demo generator for
                now.
              </p>
            </form>
          </div>

          <div className="min-h-150 rounded-3xl border border-white/10 bg-[#0d1b30] p-6 sm:p-8">
            {!isGenerated ? (
              <div className="flex min-h-130 flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-400/30 text-3xl">
                  ✦
                </div>

                <h2 className="mt-6 text-2xl font-black">
                  Your script will appear here.
                </h2>

                <p className="mt-3 max-w-md leading-7 text-slate-400">
                  Add a topic, select your goal and choose a tone. Then we will
                  create your reel structure.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Generated reel plan
                    </p>

                    <h2 className="mt-2 text-3xl font-black">
                      {topic || "Your Reel Script"}
                    </h2>
                  </div>

                  <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1.5 text-xs font-bold text-violet-100">
                    Tone: {tone}
                  </span>
                </div>

                <section className="mt-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black">Choose your hook</h3>
                    <span className="text-xs font-bold text-cyan-300">
                      Hook Score: 86/100
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3">
                    {hooks.map((hook, index) => (
                      <button
                        key={hook}
                        type="button"
                        onClick={() => setSelectedHook(index)}
                        className={`rounded-2xl border p-4 text-left text-sm leading-6 transition ${
                          selectedHook === index
                            ? "border-cyan-300 bg-cyan-300/10 text-cyan-50"
                            : "border-white/10 bg-[#07111f] text-slate-300 hover:border-white/25"
                        }`}
                      >
                        <span className="mr-2 font-black text-cyan-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {hook}
                      </button>
                    ))}
                  </div>
                </section>

                <section className="mt-8 rounded-2xl border border-white/10 bg-[#07111f] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-black">Full speaking script</h3>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                      30–40 seconds
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <p className="border-l-2 border-cyan-300 pl-4 text-sm font-bold leading-6 text-cyan-100">
                      {script.hook}
                    </p>

                    {script.lines.map((line, index) => (
                      <p key={line} className="text-sm leading-7 text-slate-200">
                        <span className="mr-2 font-black text-violet-300">
                          {index + 1}.
                        </span>
                        {line}
                      </p>
                    ))}

                    <p className="rounded-xl border border-violet-300/15 bg-violet-500/10 p-4 text-sm font-bold leading-6 text-violet-100">
                      CTA: {script.cta}
                    </p>
                  </div>
                </section>

                <section className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#07111f] p-5">
                    <h3 className="font-black">Caption</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      You do not need to be perfect to start. You need a simple
                      process you can repeat. Here is the mindset shift that
                      makes {topic || "this topic"} easier to understand.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#07111f] p-5">
                    <h3 className="font-black">Hashtags</h3>
                    <p className="mt-3 text-sm leading-7 text-cyan-200">
                      #contentcreator #reelsideas #instagramgrowth
                      #creatorstrategy #reeltips #socialmedia
                    </p>
                  </div>
                </section>

                <section className="mt-5 rounded-2xl border border-amber-300/15 bg-amber-300/5 p-5">
                  <h3 className="font-black text-amber-100">
                    Why this structure works
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-amber-50/80">
                    It starts with a clear pain point, gives one simple insight
                    and ends with a direct action. In the real AI version,
                    this reasoning will adapt to your niche, audience and past
                    reel performance.
                  </p>
                </section>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}