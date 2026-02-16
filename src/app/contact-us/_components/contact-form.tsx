"use client";

import { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: validate fully + send (EmailJS, Formspree, API route, etc.)
    console.log("Form submitted:", formData);
    // Optional: reset form or show toast/success state
  };

  const isFieldInvalid = (field: keyof typeof formData) =>
    touched[field] && !formData[field];

  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Subtle right-side accent panel – very light for modern depth */}
      <div className="absolute top-0 right-0 bottom-0 w-1/4 lg:w-1/3 xl:w-[35%] bg-linear-to-l from-gray-50/80 to-transparent z-0 pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* Form – takes ~7/12 columns on lg+ */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-gray-100/80 p-8 md:p-10 lg:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center lg:text-left">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-gray-50/40 ${
                      isFieldInvalid("firstName") ? "border-red-400" : ""
                    }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute left-4 top-2 text-xs font-medium text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-600 transition-all duration-200"
                  >
                    First Name *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-gray-50/40 ${
                      isFieldInvalid("lastName") ? "border-red-400" : ""
                    }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute left-4 top-2 text-xs font-medium text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-600 transition-all duration-200"
                  >
                    Last Name *
                  </label>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-gray-50/40 ${
                      isFieldInvalid("phone") ? "border-red-400" : ""
                    }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 top-2 text-xs font-medium text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-600 transition-all duration-200"
                  >
                    Phone Number *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-gray-50/40 ${
                      isFieldInvalid("email") ? "border-red-400" : ""
                    }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-xs font-medium text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-600 transition-all duration-200"
                  >
                    Email *
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows={5}
                  className={`peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-gray-50/40 resize-none ${
                    isFieldInvalid("message") ? "border-red-400" : ""
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-xs font-medium text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-600 transition-all duration-200"
                >
                  Message *
                </label>
              </div>

              {/* reCAPTCHA placeholder – replace with real one */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center bg-white">
                  <div className="w-4 h-4 bg-sky-500 rounded-sm hidden peer-checked:block" />
                </div>
                <label className="text-sm text-gray-600 flex items-center gap-2">
                  I'm not a robot
                  <span className="text-xs text-gray-500">(reCAPTCHA)</span>
                </label>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full bg-linear-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold text-lg py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Submit
                  <span className="text-xl transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Opening Hours Card – modern, clean, elevated, perfectly sized */}
          <div
            className="
  lg:col-span-5
  bg-white
  rounded-2xl
  shadow-xl
  border border-gray-100
  p-8 md:p-10
  max-w-2xl
  mx-auto lg:mx-0
  lg:h-full
"
          >
            <h3 className="text-3xl md:text-3.5xl font-bold text-gray-900 mb-8 text-center lg:text-left tracking-tight">
              Opening Hours
            </h3>

            <div className="space-y-7 text-gray-800 text-base md:text-lg">
              <div className="pb-5 border-b border-gray-200/70">
                <p className="font-semibold text-gray-900">Monday – Friday</p>
                <p className="mt-1.5 font-medium">09:00 – 19:00</p>
              </div>

              <div className="pb-5 border-b border-gray-200/70">
                <p className="font-semibold text-gray-900">Saturday</p>
                <p className="mt-1.5 font-medium">09:00 – 18:00</p>
              </div>

              <div className="pt-2">
                <p className="font-semibold text-gray-900">Sunday</p>
                <p className="mt-1.5 font-medium text-gray-600">Closed</p>
              </div>
            </div>

            {/* Optional small note or icon at bottom */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
              Appointments by prior arrangement only
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
