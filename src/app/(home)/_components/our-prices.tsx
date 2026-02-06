'use client';

import { Href, ViewTransitionLink } from '@/components/view-transition-link';
import { useState } from 'react';

export default function OurPrices() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const pricingCategories = [
    {
      id: 'skin-boosters',
      title: 'Skin boosters & Bio-stimulators',
      subtitle: 'Prices from, Per session',
      items: [
        { name: 'Profhilo', price: '1 session £350', note: '' },
        { name: 'Profhilo', price: '2 sessions £630', note: '' },
        { name: 'Sculptra', price: '£500', note: '' },
        { name: 'Polynucleotides Eyes', price: '£300', note: '' },
        { name: 'Polynucleotides Face', price: '£300', note: '' },
        { name: 'Polynucleotides Eyes and Face in same session', price: '£540', note: '' },
      ],
    },
    {
      id: 'anti-wrinkle',
      title: 'Anti Wrinkle injections',
      subtitle: 'Prices from, per session',
      items: [
        { name: '1 Area', price: '£210', note: '' },
        { name: '2 Areas', price: '£270', note: '' },
        { name: '3 Areas', price: '£330', note: '' },
        { name: 'Gummy smile', price: '£400', note: '' },
        { name: 'Teeth Grinding', price: '£420', note: '' },
        { name: 'Male 1 Area', price: '£220', note: '' },
        { name: 'Male 2 Areas', price: '£310', note: '' },
        { name: 'Male 3 areas', price: '£350', note: '' },
        { name: 'Hyperhidrosis (Sweating)', price: '£600', note: '' },
      ],
    },
    {
      id: 'dermal-fillers',
      title: 'Dermal Fillers',
      subtitle: 'Prices from, per session',
      items: [
        { name: 'Lip 1/2 ml', price: '£300', note: '' },
        { name: 'Lip 1ml', price: '£400', note: '' },
        { name: 'Cheeks 1ml', price: '£400', note: '' },
        { name: 'Tear Trough', price: '£400', note: '' },
        { name: 'Nose correction', price: '£450', note: '' },
        { name: 'Nasolabial lines', price: '£350', note: '' },
        { name: 'Temples', price: '£420', note: '' },
        { name: 'Marionette lines', price: '£400', note: '' },
      ],
    },
    {
      id: 'full-treatment-menu',
      title: 'Full Treatment Menu',
      subtitle: '',
      items: [
        { name: 'Full Treatment Menu and Price List', price: '', note: 'View complete pricing' },
      ],
    },
    {
      id: 'soprano-hair',
      title: 'Soprano Hair Removal',
      subtitle: 'Course of 6 sessions',
      items: [
        { name: 'Upper Lip', price: '£250', note: '' },
        { name: 'Chin', price: '£250', note: '' },
        { name: 'Underarms', price: '£375', note: '' },
        { name: 'Lower Face', price: '£625', note: '' },
        { name: 'Brazilian Bikini', price: '£650', note: '' },
        { name: 'Hollywood Bikini', price: '£750', note: '' },
        { name: 'Lower Legs incl knee', price: '£875', note: '' },
        { name: 'Full Legs', price: '£1400', note: '' },
        { name: 'Full arms', price: '£875', note: '' },
        { name: 'Full Body and Face', price: '£3000', note: '' },
      ],
      note: '20% discount when treating 2 or more areas',
    },
    {
      id: 'pico-tattoo',
      title: 'Pico Laser Tattoo Removal',
      subtitle: 'Prices from, per session',
      items: [
        { name: 'Eyebrows', price: '£150', note: '' },
        { name: 'Extra Small (>3cm)', price: '£70', note: '' },
        { name: 'Small (4-6cm)', price: '£110', note: '' },
        { name: 'Medium (7-9cm)', price: '£160', note: '' },
        { name: 'Large (10-12cm)', price: '£225', note: '' },
        { name: 'Major (<13cm)', price: 'by consultation', note: '' },
        { name: 'Semi-Permanent Makeup', price: 'by consultation', note: '' },
      ],
    },
    {
      id: 'rosacea-veins',
      title: 'Rosacea / Thread Veins',
      subtitle: 'Course of 4 and 6 sessions',
      items: [
        { name: 'Half Face', price: '£540 / £750', note: '' },
        { name: 'Full Face', price: '£810 / £1125', note: '' },
        { name: 'Décolleté', price: '£1080 / £1500', note: '' },
        { name: 'Small Facial area', price: '£450 / £625', note: '' },
        { name: 'Leg Veins (30 mins)', price: '£630 / £875', note: '' },
        { name: 'Leg Veins (60 minutes)', price: '£1080 / £1500', note: '' },
      ],
    },
    {
      id: 'picoway',
      title: 'PicoWay Picosecond Laser',
      subtitle: 'Prices from, per session / Course of 3',
      items: [
        { name: 'Half face', price: '£300 / £700', note: '' },
        { name: 'Full Face', price: '£450 / £1050', note: '' },
        { name: 'Full Face and Neck', price: '£540 / £1260', note: '' },
        { name: 'Small Area', price: '£200 / £470', note: '' },
      ],
      note: 'Offer: 20% off prices until 28 February',
    },
    {
      id: 'hybrid-co2',
      title: 'Hybrid Fractional CO2 Laser',
      subtitle: 'Prices from, Per session / Course of 3',
      items: [
        { name: 'Full face', price: '£750 / £1750', note: '' },
        { name: 'Eyes', price: '£300 / £750', note: '' },
        { name: 'Lips', price: '£200 / £560', note: '' },
      ],
    },
    {
      id: 'clearlift',
      title: 'ClearLift Laser',
      subtitle: 'Course of 3 and 6 sessions',
      items: [
        { name: 'Eyes', price: '£490 / £875', note: '' },
        { name: 'Half face', price: '£630 / £1125', note: '' },
        { name: 'Full Face', price: '£840 / £1500', note: '' },
        { name: 'Full Face and Neck', price: '£1330 / £2375', note: '' },
      ],
    },
    {
      id: 'pigmentation',
      title: 'Pigmentation Laser',
      subtitle: 'Course of 4 and 6 sessions',
      items: [
        { name: 'Small Area', price: '£450 / £625', note: '' },
        { name: 'Half face', price: '£540 / £750', note: '' },
        { name: 'Full Face', price: '£810 / £1125', note: '' },
        { name: 'Décolleté', price: '£1085 / £1460', note: '' },
        { name: 'Hands', price: '£650 / £875', note: '' },
      ],
    },
    {
      id: 'skinpen',
      title: 'SkinPen Microneedling',
      subtitle: 'Prices from, per session',
      items: [
        { name: 'Full Face', price: '£300', note: '' },
        { name: 'Full Face and Neck', price: '£350', note: '' },
        { name: 'Full Face, Neck and Decollete', price: '£400', note: '' },
        { name: 'Additional Areas', price: '+£50', note: '' },
        { name: 'With Exosomes', price: '+£150', note: '' },
      ],
    },
    {
      id: 'ipixel',
      title: 'iPixel Resurfacing',
      subtitle: 'Course of 3 and 6 sessions',
      items: [
        { name: 'Half Face', price: '£700 / £1250', note: '' },
        { name: 'Full Face', price: '£1120 / £2000', note: '' },
        { name: 'Full Face and Neck', price: '£1540 / £2750', note: '' },
        { name: 'Additional Areas', price: 'on consultation', note: '' },
      ],
    },
    {
      id: 'morpheus8',
      title: 'Morpheus8',
      subtitle: 'Course of 3 sessions',
      items: [
        { name: 'Eyes only', price: '£945', note: '' },
        { name: 'Lower face and neck', price: '£1350', note: '' },
        { name: 'Full face and neck', price: '£1750', note: '' },
        { name: 'Abdomen', price: '£1890', note: '' },
        { name: 'Buttocks', price: '£1890', note: '' },
        { name: 'Thighs', price: '£1890', note: '' },
      ],
    },
    {
      id: 'medical-facials',
      title: 'Medical Facials',
      subtitle: 'Prices from, per session',
      items: [
        { name: 'pHFormula Skin Resurfacing with LED', price: '£200', note: '' },
        { name: 'DermaClear Hydradermabrasion Facial', price: '£175', note: '' },
        { name: 'Deep Extraction Facial', price: '£150', note: '' },
        { name: 'Obagi Blue Radiance Peel', price: '£150', note: '' },
        { name: 'Bright Eye Treatment', price: '£150', note: '' },
        { name: 'Pregnancy Facial', price: '£175', note: '' },
        { name: 'Vitamin C GLOW Facial', price: '£150', note: '' },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gray-600 tracking-wide uppercase block mb-2">
            Pulse Laser
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Prices
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Competitive pricing for premium treatments. Click on each category to view full pricing details.
          </p>
        </div>

        {/* Pricing Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Category Header */}
              <div
                className="cursor-pointer p-6 border-b border-gray-200"
                onClick={() => toggleCategory(category.id)}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {category.title}
                </h3>
                {category.subtitle && (
                  <p className="text-sm text-gray-600">{category.subtitle}</p>
                )}
                <div className="flex justify-between items-center mt-4">
                  {category.note && (
                    <p className="text-sm font-medium text-red-600">
                      {category.note}
                    </p>
                  )}
                  <svg
                    className={`w-5 h-5 text-gray-900 transition-transform ${
                      expandedCategories.includes(category.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Pricing Items */}
              {expandedCategories.includes(category.id) && (
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-700 flex-1">{item.name}</span>
                        <span className="font-semibold text-gray-900 text-sm whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {category.id !== 'full-treatment-menu' && (
                    <div className="mt-6 text-center">
                      <ViewTransitionLink
                        href={"/contact-us" as Href}
                        className="inline-block bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
                      >
                        Book Now
                      </ViewTransitionLink>
                    </div>
                  )}
                  {category.id === 'full-treatment-menu' && (
                    <div className="mt-6 text-center">
                      <a
                        href="/contact-us"
                        className="inline-block bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
                      >
                        Book Now
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          *Prices may vary depending on individual requirements. All prices are subject to consultation.
        </p>
      </div>
    </section>
  );
}
