import Header from "./components/Header";
import ServiceCarousel from "./components/Carousel";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/ChooseUs";
import MissionVision from "./components/Mission";

export default function Home() {
  return (
<main>
  <Header /> 
  <Hero />
  <ServiceCarousel />
  <AboutUs />
  <WhyChooseUs />
  <MissionVision />
  <ContactForm />
  <Footer />
</main>
  );
}
