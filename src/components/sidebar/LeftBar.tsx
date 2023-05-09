import Link from 'next/link'
import { PlusIcon } from "@heroicons/react/24/outline";


import Connect from "../wallet/Connect"
import BaseNav from './BaseNav';


function LeftBar() {
  return (
    <aside
      className='w-72 h-screen bg-white border-r border-[#E5E5E5] fixed top-0 left-0 pt-28 px-5'
    >
      <div className='border-b grid text-center py-4'>
        <Connect />
        <Link className='btn-secondary px-8 mt-4' href='/'>
          <PlusIcon className='w-6 ' />
          Create Event
        </Link>
      </div>

      <BaseNav />
    </aside>
  )
}

export default LeftBar