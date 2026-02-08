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
      "Biafine soothes and protects skin “burned” or stressed by medical treatments or the sun",
    readMoreLink:
      "https://www.pulse-clinic.co.uk/product/biafine-skin-emulsion-93/",
    addToCartLink: "https://www.pulse-clinic.co.uk/cart/?add-to-cart=1550",
  },
];

const ShopNow = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="pulse-subtitle mb-10">PULSE LASER</p>
          <h2 className="pulse-title mb-10">Shop Now</h2>
          <p className="pulse-light-description mb-14">
            Please book a skin consultation to discuss your skin concerns
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {products.map((product, i) => (
            <div key={i} className="group text-center">
              <div className="relative bg-secondary p-6 mb-4 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay title at bottom of image */}
                <div className="absolute bottom-0 left-4 right-4">
                  <div className="bg-primary text-primary-foreground px-4 py-3 text-center">
                    <h3 className="text-sm font-bold font-sans leading-snug">
                      {product.title}
                    </h3>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-3 px-2">
                {product.description}
              </p>
              <a
                href="#"
                className="text-sm font-semibold font-sans text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
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
