import { useState, useEffect } from 'react'

function Calendar() {
  const [date, setDate] = useState(new Date());
  
  const days = ["S", "M", "T", "W", "T", "F", "S"];


  // Get the current date
  const today = new Date();

  // Get the date of the Sunday of the current week
  const sunday = new Date(today.setDate(today.getDate() - today.getDay()));

  const weekDates: number[] = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(sunday);
    date.setDate(date.getDate() + i);
    console.log(date.getDate())
    weekDates.push(date.getDate());
  }

  return (
    <div className="border-b pb-5">
      <div className="">
        <div className='flex space-x-2 p-4 bg-primary rounded-lg items-center'>
          <p className='font-bold text-[14px] '>Upcoming Events</p>
          <p className='text-[12px]'>{date.toDateString()}</p>
        </div>
        <div className="grid grid-cols-7 gap-2 ">
          {weekDates.map((day, i) => {
            return(
              <div className={`rounded-md text-center text-sm font-bold`} key={i}>
                <p className={`${day === date.getDate() ? 'shadow-xl rounded-md' : ''} pt-2 px-2 text-center`}>
                <small className='text-[#D0D5DD] pb-4'>{days[i]} </small>
                {day}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Calendar