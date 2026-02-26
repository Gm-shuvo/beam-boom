"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";

export default function OurPrices() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300; // Adjust based on card width + gap
      const newScrollLeft =
        direction === "left"
          ? sliderRef.current.scrollLeft - scrollAmount
          : sliderRef.current.scrollLeft + scrollAmount;

      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const pricingCategories = [
    {
      id: "full-treatment-menu",
      title: "Full Treatment Menu",
      subtitle: "",
      items: [
        {
          name: "Full Treatment Menu and Price List",
          price: "",
          note: "View complete pricing",
        },
      ],
    },
    {
      id: "skin-boosters",
      title: "Skin boosters & Bio-stimulators",
      subtitle: "Prices from, Per session",
      items: [
        { name: "Profhilo", price: "1 session £350", note: "" },
        { name: "Profhilo", price: "2 sessions £630", note: "" },
        { name: "Sculptra", price: "£500", note: "" },
        { name: "Polynucleotides Eyes", price: "£300", note: "" },
        { name: "Polynucleotides Face", price: "£300", note: "" },
        {
          name: "Polynucleotides Eyes and Face in same session",
          price: "£540",
          note: "",
        },
      ],
    },
    {
      id: "anti-wrinkle",
      title: "Anti Wrinkle injections",
      subtitle: "Prices from, per session",
      items: [
        { name: "1 Area", price: "£210", note: "" },
        { name: "2 Areas", price: "£270", note: "" },
        { name: "3 Areas", price: "£330", note: "" },
        { name: "Gummy smile", price: "£400", note: "" },
        { name: "Teeth Grinding", price: "£420", note: "" },
        { name: "Male 1 Area", price: "£220", note: "" },
        { name: "Male 2 Areas", price: "£310", note: "" },
        { name: "Male 3 areas", price: "£350", note: "" },
        { name: "Hyperhidrosis (Sweating)", price: "£600", note: "" },
      ],
    },
    {
      id: "dermal-fillers",
      title: "Dermal Fillers",
      subtitle: "Prices from, per session",
      items: [
        { name: "Lip 1/2 ml", price: "£300", note: "" },
        { name: "Lip 1ml", price: "£400", note: "" },
        { name: "Cheeks 1ml", price: "£400", note: "" },
        { name: "Tear Trough", price: "£400", note: "" },
        { name: "Nose correction", price: "£450", note: "" },
        { name: "Nasolabial lines", price: "£350", note: "" },
        { name: "Temples", price: "£420", note: "" },
        { name: "Marionette lines", price: "£400", note: "" },
      ],
    },

    {
      id: "soprano-hair",
      title: "Soprano Hair Removal",
      subtitle: "Course of 6 sessions",
      items: [
        { name: "Upper Lip", price: "£250", note: "" },
        { name: "Chin", price: "£250", note: "" },
        { name: "Underarms", price: "£375", note: "" },
        { name: "Lower Face", price: "£625", note: "" },
        { name: "Brazilian Bikini", price: "£650", note: "" },
        { name: "Hollywood Bikini", price: "£750", note: "" },
        { name: "Lower Legs incl knee", price: "£875", note: "" },
        { name: "Full Legs", price: "£1400", note: "" },
        { name: "Full arms", price: "£875", note: "" },
        { name: "Full Body and Face", price: "£3000", note: "" },
      ],
      note: "20% discount when treating 2 or more areas",
    },
    {
      id: "pico-tattoo",
      title: "Pico Laser Tattoo Removal",
      subtitle: "Prices from, per session",
      items: [
        { name: "Eyebrows", price: "£150", note: "" },
        { name: "Extra Small (>3cm)", price: "£70", note: "" },
        { name: "Small (4-6cm)", price: "£110", note: "" },
        { name: "Medium (7-9cm)", price: "£160", note: "" },
        { name: "Large (10-12cm)", price: "£225", note: "" },
        { name: "Major (<13cm)", price: "by consultation", note: "" },
        { name: "Semi-Permanent Makeup", price: "by consultation", note: "" },
      ],
    },
    {
      id: "rosacea-veins",
      title: "Rosacea / Thread Veins",
      subtitle: "Course of 4 and 6 sessions",
      items: [
        { name: "Half Face", price: "£540 / £750", note: "" },
        { name: "Full Face", price: "£810 / £1125", note: "" },
        { name: "Décolleté", price: "£1080 / £1500", note: "" },
        { name: "Small Facial area", price: "£450 / £625", note: "" },
        { name: "Leg Veins (30 mins)", price: "£630 / £875", note: "" },
        { name: "Leg Veins (60 minutes)", price: "£1080 / £1500", note: "" },
      ],
    },
    {
      id: "picoway",
      title: "PicoWay Picosecond Laser",
      subtitle: "Prices from, per session / Course of 3",
      items: [
        { name: "Half face", price: "£300 / £700", note: "" },
        { name: "Full Face", price: "£450 / £1050", note: "" },
        { name: "Full Face and Neck", price: "£540 / £1260", note: "" },
        { name: "Small Area", price: "£200 / £470", note: "" },
      ],
      note: "Offer: 20% off prices until 28 February",
    },
    {
      id: "hybrid-co2",
      title: "Hybrid Fractional CO2 Laser",
      subtitle: "Prices from, Per session / Course of 3",
      items: [
        { name: "Full face", price: "£750 / £1750", note: "" },
        { name: "Eyes", price: "£300 / £750", note: "" },
        { name: "Lips", price: "£200 / £560", note: "" },
      ],
    },
    {
      id: "clearlift",
      title: "ClearLift Laser",
      subtitle: "Course of 3 and 6 sessions",
      items: [
        { name: "Eyes", price: "£490 / £875", note: "" },
        { name: "Half face", price: "£630 / £1125", note: "" },
        { name: "Full Face", price: "£840 / £1500", note: "" },
        { name: "Full Face and Neck", price: "£1330 / £2375", note: "" },
      ],
    },
    {
      id: "pigmentation",
      title: "Pigmentation Laser",
      subtitle: "Course of 4 and 6 sessions",
      items: [
        { name: "Small Area", price: "£450 / £625", note: "" },
        { name: "Half face", price: "£540 / £750", note: "" },
        { name: "Full Face", price: "£810 / £1125", note: "" },
        { name: "Décolleté", price: "£1085 / £1460", note: "" },
        { name: "Hands", price: "£650 / £875", note: "" },
      ],
    },
    {
      id: "skinpen",
      title: "SkinPen Microneedling",
      subtitle: "Prices from, per session",
      items: [
        { name: "Full Face", price: "£300", note: "" },
        { name: "Full Face and Neck", price: "£350", note: "" },
        { name: "Full Face, Neck and Decollete", price: "£400", note: "" },
        { name: "Additional Areas", price: "+£50", note: "" },
        { name: "With Exosomes", price: "+£150", note: "" },
      ],
    },
    {
      id: "ipixel",
      title: "iPixel Resurfacing",
      subtitle: "Course of 3 and 6 sessions",
      items: [
        { name: "Half Face", price: "£700 / £1250", note: "" },
        { name: "Full Face", price: "£1120 / £2000", note: "" },
        { name: "Full Face and Neck", price: "£1540 / £2750", note: "" },
        { name: "Additional Areas", price: "on consultation", note: "" },
      ],
    },
    {
      id: "morpheus8",
      title: "Morpheus8",
      subtitle: "Course of 3 sessions",
      items: [
        { name: "Eyes only", price: "£945", note: "" },
        { name: "Lower face and neck", price: "£1350", note: "" },
        { name: "Full face and neck", price: "£1750", note: "" },
        { name: "Abdomen", price: "£1890", note: "" },
        { name: "Buttocks", price: "£1890", note: "" },
        { name: "Thighs", price: "£1890", note: "" },
      ],
    },
    {
      id: "medical-facials",
      title: "Medical Facials",
      subtitle: "Prices from, per session",
      items: [
        {
          name: "pHFormula Skin Resurfacing with LED",
          price: "£200",
          note: "",
        },
        {
          name: "DermaClear Hydradermabrasion Facial",
          price: "£175",
          note: "",
        },
        { name: "Deep Extraction Facial", price: "£150", note: "" },
        { name: "Obagi Blue Radiance Peel", price: "£150", note: "" },
        { name: "Bright Eye Treatment", price: "£150", note: "" },
        { name: "Pregnancy Facial", price: "£175", note: "" },
        { name: "Vitamin C GLOW Facial", price: "£150", note: "" },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Left vertical panel — reduced width slightly for better balance */}
      <div className="absolute top-0 left-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none">
        {/* Optional subtle leaf decoration — lowered opacity */}
        <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
          <img
            src="/images/about-us-leaves.png"
            alt="Decorative leaves"
            className="object-contain"
          />
        </div>
      </div>

      {/* Main content wrapper — pushed right with left offset + max-width */}
      <div className="relative z-10 container mx-auto px-5 sm:px-8 lg:pl-[16%] lg:pr-8 ">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 items-end">
          <div>
            <p className="pulse-light-description max-w- font-sans">
              Please speak to a member of the reception team for more
              information. This is what helps us deliver the superior results
              our clients have come to expect of us.
            </p>
            {/* Navigation arrows */}
            <div className="flex items-center gap-2 mt-6">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer"
              >
                <ArrowLeftIcon size={18} className="text-foreground" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer"
              >
                <ArrowRightIcon size={18} className="text-foreground" />
              </button>
            </div>
          </div>
          <div className="text-right">
            <span className="pulse-subtitle tracking-wide uppercase block mb-2 text-gray-600 font-medium">
              Pulse Laser
            </span>
            <h2 className="pulse-title text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Prices
            </h2>
          </div>
        </div>

        {/* Price cards */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          {pricingCategories.map((card, i) => (
            <div
              key={i}
              className=" min-w-70 md:min-w-[320px] flex-none snap-start bg-white shadow-lg p-8 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-xl"
            >
              <div className="our-price-item flex-1 w-full flex flex-col items-center">
                <h3 className="review-title mb-4 text-gray-900">
                  {card.title}
                </h3>

                {card.subtitle && (
                  <div className=" mb-6 w-full flex justify-center">
                    <span className="detail inline-block border-b-2 border-blue-400 pb-1 uppercase tracking-wider">
                      {card.subtitle}
                    </span>
                  </div>
                )}

                {card.note && (
                  <p className="text-sm text-gray-500 mb-4 italic">
                    {card.note}
                  </p>
                )}

                <div className="space-y-3 mb-8 w-full">
                  {card.items.map((item, j) => (
                    <div
                      key={j}
                      className="text-gray-600 font-light text-base md:text-lg flex items-center justify-center gap-2"
                    >
                      <span>{item.name}</span>
                      {item.price && (
                        <>
                          <span className="hidden opacity-0 group-hover:opacity-100 transition-opacity text-gray-300">
                            -
                          </span>
                          <span className="font-medium text-gray-900">
                            {item.price}
                          </span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 px-6 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors uppercase text-sm tracking-wide font-medium mt-auto">
                <ArrowRightIcon size={16} />
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
