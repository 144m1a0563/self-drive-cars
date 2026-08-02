import type { ReactNode } from "react";
import {
  FaCarSide,
  FaCalendarAlt,
  FaIdCard,
  FaKey,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface BookingStep {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const bookingSteps: BookingStep[] = [
  {
    number: "01",
    title: "Choose Your Car",
    description:
      "Browse our fleet and select the car that best matches your trip, budget and seating needs.",
    icon: <FaCarSide />,
  },
  {
    number: "02",
    title: "Select Date & Time",
    description:
      "Share your pickup date, return date and preferred delivery time with our booking team.",
    icon: <FaCalendarAlt />,
  },
  {
    number: "03",
    title: "Submit Your Documents",
    description:
      "Provide a valid driving licence and identity proof for quick booking verification.",
    icon: <FaIdCard />,
  },
  {
    number: "04",
    title: "Collect & Start Driving",
    description:
      "Receive the vehicle at your chosen location, complete the inspection and enjoy your journey.",
    icon: <FaKey />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const stepVariants = {
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

const BookingProcess = () => {
  return (
    <section
      id="booking-process"
      className="relative overflow-hidden bg-[#07182f] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-red-600/15 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-5 lg:px-12 xl:px-16 2xl:px-20">
        {/* Heading */}
        <div className="mx-auto max-w-[850px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-bold uppercase tracking-[4px] text-red-400 sm:text-[13px] sm:tracking-[5px]"
          >
            Booking Process
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 text-[34px] font-extrabold leading-[1.12] tracking-[-1.5px] text-white sm:text-[46px] lg:text-[58px]"
          >
            Book your self-drive car
            <span className="block text-red-500">in four simple steps</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-5 max-w-[720px] text-[13px] leading-7 text-white/60 sm:text-[15px]"
          >
            Our booking process is quick, transparent and easy. Choose your
            preferred car, confirm your travel details and start your journey.
          </motion.p>
        </div>

        {/* Desktop progress line */}
        <div className="relative mt-14 hidden lg:block">
          <div className="absolute left-[12.5%] right-[12.5%] top-[42px] h-[2px] bg-white/10" />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "75%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.35 }}
            className="absolute left-[12.5%] top-[42px] h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-orange-400"
          />
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4 lg:gap-6"
        >
          {bookingSteps.map((step, index) => (
            <motion.article
              key={step.number}
              variants={stepVariants}
              whileHover={{ y: -9 }}
              className="group relative"
            >
              {/* Mobile connector */}
              {index !== bookingSteps.length - 1 && (
                <div className="absolute bottom-[-20px] left-[34px] h-5 w-[2px] bg-white/10 sm:hidden" />
              )}

              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition-all duration-300 hover:border-red-500/40 hover:bg-white/[0.09] hover:shadow-[0_24px_70px_rgba(0,0,0,0.25)] sm:p-7 lg:min-h-[330px]">
                {/* Number */}
                <span className="absolute right-5 top-4 text-[52px] font-extrabold leading-none text-white/[0.05] transition-colors duration-300 group-hover:text-red-500/10">
                  {step.number}
                </span>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: -7,
                    scale: 1.08,
                  }}
                  transition={{ duration: 0.25 }}
                  className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-red-600 text-[26px] text-white shadow-xl shadow-red-600/20"
                >
                  {step.icon}
                </motion.div>

                <div className="relative z-10 mt-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-red-400">
                      Step {step.number}
                    </span>

                    {index === bookingSteps.length - 1 && (
                      <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-green-400">
                        <FaCheckCircle size={9} />
                        Ready
                      </span>
                    )}
                  </div>

                  <h3 className="text-[20px] font-bold tracking-[-0.4px] text-white sm:text-[22px]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-white/55 sm:text-[13px]">
                    {step.description}
                  </p>
                </div>

                <span className="absolute bottom-0 left-0 h-[4px] w-0 rounded-r-full bg-red-600 transition-all duration-500 group-hover:w-full" />

                <div className="pointer-events-none absolute -bottom-14 -right-14 h-32 w-32 rounded-full bg-red-600/10 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Important documents */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 grid grid-cols-1 gap-5 rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:p-8 lg:mt-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-red-400">
              Required for booking
            </p>

            <h3 className="mt-3 text-[24px] font-bold text-white sm:text-[30px]">
              Keep your documents ready
            </h3>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {[
                "Valid Driving Licence",
                "Aadhaar or Passport",
                "Booking Advance",
                "Refundable Security Deposit",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-[12px] font-medium text-white/65"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600/15 text-[9px] text-red-400">
                    <FaCheckCircle />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <motion.a
              href="tel:+919052885299"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-[12px] font-semibold text-white shadow-lg shadow-red-600/25 transition-colors hover:bg-white hover:text-black"
            >
              <FaPhoneAlt size={13} />
              Call to Book
            </motion.a>

            <motion.a
              href="https://wa.me/919052885299"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-4 text-[12px] font-semibold text-white shadow-lg shadow-green-500/20 transition-colors hover:bg-green-600"
            >
              <FaWhatsapp size={17} />
              Book on WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-6 flex flex-col items-center justify-between gap-5 rounded-[24px] bg-white px-6 py-6 text-gray-950 sm:px-8 lg:flex-row lg:px-10"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-red-600">
              Start your journey today
            </p>

            <h3 className="mt-2 text-[22px] font-bold sm:text-[26px]">
              Choose a car and confirm your booking in minutes
            </h3>
          </div>

          <a
            href="#cars"
            className="flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#07182f] px-6 py-4 text-[12px] font-semibold text-white transition-all hover:bg-red-600"
          >
            View Available Cars
            <FaArrowRight size={11} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingProcess;