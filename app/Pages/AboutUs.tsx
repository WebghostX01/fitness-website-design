import { Star } from "lucide-react";
import Button from "../components/Button";

const avatars = ["/man1.jpg", "/man2.jpg", "/man3.jpg"];
const aboutImages = ["/about1.jpg", "/about2.jpg"];

export default function About() {
  return (
    <section id="about-us" className="px-12 pb-28 pt-32 text-white">
      <div className="grid gap-x-6 gap-y-14 lg:grid-cols-[1fr_1.8fr_1.2fr]">
        {/* Row 1 */}
        <span className="font-display text-xl font-bold uppercase tracking-wide text-lime-400">
          About us
        </span>
        <h2 className="font-display text-5xl uppercase font-bold leading-[0.95] lg:col-span-2 lg:text-6xl">
          Where consistency
          <br />
          creates change
        </h2>

        {/* Row 2, bottom-aligned */}
        <div className="self-end">
          <p className="font-display text-6xl leading-none">4.8</p>
          <div className="mt-3 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-lime-400 text-lime-400" />
            ))}
          </div>
          <p className="mt-2 text-xs text-white/50">Customer Satisfaction</p>
          <div className="mt-3 flex items-center -space-x-2">
            {avatars.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="size-9 rounded-full border-2 border-lime-400 object-cover"
              />
            ))}
            <button className="cursor-pointer grid size-9 place-items-center rounded-full bg-lime-400 text-black">
              +
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 self-end">
          {aboutImages.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="aspect-[130/135] w-full rounded-2xl object-cover"
            />
          ))}
        </div>

        <div className="flex flex-col items-start gap-5 self-end">
          <p className="max-w-[300px] text-sm leading-relaxed text-white/70">
            We’re more than just a gym—we’re a space built for progress. From
            beginners to advanced athletes, our environment is designed to help
            you push limits
          </p>
          <Button href="#about-us">
            More about us
          </Button>
        </div>
      </div>
    </section>
  );
}