// components/SkinConditions.tsx
"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SkinCondition {
  name: string;
  image: string;
  link: string;
}

const skinConditions: SkinCondition[] = [
  {
    name: "Acne Scarring",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/iStock-1140170080-1.jpg",
    link: "https://www.pulse-clinic.co.uk/skin-condition/acne-scarring/",
  },
  {
    name: "Acne",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Rectangle-15-5-1-1.png",
    link: "https://www.pulse-clinic.co.uk/skin-condition/acne-2/",
  },
  {
    name: "Roseacea / Flushing",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Rosacea.webp",
    link: "https://www.pulse-clinic.co.uk/skin-condition/roseacea-redness-reduction/",
  },
  {
    name: "Spider / Thread Veins",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Rectangle-15-4-1-1.png",
    link: "https://www.pulse-clinic.co.uk/skin-condition/spider-thread-veins/",
  },
  {
    name: "Fine lines / Wrinkle Reduction",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Rectangle-16-6-1-1.png",
    link: "https://www.pulse-clinic.co.uk/skin-condition/anti-ageing-wrinkle-reduction/",
  },
  {
    name: "Eyebags / Tired looking eyes",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/young-caucasian-woman-demonstrating-dark-600nw-2192342775.webp",
    link: "https://www.pulse-clinic.co.uk/skin-condition/eyebags-tired-looking-eyes/",
  },
  {
    name: "Double chin / Saggy neck",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/before-1.jpg",
    link: "https://www.pulse-clinic.co.uk/skin-condition/double-chin-saggy-neck/",
  },
  {
    name: "Stretch Marks",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/istockphoto-1392771337-612x612-1.jpg",
    link: "https://www.pulse-clinic.co.uk/skin-condition/stretch-marks/",
  },
  {
    name: "Milia Spots",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Hero_Article_Milia-Treatment-compressor.jpg",
    link: "https://www.pulse-clinic.co.uk/skin-condition/milia-spots/",
  },
  {
    name: "Seborrheic Keratosis",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Seborrheic-Keratosis-Removal-in-NYC.webp",
    link: "https://www.pulse-clinic.co.uk/skin-condition/seborrhoeic-warts/",
  },
  {
    name: "Sebaceous cysts",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Rectangle-18-3-1-1.png",
    link: "https://www.pulse-clinic.co.uk/skin-condition/sebaceous-cysts/",
  },
  {
    name: "Cherry Angioma (blood spots)",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Health-GettyImages-1269238447-16c2da32f08d42a8af0fadb4ece718dc.jpg",
    link: "https://www.pulse-clinic.co.uk/skin-condition/cherry-angioma-blood-spots/",
  },
  {
    name: "Common Warts",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Common-warts-body-1.webp",
    link: "https://www.pulse-clinic.co.uk/skin-condition/comman-warts/",
  },
  {
    name: "Verrucas",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Rectangle-15-2-1-1.png",
    link: "https://www.pulse-clinic.co.uk/skin-condition/verrucae/",
  },
  {
    name: "Nail Fungus",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Rectangle-18-5-1-1.png",
    link: "https://www.pulse-clinic.co.uk/skin-condition/nail-fungus/",
  },
  {
    name: "Aged Hands",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/young-old-hand-touching-each-600nw-2344016019.webp",
    link: "https://www.pulse-clinic.co.uk/skin-condition/aged-hands/",
  },
  {
    name: "Aged Skin",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Rectangle-16-6-1-1.png",
    link: "https://www.pulse-clinic.co.uk/skin-condition/aged-skin/",
  },
  {
    name: "Bingo wings",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/iStock-1354614333-1024x683-1.webp",
    link: "https://www.pulse-clinic.co.uk/skin-condition/bingo-wings/",
  },
  {
    name: "Dermatosa Papulosa Nigra",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Dermatosis-Papulosa-Nigra.jpg",
    link: "https://www.pulse-clinic.co.uk/skin-condition/dermatosa-papulosa-nigra/",
  },
  {
    name: "Dry / Sensitive skin",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/AdobeStock_168085268-scaled.jpeg",
    link: "https://www.pulse-clinic.co.uk/skin-condition/dry-sensitive-skin/",
  },
  {
    name: "Enlarged pores/ Blackheads",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/asian-male-nose-cheek-close-260sw-2175602373-e1719396361699.webp",
    link: "https://www.pulse-clinic.co.uk/skin-condition/enlarged-pores-blackheads/",
  },
  {
    name: "Female Hair Loss",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/IMG_7150-e1765268481442.png",
    link: "https://www.pulse-clinic.co.uk/skin-condition/hair-loss/",
  },
  {
    name: "Hooded eyelids",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/droopy-eyelid-causes.jpg",
    link: "https://www.pulse-clinic.co.uk/skin-condition/hooded-eyelids/",
  },
  {
    name: "Hyperhidrosis",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/sculpturelle-treating-hyperhidrosis-using-botox.jpeg",
    link: "https://www.pulse-clinic.co.uk/skin-condition/hyperhidrosis/",
  },
  {
    name: "Male Hair Loss",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/istockphoto-1092119550-612x612-1.jpg",
    link: "https://www.pulse-clinic.co.uk/skin-condition/male-hair-loss/",
  },
];

export default function SkinConditions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else if (window.innerWidth < 1280) setVisibleSlides(3);
      else setVisibleSlides(4);
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const maxIndex = Math.max(0, skinConditions.length - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleConditions = skinConditions.slice(
    currentIndex,
    currentIndex + visibleSlides,
  );

  return (
    <section className="skin-conditions-wrp light-overlay py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="pulse-subtitle text-xs sm:text-sm md:text-base tracking-wide uppercase block mb-2 text-gray-600 dark:text-gray-400 font-medium">
            Pulse Laser
          </span>
          <h2 className="pulse-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Skin Conditions
          </h2>
          <p className="pulse-light-description max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">
            We specialize in treating a wide range of skin conditions with
            cutting-edge laser and aesthetic technology.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {visibleConditions.map((condition) => (
              <ViewTransitionLink
                key={condition.link}
                href={condition.link as Href}
                className="group block"
              >
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[470px] w-full overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <Image
                    src={condition.image}
                    alt={condition.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                    <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl drop-shadow-md">
                      {condition.name}
                    </h3>
                  </div>
                </div>
              </ViewTransitionLink>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Previous skin condition"
            >
              <ChevronLeft
                size={20}
                className="sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200"
              />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Next skin condition"
            >
              <ChevronRight
                size={20}
                className="sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
