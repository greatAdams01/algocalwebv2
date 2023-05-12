import { useState } from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon, Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from 'next/router';
import Connect from "../wallet/Connect"
import BaseNav from '../sidebar/BaseNav';


function MobileHeader() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  return (
    <>
      <header className='lg:hidden'>
        <nav className='w-full'>
          <div className='flex justify-between'>
            {/* Logo and search bar */}
            <div className='flex space-x-5'>
              <img onClick={() => router.push('/')} className='w-[30px] h-[30px] cursor-pointer' src="/algocal.png" alt="" />
              <div className='pt-1 flex'>
              <input className='bg-[#B7D5D44D] w-[165px] outline-none rounded-xl px-6' type="text" />
              <MagnifyingGlassIcon className='text-[#4059AD] w-4 relative left-[-30px]' />
              </div>
            </div>
            {!open ? 
            <Bars2Icon className='w-8 text-[#4059AD] cursor-pointer' onClick={() => setOpen(true)} /> 
            : <XMarkIcon className='w-8 text-[#4059AD] cursor-pointer'  onClick={() => setOpen(false)}  />}
          </div>
        </nav>
      </header>
      {!open ? <div></div>
        :
        <div className='fixed h-[100vh] z-10 bg-white w-full px-5 py-2 transition-all'>
        <BaseNav />
        <div className='space-x-4 pt-4'>
            <Connect />
          </div>
      </div>
      }
    </>
  )
}

export default MobileHeader