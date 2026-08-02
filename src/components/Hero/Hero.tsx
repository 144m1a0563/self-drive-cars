import { useEffect, useState, type ReactNode } from "react";
import {
  FaPhoneAlt,
  FaTruck,
  FaRegThumbsUp,
  FaWhatsapp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

interface CarSlide {
  name: string;
  image: string;
  accent: string;
}

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

const carSlides: CarSlide[] = [
  {
    name: "MARUTI SWIFT",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=90",
    accent: "from-red-500 to-rose-500",
  },
  {
    name: "HYUNDAI i20",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=90",
    accent: "from-blue-600 to-cyan-500",
  },
  {
    name: "TOYOTA INNOVA",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90",
    accent: "from-gray-700 to-black",
  },
  {
    name: "MAHINDRA XUV700",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=90",
    accent: "from-green-600 to-emerald-500",
  },
  {
    name: "KIA SELTOS",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=90",
    accent: "from-purple-600 to-pink-500",
  },
];

const features: Feature[] = [
  {
    title: "Easy Bookings",
    description: "Book over phone at your convenience",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Door Drop & Pickup",
    description: "Doorstep delivery and pickup facility",
    icon: <FaTruck />,
  },
  {
    title: "Well Maintained",
    description: "Clean and maintained cars for every trip",
    icon: <FaRegThumbsUp />,
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);

  useEffect(() => {
    if (sliderPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((previous) =>
        previous === carSlides.length - 1 ? 0 : previous + 1
      );
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [sliderPaused]);

  const previousSlide = () => {
    setActiveSlide((previous) =>
      previous === 0 ? carSlides.length - 1 : previous - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((previous) =>
      previous === carSlides.length - 1 ? 0 : previous + 1
    );
  };

  const currentCar = carSlides[activeSlide];

  return (
    <section
      id="home"
      onMouseEnter={() => setSliderPaused(true)}
      onMouseLeave={() => setSliderPaused(false)}
      className="
        relative
        flex
        min-h-[calc(100dvh-76px)]
        flex-col
        overflow-hidden
        bg-white
        lg:h-[calc(100dvh-96px)]
        lg:min-h-[650px]
      "
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-red-50 blur-3xl" />

        <div className="absolute left-[35%] top-10 h-[300px] w-[300px] rounded-full bg-orange-50 blur-3xl" />

        <div className="absolute bottom-24 left-10 h-36 w-36 rounded-full bg-red-100/50 blur-3xl" />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex min-h-0 flex-1 items-center">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1600px]
            grid-cols-1
            items-center
            gap-5
            px-5
            py-8
            sm:px-8
            lg:grid-cols-[40%_60%]
            lg:px-12
            lg:py-3
            xl:px-16
          "
        >
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-20 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="
                mb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[4px]
                text-gray-400
                sm:text-[13px]
              "
            >
              Explore Tirupati Your Way
            </motion.p>

            <h1 className="leading-[0.84] tracking-[-4px] sm:tracking-[-6px]">
              <span
                className="
                  block
                  font-serif
                  text-[50px]
                  font-bold
                  text-red-600
                  sm:text-[70px]
                  lg:text-[72px]
                  xl:text-[90px]
                  2xl:text-[104px]
                "
              >
                SELF DRIVE
              </span>

              <span
                className="
                  mt-2
                  block
                  font-serif
                  text-[82px]
                  font-black
                  text-black
                  sm:text-[112px]
                  lg:text-[120px]
                  xl:text-[154px]
                  2xl:text-[176px]
                "
              >
                CARS
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-5
                max-w-[500px]
                text-[12px]
                leading-6
                text-gray-500
                sm:text-[14px]
                lg:mx-0
              "
            >
              Choose your favourite car and enjoy complete freedom, privacy,
              comfort and affordable self-drive rentals in Tirupati.
            </p>
          </motion.div>

          {/* Car slider */}
          <div
            className="
              relative
              min-h-[300px]
              sm:min-h-[390px]
              lg:h-full
              lg:min-h-[430px]
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCar.name}
                initial={{
                  opacity: 0,
                  x: 100,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -80,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Car badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.18,
                    duration: 0.4,
                  }}
                  className={`
                    absolute
                    left-1/2
                    top-0
                    z-20
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-b-[28px]
                    rounded-t-[10px]
                    bg-gradient-to-r
                    ${currentCar.accent}
                    px-7
                    py-2.5
                    text-[15px]
                    font-extrabold
                    italic
                    text-white
                    shadow-xl
                    sm:px-10
                    sm:text-[20px]
                    lg:text-[24px]
                  `}
                >
                  {currentCar.name}
                </motion.div>

                {/* Car image container */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    mt-12
                    h-[245px]
                    w-full
                    overflow-hidden
                    rounded-[26px]
                    bg-gray-100
                    shadow-[0_30px_55px_rgba(0,0,0,0.15)]
                    sm:h-[330px]
                    lg:h-[390px]
                    xl:h-[430px]
                  "
                >
                  <img
                    src={currentCar.image}
                    alt={currentCar.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/30
                      bg-white/85
                      px-4
                      py-3
                      backdrop-blur-md
                      sm:bottom-5
                      sm:left-5
                      sm:right-5
                    "
                  >
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[2px] text-gray-400">
                        Available Now
                      </p>

                      <h3 className="mt-1 text-[14px] font-bold text-gray-900 sm:text-[17px]">
                        {currentCar.name}
                      </h3>
                    </div>

                    <a
                      href="#book"
                      className="
                        rounded-full
                        bg-red-600
                        px-4
                        py-2
                        text-[10px]
                        font-semibold
                        text-white
                        transition-colors
                        hover:bg-black
                        sm:text-[11px]
                      "
                    >
                      Book Now
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Previous arrow */}
            <button
              type="button"
              aria-label="Previous car"
              onClick={previousSlide}
              className="
                absolute
                left-2
                top-1/2
                z-30
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white/90
                text-gray-800
                shadow-lg
                backdrop-blur
                transition-all
                hover:border-red-600
                hover:bg-red-600
                hover:text-white
                sm:left-4
                lg:h-11
                lg:w-11
              "
            >
              <FaChevronLeft />
            </button>

            {/* Next arrow */}
            <button
              type="button"
              aria-label="Next car"
              onClick={nextSlide}
              className="
                absolute
                right-2
                top-1/2
                z-30
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white/90
                text-gray-800
                shadow-lg
                backdrop-blur
                transition-all
                hover:border-red-600
                hover:bg-red-600
                hover:text-white
                sm:right-4
                lg:h-11
                lg:w-11
              "
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Slider dots */}
      <div className="relative z-20 flex shrink-0 justify-center gap-2 pb-3">
        {carSlides.map((car, index) => (
          <button
            key={car.name}
            type="button"
            aria-label={`Show ${car.name}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-9 bg-red-600"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Bottom features */}
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
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                whileHover={{ rotate: -7, scale: 1.05 }}
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

      {/* Floating phone on left */}
      <motion.a
        href="tel:+919052885299"
        aria-label="Call Cherry Cars"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.45,
        }}
        whileHover={{ scale: 1.08 }}
        className="
          fixed
          bottom-5
          left-5
          z-40
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border-[5px]
          border-white
          bg-[#07182f]
          text-[22px]
          text-white
          shadow-2xl
          md:bottom-6
          md:left-7
          lg:h-[66px]
          lg:w-[66px]
          lg:text-[27px]
        "
      >
        <FaPhoneAlt />
      </motion.a>

      {/* Floating WhatsApp on right */}
      <motion.a
        href="https://wa.me/919052885299"
        target="_blank"
        rel="noreferrer"
        aria-label="Book through WhatsApp"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.45,
        }}
        whileHover={{ scale: 1.08 }}
        className="
          fixed
          bottom-5
          right-5
          z-40
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border-[5px]
          border-white
          bg-green-500
          text-[25px]
          text-white
          shadow-2xl
          md:bottom-6
          md:right-7
          lg:h-[66px]
          lg:w-[66px]
          lg:text-[30px]
        "
      >
        <FaWhatsapp />
      </motion.a>
    </section>
  );
};

export default Hero;