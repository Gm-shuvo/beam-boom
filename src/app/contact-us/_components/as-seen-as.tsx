// components/AsSeenIn.tsx
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const logos = [
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/Aesthetics-Journal-Logo-1.png",
    alt: "Aesthetics Journal",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/s1df.png",
    alt: "Media logo",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/zdf23.png",
    alt: "Media logo",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/Aesthetics-Journal-Logo-2.png",
    alt: "Aesthetics Journal",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/09/images.png",
    alt: "Media logo",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/09/Forbes-Emblem-scaled.png",
    alt: "Forbes",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/09/bespokeblackbook.webp",
    alt: "Bespoke Black Book",
  },
];

export default function AsSeenIn() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll logic
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = 180; // ≈ logo width + gap
    const intervalTime = 2800; // change logo every ~2.8 seconds

    intervalRef.current = setInterval(() => {
      if (slider) {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        const nextScroll = slider.scrollLeft + scrollAmount;

        if (nextScroll >= maxScroll) {
          // Jump back to start smoothly for infinite feel
          slider.scrollTo({ left: 0, behavior: "instant" });
        } else {
          slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, intervalTime);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="logo-wrp py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="logo-main">
          <div className="small-title text-center mb-10">
            <h3 className="small-title text-3xl md:text-4xl font-bold text-gray-900">
              As Seen In
            </h3>
          </div>

          <div className="relative">
            {/* Slider */}
            <div
              ref={sliderRef}
              className="logo-slider flex gap-6 md:gap-10 overflow-x-hidden pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth select-none"
            >
              {/* Main logos + enough duplicates for seamless looping */}
              {[...logos, ...logos, ...logos.slice(0, 3)].map((logo, index) => (
                <div
                  key={index}
                  className="logo-item min-w-35 sm:min-w-40 md:min-w-45 shrink-0 snap-start"
                >
                  <div className="logo-img block transition-all duration-400 hover:scale-110 hover:brightness-110">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={180}
                      height={80}
                      className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-400"
                      quality={85}
                      priority={index < 7} // faster load for first visible logos
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
