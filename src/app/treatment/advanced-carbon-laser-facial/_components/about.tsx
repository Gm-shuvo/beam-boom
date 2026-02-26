"use client";

import { Clock, Drop, Sun, Syringe } from "@phosphor-icons/react";
import Image from "next/image";

export default function About() {
  const pricing = [
    { area: "Full face", single: "£50", three: "£135", five: "£225" },
  ];

  const benefits = [
    {
      icon: <Sun size={32} className="text-[#B59A5B]" />,
      text: "Avoid direct sun exposure for 1-2 weeks",
    },
    {
      icon: <Drop size={32} className="text-[#B59A5B]" />,
      text: "No active ingredients or retinols for 5-7 days",
    },
    {
      icon: <Clock size={32} className="text-[#B59A5B]" />,
      text: "Use SPF daily",
    },
    {
      icon: <Syringe size={32} className="text-[#B59A5B]" />,
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
                ADVANCED CARBON LASER FACIAL
              </h2>
              <p className="pulse-light-description italic !text-xl text-[#B59A5B]">
                Hollywood Peel - A deep-cleansing laser treatment designed to refresh, brighten and rejuvenate the skin.
              </p>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
              <p>
                A thin layer of medical-grade carbon is applied to the skin, absorbing oil, impurities and dead skin cells. A specialised laser is then used to gently heat and remove the carbon, exfoliating the skin while stimulating collagen production.
              </p>
              <p className="font-medium text-gray-900">
                This treatment helps to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reduce enlarged pores</li>
                <li>Control excess oil</li>
                <li>Improve acne and congestion</li>
                <li>Brighten dull skin</li>
                <li>Smooth fine lines and uneven texture</li>
              </ul>
              <p>
                The Carbon Facial is quick, comfortable and requires minimal downtime, making it ideal before events or as part of a regular skin maintenance routine.
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
                    <th className="px-4 py-4 uppercase text-xs tracking-wider text-center">FIVE</th>
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
                      <td className="px-4 py-4 text-sm text-center text-gray-600">{item.five}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Before After Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/carbon-facial-about.jpg"
                alt="Advanced Carbon Laser Facial Treatment"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-center italic text-gray-600 font-light">
              For best results, we recommend a course of 3–5 treatments spaced 2–4 weeks apart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

