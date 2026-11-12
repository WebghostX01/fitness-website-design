"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Do I need prior gym experience to join?",
    answer:
      "Not at all. Our trainers build programs for every fitness level, from complete beginners to seasoned athletes, and will guide you from your very first session.",
  },
  {
    question: "What are your gym hours?",
    answer:
      "We’re open from early morning to late evening to fit your schedule. Exact hours may vary, so check with us for current timings.",
  },
  {
    question: "Are personal trainers available?",
    answer:
      "Yes. Our certified personal trainers offer one-on-one sessions tailored to your goals, schedule and fitness level.",
  },
  {
    question: "Can I try the gym before joining?",
    answer:
      "Yes. Ask about a trial visit and we’ll show you around, so you can see the space and the programs before you commit.",
  },
  {
    question: "Do you provide diet or nutrition plans?",
    answer:
      "Yes. Our trainers can set you up with nutrition guidance that fits your goals, whether you’re building muscle, losing weight or just eating better.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section id="faq" className="px-12 pb-28 pt-20 text-white">
      <div className="text-center">
        <span className="font-display text-lg font-bold uppercase tracking-wide text-lime-400">
          FAQ
        </span>
        <h2 className="font-display mt-4 font-bold text-5xl uppercase leading-[0.95] lg:text-6xl">
          Exclusive answers for
          <br />
          serious fitness goals
        </h2>
      </div>

      <div className="mx-auto mt-14 flex max-w-[900px] flex-col gap-5">
        {faqs.map(({ question, answer }, i) => {
          const open = openIndex === i;

          return (
            <div key={question} className="rounded-2xl bg-white/[0.07] px-8">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-8 text-left"
                >
                  <span className="font-display font-bold text-xl uppercase">{question}</span>
                  <span
                    className={`grid size-11 shrink-0 place-items-center cursor-pointer rounded-full transition-colors ${
                      open ? "bg-lime-400 text-black" : "bg-black text-white"
                    }`}
                  >
                    <Plus
                      size={18}
                      className={`transition-transform  duration-300 ${open ? "rotate-45" : ""}`}
                    />
                  </span>
                </button>
              </h3>

              {/* Animated open/close: grid rows go from 0fr to 1fr */}
              <div
                id={`faq-${i}`}
                className={`grid transition-[grid-template-rows] duration-300 ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="-mt-2 max-w-[640px] pb-8 pt-2 text-sm leading-relaxed text-white/60">
                    {answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}