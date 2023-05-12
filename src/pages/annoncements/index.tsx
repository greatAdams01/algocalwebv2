import { CalendarDaysIcon, ClockIcon, EyeIcon, CalendarIcon } from "@heroicons/react/24/solid";

import BaseLayout from '@/layouts/BaseLayout'



function Annoncements() {
  return (
    <BaseLayout>
    
      <div className='desktop'>
        <div className='md:w-[750px] bg-white rounded-md p-5'>

          <h1 className='text-[#475467] font-bold text-[24px]'>Annoncements</h1>

          <div className="lg:flex items-start lg:space-x-7 mt-5">
            <CalendarDaysIcon className='w-14 text-secondary' />
            <div>
              <h1 className="font-bold pt-6">Event</h1>
              <p className="pt-4">Algorand has set an event for fresh & upcoming devs to participate in the building of a new tech solution, happenning live in Nigeria,Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
              <div className="md:flex justify-between items-center py-5">
                <p className="text-secondary font-semibold pb-5 md:pb-0">View Event</p>
                <div className="flex font-semibold text-[10px] text-[#98A2B3] space-x-3">
                  <p className="flex items-center space-x-2"> <ClockIcon className="w-4" /> Posted 2mins ago</p>
                  <p className="flex items-center space-x-2"> <EyeIcon className="w-4" />  168 Views</p>
                  <p className="flex items-center space-x-2"> <CalendarIcon className="w-4" />  58 Scheduled</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </BaseLayout>
  )
}

export default Annoncements