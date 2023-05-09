// import React from 'react'

function ComingEvents() {

  const events = [
    {
      date: '10 Jan',
      time: '12:00pm',
      price: 'Free',
      title: 'Algorand Blockchain Education & Awareness Events.'
    },
    {
      date: '10 Jan',
      time: '12:00pm',
      price: '$10',
      title: 'Algorand Blockchain Education & Awareness Events.'
    }
  ]

  return (
    <div className="pt-5">

      <div>
        <p className="pb-5">This Week</p>
          { events.map((event, i) => {
              return(
                <>
        <div className="flex space-x-6 py-2">
                  <div className="border-r-secondary border-r-2 pr-3">
                    <p className="font-bold text-[14px]">{event.date}</p>
                    <p className=" font-bold text-[12px]">{event.time}</p>
                    <small className=" font-bold">{event.price}</small>
                  </div>
                  <div>
                    <p className="text-[15px]">
                   {event.title}
                    </p>
                  </div>
        </div>
                </>
              )})}
      </div>

      <div>
        <p className="pb-5">This Month</p>
          { events.map((event, i) => {
              return(
                <>
        <div className="flex space-x-6 py-2">
                  <div className="border-r-secondary border-r-2 pr-3">
                    <p className="font-bold text-[14px]">{event.date}</p>
                    <p className=" font-bold text-[12px]">{event.time}</p>
                    <small className=" font-bold">{event.price}</small>
                  </div>
                  <div>
                    <p className="text-[15px]">
                   {event.title}
                    </p>
                  </div>
        </div>
                </>
              )})}
      </div>

    </div>
  )
}

export default ComingEvents