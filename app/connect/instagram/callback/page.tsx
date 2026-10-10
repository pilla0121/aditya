"use client";

import { useEffect, useState } from "react";

export default function InstagramCallbackPage() {
  const [message, setMessage] = useState("Connecting your Instagram account...");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");
    const code = params.get("code");

    if (error) {
      setMessage("Instagram connection was cancelled or could not be completed.");
      return;
    }

    if (code) {
      setMessage(
        "Instagram authorization received. The secure account import will be added in the next step."
      );
      return;
    }

    setMessage(
      "This is the secure Instagram callback page. Return here after Instagram login."
    );
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-5 text-white">
      <section className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#0d1b30] p-8 text-center shadow-2xl shadow-violet-950/20 sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-3xl font-black text-[#07111f]">
          R
        </div>

        <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
          ReelDoctor AI
        </p>

        <h1 className="mt-3 text-3xl font-black">Instagram Connection</h1>

        <p className="mt-4 leading-7 text-slate-300">{message}</p>

        <a
          href="/connect/instagram"
          className="mt-8 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#091526] transition hover:bg-cyan-100"
        >
          Back to Instagram Connection
        </a>
      </section>
    </main>
  );
}