import IntroSlider from "../components/HomePage/IntroSlider";
import Pricing from "../components/landingPage/Pricing";
import Testomonials from "../components/landingPage/Testomonials";
import OurTeam from "../components/landingPage/OurTeam";
import Services from "../components/landingPage/Services";
import ContactSection from "../components/landingPage/ContactSection";
import Projects from "../components/landingPage/Projects";
import AboutPage from "./AboutPage";

export default function HomePage() {
  return (
    <main className="main-bg">
      <IntroSlider />
      <Services />
      <Pricing />
      <Projects />
      <Testomonials />
      <OurTeam />
      <ContactSection />
    </main>
  );
}
