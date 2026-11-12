"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "James Smith",
    role: "Founder, Nexa",
    avatar: "/man1.jpg",
    quote:
      "Joining Dexafit changed how I train. The coaches keep me accountable, every session has a purpose, and I’ve never felt stronger or more focused.",
  },
  {
    name: "Johan Smith",
    role: "Data Analyst",
    avatar: "/man2.jpg",
    quote:
      "I used to skip workouts all the time, but the structured plans and constant guidance kept me consistent. Now I feel more energetic, stronger, and I can clearly see the fat loss.",
  },
  {
    name: "Sujon Ahmed",
    role: "Footballer",
    avatar: "/man3.jpg",
    quote:
      "I was skeptical at first, but the programs fit my schedule and my goals. A few months in, I have more energy, better posture and visible results.",
  },
  {
    name: "Amara Okafor",
    role: "Data Analyst",
    avatar: "/man1.jpg",
    quote:
      "The strength program fixed my weak spots and took minutes off my race time. The trainers actually notice when your form slips and correct it.",
  },
  {
    name: "Daniel Brooks",
    role: "Software Engineer",
    avatar: "/man2.jpg",
    quote:
      "Long desk days used to wreck my back. Three sessions a week here and the pain is gone, and I look forward to training instead of dreading it.",
  },
  {
    name: "Priya Nair",
    role: "Registered Nurse",
    avatar: "/man3.jpg",
    quote:
      "My shifts are unpredictable, but the flexible hours and class variety mean I can always fit a workout in. It’s the first gym I’ve stuck with.",
  },
  {
    name: "Marcus Lee",
    role: "Business Owner",
    avatar: "/man1.jpg",
    quote:
      "I came in wanting to lose weight and left with a whole new routine. The community here keeps you motivated even on the days you don’t feel like it.",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    track.scrollBy({ left: direction * (card.offsetWidth + 20), behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="px-12 pb-28 pt-24 text-white">
      {/* Header row: title left, arrows right */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <span className="font-display font-bold text-xs uppercase tracking-wide text-lime-400">
            Testimonial
          </span>
          <h2 className="font-display font-bold mt-4 text-5xl uppercase leading-[0.95] lg:text-6xl">
            Built for commitment
            <br />
            proven by members
          </h2>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => scroll(-1)}
            className="grid size-10 place-items-center rounded-full border border-white/60 text-white transition hover:bg-white/10"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => scroll(1)}
            className="grid size-10 place-items-center rounded-full bg-lime-400 text-black transition hover:bg-lime-300"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Cards: horizontal scroll-snap track that bleeds to the screen edges */}
      <div
        ref={trackRef}
        className="-mx-12 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-12 px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map(({ name, role, avatar, quote }) => (
          <article
            key={name}
            className="flex min-h-[260px] w-[85%] shrink-0 snap-start flex-col justify-between gap-10 rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:w-[420px]"
          >
            <p className="text-base leading-relaxed text-white/90">“{quote}”</p>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt={name}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="text-xs text-white/50">{role}</p>
                </div>
              </div>

              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-lime-400 text-lime-400" />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}