import { useEffect, useState, type ReactNode } from "react";
import {
  FaPhoneAlt,
  FaTruck,
  FaRegThumbsUp,
  FaWhatsapp,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

interface CarSlide {
  name: string;
  image: string;
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
  },
  {
    name: "HYUNDAI i20",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=90",
  },
  {
    name: "TOYOTA INNOVA",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90",
  },
  {
    name: "MAHINDRA XUV700",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=90",
  },
  {
    name: "KIA SELTOS",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=90",
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

  const currentCar = carSlides[activeSlide];

  return (
    <section
      id="home"
      onMouseEnter={() => setSliderPaused(true)}
      onMouseLeave={() => setSliderPaused(false)}
      className="
        relative
        flex
        min-h-[calc(100dvh-80px)]
        flex-col
        overflow-hidden
        bg-white
        lg:min-h-[calc(100dvh-96px)]
      "
    >
      {/* Soft background decorations */}
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
            gap-8
            px-5
            py-10
            sm:px-8
            lg:grid-cols-[40%_60%]
            lg:px-12
            lg:py-6
            xl:px-16
          "
        >
          {/* Left content */}
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

          {/* Clean car slider */}
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
                {/* Car image only */}
                <motion.img
                  src={currentCar.image}
                  alt={currentCar.name}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  draggable={false}
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

                {/* Car name only */}
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slider dots */}
      <div className="relative z-20 flex shrink-0 justify-center gap-2 pb-4">
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

      {/* Floating call button */}
      <motion.a
        href="tel:+919704143260"
        aria-label="Call Vamsi Self Drive Cars"
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
          bottom-5
          left-5
          z-[9999]
          flex
          h-16
          w-16
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
          md:bottom-6
          md:left-6
          lg:h-[68px]
          lg:w-[68px]
        "
      >
        <FaPhoneAlt className="text-[26px] lg:text-[30px]" />
      </motion.a>

      {/* Floating WhatsApp button */}
      <motion.a
        href="https://wa.me/919704143260?text=Hello%20Vamsi%20Self%20Drive%20Cars,%20I%20would%20like%20to%20book%20a%20car."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book through WhatsApp"
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
          bottom-5
          right-5
          z-[9999]
          flex
          h-16
          w-16
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
          md:bottom-6
          md:right-6
          lg:h-[68px]
          lg:w-[68px]
        "
      >
        <FaWhatsapp className="text-[29px] lg:text-[33px]" />
      </motion.a>
    </section>
  );
};

export default Hero;