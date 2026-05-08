// import {motion} from 'framer-motion';
import RetroGridt from "./components/ui/retro-gridt";
import RetroGridb from "./components/ui/retro-gridb";
import Nav from "./components/Nav";
import HeroText from "./components/HeroText";
import HeroGrid from "./components/HeroGrid";
import Generator from "./components/Generator";
// import TextReveal from "./components/ui/text-reveal";
import Features from "./components/FeatureGrid";
import { useCallback, useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { codeLanguages, gridData } from './content/designs';
import { IoIosArrowDown } from 'react-icons/io';
import Toast from './components/Toast';
import ImageWithSkeleton from './components/ImageWithSkeleton';

const INITIAL_VISIBLE_DESIGNS = 6;
const VISIBLE_DESIGN_INCREMENT = 3;

function App() {
  const generatorRef = useRef<HTMLDivElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const copyTimerRef = useRef<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [languagePickerIndex, setLanguagePickerIndex] = useState<number | null>(null);
  const [visibleDesignCount, setVisibleDesignCount] = useState(INITIAL_VISIBLE_DESIGNS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    })
    lenisRef.current = lenis

    let frameId = 0;
    function raf(time: number) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollToGenerator = useCallback(() => {
    if (generatorRef.current) {
      const offset = 48;
      const top = generatorRef.current.getBoundingClientRect().top + window.scrollY - offset;
      if (lenisRef.current) {
        lenisRef.current.scrollTo(top);
      } else {
        window.scrollTo({ top });
      }
    }
  }, []);

  const handleCopyCode = useCallback((code: string, index: number) => {
    void navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setLanguagePickerIndex(null);
    if (copyTimerRef.current) {
      window.clearTimeout(copyTimerRef.current);
    }
    copyTimerRef.current = window.setTimeout(() => setCopiedIndex(null), 1000);
  }, []);

  const handleShowMoreDesigns = useCallback(() => {
    if (visibleDesignCount >= gridData.length) {
      setToastMessage('More Coming Soon 😊');
      return;
    }

    setVisibleDesignCount((count) => Math.min(count + VISIBLE_DESIGN_INCREMENT, gridData.length));
  }, [visibleDesignCount]);

  const visibleGridData = gridData.slice(0, visibleDesignCount);

  return (
    <>
      <RetroGridt />
      <Nav />
      <div className="w-dvw h-[80dvh]">
        <HeroText />
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

      <Features />

      {/* <TextReveal className="fontJetBrains z-20" text="We don't just give you ideas; We bring them to life with cool, responsive grids in code."/> */}

      <div className="relative w-dvw h-fit bg-white z-50">

        <div className="bg-blue-300 h-[40px] w-dvw"></div>
        <div className="bg-white h-[40px] w-dvw"></div>

        <div className="w-dvw h-fit text-center fontJetBrains text-2xl md:text-4xl -mb-8"><span className="text-[#FFB200]">Bento</span> Grid Generator</div>

        <div className="w-dvw h-fit p-4 z-20" ref={generatorRef}>
          <Generator />
        </div>

        {/* <div className="w-full flex items-center justify-center"><div className="border-2 w-[80%] mb-2 md:hidden block"></div></div> */}


        <div className="w-dvw h-fit p-4 flex justify-center md:mt-8" id="featured">
          <div className="w-fit h-fit flex justify-center items-center flex-col">
            <div className="fontJetBrains text-[0.6rem] md:text-sm text-black opacity-50">If you still need ideas, We got you ⬇️</div>
            <div className="fontJetBrains text-2xl md:text-4xl h-fit">Featured <span className="text-[#FFB200]">Bento</span> Grids</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-8 pt-4">
          {visibleGridData.map((item, index) => (
            <div key={item.id} className="overflow-hidden hover:shadow-xl hover:scale-[1.01] rounded-xl relative border-[#222831] border-2">
              <ImageWithSkeleton src={item.image} alt={item.designer} />
              <div className="pt-6 pb-1 px-4 md:py-8 md:px-6 md:pb-1 bg-[#222831] border-t-4 border-white relative">
                <div className="absolute -top-[30px] left-4 bg-[#222831] border-4 border-white text-white rounded-full w-10 h-10 flex items-center justify-center m-2">
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
                    <div className="relative">
                      <button
                        className="bg-white text-black px-6 py-2 rounded-full text-xs md:text-sm hover:-translate-y-[1px]"
                        onClick={() => setLanguagePickerIndex(languagePickerIndex === index ? null : index)}
                      >
                        <span className="block md:hidden">{copiedIndex === index ? 'Copied' : 'Code'}</span>
                        <span className="hidden md:block">{copiedIndex === index ? 'Copied' : 'Copy Code'}</span>
                      </button>
                      {languagePickerIndex === index && (
                        <div className="absolute right-0 bottom-full mb-2 z-50 w-32 rounded-lg border border-white/20 bg-[#222831] p-1 shadow-xl">
                          {codeLanguages.map((language) => (
                            <button
                              key={language.id}
                              type="button"
                              className="block w-full rounded-md px-3 py-2 text-left text-xs text-white hover:bg-white hover:text-black"
                              onClick={() => handleCopyCode(item.code[language.id], index)}
                            >
                              {language.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-center mx-4 mt-4 md:mt-6 py-1 border-t-[1px] border-white text-white/80 text-[0.6rem] md:text-xs">Coded By <a href="https://MaybeTarun.in" target="_blank"><span className="underline cursor-pointer">Tarun</span></a></div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-dvw h-fit flex items-center justify-center">
          <button
            type="button"
            className="p-2 border-2 rounded-full hover:bg-gray-100"
            onClick={handleShowMoreDesigns}
          >
            <IoIosArrowDown />
          </button>
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
      <Toast 
        isVisible={!!toastMessage} 
        message={toastMessage || ''} 
        onClose={() => setToastMessage(null)} 
      />
    </>
  )
}

export default App

