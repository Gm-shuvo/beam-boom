"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Treatment {
  id: string;
  name: string;
  image: string;
  slug: string;
}

const treatments: Treatment[] = [
  {
    id: "1",
    name: "Diode Laser Hair Removal for Women",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/R6II4178-scaled.jpg",
    slug: "diode-laser-hair-removal-for-women",
  },
  {
    id: "2",
    name: "3D VJUVE™ Fractional Co2 Laser",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/DSC9156MAX-scaled.jpg",
    slug: "3d-vjuve-fractional-co2-laser",
  },
  {
    id: "3",
    name: "Permanent Make Up",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/11/Meline®_02_DarkCircles_DSC01212-scaled-1.jpg",
    slug: "permanent-make-up",
  },
  {
    id: "4",
    name: "Laser Tattoo Removal",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/09/R6II4136-scaled.jpg",
    slug: "laser-tattoo-removal",
  },
  {
    id: "5",
    name: "Advanced Carbon Laser Facial",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/clearskin-laser-podmladjivanje.jpg",
    slug: "advanced-carbon-laser-facial",
  },
  {
    id: "6",
    name: "Skin and Injectable Treatments",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/10/istockphoto-1311483932-612x612-1.jpg",
    slug: "skin-and-injectable-treatments",
  },
];


export default function Treatments() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else setVisibleSlides(4);
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const maxIndex = Math.max(0, treatments.length - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleTreatments = treatments.slice(
    currentIndex,
    currentIndex + visibleSlides,
  );

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-6">
          <div className="md:max-w-2xl order-2 md:order-1">
            <p className="pulse-light-description text-sm sm:text-base mb-3 sm:mb-4 text-gray-600 dark:text-gray-300">
              We are committed to sourcing and offering the latest, safest and
              most effective treatments in our clinic, which is why we use only
              the most advanced laser technology and skin products.
            </p>
          </div>
          <div className="text-left md:text-right order-1 md:order-2">
            <span className="pulse-subtitle text-xs sm:text-sm tracking-wide uppercase block mb-2 text-gray-600 dark:text-gray-400">
              Pulse Laser
            </span>
            <h2 className="pulse-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white">
              Treatments
            </h2>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Treatments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {visibleTreatments.map((treatment) => (
              <ViewTransitionLink
                key={treatment.id}
                href={`/treatment/${treatment.slug}` as Href}
                className="group"
              >
                <div className="relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px] xl:h-[470px] w-full overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                    <h3 className="text-white font-medium text-xs sm:text-sm md:text-base">
                      {treatment.name}
                    </h3>
                  </div>
                </div>
              </ViewTransitionLink>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex justify-end gap-2 mt-6 sm:mt-8">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Previous treatments"
            >
              <ChevronLeft
                size={18}
                className="sm:w-5 sm:h-5 text-gray-800 dark:text-gray-200"
              />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Next treatments"
            >
              <ChevronRight
                size={18}
                className="sm:w-5 sm:h-5 text-gray-800 dark:text-gray-200"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
