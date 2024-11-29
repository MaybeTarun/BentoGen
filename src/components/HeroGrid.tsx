const HeroGrid = () => {
  return (
    <div className="w-full p-2">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        <div className="bg-gray-300 rounded-3xl h-[75dvh] mt-40 md:h-[90dvh] md:-mt-32" />
        <div className="bg-gray-300 rounded-3xl h-[65dvh] mt-10 md:h-[80dvh] md:mt-12" />
        <div className="bg-gray-300 rounded-3xl h-[65dvh] mt-28 md:h-[50dvh] md:mt-28" />
        <div className="hidden md:block bg-gray-300 rounded-3xl h-[55dvh]" />
        <div className="hidden md:block bg-gray-300 rounded-3xl h-[95dvh] -mt-40" />
      </div>
    </div>
  )
}

export default HeroGrid