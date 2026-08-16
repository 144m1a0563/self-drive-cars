import { useMemo, useState, type ReactNode } from "react";
import {
  FaArrowRight,
  FaCarSide,
  FaCheck,
  FaClock,
  FaCogs,
  FaGasPump,
  FaPhoneAlt,
  FaRoad,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { cars, type Car } from "../../data/cars";

interface SpecificationProps {
  icon: ReactNode;
  label: string;
  value: string;
}

type CarFilter = "All Cars" | Car["category"];

const filters: CarFilter[] = [
  "All Cars",
  "Hatchback",
  "Sedan",
  "SUV",
  "MUV",
];

const Specification = ({
  icon,
  label,
  value,
}: SpecificationProps) => {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-3 py-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-sm text-red-600 shadow-sm">
        {icon}
      </span>

      <div className="min-w-0">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-400">
          {label}
        </p>

        <p className="mt-0.5 truncate text-[12px] font-semibold text-gray-800">
          {value}
        </p>
      </div>
    </div>
  );
};

const Fleet = () => {
  const [activeFilter, setActiveFilter] =
    useState<CarFilter>("All Cars");

  const filteredCars = useMemo(() => {
    if (activeFilter === "All Cars") {
      return cars;
    }

    return cars.filter(
      (car) => car.category === activeFilter
    );
  }, [activeFilter]);

  const getStartingPrice = (car: Car): number => {
    if (!car.rentalPackages.length) {
      return car.price;
    }

    return Math.min(
      ...car.rentalPackages.map(
        (rentalPackage) => rentalPackage.price
      )
    );
  };

  const getStartingPackage = (car: Car) => {
    if (!car.rentalPackages.length) {
      return null;
    }

    return car.rentalPackages.reduce(
      (lowestPackage, currentPackage) =>
        currentPackage.price < lowestPackage.price
          ? currentPackage
          : lowestPackage
    );
  };

  return (
    <section
      id="cars"
      className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-24"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-red-50 blur-3xl" />

        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-[850px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-bold uppercase tracking-[5px] text-red-600 sm:text-[13px]"
          >
            Our Premium Fleet
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.1,
            }}
            className="mt-4 font-serif text-[38px] font-black leading-[1.05] tracking-[-1.5px] text-black sm:text-[50px] lg:text-[64px]"
          >
            Choose the perfect car

            <span className="block text-red-600">
              for your journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="mx-auto mt-5 max-w-[680px] text-[13px] leading-7 text-gray-500 sm:text-[15px]"
          >
            Explore clean, reliable and well-maintained
            self-drive cars for city travel, temple trips,
            business journeys and weekend getaways.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative overflow-hidden rounded-full border px-6 py-3 text-[12px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "scale-105 border-red-600 bg-gradient-to-r from-red-600 to-red-500 text-white shadow-[0_10px_30px_rgba(220,38,38,0.35)]"
                    : "border-gray-200 bg-gradient-to-r from-white to-gray-50 text-gray-700 hover:-translate-y-1 hover:border-red-500 hover:from-red-50 hover:to-orange-50 hover:text-red-600 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                }`}
              >
                <span className="relative z-10">
                  {filter}
                </span>
              </button>
            );
          })}
        </div>

        {/* Fleet cards */}
        {filteredCars.length > 0 ? (
          <motion.div
            layout
            className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredCars.map((car, index) => {
              const startingPrice =
                getStartingPrice(car);

              const startingPackage =
                getStartingPackage(car);

              return (
                <motion.article
                  layout
                  key={car.id}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.07)] transition-shadow duration-300 hover:shadow-[0_26px_70px_rgba(0,0,0,0.12)]"
                >
                  {/* Image */}
                  {/* Car Image */}
<Link
  to={`/car/${car.slug}`}
  aria-label={`Open ${car.name} details`}
  className="block"
>
  <div className="relative h-[235px] overflow-hidden sm:h-[260px]">

    <motion.img
      src={car.image}
      alt={`${car.name} self drive car in Tirupati`}
      loading="lazy"
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        duration: 0.5,
      }}
      className="h-full w-full object-contain"
    />

    {/* Bottom dark gradient only */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

    {/* Category */}
    <span className="absolute left-5 top-5 rounded-full border border-gray-100 bg-white/95 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-800 shadow-sm backdrop-blur">
      {car.category}
    </span>

    {/* Price */}
    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[2px] text-white/80">
          Starting from
        </p>

        <p className="mt-1 text-[25px] font-extrabold text-white">
          ₹{startingPrice.toLocaleString("en-IN")}

          {startingPackage && (
            <span className="ml-1 text-[10px] font-medium text-white/80">
              / {startingPackage.duration}
            </span>
          )}
        </p>
      </div>

      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
        <FaCarSide />
      </span>
    </div>
  </div>
</Link>

                  {/* Card body */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[2px] text-red-500">
                          {car.brand}
                        </p>

                        <Link to={`/car/${car.slug}`}>
                          <h3 className="mt-1 text-[22px] font-bold tracking-[-0.5px] text-gray-950 transition-colors hover:text-red-600">
                            {car.name}
                          </h3>
                        </Link>
                      </div>

                      <span className="rounded-full bg-green-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-green-600">
                        Available
                      </span>
                    </div>

                    {/* Specifications */}
                    <div className="mt-5 grid grid-cols-2 gap-2.5">
                      <Specification
                        icon={<FaUsers />}
                        label="Capacity"
                        value={`${car.seats} Seats`}
                      />

                      <Specification
                        icon={<FaGasPump />}
                        label="Fuel"
                        value={car.fuel}
                      />

                      <Specification
                        icon={<FaCogs />}
                        label="Gear"
                        value={car.transmission}
                      />

                      <Specification
                        icon={<FaCarSide />}
                        label="Type"
                        value={car.category}
                      />
                    </div>

                    {/* Rental packages */}
                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {car.rentalPackages.map(
                        (rentalPackage) => (
                          <div
                            key={rentalPackage.duration}
                            className="rounded-2xl border border-gray-100 bg-[#fafafa] p-4 transition-all duration-300 hover:border-red-200 hover:bg-red-50/40"
                          >
                            <div className="flex items-center gap-2 text-red-600">
                              <FaClock size={12} />

                              <p className="text-[9px] font-bold uppercase tracking-[1.3px]">
                                {rentalPackage.duration}
                              </p>
                            </div>

                            <p className="mt-3 text-[20px] font-extrabold text-gray-950">
                              ₹
                              {rentalPackage.price.toLocaleString(
                                "en-IN"
                              )}
                            </p>

                            <div className="mt-2 flex items-center gap-2 text-[10px] font-medium text-gray-500">
                              <FaRoad className="text-red-500" />

                              {rentalPackage.includedKm} KM
                              included
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    {/* Features */}
                    <div className="mt-5 space-y-2.5">
                      {car.features
                        .slice(0, 3)
                        .map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 text-[12px] font-medium text-gray-600"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[8px] text-red-600">
                              <FaCheck />
                            </span>

                            {feature}
                          </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-6 grid grid-cols-[1fr_auto] gap-3">
                      <Link
                        to={`/car/${car.slug}`}
                        className="group/button flex items-center justify-center gap-3 rounded-xl bg-red-600 px-5 py-3.5 text-[12px] font-semibold text-white shadow-lg shadow-red-600/20 transition-all hover:bg-black"
                      >
                        View Details

                        <FaArrowRight
                          size={11}
                          className="transition-transform group-hover/button:translate-x-1"
                        />
                      </Link>

                      <a
                        href="tel:+919704143260"
                        aria-label={`Call to book ${car.name}`}
                        className="flex h-[48px] w-[48px] items-center justify-center rounded-xl border border-gray-200 bg-white text-red-600 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white"
                      >
                        <FaPhoneAlt size={14} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        ) : (
          <div className="mt-12 rounded-[24px] border border-gray-200 bg-white px-6 py-14 text-center">
            <FaCarSide className="mx-auto text-[38px] text-red-500" />

            <h3 className="mt-5 text-[22px] font-bold text-gray-950">
              No cars found
            </h3>

            <p className="mt-2 text-[13px] text-gray-500">
              There are currently no vehicles available in
              this category.
            </p>

            <button
              type="button"
              onClick={() => setActiveFilter("All Cars")}
              className="mt-6 rounded-xl bg-red-600 px-6 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-black"
            >
              View All Cars
            </button>
          </div>
        )}

        {/* Bottom booking banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-14 overflow-hidden rounded-[28px] bg-[#07182f] px-6 py-8 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-red-400">
              Need help choosing?
            </p>

            <h3 className="mt-2 font-serif text-[27px] font-bold sm:text-[34px]">
              Talk to our booking team
            </h3>

            <p className="mt-2 text-[12px] text-white/65 sm:text-[13px]">
              We will help you select the best car and rental
              package for your journey.
            </p>
          </div>

          <a
            href="tel:+919704143260"
            className="mt-6 inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-[12px] font-semibold text-white transition-colors hover:bg-white hover:text-black lg:mt-0"
          >
            <FaPhoneAlt />

            +91 97041 43260
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Fleet;