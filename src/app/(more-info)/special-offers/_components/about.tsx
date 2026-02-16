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
    <section id="about" className="py-16 md:py-24 bg-white relative">

       {/* Right gray vertical panel */}
      <div className="absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Laser Hair Removal
            </h2>
            <div className="text-base md:text-lg font-light text-gray-600 max-w-2xl mb-10 space-y-4">
              <p>
                Treat 2 or more areas & receive 20% ‘multiple area’ discount off
                the standard pricing.
              </p>
              <p>
                Speak to a member of our team for more information or to get a
                bespoke quote
              </p>
            </div>
            <ViewTransitionLink
              href={"/about-us" as Href}
              target="_blank"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Read more
              <ExternalLink size={16} />
            </ViewTransitionLink>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-100 md:h-112.5 w-75 md:w-150 overflow-hidden z-10">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/09/Heart.jpg"
                alt="About Pulse Laser Clinic"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
