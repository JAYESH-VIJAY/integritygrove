import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import OurTeamPage from "./pages/OurTeamPage";
import ProjectPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/ourTeamPage/Header";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";

function App() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    try {
      if ("scrollBehavior" in document.documentElement.style) {
        // Use smooth scrolling if supported
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Fallback to traditional scrolling
        window.scrollTo(0, 0);
      }
    } catch (error) {
      // Fallback to traditional scrolling in case of any error
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showLoader]);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/portfolio" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ourteam" element={<OurTeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Route>
    </Routes>
  );
}

export default App;
