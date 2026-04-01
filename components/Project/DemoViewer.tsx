"use client";

import { useState } from "react";

export default function DemoViewer({
  video, title, subtitle, footer
}: {
  video: string;
  title: string;
  subtitle: string;
  footer: string;
}) {
  // Keeping state in case you plan to add multiple clips/tabs later
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      {/* Container adapted to match Profile style:
        - bg-surface for theme-aware background
        - Adaptive borders (gray-100 / gray-800)
        - rounded-3xl and shadow-sm
      */}
      <div className="p-4 md:p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm transition-colors duration-300">
        
        {/* Header/Title for the Player (Optional but recommended for UX) */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        </div>

        {/* Video Wrapper with adaptive ring and shadow */}
        <div className="relative overflow-hidden rounded-2xl ring-2 ring-gray-100 dark:ring-gray-800 shadow-lg bg-black">
          <video
            src={video}
            controls
            className="w-full h-[300px] md:h-[520px] object-contain transition-transform duration-500"
          />
        </div>

        {/* Caption or Footer area inside the card */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            {footer}
          </span>
        </div>
      </div>
    </div>
  );
}