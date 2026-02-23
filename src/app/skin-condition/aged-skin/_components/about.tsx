"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ExternalLink } from "lucide-react";

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
              Aged Skin
            </span>
            <h2 className="pulse-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900">
              Aged Skin
            </h2>
            <div className="pulse-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                Facial aging encompasses several factors, including thinning
                skin, decreased collagen and hyaluronic acid levels, and changes
                in cell structure. The formation of lines and wrinkles is a
                notable aspect of this natural process.
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
        </div>
      </div>
    </section>
  );
}
