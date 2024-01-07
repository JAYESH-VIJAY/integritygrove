import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from './../components/Footer/Footer'
export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}
