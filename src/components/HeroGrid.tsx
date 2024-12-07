const HeroGrid = () => {
  return (
    <div className="w-full p-2">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        <div className="bg-gray-300 rounded-3xl h-[65dvh] mt-36 md:h-[90dvh] md:-mt-32" />
        <div className="bg-gray-300 rounded-3xl h-[65dvh] mt-12 md:h-[90dvh] md:mt-0" />
        <div className="bg-gray-300 rounded-3xl h-[65dvh] mt-36 md:h-[90dvh] md:mt-32" />
        <div className="hidden md:block bg-gray-300 rounded-3xl h-[90dvh]" />
        <div className="hidden md:block bg-gray-300 rounded-3xl h-[90dvh] -mt-32" />
      </div>
    </div>
  )
}

export default HeroGrid