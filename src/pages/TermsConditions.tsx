import { motion } from "framer-motion";
import {
  FaFileContract,
  FaCarSide,
  FaUserShield,
  FaMoneyBillWave,
  FaExclamationTriangle,
  FaPhoneAlt,
} from "react-icons/fa";

const sections = [
  {
    icon: <FaCarSide />,
    title: "1. Vehicle Booking",
    content:
      "All bookings are subject to vehicle availability. Booking confirmation will be provided only after verification of customer details and advance payment (if applicable).",
  },
  {
    icon: <FaUserShield />,
    title: "2. Driver Eligibility",
    content:
      "The renter must possess a valid Indian Driving Licence, Aadhaar Card or any Government-issued ID proof. The minimum age to rent a vehicle is 21 years.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "3. Security Deposit",
    content:
      "A refundable security deposit may be collected before vehicle delivery. The amount depends on the selected vehicle and will be refunded after inspection.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "4. Vehicle Usage",
    content:
      "Vehicles must not be used for racing, illegal activities, commercial transportation, off-road driving, or by anyone other than the registered customer.",
  },
  {
    icon: <FaCarSide />,
    title: "5. Fuel Policy",
    content:
      "Vehicles are delivered with a specified fuel level and should be returned with the same fuel level. Additional fuel charges may apply if returned with less fuel.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "6. Late Return Charges",
    content:
      "Late returns beyond the agreed booking period may attract additional hourly or daily rental charges.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "7. Traffic Violations",
    content:
      "The customer is solely responsible for all traffic fines, toll charges, parking violations, and penalties incurred during the rental period.",
  },
  {
    icon: <FaUserShield />,
    title: "8. Vehicle Damage",
    content:
      "Any damage caused due to negligence, rash driving, misuse, or accidents not covered under insurance shall be the responsibility of the customer.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "9. Cancellation Policy",
    content:
      "Cancellation requests should be made before vehicle delivery. Refund eligibility depends on the time of cancellation and company policy.",
  },
  {
    icon: <FaFileContract />,
    title: "10. Privacy Policy",
    content:
      "Customer information collected during booking is used only for booking verification, communication, and legal compliance. We never sell your personal information to third parties.",
  },
];

const TermsConditions = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600 text-4xl">
            <FaFileContract />
          </div>

          <p className="mt-6 text-red-600 font-bold uppercase tracking-[4px]">
            Terms & Conditions
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-gray-900">
            Terms of Service
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            Please read these Terms & Conditions carefully before booking a
            self-drive vehicle from Tiya Self Drive Cars. By booking our
            services, you agree to comply with the terms mentioned below.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8">

          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-5">

                <div className="h-16 w-16 rounded-2xl bg-red-600 text-white flex items-center justify-center text-2xl shrink-0">
                  {section.icon}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>

                  <p className="mt-3 text-gray-600 leading-8">
                    {section.content}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 rounded-3xl bg-[#07182f] p-10 text-center text-white"
        >
          <h2 className="text-3xl font-bold">
            Need More Information?
          </h2>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            If you have any questions regarding our Terms & Conditions,
            booking policies, or rental procedures, please contact our team.
          </p>

          <a
            href="tel:+919503785823"
            className="inline-flex mt-8 items-center gap-3 bg-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            <FaPhoneAlt />
         
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default TermsConditions;