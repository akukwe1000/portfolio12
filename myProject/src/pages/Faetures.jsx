import './Hero.css';
import {FaCar,FaCode,FaClipboardCheck,FaFish} from 'react-icons/fa';
import {IoIosSettings} from 'react-icons/io'
import {AiOutlineRobot} from 'react-icons/ai'


const Faetures = () => {
  return (
    <div className='  bg-[#323432]  pt-9 pb-9' id='features'>
        <div className='flex justify-center text-green-700 font-bold text-[50px]'>Features</div>
        <div className='flex justify-center font-bold text-[60px] text-white'>What I Do</div>
        <div className='flex  items-center flex-col lg:flex-row lg:justify-evenly gap-4'>  
          
          <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
            <div className='flex items-center text-[60px] p-2'>
              <FaCar className='text-blue-900 ' />
              <FaClipboardCheck className='text-orange-900 ' /> 
            </div>
              <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
          </div>

          <div className=' h-[200px] lg:h-[350px] p-2 w-[60%] lg:w-[30%] bg-[#2b2c2b] shadow-2xl rounded-xl'>
            <div className='flex items-center text-[60px] p-2'>
                <IoIosSettings/>
                <FaCode className='text-blue-900 ' />
              </div>
              <p className='text-white text-sm  lg:text-xl'> A dynamic and multifacted field that focuses on systematic design  development, testing an maintenance of software applications. Utilizings technologies to create softwares that meet user needs and industries standards. </p>
          </div>

          <div className=' h-[200px] lg:h-[350px] p-2 w-[60%] lg:w-[30%] bg-[#2b2c2b] shadow-2xl rounded-xl'>
          <div className='flex items-center text-[60px] p-2'>
                <AiOutlineRobot className='text-blue-900 ' />
              </div>
              <p className='text-white text-sm  lg:text-xl'>Combining principle of artificial inteligence and software engineering to create scalable, efficient and robust AI system to meet individual desires.</p>
          </div>
        </div>

        <div className='flex  flex-col lg:flex-row items-center lg:justify-start pt-4'>  
          
          <div className=' h-[200px] lg:h-[350px] p-2 ml-0 lg:ml-4  w-[60%] lg:w-[30%] bg-[#2b2c2b] shadow-2xl rounded-xl'>
            <FaFish className='text-[80px] ml-2'/>
            <p className='text-white text-sm  lg:text-xl'>Fish grilling for all kinds of event burial ceremony, birthday party, wedding ceremony and more also avialble for cost evaluations for events in the area of grills in general.</p>
          </div>
        </div>
    </div>
  )
}

export default Faetures