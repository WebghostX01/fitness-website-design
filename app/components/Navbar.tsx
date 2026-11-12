"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const links = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about-us" },
  { label: "Programs", id: "programs" },
  { label: "Trainers", id: "trainers" },
  { label: "Pricing", id: "pricing" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Scroll-spy: highlight the section currently on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape, or when the screen grows to desktop size
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-md transition-colors ${
        open ? "bg-black/95" : "bg-black/50"
      } lg:bg-black/50`}
    >
      <div className="flex items-center justify-between px-5 py-4 lg:px-12">
        <a href="#home" className="font-display text-3xl tracking-wide text-white">
          DEXAFIT
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm lg:flex">
          {links.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`underline-offset-4 transition-colors ${
                  active === id ? "text-lime-400 underline" : "text-white/70 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="#contact" fullWidth>Contact Us</Button>
        </div>

        {/* Hamburger (mobile and tablet only) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="grid size-10 place-items-center rounded-full border border-white/20 text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu: same 0fr to 1fr height trick as the FAQ */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden transition-[visibility] duration-300 ${
            open ? "visible" : "invisible"
          }`}
        >
          <ul className="px-5">
            {links.map(({ label, id }) => (
              <li key={id} className="border-t border-white/10">
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`font-display block py-4 text-2xl uppercase transition-colors ${
                    active === id ? "text-lime-400" : "text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-5 py-6" onClick={() => setOpen(false)}>
            <Button href="#contact" className="w-full justify-between">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}