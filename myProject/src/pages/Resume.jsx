// import {Link} from 'react-scroll';
// import addTocart from '../assets/addTocart.png';
// import '../components/comp.css'



// const Resume = () => {
//     const navItem  = [
//         {
//           link: <> Education</>, path: 'education'
//         },
//         {
//           link: <> Professional Skill</>, path: 'profession'
//         },
//         {
//           link: <> Experience</>, path: 'experience'
//         },
//         {
//           link: <> Reference</>, path: 'reference'
//         },
        
//       ]


//   return (
//     <div>
//         <div className='  bg-[#323432] pt-9 pb-9' id='resume'>
//             <div className='flex justify-center text-green-700   font-bold text-[50px] mb-5'>My Resume</div>
//             <div className='navbaResume h-[54px] w-[90%] m-auto flex items-center justify-evenly mb-7  bg-[#0f0f0f] '>
//                 {navItem.map(({link,path})=> (
//                 <Link key={path} className='h-[50px] w-[24%] bg-[#323432]  text-green-700  rounded-xl  text-sm lg:text-2xl flex justify-center items-center  hover:h-[60px] hover:text-xl lg:hover:text-3xl transition-all duration-1000 cursor-pointer'  to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
//                 ))}

//             </div>
            

//             <div id='education' className='pl-6 pb-6 text-3xl font-bold text-white'>
//                 <h1>Educational Quality</h1>
//             </div>
//             <div className='flex items-center flex-col lg:flex-row lg:justify-evenly gap-4 pb-6'>  
            
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl text-center'> <h2 className="font-bold">WAEC certificate</h2> <p>obelle community senior high school</p> <p>(2013-2015)</p>
//                         <div className="flex items-center justify-center"> <img className='h-[50%] w-[50%] mt-[20px]' src={addTocart} alt="" /></div> 
//                     </p>
//                 </div>
                
                
                
                
//             </div>
//             <div className='flex items-center flex-col lg:flex-row lg:justify-evenly gap-4 pb-6'>  
            
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl text-center'> <h2 className="font-bold">WAEC certificate</h2> <p>obelle community senior high school</p> <p>(2013-2015)</p>
//                         <div className="flex "> </div> 
//                     </p>
//                 </div>
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
//                 </div>
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
//                 </div>
                
//             </div>

//             <div id='profession' className='pl-6 pb-6 text-3xl font-bold text-white'>
//                 <h1>Proffesional Skill</h1>
//             </div>
//             <div className='flex items-center flex-col lg:flex-row lg:justify-evenly gap-4 pb-6'>  
            
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
//                 </div>
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
//                 </div>
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
//                 </div>
                
//             </div>
//             <div id='experience' className='pl-6 pb-6 text-3xl font-bold text-white'>
//                 <h1>Experience</h1>
//             </div>
//             <div className='flex items-center flex-col lg:flex-row lg:justify-evenly gap-4 pb-6'>  
            
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
//                 </div>
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
//                 </div>
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
//                 </div>
                
//             </div>
//             <div id='reference' className='pl-6 pb-6 text-3xl font-bold text-white'>
//                 <h1>Reference</h1>
//             </div>
//             <div className='flex items-center flex-col lg:flex-row lg:justify-evenly gap-4 pb-6'>  
            
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
//                 </div>
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
//                 </div>
//                 <div className=' h-[200px] lg:h-[350px] p-2  w-[60%] lg:w-[30%]  bg-[#2b2c2b] shadow-2xl rounded-xl'>
//                     <p className='text-white text-sm lg:text-xl'> In todays rapidly evolving technical landscape, the role of vehicle diagnostics technicians and power plant operation engineer are critical to ensuring efficiency and safety across industries.  </p>
//                 </div>
                
//             </div>
            
            
//         </div>
//     </div>
//   )
// }

// export default Resume


