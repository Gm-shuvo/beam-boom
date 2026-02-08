// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      className="relative bg-gray-950 text-gray-200 pt-16 pb-10 overflow-hidden"
      style={{
        backgroundImage: `url('https://www.pulse-clinic.co.uk/wp-content/themes/pulselaser/assets/images/footer-back.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 - Logo + Social */}
          <div className="footer-logo-block">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/07/PulseLogo-1.png"
                alt="Pulse Laser Logo"
                width={180}
                height={60}
                className="h-12 w-auto brightness-110"
                priority
              />
            </Link>

            <div className="footer-social-icon mt-4">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="https://www.facebook.com/PulseLaserClinic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-xl"
                  >
                    f
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/PulseClinicLDN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-xl"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pulse_laser/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-xl"
                  >
                    insta
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 - Opening Hours */}
          <div className="footer-middle-block">
            <h4 className="text-xl font-semibold text-white mb-6">Opening Hours</h4>
            <div className="space-y-3">
              <p><span className="font-medium">Monday–Friday:</span> 09:00 – 19:00</p>
              <p><span className="font-medium">Saturday:</span> 09:00 – 18:00</p>
              <p><span className="font-medium">Sunday:</span> 09:00 – 18:00</p>
            </div>
          </div>

          {/* Column 3 - Newsletter */}
          <div className="footer-middle-block">
            <h4 className="text-xl font-semibold text-white mb-4">
              Signup to receive 10% off
            </h4>
            <p className="text-gray-300 mb-6 text-sm">
              off your first treatment and for our latest offers
            </p>

            <form className="flex items-center gap-3 max-w-sm">
              <input
                type="email"
                placeholder="E-mail"
                className="flex-1 px-4 py-3 rounded bg-gray-800/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="p-3.5 text-white bg-white rounded hover:bg-white/80 transition backdrop-blur-sm"
                aria-label="Subscribe"
              >
                <Image
                  src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/email.svg"
                  alt="Send"
                  width={22}
                  height={22}
                  className="invert brightness-150"
                />
              </button>
            </form>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="footer-contact-block ">
            <h4 className="text-xl font-semibold text-white mb-6">Contact Info</h4>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                
                <div>
                  <p className="text-gray-400 text-sm">Phone Number</p>
                  <a href="tel:02034058483" className="text-white hover:text-blue-300 transition">
                    020 3405 8483
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                
                <div>
                  <p className="text-gray-400 text-sm">Email Address</p>
                  <a href="mailto:info@pulse-clinic.co.uk" className="text-white hover:text-blue-300 transition">
                    info@pulse-clinic.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
               
                <div>
                  <p className="text-gray-400 text-sm">Address Info</p>
                  <p className="text-white leading-relaxed">
                    70 Mortimer Street<br />
                    London, W1W 7RY<br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="relative z-10 mt-16 pt-8 border-t border-gray-700/50 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Pulse Laser. All Rights Reserved. 
            <span className="mx-3">|</span>
            <Link href="/terms-and-conditions" className="hover:text-gray-300 transition">
              Terms and Conditions
            </Link>
            <span className="mx-2">|</span>
            <Link href="/refund-and-returns-policy" className="hover:text-gray-300 transition">
              Refund and Returns Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}