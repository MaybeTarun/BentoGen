import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div className="w-dvw h-fit flex justify-center items-center flex-col text-[3rem] md:text-[6rem] z-50"
      initial={{ y: 50, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}>
      <div className="fontJockey">Design <span className="text-[#FFB200]">Bento</span> Grids</div>
      <div className="-mt-6 md:-mt-12 fontJockey">Effortlessly</div>
      <motion.div 
        drag
        dragMomentum={false}
        initial={{ x: 0, y: 0, rotate: -8 }}
        whileDrag={{ scale: 1.1, rotate: -8 }}
        dragSnapToOrigin
        dragElastic={0.3}
        transition={{ 
          type: "spring",
          damping: 50,
          stiffness: 150,
          delay: 1
        }}
        className="absolute z-10 text-center flex justify-center items-center w-fit h-fit text-[0.45rem] md:text-sm leading-[0.5rem] md:leading-3 py-1 md:py-2 px-2 md:px-4 md:-mt-[7.5rem] -mt-[4rem] md:-ml-[18rem] -ml-[9rem] bg-[#6EC207] rounded-full text-white border-b-2 border-r-2 border-white fontJetBrains cursor-move"
      >
        100% Responsive
      </motion.div>
      <div className="text-[1.3rem] md:text-[2.5rem] -mt-2 md:-mt-6 fontJetBrains">
        <span className="text-[#3795BD]">Create</span> • <span className="">Customize</span> • <span className="text-[#6EC207]">Deploy</span>
      </div>
    </motion.div>
  )
}

export default HeroText