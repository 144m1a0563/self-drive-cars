import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaChevronDown,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "HOME",
    "ABOUT US",
    "CARS",
    "BOOK NOW",
    "CONTACT US",
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-gray-100">

      {/* MAIN CONTAINER */}
      <div className="max-w-[1500px] mx-auto px-8 lg:px-20">

        <div className="h-20 lg:h-24 flex items-center justify-between">


          {/* LOGO */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >

            <div>

              <motion.h1
                whileHover={{ scale: 1.05 }}
                className="
                text-[30px]
                lg:text-[36px]
                font-extrabold
                leading-none
                tracking-tight
                text-black
                "
              >
                vamsi
              </motion.h1>


              <p
                className="
                text-[10px]
                lg:text-[13px]
                uppercase
                tracking-[4px]
                font-semibold
                text-gray-700
                mt-1
                "
              >
                SELF DRIVE CARS
              </p>

            </div>

          </motion.div>




          {/* DESKTOP NAV */}

          <nav className="hidden lg:flex flex-1 justify-center">

            <ul className="flex items-center gap-10">


              {menuItems.map((item,index)=>(

                <motion.li
                  key={item}
                  initial={{
                    opacity:0,
                    y:-15
                  }}
                  animate={{
                    opacity:1,
                    y:0
                  }}
                  transition={{
                    delay:index*0.1,
                    duration:0.4
                  }}
                  className="relative group"
                >

                  <a
                    href="#"
                    className="
                    flex
                    items-center
                    gap-2
                    text-[15px]
                    font-semibold
                    text-gray-800
                    transition-all
                    duration-300
                    hover:text-red-600
                    "
                  >

                    {item}


                    {item==="CARS" && (

                      <FaChevronDown
                        size={10}
                        className="
                        transition-transform
                        duration-300
                        group-hover:rotate-180
                        "
                      />

                    )}


                  </a>



                  {/* Hover Line */}

                  <span
                    className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-0
                    bg-red-600
                    transition-all
                    duration-300
                    group-hover:w-full
                    "
                  />

                </motion.li>

              ))}


            </ul>

          </nav>





          {/* PHONE SECTION */}

          <motion.div
            initial={{
              opacity:0,
              x:40
            }}
            animate={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:0.6
            }}
            className="
            hidden
            lg:flex
            items-center
            gap-4
            "
          >


            <motion.div
              animate={{
                scale:[1,1.08,1]
              }}
              transition={{
                duration:2,
                repeat:Infinity
              }}
              className="
              w-12
              h-12
              rounded-full
              border
              border-gray-200
              flex
              items-center
              justify-center
              text-red-600
              "
            >

              <FaPhoneAlt size={18}/>

            </motion.div>



            <div>

              <p
                className="
                text-[10px]
                uppercase
                tracking-widest
                font-semibold
                text-gray-400
                "
              >
                BOOK ANYTIME
              </p>


              <a
                href="tel:+919052885299"
                className="
                text-[17px]
                font-bold
                text-black
                hover:text-red-600
                transition
                "
              >
                +91 90528 85299
              </a>


            </div>


          </motion.div>






          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            lg:hidden
            text-2xl
            text-black
            "
          >

            {
              menuOpen
              ?
              <FaTimes />
              :
              <FaBars />
            }


          </button>


        </div>


      </div>





      {/* MOBILE MENU */}

      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0
        }}
        transition={{
          duration:0.4
        }}
        className="
        lg:hidden
        overflow-hidden
        bg-white
        "
      >


        <ul className="flex flex-col">


          {menuItems.map((item,index)=>(

            <motion.li
              key={item}
              initial={{
                x:-30,
                opacity:0
              }}
              animate={{
                x:menuOpen ? 0 : -30,
                opacity:menuOpen ? 1 : 0
              }}
              transition={{
                delay:index*0.05
              }}
            >

              <a
                href="#"
                className="
                block
                px-6
                py-3
                text-sm
                font-semibold
                border-b
                hover:bg-red-50
                hover:text-red-600
                transition
                "
              >

                {item}

              </a>


            </motion.li>


          ))}



          <li className="p-5">


            <a
              href="tel:+919052885299"
              className="
              flex
              items-center
              justify-center
              gap-3
              bg-red-600
              text-white
              rounded-lg
              py-3
              text-sm
              font-semibold
              hover:bg-black
              transition
              "
            >

              <FaPhoneAlt />

              Call Now


            </a>


          </li>


        </ul>


      </motion.div>


    </header>
  );
};

export default Navbar;