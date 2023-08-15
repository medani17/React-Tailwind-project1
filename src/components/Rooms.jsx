import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
    <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
      <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
      <p className='pt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex blanditiis unde reprehenderit, 
        omnis iste beatae facilis! Expedita facere neque laborum asperiores mollitia quas beatae totam iusto pariatur non voluptatum officiis saepe nisi sapiente amet nobis, incidunt doloribus ducimus consequuntur doloremque maiores laboriosam! Et voluptatum deleniti tenetur veniam sint ducimus nesciunt?
      </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img className='object-cover w-full h-full' src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        <img className='row-span-2 object-cover w-full h-full' src="https://images.pexels.com/photos/17682181/pexels-photo-17682181/free-photo-of-fitting-room-interior-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        <img className='object-cover w-full h-full' src=" https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
      </div>
    </div>
  )
}

export default Rooms
