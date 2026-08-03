import {
  useMemo,
  useState,
  type ChangeEvent,
} from "react";

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
  FaCheckCircle,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { cars } from "../../data/cars";

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

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const WHATSAPP_NUMBER = "919704143260";

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  car: "",
  pickupDate: "",
  pickupLocation: "",
  message: "",
};

const FormField = ({
  label,
  error,
  children,
}: FormFieldProps) => {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-semibold text-gray-700">
        {label}
      </label>

      <div
        className={`flex items-center gap-3 rounded-xl border bg-gray-50 px-4 transition-colors focus-within:bg-white ${
          error
            ? "border-red-400"
            : "border-gray-200 focus-within:border-red-500"
        }`}
      >
        {children}
      </div>

      {error && (
        <p className="mt-1.5 text-[10px] font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [successMessage, setSuccessMessage] =
    useState("");

  const [whatsappLoading, setWhatsappLoading] =
    useState(false);

  const minimumPickupDate = useMemo(() => {
    const today = new Date();

    const timezoneOffset =
      today.getTimezoneOffset() * 60_000;

    return new Date(today.getTime() - timezoneOffset)
      .toISOString()
      .split("T")[0];
  }, []);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    let cleanedValue = value;

    if (name === "phone") {
      cleanedValue = value
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    if (name === "name") {
      cleanedValue = value.replace(/\s{2,}/g, " ");
    }

    setFormData((previous) => ({
      ...previous,
      [name]: cleanedValue,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));

    setSuccessMessage("");
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const pickupLocation =
      formData.pickupLocation.trim();
    const message = formData.message.trim();

    if (!name) {
      newErrors.name =
        "Please enter your full name";
    } else if (name.length < 3) {
      newErrors.name =
        "Name must contain at least 3 characters";
    } else if (!/^[a-zA-Z\s.'-]+$/.test(name)) {
      newErrors.name =
        "Name can contain only letters and spaces";
    }

    if (!phone) {
      newErrors.phone =
        "Please enter your mobile number";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone =
        "Enter a valid 10-digit Indian mobile number";
    }

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
    ) {
      newErrors.email =
        "Enter a valid email address";
    }

    if (!formData.car) {
      newErrors.car = "Please select a car";
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate =
        "Please select a pickup date";
    } else {
      const selectedDate = new Date(
        `${formData.pickupDate}T00:00:00`
      );

      const today = new Date(
        `${minimumPickupDate}T00:00:00`
      );

      if (selectedDate < today) {
        newErrors.pickupDate =
          "Pickup date cannot be in the past";
      }
    }

    if (!pickupLocation) {
      newErrors.pickupLocation =
        "Please enter your pickup location";
    } else if (pickupLocation.length < 3) {
      newErrors.pickupLocation =
        "Pickup location must contain at least 3 characters";
    }

    if (!message) {
      newErrors.message =
        "Please enter your trip details";
    } else if (message.length < 10) {
      newErrors.message =
        "Trip details must contain at least 10 characters";
    } else if (message.length > 500) {
      newErrors.message =
        "Trip details cannot exceed 500 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const focusFirstInvalidField = () => {
    window.setTimeout(() => {
      const invalidField = document.querySelector(
        "[aria-invalid='true']"
      ) as HTMLElement | null;

      invalidField?.focus();
    }, 0);
  };

  const formatPickupDate = (
    dateValue: string
  ): string => {
    const date = new Date(
      `${dateValue}T00:00:00`
    );

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const handleWhatsAppSubmit = () => {
    setSuccessMessage("");

    if (!validateForm()) {
      focusFirstInvalidField();
      return;
    }

    setWhatsappLoading(true);

    const whatsappMessage = `
🚗 *New Self Drive Car Booking Enquiry*

👤 *Customer Name:* ${formData.name.trim()}
📞 *Mobile Number:* ${formData.phone.trim()}
📧 *Email:* ${formData.email.trim() || "Not provided"}
🚘 *Selected Car:* ${formData.car}
📅 *Pickup Date:* ${formatPickupDate(formData.pickupDate)}
📍 *Pickup Location:* ${formData.pickupLocation.trim()}

📝 *Trip Details:*
${formData.message.trim()}

Please confirm vehicle availability, rental price and booking terms.
    `.trim();

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(whatsappMessage)}`;

    const whatsappWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    if (!whatsappWindow) {
      window.location.href = whatsappUrl;
    }

    setSuccessMessage(
      "WhatsApp has opened with your booking details. Please press Send to complete your enquiry."
    );

    setWhatsappLoading(false);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setSuccessMessage("");
    setWhatsappLoading(false);
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
              duration: 0.45,
            }}
            className="text-[11px] font-bold uppercase tracking-[4px] text-red-600 sm:text-[13px] sm:tracking-[5px]"
          >
            Contact Us
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
            className="mt-4 text-[34px] font-extrabold leading-[1.12] tracking-[-1.5px] text-gray-950 sm:text-[46px] lg:text-[58px]"
          >
            Book your perfect

            <span className="block text-red-600">
              self-drive car today
            </span>
          </motion.h2>

          <motion.p
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
              duration: 0.5,
              delay: 0.16,
            }}
            className="mx-auto mt-5 max-w-[720px] text-[13px] leading-7 text-gray-500 sm:text-[15px]"
          >
            Complete the enquiry form and send all your
            booking details directly through WhatsApp.
          </motion.p>
        </div>

        {/* Main layout */}
        <div className="mt-12 grid grid-cols-1 gap-7 lg:mt-14 lg:grid-cols-[38%_62%] lg:gap-8 xl:gap-10">
          {/* Contact details */}
          <motion.aside
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
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
                Contact our team for vehicle availability,
                pricing, pickup and booking assistance.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+919704143260"
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
                      +91 97041 43260
                    </span>
                  </span>
                </a>

                <a
                  href="https://wa.me/919704143260"
                  target="_blank"
                  rel="noopener noreferrer"
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

                    <span className="mt-1 block break-all text-[13px] font-semibold text-white">
                      vamsinagineni03@gmail.com
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

                    <span className="mt-1 block text-[13px] font-semibold text-white">
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
                  Tirupati, Tirumala, Renigunta Airport and
                  nearby locations
                </p>
              </div>
            </div>
          </motion.aside>

          {/* Booking form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
            }}
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

            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleWhatsAppSubmit();
              }}
              noValidate
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  label="Full Name"
                  error={errors.name}
                >
                  <FaUser className="shrink-0 text-red-500" />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    placeholder="Enter your full name"
                    className="h-[52px] w-full bg-transparent text-[12px] text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </FormField>

                <FormField
                  label="Mobile Number"
                  error={errors.phone}
                >
                  <FaPhoneAlt className="shrink-0 text-red-500" />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                    placeholder="10-digit mobile number"
                    className="h-[52px] w-full bg-transparent text-[12px] text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </FormField>

                <FormField
                  label="Email Address (Optional)"
                  error={errors.email}
                >
                  <FaEnvelope className="shrink-0 text-red-500" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    placeholder="Enter your email"
                    className="h-[52px] w-full bg-transparent text-[12px] text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </FormField>

                <FormField
                  label="Select Car"
                  error={errors.car}
                >
                  <FaCarSide className="shrink-0 text-red-500" />

                  <select
                    id="car"
                    name="car"
                    value={formData.car}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.car)}
                    className="h-[52px] w-full cursor-pointer bg-transparent text-[12px] text-gray-900 outline-none"
                  >
                    <option value="">
                      Choose a car
                    </option>

                    {cars.map((car) => (
                      <option
                        key={car.id}
                        value={car.name}
                      >
                        {car.name}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField
                  label="Pickup Date"
                  error={errors.pickupDate}
                >
                  <FaCalendarAlt className="shrink-0 text-red-500" />

                  <input
                    id="pickupDate"
                    name="pickupDate"
                    type="date"
                    min={minimumPickupDate}
                    value={formData.pickupDate}
                    onChange={handleChange}
                    aria-invalid={Boolean(
                      errors.pickupDate
                    )}
                    className="h-[52px] w-full bg-transparent text-[12px] text-gray-900 outline-none"
                  />
                </FormField>

                <FormField
                  label="Pickup Location"
                  error={errors.pickupLocation}
                >
                  <FaMapMarkerAlt className="shrink-0 text-red-500" />

                  <input
                    id="pickupLocation"
                    name="pickupLocation"
                    type="text"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    aria-invalid={Boolean(
                      errors.pickupLocation
                    )}
                    placeholder="Enter pickup location"
                    className="h-[52px] w-full bg-transparent text-[12px] text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </FormField>
              </div>

              {/* Trip details */}
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="message"
                    className="text-[11px] font-semibold text-gray-700"
                  >
                    Trip Details
                  </label>

                  <span
                    className={`text-[10px] ${
                      formData.message.length > 450
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    {formData.message.length}/500
                  </span>
                </div>

                <div
                  className={`flex items-start gap-3 rounded-xl border bg-gray-50 px-4 py-4 transition-colors focus-within:bg-white ${
                    errors.message
                      ? "border-red-400"
                      : "border-gray-200 focus-within:border-red-500"
                  }`}
                >
                  <FaCommentDots className="mt-1 shrink-0 text-red-500" />

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    placeholder="Mention destination, return date, passengers and other requirements"
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
                <div
                  role="status"
                  className="mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-[11px] font-medium leading-5 text-green-700"
                >
                  <FaCheckCircle className="mt-0.5 shrink-0 text-[15px]" />

                  <span>{successMessage}</span>
                </div>
              )}

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <motion.button
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  disabled={whatsappLoading}
                  className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 text-[12px] font-semibold text-white shadow-lg shadow-green-600/20 transition-all hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {whatsappLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />

                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      Send Enquiry on WhatsApp

                      <FaWhatsapp size={18} />
                    </>
                  )}
                </motion.button>

                <button
                  type="button"
                  onClick={resetForm}
                  disabled={whatsappLoading}
                  className="rounded-xl border border-gray-200 bg-white px-6 py-4 text-[12px] font-semibold text-gray-600 transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Clear Form
                </button>
              </div>

              <p className="mt-4 text-center text-[10px] leading-5 text-gray-400">
                WhatsApp will open with all your booking
                details. Press Send to complete the enquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;