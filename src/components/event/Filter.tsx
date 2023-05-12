import { useRouter } from 'next/router';

function Filter() {
  const router = useRouter();

  return (
    <div>
      {
        router.asPath.includes('scheduled') ? (
          <>
            <div className='md:flex justify-between items-center md:w-[750px]'>
            <h1 className='text-[20px] font-bold pb-5 lg:pb-0'>Scheduled Events</h1>
            <div className='flex space-x-4'>
              <button className='rounded-container bg-secondary text-white'>
                <p>All</p>
              </button>
              <button className='rounded-container bg-white'>
                <p>Recents</p>
              </button>
              <button className='rounded-container bg-white'>
                <p>Most Important</p>
              </button>
            </div>
          </div>
          </>
        ) : 

        (
          <>
            <div className='md:flex justify-between items-center md:w-[750px] mt-10'>
              <h1 className='text-[20px] font-bold pb-5 lg:pb-0'>Events</h1>
              <div className='flex space-x-4'>
                <button className='rounded-container bg-secondary text-white'>
                  <p>All</p>
                </button>
                <button className='rounded-container bg-white'>
                  <p>Recents</p>
                </button>
                <button className='rounded-container bg-white'>
                  <p>Most Important</p>
                </button>
              </div>
            </div>
          </>
        )
        
      }
    </div>
  )
}

export default Filter