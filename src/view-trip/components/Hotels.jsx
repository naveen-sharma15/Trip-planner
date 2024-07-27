import React from 'react'

function Hotels(trip) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5'>Hotel Recommedation</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
          {trip?.tripData?.hotelOptions?.map((hotel,index)=>(
            <div>
               <img src="/public/airplane-7359232_1280.jpg" className='rounded-lg'/>
               <div>
                <h2>{hotel?.hotelOptions?.hotelName}</h2>
               </div>
            </div>
          ))}
        </div>
        
    </div>
  )
}
export default Hotels