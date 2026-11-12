// components/Programs.tsx
import { Bike, BicepsFlexed, Dumbbell, Flower2, type LucideIcon } from "lucide-react";

type Program = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  highlight?: boolean;
  image?: string;
};

const programs: Program[] = [
  {
    title: "Personal Training",
    description: "Get one-on-one guidance from certified trainers.",
    icon: Dumbbell,
    className: "lg:row-span-2",
  },
  {
    title: "Yoga & Flexibility",
    description: "Improve your mobility, balance, and overall well-being with guided.",
    icon: Flower2, 
  },
  {
    title: "Fitness Classes",
    description: "Achieve sustainable weight loss with structured workouts and smart.",
    icon: BicepsFlexed,
    highlight: true,
  },
  {
    title: "Weight Loss",
    description: "Elite metabolic training meets comprehensive lifestyle.",
    icon: Bike,
    className: "lg:row-span-2",
    image: "/ProgramImage.jpg",
  },
];

function ProgramCard({ title, description, icon: Icon, className = "", highlight, image }: Program) {
  const accent = highlight ? "text-black" : "text-lime-400";

  return (
    <article
      className={`flex min-h-[320px] overflow-hidden rounded-2xl border ${
        highlight
          ? "border-lime-400 bg-lime-400 text-black"
          : "border-white/10 bg-white/[0.02] text-white"
      } ${className}`}
    >
      <div className="flex flex-1 flex-col justify-between p-6">
        <Icon className={`size-8 ${accent}`} />
        <div>
          <h3 className="font-display text-xl uppercase font-semibold">{title}</h3>
          <p className={`mt-2 max-w-[220px] text-sm leading-snug ${highlight ? "text-black/70" : "text-white/60"}`}>
            {description}
          </p>
          <a
            href="#"
            className={`font-display mt-4 inline-block text-sm font-bold uppercase underline underline-offset-4 ${accent}`}
          >
            View details
          </a>
        </div>
      </div>

      {image && (
        <div className="hidden w-[52%] p-2.5 md:block">
          <img src={image} alt="" className="size-full rounded-xl object-cover" />
        </div>
      )}
    </article>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="px-12 pb-28 pt-28 text-white">
      <div className="text-center">
        <span className="font-display text-xs uppercase font-bold tracking-wide text-lime-400">
          Our program
        </span>
        <h2 className="font-display mt-4 font-bold text-5xl uppercase leading-[0.95] lg:text-6xl">
          Programs designed
          <br />
          for every fitness level
        </h2>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-flow-col lg:grid-cols-[1.3fr_1.3fr_2.6fr] lg:grid-rows-[repeat(2,320px)]">
        {programs.map((p) => (
          <ProgramCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}