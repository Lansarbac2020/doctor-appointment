import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
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
        <Button>Get Started</Button>
 
    </div>
  )
}

export default Header