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
                After Care
              </Button>
            </div>

            <div className="space-y-4 container mx-auto flex flex-col items-center justify-center text-[#757575]">
              <p className="text-xl  mb-4">
                Skin boosters are{" "}
                <span className="font-bold">
                  hyaluronic acid-based injections
                </span>{" "}
                that are delivered into the deeper layers of the skin. Unlike
                traditional dermal fillers that add volume to specific areas,
                skin boosters work by:
              </p>

              <p className="text-xl mb-4">
                <span className="font-bold text-gray-800">Deep hydration </span>
                : Drawing moisture into the skin to keep it plump and soft.
              </p>

              <p className="text-xl mb-4">
                <span className="font-bold text-gray-800">
                  Improving elasticity{" "}
                </span>
                : Enhancing the skin’s natural elasticity for a firmer, more
                youthful appearance.
              </p>

              <p className="text-xl mb-4">
                <span className="font-bold text-gray-800">
                  Smoothing fine lines and wrinkles{" "}
                </span>
                : Softening lines and imperfections for a smoother complexion.
              </p>

              <p className="text-xl mb-4">
                <span className="font-bold text-gray-800">
                  Enhancing skin texture{" "}
                </span>
                : Making the skin feel smoother and more even.
              </p>

              <p className="text-xl  mb-4">
                Hyaluronic acid (HA) is a naturally occurring substance in the
                skin that helps to retain moisture. As we age, the amount of HA
                in our skin decreases, leading to dryness, fine lines, and loss
                of elasticity. Skin boosters replenish your skin’s HA levels,
                making it look hydrated, healthy, and refreshed.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative left-75 -top-15 h-160 w-120 overflow-hidden z-10">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/10/istockphoto-1781553776-612x612-1.jpg"
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
