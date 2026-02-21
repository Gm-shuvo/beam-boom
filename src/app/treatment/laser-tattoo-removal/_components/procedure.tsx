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
                The Procedure
              </Button>

              <Button
                size={"lg"}
                className="h-14 w-40 text-lg bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
              >
                FAQ
              </Button>
            </div>

            <div className="space-y-4 container mx-auto flex flex-col items-center justify-center text-[#757575]">
              <p className="text-xl  mb-4">
                Before your first session, you will attend a complimentary
                consultation and patch test appointment where the technician
                will test your skin’s reaction to the laser to determine the
                most effective energy for treatment.
              </p>

              <p className="text-xl mb-4">
                For the treatment, you will be given a pair of protective eye
                shields. If your tattoo is large, numbing cream may be applied
                beforehand. The technician will also cool your skin with a
                CryoAir, a powerful chilling machine that blows cold air on the
                skin. This will keep the skin cool whilst they use the laser to
                pass pulses of intense light over the tattoo. Smaller tattoos
                will require fewer pulses, and this will take as little as 5
                minutes, while larger ones will need more pulses and time to
                remove them.
              </p>

              <p className="text-xl mb-4">
                Immediately following the treatment, a soothing cream and
                dressing will be applied to the treated area to protect it and
                after care advice will be given.
              </p>

              <p className="text-xl mb-4">
                To discuss your personal laser tattoo removal treatment plan and
                for any other questions you may have, contact our clinic on 020
                3405 8483 or via info@pulse-clinic.co.uk to book your
                appointment today.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative -right-21.75 h-100 md:h-125 w-75 md:w-150 overflow-hidden z-10">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/09/R6II4136-scaled.jpg"
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
