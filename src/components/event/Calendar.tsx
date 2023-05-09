import { useState, useEffect } from 'react'

function Calendar() {
  const [date, setDate] = useState(new Date());
  // union type of Date and null
  const [selectedDay, setSelectedDay] = useState<Date | null>();
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const handlePreviousMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
    setSelectedDay(null);
  };

  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  // Get today and 5 days after from currentMonthDays
  
  // const today = new Date().getDate();

  // const displaydays = currentMonthDays.slice(today, today + 5);


  // const handleDayClick = (day:number) => {
  //   console.log(day)
  //   const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
  //   setSelectedDay(selectedDate);
  //   let year =
  //     selectedDate.getFullYear() !== new Date().getFullYear()
  //       ? selectedDate.getFullYear()
  //       : "";
  //   let options = { day: "numeric", month: "short" };
  //   const formatter = new Intl.DateTimeFormat("en-US");
  //   const parts = formatter.formatToParts(selectedDate);
  //   let dayValue = parts?.find((x) => x?.type === "day").value;
  //   let monthValue = parts?.find((x) => x?.type === "month").value;
  //   let formattedDate = `${ordinal_suffix_of(dayValue)} ${monthValue} ${year}`;
  //   console.log(formattedDate)
  // };

  // function ordinal_suffix_of(i:any) {
  //   let j = i % 10,
  //     k = i % 100;
  //   if (j === 1 && k !== 11) {
  //     return i + "st";
  //   }
  //   if (j === 2 && k !== 12) {
  //     return i + "nd";
  //   }
  //   if (j === 3 && k !== 13) {
  //     return i + "rd";
  //   }
  //   return i + "th";
  // }

  // Get the current date
  const today = new Date();

  // Get the date of the Sunday of the current week
  const sunday = new Date(today.setDate(today.getDate() - today.getDay()));

  const weekDates: number[] = [];
  useEffect(() => {

    // Loop through the days of the week and add their dates to the array
    for (let i = 0; i < 7; i++) {
      const date = new Date(sunday);
      date.setDate(date.getDate() + i);
      console.log(date.getDate())
      weekDates.push(date.getDate());
      if(weekDays.length === 7) console.log(weekDays)
      setWeekDays((prev) => [...prev, date.getDate()  ])
    }
  }, []);

  return (
    <div className="border-b pb-5">
      <div className="">
        <div className='flex space-x-2 p-4 bg-primary rounded-lg'>
          <p className='font-bold text-[14px] '>Upcoming Events</p>
          <p className='text-[14px]'>{date.toDateString()}</p>
        </div>
        <div className="grid grid-cols-7 gap-2 ">
          {weekDays.map((day, i) => {
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