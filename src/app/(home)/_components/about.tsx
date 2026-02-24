"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    rating: "4.9/5",
    platform: "Treatwell Reviews",
    link: "https://www.treatwell.co.uk/place/pulse-laser-aesthetic-clinic/",
  },
  {
    rating: "5/5",
    platform: "Facebook Reviews",
    link: "https://en-gb.facebook.com/PulseLaserClinic/about/",
  },
  {
    rating: "5/5",
    platform: "Google Reviews",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x4876052c9916e861:0x41505362713b919f",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-8 md:py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Left leaf decoration (behind everything) */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
        <img src={"/images/about-us-leaves.png"} alt="Round shape" />
      </div>

      {/* Right gray vertical panel */}
      <div className="absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <span className="pulse-subtitle text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wide uppercase">
              Pulse Laser
            </span>
            <h2 className="pulse-title text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              About Us
            </h2>
            <div className="pulse-light-description text-sm sm:text-base md:text-lg max-w-2xl mb-6 md:mb-10 space-y-3 md:space-y-4">
              <p>
                <span className="pulse-description">
                  Located in the prestigious Fitzrovia area of London,{" "}
                </span>
                Pulse Laser Aesthetic Clinic is a distinguished clinic
                recognised for its outstanding results, state-of-the-art
                procedures, and unmatched client service. The clinic was
                established in 2012 by sisters Maria Dinopoulos and Dr Christina
                Philippeos who have a shared passion for aesthetic treatments
                with a personal touch. Our ethos revolves around crafting a
                bespoke journey for each client, utilising cutting-edge and
                scientifically backed treatments to deliver unmatched results in
                our luxurious and welcoming facility.
              </p>
              <p>
                We are one of the very first clinics in London to launch the
                revolutionary Alma Hybrid Fractional CO2 Laser for scars and
                facial rejuvenation, as well as the Soprano Titanium for Laser
                Hair Removal. Specialising in the latest laser and skin
                rejuvenation treatments, we aim to provide safe and effective
                treatments in a professional, and clean environment.
              </p>
            </div>
            <ViewTransitionLink
              href={"/about-us" as Href}
              target="_blank"
              className="inline-flex items-center gap-2 bg-black dark:bg-white dark:text-black text-white px-6 sm:px-8 py-2.5 sm:py-3 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Read more
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
            </ViewTransitionLink>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative h-70 sm:h-87.5 md:h-100 lg:h-125 w-full sm:w-87.5 md:w-112.5 lg:w-150 overflow-hidden z-10">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/09/0O9A2759-edit-Edit-copy-scaled.jpg"
                alt="About Pulse Laser Clinic"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Reviews Section - Hidden on mobile, shown on larger screens */}
        <div className="hidden lg:block absolute top-0 -right-24 bottom-0 w-75 md:w-102.5 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="flex flex-col h-full w-full justify-center gap-4 md:gap-6 p-4 md:p-6">
            {reviews.map((review) => (
              <ViewTransitionLink
                key={review.platform}
                href={review.link as Href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors p-6 md:p-8 rounded-lg text-center"
              >
                <h3 className="block-title mb-2 group-hover:scale-105 transition-transform text-xl md:text-2xl">
                  {review.rating}
                </h3>
                <p className="block-details text-sm md:text-base">
                  {review.platform}
                </p>
              </ViewTransitionLink>
            ))}
          </div>
        </div>

        {/* Mobile Reviews Section */}
        <div className="lg:hidden mt-8 md:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <ViewTransitionLink
                key={review.platform}
                href={review.link as Href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors p-4 md:p-6 rounded-lg text-center"
              >
                <h3 className="block-title mb-2 group-hover:scale-105 transition-transform text-lg md:text-xl">
                  {review.rating}
                </h3>
                <p className="block-details text-xs md:text-sm">
                  {review.platform}
                </p>
              </ViewTransitionLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
