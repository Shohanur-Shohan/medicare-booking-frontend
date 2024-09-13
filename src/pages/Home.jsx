import About from "../components/Home/About";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import OurServices from "../components/Home/OurServices";
import Services from "../components/Home/Services";

export const Home = () => {
  return (
    <section>
      <Hero />
      <OurServices />
      <About />
      <Services />
      <Features />
    </section>
  );
};
