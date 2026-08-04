import type { ReactNode } from "react";
import {
  FaCarSide,
  FaCheckCircle,
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaRoad,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Highlight {
  title: string;
  description: string;
  icon: ReactNode;
}

interface Stat {
  value: string;
  label: string;
}

const highlights: Highlight[] = [
  {
    title: "Well-Maintained Cars",
    description:
      "Every vehicle is carefully inspected, cleaned and prepared before each booking.",
    icon: <FaCarSide />,
  },
  {
    title: "Safe & Reliable",
    description:
      "Travel confidently with reliable vehicles and clear rental support throughout your journey.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Customer Focused",
    description:
      "Our team helps customers choose the right vehicle based on their travel requirements.",
    icon: <FaUsers />,
  },
  {
    title: "24/7 Booking Support",
    description:
      "Contact our team anytime for availability, booking support and vehicle assistance.",
    icon: <FaClock />,
  },
];

const stats: Stat[] = [
  {
    value: "1000+",
    label: "Happy Customers",
  },
  {
    value: "20+",
    label: "Quality Cars",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
  {
    value: "4.9",
    label: "Customer Rating",
  },
];

const benefits = [
  "Transparent rental pricing",
  "Flexible hourly and daily plans",
  "Doorstep delivery and pickup",
  "Cars for local and outstation travel",
  "Simple documentation process",
  "Fast phone and WhatsApp booking",
];

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-red-100/60 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-[380px] w-[380px] rounded-full bg-orange-100/60 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main layout */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[48%_52%] lg:gap-14 xl:gap-20">
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[30px] bg-gray-100 shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=90"
                alt="Tiya self drive cars"
                className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[560px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[22px] border border-white/20 bg-white/90 p-5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-red-600">
                  Trusted Self Drive Service
                </p>

                <h3 className="mt-2 text-[21px] font-bold leading-tight text-gray-950 sm:text-[26px]">
                  Freedom to travel on your own terms
                </h3>
              </div>
            </div>

            {/* Experience card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.45 }}
              className="absolute -bottom-6 right-4 rounded-[22px] border-[6px] border-white bg-red-600 px-6 py-5 text-white shadow-2xl sm:-bottom-8 sm:right-8 sm:px-8 sm:py-6 lg:-right-8"
            >
              <p className="text-[32px] font-extrabold leading-none sm:text-[42px]">
                10+
              </p>

              <p className="mt-2 text-[9px] font-bold uppercase tracking-[2px] text-white/80 sm:text-[10px]">
                Years of Service
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pt-8 lg:pt-0"
          >
            <p className="text-[11px] font-bold uppercase tracking-[4px] text-red-600 sm:text-[13px] sm:tracking-[5px]">
              About Us
            </p>

            <h2 className="mt-4 text-[34px] font-extrabold leading-[1.1] tracking-[-1.5px] text-gray-950 sm:text-[46px] lg:text-[56px]">
              Reliable self-drive cars
              <span className="block text-red-600">for every journey</span>
            </h2>

            <p className="mt-6 text-[13px] leading-7 text-gray-600 sm:text-[15px]">
              Tiya Self Drive Cars provides clean, affordable and dependable
              rental vehicles in Tirupati. We make it easy for travellers,
              families and professionals to book the right car without driver
              restrictions.
            </p>

            <p className="mt-4 text-[13px] leading-7 text-gray-600 sm:text-[15px]">
              From local city travel and airport transfers to temple tours and
              long-distance road trips, our fleet is designed to give you
              privacy, comfort and complete travel freedom.
            </p>

            {/* Benefits */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3.5"
                >
                  <FaCheckCircle className="shrink-0 text-[15px] text-red-600" />

                  <span className="text-[12px] font-semibold text-gray-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/cars"
                className="group flex items-center justify-center gap-3 rounded-xl bg-red-600 px-7 py-4 text-[12px] font-semibold text-white shadow-lg shadow-red-600/20 transition-all hover:bg-black"
              >
                Explore Our Cars

                <FaArrowRight
                  size={11}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+919704143260"
                className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-7 py-4 text-[12px] font-semibold text-gray-900 transition-all hover:border-red-600 hover:text-red-600"
              >
                <FaPhoneAlt size={13} />
                Call Our Team
              </a>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4"
        >
          {highlights.map((highlight, index) => (
            <motion.article
              key={highlight.title}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_24px_65px_rgba(0,0,0,0.11)]"
            >
              <span className="absolute right-5 top-5 text-[32px] font-extrabold text-gray-100 transition-colors group-hover:text-red-50">
                {String(index + 1).padStart(2, "0")}
              </span>

              <motion.div
                whileHover={{ rotate: -7, scale: 1.07 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[22px] text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white"
              >
                {highlight.icon}
              </motion.div>

              <h3 className="mt-6 text-[18px] font-bold text-gray-950">
                {highlight.title}
              </h3>

              <p className="mt-3 text-[12px] leading-6 text-gray-500">
                {highlight.description}
              </p>

              <span className="absolute bottom-0 left-0 h-[4px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-[28px] bg-[#07182f] px-5 py-7 text-white sm:px-8 lg:mt-14 lg:px-10 lg:py-9"
        >
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-600/20 blur-3xl" />

          <div className="absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-6 text-center"
              >
                <p className="text-[27px] font-extrabold text-white sm:text-[32px]">
                  {stat.value}
                </p>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[1.5px] text-white/50 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission section */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[26px] border border-red-100 bg-red-50 p-6 sm:p-8"
          >
            <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-red-600 text-[21px] text-white">
              <FaRoad />
            </span>

            <h3 className="mt-6 text-[24px] font-bold text-gray-950">
              Our Mission
            </h3>

            <p className="mt-3 text-[13px] leading-7 text-gray-600">
              To provide safe, clean and affordable self-drive vehicles with a
              simple booking process and dependable customer support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[26px] border border-gray-100 bg-gray-950 p-6 text-white sm:p-8"
          >
            <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/10 text-[21px] text-red-400">
              <FaUsers />
            </span>

            <h3 className="mt-6 text-[24px] font-bold text-white">
              Our Promise
            </h3>

            <p className="mt-3 text-[13px] leading-7 text-white/60">
              Every customer receives transparent information, responsive
              support and a vehicle prepared for a comfortable journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;