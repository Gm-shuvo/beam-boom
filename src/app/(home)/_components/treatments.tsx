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
    name: "Soprano Titanium Laser Hair Removal",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/R6II4178-scaled.jpg",
    slug: "soprano-titanium-laser-hair-removal",
  },
  {
    id: "2",
    name: "Laser Tattoo Removal",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/09/R6II4136-scaled.jpg",
    slug: "laser-tattoo-removal",
  },
  {
    id: "3",
    name: "Laser for Red Facial Veins and Rosacea",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/1A610C79-3EA3-4C72-B496-F2A10626F82C.webp",
    slug: "laser-for-red-facial-veins",
  },
  {
    id: "4",
    name: "Alma Hybrid CO2 Laser",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/DSC9156MAX-scaled.jpg",
    slug: "alma-hybrid-fractional-co2-laser",
  },
  {
    id: "5",
    name: "PhotoFacial Laser for Pigmentation",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/AdobeStock_216793051-e1556147202225-1024x751-1-1.jpeg",
    slug: "laser-for-pigmentation-ipl-aft",
  },
  {
    id: "6",
    name: "SkinPen Microneedling",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/N8A1104.jpg",
    slug: "skinpen-microneedling",
  },
  {
    id: "7",
    name: "ClearLift Laser Facelift",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Sheffield_Skincare_Clinic_-_Non_Surgical_Facelift_-_ClearLift_4D.webp",
    slug: "clearlift-laser-facelift",
  },
  {
    id: "8",
    name: "Alma TED Advanced Hair Restoration",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/04/R6II4105-scaled.jpg",
    slug: "hair-loss-and-thinning-calecim-treatment",
  },
  {
    id: "9",
    name: "MeLine® Dark Circle Treatment",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/11/Meline®_02_DarkCircles_DSC01212-scaled-1.jpg",
    slug: "meline-dark-circle-treatment",
  },
  {
    id: "10",
    name: "Lesion Removal – Skin Tag, Milia and Wart Removal",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/IMG_6837.jpg",
    slug: "skin-tag-milia-and-wart-removal",
  },
  {
    id: "11",
    name: "Morpheus8 – Face & Neck lift",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/aestheticallyyou-treatment-skin-morpheus8-prime-pfuv02c02yrvn7fnt5tiup29r67ewda1vxkwnfx5v8.jpg",
    slug: "morpheus8-face-neck-lift",
  },
  {
    id: "12",
    name: "Medical Facials",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/Rectangle-18-1-1-2.png",
    slug: "skin-resurfacing-facial",
  },
  {
    id: "13",
    name: "ClearSkin Pro Acne Treatment",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/clearskin-laser-podmladjivanje.jpg",
    slug: "clearskin-acne-treatment",
  },
  {
    id: "14",
    name: "Near Infra-Red (NIR) Skin Tightening",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/632A9001-scaled-1.jpg",
    slug: "near-infra-red-nir-skin-tightening",
  },
  {
    id: "15",
    name: "Laser for Leg Veins (LP Nd:YAG)",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/02_Clearvein-Vein-Removal.jpg",
    slug: "laser-for-leg-veins-lp-ndyag",
  },
  {
    id: "16",
    name: "iPixel Laser Skin Resurfacing",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/ipixel_1-1024x1024-1.jpg",
    slug: "ipixel-laser-skin-resurfacing",
  },
  {
    id: "17",
    name: "Anti-Wrinkle Injections",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/10/istockphoto-1311483932-612x612-1.jpg",
    slug: "anti-wrinkle-injections",
  },
  {
    id: "18",
    name: "Dermal Fillers",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/10/lips-8704166_1280.webp",
    slug: "injectable-treatments-2",
  },
  {
    id: "19",
    name: "Skin Boosters / Biostimulators",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/10/cosmetic-aesthetic-treatment-face-caucasian-260sw-2419112687-e1727863055754.webp",
    slug: "skin-boosters-biostimulators",
  },
  {
    id: "20",
    name: "Cosmelan Depigmentation peel",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/cosmelan-1-y-2-e1680507552266.jpg",
    slug: "cosmelan-depigmentation-peel",
  },
  {
    id: "21",
    name: "Exosome Treatment",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/04/R6II4105-scaled.jpg",
    slug: "exosome-treatment",
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
