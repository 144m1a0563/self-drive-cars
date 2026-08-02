import { useState, type ReactNode } from "react";
import {
  FaCarSide,
  FaGasPump,
  FaUsers,
  FaCogs,
  FaPhoneAlt,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface Car {
  id: number;
  name: string;
  category: "Hatchback" | "Sedan" | "SUV" | "MUV";
  image: string;
  price: number;
  seats: number;
  fuel: string;
  transmission: string;
  features: string[];
}

interface SpecificationProps {
  icon: ReactNode;
  label: string;
  value: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: "Maruti Swift",
    category: "Hatchback",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=85",
    price: 1800,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    features: ["Clean Interior", "AC Available", "Unlimited Freedom"],
  },
  {
    id: 2,
    name: "Maruti Baleno",
    category: "Hatchback",
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=85",
    price: 2000,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    features: ["Spacious Cabin", "Bluetooth Audio", "Well Maintained"],
  },
  {
    id: 3,
    name: "Maruti Dzire",
    category: "Sedan",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=85",
    price: 2200,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    features: ["Large Boot Space", "Comfortable Seats", "Smooth Drive"],
  },
  {
    id: 4,
    name: "Maruti Ertiga",
    category: "MUV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
    price: 3200,
    seats: 7,
    fuel: "Petrol",
    transmission: "Manual",
    features: ["Family Friendly", "7 Seater", "Long Trip Comfort"],
  },
  {
    id: 5,
    name: "Toyota Innova",
    category: "MUV",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85",
    price: 4200,
    seats: 7,
    fuel: "Diesel",
    transmission: "Manual",
    features: ["Premium Comfort", "Powerful Engine", "Ideal for Trips"],
  },
  {
    id: 6,
    name: "Mahindra XUV",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&w=1200&q=85",
    price: 4500,
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    features: ["Powerful SUV", "Premium Features", "Road Trip Ready"],
  },
];

const filters = ["All Cars", "Hatchback", "Sedan", "SUV", "MUV"];

const Specification = ({ icon, label, value }: SpecificationProps) => {
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
  const [activeFilter, setActiveFilter] = useState("All Cars");

  const filteredCars =
    activeFilter === "All Cars"
      ? cars
      : cars.filter((car) => car.category === activeFilter);

  return (
    <section
      id="cars"
      className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-24"
    >
      {/* Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-red-50 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section heading */}
        <div className="mx-auto max-w-[850px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[5px] text-red-600 sm:text-[13px]"
          >
            Our Premium Fleet
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-[38px] font-black leading-[1.05] tracking-[-1.5px] text-black sm:text-[50px] lg:text-[64px]"
          >
            Choose the perfect car
            <span className="block text-red-600">for your journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-[680px] text-[13px] leading-7 text-gray-500 sm:text-[15px]"
          >
            Explore clean, reliable and well-maintained self-drive cars for
            local travel, temple trips, business journeys and weekend getaways.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2.5 text-[11px] font-semibold transition-all duration-300 sm:px-6 sm:text-[12px] ${
                activeFilter === filter
                  ? "border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/20"
                  : "border-gray-200 bg-white text-gray-600 hover:border-red-300 hover:text-red-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cars grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredCars.map((car, index) => (
            <motion.article
              layout
              key={car.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.07)] transition-shadow duration-300 hover:shadow-[0_26px_70px_rgba(0,0,0,0.12)]"
            >
              {/* Image */}
              <div className="relative h-[235px] overflow-hidden bg-gray-100 sm:h-[260px]">
                <motion.img
                  src={car.image}
                  alt={car.name}
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-800 backdrop-blur">
                  {car.category}
                </span>

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[2px] text-white/70">
                      Starting from
                    </p>

                    <p className="mt-1 text-[25px] font-extrabold text-white">
                      ₹{car.price.toLocaleString("en-IN")}
                      <span className="ml-1 text-[11px] font-medium text-white/75">
                        / day
                      </span>
                    </p>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                    <FaCarSide />
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[2px] text-red-500">
                      Self Drive Car
                    </p>

                    <h3 className="mt-1 text-[22px] font-bold tracking-[-0.5px] text-gray-950">
                      {car.name}
                    </h3>
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

                {/* Features */}
                <div className="mt-5 space-y-2.5">
                  {car.features.map((feature) => (
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

                {/* Buttons */}
                <div className="mt-6 grid grid-cols-[1fr_auto] gap-3">
                  <a
                    href="#book"
                    className="group/button flex items-center justify-center gap-3 rounded-xl bg-red-600 px-5 py-3.5 text-[12px] font-semibold text-white shadow-lg shadow-red-600/20 transition-all hover:bg-black"
                  >
                    Book This Car

                    <FaArrowRight
                      size={11}
                      className="transition-transform group-hover/button:translate-x-1"
                    />
                  </a>

                  <a
                    href="tel:+919052885299"
                    aria-label={`Call to book ${car.name}`}
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-xl border border-gray-200 bg-white text-red-600 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white"
                  >
                    <FaPhoneAlt size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom booking banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              We will help you select the best car based on your journey.
            </p>
          </div>

          <a
            href="tel:+919052885299"
            className="mt-6 inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-[12px] font-semibold text-white transition-colors hover:bg-white hover:text-black lg:mt-0"
          >
            <FaPhoneAlt />
            +91 90528 85299
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Fleet;