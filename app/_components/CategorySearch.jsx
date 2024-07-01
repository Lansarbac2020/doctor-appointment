"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

function CategorySearch() {

  const [categoryList, setCategoryList] = useState([]);

useEffect(() => {
       getCategoryList()
},[])
  const getCategoryList=()=> {
    GlobalApi.getCategory().then(resp=>{
      console.log(resp.data.data);
      setCategoryList(resp.data.data)
    })
  }
  return (
    <div className='mb-10 px-5 items-center flex flex-col gap-2'>

     <h2 className='font-bold text-4xl tracking-wide'> Search <span className='text-primary'>Doctors</span></h2>
     <h2 className='text-gray-500 text-xl'>Search your doctor and book an appointment in one click</h2>

     <div className="flex mt-5 w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search" />
      <Button type="submit">
        <Search className=' h-4 w-4 mr-2'/>
        Search</Button>
    </div>
     {/* Display list of category */}
     <div className='mt-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
     {categoryList.length>0?categoryList.map((item,index)=>index<6&&(
      <Link href={'/search/'+item.attributes.Name}> 
       <div key={index} className='flex flex-col text-center items-center
       p-5 bg-green-50 m-2 rounded-lg gap-2 hover:scale-105 transition-all ease-in-out cursor-pointer'>
        <Image src={item.attributes?.icon?.data[0].attributes.url} width={50} height={50} alt={item.attributes.Name}/>
        <label className='text-green-600 text-sm font-semibold'>{item?.attributes?.Name}</label>
       </div>
      </Link>
      
     ))
     :
     [1,2,3,4,5,6].map((item,index)=>(
       <div className='h-[120px] w-[130px] m-2 bg-slate-100 animate-pulse rounded-lg'>
        </div>
    ))
      

   
     
     }
</div>

    </div>
  )
}

export default CategorySearch