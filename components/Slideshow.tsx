"use client";

import { useEffect, useState } from "react";

type Slide = {
  src: string;
  caption?: string;
};

export default function Slideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [paused, slides.length]);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const togglePause = () => setPaused((prev) => !prev);

  return (
    <div className="w-full relative border rounded-2xl overflow-hidden h-[420px] bg-black">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt="slide"
          className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded z-20"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded z-20"
      >
        →
      </button>

      {/* Pause/Play Button */}
      <button
        onClick={togglePause}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded z-20"
      >
        {paused ? "▶" : "⏸"}
      </button>

      {/* Caption */}
      {slides[index].caption && (
        <p className="absolute bottom-10 w-full text-center text-sm text-white z-20">
          {slides[index].caption}
        </p>
      )}
    </div>
  );
}