import { useState } from 'react';
import { Link } from 'react-scroll';
import addTocart from '../assets/addTocart.png';
import '../components/comp.css';

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItem = [
    { link: <> Education</>, path: 'education' },
    { link: <> Professional Skill</>, path: 'profession' },
    { link: <> Experience</>, path: 'experience' },
    { link: <> Reference</>, path: 'reference' },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="bg-[#323432] pt-9 pb-9" id="resume">
        <div className="flex justify-center text-green-700 font-bold text-[50px] mb-5">
          My Resume
        </div>
        <div className="navbaResume h-[54px] w-[90%] m-auto flex items-center justify-evenly mb-7 bg-[#0f0f0f]">
          {navItem.map(({ link, path }) => (
            <Link
              key={path}
              className="h-[50px] w-[24%] bg-[#323432] text-green-700 rounded-xl text-sm lg:text-2xl flex justify-center items-center hover:h-[60px] hover:text-xl lg:hover:text-3xl transition-all duration-1000 cursor-pointer"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </div>

        <div id="education" className="pl-6 pb-6 text-3xl font-bold text-white">
          <h1>Educational Quality</h1>
        </div>
          <div className='flex  flex-col  gap-[20px] lg:flex-row items-center justify-evenly '>

                <div className="  flex items-center justify-center ">
                <div className="h-[200px]  lg:h-[300px]  p-2 w-[60%] lg:w-[70%] bg-[#2b2c2b] shadow-2xl rounded-xl">
                    <p className="text-white text-sm lg:text-xl text-center">
                    <h2 className="font-bold">WAEC certificate</h2>
                    <p>obelle community senior high school</p>
                    <p>(2013-2015)</p>
                    <div className="flex items-center justify-center">
                        {/* Clicking the image opens the modal */}
                        <img
                        className="h-[50%] w-[50%] mt-[20px] cursor-pointer"
                        src={addTocart}
                        alt="Add to cart"
                        onClick={openModal}
                        />
                    </div>
                    </p>
                </div>
                </div>
                <div className="  flex items-center justify-center ">
                <div className="h-[200px]  lg:h-[300px]  p-2 w-[60%] lg:w-[70%] bg-[#2b2c2b] shadow-2xl rounded-xl">
                    <p className="text-white text-sm lg:text-xl text-center">
                    <h2 className="font-bold">WAEC certificate</h2>
                    <p>obelle community senior high school</p>
                    <p>(2013-2015)</p>
                    <div className="flex items-center justify-center">
                        {/* Clicking the image opens the modal */}
                        <img
                        className="h-[50%] w-[50%] mt-[20px] cursor-pointer"
                        src={addTocart}
                        alt="Add to cart"
                        onClick={openModal}
                        />
                    </div>
                    </p>
                </div>
                </div>
                <div className="  flex items-center justify-center ">
                <div className="h-[200px]  lg:h-[300px]  p-2 w-[60%] lg:w-[70%] bg-[#2b2c2b] shadow-2xl rounded-xl">
                    <p className="text-white text-sm lg:text-xl text-center">
                    <h2 className="font-bold">WAEC certificate</h2>
                    <p>obelle community senior high school</p>
                    <p>(2013-2015)</p>
                    <div className="flex items-center justify-center">
                        {/* Clicking the image opens the modal */}
                        <img
                        className="h-[50%] w-[50%] mt-[20px] cursor-pointer"
                        src={addTocart}
                        alt="Add to cart"
                        onClick={openModal}
                        />
                    </div>
                    </p>
                </div>
                </div>
                
                

                
          </div>

          <div className='flex  flex-col  gap-[20px] lg:flex-row mt-[20px] items-center justify-evenly '>

                <div className="  flex items-center justify-center ">
                <div className="h-[200px]  lg:h-[300px]  p-2 w-[60%] lg:w-[70%] bg-[#2b2c2b] shadow-2xl rounded-xl">
                    <p className="text-white text-sm lg:text-xl text-center">
                    <h2 className="font-bold">WAEC certificate</h2>
                    <p>obelle community senior high school</p>
                    <p>(2013-2015)</p>
                    <div className="flex items-center justify-center">
                        {/* Clicking the image opens the modal */}
                        <img
                        className="h-[50%] w-[50%] mt-[20px] cursor-pointer"
                        src={addTocart}
                        alt="Add to cart"
                        onClick={openModal}
                        />
                    </div>
                    </p>
                </div>
                </div>
                <div className="  flex items-center justify-center ">
                <div className="h-[200px]  lg:h-[300px]  p-2 w-[60%] lg:w-[70%] bg-[#2b2c2b] shadow-2xl rounded-xl">
                    <p className="text-white text-sm lg:text-xl text-center">
                    <h2 className="font-bold">WAEC certificate</h2>
                    <p>obelle community senior high school</p>
                    <p>(2013-2015)</p>
                    <div className="flex items-center justify-center">
                        {/* Clicking the image opens the modal */}
                        <img
                        className="h-[50%] w-[50%] mt-[20px] cursor-pointer"
                        src={addTocart}
                        alt="Add to cart"
                        onClick={openModal}
                        />
                    </div>
                    </p>
                </div>
                </div>
                <div className="  flex items-center justify-center ">
                <div className="h-[200px]  lg:h-[300px]  p-2 w-[60%] lg:w-[70%] bg-[#2b2c2b] shadow-2xl rounded-xl">
                    <p className="text-white text-sm lg:text-xl text-center">
                    <h2 className="font-bold">WAEC certificate</h2>
                    <p>obelle community senior high school</p>
                    <p>(2013-2015)</p>
                    <div className="flex items-center justify-center">
                        {/* Clicking the image opens the modal */}
                        <img
                        className="h-[50%] w-[50%] mt-[20px] cursor-pointer"
                        src={addTocart}
                        alt="Add to cart"
                        onClick={openModal}
                        />
                    </div>
                    </p>
                </div>
                </div>
                
                

                
          </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex justify-end">
                <button
                  className="text-black text-xl font-bold"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
              <div className="flex justify-center">
                <img src={addTocart} alt="Enlarged view" className="max-w-full max-h-[80vh]" />
              </div>
            </div>
          </div>
        )}

        <div id="profession" className="pl-6 pb-6 text-3xl font-bold text-white">
          <h1>Professional Skill</h1>
        </div>

        {/* Other sections of the resume */}
        {/* Add other sections as per your existing structure */}
      </div>
    </div>
  );
};

export default Resume;
