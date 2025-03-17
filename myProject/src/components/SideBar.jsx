import {useEffect} from 'react'
import me from '../assets/me.jpg'
import { useDarkMode } from '../components/DarkModeContext';
import { AiFillHome } from 'react-icons/ai';

import AOS from 'aos';
import 'aos/dist/aos.css';


const SideBar = () => {
    useEffect(()=>{
        AOS.init({
            offset:200,
            duration:800,
            easing:'ease-in-sine',
            delay:100,
        });
    }, [])

    const {darkMode, toggleDarkMode} = useDarkMode();

  return (
    <div id='sidebar' className={`${darkMode ? 'dark bg-white' : 'light bg-[#323432]'} border border-blue-300   h-[150vh] overflow-y-auto`} >
        <div className='flex justify-center pt-12 '>
            <div className=' border-[4px] border-[#4B4E4B] rounded-[50%] '>
                <img src={me} className='rounded-[50%]' alt="" />
            </div>
        </div>
        <div className='flex flex-col  justify-center pl-[40px] gap-4  pt-[40px]'>
        <h1 className='flex gap-3 hover:text-red-700 text-xl text-gray-400 cursor-pointer transition-colors duration-1000'><AiFillHome size={25} /> HOME</h1>
        <h1 className='flex gap-3 hover:text-red-700 text-xl text-gray-400 cursor-pointer transition-colors duration-1000'><AiFillHome size={25} /> FEATURES</h1>
        <h1 className='flex gap-3 hover:text-red-700 text-xl text-gray-400 cursor-pointer transition-colors duration-1000'><AiFillHome size={25} /> PORTFOLIO</h1>
        <h1 className='flex gap-3 hover:text-red-700 text-xl text-gray-400 cursor-pointer transition-colors duration-1000'><AiFillHome size={25} /> RESUME</h1>
        <h1 className='flex gap-3 hover:text-red-700 text-xl text-gray-400 cursor-pointer transition-colors duration-1000'><AiFillHome size={25} /> PRICING</h1>
        </div>




            {/* this hello guy is what is making the scroll bar show so please do not remove  */}
        <div className='mt-[800px]'></div>
    </div>
  )
}

export default SideBar