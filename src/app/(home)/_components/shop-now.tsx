import Image from "next/image";

const products = [
  {
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/prince-reigns.png",
    title: "Princereigns Ingrown Hair Serum",
    description:
      "All natural serum banishes painful ingrown hairs and razor bumps, leaving skin smooth",
    readMoreLink:
      "https://www.pulse-clinic.co.uk/product/princereigns-ingrown-hair-serum/",
    addToCartLink: "https://www.pulse-clinic.co.uk/cart/?add-to-cart=477",
  },
  {
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/stratpharma-strataderm-gel-10gr-p4292-5611_image.jpg.png",
    title: "Strataderm® Scar Therapy 10g",
    description:
      "Strataderm is a transparent silicone gel formulation for the treatment of scars",
    readMoreLink: "https://www.pulse-clinic.co.uk/product/strataderm-10g/",
    addToCartLink: "https://www.pulse-clinic.co.uk/cart/?add-to-cart=488",
  },
  {
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/bia_3400932857012_emulsion_186g_00010-2.png",
    title: "Biafine Skin Emulsion (93g)",
    description:
      "Biafine soothes and protects skin 'burned' or stressed by medical treatments or the sun",
    readMoreLink:
      "https://www.pulse-clinic.co.uk/product/biafine-skin-emulsion-93/",
    addToCartLink: "https://www.pulse-clinic.co.uk/cart/?add-to-cart=1550",
  },
];

const ShopNow = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <p className="pulse-subtitle text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-10 text-gray-600 dark:text-gray-400">
            PULSE LASER
          </p>
          <h2 className="pulse-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-10 text-gray-900 dark:text-white">
            Shop Now
          </h2>
          <p className="pulse-light-description text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-14 text-gray-600 dark:text-gray-300">
            Please book a skin consultation to discuss your skin concerns
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl lg:max-w-6xl mx-auto">
          {products.map((product, i) => (
            <div key={i} className="group text-center">
              <div className="relative bg-secondary dark:bg-gray-800 p-4 sm:p-6 mb-4 overflow-hidden transition-colors duration-300">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Dark overlay title at bottom of image */}
                <div className="absolute bottom-0 left-2 sm:left-4 right-2 sm:right-4">
                  <div className="bg-primary dark:bg-gray-700 text-primary-foreground dark:text-white px-3 sm:px-4 py-2 sm:py-3 text-center">
                    <h3 className="text-xs sm:text-sm font-bold font-sans leading-snug">
                      {product.title}
                    </h3>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground dark:text-gray-400 font-sans leading-relaxed mb-2 sm:mb-3 px-2 sm:px-4">
                {product.description}
              </p>
              <a
                href={product.readMoreLink}
                className="text-xs sm:text-sm font-semibold font-sans text-foreground dark:text-white underline underline-offset-4 hover:text-muted-foreground dark:hover:text-gray-300 transition-colors"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
