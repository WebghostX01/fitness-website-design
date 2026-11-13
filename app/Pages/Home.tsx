import Button from "../components/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-b-[2rem] border-b-[6px] border-lime-400 bg-black text-white lg:aspect-[1116/775] lg:min-h-[640px]"
    >
      {/* Background image */}
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover object-right"
      />

      {/* Overlay: darker all over on phones, left-weighted on desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 lg:bg-gradient-to-r lg:from-black/60 lg:via-black/10 lg:to-transparent" />

      {/* Content: a fixed-pixel minimum height on phones (no viewport units),
          paragraph on top, headline + buttons pinned to the bottom.
          On desktop it fills the aspect-ratio box instead. */}
      <div className="relative flex min-h-[720px] flex-col justify-between gap-12 px-5 pb-10 pt-28 md:px-12 md:pb-12 lg:absolute lg:inset-0 lg:min-h-0 lg:pt-30">
        <p className="max-w-[390px] indent-12 text-base leading-snug text-white/90 md:indent-[105px]">
          This isn’t just a place to work out. It’s where discipline meets
          ambition, and every rep, every session, every drop of sweat brings
          you closer to the best version of yourself.
        </p>

        <div>
          <h1 className="font-display text-5xl uppercase leading-[0.9] sm:text-6xl">
            Built for the
            <br />
            ones who never
            <br />
            settle
          </h1>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-9">
            <Button href="#pricing">Get Started Now</Button>
            <Button variant="secondary" href="#pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}