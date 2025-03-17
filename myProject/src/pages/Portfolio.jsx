import './Hero.css';
import Grid from '../components/Grid';
import house from '../assets/pexel-house.jpg';
import addTocart from '../assets/addTocart.png'

const Portfolio = () => {
  return (
    <div className='bg-[#323432] p-6' id='portfolio'>
        <div className='flex justify-center text-green-700 font-bold text-[50px]'>Portfolio</div>
        <div className='flex justify-center font-bold text-[60px] text-white text-center'>What I Have Build</div>
        <div className='flex  items-center flex-col lg:flex-row lg:justify-evenly gap-4'>
            <Grid image={house} message={'A react.js real estate web site which is responsive, it also have an effect for changing from light mode to dark mode and still returns to light mode when toggle '} />
            <Grid image={addTocart} message={'A react.js functionality application used to add item to cart this can be used with an already designed ecomerce application that need such functionality '} />
            <Grid image={house} message={'A react.js real estate web site which is responsive, it also have an effect for changing from light mode to dark mode and still returns to light mode when toggle '} />
        </div>
        <div className='flex mt-6  items-center flex-col lg:flex-row lg:justify-evenly gap-4'>
            <Grid image={house} message={'A react.js real estate web site which is responsive, it also have an effect for changing from light mode to dark mode and still returns to light mode when toggle '} />
            <Grid image={house} message={'A react.js real estate web site which is responsive, it also have an effect for changing from light mode to dark mode and still returns to light mode when toggle '} />
            <Grid image={house} message={'A react.js real estate web site which is responsive, it also have an effect for changing from light mode to dark mode and still returns to light mode when toggle '} />
        </div>

    </div>
  )
}

export default Portfolio