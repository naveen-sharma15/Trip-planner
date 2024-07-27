import React from 'react'
import { Button } from '@/components/ui/button'
function InfoSection({trip}) {
  return (
    <div>
        <img src='/public/airplane-7359232_1280.jpg' className='h-[340px] w-full object-cover rounded-xl'/>
        <div className='flex justify-between items-center'>
        <div className='my-5' flex flex-col gap-2>
            <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
            <div className='flex gap-5 first-letter: my-5'>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md lg:text-lg'>📅{trip?.userSelection?.noOfDays} Days</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md lg:text-lg'>💰{trip?.userSelection?.budget} Budget</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md lg:text-lg'>🧑‍🤝‍🧑 No of Traveler : {trip?.userSelection?.traveler}</h2>
            </div>
        </div>
        <Button>➤</Button>
        </div>
    </div>
  )
}

export default InfoSection