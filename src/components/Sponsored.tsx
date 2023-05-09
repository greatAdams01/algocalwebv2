

import { StarIcon, ShareIcon, LinkIcon } from '@heroicons/react/24/solid'

function Sponsored() {
  return (
    <div className="sponsored h-[400px] md:w-[750px] rounded-xl text-white p-6 grid content-end">

        <div>
        <h2 className='font-semibold text-[24px] lg:w-[500px] py-8'>Algorand Blockchain Education & Awareness Events.</h2>
        <div className='flex space-x-8'>
          <div className='sponsored-bg flex justify-around p-2 w-32'>
          <StarIcon className='text-white w-4 ' />
            <p>Sponsored</p>
          </div>
          <p className='sponsored-bg w-10 h-10 p-2' > 
            <ShareIcon className='text-white w-6 ' />
          </p>
          <p className='sponsored-bg w-10 h-10 p-2' >
            <LinkIcon className='text-white w-6 ' />
          </p>
        </div>
        </div>

    </div>
  )
}

export default Sponsored