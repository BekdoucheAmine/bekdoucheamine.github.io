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
    <div className="group relative border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden w-full aspect-[16/9] bg-white dark:bg-gray-950 transition-colors duration-300 shadow-inner">
      {/* SLIDE CONTENT */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.src}
            alt={`Project slide ${i + 1}`}
            className="w-full h-full object-contain"
          />
          {slide.caption && (
            <div className="absolute bottom-16 left-0 right-0 text-center bg-black/40 backdrop-blur-md text-white py-2 text-sm">
              {slide.caption}
            </div>
          )}
        </div>
      ))}

      {/* NAVIGATION CONTROLS - Visible on hover */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={prev}
          className="p-3 rounded-full bg-white/80 dark:bg-black/80 text-foreground shadow-lg hover:scale-110 transition-transform pointer-events-auto"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button
          onClick={next}
          className="p-3 rounded-full bg-white/80 dark:bg-black/80 text-foreground shadow-lg hover:scale-110 transition-transform pointer-events-auto"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* BOTTOM CONTROL BAR */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex items-center justify-center gap-4">
        {/* Play/Pause */}
        <button
          onClick={togglePause}
          className="p-2 rounded-lg bg-white/90 dark:bg-gray-900/90 text-foreground shadow-sm hover:bg-white dark:hover:bg-gray-800 transition-colors"
        >
          {paused ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
          )}
        </button>

        {/* Slide Counter / Progress Dots */}
        <div className="flex gap-1.5 bg-white/90 dark:bg-gray-900/90 px-3 py-2 rounded-full shadow-sm">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-blue-600" : "w-1.5 bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}