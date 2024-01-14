import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import OurTeamPage from "./pages/OurTeamPage";
import ProjectPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/ourTeamPage/Header";
import ContactPage from "./pages/ContactPage";
function App() {
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
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ourteam" element={<OurTeamPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
