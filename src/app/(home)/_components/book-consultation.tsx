'use client';

import { Href, ViewTransitionLink } from '@/components/view-transition-link';

export default function BookConsultation() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="pulse-subtitle tracking-wide uppercase block mb-4">
            Pulse Laser
          </span>
          <h2 className="pulse-title mb-6">
            Book a Consultation
          </h2>
          <p className="pulse-light-description mb-8">
            Please speak to a member of our reception team for more information. This is what helps us deliver the superior results our clients have come to expect of us.
          </p>
          <ViewTransitionLink
            href={"/contact-us" as Href}
            className="inline-block bg-black text-white px-12 py-4 font-medium hover:bg-gray-800 transition-colors"
          >
            Make a Booking
          </ViewTransitionLink>
        </div>
      </div>
    </section>
  );
}
