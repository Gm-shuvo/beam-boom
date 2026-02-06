"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";

export default function SkinConditions() {
  const conditions = [
    { name: "Acne", description: "Advanced acne treatments for clear skin" },
    { name: "Acne Scarring", description: "Reduce and fade acne scars" },
    {
      name: "Ageing Skin",
      description: "Anti-aging treatments for youthful skin",
    },
    { name: "Dark Circles", description: "Treatments for under-eye circles" },
    { name: "Hyperpigmentation", description: "Even out skin pigmentation" },
    { name: "Melasma", description: "Targeted melasma treatments" },
    { name: "Rosacea", description: "Manage and reduce rosacea symptoms" },
    { name: "Skin Laxity", description: "Tightening and lifting treatments" },
    {
      name: "Sun Damage",
      description: "Repair and rejuvenate sun-damaged skin",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gray-600 tracking-wide uppercase block mb-2">
            Pulse Laser
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skin Conditions
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We specialize in treating a wide range of skin conditions with
            cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {conditions.map((condition) => (
            <ViewTransitionLink
              key={condition.name}
              href={"/skin-conditions" as Href}
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                {condition.name}
              </h3>
              <p className="text-sm text-gray-600">{condition.description}</p>
            </ViewTransitionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
