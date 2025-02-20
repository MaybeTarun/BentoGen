import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TextReveal from './ui/text-reveal';

const FeatureGrid = () => {
  const [scale, setScale] = useState(0);
  const scrollThreshold = window.innerHeight;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > scrollThreshold) {
      const newScale = Math.min((scrollY - scrollThreshold) / window.innerHeight, 1);
      setScale(newScale);
    } else {
      setScale(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <motion.div
        className="fixed top-0 left-0 bg-blue-300 z-10"
        style={{
          width: '100vw',
          height: '100vh',
          scale: scale,
          originX: 0.5,
          originY: 0.5,
        }}
      />
    <div className="w-dvw h-dvh p-4 gap-4 grid grid-cols-2 md:grid-cols-[1fr_minmax(100vh,auto)_1fr] sticky top-0">
      <div className="h-full  grid grid-rows-[60%_1fr] gap-4">
        <div className="bg-[#041240] h-full "><div className='w-full h-full text-white fontJetBrains p-4 text-base md:text-xl'>Modular UI<br/>Generator</div></div>
        <div className="bg-[#9BB811] h-full "><div className='w-full h-full text-white fontJetBrains p-4 text-base md:text-xl text-right'>Saves<br/>Time</div></div>
      </div>
      <div className="h-full w-dvh grid-rows-[1fr_6rem_1fr] gap-4 rounded-xl hidden md:grid">
        <div className=" grid grid-cols-[56.1%_1fr] gap-4">
          <div className="bg-[#FFB200]"><div className='w-full h-full text-white fontJetBrains p-4 text-base md:text-xl flex items-end justify-end text-right'>PreBuilt<br/>Templates</div></div>
          <div className="bg-[#1F1E22] flex items-end relative">
            <div className="absolute w-full h-full text-white fontJetBrains p-4 text-base md:text-xl">Responsive<br/>Grids</div>
            <div className="w-full h-1/4 bg-[#1F1E22] -mb-12"></div>
          </div>
        </div>
        <div className="h-24 grid grid-cols-[1fr_auto_1fr] gap-4">
          <div className="bg-[#DE6119] "></div>
          <div className="bg-blue-300 w-24 z-50"></div>
          <div className="bg-[#1F1E22] "></div>
        </div>
        <div className=" grid grid-cols-[1fr_56.1%] gap-4">
          <div className="bg-[#DE6119] relative">
            <div className="w-full h-1/4 bg-[#DE6119] -mt-12"></div>
            <div className="absolute bottom-0 right-0 p-4 text-white fontJetBrains text-base md:text-xl text-right">Copy Code<br/>Feature</div>
          </div>
          <div className="bg-[#7E2954] "><div className='w-full h-full text-white fontJetBrains p-4 text-base md:text-xl text-right'>Real-time<br/>Preview</div></div>
        </div>
      </div>
      <div className="h-full  grid grid-rows-[30%_1fr] gap-4">
        <div className="bg-[#C42A17] h-full "><div className='w-full h-full text-white fontJetBrains p-4 text-base md:text-xl flex items-end'>uses<br/>React.js</div></div>
        <div className="bg-[#977CC1] h-full "><div className='w-full h-full text-white fontJetBrains p-4 text-base md:text-xl flex items-end justify-end text-right'>Random Grid<br/>Generator</div></div>
      </div>
    </div>
    
    <TextReveal className="fontJetBrains z-20" text="We don't just give you ideas; We bring them to life with cool, responsive grids in code."/>

    </>
  )
}

export default FeatureGrid