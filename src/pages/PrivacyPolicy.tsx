import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserLock,
  FaDatabase,
  FaCookieBite,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const sections = [
  {
    icon: <FaUserLock />,
    title: "1. Information We Collect",
    content:
      "When you make a booking or contact us, we may collect your name, mobile number, email address, driving licence details, Aadhaar or Government-issued ID, pickup location, travel information, and payment-related details.",
  },
  {
    icon: <FaDatabase />,
    title: "2. How We Use Your Information",
    content:
      "We use your information to process bookings, verify your identity, provide customer support, contact you regarding your reservation, improve our services, and comply with applicable legal requirements.",
  },
  {
    icon: <FaShieldAlt />,
    title: "3. Data Protection",
    content:
      "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, misuse, loss, alteration, or disclosure.",
  },
  {
    icon: <FaDatabase />,
    title: "4. Information Sharing",
    content:
      "We do not sell or rent your personal information. Your information may be shared only when required for legal compliance, insurance claims, payment processing, or other service providers involved in your booking.",
  },
  {
    icon: <FaCookieBite />,
    title: "5. Cookies",
    content:
      "Our website may use cookies and similar technologies to improve website performance, remember preferences, analyze traffic, and enhance your browsing experience.",
  },
  {
    icon: <FaShieldAlt />,
    title: "6. Payment Security",
    content:
      "All payments are processed using secure payment gateways. We do not store your debit card, credit card, UPI PIN, or banking credentials on our servers.",
  },
  {
    icon: <FaUserLock />,
    title: "7. Your Rights",
    content:
      "You may request access to your personal information, request corrections, or ask us to delete your information where legally permitted. Contact us if you have any privacy-related concerns.",
  },
  {
    icon: <FaShieldAlt />,
    title: "8. Third-Party Services",
    content:
      "Our website may contain links to third-party websites such as Google Maps, WhatsApp, payment gateways, and social media platforms. Their privacy policies apply when you use those services.",
  },
  {
    icon: <FaDatabase />,
    title: "9. Policy Updates",
    content:
      "This Privacy Policy may be updated periodically. Changes become effective immediately after being published on this page.",
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-20">
      <div className="container-custom">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-red-100 text-red-600 text-4xl">
            <FaShieldAlt />
          </div>

          <p className="mt-6 uppercase tracking-[4px] text-red-600 font-bold">
            Privacy Policy
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-gray-900">
            Your Privacy Matters
          </h1>

          <p className="mt-6 text-gray-600 leading-8">
            At <strong>Tiya Self Drive Cars</strong>, we respect your
            privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect,
            use, store, and safeguard your information when you use
            our website and services.
          </p>
        </motion.div>

        {/* Policy Cards */}

        <div className="mt-16 space-y-8">

          {sections.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              className="rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
            >
              <div className="flex gap-6">

                <div className="h-16 w-16 shrink-0 rounded-2xl bg-red-600 text-white flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-gray-600 leading-8">
                    {item.content}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Contact */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-[#07182f] text-white p-10"
        >
          <h2 className="text-3xl font-bold text-center">
            Contact Us
          </h2>

          <p className="text-center text-white/70 mt-4 max-w-2xl mx-auto">
            If you have any questions regarding this Privacy Policy,
            your personal information, or our data practices, please
            contact us.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            <a
              href="tel:+919503785823"
              className="flex items-center justify-center gap-3 rounded-xl bg-red-600 py-4 font-semibold hover:bg-red-700 transition"
            >
              <FaPhoneAlt />
              +91 95037 85823
            </a>

            <a
              href="mailto:info@Tiyaselfdrivecars.com"
              className="flex items-center justify-center gap-3 rounded-xl bg-white/10 py-4 font-semibold hover:bg-white/20 transition"
            >
              <FaEnvelope />
              Email Us
            </a>

            <a
              href="https://wa.me/919603785823"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-green-600 py-4 font-semibold hover:bg-green-700 transition"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

          <p className="mt-10 text-center text-sm text-white/60">
            © {new Date().getFullYear()} Tiya Self Drive Cars. All Rights Reserved.
          </p>
        </motion.div>

      </div>
    </section>
  );
}