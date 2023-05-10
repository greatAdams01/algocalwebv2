import Filter from '@/components/event/Filter'
import ScheduledComp from '@/components/event/ScheduledComp'
import BaseLayout from '@/layouts/BaseLayout'
import React from 'react'

function Scheduled() {
  return (
    <BaseLayout>
    
    <div className='desktop'>
      <Filter />
      <ScheduledComp />
    </div>
    </BaseLayout>
  )
}

export default Scheduled