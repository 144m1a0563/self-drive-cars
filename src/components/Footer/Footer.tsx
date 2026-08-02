import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaChevronRight,
  FaCarSide,
} from "react-icons/fa";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Cars", href: "#cars" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Booking Process", href: "#booking-process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const carLinks = [
  { label: "Maruti Swift", href: "#maruti-swift" },
  { label: "Maruti Baleno", href: "#maruti-baleno" },
  { label: "Maruti Dzire", href: "#maruti-dzire" },
  { label: "Maruti Ertiga", href: "#maruti-ertiga" },
  { label: "Toyota Innova", href: "#toyota-innova" },
  { label: "Mahindra XUV", href: "#mahindra-xuv" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#061426] text-white">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-36 top-0 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      {/* Top CTA */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container-custom py-8 sm:py-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-red-600 via-red-500 to-orange-500 px-6 py-8 shadow-[0_24px_70px_rgba(220,38,38,0.2)] sm:px-8 lg:flex lg:items-center lg:justify-between lg:px-10"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" />

            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-white/75">
                Ready for your next journey?
              </p>

              <h2 className="mt-3 text-[27px] font-bold leading-tight sm:text-[34px] lg:text-[40px]">
                Book your self-drive car today
              </h2>

              <p className="mt-3 max-w-[650px] text-[12px] leading-6 text-white/85 sm:text-[13px]">
                Contact Cherry Cars for clean, reliable and affordable
                self-drive cars in Tirupati.
              </p>
            </div>

            <div className="relative z-10 mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <motion.a
                href="tel:+919052885299"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-[12px] font-semibold text-red-600 shadow-lg transition-colors hover:bg-[#07182f] hover:text-white"
              >
                <FaPhoneAlt size={13} />
                Call Now
              </motion.a>

              <motion.a
                href="https://wa.me/919052885299"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-6 py-4 text-[12px] font-semibold text-white backdrop-blur transition-colors hover:bg-green-500"
              >
                <FaWhatsapp size={17} />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative z-10">
        <div className="container-custom py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1.1fr] lg:gap-8 xl:gap-12">
            {/* Brand */}
            <div>
              <a href="#home" className="inline-flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-[24px] text-white shadow-lg shadow-red-600/20">
                  <FaCarSide />
                </span>

                <span>
                  <span className="block text-[28px] font-extrabold leading-none tracking-[-1px] text-white">
                    CHERRY
                    <span className="text-red-500"> CARS</span>
                  </span>

                  <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[3.5px] text-white/45">
                    Self Drive Cars
                  </span>
                </span>
              </a>

              <p className="mt-6 max-w-[390px] text-[12px] leading-7 text-white/55 sm:text-[13px]">
                Cherry Cars provides clean, affordable and reliable self-drive
                vehicles for local travel, airport trips, temple visits and
                outstation journeys.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[15px] text-white transition-all hover:border-red-500 hover:bg-red-600"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[16px] text-white transition-all hover:border-red-500 hover:bg-red-600"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/919052885299"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[18px] text-white transition-all hover:border-green-500 hover:bg-green-500"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-[16px] font-bold text-white">Quick Links</h3>

              <div className="mt-3 h-[2px] w-12 rounded-full bg-red-600" />

              <ul className="mt-6 space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-2 text-[12px] font-medium text-white/55 transition-colors hover:text-white"
                    >
                      <FaChevronRight
                        size={9}
                        className="text-red-500 transition-transform group-hover:translate-x-1"
                      />

                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cars */}
            <div>
              <h3 className="text-[16px] font-bold text-white">Our Cars</h3>

              <div className="mt-3 h-[2px] w-12 rounded-full bg-red-600" />

              <ul className="mt-6 space-y-3">
                {carLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-2 text-[12px] font-medium text-white/55 transition-colors hover:text-white"
                    >
                      <FaChevronRight
                        size={9}
                        className="text-red-500 transition-transform group-hover:translate-x-1"
                      />

                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact details */}
            <div>
              <h3 className="text-[16px] font-bold text-white">
                Contact Details
              </h3>

              <div className="mt-3 h-[2px] w-12 rounded-full bg-red-600" />

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+919052885299"
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-red-500/40 hover:bg-white/[0.07]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-[14px] text-red-400">
                    <FaPhoneAlt />
                  </span>

                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[1.6px] text-white/35">
                      Phone
                    </span>

                    <span className="mt-1 block text-[13px] font-semibold text-white">
                      +91 90528 85299
                    </span>
                  </span>
                </a>

                <a
                  href="mailto:bookings@cherrycars.in"
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-red-500/40 hover:bg-white/[0.07]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-[14px] text-red-400">
                    <FaEnvelope />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[9px] font-semibold uppercase tracking-[1.6px] text-white/35">
                      Email
                    </span>

                    <span className="mt-1 block break-all text-[12px] font-semibold text-white">
                      bookings@cherrycars.in
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-[14px] text-red-400">
                    <FaMapMarkerAlt />
                  </span>

                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[1.6px] text-white/35">
                      Service Area
                    </span>

                    <span className="mt-1 block text-[12px] leading-5 text-white">
                      Tirupati, Tirumala, Renigunta Airport and nearby locations
                    </span>
                  </span>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-[14px] text-red-400">
                    <FaClock />
                  </span>

                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[1.6px] text-white/35">
                      Working Hours
                    </span>

                    <span className="mt-1 block text-[12px] font-semibold text-white">
                      Open 24 Hours
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="relative z-10 border-t border-white/10 bg-black/10">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] leading-5 text-white/40 sm:text-[11px]">
            © {currentYear} Cherry Self Drive Cars. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a
              href="#"
              className="text-[10px] font-medium text-white/40 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[10px] font-medium text-white/40 transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>

            <a
              href="#faq"
              className="text-[10px] font-medium text-white/40 transition-colors hover:text-white"
            >
              Rental Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;