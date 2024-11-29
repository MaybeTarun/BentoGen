import { FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa';

const Nav = () => {
  return (
    <>
    <div className="w-dvw h-[20dvh] flex justify-between items-center fixed px-4 md:px-16">
        <div className="fontChango leading-3 md:leading-4 md:text-[1.3rem]">
            <div>BENTO</div>
            <div className="md:ml-[58px] ml-[45px]">GEN</div>
        </div>
        <div className="bg-white border-[1px] shadow py-2 px-8 justify-around rounded-full hidden md:flex fontJetBrains">
            <div className='cursor-pointer px-6 border-r-2'>Home</div>
            <div className='cursor-pointer px-6 border-r-2'>How It Works?</div>
            <div className='cursor-pointer px-6'>idk yet</div>
        </div>
        <div>
        <div className="flex gap-2 md:gap-4">
            <a href="https://maybetarun.in" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="text-black text-md md:text-xl hover:-translate-y-1" />
            </a>
            <a href="https://github.com/maybetarun" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-black text-md md:text-xl hover:-translate-y-1" />
            </a>
            <a href="https://twitter.com/maybetarun" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-black text-md md:text-xl hover:-translate-y-1" />
            </a>
        </div>
        </div>
    </div>
    </>
  )
}

export default Nav