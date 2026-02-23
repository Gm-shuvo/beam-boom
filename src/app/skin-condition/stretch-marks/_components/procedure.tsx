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
                You are most likely to develop stretch marks during:
              </p>

              <p className="text-xl  mb-4">
                – Growth spurts in puberty
                <br />
                – Pregnancy
                <br />
                – Rapid weight loss or gain
                <br />– Weight training with rapid muscle growth
              </p>

              <p className="text-xl  mb-4">
                When stretch marks first appear, they are usually red, purple,
                pink, reddish-brown, or dark brown, depending on your skin
                colour. Early stretch marks may feel slightly raised and can be
                itchy.
              </p>

              <p className="text-xl  mb-4">
                Over time, the colour fades and the narrow bands sink beneath
                the skin.
              </p>

              <p className="text-xl  mb-4">
                Treatments to look for: SkinPen Microneedling, Hybrid CO2 Laser,
                Ipixel.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative left-75 -top-15 h-160 w-120 overflow-hidden z-10">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/06/istockphoto-1300473170-612x612-1.jpg"
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
