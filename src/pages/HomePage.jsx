import IntroSlider from "../components/HomePage/IntroSlider";
import Pricing from "../components/landingPage/Pricing";
import Testomonials from "../components/landingPage/Testomonials";
import OurTeam from "../components/landingPage/OurTeam";
import Services from "../components/landingPage/services";
import ContactSection from "../components/landingPage/ContactSection";
import Projects from "../components/landingPage/Projects";



export default function HomePage() {
  return (
    <main className="main-bg">
      <IntroSlider />
      <Pricing />
      <Services />
      <Projects />
      <Testomonials />
      <OurTeam />
      <ContactSection />
    </main>
  );
}
