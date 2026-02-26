"use client";

import Image from "next/image";

export default function About() {
  const combos = [
    { area: "Underarms & full bikini", single: "£60", three: "£160", six: "£300" },
    {
      area: "Lower legs, underarms & full bikini",
      single: "£140",
      three: "£375",
      six: "£675",
    },
    {
      area: "Full legs, underarms & full bikini",
      single: "£160",
      three: "£425",
      six: "£750",
    },
    { area: "Full body", single: "£600", three: "£1500", six: "£2500" },
    { area: "Full body & Face", single: "£650", three: "£1300", six: "£2600" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Decorative Bar & Image Container */}
          <div className="lg:col-span-7 flex h-full">
            {/* Vertical Golden Bar */}
            <div className="w-24 md:w-32 bg-[#B59A5B] flex flex-col items-center justify-center relative py-12 shrink-0">
              {/* Decorative lines inside bar */}
              <div className="absolute inset-y-0 left-4 w-px bg-white/20" />
              <div className="absolute inset-y-0 right-4 w-px bg-white/20" />
              <h2 className="text-white text-4xl md:text-6xl font-bold tracking-[0.2em] whitespace-nowrap -rotate-90 origin-center uppercase">
                Laser Hair Removal
              </h2>
            </div>
            {/* Image */}
            <div className="relative flex-1 h-[500px] md:h-[700px]">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/AdobeStock_276177323-1-scaled.jpeg"
                alt="Diode Laser Hair Removal"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-5 space-y-8 pt-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight uppercase">
                Diode Laser Hair Removal <br /> For Women
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                <p>
                  Our advanced Diode Laser Hair Removal treatment provides safe,
                  effective, long-term hair reduction for a wide range of skin
                  tones, including tanned skin. The laser gently targets the
                  hair follicle to reduce future growth, leaving skin smoother
                  and free from irritation caused by shaving or waxing.
                </p>
                <p>
                  With a built-in cooling system for added comfort, treatments
                  are quick, safe, and far more comfortable than traditional
                  methods. Suitable for areas such as the face, underarms,
                  bikini, and legs, it's one of our most popular treatments at
                  Beam and Bloom for achieving lasting, confidence-boosting
                  results.
                </p>
              </div>
            </div>

            {/* Pricing Table */}
            <div className="mt-10 overflow-hidden rounded-lg shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#B59A5B] text-white">
                    <th className="px-4 py-4 uppercase text-xs tracking-wider">Popular Combos</th>
                    <th className="px-4 py-4 uppercase text-xs tracking-wider text-center">Single</th>
                    <th className="px-4 py-4 uppercase text-xs tracking-wider text-center">Three</th>
                    <th className="px-4 py-4 uppercase text-xs tracking-wider text-center">Six</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {combos.map((item, index) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}

