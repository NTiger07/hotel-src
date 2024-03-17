import { useEffect, useState } from "react"
import RoomItem from "./RoomItem"
import AddRoom from "./AddRoom"
import axios from "axios"
type RoomType = {
      roomNumber: number,
      room_name: string,
      room_type: string,
      price: number,
      status: string,
}
const RoomsContainer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [roomType, setRoomType] = useState("")

  useEffect(() => {
    getRooms()
  }, [])

  const [rooms, setRooms] = useState<RoomType>([])

  const getRooms = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}rooms/all`)
      .then((res) => {
        setRooms(res.data)
      })
      .catch((err) => { console.error(err) })
  }


  return (
    <div className="relative pt-[2rem]">
      {isVisible ? <AddRoom setIsVisible={setIsVisible} getRooms={getRooms} /> : null}

      <span className="text-primary-red font-bold text-[3rem]">Rooms</span>

      <div className="FILTERADD flex items-center justify-between py-[3rem]">

        <div className="FILTER flex items-center gap-[2rem]">

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
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-[20px] w-[120%] text-[1.2rem] py-[.5rem] outline-none appearance-none rounded-md border border-greys-etherium"
              placeholder="Search rooms"
            />
          </div>
        </div>

        <div className="ADD bg-primary-red rounded-lg flex py-[.6rem] px-[2rem] justify-between cursor-pointer" onClick={() => setIsVisible(!isVisible)}>
          <a className="[text-decoration:none] w-fit flex flex-row items-center justify-start gap-[4px]">
            <img className="relative w-6 h-6" alt="" src="/icons/add.svg" />
            <div className="relative font-semibold text-white">Add Room</div>
          </a>
        </div>

      </div>



      
 
      
      <div className="grid grid-cols-4 gap-y-[3rem] pb-[2rem] gap-x-3">
        {rooms.map((room) => (
          <RoomItem room_number={room.roomNumber} room_name={room.room_name} price={room.price} room_type={room.room_type} status={room.status} />
        ))}
      </div>
    </div>
  )
}

export default RoomsContainer