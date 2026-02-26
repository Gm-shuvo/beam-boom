"use client";

import Image from "next/image";

export default function About() {
  const lipFiller = [
    { name: "0.5ml", sub: "(Subtle Volume & Definition)", price: "£350" },
    { name: "1ml", sub: "(Fuller Volume & Contour)", price: "£450" },
  ];

  const skin = [
    { name: "Profhilo", sub: "(1 treatment)", price: "£200" },
    { name: "Profhilo", sub: "(2 treatment)", price: "£360" },
  ];

  const polynucleotides = [
    { name: "Polynucleotides Eyes", sub: "Nucleofill", price: "£190" },
    { name: "Polynucleotides Eyes", sub: "iluma Luna", price: "£130" },
    { name: "Polynucleotides Eyes and Face", sub: "(to be completed in the same appointment)", price: "£300" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Title & Logos */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight uppercase">
                INJECTABLE <br /> TREATMENTS
              </h2>
              <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                We offer a carefully selected range of advanced aesthetic treatments using market-leading technology and premium products. Each treatment is carried out with the highest standards of care, safety and attention to detail.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-gray-100 flex flex-col items-start grayscale opacity-80">
              <span className="text-4xl font-bold tracking-widest text-[#1A1A1A]">PROFHILO</span>
              <span className="text-5xl font-extrabold italic tracking-tight text-[#003C8F]">BOTOX</span>
              <span className="text-4xl font-medium tracking-widest text-[#F26522] uppercase">Plinest</span>
              <span className="text-4xl font-light tracking-[0.2em] text-gray-800">NUCLEOFILL</span>
              <span className="text-4xl font-bold tracking-tighter text-[#1D3557] italic">iLLUMA</span>
            </div>
          </div>

          {/* Middle Column: Anti-Wrinkle & Bottom Images */}
          <div className="lg:col-span-4 space-y-12">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <div className="bg-[#B59A5B] px-6 py-4">
                <h3 className="text-white font-bold uppercase tracking-wider">ANTI-WRINKLE</h3>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                {[
                  { name: "1 area", price: "£160" },
                  { name: "2 areas", price: "£180" },
                  { name: "3 areas", price: "£200" },
                  { name: "4 areas", price: "£250" },
                  { name: "Gummy smile", price: "£150" },
                  { name: "Masseter", sub: "(teeth grinding)", price: "£225" },
                  { name: "Anti-Sweat", sub: "excessive underarm sweating (from)", price: "£350" },
                  { name: "Neck Platysma", sub: "(Nefertiti Lift)", price: "£225" },
                  { name: "Hyaluronidase", price: "£175" },
                  { name: "Lip Flip", price: "£100" },
                  { name: "Dimple Chin", price: "£100" },
                  { name: "Downturned Smile", price: "£100" },
                ].map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center px-6 py-2.5 hover:bg-gray-50 transition-colors ${idx % 2 === 1 ? 'bg-[#FDFBF7]' : ''}`}>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-800 font-medium leading-tight">{item.name}</span>
                      {item.sub && <span className="text-[9px] text-gray-500 font-light leading-none">{item.sub}</span>}
                    </div>
                    <span className="text-xs font-bold text-gray-900">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Left Images */}
            <div className="grid grid-cols-3 gap-4 pt-12">
              {[
                { title: "FACE", src: "/images/injectables-face.jpg" },
                { title: "NECK", src: "/images/injectables-neck.jpg" },
                { title: "BODY", src: "/images/injectables-body.jpg" }
              ].map((img, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400">{img.title}</span>
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden border-2 border-[#B59A5B]/20">
                    <Image src={img.src} alt={img.title} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Other Tables & Model */}
          <div className="lg:col-span-4 space-y-8 relative">
            {/* Lip Filler */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="bg-[#B59A5B] px-6 py-3">
                <h3 className="text-white text-sm font-bold uppercase tracking-wider">LIP FILLER</h3>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                {lipFiller.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center px-6 py-3">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-800 font-medium">{item.name}</span>
                      <span className="text-[10px] text-gray-500">{item.sub}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skin */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="bg-[#B59A5B] px-6 py-3">
                <h3 className="text-white text-sm font-bold uppercase tracking-wider">SKIN</h3>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                {skin.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center px-6 py-3">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-800 font-medium">{item.name}</span>
                      <span className="text-[10px] text-gray-500">{item.sub}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Polynucleotides */}
            <div className="space-y-4 pt-4">
              {polynucleotides.map((item, idx) => (
                <div key={idx} className="bg-[#FDFBF7] rounded-lg p-4 flex justify-between items-center border-l-4 border-[#B59A5B]">
                  <div className="flex flex-col pr-4">
                    <span className="text-sm text-gray-800 font-bold">{item.name}</span>
                    <span className="text-[10px] text-gray-500 italic">{item.sub}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Model Image with Decoration */}
            <div className="relative pt-16">
              <div className="absolute -z-10 top-0 -right-20 w-80 h-80 opacity-60">
                <Image src="/images/injectables-bg-decoration.png" alt="" fill className="object-contain" />
              </div>
              <div className="relative z-10 aspect-[4/5] w-full max-w-[320px] mx-auto">
                <Image src="/images/injectables-model.png" alt="Clinical Results" fill className="object-contain" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

