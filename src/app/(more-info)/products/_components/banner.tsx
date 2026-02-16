"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { CaretRightIcon } from "@phosphor-icons/react";

import Image from "next/image";
import { useEffect, useState } from "react";

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
    subtitle: "PLUSE LASER",
    title: "Products",
    description:
      "Products Available To Purchase in Clinic. Please book a skin consultation to discuss your skin concerns",
    backgroundImage:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/blog-detail.jpg",
    foregroundImage:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/banner-right-img-4.jpg",
    buttonText: "Contact Us",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      aria-label="Promotional banner"
      className="relative h-160 md:h-190 lg:h-220 overflow-hidden bg-gray-50"
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            aria-hidden={index !== currentSlide}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 banner-img max-w-372">
              <Image
                src={slide.backgroundImage}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(min-width: 1024px) 100vw, 100vw"
              />
            </div>

            {/* Content */}
            <div className="relative container mx-auto h-full ">
              <div className="flex  h-full">
                <div className="grid lg:grid-cols-12 gap-8 w-full items-center">
                  {/* Left Content */}
                  <div className="lg:col-span-8 space-y-6">
                    <span className="pulse-subtitle text-sm md:text-base font-medium tracking-wide uppercase">
                      {slide.subtitle}
                    </span>
                    <h1 className="pulse-title mb-8">{slide.title}</h1>
                    <p className="pulse-light-description text-black! text-base md:text-lg  max-w-2xl mb-10">
                      {slide.description}
                    </p>
                    <ViewTransitionLink
                      href={"/contact-us" as Href}
                      className="btn btn-black"
                    >
                      {slide.buttonText}
                    </ViewTransitionLink>
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-140 w-2/8">
                  <Image
                    src={slide.foregroundImage}
                    alt={slide.title}
                    fill
                    className="object-cover rounded-lg"
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        {/* <div className="absolute right-72.5 bottom-10 transform -translate-y-1/2 space-x-2 z-10 hidden md:flex">
          <button
            type="button"
            onClick={prevSlide}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <CaretLeftIcon size={20} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <CaretRightIcon size={20} />
          </button>
        </div> */}

        {/* Social Media */}
        <div className="absolute left-17.5 bottom-12.5 z-10 hidden md:block">
          <ul className="flex items-center p-0 m-0">
            <li className="list-none text-[20px] leading-5 text-black px-5 border-r border-dashed border-[#4995D1] first:pl-0">
              <a
                href="https://www.facebook.com/PulseLaserClinic/"
                target="_blank"
                className="flex items-center transition-all duration-500 no-underline text-inherit outline-none"
              >
                <svg
                  className="svg-inline--fa fa-facebook-f h-5 w-auto"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                  ></path>
                </svg>
                <span className="ml-2.5">Facebook</span>
              </a>
            </li>
            <li className="list-none text-[20px] leading-5 text-black px-5 border-r border-dashed border-[#4995D1]">
              <a
                href="https://twitter.com/PulseClinicLDN"
                target="_blank"
                className="flex items-center transition-all duration-500 no-underline text-inherit outline-none"
              >
                <svg
                  className="svg-inline--fa fa-x-twitter h-5 w-auto"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="x-twitter"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  ></path>
                </svg>
                <span className="ml-2.5">Twitter</span>
              </a>
            </li>
            <li className="list-none text-[20px] leading-5 text-black px-5 border-r border-dashed border-[#4995D1]">
              <a
                href="https://www.instagram.com/pulse_laser/"
                target="_blank"
                className="flex items-center transition-all duration-500 no-underline text-inherit outline-none"
              >
                <svg
                  className="svg-inline--fa fa-instagram h-5 w-auto"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
                <span className="ml-2.5">Instagram</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
          <ViewTransitionLink
            href={"/about" as Href}
            className="pulse-light-description flex flex-col items-center"
          >
            <span className="text-lg mb-2">Scroll Down</span>
            <CaretRightIcon size={24} className="rotate-90" />
          </ViewTransitionLink>
        </div>
      </div>
    </section>
  );
}
