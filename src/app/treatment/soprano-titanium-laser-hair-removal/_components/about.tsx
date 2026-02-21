"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      {/* Left leaf decoration (behind everything) */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
        <img src={"/images/about-us-leaves.png"} alt="Round shape" />
      </div>

      {/* Right gray vertical panel */}
      <div className="absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="pulse-subtitle text-sm font-medium text-gray-600 tracking-wide uppercase">
              Pulse Laser
            </span>
            <h2 className="pulse-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900">
              Soprano Titanium
               <br />
               Laser Hair Removal
            </h2>
            <div className="pulse-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                We are proud to be one of the first clinics in London to use the
                brand new Soprano Titanium Laser Hair Removal technology. If you
                are one of the many millions of people who suffer from unwanted
                hair and want a long-lasting solution, we can offer you a safe,
                effective and painless way to remove unwanted hair through the
                state of the art Soprano Titanium laser. With faster than ever
                treatment times, you can now treat half of your body during your
                lunch hour, painlessly and effortlessly at our London clinic.
              </p>
              <p>
                Soprano Titanium is the next-generation of laser hair removal.
                It’s an effective and permanent hair reduction solution that is
                simple and easy. It takes cutting-edge medical laser technology
                and combines it with the comfort and convenience of a trip to
                the spa. In fact, Soprano Titanium uses new breakthrough
                technology that has been described as one of the most
                comfortable laser hair removal options available. If you’ve had
                laser hair removal elsewhere and thought it was too
                uncomfortable, come and experience the difference.
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
            <div className="relative h-100 md:h-125 w-75 md:w-150 overflow-hidden z-10">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/AdobeStock_276177323-1-scaled.jpeg"
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
