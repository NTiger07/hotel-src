import BookingItem from "./BookingItem"

const BookingsContainer = () => {
  return (
    <div className="pt-[2rem]">
      <span className="text-primary-red font-bold text-[3rem]">Bookings</span>
      <div>FILTER</div>
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