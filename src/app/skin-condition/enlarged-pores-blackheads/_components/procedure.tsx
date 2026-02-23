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
              <p className="text-xl  mb-4">Why Do I Get Blackheads?</p>

              <p className="text-xl  mb-4">
                1. Excess Oil Production: Overactive sebaceous glands produce
                too much oil, which can mix with dead skin cells and debris,
                leading to clogged pores.
              </p>

              <p className="text-xl  mb-4">
                2. Clogged Pores: The combination of oil, dead skin cells, and
                debris fills the opening of hair follicles, causing blackheads
                to form.
              </p>

              <p className="text-xl  mb-4">
                3. Enlarged Pores: People with naturally oily skin often have
                larger pores, which provide more space for sebum and impurities
                to accumulate.
              </p>

              <p className="text-xl  mb-4">
                4. Skin Type: Individuals with oily skin are more prone to
                blackheads due to the higher production of sebum.
              </p>

              <p className="text-xl  mb-4">
                5. Hormonal Factors: Hormonal changes, such as those occurring
                during puberty, menstruation, pregnancy, or due to conditions
                like polycystic ovary syndrome (PCOS), can increase oil
                production.
              </p>

              <p className="text-xl  mb-4">
                6. Diet: Certain foods, particularly those high in sugar and
                dairy, may contribute to the development of blackheads by
                influencing hormone levels and oil production.
              </p>

              <p className="text-xl  mb-4">
                7. Stress: Stress can trigger the sebaceous glands to produce
                more oil, leading to a higher likelihood of blackheads.
              </p>

              <p className="text-xl  mb-4">
                8. Environmental Factors: Exposure to pollution and other
                environmental factors can contribute to clogged pores and
                blackhead formation.
              </p>

              <p className="text-xl  mb-4">
                Managing and Preventing Blackheads
              </p>

              <p className="text-xl  mb-4">
                – Skincare Routine: Maintain a regular skincare routine that
                includes cleansing, exfoliating, and moisturise to keep pores
                clean and prevent buildup.
              </p>

              <p className="text-xl  mb-4">
                – Non-Comedogenic Products: Use non-comedogenic skincare and
                makeup products that do not clog pores.
              </p>

              <p className="text-xl  mb-4">
                – Healthy Diet: Follow a balanced diet that limits high-glycemic
                foods and dairy, which can exacerbate oil production.
              </p>

              <p className="text-xl  mb-4">
                – Stress Management: Practice stress-reducing activities like
                exercise, meditation, or hobbies to help manage oil production.
              </p>

              <p className="text-xl  mb-4">
                - Professional Treatments: Treatments such as facials, chemical
                peels, or extractions by our trained medical aestheticians.
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
