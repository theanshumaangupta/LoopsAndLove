
import Slider from "./components/Slider";
import Explore from "./components/Explore";
import Banner2 from "./components/Banner2";
import Explore2 from "./components/Explore2";
import Journal from "./components/Journal";
import Parallax from "./components/Parallax";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import About from "./components/About";
import Whatsapp from "./components/Whatsapp";
import Contact from "./components/Contact";
export default function Home() {
  return( 
    <div className="min-h-screen w-full overflow-x-hidden ">
      <Slider />
      <Explore/>
      <Banner2/>
      <Explore2/>
      <Journal/>
      <Parallax/>
      <Instagram/>
      <About/>
      <Whatsapp/>
      {/* <Contact/> */}
      <Footer/>

    </div>
  );
}
