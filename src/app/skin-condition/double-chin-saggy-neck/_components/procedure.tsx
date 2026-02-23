import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Procedure() {
  return (
    <section id="procedure" className="py-16 md:py-24 bg-gray-50 banner-wrp">
      {/* right side */}
      <div className="absolute top-0 right-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 items-center justify-between mb-12">
          <div className="flex flex-col gap-6">
            <div className="space-y-4 container mx-auto flex flex-col items-center justify-center text-[#757575]">
              <p className="text-xl  mb-4">
                • Accumulated Fat: Excess fat deposits in the neck area can lead
                to a double chin. This is often seen in individuals who are
                overweight or have gained weight.
              </p>

              <p className="text-xl  mb-4">
                • Sagging Skin: As skin loses its elasticity with age, it can
                sag and contribute to the appearance of a double chin. This
                sagging is sometimes referred to as a “turkey neck.”
              </p>

              <p className="text-xl  mb-4">
                • Aging: The natural aging process causes the skin to lose
                collagen and elastin, leading to decreased skin elasticity and
                firmness. This can result in sagging skin under the chin.
              </p>

              <p className="text-xl  mb-4">
                • Genetics: Hereditary factors can play a significant role. Some
                people may inherit a predisposition for a fuller neck or a
                double chin from a young age, even if they are not overweight.
              </p>

              <p className="text-xl  mb-4">
                • Posture: Poor posture can weaken the muscles of the neck and
                chin, contributing to the appearance of a double chin over time.
              </p>

              <p className="text-xl  mb-4">
                Addressing a double chin and turtle neck involves a combination
                of lifestyle changes, skincare, and potentially medical
                treatments, depending on the severity and underlying causes.
                Treatments to look for: Morpheus 8, FORMA Radio-Frequency, NIR
                infrared laser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
