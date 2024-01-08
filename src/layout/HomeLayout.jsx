import Navbar from "../components/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}
