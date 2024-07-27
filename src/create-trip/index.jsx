import React, { useEffect, useState } from 'react'
import header from '@/components/ui/custom/Header'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '@/components/ui/input';
import { SelectBudgetOption } from '@/constants/options';
import { SelectTravelList } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { AI_PROMPT } from '@/constants/options';
import { chatSession } from '@/service/AIModal';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { useNavigate } from 'react-router-dom';



function CreateTrip() {
    const [place,setPlace]=useState();
    const [formData,setFormData]=useState([]);
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const handelInputChange=(name,value)=>{
       
            

        setFormData({
            ...formData,
            [name]:value
        })
    }
    useEffect(()=>{
        console.log(formData);
    },[formData])

    const onGenerateTrip=async()=>{



        if(formData?.noOfDays>5&&!formData?.location||!formData?.budget||!formData?.traveler)
            {
                toast("please fill all the details ")
                return ;
            }
            setLoading(true);
            const FINAL_PROMPT=AI_PROMPT.replace('{location}',formData?.location?.label)
            .replace('{totalDays}',formData?.noOfDays)
            .replace('{traveler}',formData?.traveler)
            .replace('{budget}',formData?.budget)
            .replace('{totalDays}',formData?.noOfDays)

            const result=await chatSession.sendMessage(FINAL_PROMPT)
            console.log(result?.response?.text());
            setLoading(false);
            SaveAiTrip(result?.response?.text())
    }

    const SaveAiTrip=async(TripData)=>{
        setLoading(true);
        const user=localStorage.getItem('user');
        const docId=Date.now().toString()
        await setDoc(doc(db, "AITrips",docId), {
            // name: "Los Angeles",
            // state: "CA",
            // country: "USA"
            userSelection:formData,
            tripData:JSON.parse(TripData),
            id:docId

          });
          setLoading(false);
          navigate('/view-trip/'+docId)

    }
    
    
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
        <h2 className='font-bold text-3xl'>Tell us your travel preferences 🏕️🌴</h2>
        <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>
        <div >
            <div className='mt-20 flex flex-col gap-10'>
            <h2 className='text-xl my-3 font-medium'>What is destination of choice?</h2>
            <GooglePlacesAutocomplete
             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
             selectProps={
                {
                    place,
                    onChange:(v)=>{setPlace(v); handelInputChange('location',v)}
                }
             }
            />
            <div>
                <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
                <Input placeholder={'Ex.3'} type="number"
                 onChange={(e)=>handelInputChange('noOfDays',e.target.value)}
                />
               
            </div>
            </div>
        </div>
        <div>
        <h2 className='text-xl my-3 font-medium'>What is Your Budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOption.map((item,index)=>(
                <div key={index} onClick={()=>handelInputChange('budget',item.title)}
                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg
                    ${formData?.budget==item.title&&'shadow-lg border-black'}
                
                `}>
                    <h2 className='text-4xl'>{item.icon} </h2>
                    <h2 className='font-bold text-lg'>{item.title}</h2>
                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
            ))}
        </div>
        </div>
         <div>
        <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelList.map((item,index)=>(
                <div key={index} onClick={()=>handelInputChange('traveler',item.people)}
                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg
                    ${formData?.traveler==item.people&&'shadow-lg border-black'}
               ` }>
                    <h2 className='text-4xl'>{item.icon} </h2>
                    <h2 className='font-bold text-lg'>{item.title}</h2>
                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
            ))}
        </div>
        </div>
        <div className='my-10 flex justify-end'>
        <Button disabled={loading}
        onClick={onGenerateTrip}>
            Generate trip
            </Button>
        </div>
        


    </div>
    
  )
}

export default CreateTrip