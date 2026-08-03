import { useState } from "react";
import {
  FaChevronDown,
  FaQuestionCircle,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What documents are required to rent a self-drive car?",
    answer:
      "You need a valid driving licence, Aadhaar card or passport, and any additional identity proof requested during booking. A refundable security deposit may also be required.",
  },
  {
    id: 2,
    question: "Can I book a car for outstation travel?",
    answer:
      "Yes. Our cars are available for local travel, airport trips, temple visits, weekend trips and outstation journeys. Please share your travel plan while booking.",
  },
  {
    id: 3,
    question: "Do you provide doorstep delivery and pickup?",
    answer:
      "Yes. Doorstep delivery and pickup are available in selected locations across Tirupati. Extra charges may apply depending on the delivery distance.",
  },
  {
    id: 4,
    question: "Is fuel included in the rental price?",
    answer:
      "Fuel is generally not included in the rental amount. The vehicle will be provided with a recorded fuel level and should be returned with the same level.",
  },
  {
    id: 5,
    question: "Is there a security deposit?",
    answer:
      "Yes. A refundable security deposit may be collected based on the vehicle category and booking duration. It will be returned after the vehicle inspection.",
  },
  {
    id: 6,
    question: "Can I extend my booking duration?",
    answer:
      "Yes, booking extensions are possible based on vehicle availability. Contact our support team before the original return time to confirm the extension.",
  },
  {
    id: 7,
    question: "What happens if the car is damaged during my trip?",
    answer:
      "Inform our support team immediately. Repair charges, insurance deductions or other applicable costs will depend on the damage and rental terms.",
  },
  {
    id: 8,
    question: "Do you provide 24/7 customer support?",
    answer:
      "Yes. Our team is available for booking assistance, pickup support and travel-related queries throughout your rental period.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setActiveId((previous) => (previous === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-[360px] w-[360px] rounded-full bg-red-100/60 blur-3xl" />

        <div className="absolute -right-32 bottom-16 h-[380px] w-[380px] rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-5 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[38%_62%] lg:gap-12 xl:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[22px] text-red-600">
              <FaQuestionCircle />
            </div>

            <p className="mt-6 text-[11px] font-bold uppercase tracking-[4px] text-red-600 sm:text-[13px] sm:tracking-[5px]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-[34px] font-extrabold leading-[1.12] tracking-[-1.5px] text-gray-950 sm:text-[46px] lg:text-[54px]">
              Everything you need to know
              <span className="block text-red-600">before you book</span>
            </h2>

            <p className="mt-5 max-w-[560px] text-[13px] leading-7 text-gray-500 sm:text-[15px]">
              Find quick answers about booking, documents, deposits, fuel,
              extensions and vehicle usage.
            </p>

            <div className="mt-8 rounded-[26px] bg-[#07182f] p-6 text-white sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-red-400">
                Still have questions?
              </p>

              <h3 className="mt-3 text-[23px] font-bold sm:text-[27px]">
                Speak with our support team
              </h3>

              <p className="mt-3 text-[12px] leading-6 text-white/60 sm:text-[13px]">
                Our team will help you with car availability, pricing and
                booking details.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="tel:+919704143260"
                  className="flex items-center justify-center gap-3 rounded-xl bg-red-600 px-5 py-3.5 text-[12px] font-semibold text-white transition-colors hover:bg-white hover:text-black"
                >
                  <FaPhoneAlt size={13} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919704143260"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl bg-green-500 px-5 py-3.5 text-[12px] font-semibold text-white transition-colors hover:bg-green-600"
                >
                  <FaWhatsapp size={17} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* FAQ list */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {faqItems.map((faq, index) => {
              const isOpen = activeId === faq.id;

              return (
                <motion.article
                  key={faq.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className={`overflow-hidden rounded-[22px] border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-red-200 shadow-[0_18px_55px_rgba(220,38,38,0.08)]"
                      : "border-gray-100 shadow-[0_12px_35px_rgba(0,0,0,0.04)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold transition-colors duration-300 ${
                          isOpen
                            ? "bg-red-600 text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`pt-1 text-[14px] font-bold leading-6 transition-colors duration-300 sm:text-[16px] ${
                          isOpen ? "text-red-600" : "text-gray-900"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? "bg-red-50 text-red-600"
                          : "bg-gray-50 text-gray-500"
                      }`}
                    >
                      <FaChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 pl-[72px] pr-6 sm:px-6 sm:pb-7 sm:pl-[84px]">
                          <div className="h-px bg-gray-100" />

                          <p className="pt-5 text-[12px] leading-7 text-gray-500 sm:text-[13px]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-[24px] border border-red-100 bg-red-50 px-6 py-6 text-center sm:px-8 lg:mt-14"
        >
          <p className="text-[12px] leading-6 text-gray-600 sm:text-[13px]">
            Rental conditions may vary based on the selected car, trip duration
            and destination. Confirm the final terms with our booking team.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;