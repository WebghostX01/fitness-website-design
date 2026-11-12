// components/Shop.tsx
import { ArrowRight } from "lucide-react";
import Button from "../components/Button";

const products = [
  { name: "Adjustable Dumbbells", price: 60, image: "/kettle-bells.jpg" },
  { name: "Adjustable Dumbbells", price: 80, image: "/whey-protein.jpg" },
  { name: "Hex Dumbbells Set", price: 50, image: "/foam-rollers.jpg" },
];

export default function Trainers() {
  return (
    <section id="trainers" className="px-12 pb-24 pt-28 text-white">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="font-display text-xs font-bold uppercase tracking-wide text-lime-400">
            Our shop
          </span>
          <h2 className="font-display font-bold mt-4 text-5xl uppercase leading-[0.95] lg:text-6xl">
            Everything you need
            <br />
            for serious gains
          </h2>
        </div>
        <Button href="#" >
          View all product
        </Button>
      </div>

      {/* Product cards */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(({ name, price, image }, i) => (
          <article
            key={i}
            className="group relative aspect-[280/315] overflow-hidden rounded-2xl"
          >
            <img
              src={image}
              alt={name}
              className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />

            {/* Price pill */}
            <span className="absolute right-3 font-bold top-3 rounded-full bg-white px-3 py-1.5 text-xs text-black">
              ${price.toFixed(2)} USD
            </span>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-2xl uppercase font-bold">{name}</h3>
              <a
                href="#"
                className="mt-1 inline-flex items-center gap-1.5 text-sm text-lime-400 font-bold"
              >
                More Details <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}