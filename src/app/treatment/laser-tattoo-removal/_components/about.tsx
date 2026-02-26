"use client";

export default function About() {

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      {/* Left leaf decoration (behind everything) */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
        <img src={"/images/about-us-leaves.png"} alt="Round shape" />
      </div>

      {/* Right gray vertical panel */}
      <div className="absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="pulse-title !text-3xl md:!text-5xl font-bold text-gray-900 uppercase">
              Laser Tattoo Removal
            </h2>
            <p className="italic text-lg text-gray-600 font-light italic">
              ND:YAG Laser Technology
            </p>
            <div className="pulse-light-description text-base md:text-lg max-w-2xl space-y-6">
              <p>
                We use advanced Q-Switched ND:YAG laser technology to safely
                break down unwanted tattoo ink and semi-permanent makeup.
              </p>
              <p>
                The 1064nm wavelength effectively targets darker inks such as
                black and blue, while the 532nm wavelength treats red and warmer
                tones. The laser energy shatters ink particles beneath the skin,
                allowing the body to naturally eliminate them over time.
              </p>
              <p>Safe, precise and suitable for most skin types.</p>
            </div>
          </div>

          {/* Right Pricing Table */}
          <div className="overflow-hidden shadow-sm border border-gray-100">
            <table className="w-full text-left border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-[#B59A5B] text-white uppercase tracking-wider">
                  <th className="p-4 font-semibold">Area</th>
                  <th className="p-4 font-semibold text-center">Single</th>
                  <th className="p-4 font-semibold text-center">Three</th>
                  <th className="p-4 font-semibold text-center">Six</th>
                  <th className="p-4 font-semibold text-center">Nine</th>
                </tr>
              </thead>
              <tbody className="bg-[#FAF9F6] text-gray-800">
                <tr className="border-b border-white">
                  <td className="p-4">Eyebrows</td>
                  <td className="p-4 text-center">£80</td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                </tr>
                <tr className="border-b border-white bg-white/50">
                  <td className="p-4">Extra small (up to 3cm)</td>
                  <td className="p-4 text-center font-medium">£30</td>
                  <td className="p-4 text-center">£81</td>
                  <td className="p-4 text-center">£153</td>
                  <td className="p-4 text-center">£216</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="p-4">Small (4-6cm)</td>
                  <td className="p-4 text-center font-medium">£50</td>
                  <td className="p-4 text-center">£135</td>
                  <td className="p-4 text-center">£255</td>
                  <td className="p-4 text-center">£360</td>
                </tr>
                <tr className="border-b border-white bg-white/50">
                  <td className="p-4">Medium (7-9cm)</td>
                  <td className="p-4 text-center font-medium">£100</td>
                  <td className="p-4 text-center">£270</td>
                  <td className="p-4 text-center">£510</td>
                  <td className="p-4 text-center">£720</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="p-4">Large (10-12cm)</td>
                  <td className="p-4 text-center font-medium">£150</td>
                  <td className="p-4 text-center">£405</td>
                  <td className="p-4 text-center">£765</td>
                  <td className="p-4 text-center">£1080</td>
                </tr>
                <tr className="italic bg-white/50">
                  <td className="p-4">{"<13cm price upon consultation"}</td>
                  <td className="p-4 text-center">POA</td>
                  <td className="p-4 text-center">POA</td>
                  <td className="p-4 text-center">POA</td>
                  <td className="p-4 text-center">POA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

