import Navbar from "../components/Navbar";
import Button from "../components/Button";
import heroImage from "../../public/images/hero.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[640px] w-full flex-col overflow-hidden rounded-b-[2rem] border-b-[6px] border-lime-400 bg-black text-white">
      <img
        src={typeof heroImage === "string" ? heroImage : heroImage.src}
        alt=""
        className="absolute inset-0 size-full object-cover object-right"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

      

      <Navbar />

      <div className="relative flex flex-1 flex-col px-12 pb-12 pt-30">
        <p className="max-w-[390px] indent-[105px] text-base leading-snug text-white/90">
          This isn&apos;t just a place to work out. It&apos;s where discipline meets
          ambition, and every rep, every session, every drop of sweat brings
          you closer to the best version of yourself.
        </p>

        <div className="mt-auto">
          <h1 className="font-display font-bold text-5xl uppercase leading-[0.9]">
            Built for the
            <br />
            ones who never
            <br />
            settle
          </h1>

          <div className="mt-9 flex items-center gap-4">
            <Button href="#get-started">Get Started Now</Button>
            <Button variant="secondary" href="#pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}