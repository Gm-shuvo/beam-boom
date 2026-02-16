// components/NewsletterSignup.tsx
"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send data to your backend / Mailchimp / etc.
    console.log("Newsletter signup:", formData);
    // Reset form or show success message
    alert("Thank you for signing up!");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Small subtitle */}
        <div className="text-center mb-3">
          <span className="pulse-subtitle text-sm md:text-base font-medium tracking-wide uppercase">
            PULSE LASER
          </span>
        </div>

        {/* Main headline */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Sign up Now
        </h2>

        {/* Description */}
        <p className="text-center text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Sign up to our Newsletter to receive all our latest special offers.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                placeholder="First Name"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Phone & Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                placeholder="Email"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition resize-none"
              placeholder="Message (optional)"
            />
          </div>

          {/* Privacy notice */}
          <p className="text-sm text-gray-500 text-center md:text-left mt-2">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <a href="/privacy-policy" className="underline hover:text-black">
              privacy policy
            </a>
            .
          </p>

          {/* Submit button */}
          <div className="pt-6 flex justify-center md:justify-start">
            <button
              type="submit"
              className="group bg-black text-white font-medium text-lg px-10 py-4 rounded-full hover:bg-gray-900 transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg active:scale-98"
            >
              Register
              <span className="text-xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
