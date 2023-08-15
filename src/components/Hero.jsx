import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/276259/pexels-photo-276259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <div className='bg-black/10 absolute top-0 left-0 w-full h-screen'/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p>All Inclusive</p>
            <h1 className='font-bold text-5xl md:text-7xll drop-shadow-2xl'>Private Beaches & Getways</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus similique magni fugiat maxime, nisi doloribus architecto assumenda? Beatae labore eius non voluptatum temporibus fugiat iusto?</p>
            <button className='bg-white text-black '>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
