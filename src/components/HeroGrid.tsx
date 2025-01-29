import { motion } from "framer-motion";
import Magnet from "./Magnet.tsx";

interface HeroGridProps {
  scrollToGenerator: () => void;
}

const HeroGrid: React.FC<HeroGridProps> = ({ scrollToGenerator }) => {
  return (
    <motion.div
      className="w-full h-fit flex justify-center items-center p-12 z-40 relative"
      initial={{ y: "-5vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}>

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[90%] md:w-3/4 h-[16rem] bg-gray-100 grid grid-cols-3 grid-rows-3 gap-2 p-2">
          <div className="bg-gray-200 h-full"></div>
          <div className="bg-gray-200 h-full"></div>
          <div className="bg-gray-200 h-full"></div>
          <div className="bg-gray-200 h-full"></div>
          <div className="bg-gray-200 h-full"></div>
          <div className="bg-gray-200 h-full"></div>
          <div className="bg-gray-200 h-full"></div>
          <div className="bg-gray-200 h-full"></div>
          <div className="bg-gray-200 h-full"></div>
        </div>
      </div>

      <div onClick={scrollToGenerator} className="cursor-pointer w-[15rem] h-[15rem] rounded-full bg-blue-300 outline outline-[25px] outline-offset-0 outline-white flex flex-col items-center justify-center text-center text-[1.2rem] hover:text-[1.3rem] transition-all duration-400 fontJetBrains relative z-10">
        <Magnet padding={70} disabled={false} magnetStrength={2}>
          <div className="flex justify-center items-center flex-col">
            <div>Generate</div>
            <div>Now</div>
          </div>
        </Magnet>
      </div>

    </motion.div>
  );
};

export default HeroGrid;