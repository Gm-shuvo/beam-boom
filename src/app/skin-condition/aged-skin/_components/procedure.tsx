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
              <p className="text-xl  mb-4 text-left">
                The natural aging process typically results in the development
                of lines and wrinkles, age spots, uneven pigmentation, broken
                capillaries, dull skin texture and color, and other
                imperfections in the skin.
              </p>

              <p className="text-xl  mb-4">
                As skin ages, features that were once attractive, like moles or
                birthmarks, may become less appealing. Similarly, scars that
                were previously inconspicuous can become more noticeable as
                wrinkles form around them.
              </p>

              <p className="text-xl  mb-4">
                Sun damage exacerbates the aging process by penetrating all
                layers of the skin, including those that provide strength and
                elasticity.
              </p>

              <p className="text-xl  mb-4">
                Anti-aging creams and topical products primarily address mild
                symptoms of aging, focusing on damage to the skin’s outermost
                layers.
              </p>

              <p className="text-xl  mb-4">
                Treatments to look for: ClearLift, Alma Hybrid co2, Ipixel,
                SkinPen Microneedling, NIR infra-red Laser plus more.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative left-75 -top-15 h-160 w-120 overflow-hidden z-10">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/9ff5196c-a445-4977-a14e-aa71b88cb715.jpg"
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
