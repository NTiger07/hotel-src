import BookingItem from "./BookingItem"

const BookingsContainer = () => {
  return (
    <div className="pt-[2rem]">
      <span className="text-primary-red font-bold text-[3rem]">Bookings</span>
      <div>FILTER</div>
      <div className="bg-[#f9f9f9] py-[1.5%] px-[3%] pr-[5.5%] font-bold flex items-center rounded-t-md">
        <span className="w-[25%]">Customer Name</span>
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