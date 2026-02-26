"use client";

import { Barbell, Clock, Jar, Sun, Thermometer } from "@phosphor-icons/react";
import Image from "next/image";

export default function About() {
  const pricing = [
    { area: "Half face", single: "£200", three: "£500", six: "£900" },
    { area: "Full face", single: "£400", three: "£900", six: "£1600" },
    { area: "Full face & neck", single: "£550", three: "£1275", six: "£2200" },
    {
      area: "Stretch Marks (starting from)",
      single: "£200-£400",
      three: "£500-£1000",
      six: "£1500-£2000",
    },
    { area: "Decolletage", single: "£250", three: "£675", six: "£1,050" },
  ];

  const benefits = [
    {
      icon: <Barbell size={32} className="text-[#B59A5B]" />,
      text: "No exercise for 24 hours",
    },
    {
      icon: <Thermometer size={32} className="text-[#B59A5B]" />,
      text: "No sauna or steam for 24 hours",
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
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight uppercase">
                3D VJUVE™ <br /> FRACTIONAL CO2 LASER
              </h2>
              <p className="pulse-light-description italic !text-xl text-[#B59A5B]">
                Advanced skin resurfacing to smooth scars, refine texture, restore tone and dramatically rejuvenate damaged skin.
              </p>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
              <p>
                Fractional CO<sub>2</sub> laser is an ablative resurfacing treatment that uses carbon dioxide laser energy to create thousands of tiny, controlled micro-channels in the skin.
              </p>
              <p>
                Rather than treating the entire surface, it works in a fractional pattern, meaning small columns of skin are treated while the surrounding tissue remains intact. This allows for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Faster healing</li>
                <li>Reduced downtime compared to traditional full resurfacing</li>
                <li>Powerful collagen stimulation</li>
              </ul>
              <p>
                The laser energy precisely removes damaged outer layers of skin while heating the deeper dermis. This triggers the body’s natural healing response, stimulating new collagen and elastin production, resulting in firmer, smoother, more even skin over time.
              </p>
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
                    <th className="px-4 py-4 uppercase text-xs tracking-wider">AREA</th>
                    <th className="px-4 py-4 uppercase text-xs tracking-wider text-center">SINGLE</th>
                    <th className="px-4 py-4 uppercase text-xs tracking-wider text-center">THREE</th>
                    <th className="px-4 py-4 uppercase text-xs tracking-wider text-center">SIX</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {pricing.map((item, index) => (
                    <tr
                      key={index}
                      className={`transition-colors hover:bg-gray-50 ${index % 2 === 1 ? 'bg-[#FDFBF7]' : 'bg-white'}`}
                    >
                      <td className="px-4 py-4 text-sm font-medium text-gray-800">{item.area}</td>
                      <td className="px-4 py-4 text-sm text-center text-gray-600">{item.single}</td>
                      <td className="px-4 py-4 text-sm text-center text-gray-600">{item.three}</td>
                      <td className="px-4 py-4 text-sm text-center text-gray-600">{item.six}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Before After Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/vjuve-ba-main.jpg"
                alt="3D VJUVE Fractional CO2 Laser Results"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-center italic text-gray-600 font-light">
              For best results, we recommend a minimum of 3-6 treatments spaced 4-8 weeks apart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

