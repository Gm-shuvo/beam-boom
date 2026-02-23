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
              Double chin / Saggy neck
            </span>
            <h2 className="pulse-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900">
              Double chin / Saggy
              <br />
              neck
            </h2>
            <div className="pulse-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                A double chin, also known as submental fat, is a common
                aesthetic concern characterised by a layer of fat beneath the
                chin. It can result from several factors.
              </p>

              <p>
                A double chin is not the same as a turkey neck. While both of
                these cosmetic concerns affect the area beneath your chin and
                rob your jawline of attractive definition, they are quite
                different. Here is more information about what sets these
                concerns apart and how you can treat them.
              </p>

              <p>
                The term “turkey neck” refers to wrinkled and sagging skin on
                the neck, typically occurring with age as skin loses elasticity.
                Weak neck muscles also play a role in its development.
              </p>

              <p>
                Unfortunately, there is limited evidence that exercising neck
                muscles will improve this condition. The overlying skin will
                still need professional treatment to appear younger and tighter.
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
