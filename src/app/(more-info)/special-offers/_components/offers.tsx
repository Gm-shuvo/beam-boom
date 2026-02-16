import Image from "next/image";

const Offers = () => {
  return (
    <section className="p-4 bg-gray-50 relative">
      {/* Right white vertical panel */}
      <div className="absolute top-0 right-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="flex flex-col items-center justify-center">
           <div className='space-y-6 pt-8'>
             <h2 className="text-3xl font-bold text-left text-gray-900 ">
              New clients receive 10% off your first treatment
            </h2>
            <p className="text-base md:text-lg font-light text-gray-600 max-w-2xl text-left mb-20">
              We offer all new clients 10% off their first treatment or first
              course of treatments. You can book an initial laser or skin
              consultation online or via phone, and the discount will be applied
              at point of payment.
            </p>
           </div>

            <div className='px-5 space-y-6'>
              <h2 className="text-3xl font-bold text-left text-gray-900">
              Refer a friend & receive 10% off your next treatment
            </h2>
            <p className="text-base md:text-lg font-light text-gray-600 max-w-2xl text-left">
              *Terms and conditions apply
            </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative top-31.25 left-66.25 h-100 md:h-102.5 w-75 md:w-100 overflow-hidden z-10">
            <Image
              src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/skin-treatment-image.jpg"
              alt="Special Offers at Pulse Laser Clinic"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
