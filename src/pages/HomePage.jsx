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
import OurTeam from "../components/landingPage/OurTeam";
import Services from "../components/landingPage/Services";

export default function HomePage() {
  return (
    <main className="main-bg">
      {/* <IntroSlider />
      <Header/>
      <Section />
      <Marquee />
      <OurClient />
      <Service />
      <ScrollX />
      <TabService/>
      <Testimo/>
      <Blog/> */}
      <Services />
      <OurTeam />
    </main>
  );
}
