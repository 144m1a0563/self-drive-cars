import { Link } from "react-router-dom";
import {
  FaCarSide,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaFileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const BookService = () => {
  return (
    <main className="bg-gray-50 py-20">
      <div className="container-custom">

        <p className="text-red-600 font-bold uppercase tracking-[4px]">
          Book Self Drive Car
        </p>

        <h1 className="mt-4 text-5xl font-extrabold">
          Book Your Car In Minutes
        </h1>

        <p className="mt-5 text-gray-600 max-w-3xl">
          Choose your favourite self-drive car and complete your booking quickly.
          We offer affordable prices, doorstep delivery and 24/7 support.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-14">

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              Booking Information
            </h2>

            <div className="space-y-5">

              <div className="flex gap-4">
                <FaFileAlt className="text-red-600 mt-1" />
                <div>
                  <h3 className="font-bold">
                    Documents Required
                  </h3>
                  <p>Aadhaar Card & Driving Licence</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-red-600 mt-1" />
                <div>
                  <h3 className="font-bold">
                    Pickup Location
                  </h3>
                  <p>Tirupati</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaCarSide className="text-red-600 mt-1" />
                <div>
                  <h3 className="font-bold">
                    Available Cars
                  </h3>
                  <p>Swift, Baleno, Dzire, Ertiga, Innova and more.</p>
                </div>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              Quick Booking
            </h2>

            <div className="space-y-4">

              <a
                href="tel:+919704143260"
                className="flex items-center justify-center gap-3 bg-red-600 text-white rounded-xl py-4 font-semibold"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href="https://wa.me/919704143260"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-green-600 text-white rounded-xl py-4 font-semibold"
              >
                <FaWhatsapp />
                WhatsApp Booking
              </a>

              <Link
                to="/cars"
                className="flex items-center justify-center gap-3 border rounded-xl py-4 font-semibold"
              >
                View Cars
              </Link>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default BookService;