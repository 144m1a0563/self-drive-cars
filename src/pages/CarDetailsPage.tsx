import {
  FaArrowLeft,
  FaCarSide,
  FaCheck,
  FaCogs,
  FaGasPump,
  FaPhoneAlt,
  FaShieldAlt,
  FaSuitcase,
  FaUsers,
  FaWhatsapp,
  FaWind,
} from "react-icons/fa";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { cars } from "../data/cars";

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

  return (
    <main className="bg-white">
      {/* Car details */}
      <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
        <div className="container-custom">
          <Link
            to="/cars"
            className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[2px] text-red-600 transition-colors hover:text-black"
          >
            <FaArrowLeft />
            Back to Cars
          </Link>

          <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative min-h-[340px] overflow-hidden rounded-[28px] bg-gray-100 shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:min-h-[450px]">
                <img
                  src={car.image}
                  alt={car.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 space-y-2">
                  <span className="block w-fit rounded-lg bg-red-600 px-4 py-2 text-[10px] font-bold uppercase tracking-[1px] text-white">
                    {car.category}
                  </span>

                  <span className="block w-fit rounded-lg bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-[1px] text-white">
                    {car.brand}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
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

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {specifications.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[20px] border border-gray-200 bg-[#fafafa] p-4 sm:p-5"
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

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href={`https://wa.me/919603785823?text=${encodeURIComponent(
                    `Hello, I want to book ${car.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-5 text-[12px] font-bold uppercase tracking-[1px] text-white shadow-lg shadow-red-600/20 transition-colors hover:bg-black"
                >
                  <FaWhatsapp size={20} />
                  Book on WhatsApp
                </a>

                <a
                  href="tel:+919603785823"
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

      {/* Features */}
      <section className="bg-[#fafafa] py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[58%_42%] lg:gap-16">
            <div>
              <h2 className="text-[34px] font-extrabold uppercase text-black sm:text-[42px]">
                Premium Features
              </h2>

              <div className="mt-3 h-[4px] w-14 bg-red-600" />

              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {car.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4 rounded-[18px] border border-gray-200 bg-white px-6 py-5 shadow-sm"
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

            <div>
              <h2 className="text-[34px] font-extrabold uppercase text-black sm:text-[42px]">
                Trip Planning
              </h2>

              <div className="mt-3 h-[4px] w-14 bg-red-600" />

              <div className="mt-8 flex flex-wrap gap-3">
                {car.tripTypes.map((trip) => (
                  <span
                    key={trip}
                    className="rounded-full bg-red-600 px-6 py-3 text-[11px] font-bold uppercase tracking-[1px] text-white"
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
                <span className="block text-red-600">Premium Cars</span>
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
            {recommendedCars.map((recommendedCar) => (
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

                  <span className="absolute left-5 top-5 rounded-lg bg-red-600 px-4 py-2 text-[9px] font-bold uppercase tracking-[1px] text-white">
                    {recommendedCar.category}
                  </span>
                </div>

                <div className="p-7">
                  <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-red-600">
                    {recommendedCar.brand}
                  </p>

                  <h3 className="mt-3 text-[25px] font-extrabold uppercase text-black">
                    {recommendedCar.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CarDetailsPage;