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
              Acne
            </h2>
            <div className="pulse-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                Acne is a common skin condition caused by excess oil production,
                clogged pores, bacteria, and hormonal fluctuations. It can lead
                to inflammation, breakouts, and sometimes scarring if left
                untreated.
              </p>
              <p>Types of Acne</p>
              <p>
                <span className="font-bold">2. Cystic Acne</span>
                <br />– Cause: Severe blockage in the pores leading to
                infections deep in the skin.
                <br />
                – Symptoms: Large, painful, pus-filled pimples.
                <br />– Characteristics: Often leads to scarring if not treated
                properly.
              </p>
              <p>
                <span className="font-bold">3. Hormonal Acne</span>
                <br />
                – Cause: Overproduction of sebum due to hormonal changes.
                <br />
                – Symptoms: Pimples predominantly on the lower face and jawline.
                <br />– Characteristics: Common in adults, especially women,
                during hormonal fluctuations such as menstruation, pregnancy, or
                menopause. properly.
              </p>
              <p>
                <span className="font-bold">4. Nodular Acne</span>
                <br />
                – Cause: Severe infection deep within the skin.
                <br />
                – Symptoms: Hard, painful lumps under the skin’s surface.
                <br />– Characteristics: Can lead to significant scarring and
                requires medical treatment.
                <br />
                <span className="mt-6">
                  All forms of acne can negatively impact self-esteem and
                  confidence. Severe forms like cystic and nodular acne can
                  result in permanent skin damage, including scarring. Seeking
                  early intervention is crucial to determine the most effective
                  treatment plan and to prevent long-term effects.
                </span>
                <span className="mt-6">
                  Our skin specialists offer advanced, non-invasive treatments
                  to target the root causes of acne and restore clearer,
                  healthier skin. We create tailored treatment plans designed to
                  reduce breakouts, calm inflammation, and improve overall skin
                  texture.
                </span>
                <span className="my-6">
                  Our acne treatment options include:
                </span>
              </p>

              <p>
                <span className="font-bold">• ClearSkin Pro Laser: </span>A
                powerful, non-ablative laser that penetrates deep into the skin
                to destroy acne-causing bacteria, reduce oil production, and
                stimulate collagen for smoother, clearer skin.
              </p>

              <p>
                <span className="font-bold">• Chemical Peels: </span>
                Medical-grade peels that exfoliate dead skin cells, unclog
                pores, and reduce acne marks, revealing a refreshed and balanced
                complexion.
              </p>

              <p>
                <span className="font-bold">
                  • Dermalux LED Light Therapy:{" "}
                </span>
                This light therapy uses specific wavelengths (like blue and red)
                to treat acne by killing bacteria, reducing inflammation,
                shrinking oil glands, and promoting skin healing.
              </p>

              <p>
                <span className="font-bold">• Medical-Grade Skincare: </span>
                Professionally prescribed skincare products formulated with
                active ingredients to control acne, prevent future breakouts,
                and maintain long-term skin health.
              </p>

              <p>
                <span className="font-bold">• Skin Supplements: </span>A daily
                supplement formulated to support skin health from within.
              </p>

              <p>
                To find out more about the above treatments, please book a skin
                consultation with one of our skin specialists. During the
                consultation, we can assess your skin and create a personalised
                treatment plan to help you with your acne concern.
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
