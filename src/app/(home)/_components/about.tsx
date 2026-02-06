'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Href, ViewTransitionLink } from '@/components/view-transition-link';

const reviews = [
  {
    rating: '4.9/5',
    platform: 'Treatwell Reviews',
    link: 'https://www.treatwell.co.uk/place/pulse-laser-aesthetic-clinic/',
  },
  {
    rating: '5/5',
    platform: 'Facebook Reviews',
    link: 'https://en-gb.facebook.com/PulseLaserClinic/about/',
  },
  {
    rating: '5/5',
    platform: 'Google Reviews',
    link: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x4876052c9916e861:0x41505362713b919f',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">
              Pulse Laser
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Us
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-medium">Located in the prestigious Fitzrovia area of London, </span>
                Pulse Laser Aesthetic Clinic is a distinguished clinic recognised for its outstanding results, state-of-the-art procedures, and unmatched client service. The clinic was established in 2012 by sisters Maria Dinopoulos and Dr Christina Philippeos who have a shared passion for aesthetic treatments with a personal touch. Our ethos revolves around crafting a bespoke journey for each client, utilising cutting-edge and scientifically backed treatments to deliver unmatched results in our luxurious and welcoming facility.
              </p>
              <p>
                We are one of the very first clinics in London to launch the revolutionary Alma Hybrid Fractional CO2 Laser for scars and facial rejuvenation, as well as the Soprano Titanium for Laser Hair Removal. Specialising in the latest laser and skin rejuvenation treatments, we aim to provide safe and effective treatments in a professional, and clean environment.
              </p>
            </div>
            <ViewTransitionLink
              href={"/about-us" as Href}
              target="_blank"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Read more
              <ExternalLink size={16} />
            </ViewTransitionLink>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/09/0O9A2759-edit-Edit-copy-scaled.jpg"
                alt="About Pulse Laser Clinic"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ViewTransitionLink
              key={review.platform}
              href={review.link as Href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-50 hover:bg-gray-100 transition-colors p-8 rounded-lg text-center"
            >
              <h3 className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform">
                {review.rating}
              </h3>
              <p className="text-gray-700 font-medium">{review.platform}</p>
            </ViewTransitionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
