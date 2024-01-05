import "./App.css";
import Loader from "./Components/Loader/Loader";
import Home from "./Components/Home/Home";
import { useEffect,useState } from "react";
function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showLoader]);
  return <div className="App">{showLoader ? <Loader /> : <Home />}</div>;
}

export default App;
