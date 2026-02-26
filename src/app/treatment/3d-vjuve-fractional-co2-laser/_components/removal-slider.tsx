"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface RemovalPair {
  id: string;
  beforeImage: string;
  afterImage: string;
  beforeSlug: string;
  afterSlug: string;
  title?: string;
}

const removalPairs: RemovalPair[] = [
  {
    id: "1",
    beforeImage:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/1024x589.jpg",
    afterImage:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/ClearSkin1-1024x589-1-1.jpg",
    title: "Neck Script with Stars",
    beforeSlug: "neck-script-stars-tattoo-removal-before",
    afterSlug: "neck-script-stars-tattoo-removal-after",
  },
  {
    id: "2",
    beforeImage:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/ClearSkin2.jpg",
    afterImage:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/ClearSkin2-1.jpg",
    title: "Finger Initials / Lettering",
    beforeSlug: "finger-initials-lettering-tattoo-removal-before",
    afterSlug: "finger-initials-lettering-tattoo-removal-after",
  },
];

export default function RemovalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(2); // or 4 if you want more on lg, but pairs work better with 2–4
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, removalPairs.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visiblePairs = removalPairs.slice(
    currentIndex,
    currentIndex + visibleCount,
  );

  return (
    <section
      className="py-16 md:py-24 relative bg-gray-900 text-white overflow-hidden"
      style={{
        backgroundImage: `url("https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/skin-conditions-bg-3.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for professionalism & readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Real Patient Results
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced picosecond laser technology delivers safe, effective tattoo
            fading and complete removal with minimal risk of scarring.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {visiblePairs.map((pair) => (
              <div key={pair.id} className="space-y-6">
                {pair.title && (
                  <h3 className="text-xl font-semibold text-center text-white">
                    {pair.title}
                  </h3>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Before */}
                  <ViewTransitionLink
                    href={`/treatment/${pair.beforeSlug}` as Href}
                    className="group relative overflow-hidden rounded-xl shadow-xl bg-gray-800"
                  >
                    <div className="relative aspect-4/5 md:aspect-3/4 lg:aspect-square">
                      <Image
                        src={pair.beforeImage}
                        alt="Before tattoo removal"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                      <div className="absolute bottom-4 left-4 right-4 text-center">
                        <span className="inline-block px-4 py-2 bg-black/60 rounded-full text-sm font-medium uppercase tracking-wide">
                          Before
                        </span>
                      </div>
                    </div>
                  </ViewTransitionLink>

                  {/* After */}
                  <ViewTransitionLink
                    href={`/treatment/${pair.afterSlug}` as Href}
                    className="group relative overflow-hidden rounded-xl shadow-xl bg-gray-800"
                  >
                    <div className="relative aspect-4/5 md:aspect-3/4 lg:aspect-square">
                      <Image
                        src={pair.afterImage}
                        alt="After tattoo removal"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                      <div className="absolute bottom-4 left-4 right-4 text-center">
                        <span className="inline-block px-4 py-2 bg-black/60 rounded-full text-sm font-medium uppercase tracking-wide">
                          After
                        </span>
                      </div>
                    </div>
                  </ViewTransitionLink>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all border border-white/20"
              aria-label="Previous results"
            >
              <ArrowLeftIcon size={24} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all border border-white/20"
              aria-label="Next results"
            >
              <ArrowRightIcon size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
