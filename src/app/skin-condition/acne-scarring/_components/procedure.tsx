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
                Acne scarring can sometimes develop as a complication of acne.
                Any type of acne spot can lead to scarring, but it’s more common
                when the most serious types of spots (nodules and cysts) burst
                and damage nearby skin.Scarring can also occur if you pick or
                squeeze your spots, so it’s important not to do this.There are
                three main types of acne scars:
              </p>

              <p className="text-xl mb-4">
                <span className="font-bold text-gray-800">
                  • ice pick scars{" "}
                </span>{" "}
                - small, deep holes in the surface of your skin that look like
                the skin has been punctured with a sharp object
              </p>

              <p className="text-xl mb-4">
                <span className="font-bold text-gray-800">
                  • rolling scars{" "}
                </span>{" "}
                - caused by bands of scar tissue that form under the skin,
                giving the surface of the skin a rolling and uneven appearance
              </p>

              <p className="text-xl mb-4">
                <span className="font-bold text-gray-800">• boxcar scars </span>{" "}
                - round or oval depressions, or craters, in the skin
              </p>

              <p className="text-xl  mb-4">
                Here at Pulse Laser Aesthetic Clinic, we are aware of the impact
                that acne scarring can have on your self confidence. We offer
                bespoke treatment plans to help reduce the appearance of acne
                scarring. We offer various treatments including{" "}
                <span className="font-bold">
                  ClearSkin, Alma Hybrid CO2, iPixel
                </span>{" "}
                and <span className="font-bold">SkinPen Microneedling.</span>
              </p>
              <p className="text-xl  mb-4">
                To find out which would be the most suitable treatment for you,
                please book a skin consultation with one of our skin
                specialists. During the consultation, we can assess your skin
                and create a personalised treatment plan to help you address
                your acne scarring.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative left-75 -top-15 h-160 w-120 overflow-hidden z-10">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/a4e99078-e507-42d2-b302-0a752462a5ec.jpg "
                alt="About Pulse Laser Clinic"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
