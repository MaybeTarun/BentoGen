// import {motion} from 'framer-motion';
import RetroGridt from "./components/ui/retro-gridt";
import RetroGridb from "./components/ui/retro-gridb";
import Nav from "./components/Nav";
import HeroText from "./components/HeroText";
import HeroGrid from "./components/HeroGrid";
import Generator from "./components/Generator";
// import TextReveal from "./components/ui/text-reveal";
import Features from "./components/FeatureGrid";
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import grid1 from './assets/grid1.png';
import grid2 from './assets/grid2.png';
import grid3 from './assets/grid3.png';
import grid4 from './assets/grid4.png';
import grid5 from './assets/grid5.png';
import grid6 from './assets/grid6.png';
import { IoIosArrowDown } from "react-icons/io";

function App() {
  const generatorRef = useRef<HTMLDivElement | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
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
      const offset = 48; 
      const top = generatorRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top });
    }
  };

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1000);
  };

  const gridData = [
      {
          id: 1,
          image: grid1,
          designer: "HALO Lab",
          link: "https://dribbble.com/shots/25279296-Sync-SaaS-Branding",
          code: "<div>Design 1 Code</div>",
          numberOfBoxes: 7,
      },
      {
          id: 2,
          image: grid2,
          designer: "Ghulam Rasool",
          link: "https://dribbble.com/shots/23625635-Bento-2-0",
          code: "<div>Design 2 Code</div>",
          numberOfBoxes: 4,
      },
      {
          id: 3,
          image: grid3,
          designer: "M. M. Kamal",
          link: "https://dribbble.com/shots/25127648-UI-UX-Design-for-Agency-Website",
          code: "<div>Design 3 Code</div>",
          numberOfBoxes: 4,
      },
      {
          id: 4,
          image: grid4,
          designer: "Paperpillar",
          link: "https://dribbble.com/shots/24670637-Free-UI-Kit-E-Commerce-Landing-Page",
          code: "<div>Design 4 Code</div>",
          numberOfBoxes: 4,
      },
      {
          id: 5,
          image: grid5,
          designer: "lilcoderman",
          link: "https://www.instagram.com/p/DBq69_rNM33/",
          code: "<div>Design 5 Code</div>",
          numberOfBoxes: 4,
      },
      {
          id: 6,
          image: grid6,
          designer: "D Studio",
          link: "https://dribbble.com/shots/25338079-Stats-UI",
          code: "<div>Design 6 Code</div>",
          numberOfBoxes: 4,
      }
  ];

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

      <Features/>
      
      {/* <TextReveal className="fontJetBrains z-20" text="We don't just give you ideas; We bring them to life with cool, responsive grids in code."/> */}

      <div className="w-dvw h-fit bg-white z-50 absolute">

        <div className="bg-blue-300 h-[40px] w-dvw"></div>
        <div className="bg-white h-[40px] w-dvw"></div>

        <div className="w-dvw h-fit text-center fontJetBrains text-2xl md:text-4xl -mb-8"><span className="text-[#FFB200]">Bento</span> Grid Generator</div>

        <div className="w-dvw h-fit p-4 z-20" ref={generatorRef}>
          <Generator/>
        </div>

        {/* <div className="w-full flex items-center justify-center"><div className="border-2 w-[80%] mb-2 md:hidden block"></div></div> */}


        <div className="w-dvw h-fit p-4 flex justify-center md:mt-8" id="featured">
          <div className="w-fit h-fit flex justify-center items-center flex-col">
            <div className="fontJetBrains text-[0.6rem] md:text-sm text-black opacity-50">If you still need ideas, We got you ⬇️</div>
            <div className="fontJetBrains text-2xl md:text-4xl h-fit">Featured <span className="text-[#FFB200]">Bento</span> Grids</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 pt-4">
          {gridData.map((item, index) => (
            <div key={item.id} className="overflow-hidden hover:shadow-xl hover:scale-[1.01] rounded-xl relative border-[#222831] border-2">
              <img src={item.image} alt={item.designer} className="w-full h-auto object-cover" />
              <div className="pt-6 pb-1 px-4 md:p-8 md:pb-1 bg-[#222831] border-t-4 border-white relative">
                <div className="absolute -top-[30px] left-[5%] bg-[#222831] border-4 border-white text-white rounded-full w-10 h-10 flex items-center justify-center m-2">
                  {item.numberOfBoxes}
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-extralight text-xs md:text-sm">Design By</p>
                    <p className="fontJetBrains font-extrabold text-white text-sm md:text-base">{item.designer}</p>
                  </div>
                  <div className="flex space-x-2">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="bg-blue-300 text-black px-6 py-2 rounded-full text-xs md:text-sm hover:-translate-y-[1px]">
                      <span className="block md:hidden">Link</span>
                      <span className="hidden md:block">Link to Design</span>
                    </a>
                    <button 
                      className="bg-white text-black px-6 py-2 rounded-full text-xs md:text-sm hover:-translate-y-[1px]"
                      onClick={() => handleCopyCode(item.code, index)}
                    >
                      <span className="block md:hidden">{copiedIndex === index ? 'Copied' : 'Code'}</span>
                      <span className="hidden md:block">{copiedIndex === index ? 'Copied' : 'Copy Code'}</span>
                    </button>
                  </div>
                </div>
                <div className="text-center mx-6 mt-4 md:mt-6 pt-1 border-t-[1px] border-white text-white/80 text-[0.6rem] md:text-xs">Coded By <a href="https://MaybeTarun.in" target="_blank"><span className="underline cursor-pointer">Tarun</span></a></div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-dvw h-fit flex items-center justify-center">
          <div className="cursor-not-allowed p-2 border-2 rounded-full hover:bg-gray-100" onClick={() => alert('More Coming Soon 😊')}><IoIosArrowDown /></div>
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

      </div>
    </>
  )
}

export default App

