import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showLoader]);
  return <div className="App">{showLoader ? <Loader /> : <HomePage />}</div>;
}

export default App;
