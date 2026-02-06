"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { Href, ViewTransitionLink } from "../view-transition-link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Social */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/PulseLogo-1.png"
                alt="Pulse Laser Logo"
                width={222}
                height={41}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/PulseLaserClinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/PulseClinicLDN"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/pulse_laser/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="border-l border-gray-300 pl-0 md:pl-8">
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">Monday-Friday</span> 09:00 - 19:00
              </li>
              <li>
                <span className="font-medium">Saturday</span> 09:00 - 18:00
              </li>
              <li>
                <span className="font-medium">Sunday</span> 09:00 - 18:00
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="border-l border-gray-300 pl-0 md:pl-8">
            <h4 className="text-lg font-bold mb-4">Signup to receive 10%</h4>
            <p className="text-sm text-gray-700 mb-4">
              off your first treatment and for our latest offers
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded font-medium hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="border-l border-gray-300 pl-0 md:pl-8">
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <a
                    href="tel:02034058483"
                    className="font-medium hover:underline"
                  >
                    020 3405 8483
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Email Address</p>
                  <a
                    href="mailto:info@pulse-clinic.co.uk"
                    className="font-medium hover:underline"
                  >
                    info@pulse-clinic.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Address Info</p>
                  <address className="font-medium not-italic">
                    70 Mortimer Street
                    <br />
                    London, W1W 7RY
                    <br />
                    United Kingdom
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-700 text-center md:text-left">
              © 2026 Pulse Laser. All Rights Reserved.{" "}
              <ViewTransitionLink
                href={"/termsandconditions" as Href}
                className="hover:underline"
              >
                Terms and Conditions
              </ViewTransitionLink>{" "}
              <ViewTransitionLink
                href={"/refund-returns" as Href}
                className="hover:underline"
              >
                Refund and Returns Policy
              </ViewTransitionLink>
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
