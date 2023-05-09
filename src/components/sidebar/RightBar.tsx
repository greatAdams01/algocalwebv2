import React from 'react'
import Calendar from '../event/Calendar'
import ComingEvents from '../event/ComingEvents'

function RightBar() {
  return (
    <aside
      className='w-80 h-screen border-r border-[#E5E5E5] fixed top-0 right-0 pt-28 overflow-scroll'
    >
        <div className='bg-white py-5 px-4 rounded-lg'>
          <Calendar />
          <ComingEvents />
        </div>
    </aside>
  )
}

export default RightBar