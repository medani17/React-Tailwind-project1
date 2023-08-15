import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      <div className='grid grid-cols-2 grid-rows-6- h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/221387/pexels-photo-221387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3322008/pexels-photo-3322008.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/165213/pexels-photo-165213.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        {/* <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" /> */}
      </div>
      {/* Right side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, natus dolorum? Cupiditate velit beatae dolores maiores sin.</p>
        <p className='pb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        In, reiciendis autem repellat voluptatum nostrum tempore! 
        Autem aut provident sapiente repellat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, architecto?</p>
        <div>
            <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
            <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan

