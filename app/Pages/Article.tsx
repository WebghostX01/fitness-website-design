import Button from "../components/Button";

const articles = [
  {
    author: "James Smith",
    date: "2026-07-20",
    title: "How to stay consistent with your fitness routine",
    image: "/james-smith.jpg",
  },
  {
    author: "Luke Witter",
    date: "2026-01-23",
    title: "How to balance diet and exercise for better results",
    image: "/luke-witter.jpg",
  },
  {
    author: "Daniel Saver",
    date: "2026-03-17",
    title: "How to build strength without losing motivation your",
    image: "/daniel-saver.jpg",
  },
];

// "2026-03-20" -> "20 March 2026" (UTC so the day never shifts by timezone)
const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default function Articles() {
  return (
    <section id="articles" className="px-12 pb-32 pt-24 text-white">
      {/* Header row: title left, button right, aligned to the bottom of the heading */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="font-display font-bold text-xs uppercase tracking-wide text-lime-400">
            Latest articles
          </span>
          <h2 className="font-display font-bold mt-4 text-5xl uppercase leading-[0.95] lg:text-5xl">
            Nutrition &amp; workout
            <br />
            guide for beginners
          </h2>
        </div>
        <Button href="#" size="sm">
          View all articles
        </Button>
      </div>

      {/* Article cards */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map(({ author, date, title, image }) => (
          <a
            key={title}
            href="#" // later: /blog/<slug>
            className="group relative block aspect-[304/342] overflow-hidden rounded-2xl"
          >
            <img
              src={image}
              alt=""
              className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Bottom gradient so the text is readable on any photo */}
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="flex items-center gap-2 text-sm">
                <span className="uppercase text-lime-400">{author}</span>
                <span aria-hidden className="text-white/70">•</span>
                <time dateTime={date}>{formatDate(date)}</time>
              </p>
              <h3 className="font-display mt-3 text-lg font-bold uppercase leading-tight">
                {title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}