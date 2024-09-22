import About from "../components/Home/About";
import Faq from "../components/Home/Faq";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import OurDoctors from "../components/Home/OurDoctors";
import OurServices from "../components/Home/OurServices";
import Services from "../components/Home/Services";
import Testimonial from "../components/Home/Testimonials/Testimonials";

export const Home = () => {
  return (
    <section>
      <Hero />
      <OurServices />
      <About />
      <Services />
      <Features />
      <OurDoctors />
      <Faq />
      <Testimonial />
    </section>
  );
};
