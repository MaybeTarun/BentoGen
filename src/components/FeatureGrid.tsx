const FeatureGrid = () => {
  return (
    <div className="w-full h-full p-4 gap-4 grid grid-cols-[1fr_minmax(100vh,auto)_1fr] sticky top-0">
        <div className="h-full  grid grid-rows-[60%_1fr] gap-4">
          <div className="bg-[#041240] h-full "><div className='w-full h-full text-white fontJetBrains p-4 text-base md:text-xl'>Modular UI<br/>Generator</div></div>
          <div className="bg-[#9BB811] h-full "><div className='w-full h-full text-white fontJetBrains p-4 text-base md:text-xl text-right'>Saves<br/>Time</div></div>
        </div>
        <div className="h-full w-dvh grid grid-rows-[1fr_6rem_1fr] gap-4 rounded-xl">
          <div className=" grid grid-cols-[56.1%_1fr] gap-4">
            <div className="bg-[#FFB200] "><div className='w-full h-full text-white fontJetBrains p-4 text-base md:text-xl flex items-end justify-end text-right'>PreBuilt<br/>Templates</div></div>
            <div className="bg-[#1F1E22] flex items-end relative">
              <div className="absolute w-full h-full text-white fontJetBrains p-4 text-base md:text-xl">Responsive<br/>Grids</div>
              <div className="w-full h-1/4 bg-[#1F1E22] -mb-12"></div>
            </div>
          </div>
          <div className="h-24 grid grid-cols-[1fr_auto_1fr] gap-4">
            <div className="bg-[#DE6119] "></div>
            <div className="bg-[#3795BD] w-24 z-50"></div>
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
  )
}

export default FeatureGrid