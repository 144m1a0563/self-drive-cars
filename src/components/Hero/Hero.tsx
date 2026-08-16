import { useEffect, useState, type ReactNode } from "react";
import {
  FaPhoneAlt,
  FaTruck,
  FaRegThumbsUp,
  FaWhatsapp,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import { cars } from "../../data/cars";
import { trackEvent } from "../../utils/analytics";

interface CarSlide {
  name: string;
  image: string;
}

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

/* =========================================================
   CAR SLIDES - FIRST 4 CARS FROM cars.ts
========================================================= */

const carSlides: CarSlide[] = cars.slice(0, 4).map((car) => ({
  name: car.name.toUpperCase(),
  image: car.image,
}));

/* =========================================================
   FEATURES
========================================================= */

const features: Feature[] = [
  {
    title: "Easy Car Booking",
    description: "Fast self drive car booking in Tirupati",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Door Drop & Pickup",
    description: "Convenient vehicle delivery across Tirupati",
    icon: <FaTruck />,
  },
  {
    title: "Well Maintained Cars",
    description: "Clean rental cars for Tirupati and outstation trips",
    icon: <FaRegThumbsUp />,
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);

  /* =======================================================
     AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    if (sliderPaused || carSlides.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((previous) =>
        previous === carSlides.length - 1 ? 0 : previous + 1
      );
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [sliderPaused]);

  const currentCar = carSlides[activeSlide];

  if (!currentCar) {
    return null;
  }

  return (
    <>
      <section
        id="home"
        aria-labelledby="home-main-heading"
        onMouseEnter={() => setSliderPaused(true)}
        onMouseLeave={() => setSliderPaused(false)}
        className="
          relative
          flex
          min-h-[calc(100dvh-80px)]
          scroll-mt-20
          flex-col
          overflow-hidden
          bg-white
          lg:min-h-[calc(100dvh-96px)]
          lg:scroll-mt-24
        "
      >
        {/* =================================================
            BACKGROUND DECORATIONS
        ================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-red-50 blur-3xl" />

          <div className="absolute left-[35%] top-10 h-[300px] w-[300px] rounded-full bg-orange-50 blur-3xl" />

          <div className="absolute bottom-24 left-10 h-36 w-36 rounded-full bg-red-100/50 blur-3xl" />
        </div>

        {/* =================================================
            MAIN HERO CONTENT
        ================================================== */}

        <div className="relative z-10 flex min-h-0 flex-1 items-center">
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1600px]
              grid-cols-1
              items-center
              gap-8
              px-5
              py-10
              sm:px-8
              lg:grid-cols-[42%_58%]
              lg:px-12
              lg:py-6
              xl:px-16
            "
          >
            {/* ===============================================
                LEFT SEO CONTENT
            ================================================ */}

            <motion.div
              initial={{
                opacity: 0,
                x: -55,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-20 text-center lg:text-left"
            >
              <motion.p
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                }}
                className="
                  mb-3
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[4px]
                  text-red-600
                  sm:text-[13px]
                "
              >
                Tiya Self Drive Cars Tirupati
              </motion.p>

              {/* Primary SEO H1 */}

              <h1
                id="home-main-heading"
                className="
                  leading-[0.92]
                  tracking-[-3px]
                  sm:tracking-[-4px]
                "
              >
                <span
                  className="
                    block
                    font-serif
                    text-[43px]
                    font-bold
                    text-red-600
                    sm:text-[60px]
                    lg:text-[63px]
                    xl:text-[75px]
                    2xl:text-[84px]
                  "
                >
                  SELF DRIVE CARS
                </span>

                <span
                  className="
                    mt-2
                    block
                    font-serif
                    text-[55px]
                    font-black
                    text-black
                    sm:text-[75px]
                    lg:text-[78px]
                    xl:text-[98px]
                    2xl:text-[110px]
                  "
                >
                  IN TIRUPATI
                </span>
              </h1>

              {/* SEO description */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="
                  mx-auto
                  mt-6
                  max-w-[570px]
                  text-[12px]
                  leading-7
                  text-gray-600
                  sm:text-[14px]
                  lg:mx-0
                "
              >
                Looking for reliable and affordable{" "}
                <strong className="font-semibold text-gray-900">
                  self drive cars in Tirupati
                </strong>
                ? Tiya Self Drive Cars offers clean and well-maintained
                hatchbacks, sedans, SUVs and family cars for local travel,
                Tirumala trips, Renigunta Airport, business journeys and
                outstation travel.
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="
                  mx-auto
                  mt-3
                  max-w-[570px]
                  text-[11px]
                  leading-6
                  text-gray-500
                  sm:text-[13px]
                  lg:mx-0
                "
              >
                Choose flexible 12-hour and 24-hour{" "}
                <strong className="font-semibold text-gray-800">
                  car rental packages in Tirupati
                </strong>{" "}
                and enjoy privacy, comfort and complete freedom throughout your
                journey.
              </motion.p>

              {/* Location tags */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-2
                  lg:justify-start
                "
              >
                {[
                  "Tirupati",
                  "Tirumala",
                  "Renigunta Airport",
                  "Outstation",
                ].map((location) => (
                  <span
                    key={location}
                    className="
                      rounded-full
                      border
                      border-gray-200
                      bg-white
                      px-3
                      py-1.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[1px]
                      text-gray-600
                      shadow-sm
                    "
                  >
                    {location}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* ===============================================
                CAR SLIDER
            ================================================ */}

            <div
              className="
                relative
                flex
                min-h-[330px]
                items-center
                justify-center
                sm:min-h-[430px]
                lg:min-h-[500px]
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCar.name}
                  initial={{
                    opacity: 0,
                    x: 90,
                    scale: 0.94,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: -70,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >
                  <motion.img
                    src={currentCar.image}
                    alt={`${currentCar.name} self drive car in Tirupati - Tiya Self Drive Cars`}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    draggable={false}
                    fetchPriority={
                      activeSlide === 0 ? "high" : "auto"
                    }
                    className="
                      pointer-events-none
                      h-[250px]
                      w-full
                      max-w-[900px]
                      select-none
                      object-contain
                      sm:h-[340px]
                      lg:h-[410px]
                      xl:h-[455px]
                    "
                  />

                  <motion.h2
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.4,
                    }}
                    className="
                      mt-3
                      text-center
                      text-[20px]
                      font-extrabold
                      uppercase
                      tracking-[2px]
                      text-gray-950
                      sm:text-[26px]
                      lg:text-[32px]
                    "
                  >
                    {currentCar.name}
                  </motion.h2>

                  <p
                    className="
                      mt-1
                      text-center
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[1.5px]
                      text-gray-400
                    "
                  >
                    Self Drive Car Rental in Tirupati
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =================================================
            SLIDER DOTS
        ================================================== */}

        <div className="relative z-20 flex shrink-0 justify-center gap-2 pb-4">
          {carSlides.map((car, index) => (
            <button
              key={car.name}
              type="button"
              aria-label={`Show ${car.name} self drive car`}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "w-9 bg-red-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM FEATURES
        ================================================== */}

        <div
          className="
            relative
            z-20
            shrink-0
            bg-gradient-to-r
            from-[#ff4e50]
            via-[#ff715b]
            to-[#ff405f]
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1600px]
              grid-cols-1
              divide-y
              divide-white/20
              px-5
              sm:px-8
              md:grid-cols-3
              md:divide-x
              md:divide-y-0
              lg:px-12
              xl:px-16
            "
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="
                  flex
                  items-center
                  gap-4
                  px-1
                  py-4
                  sm:px-4
                  lg:gap-5
                  lg:py-5
                "
              >
                <motion.div
                  whileHover={{
                    rotate: -7,
                    scale: 1.05,
                  }}
                  className="
                    flex
                    h-13
                    w-13
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#07182f]
                    text-[20px]
                    text-white
                    shadow-xl
                    lg:h-16
                    lg:w-16
                    lg:text-[25px]
                  "
                >
                  {feature.icon}
                </motion.div>

                <div>
                  <h3 className="font-serif text-[17px] font-bold text-white lg:text-[21px]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-[10px] font-medium text-white/90 lg:text-[12px]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DESKTOP FLOATING CALL BUTTON
      ===================================================== */}

      <motion.a
        href="tel:+919704143260"
        aria-label="Call Tiya Self Drive Cars Tirupati"
        onClick={() => {
          trackEvent("phone_click", {
            location: "hero_desktop_floating",
            button_text: "Call",
          });
        }}
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.45,
        }}
        whileHover={{
          scale: 1.1,
          rotate: 8,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="
          fixed
          bottom-6
          left-6
          z-[9999]
          hidden
          h-[68px]
          w-[68px]
          items-center
          justify-center
          rounded-full
          border-4
          border-white
          bg-red-600
          text-white
          shadow-[0_10px_35px_rgba(220,38,38,0.45)]
          transition-all
          duration-300
          hover:bg-red-700
          md:flex
        "
      >
        <FaPhoneAlt className="text-[30px]" />
      </motion.a>

      {/* =====================================================
          DESKTOP FLOATING WHATSAPP BUTTON
      ===================================================== */}

      <motion.a
        href="https://wa.me/919704143260?text=Hello%20Tiya%20Self%20Drive%20Cars,%20I%20would%20like%20to%20book%20a%20self%20drive%20car%20in%20Tirupati."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book self drive car in Tirupati through WhatsApp"
        onClick={() => {
          trackEvent("whatsapp_click", {
            location: "hero_desktop_floating",
            button_text: "WhatsApp",
          });
        }}
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.45,
        }}
        whileHover={{
          scale: 1.1,
          rotate: -8,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="
          fixed
          bottom-6
          right-6
          z-[9999]
          hidden
          h-[68px]
          w-[68px]
          items-center
          justify-center
          rounded-full
          border-4
          border-white
          bg-green-500
          text-white
          shadow-[0_10px_35px_rgba(34,197,94,0.45)]
          transition-all
          duration-300
          hover:bg-green-600
          md:flex
        "
      >
        <FaWhatsapp className="text-[33px]" />
      </motion.a>

      {/* =====================================================
          MOBILE FIXED BOTTOM FOOTER
      ===================================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-[9999]
          border-t
          border-gray-200
          bg-white
          px-2
          py-2
          shadow-[0_-6px_25px_rgba(0,0,0,0.12)]
          md:hidden
        "
      >
        <div className="grid grid-cols-2 gap-2">
          {/* CALL */}

          <a
            href="tel:+919704143260"
            aria-label="Call Tiya Self Drive Cars Tirupati"
            onClick={() => {
              trackEvent("phone_click", {
                location: "mobile_bottom_bar",
                button_text: "Call Now",
              });
            }}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-red-600
              px-4
              py-3.5
              text-[13px]
              font-bold
              text-white
              shadow-sm
              transition
              active:scale-[0.98]
            "
          >
            <FaPhoneAlt className="text-[17px]" />

            <span>Call Now</span>
          </a>

          {/* WHATSAPP */}

          <a
            href="https://wa.me/919704143260?text=Hello%20Tiya%20Self%20Drive%20Cars,%20I%20would%20like%20to%20book%20a%20self%20drive%20car%20in%20Tirupati."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book self drive car in Tirupati through WhatsApp"
            onClick={() => {
              trackEvent("whatsapp_click", {
                location: "mobile_bottom_bar",
                button_text: "WhatsApp",
              });
            }}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-green-500
              px-4
              py-3.5
              text-[13px]
              font-bold
              text-white
              shadow-sm
              transition
              active:scale-[0.98]
            "
          >
            <FaWhatsapp className="text-[19px]" />

            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;