"use client";

import { Barbell, Jar, Scissors, Sun, Thermometer } from "@phosphor-icons/react";

export default function Procedure() {
  const areas = [
    { name: "Nipples / naval line / hands / feet", single: "£40", three: "£100", six: "£175" },
    { name: "Underarms", single: "£30", three: "£80", six: "£150" },
    { name: "Bikini line", single: "£20", three: "£50", six: "£90" },
    { name: "Upper lip & chin", single: "£35", three: "£95", six: "£180" },
    { name: "Lower Face", single: "£45", three: "£120", six: "£220" },
    { name: "Brazilian bikini (inc. peri-anal)", single: "£55", three: "£150", six: "£280" },
    { name: "Hollywood bikini (inc. peri-anal)", single: "£55", three: "£150", six: "£280" },
    { name: "Lower leg & knee", single: "£60", three: "£160", six: "£300" },
    { name: "Lower face & neck", single: "£60", three: "£160", six: "£300" },
    { name: "Full arms (inc. hands & fingers)", single: "£70", three: "£190", six: "£350" },
    { name: "Full face & neck", single: "£70", three: "£190", six: "£350" },
    { name: "Full back", single: "£100", three: "£280", six: "£500" },
    { name: "Chest & abdomen", single: "£100", three: "£280", six: "£500" },
    { name: "Upper legs & knee", single: "£60", three: "£160", six: "£300" },
    { name: "Full legs (inc. feet & toes)", single: "£80", three: "£210", six: "£1400" },
  ];

  const instructions = [
    {
      icon: <Scissors size={32} className="text-[#B59A5B]" />,
      text: "Shave 24 hours before treatment",
    },
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
      text: "No active ingredients or perfumed products for 48-72 hours",
    },
  ];

  return (
    <section id="procedure" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Detailed Pricing Table */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-lg shadow-xl bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#B59A5B] text-white">
                    <th className="px-6 py-4 uppercase text-xs tracking-wider">Popular Combos</th>
                    <th className="px-6 py-4 uppercase text-xs tracking-wider text-center">Single</th>
                    <th className="px-6 py-4 uppercase text-xs tracking-wider text-center">Three</th>
                    <th className="px-6 py-4 uppercase text-xs tracking-wider text-center">Six</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {areas.map((item, index) => (
                    <tr
                      key={index}
                      className={`transition-colors hover:bg-gray-50 ${index % 2 === 1 ? 'bg-white' : 'bg-[#EFEDE6]'}`}
                    >
                      <td className="px-6 py-3 text-sm font-medium text-gray-800">{item.name}</td>
                      <td className="px-6 py-3 text-sm text-center text-gray-600">{item.single}</td>
                      <td className="px-6 py-3 text-sm text-center text-gray-600">{item.three}</td>
                      <td className="px-6 py-3 text-sm text-center text-gray-600">{item.six}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight uppercase">
                What you need to know <br /> for this treatment
              </h3>
              <p className="text-[#B59A5B] italic text-lg md:text-xl font-medium border-l-4 border-[#B59A5B] pl-6 py-2">
                For best results, we recommend a minimum of 6-8 treatments spaced 4-6 weeks apart.
              </p>
            </div>

            <ul className="space-y-10">
              {instructions.map((item, index) => (
                <li key={index} className="flex items-center gap-8 group">
                  <div className="flex-shrink-0 p-3 rounded-full bg-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-lg md:text-xl text-gray-700 font-light poppins-light-text">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

