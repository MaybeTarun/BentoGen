import { motion } from "framer-motion";
import Magnet from "./Magnet.tsx";

interface HeroGridProps {
  scrollToGenerator: () => void;
}

const HeroGrid: React.FC<HeroGridProps> = ({ scrollToGenerator }) => {
  return (
    <motion.div className="w-full h-fit flex flex-col md:flex-row justify-center items-center p-12 z-40"
      initial={{ y: "-5vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}>
      <div className="hidden md:flex w-[15rem] h-[15rem] items-center justify-center hover:scale-90 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" id="SvgjsSvg1160" width="220" height="220" viewBox="0 0 512 512" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path d="m256.002 242.913 210.412-121.43L256.002 0 45.586 121.483zm-15.053 26.073L30.534 147.557v242.96L240.949 512zm30.107 0V512l210.41-121.483v-242.96z" fill="rgba(193, 193, 193, 1)"></path>
        </svg>
      </div>
      <div className="hidden md:flex w-[15rem] h-[15rem] items-center justify-center hover:scale-90 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 24 24" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path d="M6 0H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm0 8.5H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm9.5 6v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1zm0-8.5V1a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1zM23 0h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm-5 15.5h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm0 8.5h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zM0 18v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1zm8.5 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1z" fill="rgba(193, 193, 193, 1)"></path>
        </svg>
      </div>
      <div onClick={scrollToGenerator} className="cursor-pointer w-[15rem] h-[15rem] rounded-full bg-blue-300 flex flex-col items-center justify-center text-center text-[1.2rem] hover:text-[1.3rem] transition-all duration-400 fontJetBrains">
        <Magnet padding={70} disabled={false} magnetStrength={2}>
          <div>Generate</div>
          <div>Now</div>
        </Magnet>
      </div>
      <div className="flex justify-center items-center w-[15rem] h-[15rem] hover:scale-90 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" id="SvgjsSvg1154" width="220" height="220" viewBox="0 0 512 512" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path d="M0 0h146.478v146.705H0zm182.761 0h146.478v146.705H182.761zm256 0c-40.384 0-73.239 32.855-73.239 73.239v.228c0 40.384 32.855 73.238 73.239 73.238S512 113.851 512 73.467v-.228C512 32.855 479.145 0 438.761 0zM73.239 182.648C32.855 182.648 0 215.503 0 255.887v.228c0 40.384 32.855 73.238 73.239 73.238s73.239-32.854 73.239-73.238v-.228c0-40.384-32.855-73.239-73.239-73.239zm109.522 0h146.478v146.704H182.761zm182.761 0H512v146.704H365.522zM0 365.296h146.478V512H0zm256 0c-40.384 0-73.239 32.854-73.239 73.238v.228C182.761 479.146 215.616 512 256 512s73.239-32.854 73.239-73.238v-.228c0-40.384-32.855-73.238-73.239-73.238zm109.522 0H512V512H365.522z" fill="rgba(193, 193, 193, 1)"></path>
        </svg>
      </div>
      <div className="hidden md:flex items-center justify-center w-[15rem] h-[15rem]  hover:scale-90 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" id="SvgjsSvg1151" width="240" height="240" viewBox="0 0 200 200" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path id="SvgjsPath1150" d="M12 17v83c0 49.3 40.5 89.1 90.1 88 46.8-1.1 85-39.4 85.9-86.2.5-25-9.5-47.7-25.8-64C146.3 21.9 124.3 12 100 12H17c-2.7 0-5 2.3-5 5z" fill="rgba(193, 193, 193, 1)"></path>
        </svg>
      </div>
    </motion.div>
  )
}

export default HeroGrid
