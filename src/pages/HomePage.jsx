import Blog from "../Components/HomePage/Blog/Blog";
import OurClient from "../Components/HomePage/Brands/OurClient";
import Header from "../Components/HomePage/Header/Header";
import Marquee from "../Components/HomePage/Marquee slider/Marquee";
import Section from "../Components/HomePage/Section/Section";
import TabService from "../Components/HomePage/Service-tab/tabService";
import Service from "../Components/HomePage/Services/Service";
import Testimo from "../Components/HomePage/Testimonails/Testimo";
import ScrollX from "../Components/HomePage/VerticalScroll/ScrollX";
import IntroSlider from "../components/HomePage/IntroSlider";
import Pricing from "../components/landingPage/Pricing";
import Testomonials from "../components/landingPage/Testomonials";
import AboutPage from "./AboutPage";


export default function HomePage() {
  return (
    <main className="main-bg">
      {/* <IntroSlider /> */}
      {/* <Header />
      <Section />
      <Marquee />
      <Service />
      <ScrollX />
      <TabService />
    <Testimo />
    <Blog /> */}
      {/* <Pricing/>
      <Testomonials/> */}
 <AboutPage/>
    </main>
  );
}
