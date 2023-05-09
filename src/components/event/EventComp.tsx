
import { CalendarDaysIcon, ClockIcon, MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/solid";

function EventComp() {
  const events = [
    {
      date: '10 Jan',
      time: '12:00pm',
      price: 'Free',
      title: 'Algorand Blockchain Education & Awareness Events.',
      location: 'Online',
      duration: '1hr'
    },
    {
      date: '10 Jan',
      time: '12:00pm',
      price: '$10',
      title: 'Algorand Blockchain Education & Awareness Events.',
      location: 'Online',
      duration: '1hr'
    }
  ]
  return (
    <div className='mt-5 md:w-[750px]'>
     {
        events.map((event, i) => {
          return(
            <>
               <div className='flex space-x-8 my-5 py-5 px-5 bg-white rounded-md' key={i}>
                <img className='w-96 rounded-md' src='https://picsum.photos/200/300' />
                <div className="">
                  <h1 className='font-semibold text-[24px] lg:w-[400px]'>{event.title}</h1>
                  <p className="flex py-1 mt-5"> <CalendarDaysIcon className="w-8 pr-2" />{event.date} </p>
                  <p className="flex py-1"> <ClockIcon className="w-8 pr-2" />{event.time} </p>
                  <p className="flex py-1"> <MapPinIcon className="w-8 pr-2" />{event.location} </p>
                  <p className="flex py-1"> <ClockIcon className="w-8 pr-2" />{event.duration} </p>
                  <p className="flex py-1"> <CurrencyDollarIcon className="w-8 pr-2" />{event.price} </p>
                  <div className="flex mt-10 space-x-6">
                    <button className='h-10 w-10 p-2 bg-primary rounded-full mt-2'>
                      <ShareIcon className='w-6 text-secondary' />
                    </button>
                    <button className="bg-secondary text-white px-5 py-3 rounded-full">
                      Add To Schedule
                    </button>
                  </div>
                </div>
              </div>
            </>
          )
        })
     }
    </div>
  )
}

export default EventComp