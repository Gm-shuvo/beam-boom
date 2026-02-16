// components/TestimonialsSection.tsx
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  name: string;
  platform: string;
  rating: number;
  date: string;
  text: string;
  avatarColor: string; // for colored circle placeholder
}

const reviews: Review[] = [
  {
    name: "Jo Goodeno...",
    platform: "on Google",
    rating: 5,
    date: "11 days ago",
    text: "I'm so pleased to have been introduced to this excellent clinic. They are incredibly thorough in making sure you receive the right treatment. Maria has been amazing...",
    avatarColor: "bg-pink-500",
  },
  {
    name: "Elisa Pie",
    platform: "on Google",
    rating: 5,
    date: "19 days ago",
    text: "I got the iPixel and Hybrid CO2 done with Lauren and Yasmina. The results are amazing and the girls were lovely. They always treated me with care and professionalism...",
    avatarColor: "bg-purple-500",
  },
  {
    name: "Veronica G.",
    platform: "on Google",
    rating: 5,
    date: "26 days ago",
    text: "I had a fantastic experience visiting Pulse Laser Clinic! Most of my capillaries faded and my sunspots are nearly invisible. Maria is incredibly professional...",
    avatarColor: "bg-blue-500",
  },
  {
    name: "Carla Hans...",
    platform: "on Google",
    rating: 5,
    date: "29 days ago",
    text: "Yasmina has been treating my 9 year old daughter. She has been great, really caring, friendly and thorough. Great service! Update - Yasmina was treating...",
    avatarColor: "bg-cyan-500",
  },
  {
    name: "Melanie B",
    platform: "on Google",
    rating: 5,
    date: "a month ago",
    text: "Sooo happy that I found Pulse Laser Clinic and Yasmina! I have been twice so far to have ACP removal of a large mole next to my eye and also...",
    avatarColor: "bg-amber-500",
  },
  {
    name: "Chloe Swin...",
    platform: "on Google",
    rating: 5,
    date: "a month ago",
    text: "Lyasta is fantastic! Would highly recommend booking an appointment with her.",
    avatarColor: "bg-rose-500",
  },
  // you can add more...
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // how many cards visible at once

  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const visibleReviews = reviews.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage,
  );

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      {/* Right side gray panel – wider version like many of your other sections */}
      <div className="absolute right-0 top-0 bottom-0 w-[22%] bg-gray-50 z-0" />

      <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            What our customers say
          </h2>
        </div>

        {/* Main review container – white card look */}
        <div className="bg-gray-50 rounded-2xl  p-6 md:p-10 lg:p-12 mx-auto max-w-6xl">
          {/* Rating summary row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 md:mb-12 gap-6">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-extrabold text-gray-900 tracking-tight">
                5.0
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={32}
                    className="text-amber-400 fill-amber-400 drop-shadow-sm"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <p className="text-gray-600 text-base md:text-lg font-medium">
                Showing 351 featured reviews, rating based on these only
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 whitespace-nowrap">
                Write a review
              </button>
            </div>
          </div>

          {/* Reviews grid – fixed height cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {visibleReviews.map((review, idx) => (
              <div
                key={idx}
                className="
          bg-gray-50/70
          rounded-xl
          p-6
          border border-gray-200/70
          shadow-sm
          hover:shadow-xl
          hover:-translate-y-1
          transition-all duration-300
          flex flex-col
          min-h-[320px] md:min-h-[340px] lg:min-h-[360px]
        "
              >
                {/* Avatar + name + platform */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-14 h-14 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-bold text-2xl shadow-md flex-shrink-0`}
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg leading-tight">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-500">{review.platform}</p>
                  </div>
                </div>

                {/* Stars + date */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    • {review.date}
                  </span>
                </div>

                {/* Review text – grows to fill remaining space */}
                <p className="text-gray-700 leading-relaxed text-[15px] md:text-base flex-grow line-clamp-6 md:line-clamp-none">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation arrows – larger and centered */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button
              onClick={goToPrev}
              className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-200 shadow hover:shadow-md active:scale-95"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={goToNext}
              className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-200 shadow hover:shadow-md active:scale-95"
              aria-label="Next reviews"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Powered by */}
          <div className="text-center mt-10 text-sm text-gray-500 font-medium">
            Powered by BirdEye
          </div>
        </div>
      </div>
    </section>
  );
}
