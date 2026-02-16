"use client";

type TreatmentItem = {
  name: string;
  price: string;
};

type PricingCard = {
  title: string;
  subtitle?: string;
  discount?: string; // for main highlighted discount/offer text
  items: TreatmentItem[];
  isLinkOnly?: boolean;
  extraNote?: string; // optional for small footnotes or *Offer text
};

const pricingData: PricingCard[] = [
  {
    title: "Full Treatment Menu",
    isLinkOnly: true,
    items: [],
  },
  {
    title: "Soprano Hair Removal",
    subtitle: "Course of 6 sessions",
    discount: "20% discount when treating 2 or more areas",
    items: [
      { name: "Upper Lip", price: "£250" },
      { name: "Chin", price: "£250" },
      { name: "Underarms", price: "£375" },
      { name: "Lower Face", price: "£625" },
      { name: "Brazilian Bikini", price: "£650" },
      { name: "Hollywood Bikini", price: "£750" },
      { name: "Lower Legs incl knee", price: "£875" },
      { name: "Full Legs", price: "£1400" },
      { name: "Full arms", price: "£875" },
      { name: "Full Body and Face", price: "£3000" },
    ],
  },
  {
    title: "Pico Laser Tattoo Removal",
    subtitle: "Prices from, per session",
    items: [
      { name: "Eyebrows", price: "£150" },
      { name: "Extra Small (>3cm)", price: "£70" },
      { name: "Small (4-6cm)", price: "£110" },
      { name: "Medium (7-9cm)", price: "£160" },
      { name: "Large (10-12cm)", price: "£225" },
      { name: "Major (<13cm)", price: "by consultation" },
      { name: "Semi-Permanent Makeup", price: "by consultation" },
    ],
  },
  {
    title: "Rosacea / Thread Veins",
    subtitle: "Course of 4 and 6 sessions",
    items: [
      { name: "Half Face", price: "£540 / £750" },
      { name: "Full Face", price: "£810 / £1125" },
      { name: "Décolleté", price: "£1080 / £1500" },
      { name: "Small Facial area", price: "£450 / £625" },
      { name: "Leg Veins (30 mins)", price: "£630 / £875" },
      { name: "Leg Veins (60 minutes)", price: "£1080 / £1500" },
    ],
  },
  {
    title: "PicoWay Picosecond Laser",
    subtitle: "Prices from, per session / Course of 3",
    discount: "Offer: 20% off prices until 28 February",
    items: [
      { name: "Half face", price: "£300 / £700" },
      { name: "Full Face", price: "£450 / £1050" },
      { name: "Full Face and Neck", price: "£540 / £1260" },
      { name: "Small Area", price: "£200 / £470" },
    ],
  },
  {
    title: "Hybrid Fractional CO2 Laser",
    subtitle: "Prices from, Per session / Course of 3",
    discount: "Special Launch Offer: ends 28 February",
    items: [
      { name: "Full face", price: "£750 / £1750" },
      { name: "Eyes", price: "£300 / £750" },
      { name: "Lips", price: "£200 / £560" },
    ],
  },
  {
    title: "ClearLift Laser",
    subtitle: "Course of 3 and 6 sessions",
    items: [
      { name: "Eyes", price: "£490 / £875" },
      { name: "Half face", price: "£630 / £1125" },
      { name: "Full Face", price: "£840 / £1500" },
      { name: "Full Face and Neck", price: "£1330 / £2375" },
    ],
  },
  {
    title: "Pigmentation Laser",
    subtitle: "Course of 4 and 6 sessions",
    items: [
      { name: "Small Area", price: "£450 / £625" },
      { name: "Half face", price: "£540 / £750" },
      { name: "Full Face", price: "£810 / £1125" },
      { name: "Décolleté", price: "£1085 / £1460" },
      { name: "Hands", price: "£650 / £875" },
    ],
  },
  {
    title: "SkinPen Microneedling",
    subtitle: "Prices from, per session",
    items: [
      { name: "Full Face", price: "£300" },
      { name: "Full Face and Neck", price: "£350" },
      { name: "Full Face, Neck and Decollete", price: "£400" },
      { name: "Additional Areas", price: "+£50" },
      { name: "With Exosomes", price: "+£150" },
    ],
  },
  {
    title: "iPixel Resurfacing",
    subtitle: "Course of 3 and 6 sessions",
    items: [
      { name: "Half Face", price: "£700 / £1250" },
      { name: "Full Face", price: "£1120 / £2000" },
      { name: "Full Face and Neck", price: "£1540 / £2750" },
      { name: "Additional Areas", price: "on consultation" },
    ],
  },
  {
    title: "Morpheus8",
    subtitle: "Course of 3 sessions",
    items: [
      { name: "Eyes only", price: "£945" },
      { name: "Lower face and neck", price: "£1350" },
      { name: "Full face and neck", price: "£1750" },
      { name: "Abdomen", price: "£1890" },
      { name: "Buttocks", price: "£1890" },
      { name: "Thighs", price: "£1890" },
    ],
  },
  {
    title: "Medical Facials",
    subtitle: "Prices from, per session",
    items: [
      { name: "pHFormula Skin Resurfacing with LED", price: "£200" },
      { name: "DermaClear Hydradermabrasion Facial", price: "£175" },
      { name: "Deep Extraction Facial", price: "£150" },
      { name: "Obagi Blue Radiance Peel", price: "£150" },
      { name: "Bright Eye Treatment", price: "£150" },
      { name: "Pregnancy Facial", price: "£175" },
      { name: "Vitamin C GLOW Facial", price: "£150" },
    ],
  },
  {
    title: "Cosmelan Depigmentation Peels",
    subtitle: "Prices from, per session",
    items: [
      { name: "Cosmelan Depigmentation Peel", price: "£1200" },
      { name: "Dermamelan Intimate Peel", price: "£750" },
      { name: "Dermamelan Underarm Peel", price: "£750" },
    ],
  },
  {
    title: "Radio-Frequency Skin Tightening",
    subtitle: "Prices from, per session",
    items: [
      { name: "Lower Face and Neck", price: "£200" },
      { name: "Full Face and Neck", price: "£250" },
      { name: "Body (per 2 hand size area)", price: "£275" },
    ],
  },
  {
    title: "Skin Boosters & Bio-Stimulators",
    subtitle: "Prices from, Per session",
    items: [
      { name: "Profhilo: 1 session", price: "£350" },
      { name: "Profhilo: 2 sessions", price: "£630" },
      { name: "Sculptra", price: "£500" },
      { name: "Polynucleotides Eyes", price: "£275" }, // note: screenshot had £275, but some show £300 – check site
      { name: "Polynucleotides Face", price: "£300" },
      { name: "Polynucleotides Eyes and Face in same session", price: "£540" },
    ],
  },
  {
    title: "Anti Wrinkle Injections",
    subtitle: "Prices from, per session",
    items: [
      { name: "1 Area", price: "£210" },
      { name: "2 Areas", price: "£270" },
      { name: "3 Areas", price: "£330" },
      { name: "Gummy smile", price: "£400" },
      { name: "Teeth Grinding", price: "£420" },
      { name: "Male 1 Area", price: "£220" },
      { name: "Male 2 Areas", price: "£310" },
      { name: "Male 3 areas", price: "£350" },
      { name: "Hyperhidrosis (Sweating)", price: "£600" },
    ],
  },
  {
    title: "Dermal Fillers",
    subtitle: "Prices from, per session",
    items: [
      { name: "Lip 1/2 ml", price: "£300" },
      { name: "Lip 1ml", price: "£400" },
      { name: "Cheeks 1ml", price: "£400" },
      { name: "Tear Trough", price: "£400" },
      { name: "Nose correction", price: "£450" },
      { name: "Nasolabial lines", price: "£350" },
      { name: "Temples", price: "£420" },
      { name: "Marionette lines", price: "£400" },
    ],
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Right gray vertical panel – full height, fixed to right edge */}
      <div className="absolute top-0 right-0 bottom-0 w-[22%]  bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <h2 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Treatment Prices
        </h2>
        <p className="text-center md:text-left text-lg text-gray-600 mb-12 max-w-3xl">
          Transparent pricing for our most popular laser and aesthetic
          treatments
        </p>

        {/* Cards – now pushed a bit left / constrained so gray shows on right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 max-w-8xl mx-auto lg:mx-0">
          {pricingData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="p-7 grow">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-5">
                  {card.title}
                </h3>

                {card.isLinkOnly ? (
                  <div className="text-center mb-8">
                    <a
                      href="#booking"
                      className="inline-block text-[#0ea5e9] font-semibold underline hover:text-[#0284c7] transition-colors"
                    >
                      Full Treatment Menu And Price List
                    </a>
                  </div>
                ) : (
                  <>
                    {card.subtitle && (
                      <p className="text-center text-gray-700 font-medium mb-5">
                        {card.subtitle}
                      </p>
                    )}

                    {card.discount && (
                      <p className="text-center text-[#0ea5e9] font-semibold mb-7 underline decoration-2">
                        {card.discount}
                      </p>
                    )}

                    <hr className="border-gray-200 mb-6" />

                    <ul className="space-y-3 text-gray-700 text-base">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex justify-between">
                          <span>{item.name}</span>
                          <span className="font-medium">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="p-7 pt-5 mt-auto border-t border-gray-100 bg-gray-50/50">
                <button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
