import { motion } from "framer-motion";
import Magnet from "./Magnet.tsx";

interface HeroGridProps {
  scrollToGenerator: () => void;
}

const HeroGrid: React.FC<HeroGridProps> = ({ scrollToGenerator }) => {
  return (
    <motion.div className="w-full h-fit flex flex-col md:flex-row justify-center items-center p-12 z-40 gap-4"
      initial={{ y: "-5vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}>
      <div className="hidden md:flex w-[14rem] h-[14rem] items-center justify-center hover:scale-95 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" id="SvgjsSvg1160" width="220" height="220" viewBox="0 0 512 512" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path d="m256.002 242.913 210.412-121.43L256.002 0 45.586 121.483zm-15.053 26.073L30.534 147.557v242.96L240.949 512zm30.107 0V512l210.41-121.483v-242.96z" fill="rgba(209, 213, 219, 1)"></path>
        </svg>
      </div>
      <div className="hidden md:flex w-[14rem] h-[14rem] items-center justify-center group">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full">
          <div className="bg-gray-300 h-full rounded-lg transition-colors group-hover:bg-blue-300 delay-0"></div>
          <div className="bg-gray-300 h-full rounded-lg transition-colors group-hover:bg-purple-400 delay-[0.05s]"></div>
          <div className="bg-gray-300 h-full rounded-lg transition-colors group-hover:bg-yellow-300 delay-[0.1s]"></div>
          <div className="bg-gray-300 h-full rounded-lg transition-colors group-hover:bg-red-300 delay-[0.35s]"></div>
          <div className="bg-gray-300 h-full rounded-lg transition-colors group-hover:bg-green-400 delay-[0.4s]"></div>
          <div className="bg-gray-300 h-full rounded-lg transition-colors group-hover:bg-pink-300 delay-[0.15s]"></div>
          <div className="bg-gray-300 h-full rounded-lg transition-colors group-hover:bg-indigo-300 delay-[0.3s]"></div>
          <div className="bg-gray-300 h-full rounded-lg transition-colors group-hover:bg-teal-300 delay-[0.25s]"></div>
          <div className="bg-gray-300 h-full rounded-lg transition-colors group-hover:bg-orange-300 delay-[0.2s]"></div>
        </div>
      </div>
      <div onClick={scrollToGenerator} className="cursor-pointer w-[15rem] h-[15rem] rounded-full bg-blue-300 flex flex-col items-center justify-center text-center text-[1.2rem] hover:text-[1.3rem] transition-all duration-400 fontJetBrains">
        <Magnet padding={70} disabled={false} magnetStrength={2}>
          <div>Generate</div>
          <div>Now</div>
        </Magnet>
      </div>
      <div className="flex justify-center items-center w-[14rem] h-[14rem] transition-all duration-300 group">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full">
          <div className="bg-gray-300 h-full"></div>
          <div className="bg-gray-300 h-full"></div>
          <div className="bg-gray-300 h-full rounded-full transition-colors group-hover:bg-[#3795BD] delay-0"></div>
          <div className="bg-gray-300 h-full rounded-full transition-colors group-hover:bg-[#FFB200] delay-[0.1s]"></div>
          <div className="bg-gray-300 h-full"></div>
          <div className="bg-gray-300 h-full"></div>
          <div className="bg-gray-300 h-full"></div>
          <div className="bg-gray-300 h-full rounded-full transition-colors group-hover:bg-[#6EC207] delay-[0.2s]"></div>
          <div className="bg-gray-300 h-full"></div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center w-[15rem] h-[15rem]  hover:scale-95 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" id="SvgjsSvg1151" width="240" height="240" viewBox="0 0 200 200" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path id="SvgjsPath1150" d="M12 17v83c0 49.3 40.5 89.1 95.1 88 46.8-1.1 85-39.4 85.9-86.2.5-25-9.5-47.7-25.8-64C146.3 21.9 124.3 12 100 12H17c-2.7 0-5 2.3-5 5z" fill="rgba(209, 213, 219, 1)"></path>
        </svg>
      </div>
    </motion.div>
  )
}

export default HeroGrid
