import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  review: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nagendra Reddy",
    location: "Tirupati",
    review:
      "The booking process was very easy and the car was delivered on time. The vehicle was clean, smooth and perfect for our family trip.",
    rating: 5,
    initials: "NR",
  },
  {
    id: 2,
    name: "Sakshi Sharma",
    location: "Hyderabad",
    review:
      "Excellent self-drive service in Tirupati. The pricing was transparent and the support team responded quickly whenever we contacted them.",
    rating: 5,
    initials: "SS",
  },
  {
    id: 3,
    name: "Nisha Kumar",
    location: "Bengaluru",
    review:
      "We booked a car for a temple trip and had a very comfortable experience. The car condition was good and the pickup process was hassle-free.",
    rating: 5,
    initials: "NK",
  },
  {
    id: 4,
    name: "Ravi Teja",
    location: "Chennai",
    review:
      "Very professional service. The car was well maintained, fuel efficient and exactly as shown during booking. I would definitely book again.",
    rating: 5,
    initials: "RT",
  },
  {
    id: 5,
    name: "Priya Reddy",
    location: "Nellore",
    review:
      "The doorstep delivery option was very convenient. The staff explained everything clearly and the entire rental experience was smooth.",
    rating: 5,
    initials: "PR",
  },
  {
    id: 6,
    name: "Arjun Varma",
    location: "Vijayawada",
    review:
      "A reliable service for outstation travel. We had no issues during the journey and the support team was available when required.",
    rating: 5,
    initials: "AV",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    setActiveIndex((previous) =>
      previous >= totalSlides ? Math.max(totalSlides - 1, 0) : previous
    );
  }, [totalSlides]);

  useEffect(() => {
    if (paused || totalSlides <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((previous) =>
        previous === totalSlides - 1 ? 0 : previous + 1
      );
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, [paused, totalSlides]);

  const nextSlide = () => {
    setActiveIndex((previous) =>
      previous === totalSlides - 1 ? 0 : previous + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((previous) =>
      previous === 0 ? totalSlides - 1 : previous - 1
    );
  };

  const startIndex = activeIndex * itemsPerPage;

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section
      id="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fffafa] to-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-[360px] w-[360px] rounded-full bg-red-100/60 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-[380px] w-[380px] rounded-full bg-orange-100/60 blur-3xl" />
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
            Customer Reviews
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 text-[34px] font-extrabold leading-[1.12] tracking-[-1.5px] text-gray-950 sm:text-[46px] lg:text-[58px]"
          >
            Trusted by happy
            <span className="block text-red-600">self-drive customers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-5 max-w-[720px] text-[13px] leading-7 text-gray-500 sm:text-[15px]"
          >
            Read what our customers say about their booking experience,
            vehicle quality and journeys with Cherry Cars.
          </motion.p>
        </div>

        {/* Slider */}
        <div className="relative mt-12 lg:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIndex}-${itemsPerPage}`}
              initial={{ opacity: 0, x: 55 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -55 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`grid gap-5 ${
                itemsPerPage === 1
                  ? "grid-cols-1"
                  : itemsPerPage === 2
                    ? "grid-cols-2"
                    : "grid-cols-3"
              }`}
            >
              {visibleTestimonials.map((testimonial) => (
                <motion.article
                  key={testimonial.id}
                  whileHover={{ y: -8 }}
                  className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[26px] border border-gray-100 bg-white p-6 shadow-[0_18px_55px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_26px_70px_rgba(0,0,0,0.12)] sm:p-7"
                >
                  {/* Quote */}
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[22px] text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                      <FaQuoteLeft />
                    </span>

                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, index) => (
                          <FaStar key={index} size={14} />
                        )
                      )}
                    </div>
                  </div>

                  {/* Review */}
                  <p className="mt-7 flex-1 text-[13px] leading-7 text-gray-600 sm:text-[14px]">
                    “{testimonial.review}”
                  </p>

                  {/* Customer */}
                  <div className="mt-7 flex items-center gap-4 border-t border-gray-100 pt-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#07182f] text-[13px] font-bold text-white">
                      {testimonial.initials}
                    </div>

                    <div>
                      <h3 className="text-[15px] font-bold text-gray-950 sm:text-[16px]">
                        {testimonial.name}
                      </h3>

                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[1.5px] text-gray-400">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Bottom hover line */}
                  <span className="absolute bottom-0 left-0 h-[4px] w-0 rounded-r-full bg-red-600 transition-all duration-500 group-hover:w-full" />

                  <div className="pointer-events-none absolute -bottom-14 -right-14 h-32 w-32 rounded-full bg-red-50 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Previous button */}
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={previousSlide}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-xl transition-all hover:border-red-600 hover:bg-red-600 hover:text-white xl:flex"
          >
            <FaChevronLeft />
          </button>

          {/* Next button */}
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-xl transition-all hover:border-red-600 hover:bg-red-600 hover:text-white xl:flex"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Mobile and tablet controls */}
        <div className="mt-8 flex items-center justify-center gap-4 xl:hidden">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={previousSlide}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-md transition-all active:scale-95"
          >
            <FaChevronLeft />
          </button>

          <button
            type="button"
            aria-label="Next testimonials"
            onClick={nextSlide}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-md transition-all active:scale-95"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show testimonial slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-9 bg-red-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Trust summary */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 grid grid-cols-2 gap-3 rounded-[26px] bg-[#07182f] p-5 text-white sm:grid-cols-4 sm:p-7 lg:mt-14 lg:px-10"
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "1000+", label: "Happy Customers" },
            { value: "24/7", label: "Customer Support" },
            { value: "95%", label: "Repeat Bookings" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-5 text-center"
            >
              <p className="text-[24px] font-extrabold text-white sm:text-[28px]">
                {item.value}
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[1.5px] text-white/50 sm:text-[10px]">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;