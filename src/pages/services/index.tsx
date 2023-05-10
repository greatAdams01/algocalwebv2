import BaseLayout from '@/layouts/BaseLayout'
import React from 'react'

function Services() {
  return (
    <BaseLayout>
    
    <div className='desktop'>
      <div className='md:w-[750px] bg-white rounded-md p-5'>

        <h1 className='text-[#475467] font-bold text-[24px] pb-5'>Services</h1>
        <p>Algorand has set an event for fresh & upcoming devs to participate in the building of a new tech solution, happenning live in Nigeria,Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Algorand has set an event for fresh & upcoming devs</p>
        <h1 className='pt-5 font-bold text-[20px]'>For The Algorand Community</h1>
        <p >
        Algorand has set an event for fresh & upcoming devs to participate in the building of a new tech solution, happenning live in Nigeria,Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Algorand has set an event for fresh & upcoming devs to participate in the building of a new tech solution, happenning live in Nigeria,Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Algorand has set an event for fresh & upcoming devs to participate in the building of a new tech solution, happenning live in Nigeria,Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
        </p>
        <img className='py-10 text-center lg:w-[500px] m-auto' src="/services.png" alt="" />
      </div>
    </div>
    </BaseLayout>
  )
}

export default Services