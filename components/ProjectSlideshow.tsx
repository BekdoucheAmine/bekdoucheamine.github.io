"use client";

import { useEffect, useState } from "react";

type Slide = {
  src: string;
  caption?: string;
};

export default function ProjectSlideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [paused, slides.length]);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const togglePause = () => setPaused((prev) => !prev);

  return (
    <div className="relative border rounded-2xl overflow-hidden w-full aspect-[16/9] bg-black">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt="Project slide"
          className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-2000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-lg z-20"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-lg z-20"
      >
        →
      </button>

      {/* Pause/Play Button */}
      <button
        onClick={togglePause}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-2 rounded-lg z-20"
      >
        {paused ? "▷" : "❚❚"}
      </button>
    </div>
  );
}
