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
              Skin Boosters /
              <br />
              Biostimulators
            </h2>
            <div className="pulse-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                Hyperpigmentation, age spots or melasma are common skin
                conditions to experience. Hyperpigmentation can occur when
                melanin is overproduced in certain spots on the skin and results
                in darkened patches on the skin. There are many types of
                hyperpigmentation, but the following are the most common: 1.
                Overproduction of melanin can lead to uneven skin pigmentation
                (or hyperpigmentation as it is often known) across the skin.
                Dark spots – known as age spots or sun spots – or dark patches
                of skin frequently appear on the face, neck décolleté, hands,
                arms and other parts of the body regularly exposed to the sun.
                They tend to be small, dark patches of skin. 2. Melasma or
                chloasma can occur as a result of hormonal influences such as
                pregnancy and birth control pills, and causes dark and
                irregularly shaped areas on the face or arms. 3.
                Post-inflammatory hyperpigmentation can occur when a skin injury
                or trauma heals and leaves a flat area of discolouration behind.
                It’s commonly found among acne sufferers.
              </p>

              <p>
                Our Treatment options include:
                <br />
                <span className="font-bold">• PicoWay Picosecond Laser</span>:
                An advanced picosecond laser that targets unwanted pigmentation
                such as sun spots, age spots, and uneven skin tone. Using
                ultra-short pulses, it breaks pigment into tiny particles for
                natural clearance. It is the safest laser for pigmentation in
                darker skin types.
                <br />
                <span className="font-bold">• An IPL Photo-facial Laser</span>:
                A powerful, non-laser light treatment used to treat pigment and
                redness in the skin. It treats sun damage including brown spots
                and freckles and improves skin tone, clarity, and overall
                appearance.
                <br />
                <span className="font-bold">• ClearLift Laser</span>: A
                non-invasive, virtually painless procedure that uses fractional
                Q-switched laser technology to target and break down unwanted
                pigmentation deep within the skin, without harming the surface
                layer.
                <br />
                <span className="font-bold">
                  • Cosmelan Depigmentation Peel
                </span>
                : Cosmelan is a powerful depigmentation treatment designed to
                reduce melasma, pigmentation, and dark spots. It works by
                correcting pigment production at the source, helping restore a
                brighter, more even skin tone with long-lasting results
                <br />
                <span className="font-bold">
                  • pHformula MELA Resurfacing Peel
                </span>
                : The Mela Peel is a professional chemical peel with no
                downtime. It targets pigmentation (like melasma, sun spots,
                post-acne marks) by using acids to exfoliate skin, inhibit
                melanin, and stimulate cell turnover, resulting in a brighter,
                smoother, more even skin tone and complexion.
                <br />
                <span className="font-bold">• Medical-Grade Skincare</span>:
                Professionally prescribed skincare products forumulated with
                active ingredients (like Retinoids, Vitamin C, Hydroquinone,
                Kojic Acid, AHAs) in high concentrations, to actively fade dark
                spots, even skin tone, and prevent future discolouration by
                inhibiting melanin (pigment) production and boosting skin cell
                turnover.
                <br />
                <span className="font-bold">• Medical-Grade Skincare</span>:
                Professionally prescribed skincare products forumulated with
                active ingredients (like Retinoids, Vitamin C, Hydroquinone,
                Kojic Acid, AHAs) in high concentrations, to actively fade dark
                spots, even skin tone, and prevent future discolouration by
                inhibiting melanin (pigment) production and boosting skin cell
                turnover.
                <br />
                <span className="font-bold">• Skin Supplements</span>: A daily
                supplement formulated to support skin health from within.
              </p>

              <p>
                To find out more about the above treatments and which ones will
                be the right treatment for your pigmentation, please book a skin
                consultation with one of our skin specialists. During the
                consultation, we can assess your skin and create a personalised
                treatment plan to help you with your pigmentation concerns.
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
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/AdobeStock_216793051-e1556147202225-1024x751-1-1-1.jpeg"
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
