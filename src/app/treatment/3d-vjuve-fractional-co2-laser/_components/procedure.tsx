"use client";

import Image from "next/image";

export default function Procedure() {
  const results = [
    { src: "/images/vjuve-result-1.jpg", label: "Face after 2 sessions" },
    { src: "/images/vjuve-result-2.jpg", label: "Face after 1 session" },
    { src: "/images/vjuve-result-3.jpg", label: "Face after 3 sessions" },
    { src: "/images/vjuve-result-4.jpg", label: "Face after 3 sessions" },
    { src: "/images/vjuve-result-5.jpg", label: "Face after 3 sessions" },
    { src: "/images/vjuve-result-6.jpg", label: "Face after 5 sessions" },
    { src: "/images/vjuve-result-7.jpg", label: "Face after 3 sessions" },
    { src: "/images/vjuve-result-8.jpg", label: "Face after 2 sessions" },
  ];

  return (
    <section id="procedure" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight uppercase">
              3D VJUVE™ <br /> FRACTIONAL CO2 LASER
            </h2>
            <p className="pulse-light-description italic text-lg md:text-xl text-gray-600">
              This fractional laser treatment effectively improves fine lines, wrinkles, dyschromia, pigmented lesions, textural irregularities, scarring, stretch marks and skin laxity. It also reduces pore size and enhances overall skin tone and quality.
            </p>
            <p className="text-lg font-medium text-gray-900 border-l-4 border-[#B59A5B] pl-4">
              Treatment Areas: <span className="font-light text-gray-600">Face and body.</span>
            </p>
          </div>

          {/* Results Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
            {results.map((item, index) => (
              <div key={index} className="space-y-3 group">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 font-light px-2 group-hover:text-[#B59A5B] transition-colors uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Decoration */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-60 md:h-60 opacity-5 pointer-events-none z-0">
            <img src="/images/round-shape-img.svg" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

