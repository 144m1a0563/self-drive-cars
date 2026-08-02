import { useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Fleet from "./components/Fleet/Fleet";
import AboutUs from "./components/AboutUs/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Services from "./components/Services/Services";
import BookingProcess from "./components/BookingProcess/BookingProcess";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import CarDetailsPage from "./pages/CarDetailsPage";

const ScrollToLocation = () => {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (location.hash) {
        const sectionId = location.hash.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section) {
          const navbarHeight = window.innerWidth >= 1024 ? 96 : 80;

          const topPosition =
            section.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

          window.scrollTo({
            top: topPosition,
            behavior: "smooth",
          });

          return;
        }
      }

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }, 100);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, location.hash]);

  return null;
};

const HomePage = () => {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Services />
      <BookingProcess />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

const AboutPage = () => {
  return (
    <main>
      <AboutUs />
      <WhyChooseUs />
      <Contact />
    </main>
  );
};

const CarsPage = () => {
  return (
    <main>
      <Fleet />
      <Contact />
    </main>
  );
};

const NotFoundPage = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5 py-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-sm font-bold uppercase tracking-[4px] text-red-600">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl font-extrabold text-black sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-4 text-sm leading-7 text-gray-500">
          The page or vehicle you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex rounded-xl bg-red-600 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-black"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
};

function App() {
  return (
    <>
      <ScrollToLocation />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/cars" element={<CarsPage />} />

        <Route path="/car" element={<CarsPage />} />

        <Route
          path="/car/:slug"
          element={<CarDetailsPage />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;