const HeroText = () => {
  return (
    <div className="w-dvw h-fit flex justify-center items-center flex-col text-[3rem] md:text-[6rem]">
        <div className="fontJockey">Design <span className="text-[#FFB200]">Bento</span> Grids</div>
        <div className="-mt-6 md:-mt-12 fontJockey">Effortlessly</div>
        <div className="absolute z-10 text-center flex justify-center items-center w-fit h-fit text-[0.45rem] md:text-sm leading-[0.5rem] md:leading-3 py-1 md:py-2 px-2 md:px-4 md:-mt-[7.5rem] -mt-[4rem] md:-ml-[18rem] -ml-[9rem] -rotate-[8deg] bg-[#6EC207] rounded-full text-white border-b-2 border-r-2 border-white fontJetBrains">100% Responsive</div>
        <div className="text-[1.4rem] md:text-[3rem] -mt-2 md:-mt-6 fontJetBrains"><span className="text-[#3795BD]">Create</span> • <span className="">Customize</span> • <span className="text-[#6EC207]">Deploy</span></div>
    </div>
  )
}

export default HeroText