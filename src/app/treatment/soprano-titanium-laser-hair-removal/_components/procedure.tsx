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
            <div className="flex gap-6 items-start mb-14">
              <Button size={"lg"} className="h-14 w-60 text-lg">
                How it works
              </Button>

              <Button
                size={"lg"}
                className="h-14 w-60 text-lg bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
              >
                The Procedure
              </Button>
              <Button
                size={"lg"}
                className="h-14 w-60 text-lg bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
              >
                FAQ
              </Button>

              <Button
                size={"lg"}
                className="h-14 w-60 text-lg bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
              >
                Aftercare instructions
              </Button>
            </div>

            <div className="space-y-4 container mx-auto flex flex-col items-center justify-center text-[#757575]">
              <p className="text-xl  mb-4">
                The Soprano Titanium Laser hair removal method is unlike any
                other laser hair removal treatment. Featuring its exclusive 3D
                technology, Soprano Titanium combines the three most effective
                laser wavelengths into a single applicator, simultaneously
                targeting different tissue depths and anatomical structures
                within the hair follicle.
              </p>

              <p className="text-xl mb-4">
                <span className="font-bold text-gray-800">
                  The Alexandrite 755nm{" "}
                </span>{" "}
                - This wavelength is used to target an extensive range of hair
                colours and densities. This includes thin hair and hair that is
                lighter in colour and can even address embedded hair.
              </p>

              <p className="text-xl mb-4">
                <span className="font-bold text-gray-800">
                  The SPEED 810nm{" "}
                </span>{" "}
                - This wavelength is used for darker skin types and targets the
                deep hair follicle. It has a moderate tissue penetration depth
                to treat areas like the arms, legs, cheeks and chin.
              </p>

              <p className="text-xl mb-4">
                <span className="font-bold text-gray-800">YAG 1064 </span> - The
                YAG 1064 is the most penetrative wavelength, and is ideal for
                treating embedded hairs, like those that can occur in the
                armpits and pubic area and targets the deepest parts of the
                follicle for the most effective laser hair removal treatment
                possible.
              </p>

              <p className="text-xl  mb-4">
                By combining the absorption and penetration levels of different
                wavelengths, along with extended treatment coverage, increased
                comfort and low maintenance requirements, the Soprano Titanium
                Laser is the safest and most efficient hair removal treatment
                available today.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative left-75 -top-15 h-160 w-120 overflow-hidden z-10">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/09/R6II4136-scaled.jpg"
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
