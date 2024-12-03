import { FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa';
import logo from '../assets/bentoname.svg';

const Nav = () => {
  return (
    <>
    <div className="w-dvw h-[20dvh] flex justify-between items-center sticky px-4 md:px-16">
        <div className="w-28 md:w-32 flex justify-center items-center">
            <img src={logo} alt='logo'/>
        </div>
        <div className="bg-white border-[1px] shadow py-2 px-8 justify-around rounded-full hidden md:flex fontJetBrains text-sm">
            <div className='cursor-pointer px-6 border-r-2'>Create Bento</div>
            <div className='cursor-pointer px-6 border-r-2'>Featured</div>
            <div className='cursor-pointer px-6'>idk yet</div>
        </div>
        <div>
        <div className="flex gap-2 md:gap-4">
            <a href="https://maybetarun.in" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="text-black text-md md:text-xl hover:-translate-y-1" />
            </a>
            <a href="https://github.com/maybetarun/bentogen" target="_blank" rel="noopener noreferrer">
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