import { useRouter } from 'next/router';

function Filter() {
  const router = useRouter();

  return (
    <div>
      {
        router.asPath.includes('scheduled') ? (
          <>
            <div className='flex justify-between items-center md:w-[750px]'>
            <h1 className='text-[20px] font-bold'>Scheduled Events</h1>
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
            <div className='flex justify-between items-center md:w-[750px] mt-10'>
              <h1 className='text-[20px] font-bold'>Events</h1>
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