import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
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

        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
