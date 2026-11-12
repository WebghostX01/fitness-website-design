"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";

const columns = [
  {
    title: "Quick Links",
    align: "md:text-left",
    links: [
      { label: "Home", href: "/#home" },
      { label: "About us", href: "/#about-us" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Programs",
    align: "md:text-center",
    links: [
      { label: "Strength training", href: "/#programs" },
      { label: "Fat loss program", href: "/#programs" },
      { label: "HIIT workouts", href: "/#programs" },
    ],
  },
  {
    title: "Support",
    align: "md:text-right",
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
    // Read the current year after hydration so prerender output stays stable.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="overflow-hidden rounded-t-[2rem] border-t-[6px] border-lime-400 bg-black text-white">
      <div className="px-5 pb-16 pt-24 md:px-12">
        {/* Link columns */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-5">
          {columns.map(({ title, align, links }) => (
            <nav key={title} aria-label={title} className={align}>
              <p className="mb-6 text-sm text-white/50 md:mb-10">[{title}]</p>
              <ul className="border-b border-white/10">
                {links.map(({ label, href }) => (
                  <li key={label} className="border-t border-white/10">
                    <Link
                      href={href}
                      className="font-display block py-5 text-2xl uppercase transition-colors hover:text-lime-400 md:py-6 md:text-3xl"
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
        <div className="mt-16 flex flex-col items-center text-center">
          <img
            src="footer-image.jpg"
            alt=""
            className="aspect-[74/84] w-[140px] rounded-xl border border-white/10 object-cover"
          />
          <p className="mt-12 text-sm text-white/50">[Sign Up]</p>
          <h2 className="font-display mt-3 text-3xl uppercase">
            Join the fitness community
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()} // TODO: wire up to your email service
            className="mt-6 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-stretch"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              aria-label="Email address"
              className="w-full rounded-full border border-white/40 bg-transparent px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-lime-400 focus:outline-none sm:w-64 sm:py-0"
            />
            <Button type="submit" icon={false}>
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Legal row: same side edges as everything else */}
      <div className="mx-5 flex flex-col items-center gap-3 border-t border-white/10 pb-8 pt-6 text-sm text-white/60 sm:flex-row sm:justify-between md:mx-12">
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms &amp; Condition</Link>
        </div>
        <p>© {year} Dexafit</p>
      </div>

      {/* Giant wordmark, clipped by the bottom bar */}
      <div aria-hidden className="mt-2 overflow-hidden text-center">
        <p className="font-display select-none whitespace-nowrap text-[25vw] uppercase leading-[0.7] text-white">
          Dexafit
        </p>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center gap-3 bg-neutral-950 px-5 py-6 sm:flex-row sm:justify-between md:px-12">
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