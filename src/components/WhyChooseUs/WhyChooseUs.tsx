import type { ReactNode } from "react";
import {
  FaCarSide,
  FaWallet,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaHeadset,
  FaMobileAlt,
  FaBroom,
  FaStar,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

const features: Feature[] = [
  {
    title: "Premium Fleet",
    description:
      "Choose from clean, reliable and well-maintained cars for every kind of journey.",
    icon: <FaCarSide />,
  },
  {
    title: "Affordable Pricing",
    description:
      "Enjoy flexible rental plans with transparent pricing and no hidden charges.",
    icon: <FaWallet />,
  },
  {
    title: "Doorstep Delivery",
    description:
      "Get your preferred car delivered and picked up at your convenient location.",
    icon: <FaMapMarkerAlt />,
  },
  {
    title: "Insured Vehicles",
    description:
      "Drive with confidence in vehicles covered with reliable insurance protection.",
    icon: <FaShieldAlt />,
  },
  {
    title: "24/7 Support",
    description:
      "Our booking and roadside assistance team is available whenever you need help.",
    icon: <FaHeadset />,
  },
  {
    title: "Easy Booking",
    description:
      "Reserve your favourite self-drive car quickly through phone or WhatsApp.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Clean Cars",
    description:
      "Every vehicle is carefully cleaned and inspected before each customer booking.",
    icon: <FaBroom />,
  },
  {
    title: "Trusted Service",
    description:
      "A dependable rental experience trusted by travellers, families and businesses.",
    icon: <FaStar />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fffafa] to-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-red-100/60 blur-3xl" />

        <div className="absolute -right-28 bottom-10 h-[380px] w-[380px] rounded-full bg-orange-100/60 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50 blur-3xl" />
      </div>

      {/* Desktop side space only */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-5 lg:px-12 xl:px-16 2xl:px-20">
        {/* Heading */}
        <div className="mx-auto max-w-[850px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-bold uppercase tracking-[4px] text-red-600 sm:text-[13px] sm:tracking-[5px]"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 text-[34px] font-extrabold leading-[1.12] tracking-[-1.5px] text-gray-950 sm:text-[46px] lg:text-[58px]"
          >
            Experience a better way to
            <span className="block text-red-600">rent self-drive cars</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-5 max-w-[720px] text-[13px] leading-7 text-gray-500 sm:text-[15px]"
          >
            From transparent pricing to doorstep delivery, Cherry Cars makes
            every journey simple, comfortable and dependable.
          </motion.p>
        </div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6"
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_65px_rgba(0,0,0,0.12)] sm:p-7"
            >
              {/* Card number */}
              <span className="absolute right-5 top-5 text-[34px] font-extrabold leading-none text-gray-100 transition-colors duration-300 group-hover:text-red-50">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: -8,
                  scale: 1.08,
                }}
                transition={{ duration: 0.25 }}
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[22px] text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white"
              >
                {feature.icon}
              </motion.div>

              <h3 className="relative z-10 mt-6 text-[18px] font-bold tracking-[-0.3px] text-gray-950 sm:text-[20px]">
                {feature.title}
              </h3>

              <p className="relative z-10 mt-3 text-[12px] leading-6 text-gray-500 sm:text-[13px]">
                {feature.description}
              </p>

              {/* Hover line */}
              <span className="absolute bottom-0 left-0 h-[4px] w-0 rounded-r-full bg-red-600 transition-all duration-500 group-hover:w-full" />

              {/* Decorative circle */}
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-red-50 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-[28px] bg-[#07182f] px-6 py-8 text-white sm:px-9 lg:mt-14 lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-10"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-600/20 blur-3xl" />

          <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-red-400">
              Ready to drive?
            </p>

            <h3 className="mt-3 text-[26px] font-bold leading-tight sm:text-[32px]">
              Find the perfect car for your next journey
            </h3>

            <p className="mt-3 max-w-[620px] text-[12px] leading-6 text-white/65 sm:text-[13px]">
              Contact our team and book a clean, affordable and reliable
              self-drive car in Tirupati.
            </p>
          </div>

          <div className="relative z-10 mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <motion.a
              href="#cars"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-[12px] font-semibold text-white shadow-lg shadow-red-600/25 transition-colors hover:bg-white hover:text-black"
            >
              View Our Fleet
              <FaArrowRight size={11} />
            </motion.a>

            <motion.a
              href="tel:+919603785823"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-[12px] font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-black"
            >
              <FaPhoneAlt size={13} />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;