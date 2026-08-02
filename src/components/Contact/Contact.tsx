import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaCarSide,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCommentDots,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  phone: string;
  email: string;
  car: string;
  pickupDate: string;
  pickupLocation: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  car?: string;
  pickupDate?: string;
  pickupLocation?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  car: "",
  pickupDate: "",
  pickupLocation: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));

    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.car) {
      newErrors.car = "Please select a car";
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate = "Please select a pickup date";
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = "Please enter a pickup location";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your trip details";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccessMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      setSuccessMessage(
        "Your booking enquiry has been submitted successfully. Our team will contact you shortly."
      );

      setFormData(initialFormData);
      setErrors({});
    } catch {
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fffafa] to-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-16 h-[360px] w-[360px] rounded-full bg-red-100/60 blur-3xl" />

        <div className="absolute -right-32 bottom-16 h-[380px] w-[380px] rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-[850px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-bold uppercase tracking-[4px] text-red-600 sm:text-[13px] sm:tracking-[5px]"
          >
            Contact Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 text-[34px] font-extrabold leading-[1.12] tracking-[-1.5px] text-gray-950 sm:text-[46px] lg:text-[58px]"
          >
            Book your perfect
            <span className="block text-red-600">self-drive car today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-5 max-w-[720px] text-[13px] leading-7 text-gray-500 sm:text-[15px]"
          >
            Share your travel details with us. Our booking team will help you
            choose the right car and confirm availability.
          </motion.p>
        </div>

        {/* Contact layout */}
        <div className="mt-12 grid grid-cols-1 gap-7 lg:mt-14 lg:grid-cols-[38%_62%] lg:gap-8 xl:gap-10">
          {/* Left contact panel */}
          <motion.aside
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[28px] bg-[#07182f] p-6 text-white sm:p-8 lg:p-9"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-red-600/20 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-red-400">
                Booking Support
              </p>

              <h3 className="mt-4 text-[28px] font-bold leading-tight sm:text-[34px]">
                Need help choosing a car?
              </h3>

              <p className="mt-4 text-[12px] leading-6 text-white/60 sm:text-[13px]">
                Contact our team for vehicle availability, pricing, delivery
                locations and booking assistance.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+919603785823"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all hover:border-red-500/40 hover:bg-white/[0.1]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600 text-[18px] text-white">
                    <FaPhoneAlt />
                  </span>

                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[1.8px] text-white/45">
                      Call Anytime
                    </span>

                    <span className="mt-1 block text-[15px] font-bold text-white sm:text-[16px]">
                      +91 9603785823
                    </span>
                  </span>
                </a>

                <a
                  href="https://wa.me/919603785823"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all hover:border-green-500/40 hover:bg-white/[0.1]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500 text-[21px] text-white">
                    <FaWhatsapp />
                  </span>

                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[1.8px] text-white/45">
                      WhatsApp Booking
                    </span>

                    <span className="mt-1 block text-[15px] font-bold text-white sm:text-[16px]">
                      Chat With Our Team
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[18px] text-red-400">
                    <FaEnvelope />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[9px] font-semibold uppercase tracking-[1.8px] text-white/45">
                      Email
                    </span>

                    <span className="mt-1 block truncate text-[13px] font-semibold text-white sm:text-[14px]">
                      bookings@cherrycars.in
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[18px] text-red-400">
                    <FaClock />
                  </span>

                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[1.8px] text-white/45">
                      Working Hours
                    </span>

                    <span className="mt-1 block text-[13px] font-semibold text-white sm:text-[14px]">
                      Available 24 Hours
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-red-300">
                  Service Area
                </p>

                <p className="mt-2 text-[13px] font-semibold leading-6 text-white">
                  Tirupati, Tirumala, Renigunta Airport and nearby locations
                </p>
              </div>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] border border-gray-100 bg-white p-5 shadow-[0_20px_65px_rgba(0,0,0,0.07)] sm:p-7 lg:p-8 xl:p-10"
          >
            <div className="mb-7">
              <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-red-600">
                Send Enquiry
              </p>

              <h3 className="mt-2 text-[24px] font-bold text-gray-950 sm:text-[30px]">
                Tell us about your journey
              </h3>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[11px] font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <div
                    className={`flex items-center gap-3 rounded-xl border bg-gray-50 px-4 transition-colors focus-within:bg-white ${
                      errors.name
                        ? "border-red-400"
                        : "border-gray-200 focus-within:border-red-500"
                    }`}
                  >
                    <FaUser className="shrink-0 text-[14px] text-red-500" />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="h-[52px] w-full bg-transparent text-[12px] text-gray-900 outline-none placeholder:text-gray-400"
                    />
                  </div>

                  {errors.name && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[11px] font-semibold text-gray-700"
                  >
                    Mobile Number
                  </label>

                  <div
                    className={`flex items-center gap-3 rounded-xl border bg-gray-50 px-4 transition-colors focus-within:bg-white ${
                      errors.phone
                        ? "border-red-400"
                        : "border-gray-200 focus-within:border-red-500"
                    }`}
                  >
                    <FaPhoneAlt className="shrink-0 text-[13px] text-red-500" />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="h-[52px] w-full bg-transparent text-[12px] text-gray-900 outline-none placeholder:text-gray-400"
                    />
                  </div>

                  {errors.phone && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] font-semibold text-gray-700"
                  >
                    Email Address
                    <span className="ml-1 font-normal text-gray-400">
                      Optional
                    </span>
                  </label>

                  <div
                    className={`flex items-center gap-3 rounded-xl border bg-gray-50 px-4 transition-colors focus-within:bg-white ${
                      errors.email
                        ? "border-red-400"
                        : "border-gray-200 focus-within:border-red-500"
                    }`}
                  >
                    <FaEnvelope className="shrink-0 text-[14px] text-red-500" />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="h-[52px] w-full bg-transparent text-[12px] text-gray-900 outline-none placeholder:text-gray-400"
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Car */}
                <div>
                  <label
                    htmlFor="car"
                    className="mb-2 block text-[11px] font-semibold text-gray-700"
                  >
                    Select Car
                  </label>

                  <div
                    className={`flex items-center gap-3 rounded-xl border bg-gray-50 px-4 transition-colors focus-within:bg-white ${
                      errors.car
                        ? "border-red-400"
                        : "border-gray-200 focus-within:border-red-500"
                    }`}
                  >
                    <FaCarSide className="shrink-0 text-[15px] text-red-500" />

                    <select
                      id="car"
                      name="car"
                      value={formData.car}
                      onChange={handleChange}
                      className="h-[52px] w-full cursor-pointer bg-transparent text-[12px] text-gray-900 outline-none"
                    >
                      <option value="">Choose a car</option>
                      <option value="Maruti Swift">Maruti Swift</option>
                      <option value="Maruti Baleno">Maruti Baleno</option>
                      <option value="Maruti Dzire">Maruti Dzire</option>
                      <option value="Maruti Ertiga">Maruti Ertiga</option>
                      <option value="Toyota Innova">Toyota Innova</option>
                      <option value="Mahindra XUV">Mahindra XUV</option>
                    </select>
                  </div>

                  {errors.car && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.car}
                    </p>
                  )}
                </div>

                {/* Pickup date */}
                <div>
                  <label
                    htmlFor="pickupDate"
                    className="mb-2 block text-[11px] font-semibold text-gray-700"
                  >
                    Pickup Date
                  </label>

                  <div
                    className={`flex items-center gap-3 rounded-xl border bg-gray-50 px-4 transition-colors focus-within:bg-white ${
                      errors.pickupDate
                        ? "border-red-400"
                        : "border-gray-200 focus-within:border-red-500"
                    }`}
                  >
                    <FaCalendarAlt className="shrink-0 text-[14px] text-red-500" />

                    <input
                      id="pickupDate"
                      name="pickupDate"
                      type="date"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="h-[52px] w-full bg-transparent text-[12px] text-gray-900 outline-none"
                    />
                  </div>

                  {errors.pickupDate && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.pickupDate}
                    </p>
                  )}
                </div>

                {/* Pickup location */}
                <div>
                  <label
                    htmlFor="pickupLocation"
                    className="mb-2 block text-[11px] font-semibold text-gray-700"
                  >
                    Pickup Location
                  </label>

                  <div
                    className={`flex items-center gap-3 rounded-xl border bg-gray-50 px-4 transition-colors focus-within:bg-white ${
                      errors.pickupLocation
                        ? "border-red-400"
                        : "border-gray-200 focus-within:border-red-500"
                    }`}
                  >
                    <FaMapMarkerAlt className="shrink-0 text-[14px] text-red-500" />

                    <input
                      id="pickupLocation"
                      name="pickupLocation"
                      type="text"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      placeholder="Enter pickup location"
                      className="h-[52px] w-full bg-transparent text-[12px] text-gray-900 outline-none placeholder:text-gray-400"
                    />
                  </div>

                  {errors.pickupLocation && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.pickupLocation}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11px] font-semibold text-gray-700"
                >
                  Trip Details
                </label>

                <div
                  className={`flex items-start gap-3 rounded-xl border bg-gray-50 px-4 py-4 transition-colors focus-within:bg-white ${
                    errors.message
                      ? "border-red-400"
                      : "border-gray-200 focus-within:border-red-500"
                  }`}
                >
                  <FaCommentDots className="mt-1 shrink-0 text-[15px] text-red-500" />

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention return date, destination, number of passengers and other requirements"
                    className="w-full resize-none bg-transparent text-[12px] leading-6 text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </div>

                {errors.message && (
                  <p className="mt-1.5 text-[10px] font-medium text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Success */}
              {successMessage && (
                <div className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-[11px] font-medium leading-5 text-green-700">
                  {successMessage}
                </div>
              )}

              {/* Submit */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-[12px] font-semibold text-white shadow-lg shadow-red-600/20 transition-all hover:bg-black disabled:cursor-not-allowed disabled:opacity-65"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending Enquiry...
                  </>
                ) : (
                  <>
                    Submit Booking Enquiry
                    <FaCarSide size={14} />
                  </>
                )}
              </motion.button>

              <p className="mt-4 text-center text-[10px] leading-5 text-gray-400">
                By submitting this form, you agree to be contacted regarding
                your booking enquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;