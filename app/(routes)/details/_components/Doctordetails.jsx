import { Button } from '@/components/ui/button'
import { GraduationCap, MapIcon, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment'

function Doctordetails({doctor}) {

  const socialMediaList=[
    {
      id:1,
      icon:'/facebook.png',
      url:''
    },
    {
      id:2,
      icon:'/instagram.png',
      url:''

    },
    {
      id:3,
      icon:'/linkedin.png',
      url:''
    }
  ]
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
    {/* image of doctors */}
<div>
<Image src={doctor.attributes?.image?.data[0]?.attributes?.url} width={200} height={200} className='rounded-lg w-full h-[280px] object-cover' alt='doctor-image'/>
</div>
{/* doctor information */}
<div className='col-span-2 md:px-10 mt-5 flex flex-col gap-3 items-baseline'>
<h2 className='font-bold text-2xl '>{doctor.attributes?.Name}</h2>
<h2 className='flex gap-2 text-gray-500 text-md '><GraduationCap/> <span>{doctor?.attributes?.Year_of_Experience} of Experience</span> </h2>
<h2 className='text-md flex gap-2 text-gray-500'>
  <MapPin/>
  <span>{doctor.attributes.Address}</span>
</h2>
<h2 className='text-[9px] bg-green-100 p-1 font-bold rounded-full px-2 text-primary'>{doctor.attributes?.categories.data[0].attributes?.Name}</h2>

<div className='flex gap-3'>
  {socialMediaList.map((item,index)=>(
    <Image src={item.icon} width={30} height={30} alt='socialmedia'/>
  ))}
</div>


  <BookAppointment doctor={doctor}/>
</div>

{/* About doctor */}

  </div>
  <div className='p-3 border-[1px] rounded-lg mt-5'>
  <h2 className='font-bold text-[20px]'>About Me</h2>
  <p className='text-gray-500 tracking-wide mt-2'>{doctor.attributes.About}</p>
</div>
</>
  )
}

export default Doctordetails