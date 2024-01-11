import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import OurTeamPage from "./pages/OurTeamPage";
import ProjectPage from "./pages/ProjectPage";
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
        <Route index element={<ProjectPage />} />
      </Route>
    </Routes>
  );
}

export default App;
