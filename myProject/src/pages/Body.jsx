import SideBar from '../components/SideBar'
import Hero from './Hero'
import Footer from '../components/Footer'
import './Hero.css';
import Features from './Faetures'
import Resume from './Resume';
import Portfolio from './Portfolio';

const Body = () => {
  return (
    < >
    
    <div className='lg:flex block' >
        <div className='fixed w-[20%] hidden lg:block '>
            <SideBar/>
        </div>
        <div className=' ml-0 lg:ml-[270px] w-100% lg:w-[80%] '>
            <Hero/>
        </div>
    </div>

    <div className="mainBody  ml-0 lg:ml-[270px] w-100% lg:w-[80%">
      <Features/>
      <Resume/>
      <Portfolio/>
       <Footer/>
    </div>
    </>
  )
}

export default Body