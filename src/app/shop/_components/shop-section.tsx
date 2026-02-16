"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";

type Product = {
  id: number;
  title: string;
  imageSrc: string;
  link: string;
  price: number;
  rating: number;
  date: Date;
  popularity: number;
};

const productsData: Product[] = [
  {
    id: 1,
    title: "Calecim Advanced Hair System",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2026/02/Screen_Shot_2025-06-25_at_13.15.36.webp",
    link: "/product/calecim-advanced-hair-system",
    price: 150,
    rating: 4.5,
    date: new Date("2024-01-01"),
    popularity: 100,
  },
  {
    id: 2,
    title: "Obagi Nu-Cil Biostim Scalp Serum",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2026/02/OBAGI_NuCil_BioStimScalpSerum_1260x1260_1920x_6a8f4a6c-d522-414b-92a9-940de0f47232.webp",
    link: "/product/obagi-nu-cil-biostim-scalp-serum",
    price: 80,
    rating: 4.8,
    date: new Date("2024-02-01"),
    popularity: 200,
  },
  {
    id: 3,
    title: "OBAGI NU-CIL Eyebrow Boosting Serum",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/07/Nu-Cil_Brow_Primary_GrayBG_1920x.webp",
    link: "/product/obagi-nu-cil-eyebrow-boosting-serum",
    price: 85,
    rating: 4.7,
    date: new Date("2024-03-01"),
    popularity: 150,
  },
  {
    id: 4,
    title: "Professional Strength Hair Growth Tablets For Men & Women",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/07/pro_pack_shot_with_pills_28oct2020.webp",
    link: "/product/professional-strength-hair-growth-tablets",
    price: 50,
    rating: 4.2,
    date: new Date("2024-04-01"),
    popularity: 120,
  },
  {
    id: 5,
    title: "Princereigns Ingrown Hair Serum",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/07/allskinmed-anti-hair-loss-redensifying-lotion-05.jpg",
    link: "/product/princereigns-ingrown-hair-serum",
    price: 40,
    rating: 4.6,
    date: new Date("2024-05-01"),
    popularity: 80,
  },
  {
    id: 6,
    title: "Anti-Hair Loss & Redensifying Lotion 125ml",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/07/allskinmed-anti-hair-loss-redensifying-lotion-05.jpg",
    link: "/product/anti-hair-loss-redensifying-lotion",
    price: 60,
    rating: 4.3,
    date: new Date("2024-06-01"),
    popularity: 90,
  },
  {
    id: 7,
    title: "Aquaphor Healing Ointment",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/07/clinisept_podiatry_-_100ml_-_manufacturer_-_high_res.webp",
    link: "/product/aquaphor-healing-ointment",
    price: 20,
    rating: 4.9,
    date: new Date("2024-07-01"),
    popularity: 300,
  },
  {
    id: 8,
    title: "AlumierMD Ultimate Boost Serum",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/07/thumbnail_100ml-Clinisept-Skin-no-background.webp",
    link: "/product/alumier-md-ultimate-boost-serum",
    price: 70,
    rating: 4.4,
    date: new Date("2024-08-01"),
    popularity: 110,
  },
  {
    id: 9,
    title: "AlumierMD Moisture Matte Broad Spectrum Sunscreen",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/07/fd3f356e05e84d5596ad717f8d5a9078-screen.webp",
    link: "/product/alumier-md-moisture-matte-sunscreen",
    price: 55,
    rating: 4.5,
    date: new Date("2024-09-01"),
    popularity: 140,
  },
  {
    id: 10,
    title: "Clinisoothe Advanced Cleansing Spray",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/07/Skin_Aesthetic_140_capsules__51924.jpg",
    link: "/product/clinisoothe-advanced-cleansing-spray",
    price: 25,
    rating: 4.7,
    date: new Date("2024-10-01"),
    popularity: 160,
  },
  {
    id: 11,
    title: "Clinisoothe Skin Calmer",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/07/Panthenol-1.png",
    link: "/product/clinisoothe-skin-calmer",
    price: 30,
    rating: 4.6,
    date: new Date("2024-11-01"),
    popularity: 130,
  },
  {
    id: 12,
    title: "Obagi Professional-C Serum",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/07/Skin_Even_IQ_140_in_new_packaging__48180.jpg",
    link: "/product/obagi-professional-c-serum",
    price: 90,
    rating: 4.8,
    date: new Date("2024-12-01"),
    popularity: 250,
  },
  // Add more if needed for multiple pages
];

const ShopSection = () => {
  const [sortType, setSortType] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Sorting function
  const sortedProducts = [...productsData].sort((a, b) => {
    if (sortType === "popularity") return b.popularity - a.popularity;
    if (sortType === "rating") return b.rating - a.rating;
    if (sortType === "latest") return b.date.getTime() - a.date.getTime();
    if (sortType === "price-low") return a.price - b.price;
    if (sortType === "price-high") return b.price - a.price;
    return 0; // default
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section
      id="shop"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Optional right gray panel - remove if not needed */}
      <div className="absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <div className="flex justify-start mb-10">
          <Select>
            <SelectTrigger
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="border border-gray-300 rounded-md p-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] w-45 cursor-pointer"
            >
              <SelectValue placeholder="Default sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity" className='cursor-pointer'>Sort by popularity</SelectItem>
              <SelectItem value="rating" className='cursor-pointer'>Sort by average rating</SelectItem>
              <SelectItem value="latest" className='cursor-pointer'>Sort by latest</SelectItem>
              <SelectItem value="price-low" className='cursor-pointer'>
                Sort by price: low to high
              </SelectItem>
              <SelectItem value="price-high">
                Sort by price: high to low
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8 max-w-8xl mx-auto lg:mx-0">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative"
            >
              <div className="relative h-64 md:h-72">
                <Image
                  src={product.imageSrc}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                {/* Black title bar at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-2 text-center font-semibold text-sm md:text-base">
                  {product.title}
                </div>
              </div>
              <div className="p-4 text-center">
                <a
                  href={product.link}
                  className="text-[#0ea5e9] hover:text-[#0284c7] font-medium underline transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-md transition ${
                  currentPage === i + 1
                    ? "bg-[#0ea5e9] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopSection;
