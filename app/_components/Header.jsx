"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  

function Header() {
    const {user}=useKindeBrowserClient();
    const menu=[
        {
            id:1,
            name: 'Home',
            path:'/home'
        },
        {
            id:2,
            name: 'Explore',
            path:'/explore' 
        },
        {
            id:3,
            name: 'Contact-us',
            path:'/contactus'
        }
    ]
    useEffect(()=>{
       console.log(user)
    },[user]);
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
        <div className='flex items-center gap-10'>
        <Image src='/logo.svg' alt='logo' width={150} height={80}/>
     


<ul className='md:flex gap-8 hidden'>
    {menu.map((item,index)=>(
        <Link href={item.path}>
            <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}
            </li>
        </Link>
   
    ))}
</ul>
        </div>
        {user?
         

           <Popover>
           <PopoverTrigger>  <Image className='rounded-full' src={user?.picture} alt='userpicture' width={40} height={40}/></PopoverTrigger>
           <PopoverContent className='w-44'>
            <ul className='flex flex-col gap-2'>
           <li className='cursor-pointer hover:text-primary'>Profile</li>
           <li className='cursor-pointer hover:text-primary'>My Booking</li>
            <li className='cursor-pointer hover:text-primary'>  <LogoutLink>
            Logout
                </LogoutLink> </li>
            </ul></PopoverContent>
         </Popover>

           
            :
            <LoginLink><Button>Get Started</Button></LoginLink>
        }
        
        
        
 
    </div>
  )
}

export default Header