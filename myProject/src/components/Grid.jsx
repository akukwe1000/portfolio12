import React from 'react'
import './comp.css';


const Grid = (props) => {
  return (
    <div className=' bg-[#0f0f0f]  shadow-3xl rounded-x w-[70%] lg:w-[30%]'>
        <div className='h-[200px]  '>
            <img className='h-[100%] w-[100%] ' src={props.image} alt="" />
        </div>
        <p className=' text-white text-sm p-3 lg:text-xl'> {props.message}  </p>
    </div>
  )
}

export default Grid