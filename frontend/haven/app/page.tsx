import Footer from "@/components/Footer";
import { Navbar } from "../components/Navbar";
import { DestinationsCarousel } from "./components/DestinationsCarousel";
import { FeaturedHotels } from "./components/FeaturedHotels";
import { Header } from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <DestinationsCarousel />
      <FeaturedHotels />
      <HowItWorks />
      <TestimonialsCarousel />
      <Footer />
    </>
  );
}
