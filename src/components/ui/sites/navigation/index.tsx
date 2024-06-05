import { User } from '@clerk/nextjs/server'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/global/mode-toggle'

type Props = {
  user?: null| User
}

const index = ({ user } : Props) => {
  return (
    <div 
      className='p-4 flex items-center justify-between relative bg-gradient-to-b  from-secondary from-80% to-primary'
    >
      <aside className='flex items-center gap-2 '>
        <Image
          src={'./assets/plura-logo.svg'}
          width={40}
          height={40}
          alt='logo'
        />
      <span className='text-xl font-bold'>
        Helios
      </span>
      </aside>
      <nav className='hidden sm:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
        <ul className='flex items-center justify-center gap-8'>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>  
      <aside 
        className='flex gap-2 items-center'
      >
        <Link 
          className='bg-primarybutton py-1 text-muted px-4 rounded-md hover:bg-primarybuttonhover hover:ring-1 hover:ring-white' 
          href={"/agency/sign-in"}>
            Login
        </Link>
       
        <UserButton/>
        <ModeToggle/>
      </aside>

      
    </div>
  )
}

export default index