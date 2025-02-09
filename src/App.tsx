// import {motion} from 'framer-motion';
import RetroGridt from "./components/ui/retro-gridt"
import RetroGridb from "./components/ui/retro-gridb"
import Nav from "./components/Nav";
import HeroText from "./components/HeroText";
import HeroGrid from "./components/HeroGrid";
import Generator from "./components/Generator";
import TextReveal from "./components/ui/text-reveal";
// import { FaArrowRightLong } from 'react-icons/fa6';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
// import tut from './assets/tut.mp4';

function App() {
  // const [isHovered, setIsHovered] = useState(false);
  const generatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1.0, 
      touchMultiplier: 2.0,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }   

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const scrollToGenerator = () => {
    if (generatorRef.current) {
      const offset = 70; // Adjust offset as needed
      const top = generatorRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top });
    }
  };

  return (
    <>
      <RetroGridt/>
      <Nav/>
      <div className="w-dvw h-[80dvh]">
        <HeroText/>
        <HeroGrid scrollToGenerator={scrollToGenerator} />
      </div>
      
      {/* <div className="w-full flex justify-center items-center mt-8 md:mt-4 gap-2">
        <div 
          className={`absolute ${isHovered ? 'w-44 -ml-0' : 'w-10 -ml-[8.5rem]'} h-10 bg-blue-300 rounded-full z-10 transition-all duration-500`}
        ></div>
        <button 
          className="w-fit text-black z-20 fontJetBrains flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={scrollToGenerator}
        >Generate Now
        <FaArrowRightLong className={`ml-2 z-20 ${isHovered ? 'rotate-90 transition-transform duration-500' : ''}`}/>
        </button>
        
      </div> */}

      <div className="w-dvw h-dvh p-4 gap-4 grid grid-cols-[1fr_minmax(100vh,auto)_1fr]">
        <div className="bg-blue-500 h-full rounded-lg"></div>
        <div className="h-full w-dvh grid grid-rows-[1fr_6rem_1fr] gap-4 rounded-xl">
          <div className="rounded-lg grid grid-cols-[56.1%_1fr] gap-4">
            <div className="bg-yellow-300 rounded-lg"></div>
            <div className="bg-green-500 rounded-lg flex items-end">
              <div className="w-full h-1/4 bg-green-500 -mb-12"></div>
            </div>
          </div>
          <div className="h-24 grid grid-cols-[1fr_auto_1fr] gap-4">
            <div className="bg-green-500 rounded-lg"></div>
            <div className="bg-red-500 w-24 rounded-lg"></div>
            <div className="bg-green-500 rounded-lg"></div>
          </div>
          <div className="rounded-lg grid grid-cols-[1fr_56.1%] gap-4">
            <div className="bg-green-500 rounded-lg">
              <div className="w-full h-1/4 bg-green-500 -mt-12"></div>
            </div>
            <div className="bg-yellow-300 rounded-lg"></div>
          </div>
        </div>
        <div className="bg-blue-500 h-full rounded-xl"></div>
      </div>

      
      <TextReveal className="fontJetBrains" text="We don't just give you ideas; We bring them to life with cool, responsive grids in code."/>

      <div className="bg-white h-[80px] md:h-[200px] w-dvw"></div>
      <div className="w-dvw h-fit text-center fontJetBrains text-2xl md:text-4xl -mb-8"><span className="text-[#FFB200]">Bento</span> Grid Generator</div>

      <div className="w-dvw h-fit p-4" ref={generatorRef}>
        <Generator/>
      </div>

      {/* <div className="w-full flex items-center justify-center"><div className="border-2 w-[80%] mb-2 md:hidden block"></div></div> */}


      <div className="w-dvw h-dvh p-4 flex justify-center md:mt-8" id="featured">
        <div className="w-fit h-fit flex justify-center items-center flex-col">
          <div className="fontJetBrains text-[0.6rem] md:text-sm text-black opacity-50">If you still need ideas, We got you ⬇️</div>
          <div className="fontJetBrains text-2xl md:text-4xl h-fit">Featured <span className="text-[#FFB200]">Bento</span> Grids</div>
        </div>
      </div>

      {/* <TextReveal className="fontJetBrains" text="Still not finding the perfect grid for your website? Don't worry! Scroll down to learn how to create your own."/>

      <div className="w-dvw h-dvh p-4 flex justify-center items-center">
        <video controls className="w-full max-w-4xl border-2 border-gray-400 p-2">
          <source src={tut} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div> */}

      <div className="relative">
        <RetroGridb />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="fontJetBrains text-base md:text-lg">
            Made by <a href="https://MaybeTarun.in" target="_blank" className="hover:opacity-70 border-b-2 border-[#000000ad]">this guy</a>.
          </span>
        </div>
      </div>
      
    </>
  )
}

export default App
