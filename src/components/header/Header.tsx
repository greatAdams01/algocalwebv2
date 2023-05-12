import React from 'react'
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className='text-black pa hidden lg:flex'>
      <div className='flex justify-between w-full'>
        <h1 className='text-[20px] font-bold'>Algocal</h1>
        <div className='flex'>
          <input type="text" className='search' placeholder='Search' />
          <MagnifyingGlassIcon className='text-[#000] w-4 relative left-[-30px]' />
        </div>
      </div>
      <div className='flex w-full space-x-8 pr-5 justify-end border-r mr-4'>
        <div className='rounded-container'>
          <p>Nigeria</p>
        </div>
        <div className='rounded-container'>
          <div className='flex'>
            <BellIcon className='text-secondary w-5'  />
            <span className='bg-[#D92D20] h-2 w-2 relative -left-2 rounded-full'/>
          </div>
          <p>Notifications</p>
        </div>
      </div>
      <div className='rounded-container'>
          <p>NFtname</p>
        </div>
    </header>
  )
}

export default Header