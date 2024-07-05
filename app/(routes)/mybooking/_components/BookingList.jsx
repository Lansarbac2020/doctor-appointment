import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin } from 'lucide-react'
import moment from 'moment/moment'
import Image from 'next/image'
import React from 'react';
import CancelAppo from './CancelAppo';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

function BookingList({bookingList,expired,updateRecord}) {

  const onDeleteBooking=(item)=>{
    GlobalApi.deleteBooking(item.id).then(resp=>{
      console.log(resp);
      if(resp){
        toast.success("Appointment deleted successfully !");
        updateRecord();
      }

    })
    console.log(item)
  }
  return (
    <div >
    {bookingList&&bookingList.map((item,index)=>(
      <div className='flex gap-4 items-center border p-3 m-3 rounded-lg'>
      <Image 
      className='rounded-full h-[70px] w-[70px] object-cover'
      src={item.attributes.doctor.data.attributes?.image?.data[0]?.attributes?.url} width={70} height={70} alt='doctor '/>
      <div className='flex flex-col gap-2 w-full'>
        <h2 className='font-bold text-[18px] items-center flex justify-between'>{item.attributes.doctor.data.attributes.Name} 
        {!expired&&<CancelAppo onContinue={()=>onDeleteBooking(item)}/>}
        </h2>
        <h2 className='flex gap-2 text-gray-600'>  <MapPin className='text-primary w-5 h-5'/> {item.attributes.doctor.data.attributes.Address}</h2>
        <h2 className='flex gap-2'><Calendar className='text-primary h-5 w-5'/> Appointment on { moment( item.attributes.Date).format('DD-MM-YYYY')}</h2>
        <h2 className='flex gap-2'><Clock className='text-primary h-5 w-5'/> At {item.attributes.Time}</h2>
      </div>
      </div>
    ))}
    </div>
  )
}

export default BookingList