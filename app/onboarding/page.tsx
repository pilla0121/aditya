"use client";

import { FormEvent, useState } from "react";

const niches = [
  "Motivation",
  "Education",
  "Fitness",
  "Beauty & Fashion",
  "Food",
  "Travel",
  "Tech",
  "Gaming",
  "Finance",
  "Comedy",
  "Lifestyle",
  "Other",
];

const languages = [
  "English",
  "Hindi",
  "Hinglish",
  "Spanish",
  "Portuguese",
  "Arabic",
  "Other",
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    instagramUsername: "",
    country: "",
    contentLanguage: "English",
    audienceCountry: "",
    niche: "",
    followers: "",
    averageViews: "",
    postingFrequency: "",
    mainGoal: "More views",
  });

  function updateField(field: string, value: string) {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }));
  }

  function nextStep() {
    if (step === 1) {
      if (
        !formData.instagramUsername.trim() ||
        !formData.country.trim() ||
        !formData.audienceCountry.trim()
      ) {
        alert(
          "Please fill your Instagram username, country and audience country."
        );
        return;
      }
    }

    if (step === 2) {
      if (
        !formData.niche ||
        !formData.followers ||
        !formData.averageViews ||
        !formData.postingFrequency
      ) {
        alert("Please complete all creator profile fields.");
        return;
      }
    }

    setStep((currentStep) => currentStep + 1);
  }

  function previousStep() {
    setStep((currentStep) => currentStep - 1);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    localStorage.setItem(
      "reeldoctor_creator_profile",
      JSON.stringify(formData)
    );

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#07111f] px-5 py-12 text-white">
        <div className="mx-auto max-w-2xl rounded-3xl border border-cyan-300/20 bg-[#0d1b30] p-7 text-center shadow-2xl shadow-cyan-950/20 sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-3xl font-black text-[#07111f]">
            ✓
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Creator profile ready
          </p>

          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            Your Profile Is Ready
          </h1>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-300">
            Great, @{formData.instagramUsername.replace("@", "")}. Your profile
            is ready for a basic ReelDoctor AI audit.
          </p>

          <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Niche
              </p>
              <p className="mt-1 font-bold">{formData.niche}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Goal
              </p>
              <p className="mt-1 font-bold">{formData.mainGoal}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
            }}
            className="mt-8 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold transition hover:bg-white/10"
          >
            Edit Profile
          </button>

          <a
            href="/audit"
            className="mt-3 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-black text-[#06111f] transition hover:scale-[1.01]"
          >
            Generate My Free Audit
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#07111f] px-5 py-8 text-white sm:px-8 sm:py-12">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black text-[#07111f]">
              R
            </div>

            <span className="font-bold">
              ReelDoctor <span className="text-cyan-300">AI</span>
            </span>
          </a>

          <span className="text-sm text-slate-400">Step {step} of 3</span>
        </div>

        <div className="mb-8 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-[#0d1b30] p-6 shadow-2xl shadow-violet-950/20 sm:p-10"
        >
          {step === 1 && (
            <section>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Creator basics
              </p>

              <h1 className="mt-3 text-3xl font-black">
                Tell us about your Instagram account.
              </h1>

              <p className="mt-3 leading-7 text-slate-300">
                This helps us create advice that fits your country, audience and
                content style.
              </p>

              <div className="mt-8 space-y-5">
                <Field
                  label="Instagram username"
                  placeholder="@yourusername"
                  value={formData.instagramUsername}
                  onChange={(value) => updateField("instagramUsername", value)}
                />

                <Field
                  label="Your country"
                  placeholder="Example: India, USA, Brazil"
                  value={formData.country}
                  onChange={(value) => updateField("country", value)}
                />

                <Field
                  label="Main audience country"
                  placeholder="Example: India, USA, Global"
                  value={formData.audienceCountry}
                  onChange={(value) => updateField("audienceCountry", value)}
                />

                <SelectField
                  label="Content language"
                  value={formData.contentLanguage}
                  options={languages}
                  onChange={(value) => updateField("contentLanguage", value)}
                />
              </div>
            </section>
          )}

          {step === 2 && (
            <section>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Creator profile
              </p>

              <h1 className="mt-3 text-3xl font-black">
                Help us understand your current stage.
              </h1>

              <p className="mt-3 leading-7 text-slate-300">
                Honest numbers help the audit become more useful.
              </p>

              <div className="mt-8 space-y-5">
                <SelectField
                  label="Your primary niche"
                  value={formData.niche}
                  options={niches}
                  onChange={(value) => updateField("niche", value)}
                />

                <Field
                  label="Current followers"
                  placeholder="Example: 12000"
                  type="number"
                  value={formData.followers}
                  onChange={(value) => updateField("followers", value)}
                />

                <Field
                  label="Average views per reel"
                  placeholder="Example: 5000"
                  type="number"
                  value={formData.averageViews}
                  onChange={(value) => updateField("averageViews", value)}
                />

                <SelectField
                  label="How often do you post?"
                  value={formData.postingFrequency}
                  options={[
                    "Daily",
                    "4-6 times per week",
                    "2-3 times per week",
                    "Once per week",
                    "Less than once per week",
                  ]}
                  onChange={(value) =>
                    updateField("postingFrequency", value)
                  }
                />
              </div>
            </section>
          )}

          {step === 3 && (
            <section>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Growth goal
              </p>

              <h1 className="mt-3 text-3xl font-black">
                What do you want to improve first?
              </h1>

              <p className="mt-3 leading-7 text-slate-300">
                Your goal changes the type of audit and reel ideas we give you.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "More views",
                  "More followers",
                  "Better engagement",
                  "Brand deals",
                  "Monetization",
                  "Sell my product or service",
                ].map((goal) => (
                  <button
                    type="button"
                    key={goal}
                    onClick={() => updateField("mainGoal", goal)}
                    className={`rounded-2xl border p-4 text-left text-sm font-semibold transition ${
                      formData.mainGoal === goal
                        ? "border-cyan-300 bg-cyan-300/10 text-cyan-100"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25"
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-violet-300/15 bg-violet-500/10 p-4 text-sm leading-6 text-violet-100">
                Free plan includes one basic audit and three scripts per month.
                Voice DNA, trends and competitor analysis will be available in
                Pro later.
              </div>
            </section>
          )}

          <div className="mt-10 flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={previousStep}
                className="rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/10"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-[#06111f] transition hover:scale-[1.01]"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-[#06111f] transition hover:scale-[1.01]"
              >
                Create My Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-white/10 bg-[#07111f] px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        {label}
      </span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-white/10 bg-[#07111f] px-4 text-sm text-white outline-none focus:border-cyan-300"
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}