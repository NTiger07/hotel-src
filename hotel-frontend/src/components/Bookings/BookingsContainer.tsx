import { useState } from "react"
import BookingItem from "./BookingItem"

const BookingsContainer = () => {
  const [clientName, setClientName] = useState("")
  const [status, setStatus] = useState("")
  const [roomType, setRoomType] = useState("")
  
  return (
    <div className="pt-[2rem]">
      <span className="text-primary-red font-bold text-[3rem]">Bookings</span>
      <div className="FILTER flex items-center gap-[2rem] py-[3rem]">
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="py-[.5rem] cursor-pointer px-[.6rem] text-[1.1rem] outline-none border rounded-md bg-transparent border-greys-etherium">
          <option value="">All</option>
          <option value="in-progress">In-progress</option>
          <option value="cancelled">Cancelled</option>
          <option value="completed">Completed</option>
        </select>

        <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className="py-[.5rem] cursor-pointer px-[.6rem] text-[1.1rem] outline-none border rounded-md bg-transparent border-greys-etherium">
          <option value="">All</option>
          <option value="basic">Basic</option>
          <option value="family">Family</option>
          <option value="luxury">Luxury</option>
          <option value="suite">Suite</option>
        </select>

        <div>
          <input
            type="search"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="pl-[20px] w-[120%] text-[1.2rem] py-[.5rem] outline-none appearance-none rounded-md border border-greys-etherium"
            placeholder="Search client"
          />
        </div>

        <div>
          
        </div>
      </div>
      <div className="bg-[#f9f9f9] py-[1.5%] px-[3%] pr-[5.5%] font-bold flex items-center rounded-t-md">
        <span className="w-[25%]">Client Name</span>
        <span className="w-[12%]">Room No.</span>
        <span className="w-[15.5%]">Room Type</span>
        <span className="w-[17%]">Check-in Date</span>
        <span className="w-[17%]">Check-out Date</span>
        <span className="w-[15.5%]">Status</span>
      </div>
      <div className="flex flex-col">
        <BookingItem id={1}/>
        <BookingItem id={2}/>
        <BookingItem id={1}/>
        <BookingItem id={2}/>
        <BookingItem id={1}/>
        <BookingItem id={2}/>
        <BookingItem id={1}/>
        <BookingItem id={2}/>
        <BookingItem id={1}/>
        <BookingItem id={2}/>
        <BookingItem id={1}/>
        <BookingItem id={2}/>
        <BookingItem id={1}/>
        <BookingItem id={2}/>
        <BookingItem id={1}/>
        <BookingItem id={2}/>
        <BookingItem id={1}/>
        <BookingItem id={2}/>
        <BookingItem id={1}/>
        <BookingItem id={2}/>
        <BookingItem id={1}/>
        <BookingItem id={2}/>
        <BookingItem id={1}/>
        <BookingItem id={2}/>
      </div>
    </div>
  )
}

export default BookingsContainer