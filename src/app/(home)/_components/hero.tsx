'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { Href, ViewTransitionLink } from '@/components/view-transition-link';

interface Slide {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
  foregroundImage: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    id: 1,
    subtitle: 'Pulse Laser Skin and Aesthetics',
    title: 'Make your skin shine',
    description: 'Pulse Laser Aesthetic Clinic is a specialist clinic situated on Mortimer Street in Fitzrovia. For over 13 years our dedicated team of experts have offered the very best in non-surgical cosmetic, laser and skin treatments.',
    backgroundImage: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2759-edit-Edit-copy-scaled.jpg',
    foregroundImage: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2024/10/R6II4050-scaled.jpg',
    buttonText: 'Contact Us',
  },
  {
    id: 2,
    subtitle: 'Pulse Laser',
    title: 'Award Winning Aesthetic Clinic',
    description: 'in the heart of London',
    backgroundImage: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2759-edit-Edit-copy-scaled.jpg',
    foregroundImage: 'https://www.pulse-clinic.co.uk/wp-content/uploads/2024/10/R6II4050-1-scaled.jpg',
    buttonText: 'Contact Us',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-gray-50">
      {/* Slider */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.backgroundImage}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 h-full">
              <div className="flex items-center h-full">
                <div className="grid lg:grid-cols-12 gap-8 w-full items-center">
                  {/* Left Content */}
                  <div className="lg:col-span-8 text-white space-y-6">
                    <span className="text-sm md:text-base font-medium tracking-wide uppercase">
                      {slide.subtitle}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg max-w-2xl text-gray-100">
                      {slide.description}
                    </p>
                    <ViewTransitionLink
                      href={"/contact-us" as Href}
                      className="inline-block bg-white text-black px-8 py-3 rounded-none font-medium hover:bg-gray-100 transition-colors"
                    >
                      {slide.buttonText}
                    </ViewTransitionLink>
                  </div>

                  {/* Right Image */}
                  <div className="lg:col-span-4 hidden lg:block">
                    <div className="relative h-[500px] w-full">
                      <Image
                        src={slide.foregroundImage}
                        alt={slide.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Arrows */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-x-2 z-10 hidden md:flex">
          <button
            onClick={nextSlide}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
          <button
            onClick={prevSlide}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* Social Media */}
        <div className="absolute right-8 top-8 z-10 hidden md:flex flex-col space-y-4">
          <a
            href="https://www.facebook.com/PulseLaserClinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://twitter.com/PulseClinicLDN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/pulse_laser/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a
            href="#about"
            className="text-white hover:text-gray-300 transition-colors flex flex-col items-center"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronRight size={24} className="rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
}
