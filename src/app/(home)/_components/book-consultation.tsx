"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";

export default function BookConsultation() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="pulse-subtitle text-xs sm:text-sm md:text-base tracking-wide uppercase block mb-3 sm:mb-4 text-gray-600 dark:text-gray-400">
            Pulse Laser
          </span>
          <h2 className="pulse-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Book a Consultation
          </h2>
          <p className="pulse-light-description text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-600 dark:text-gray-300">
            Please speak to a member of our reception team for more information.
            This is what helps us deliver the superior results our clients have
            come to expect of us.
          </p>
          <ViewTransitionLink
            href={"/contact-us" as Href}
            className="inline-block bg-black dark:bg-white dark:text-black text-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Make a Booking
          </ViewTransitionLink>
        </div>
      </div>
    </section>
  );
}
