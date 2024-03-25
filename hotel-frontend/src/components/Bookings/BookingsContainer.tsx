import { useEffect, useState } from "react"
import BookingItem from "./BookingItem"
import AddBooking from "./AddBooking"
import axios from "axios"

const BookingsContainer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [clientName, setClientName] = useState("")
  const [status, setStatus] = useState("")
  const [bookings, setBookings] = useState([])
  useEffect(() => { getBookings() }, [clientName, status])

  const [length, setLength] = useState(0)

  const getBookings = () => {
    const queryParams:any = {};
    if (clientName) {
      queryParams.client_name = clientName
      setLength(length + 1)
    }
    if (status) {
      queryParams.status = status
      setLength(length + 1)
    }
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}bookings/all`, { params: queryParams })
      .then((res) => {
        setBookings(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }


  return (
    <div className="relative pt-[2rem] min-h-[90vh]">
      {isVisible ? <AddBooking setIsVisible={setIsVisible} getBookings={getBookings} /> : null}

      <span className="text-primary-red font-bold text-[3rem]">Bookings</span>

      <div className="FILTERADD flex items-center justify-between py-[3rem]">

        {bookings?.length == 0 && length < 0 ? <div></div> : <div className="FILTER flex items-center gap-[2rem]">
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="py-[.5rem] cursor-pointer px-[.6rem] text-[1.1rem] outline-none border rounded-md bg-transparent border-greys-etherium">
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In-progress</option>
            <option value="cancelled">Cancelled</option>
            <option value="completed">Completed</option>
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
        </div>}


        <div className="ADD bg-primary-red rounded-lg flex py-[.6rem] px-[2rem] justify-between cursor-pointer" onClick={() => { setIsVisible(!isVisible) }}>
          <a className="[text-decoration:none] w-fit flex flex-row items-center justify-start gap-[4px]">
            <img className="relative w-6 h-6" alt="" src="/icons/add.svg" />
            <div className="relative font-semibold text-white">Add Booking</div>
          </a>
        </div>

      </div>


      {bookings?.length == 0 && length > 0 ? <div className="items-center font-semibold text-[2rem] flex flex-col mt-[1rem]">No bookings match this criteria</div> : null}
      {length == 0 && bookings?.length == 0 ? <div className="items-center font-semibold text-[2rem] flex flex-col mt-[1rem]">There are currently no bookings. <span>Click on <span className="text-primary-red">Add Booking</span> to add a booking.</span></div> : null}



      {bookings?.length == 0 ? null : <div className="bg-[#f9f9f9] py-[1.5%] px-[3%] pr-[5.5%] font-bold flex items-center rounded-t-md">
        <span className="w-[25%]">Client Name</span>
        <span className="w-[12%]">Room No.</span>
        <span className="w-[15.5%]">Room Type</span>
        <span className="w-[17%]">Check-in Date</span>
        <span className="w-[17%]">Check-out Date</span>
        <span className="w-[15.5%]">Status</span>
      </div>}

      <div className="flex flex-col">
        {bookings?.map((booking: any, index) => (
          <BookingItem id={booking.booking._id} index={index + 1} room_number={booking.room.room_number} room_name={booking.room.room_name} room_type={booking.room.room_type} client={booking.booking.client_name} checkin={booking.booking.checkInDate} checkout={booking.booking.checkOutDate} status={booking.booking.status} getBookings={getBookings}/>
        ))}
      </div>
    </div>
  )
}

export default BookingsContainer