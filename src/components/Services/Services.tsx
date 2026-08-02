import type { ReactNode } from "react";
import {
  FaCarSide,
  FaPlaneDeparture,
  FaMapMarkedAlt,
  FaHotel,
  FaRoute,
  FaCalendarCheck,
  FaPhoneAlt,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  number: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Local Self Drive",
    description:
      "Perfect for city travel, shopping, meetings and everyday trips around Tirupati.",
    icon: <FaCarSide />,
    features: [
      "Flexible hourly plans",
      "Clean and maintained cars",
      "Easy pickup and return",
    ],
  },
  {
    number: "02",
    title: "Airport Rentals",
    description:
      "Reliable self-drive cars for Tirupati Airport pickup, drop and onward travel.",
    icon: <FaPlaneDeparture />,
    features: [
      "Available all day",
      "Convenient airport access",
      "Quick booking support",
    ],
  },
  {
    number: "03",
    title: "Outstation Trips",
    description:
      "Travel comfortably to nearby cities, tourist locations and weekend destinations.",
    icon: <FaMapMarkedAlt />,
    features: [
      "Unlimited travel freedom",
      "Affordable daily pricing",
      "Ideal for long journeys",
    ],
  },
  {
    number: "04",
    title: "Temple Tours",
    description:
      "Explore Tirupati, Tirumala and nearby temples privately and comfortably.",
    icon: <FaHotel />,
    features: [
      "Flexible trip timing",
      "Family-friendly vehicles",
      "Doorstep car delivery",
    ],
  },
  {
    number: "05",
    title: "Long-Term Rentals",
    description:
      "Choose weekly or monthly self-drive rental plans for personal and business use.",
    icon: <FaCalendarCheck />,
    features: [
      "Weekly and monthly plans",
      "Better long-term pricing",
      "Dedicated booking support",
    ],
  },
  {
    number: "06",
    title: "Road Trip Rentals",
    description:
      "Select the right car for family vacations, adventure trips and group journeys.",
    icon: <FaRoute />,
    features: [
      "Hatchbacks, sedans and SUVs",
      "Comfortable road-trip cars",
      "Well-inspected vehicles",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-[360px] w-[360px] rounded-full bg-red-100/60 blur-3xl" />

        <div className="absolute -right-28 bottom-16 h-[380px] w-[380px] rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-5 lg:px-12 xl:px-16 2xl:px-20">
        {/* Heading */}
        <div className="mx-auto max-w-[850px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-bold uppercase tracking-[4px] text-red-600 sm:text-[13px] sm:tracking-[5px]"
          >
            Our Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 text-[34px] font-extrabold leading-[1.12] tracking-[-1.5px] text-gray-950 sm:text-[46px] lg:text-[58px]"
          >
            Self-drive solutions for
            <span className="block text-red-600">every kind of journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-5 max-w-[720px] text-[13px] leading-7 text-gray-500 sm:text-[15px]"
          >
            Whether you need a car for city travel, airport pickup, temple
            visits or a long road trip, Cherry Cars provides reliable and
            affordable rental options.
          </motion.p>
        </div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14 xl:grid-cols-3 xl:gap-6"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -9 }}
              className="group relative overflow-hidden rounded-[26px] border border-gray-100 bg-white p-6 shadow-[0_18px_55px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_26px_70px_rgba(0,0,0,0.12)] sm:p-7"
            >
              {/* Background number */}
              <span className="absolute right-5 top-4 text-[52px] font-extrabold leading-none text-gray-100 transition-colors duration-300 group-hover:text-red-50">
                {service.number}
              </span>

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: -7,
                  scale: 1.08,
                }}
                transition={{ duration: 0.25 }}
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-[25px] text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white"
              >
                {service.icon}
              </motion.div>

              <h3 className="relative z-10 mt-6 text-[20px] font-bold tracking-[-0.4px] text-gray-950 sm:text-[22px]">
                {service.title}
              </h3>

              <p className="relative z-10 mt-3 text-[12px] leading-6 text-gray-500 sm:text-[13px]">
                {service.description}
              </p>

              {/* Features */}
              <div className="relative z-10 mt-5 space-y-3">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-[12px] font-medium text-gray-600"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[8px] text-red-600">
                      <FaCheck />
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#book"
                className="relative z-10 mt-6 inline-flex items-center gap-3 text-[12px] font-semibold text-red-600 transition-colors hover:text-black"
              >
                Book This Service

                <FaArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Bottom hover line */}
              <span className="absolute bottom-0 left-0 h-[4px] w-0 rounded-r-full bg-red-600 transition-all duration-500 group-hover:w-full" />

              {/* Decorative shape */}
              <div className="pointer-events-none absolute -bottom-14 -right-14 h-32 w-32 rounded-full bg-red-50 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>

        {/* Support banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-[30px] bg-gradient-to-r from-[#07182f] via-[#0b203d] to-[#07182f] px-6 py-8 text-white sm:px-9 lg:mt-14 lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-10"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-600/20 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-red-400">
              Need a custom rental plan?
            </p>

            <h3 className="mt-3 text-[26px] font-bold leading-tight sm:text-[32px]">
              Speak with our booking team today
            </h3>

            <p className="mt-3 max-w-[650px] text-[12px] leading-6 text-white/65 sm:text-[13px]">
              Tell us your travel dates, preferred vehicle and destination. Our
              team will help you choose the right rental plan.
            </p>
          </div>

          <div className="relative z-10 mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <motion.a
              href="tel:+919603785823"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-[12px] font-semibold text-white shadow-lg shadow-red-600/25 transition-colors hover:bg-white hover:text-black"
            >
              <FaPhoneAlt size={13} />
              +91 9603785823
            </motion.a>

            <motion.a
              href="#cars"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-[12px] font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-black"
            >
              View Our Fleet
              <FaArrowRight size={11} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;