import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import BookingItemHistory from "../Bookings/BookingItemHistory"
import Loader from "../Loader"

const RoomHistoryContainer = (props: any) => {
  const { room_number } = props
  const navigate = useNavigate()
  const [bookingHistory, setBookingHistory] = useState<any>()
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    getBookingsHistory()
  }, [])

  const getBookingsHistory = () => {
    setLoader(true)
    axios
      .get(`${import.meta.env.VITE_CLOUD_URL}bookings/${room_number}`)
      .then((res) => {
        setBookingHistory(res.data)
        setLoader(false)
      })
      .catch((err) => {
        console.error(err)
        setLoader(false)
      })
  }

  return (
    <div className="flex flex-col mt-[2rem]">
      {loader ? <div className="absolute z-50 top-[65%] left-[45%]"><Loader /></div> : null}
      <span className="cursor-pointer flex items-center gap-2 bg-primary-red text-black font-medium rounded-lg shadow-lg w-[8rem] p-[1rem]" onClick={() => { navigate(-1) }}> <img src="/icons/arrow-left.svg" className="w-[1rem]" alt="" />Go back</span>
      {bookingHistory?.length == 0 ? <span className="font-bold text-[3rem] flex items-center justify-center h-[70vh]">This room has no booking history</span> :


        <div className="flex flex-col mt-[5rem]">
          <span className="text-primary-red font-semibold text-[2rem]">History of room {room_number}</span>
          <div className="bg-[#f9f9f9] mt-[2rem] py-[1.5%] px-[3%] pr-[5.5%] font-bold flex items-center rounded-t-md">
            <span className="w-[25%]">Client Name</span>
            <span className="w-[12%]">Room No.</span>
            <span className="w-[15.5%]">Room Type</span>
            <span className="w-[17%]">Check-in Date</span>
            <span className="w-[17%]">Check-out Date</span>
            <span className="w-[15.5%]">Status</span>
          </div>
          <div className="flex flex-col">
            {bookingHistory?.map((booking: any, index: number) => (
              <BookingItemHistory id={booking.booking._id} index={index + 1} room_number={booking.room.room_number} room_name={booking.room.room_name} room_type={booking.room.room_type} client={booking.booking.client_name} checkin={booking.booking.checkInDate} checkout={booking.booking.checkOutDate} status={booking.booking.status} getBookingsHistory={getBookingsHistory} />
            ))}
          </div>
        </div>






      }
    </div>
  )
}

export default RoomHistoryContainer