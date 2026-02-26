"use client";

import { Barbell, Clock, Jar, Sun, Thermometer } from "@phosphor-icons/react";
import Image from "next/image";

export default function About() {
  const pricing = [
    { area: "Microblading", single: "£300", six: "£150", eighteen: "£200" },
    { area: "Combination Brows (Microblading & Shading)", single: "£350", six: "£175", eighteen: "£225" },
    { area: "Ombre / Powder Brows", single: "£325", six: "£160", eighteen: "£210" },
    { area: "Lip Blush", single: "£350", six: "£175", eighteen: "£225" },
    { area: "Eyeliner (Top or Bottom)", single: "£250", six: "£125", eighteen: "£175" },
    { area: "Eyeliner (Top & Bottom)", single: "£350", six: "£175", eighteen: "£225" },
  ];

  const benefits = [
    {
      icon: <Barbell size={32} className="text-[#B59A5B]" />,
      text: "No exercise for 24 hours",
    },
    {
      icon: <Thermometer size={32} className="text-[#B59A5B]" />,
      text: "No sauna or steam for 7 days",
    },
    {
      icon: <Sun size={32} className="text-[#B59A5B]" />,
      text: "No sun, fake tan, UV light for 2 weeks pre or post treatment",
    },
    {
      icon: <Jar size={32} className="text-[#B59A5B]" />,
      text: "No active ingredients or retinoid products for 7-10 days",
    },
    {
      icon: <Clock size={32} className="text-[#B59A5B]" />,
      text: "Minimal downtime",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative flex flex-col items-center">
        <div className="grid lg:grid-cols-12 gap-12 items-start w-full">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight uppercase">
                PERMANENT MAKE UP
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed font-light text-xl">
                <p>
                  Save time and enhance your natural features with our bespoke Permanent Make Up (PMU) treatments. Our expert technicians use precision techniques to create long-lasting, natural-looking results for eyebrows, eyeliner, and lips, tailored to your unique facial structure and style.
                </p>
              </div>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 pt-8 border-t border-gray-100">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="shrink-0">{item.icon}</div>
                  <span className="text-sm font-light text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-5 space-y-8">
            {/* Pricing Table */}
            <div className="overflow-hidden rounded-lg shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#B59A5B] text-white">
                    <th className="px-4 py-4 uppercase text-[10px] tracking-wider">AREA</th>
                    <th className="px-4 py-4 uppercase text-[10px] tracking-wider text-center">SINGLE</th>
                    <th className="px-4 py-4 uppercase text-[10px] tracking-wider text-center">TOP UP (6-12 MONTHS)</th>
                    <th className="px-4 py-4 uppercase text-[10px] tracking-wider text-center">TOP UP (12-18 MONTHS)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {pricing.map((item, index) => (
                    <tr
                      key={index}
                      className={`transition-colors hover:bg-gray-50 ${index % 2 === 1 ? 'bg-[#FDFBF7]' : 'bg-white'}`}
                    >
                      <td className="px-4 py-4 text-xs font-medium text-gray-800">{item.area}</td>
                      <td className="px-4 py-4 text-xs text-center text-gray-600">{item.single}</td>
                      <td className="px-4 py-4 text-xs text-center text-gray-600">{item.six}</td>
                      <td className="px-4 py-4 text-xs text-center text-gray-600">{item.eighteen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Before After Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/permanent-makeup-about.jpg"
                alt="Permanent Make Up Results"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-center italic text-gray-600 font-light text-sm">
              All new PMU treatments include a complimentary 4-6 week top-up session to ensure perfect healed results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

