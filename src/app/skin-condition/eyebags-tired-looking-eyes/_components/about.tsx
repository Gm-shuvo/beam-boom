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
            <h2 className="pulse-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900">
              Eyebags / Tired
              <br />
              looking eyes
            </h2>
            <div className="pulse-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                Eye bags and tired-looking eyes can be attributed to various
                factors such as heavy eyelids, hooded eyes, puffiness under the
                eyes, dark circles, hollows under the eyes, or fine lines around
                the eyes.
              </p>
              <p>
                Ageing is the main cause of tired-looking eyes, as collagen and
                fat padding naturally deplete over time. This loss reduces skin
                elasticity and muscle tone, leading to sagging, wrinkles, and
                hollow areas under the eyes. The thin skin in this region makes
                these changes especially visible, with tear trough hollowing and
                under-eye bags forming as fat pads shift and lymphatic drainage
                slows. Factors like allergies, smoking, fluid retention, thyroid
                issues, genetics, and lack of sleep can worsen puffiness, dark
                circles, and fine lines, though eye bags are usually harmless
                and mainly a cosmetic concern.
              </p>
              <p>
                At Pulse Laser Clinic, we provide advanced non-surgical,
                minimally invasive, and safe treatment options for each of these
                concerns. From the gentle{" "}
                <span className="font-bold">ClearLift laser</span>, which
                reduces puffiness and brightens the under-eye area with no
                downtime, to the more intensive{" "}
                <span className="font-bold">Fractional CO₂ laser</span> for
                deeper rejuvenation and tightening. For clients seeking instant
                results, we also provide{" "}
                <span className="font-bold">injectable</span> treatments to
                smooth and restore volume around the eyes or the{" "}
                <span className="font-bold">Meline Dark Circles</span> peel
                which is highly effective for darkening around the eyes.
              </p>
              <p>
                We also have a signature treatment called{" "}
                <span className="font-bold">BeautifEYE</span> which combines
                Clearlift Laser, microneedling with a targeted brightening serum
                and a peptide mask.
              </p>

              <p>
                To find out more about the above treatments, please book a skin
                consultation with one of our skin specialists. During the
                consultation, we can assess your skin and create a personalised
                treatment plan to help you look refreshed, rested, and
                confident.
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
