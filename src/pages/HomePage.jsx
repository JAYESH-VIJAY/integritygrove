import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import IntroSlider from "../components/HomePage/IntroSlider";
import Pricing from "../components/landingPage/Pricing";
import Testomonials from "../components/landingPage/Testimonials";
// import OurTeam from "../components/landingPage/OurTeam";
import Services from "../components/landingPage/Services";
import ContactSection from "../components/landingPage/ContactSection";
import Projects from "../components/landingPage/Projects";
// import AboutPage from "./AboutPage";

export default function HomePage() {
  const location = useLocation(); // Use the useLocation hook

  useEffect(() => {
    const disableBackButton = () => {
      if (location.pathname === "/") {
        // Disable the back button when on the specified path
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = function () {
          window.history.go(1);
        };
      } else {
        // Restore normal behavior if not on the specified path
        window.onpopstate = null;
      }
    };

    disableBackButton();

    // Cleanup the effect to restore normal behavior when the component is unmounted
    return () => {
      window.onpopstate = null;
    };
  }, [location]);

  return (
    <main className="main-bg">
      <IntroSlider />
      <Services />
      <Pricing />
      <Projects />
      <Testomonials />
      {/* <OurTeam /> */}
      <ContactSection />
    </main>
  );
}
