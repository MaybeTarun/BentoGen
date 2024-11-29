// import {motion} from 'framer-motion';
import RetroGridt from "./components/ui/retro-gridt"
import RetroGridb from "./components/ui/retro-gridb"
import Nav from "./components/Nav";
import HeroText from "./components/HeroText";
import HeroGrid from "./components/HeroGrid";
import { FaArrowRightLong } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

function App() {
  const [isHovered, setIsHovered] = useState(false);

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
          className="w-fit text-black z-20 fontJetBrains"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >Generate Now</button>
        <FaArrowRightLong 
          className="mt-[2px] z-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <HeroGrid/>
      <div className="w-dvw h-dvh">

      </div>
      <RetroGridb/>
    </>
  )
}

export default App
