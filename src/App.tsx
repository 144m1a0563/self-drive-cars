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

import BookService from "./pages/BookService";
import CarDetailsPage from "./pages/CarDetailsPage";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

/* =========================================================
   GLOBAL GTAG TYPE
========================================================= */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/* =========================================================
   SCROLL TO SECTION / TOP
========================================================= */

const ScrollToLocation = () => {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (location.hash) {
        const sectionId = location.hash.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section) {
          const navbarHeight =
            window.innerWidth >= 1024 ? 96 : 80;

          const topPosition =
            section.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight -
            10;

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
    }, 120);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, location.hash]);

  return null;
};

/* =========================================================
   GOOGLE ANALYTICS SPA PAGE TRACKING
========================================================= */

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", "page_view", {
      page_path:
        location.pathname +
        location.search +
        location.hash,

      page_location: window.location.href,
      page_title: document.title,
    });
  }, [
    location.pathname,
    location.search,
    location.hash,
  ]);

  return null;
};

/* =========================================================
   SEO HELPER
========================================================= */

interface SEOData {
  title: string;
  description: string;
  canonical: string;
}

const updateMetaTag = (
  name: string,
  content: string,
  property = false
) => {
  const selector = property
    ? `meta[property="${name}"]`
    : `meta[name="${name}"]`;

  let element =
    document.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");

    if (property) {
      element.setAttribute("property", name);
    } else {
      element.setAttribute("name", name);
    }

    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const PageSEO = ({
  title,
  description,
  canonical,
}: SEOData) => {
  useEffect(() => {
    document.title = title;

    updateMetaTag(
      "description",
      description
    );

    updateMetaTag(
      "og:title",
      title,
      true
    );

    updateMetaTag(
      "og:description",
      description,
      true
    );

    updateMetaTag(
      "og:url",
      canonical,
      true
    );

    updateMetaTag(
      "twitter:title",
      title
    );

    updateMetaTag(
      "twitter:description",
      description
    );

    let canonicalLink =
      document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (!canonicalLink) {
      canonicalLink =
        document.createElement("link");

      canonicalLink.rel = "canonical";

      document.head.appendChild(
        canonicalLink
      );
    }

    canonicalLink.href = canonical;
  }, [
    title,
    description,
    canonical,
  ]);

  return null;
};

/* =========================================================
   HOME PAGE
========================================================= */

const HomePage = () => {
  return (
    <>
      <PageSEO
        title="Self Drive Cars in Tirupati | Tiya Self Drive Cars"
        description="Book affordable self drive cars in Tirupati with Tiya Self Drive Cars. Clean hatchbacks, sedans, SUVs and family cars for Tirumala trips, Renigunta Airport, local travel and outstation journeys."
        canonical="https://tiyaselfdrivecars.com/"
      />

      <main>
        <Hero />
        <Fleet />
        <WhyChooseUs />
        <Services />
        <BookingProcess />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  );
};

/* =========================================================
   ABOUT PAGE
========================================================= */

const AboutPage = () => {
  return (
    <>
      <PageSEO
        title="About Tiya Self Drive Cars Tirupati | Car Rentals in Tirupati"
        description="Learn about Tiya Self Drive Cars Tirupati, offering reliable and affordable self drive car rentals for local travel, Tirumala, Renigunta Airport and outstation journeys."
        canonical="https://tiyaselfdrivecars.com/about"
      />

      <main>
        <AboutUs />
        <WhyChooseUs />
        <Contact />
      </main>
    </>
  );
};

/* =========================================================
   CARS PAGE
========================================================= */

const CarsPage = () => {
  return (
    <>
      <PageSEO
        title="Self Drive Rental Cars in Tirupati | Tiya Self Drive Cars"
        description="Explore self drive rental cars in Tirupati including hatchbacks, sedans, SUVs and family cars with flexible 12-hour and 24-hour rental packages."
        canonical="https://tiyaselfdrivecars.com/cars"
      />

      <main>
        <Fleet />
        <Contact />
      </main>
    </>
  );
};

/* =========================================================
   CONTACT PAGE
========================================================= */

const ContactPage = () => {
  return (
    <>
      <PageSEO
        title="Contact Tiya Self Drive Cars Tirupati"
        description="Contact Tiya Self Drive Cars Tirupati for self drive car availability, rental pricing, booking support and local or outstation travel."
        canonical="https://tiyaselfdrivecars.com/contact"
      />

      <main>
        <Contact />
      </main>
    </>
  );
};

/* =========================================================
   404
========================================================= */

const NotFoundPage = () => {
  return (
    <>
      <PageSEO
        title="Page Not Found | Tiya Self Drive Cars"
        description="The requested page could not be found."
        canonical="https://tiyaselfdrivecars.com/"
      />

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
    </>
  );
};

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <>
      <ScrollToLocation />

      <AnalyticsTracker />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/cars"
          element={<CarsPage />}
        />

        <Route
          path="/car"
          element={<CarsPage />}
        />

        <Route
          path="/book-service"
          element={<BookService />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="/car/:slug"
          element={<CarDetailsPage />}
        />

        <Route
          path="/terms-and-conditions"
          element={<TermsConditions />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;