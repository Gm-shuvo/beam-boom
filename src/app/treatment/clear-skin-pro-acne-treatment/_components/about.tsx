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
              ClearSkin Pro Acne
              <br />
              Treatment
            </h2>
            <div className="pulse-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                At Pulse Laser Aesthetic Clinic we pride ourselves on offering
                the latest Harmony XL Pro ClearSkin treatment to help treat
                active acne (vulgaris) and acne scars. Using the latest in laser
                acne treatment, our specialist clinic based in Fitzrovia,
                London, assist in reducing the signs and scars of acne in a pain
                free, quick process that has no downtime.
              </p>
              <p>
                ClearSkin PRO is a non-ablative fractional laser treatment with
                a wavelength of 1540 nm. The energy from this laser penetrates
                to the dermis (under the skin’s surface) to create microscopic
                “columns” or zones of thermal injury, triggering the body’s
                healing response: new collagen, elastin, and extracellular
                matrix are produced. It specifically targets sebaceous glands to
                reduce oil production, destroys acne-causing bacteria (e.g., P.
                acnes), and clears deep pore congestion, while still leaving the
                skin surface intact meaning there is little to no downtime with
                this treatment.
              </p>
              <p>A course of 4-6 treatments is required at 2 week intervals.</p>
              <p>Suitable for the treatment of:</p>
              <p>
                <span className="font-bold">• Active acne</span> (including
                moderate to severe forms) such as papules, pustules and
                nodules.{" "}
              </p>
              <p>
                <span className="font-bold">• Excess oiliness</span> and
                overactive sebaceous glands and enlarged pores.
              </p>
              <p>
                <span className="font-bold">• Acne scarring</span> and uneven
                skin texture (post acne marks).
              </p>
              <p>
                <span className="font-bold">• Skin rejuvenation</span> fine
                lines, wrinkles, laxity, uneven tone and texture.
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
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/ClearSkin-Collage-min.jpg"
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
