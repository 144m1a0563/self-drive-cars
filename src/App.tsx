import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Fleet from "./components/Fleet/Fleet";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Services from "./components/Services/Services";
import BookingProcess from "./components/BookingProcess/BookingProcess";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

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

      <Footer />
    </>
  );
}

export default App;