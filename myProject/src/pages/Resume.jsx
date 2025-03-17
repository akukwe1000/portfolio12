import {Link} from 'react-scroll';




const Resume = () => {
    const navItem  = [
        {
          link: <> Education</>, path: 'education'
        },
        {
          link: <> Professional Skill</>, path: 'profession'
        },
        {
          link: <> Experience</>, path: 'experience'
        },
        {
          link: <> Reference</>, path: 'reference'
        },
        
      ]


  return (
    <div>
        <div className='  bg-[#323432] pt-9 pb-9' id='resume'>
            <div className='flex justify-center text-green-700   font-bold text-[50px] mb-5'>My Resume</div>
            <div className='navbaResume h-[54px] w-[90%] m-auto flex items-center justify-evenly mb-7  bg-[#0f0f0f] '>
                {navItem.map(({link,path})=> (
                <Link key={path} className='h-[50px] w-[24%] bg-[#323432]  text-green-700  rounded-xl  text-sm lg:text-2xl flex justify-center items-center  hover:h-[60px] hover:text-xl lg:hover:text-3xl transition-all duration-1000 cursor-pointer'  to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
                ))}

            </div>
            {/* <div className='navbaResume h-[54px] w-[90%] m-auto flex items-center justify-evenly mb-7  bg-[#0f0f0f] '>
                <div className='h-[50px] w-[24%] bg-[#323432]  text-green-700  rounded-xl  text-sm lg:text-2xl flex justify-center items-center  hover:h-[60px] hover:text-xl lg:hover:text-3xl transition-all duration-1000 cursor-pointer'>
                    Education
                </div>
                <div className='h-[50px] w-[24%] bg-[#323432]  text-green-700  rounded-xl  text-xs lg:text-2xl flex justify-center items-center  hover:h-[60px] hover:text-sm lg:hover:text-3xl transition-all duration-1000 cursor-pointer '>
                    Proffesion Skill
                </div>
                <div className='h-[50px] w-[24%] bg-[#323432]  text-green-700  rounded-xl  text-sm lg:text-2xl flex justify-center items-center hover:h-[60px] hover:text-xl lg:hover:text-3xl transition-all duration-1000 cursor-pointer '>
                    Experience
                </div>
                <div className='h-[50px] w-[24%] bg-[#323432]  text-green-700  rounded-xl text-sm lg:text-2xl flex justify-center items-center  hover:h-[60px] hover:text-xl lg:hover:text-3xl transition-all duration-1000 cursor-pointer '>
                    Interview
                </div>
                
            </div> */}

            <div id='education' className='pl-6 pb-6 text-3xl font-bold text-white'>
                <h1>Educational Quality</h1>
            </div>
            <div className='flex items-center flex-col lg:flex-row lg:justify-evenly gap-4 pb-6'>  
            
                <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
                    <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
                </div>
                <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
                    <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
                </div>
                <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
                    <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
                </div>
                
            </div>

            <div id='profession' className='pl-6 pb-6 text-3xl font-bold text-white'>
                <h1>Proffesional Skill</h1>
            </div>
            <div className='flex items-center flex-col lg:flex-row lg:justify-evenly gap-4 pb-6'>  
            
                <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
                    <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
                </div>
                <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
                    <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
                </div>
                <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
                    <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
                </div>
                
            </div>
            <div id='experience' className='pl-6 pb-6 text-3xl font-bold text-white'>
                <h1>Experience</h1>
            </div>
            <div className='flex items-center flex-col lg:flex-row lg:justify-evenly gap-4 pb-6'>  
            
                <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
                    <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
                </div>
                <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
                    <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
                </div>
                <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
                    <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
                </div>
                
            </div>
            <div id='reference' className='pl-6 pb-6 text-3xl font-bold text-white'>
                <h1>Reference</h1>
            </div>
            <div className='flex items-center flex-col lg:flex-row lg:justify-evenly gap-4 pb-6'>  
            
                <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
                    <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
                </div>
                <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
                    <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
                </div>
                <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
                    <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
                </div>
                
            </div>
            
            
        </div>
    </div>
  )
}

export default Resume