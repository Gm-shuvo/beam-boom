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
                How it works?
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
            </div>

            <div className="space-y-4 container mx-auto flex flex-col items-center justify-center text-[#757575]">
              <p className="text-xl  mb-4">
                The laser delivers high-energy pulses (up to ~3000 mJ per pulse)
                via the 1540 nm wavelength.
              </p>

              <p className="text-xl mb-4">
                The energy penetrates to the dermis (under the skin’s surface)
                to create microscopic “columns” or zones of thermal injury,
                triggering the body’s healing response: new collagen, elastin,
                and extracellular matrix are produced.
              </p>

              <p className="text-xl mb-4">
                For acne: It specifically targets sebaceous glands to reduce oil
                production, destroys acne-causing bacteria (e.g., P. acnes), and
                clears deep pore congestion—while still leaving the skin surface
                intact.
              </p>

              <p className="text-xl mb-4">
                The built-in cooling (and sometimes vacuum) system protects the
                epidermis and helps with comfort and safety.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative left-75 -top-15 h-160 w-120 overflow-hidden z-10">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/micro-300x300-1.jpg"
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
