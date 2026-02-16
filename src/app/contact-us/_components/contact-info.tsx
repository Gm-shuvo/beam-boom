"use client";

const ContactInfo = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-18 bg-white relative overflow-hidden"
    >
      {/* Right gray vertical panel */}
      <div className="absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Details */}
          <div className="space-y-10">
            <div>
              <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">
                PULSE LASER
              </span>
              <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
                Contact Info
              </h2>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Find Us
              </h3>
              <address className="not-italic text-base md:text-lg text-gray-700 leading-relaxed space-y-1">
                <p>70 Mortimer Street</p>
                <p>Fitzrovia</p>
                <p>W1W 7RY</p>
                <p>London</p>
                <p>United Kingdom</p>
              </address>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Call Us
              </h3>
              <a
                href="tel:+442034058483"
                className="text-lg md:text-xl text-[#0ea5e9] hover:text-[#0284c7] font-medium transition-colors"
              >
                020 3405 8483
              </a>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Email Us
              </h3>
              <a
                href="mailto:info@pulse-clinic.co.uk"
                className="text-lg md:text-xl text-[#0ea5e9] hover:text-[#0284c7] font-medium transition-colors underline"
              >
                info@pulse-clinic.co.uk
              </a>
            </div>
          </div>

          {/* Right - Google Map */}
          <div className="relative h-112.5 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=70%20Mortimer%20Street%20London&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pulse Laser Aesthetic Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
