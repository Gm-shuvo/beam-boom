"use client";

import { Barbell, Clock, Jar, Sun, Thermometer } from "@phosphor-icons/react";
import Image from "next/image";

export default function Procedure() {
  const checklist = [
    {
      icon: <Barbell size={32} className="text-gray-700 font-bold" />,
      text: "No exercise for 48 hours",
    },
    {
      icon: <Thermometer size={32} className="text-gray-700" />,
      text: "No sauna or steam for 7 days",
    },
    {
      icon: <Sun size={32} className="text-gray-700" />,
      text: "No sun, fake tan, UV light for 2 weeks pre or post treatment",
    },
    {
      icon: <Jar size={32} className="text-gray-700" />,
      text: "No active ingredients or retinoid products for 2 weeks",
    },
    {
      icon: <Clock size={32} className="text-gray-700" />,
      text: "2-4 weeks of healing",
    },
  ];

  return (
    <section id="procedure" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Right side background panel */}
      <div className="absolute top-0 right-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content: Checklist */}
          <div className="space-y-12">
            <ul className="space-y-8">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-center gap-6 group">
                  <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-lg md:text-xl text-gray-800 font-light poppins-light-text !text-gray-800">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="pulse-light-description italic !text-xl md:!text-2xl text-gray-600 max-w-xl border-l-4 border-[#B59A5B] pl-6 py-2">
              For best results, we recommend 8–10 treatments spaced 6–8 weeks
              apart.
            </p>
          </div>

          {/* Right Content: Before/After Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden shadow-2xl border-8 border-white bg-white">
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/before1-1.jpg"
                  alt="Tattoo Removal Before"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="bg-black/60 text-white text-[10px] uppercase px-3 py-1 tracking-widest backdrop-blur-sm rounded-full">Before</span>
                </div>
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/after2.jpg"
                  alt="Tattoo Removal After"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="bg-black/60 text-white text-[10px] uppercase px-3 py-1 tracking-widest backdrop-blur-sm rounded-full">After</span>
                </div>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-60 md:h-60 opacity-5 pointer-events-none z-0">
              <img src="/images/round-shape-img.svg" alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

