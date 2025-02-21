import { motion } from "framer-motion";
import Magnet from "./Magnet.tsx";

interface HeroGridProps {
  scrollToGenerator: () => void;
}

const HeroGrid: React.FC<HeroGridProps> = ({ scrollToGenerator }) => {
  return (
    <div className="w-full h-fit flex justify-center items-center p-12 z-40 relative">

      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div className="absolute hidden md:block top-[30%] left-[30%] w-[15rem] h-[7rem] bg-[#9BB811] z-10" initial={{ y: -50, rotate: -6 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.5, delay: 0.2 }} whileHover={{ scale: 1.05, transition: { duration: 0 } }}></motion.div>
        <motion.div className="absolute hidden md:block top-[15%] left-[23%] w-[8.5rem] h-[15rem] bg-[#041240] z-0" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} whileHover={{ scale: 1.05, transition: { duration: 0 } }}></motion.div>
        <motion.div className="absolute hidden md:block top-[50%] left-[16%] w-[8rem] h-[8rem] bg-[#977CC1]" initial={{ y: -50, rotate: 0 }} animate={{ y: 0, rotate: 12 }} transition={{ duration: 0.5, delay: 0.5 }} whileHover={{ scale: 1.05, transition: { duration: 0 } }}></motion.div>
        <motion.div className="absolute hidden md:block top-[45%] left-[55%] w-[16rem] h-[8rem] bg-[#FFB200]" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0 }} whileHover={{ scale: 1.05, transition: { duration: 0 } }}></motion.div>
        <motion.div className="absolute hidden md:block top-[17%] left-[69%] w-[8rem] h-[8rem] bg-[#7E2954]" initial={{ y: -50, rotate: 12 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.5, delay: 0.4 }} whileHover={{ scale: 1.05, transition: { duration: 0 } }}></motion.div>
        <motion.div className="absolute hidden md:block top-[30%] left-[77%] w-[7rem] h-[10rem] bg-[#C42A17]" initial={{ y: -50, rotate: 0 }} animate={{ y: 0, rotate: -6 }} transition={{ duration: 0.5, delay: 0.2 }} whileHover={{ scale: 1.05, transition: { duration: 0 } }}></motion.div>
        <motion.div className="absolute md:hidden block bottom-0 w-[20rem] h-[7rem] bg-[#041240]" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} whileHover={{ scale: 1.05, transition: { duration: 0 } }}></motion.div>
      </div>

      <motion.div onClick={scrollToGenerator} className="cursor-pointer w-[15rem] h-[15rem] rounded-full bg-blue-300 flex flex-col items-center justify-center text-center text-[1.2rem] hover:text-[1.3rem] transition-all duration-400 fontJetBrains relative z-10" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0 }}>
        <Magnet padding={70} disabled={false} magnetStrength={2}>
          <div className="flex justify-center items-center flex-col">
            <div>Generate</div>
            <div>Now</div>
          </div>
        </Magnet>
      </motion.div>

    </div>
  );
};

export default HeroGrid;