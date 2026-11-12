"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";

const columns = [
  {
    title: "Quick Links",
    align: "text-left",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/#about-us" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Programs",
    align: "text-center",
    links: [
      { label: "Strength training", href: "/#programs" },
      { label: "Fat loss program", href: "/#programs" },
      { label: "HIIT workouts", href: "/#programs" },
    ],
  },
  {
    title: "Support",
    align: "text-right",
    links: [
      { label: "Help center", href: "#" },
      { label: "Membership guide", href: "#" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
];

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // Read the current year only after hydration to keep prerender output stable.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="overflow-hidden rounded-t-[2rem] border-t-[6px] border-lime-400 bg-black text-white">
      {/* Gray panel with the big elliptical bottom */}
      <div className="rounded-b-[50%_48%] bg-white/[0.07] px-16 pb-28 pt-28">
        {/* Link columns */}
        <div className="grid gap-5 md:grid-cols-3">
          {columns.map(({ title, align, links }) => (
            <nav key={title} aria-label={title} className={align}>
              <p className="mb-10 text-sm text-white/50">[{title}]</p>
              <ul className="border-b border-white/10">
                {links.map(({ label, href }) => (
                  <li key={label} className="border-t border-white/10">
                    <Link
                      href={href}
                      className="font-display block py-6 text-3xl uppercase transition-colors hover:text-lime-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-14 flex flex-col items-center text-center">
          <img
            src="/footer-image.jpg"
            alt=""
            className="aspect-[74/84] w-[140px] rounded-xl border border-white/10 object-cover"
          />
          <p className="mt-16 text-sm text-white/50">[Sign Up]</p>
          <h2 className="font-display mt-3 text-3xl uppercase">
            Join the fitness community
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()} // TODO: wire up to your email service
            className="mt-6 flex items-stretch gap-2"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              aria-label="Email address"
              className="w-64 rounded-full border border-white/40 bg-transparent px-5 text-sm text-white placeholder:text-white/40 focus:border-lime-400 focus:outline-none"
            />
            <Button type="submit" icon={false}>
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Legal row: overlaps the panel's bottom, where its corners curve away */}
      <div className="-mt-6 flex flex-wrap items-center justify-between gap-4 px-12 text-sm text-white/60">
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms &amp; Condition</Link>
        </div>
        <p>© {year} Dexafit</p>
      </div>

      {/* Giant wordmark, clipped by the bottom bar */}
      <div aria-hidden className="mt-4 overflow-hidden text-center">
        <p className="font-display select-none whitespace-nowrap text-[23vw] font-bold uppercase leading-[0.7] text-white">
          Dexafit
        </p>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between bg-neutral-950 px-16 py-7">
        <Link href="/" className="font-display flex items-center gap-2 text-2xl uppercase">
          <Dumbbell className="size-6 text-lime-400" />
          Dexafit
        </Link>
        <p className="font-display text-xs uppercase tracking-wide text-white/50">
          Design by <span className="text-white">Topnotch Studio</span>
        </p>
      </div>
    </footer>
  );
}