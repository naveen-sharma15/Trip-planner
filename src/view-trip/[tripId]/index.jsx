import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';



function Viewtrip() {
    const {tripId}=useParams();
    const [trip,setTrip]=useState([]);
    useEffect(()=>{
           tripId&&GetTripData();
    },[tripId])

    /**
     * use
     */
    const GetTripData=async()=>{
        const docRef=doc(db,'AITrips',tripId);
        const docSnap=await getDoc(docRef);
        if(docSnap.exists()){
            console.log("document :",docSnap.data());
            setTrip(docSnap.data());
        }
        else
        {
            console.log("no such doc found");
            toast('no trip found');
        }

    }
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
        {/* information section */}
         <InfoSection trip={trip}/>
       
        {/* recomaded hotels */}
        
        <Hotels trip={trip}/>


        {/* daily paln */}
    </div>
  )
}

export default Viewtrip