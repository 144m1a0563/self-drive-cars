import { useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaChevronDown,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { cars } from "../../data/cars";

interface MenuItem {
  label: string;
  to: string;
  dropdown?: boolean;
  external?: boolean;
}

const menuItems: MenuItem[] = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT US",
    to: "/about",
  },
  {
    label: "CARS",
    to: "/cars",
    dropdown: true,
  },
  {
    label: "BOOK NOW",
    to: "https://wa.me/919704143260?text=Hello%20Tiya%20Self%20Drive%20Cars,%20I%20would%20like%20to%20book%20a%20car.",
    external: true,
  },
  {
    label: "CONTACT US",
    to: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCarsOpen, setMobileCarsOpen] = useState(false);
  const [carsDropdownOpen, setCarsDropdownOpen] = useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileCarsOpen(false);
  };

  const closeCarsDropdown = () => {
    setCarsDropdownOpen(false);
  };

  const closeAllMenus = () => {
    closeMobileMenu();
    closeCarsDropdown();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-md">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              onClick={closeAllMenus}
              className="block"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <h1 className="text-[30px] font-extrabold leading-none tracking-tight text-black lg:text-[36px]">
                  Tiya
                </h1>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[4px] text-gray-700 lg:text-[13px]">
                  SELF DRIVE CARS
                </p>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <nav className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-8 xl:gap-10">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                  className="group relative"
                  onMouseEnter={() => {
                    if (item.dropdown) {
                      setCarsDropdownOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.dropdown) {
                      setCarsDropdownOpen(false);
                    }
                  }}
                >
                  {item.dropdown ? (
                    <>
                      <Link
                        to={item.to}
                        onClick={closeCarsDropdown}
                        className="flex items-center gap-2 py-4 text-[15px] font-semibold text-gray-800 transition-colors duration-300 hover:text-red-600"
                      >
                        {item.label}

                        <FaChevronDown
                          size={10}
                          className={`transition-transform duration-300 ${
                            carsDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      <span
                        className={`absolute bottom-1 left-0 h-[2px] bg-red-600 transition-all duration-300 ${
                          carsDropdownOpen
                            ? "w-full"
                            : "w-0"
                        }`}
                      />

                      <AnimatePresence>
                        {carsDropdownOpen && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 14,
                              scale: 0.98,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: 12,
                              scale: 0.98,
                            }}
                            transition={{
                              duration: 0.2,
                              ease: "easeOut",
                            }}
                            className="absolute left-1/2 top-full z-50 w-[330px] -translate-x-1/2 overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.16)]"
                          >
                            <div className="max-h-[430px] overflow-y-auto py-4">
                              {cars.slice(0, 3).map((car) => (
                                <Link
                                  key={car.id}
                                  to={`/car/${car.slug}`}
                                  onClick={closeCarsDropdown}
                                  className="group/car flex items-center justify-between gap-4 px-6 py-3.5 transition-colors hover:bg-red-50"
                                >
                                  <div className="min-w-0">
                                    <p className="truncate text-[14px] font-semibold text-gray-800 transition-colors group-hover/car:text-red-600">
                                      {car.name}
                                    </p>

                                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[1.5px] text-gray-400">
                                      {car.category} · {car.seats} Seats
                                    </p>
                                  </div>

                                  <FaArrowRight
                                    size={12}
                                    className="shrink-0 text-red-500 opacity-0 transition-all group-hover/car:translate-x-1 group-hover/car:opacity-100"
                                  />
                                </Link>
                              ))}
                            </div>

                            <Link
                              to="/cars"
                              onClick={closeCarsDropdown}
                              className="flex items-center justify-between border-t border-gray-100 px-6 py-5 text-[15px] font-semibold text-red-600 transition-colors hover:bg-red-50"
                            >
                              View All Cars
                              <FaArrowRight size={14} />
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.external ? (
                    <>
                      <a
                        href={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-4 text-[15px] font-semibold text-gray-800 transition-colors duration-300 hover:text-red-600"
                      >
                        {item.label}
                      </a>

                      <span className="absolute bottom-1 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
                    </>
                  ) : (
                    <>
                      <NavLink
                        to={item.to}
                        onClick={closeCarsDropdown}
                        className={({ isActive }) =>
                          `flex items-center gap-2 py-4 text-[15px] font-semibold transition-colors duration-300 ${
                            isActive
                              ? "text-red-600"
                              : "text-gray-800 hover:text-red-600"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>

                      <span className="absolute bottom-1 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
                    </>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Desktop phone */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden items-center gap-4 lg:flex"
          >
            <motion.a
              href="tel:+919704143260"
              aria-label="Call Tiya Self Drive Cars"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-red-600 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              <FaPhoneAlt size={18} />
            </motion.a>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                BOOK ANYTIME
              </p>

              <a
                href="tel:+919704143260"
                className="text-[17px] font-bold text-black transition-colors hover:text-red-600"
              >
                +91 97041 43260
              </a>
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((previous) => !previous);
              setCarsDropdownOpen(false);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-2xl text-black shadow-sm lg:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-navigation"
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
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-gray-100 bg-white lg:hidden"
          >
            <ul className="px-5 py-3 sm:px-8">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{
                    x: -25,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={mobileCarsOpen}
                        onClick={() =>
                          setMobileCarsOpen(
                            (previous) => !previous
                          )
                        }
                        className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-gray-800"
                      >
                        {item.label}

                        <FaChevronDown
                          size={11}
                          className={`text-red-600 transition-transform duration-300 ${
                            mobileCarsOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {mobileCarsOpen && (
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
                              duration: 0.25,
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mb-3 border-l-2 border-red-100 pl-4">
                              {cars.slice(0, 3).map((car) => (
                                <Link
                                  key={car.id}
                                  to={`/car/${car.slug}`}
                                  onClick={closeMobileMenu}
                                  className="group/mobile flex items-center justify-between gap-3 py-3"
                                >
                                  <div className="min-w-0">
                                    <p className="truncate text-[13px] font-semibold text-gray-600 transition-colors group-hover/mobile:text-red-600">
                                      {car.name}
                                    </p>

                                    <p className="mt-0.5 text-[9px] uppercase tracking-[1px] text-gray-400">
                                      {car.category} ·{" "}
                                      {car.seats} Seats
                                    </p>
                                  </div>

                                  <FaArrowRight
                                    size={10}
                                    className="shrink-0 text-red-500"
                                  />
                                </Link>
                              ))}

                              <Link
                                to="/cars"
                                onClick={closeMobileMenu}
                                className="mt-2 flex items-center justify-between border-t border-gray-100 py-4 text-[13px] font-semibold text-red-600"
                              >
                                View All Cars
                                <FaArrowRight size={12} />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.external ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="block py-4 text-sm font-semibold text-gray-800 transition-colors hover:text-red-600"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={closeMobileMenu}
                      className="block py-4 text-sm font-semibold text-gray-800 transition-colors hover:text-red-600"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}

              <li className="py-5">
                <a
                  href="tel:+919704143260"
                  className="flex items-center justify-center gap-3 rounded-xl bg-red-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black"
                >
                  <FaPhoneAlt />
                  Call Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;