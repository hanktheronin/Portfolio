import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = ["Home", "Photos", "Writing", "About / Contact"];

const photos = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  src: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80&sig=${index + 1}`,
  alt: `Portfolio placeholder photo ${index + 1}`,
}));

const writingPieces = [
  {
    title: "On Light and Silence",
    description:
      "A reflective essay on finding emotional texture in everyday moments through photography.",
    link: "#",
  },
  {
    title: "The Geometry of a Story",
    description:
      "How visual framing and narrative structure overlap when building scenes on the page.",
    link: "#",
  },
  {
    title: "After the Last Draft",
    description:
      "A short piece on editing, restraint, and the discipline of leaving white space.",
    link: "#",
  },
  {
    title: "Field Notes from the City",
    description:
      "Observational writing on architecture, movement, and the poetry of crowded streets.",
    link: "#",
  },
];

const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

const sectionClass =
  "mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16 lg:py-20";

function HomeSection() {
  return (
    <motion.section {...pageTransition} transition={{ duration: 0.45 }} className={sectionClass}>
      <div className="flex min-h-[62vh] flex-col items-center justify-center text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.32em] text-fuchsia-200/90">Photographer / Writer</p>
        <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl">
          Name Placeholder
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-violet-100/90 sm:text-lg md:text-xl">
          Visual stories and written essays that explore mood, memory, and modern life.
        </p>
      </div>
    </motion.section>
  );
}

function PhotosSection() {
  return (
    <motion.section {...pageTransition} transition={{ duration: 0.45 }} className={sectionClass}>
      <header className="mb-8 md:mb-10">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Photos</h2>
        <p className="mt-3 max-w-2xl text-sm text-violet-100/90 sm:text-base">
          A scalable grid layout ready for real portfolio images.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {photos.map((photo) => (
          <motion.article
            key={photo.id}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-black/20"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="aspect-[4/5] h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function WritingSection() {
  return (
    <motion.section {...pageTransition} transition={{ duration: 0.45 }} className={sectionClass}>
      <header className="mb-8 md:mb-10">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Writing</h2>
        <p className="mt-3 max-w-2xl text-sm text-violet-100/90 sm:text-base">
          Editorial pieces on art, process, and observation.
        </p>
      </header>

      <div className="space-y-4 md:space-y-5">
        {writingPieces.map((piece) => (
          <article
            key={piece.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:bg-white/10 md:p-6"
          >
            <h3 className="text-xl font-medium text-white md:text-2xl">{piece.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-violet-100/90 md:text-base">{piece.description}</p>
            <a
              href={piece.link}
              className="mt-4 inline-flex items-center text-sm font-medium text-fuchsia-200 transition hover:text-fuchsia-100"
              target="_blank"
              rel="noreferrer"
            >
              Read article →
            </a>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

function AboutContactSection() {
  return (
    <motion.section {...pageTransition} transition={{ duration: 0.45 }} className={sectionClass}>
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">About</h2>
          <p className="mt-4 text-sm leading-relaxed text-violet-100/90 md:text-base">
            I blend photography and writing to create atmospheric work rooted in detail, emotion, and place.
            My projects move between visual essays, personal narratives, and commissioned storytelling.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Contact</h2>
          <p className="mt-4 text-sm text-violet-100/90 md:text-base">hello@example.com</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-fuchsia-100">
            <a href="#" className="rounded-full border border-white/20 px-3 py-1.5 transition hover:bg-white/10">
              Instagram
            </a>
            <a href="#" className="rounded-full border border-white/20 px-3 py-1.5 transition hover:bg-white/10">
              X / Twitter
            </a>
            <a href="#" className="rounded-full border border-white/20 px-3 py-1.5 transition hover:bg-white/10">
              Substack
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  const pageContent = useMemo(() => {
    switch (activePage) {
      case "Photos":
        return <PhotosSection />;
      case "Writing":
        return <WritingSection />;
      case "About / Contact":
        return <AboutContactSection />;
      case "Home":
      default:
        return <HomeSection />;
    }
  }, [activePage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1020] via-[#251842] to-[#5a1c58] text-white">
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-violet-100">Portfolio</span>
          <ul className="flex flex-wrap justify-end gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item;
              return (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => setActivePage(item)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition sm:text-sm ${
                      isActive
                        ? "bg-white text-violet-900"
                        : "text-violet-100 hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={activePage}>{pageContent}</motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
