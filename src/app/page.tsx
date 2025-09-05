
import Slider from "./components/Slider";
import Explore from "./components/Explore";
import Banner2 from "./components/Banner2";
import Explore2 from "./components/Explore2";
import Journal from "./components/Journal";
export default function Home() {
  return( 
    <div className="min-h-screen w-full ">
      <Slider />
      <Explore/>
      <Banner2/>
      <Explore2/>
      <Journal/>
    </div>
  );
}
