// import {motion} from 'framer-motion';
import RetroGridt from "./components/ui/retro-gridt"
import RetroGridb from "./components/ui/retro-gridb"
import Nav from "./components/Nav";
import HeroText from "./components/HeroText";
import HeroGrid from "./components/HeroGrid";
import Generator from "./components/Generator";

import { FaArrowRightLong } from 'react-icons/fa6';
import { useState, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'

function App() {
  const [isHovered, setIsHovered] = useState(false);
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
      const offset = 160;
      const top = generatorRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <RetroGridt/>
      <Nav/>
      <HeroText/>
      <div className="w-full flex justify-center items-center mt-8 md:mt-4 gap-2">
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
        
      </div>
      <HeroGrid/>
      <div className="w-dvw h-fit p-4" ref={generatorRef}>
        <Generator/>
      </div>
      <div className="w-full flex items-center justify-center"><div className="border-2 w-[80%] mb-2 md:hidden block"></div></div>
      <div className="w-dvw h-dvh p-4 flex justify-center md:mt-8" id="featured">
        <div className="fontJetBrains text-xl md:text-3xl h-fit">Featured <span className="text-[#FFB200]">Bento</span> Grids</div>
      </div>

      <RetroGridb/>
    </>
  )
}

export default App
