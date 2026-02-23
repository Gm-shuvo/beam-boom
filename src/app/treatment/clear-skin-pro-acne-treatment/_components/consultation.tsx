export default function Consultation() {
  return (
    <section
      id="consultation"
      className="relative py-24 md:py-32 overflow-hidden banner-wrp"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[white]" />

      {/* Soft rustic side panel */}
      <div className="absolute inset-y-0 left-0 w-[22%] bg-gray-50" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-black/5 pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Brand */}
          <span className="text-xs tracking-[0.25em] uppercase text-gray-500 font-medium">
            Pulse Laser
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
            Book Your Consultation
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Speak with our specialists about safe and effective laser tattoo
            removal tailored to your skin and ink type.
          </p>

          {/* Form Card */}
          <div className="mt-14 rounded-2xl p-8 md:p-10">
            <form className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black/20 focus:border-black/20 text-base placeholder-gray-400 transition"
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  👤
                </span>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black/20 focus:border-black/20 text-base placeholder-gray-400 transition"
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  📞
                </span>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full mt-4 py-4 bg-black text-white font-medium text-lg rounded-lg hover:bg-gray-900 transition flex items-center justify-center gap-3 shadow-lg"
              >
                Book Consultation
                <span className="text-xl">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
