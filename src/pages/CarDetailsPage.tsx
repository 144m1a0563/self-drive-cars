import {
  FaArrowLeft,
  FaCarSide,
  FaCheck,
  FaClock,
  FaCogs,
  FaGasPump,
  FaPhoneAlt,
  FaRoad,
  FaShieldAlt,
  FaSuitcase,
  FaUsers,
  FaWhatsapp,
  FaWind,
} from "react-icons/fa";

import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

import { motion } from "framer-motion";
import { cars } from "../data/cars";

const WHATSAPP_NUMBER = "919704143260";

const CarDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const car = cars.find((item) => item.slug === slug);

  if (!car) {
    return <Navigate to="/cars" replace />;
  }

  const recommendedCars = cars
    .filter((item) => item.slug !== car.slug)
    .slice(0, 3);

  const specifications = [
    {
      label: "Fuel Type",
      value: car.fuel,
      icon: <FaGasPump />,
    },
    {
      label: "Capacity",
      value: `${car.seats} Seater`,
      icon: <FaUsers />,
    },
    {
      label: "Engine",
      value: car.engine,
      icon: <FaCarSide />,
    },
    {
      label: "Mileage",
      value: car.mileage,
      icon: <FaWind />,
    },
    {
      label: "Safety",
      value: car.safety,
      icon: <FaShieldAlt />,
    },
    {
      label: "Gearbox",
      value: car.transmission,
      icon: <FaCogs />,
    },
  ];

  const createWhatsAppUrl = (
    duration?: string,
    price?: number,
    includedKm?: number
  ) => {
    const message = duration
      ? `
Hello Vamsi Self Drive Cars,

I would like to book the following car:

Car: ${car.name}
Package: ${duration}
Price: ₹${price?.toLocaleString("en-IN")}
Included Distance: ${includedKm} KM

Please confirm availability and booking details.
        `.trim()
      : `
Hello Vamsi Self Drive Cars,

I would like to book ${car.name}.

Please confirm availability, rental price and booking details.
        `.trim();

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <main className="bg-white">
      {/* Main vehicle details */}
      <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-10 h-[380px] w-[380px] rounded-full bg-red-50 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-50 blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <Link
            to="/cars"
            className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[2px] text-red-600 transition-colors hover:text-black"
          >
            <FaArrowLeft />
            Back to Cars
          </Link>

          <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Vehicle image */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="relative min-h-[340px] overflow-hidden rounded-[28px] bg-gray-100 shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:min-h-[450px]">
                <img
                  src={car.image}
                  alt={car.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                <div className="absolute left-5 top-5 space-y-2">
                  <span className="block w-fit rounded-lg bg-red-600 px-4 py-2 text-[10px] font-bold uppercase tracking-[1px] text-white">
                    {car.category}
                  </span>

                  <span className="block w-fit rounded-lg bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-[1px] text-white">
                    {car.brand}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-[20px] border border-white/20 bg-black/45 p-5 text-white backdrop-blur-md">
                  <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/65">
                    Starting From
                  </p>

                  <p className="mt-2 text-[28px] font-extrabold">
                    ₹
                    {Math.min(
                      ...car.rentalPackages.map(
                        (rentalPackage) =>
                          rentalPackage.price
                      )
                    ).toLocaleString("en-IN")}

                    <span className="ml-2 text-[11px] font-medium text-white/65">
                      onwards
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vehicle information */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[5px] text-red-600 sm:text-[13px]">
                Vehicle Details
              </p>

              <h1 className="mt-5 text-[42px] font-extrabold uppercase leading-[0.95] tracking-[-2px] text-black sm:text-[56px] lg:text-[66px]">
                {car.name}
              </h1>

              <p className="mt-6 text-[14px] leading-8 text-gray-600 sm:text-[16px]">
                {car.description}
              </p>

              {/* Specifications */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {specifications.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[20px] border border-gray-200 bg-[#fafafa] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg sm:p-5"
                  >
                    <span className="text-[19px] text-red-600">
                      {item.icon}
                    </span>

                    <p className="mt-4 text-[9px] font-bold uppercase tracking-[1.5px] text-red-600">
                      {item.label}
                    </p>

                    <p className="mt-2 text-[13px] font-bold text-black sm:text-[14px]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Booking buttons */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-5 text-[12px] font-bold uppercase tracking-[1px] text-white shadow-lg shadow-red-600/20 transition-colors hover:bg-black"
                >
                  <FaWhatsapp size={20} />
                  Book on WhatsApp
                </a>

                <a
                  href="tel:+919704143260"
                  className="flex items-center justify-center gap-3 rounded-xl border-2 border-black px-6 py-5 text-[12px] font-bold uppercase tracking-[1px] text-black transition-colors hover:bg-black hover:text-white"
                >
                  <FaPhoneAlt />
                  Call to Book
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rental packages */}
      <section className="bg-[#07182f] py-16 text-white sm:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-[850px] text-center">
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-[11px] font-bold uppercase tracking-[5px] text-red-400"
            >
              Rental Packages
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="mt-4 text-[36px] font-extrabold uppercase leading-[1.05] sm:text-[48px] lg:text-[58px]"
            >
              Choose Your
              <span className="block text-red-500">
                Rental Plan
              </span>
            </motion.h2>

            <p className="mx-auto mt-5 max-w-[650px] text-[13px] leading-7 text-white/55 sm:text-[15px]">
              Select the package that matches your journey.
              Extra kilometre charges apply after the included
              kilometre limit.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1050px] grid-cols-1 gap-6 md:grid-cols-2">
            {car.rentalPackages.map(
              (rentalPackage, index) => (
                <motion.article
                  key={rentalPackage.duration}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition-all hover:border-red-500/40 hover:bg-white/[0.09] sm:p-8"
                >
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-red-600/15 blur-3xl" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-red-400">
                          Rental Duration
                        </p>

                        <h3 className="mt-3 text-[30px] font-extrabold uppercase sm:text-[36px]">
                          {rentalPackage.duration}
                        </h3>
                      </div>

                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-[22px] text-white shadow-lg shadow-red-600/25">
                        <FaClock />
                      </span>
                    </div>

                    <div className="mt-8 border-b border-white/10 pb-7">
                      <p className="text-[10px] font-semibold uppercase tracking-[2px] text-white/40">
                        Package Price
                      </p>

                      <p className="mt-2 text-[42px] font-extrabold leading-none text-white sm:text-[48px]">
                        ₹
                        {rentalPackage.price.toLocaleString(
                          "en-IN"
                        )}
                      </p>
                    </div>

                    <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                        <span className="text-[20px] text-red-400">
                          <FaRoad />
                        </span>

                        <p className="mt-4 text-[9px] font-bold uppercase tracking-[1.8px] text-white/40">
                          Included KM
                        </p>

                        <p className="mt-2 text-[22px] font-extrabold">
                          {rentalPackage.includedKm} KM
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                        <span className="text-[20px] text-red-400">
                          <FaCarSide />
                        </span>

                        <p className="mt-4 text-[9px] font-bold uppercase tracking-[1.8px] text-white/40">
                          Extra KM
                        </p>

                        <p className="mt-2 text-[22px] font-extrabold">
                          ₹
                          {rentalPackage.extraKmCharge}
                          <span className="text-[11px] font-medium text-white/45">
                            /KM
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 space-y-3">
                      {[
                        "Fuel charges are not included",
                        "Valid driving licence is required",
                        "Security deposit may apply",
                      ].map((information) => (
                        <div
                          key={information}
                          className="flex items-center gap-3 text-[12px] text-white/60"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-[9px] text-red-400">
                            <FaCheck />
                          </span>

                          {information}
                        </div>
                      ))}
                    </div>

                    <a
                      href={createWhatsAppUrl(
                        rentalPackage.duration,
                        rentalPackage.price,
                        rentalPackage.includedKm
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-[12px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-white hover:text-black"
                    >
                      <FaWhatsapp size={18} />
                      Book This Package
                    </a>
                  </div>
                </motion.article>
              )
            )}
          </div>

          <p className="mt-8 text-center text-[11px] leading-6 text-white/40">
            Package prices, kilometre limits and charges may
            change during weekends, holidays and peak seasons.
          </p>
        </div>
      </section>

      {/* Features and trip information */}
      <section className="bg-[#fafafa] py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[58%_42%] lg:gap-16">
            {/* Features */}
            <div>
              <h2 className="text-[34px] font-extrabold uppercase text-black sm:text-[42px]">
                Premium Features
              </h2>

              <div className="mt-3 h-[4px] w-14 bg-red-600" />

              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {car.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4 rounded-[18px] border border-gray-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                      <FaCheck />
                    </span>

                    <span className="text-[12px] font-bold uppercase text-black">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trip planning */}
            <div>
              <h2 className="text-[34px] font-extrabold uppercase text-black sm:text-[42px]">
                Trip Planning
              </h2>

              <div className="mt-3 h-[4px] w-14 bg-red-600" />

              <div className="mt-8 flex flex-wrap gap-3">
                {car.tripTypes.map((trip) => (
                  <span
                    key={trip}
                    className="rounded-full bg-red-600 px-6 py-3 text-[11px] font-bold uppercase tracking-[1px] text-white shadow-lg shadow-red-600/15"
                  >
                    {trip}
                  </span>
                ))}
              </div>

              <div className="mt-10 rounded-[28px] bg-black p-7 text-white sm:p-9">
                <h3 className="border-l-[6px] border-red-600 pl-4 text-[24px] font-bold uppercase sm:text-[28px]">
                  Additional Information
                </h3>

                <div className="mt-7 divide-y divide-white/10">
                  <div className="flex items-center justify-between py-4">
                    <span className="text-[10px] font-bold uppercase tracking-[1px] text-gray-500">
                      Boot Space
                    </span>

                    <span className="flex items-center gap-2 text-[15px] font-bold">
                      <FaSuitcase />
                      {car.bootSpace}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-5 py-4">
                    <span className="text-[10px] font-bold uppercase tracking-[1px] text-gray-500">
                      Air Conditioning
                    </span>

                    <span className="text-right text-[14px] font-bold">
                      {car.airConditioning}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    "Pickup and drop available across Tirupati",
                    "Fuel policy: same-to-same",
                    "Valid driving licence and Aadhaar required",
                    "Traffic fines are payable by the customer",
                    "Vehicle must be returned on time",
                  ].map((information) => (
                    <div
                      key={information}
                      className="flex items-start gap-4 text-[13px] text-gray-300"
                    >
                      <FaCheck className="mt-1 shrink-0 text-red-600" />

                      {information}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended cars */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-custom">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[5px] text-red-600">
                Recommendations
              </p>

              <h2 className="mt-5 text-[38px] font-extrabold uppercase leading-[1] text-black sm:text-[52px]">
                Explore Other

                <span className="block text-red-600">
                  Premium Cars
                </span>
              </h2>
            </div>

            <Link
              to="/cars"
              className="inline-flex items-center gap-4 text-[12px] font-bold uppercase tracking-[2px] text-red-600"
            >
              View All Fleet

              <span className="h-[2px] w-10 bg-red-600" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {recommendedCars.map((recommendedCar) => {
              const startingPrice = Math.min(
                ...recommendedCar.rentalPackages.map(
                  (rentalPackage) =>
                    rentalPackage.price
                )
              );

              return (
                <Link
                  key={recommendedCar.id}
                  to={`/car/${recommendedCar.slug}`}
                  className="group overflow-hidden rounded-[24px] border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-[280px] overflow-hidden bg-[#f8f8f8]">
                    <img
                      src={recommendedCar.image}
                      alt={recommendedCar.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 rounded-lg bg-red-600 px-4 py-2 text-[9px] font-bold uppercase tracking-[1px] text-white">
                      {recommendedCar.category}
                    </span>

                    <div className="absolute bottom-5 left-5 text-white">
                      <p className="text-[9px] font-semibold uppercase tracking-[1.5px] text-white/65">
                        Starting From
                      </p>

                      <p className="mt-1 text-[24px] font-extrabold">
                        ₹
                        {startingPrice.toLocaleString(
                          "en-IN"
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-red-600">
                      {recommendedCar.brand}
                    </p>

                    <h3 className="mt-3 text-[25px] font-extrabold uppercase text-black transition-colors group-hover:text-red-600">
                      {recommendedCar.name}
                    </h3>

                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
                      <span className="text-[11px] font-semibold text-gray-500">
                        View rental plans
                      </span>

                      <FaArrowLeft className="rotate-180 text-red-600 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CarDetailsPage;