import  { useEffect, useState } from 'react';
import programmer from '../assets/programmer.jpg';
// import { useDarkMode } from '../components/DarkModeContext';
import {Link} from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';
import {FaXmark, FaBars} from 'react-icons/fa6';
import me from '../assets/me.jpg';
import { AiFillHome } from 'react-icons/ai';


const Hero = () => {
  const [lineIndex, setLineIndex] = useState(0); // Initialize lineIndex state variable

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  // use effect code for my typewritter display starts here
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the line index when the current line completes
      setLineIndex(prevIndex => (prevIndex + 1) % 4); // Assuming you have 3 lines
    }, 2000); // Adjust this interval based on your animation duration

    // Clear the interval when the component unmounts or lineIndex changes
    return () => clearInterval(interval);
  }, [lineIndex]);

  // use effect code for my typewritter display ends here


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = () =>{
    setIsMenuOpen(false);
  }

  // const { darkMode, toggleDarkMode } = useDarkMode();

  const navItem  = [
    {
      link: <><AiFillHome size={25} /> Home</>, path: 'home'
    },
    // {
    //   link: <><AiFillHome size={25} /> Home</>, path: 'home'
    // },
    {
      link: <><AiFillHome size={25} /> Features</>, path: 'features'
    },
    {
      link: <><AiFillHome size={25} /> Resume</>, path: 'resume'
    },
    {
      link: <><AiFillHome size={25} /> Portfolio</>, path: 'portfolio'
    },
    
  ]

  return (
    <>
    <div className='h-[70vh]   bg-cover bg-center font-bold   border-red-800 flex flex-col  ' style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${programmer})` }}>
      {/* Mobile menu starts here  */}
      <div className='  flex lg:hidden mr-3 mt-3' onClick={toggleMenu}>
          <div className='pl-[20px]' >
            {isMenuOpen ? <FaXmark  className='text-white dark:text-black text-3xl cursor-pointer'/> : <FaBars className='text-white dark:text-black text-3xl cursor-pointer'/> }
          </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} w-[90%] h-fit bg-[#323432] p-4 absolute top-[60px] right-0 z-20`} onClick={closeMenu}>

          <div className='flex justify-center pt-6 '>
                <div className=' border-[4px] border-[#4B4E4B] rounded-[50%] '>
                    <img src={me} className='rounded-[50%] h-[150px] w-[150px]' alt="" />
                </div>
            </div>

        <ul className='flex flex-col justify-center  items-center gap-2 w-full'>
          {navItem.map(({link,path})=> (
            <Link key={path} className={`${isMenuOpen ? 'flex' : 'hidden'} text-white uppercase text-[24px] font-semibold cursor-pointer p-3rounded-lg hover:bg-red-600 hover:text-black w-full flex items-center gap-2 text-center`} onClick={closeMenu} to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
          ))}
        </ul>
      </div>


      <h1 data-aos='zoom-in' data-aos-delay='200' className='text-white  w-full lg:leading-[110px] leading-[90px] lg:mt-[150px] mt-[70px] text-center lg:text-[120px] text-[80px]'>
        
        AKUKWE <br /> FAVOUR</h1>
                  {/* typewriter starts here   */}
      <div className="mt-[20px] mb-[10px] w-full flex flex-col items-center text-center typewriter">
        {/* Display the current line based on lineIndex */}
        <p className="lg:text-[30px] text-[25px] font-bold text-pink-700 animated typewriter-text">{[
          "I am a mechanical engineer",
          "I am a software engineer",
          "I am a fish griller",
          "I am an AI engineer"
        ][lineIndex]}</p>
      </div>

      <div className=' w-full flex justify-center'>
        <button data-aos="slide-up" data-aos-delay="200" className='bg-[#555555] p-2 rounded-[10px] text-[20px]'>Contact Me</button>

      </div>

    </div>

    
    </>

    
  )
}

export default Hero;
