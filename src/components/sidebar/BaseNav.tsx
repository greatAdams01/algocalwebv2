import React from 'react'
import Link from 'next/link'
import { RectangleGroupIcon, MegaphoneIcon, CalendarDaysIcon, UserCircleIcon, ArrowPathIcon } from "@heroicons/react/24/solid";


function BaseNav() {
  return (
    <div>
      <ul className='mt-10'>

        <li className='my-3'>
          <Link className='nav-link' href='/'>
            <RectangleGroupIcon className='w-6 mr-5' />
            Event Feed
          </Link>
        </li>
        <li className='my-3'>
          <Link className='nav-link-active' href='/'>
            <MegaphoneIcon className='w-6 mr-5' />
            Annoncements
          </Link>
        </li>
        <li className='my-3'>
          <Link className='nav-link' href='/'>
            <CalendarDaysIcon className='w-6 mr-5' />
            Scheduled Event
          </Link>
        </li>
        <li className='my-3'>
          <Link className='nav-link' href='/'>
            <UserCircleIcon className='w-6 mr-5' />
            My Account
          </Link>
        </li>

        <li className='my-3'>
          <Link className='nav-link' href='/'>
            <ArrowPathIcon className='w-6 mr-5' />
            Services
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default BaseNav