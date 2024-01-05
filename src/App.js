import "./App.css";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Utilities from "./components/Utilities";
import Kongs from "./components/Kongs";
import Mint from "./components/Mint";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Faqaccordian from "./components/Faqaccordian";
import Roadmap2 from "./components/Roadmap2";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import Backtop from "./components/Backtop";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loder, setloder] = useState(false);
  useEffect(() => {
    setloder(true)
    setTimeout(() => {
      setloder(false)
    }, 3000);
  }, [])
   useEffect(() => {
     AOS.init(
       {
         once: true,
         duration:3000,
       }
        );
      }, [])
  
  return (
    <div>
      {loder ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div className="App">
          <div className="bg-[url(./assets/images/herosection-img.png)] bg-no-repeat bg-size">
            <Herosection />
          </div>
          <About />
          <Utilities />
          <Kongs />
          <div className="bg-[url(./assets/images/bg-mint.png)] lg:pt-[94px] pt-5 bg-no-repeat bg-cover">
            <Mint />
          </div>
          <Roadmap2 />
          <Roadmap />
          <Team />
          <div className="bg-[url(./assets/images/footerbg.png)]  bg-no-repeat bg-size">
            <Faqaccordian />
            </div>
            <Backtop />
        </div>
      )}
    </div>
  );
}

export default App;
