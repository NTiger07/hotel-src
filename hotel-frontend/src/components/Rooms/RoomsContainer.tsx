import { useEffect, useState } from "react"
import RoomItem from "./RoomItem"
import AddRoom from "./AddRoom"
import axios from "axios"
type RoomType = {
  length: number
  map(arg0: (room: RoomType) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
  room_number: number,
  room_name: string,
  room_type: string,
  price: number,
  status: string,
}
const RoomsContainer = () => {
  const [rooms, setRooms] = useState<RoomType>()
  const [isVisible, setIsVisible] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [roomType, setRoomType] = useState("")

  useEffect(() => {
    getRooms()
  }, [roomType, searchValue])

  const [length, setLength] = useState(0)

  const getRooms = () => {
    const queryParams: any = {};
    if (roomType) {
      queryParams.room_type = roomType
      setLength(length + 1)
    }
    if (searchValue) {
      queryParams.room_name = searchValue
      setLength(length + 1)
    }

    axios
      .get(`${import.meta.env.VITE_CLOUD_URL}rooms/all`, { params: queryParams })
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return (
    <div className="relative pt-[2rem] min-h-[70vh]">
      {isVisible ? <AddRoom setIsVisible={setIsVisible} getRooms={getRooms} /> : null}

      <span className="text-primary-red font-bold text-[3rem]">Rooms</span>

      <div className="FILTERADD flex items-center justify-between py-[3rem]">

        {rooms?.length == 0 && length < 0 ? <div></div> : <div className="FILTER flex items-center gap-[2rem]">

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
        </div>}

        <div className="ADD bg-primary-red rounded-lg flex py-[.6rem] px-[2rem] justify-between cursor-pointer" onClick={() => setIsVisible(!isVisible)}>
          <a className="[text-decoration:none] w-fit flex flex-row items-center justify-start gap-[4px]">
            <img className="relative w-6 h-6" alt="" src="/icons/add.svg" />
            <div className="relative font-semibold text-white">Add Room</div>
          </a>
        </div>

      </div>


      {rooms?.length == 0 && length > 0 ? <div className="items-center font-semibold text-[2rem] flex flex-col mt-[1rem]">No rooms match this criteria</div> : null}
      {length == 0 && rooms?.length == 0 ? <div className="items-center font-semibold text-[2rem] flex flex-col mt-[1rem]">There are currently no rooms. <span>Click on <span className="text-primary-red">Add Room</span> to add a room.</span></div> : null}



      <div className="grid grid-cols-4 gap-y-[3rem] pb-[2rem] gap-x-3">
        {rooms?.map((room: RoomType) => (
          <RoomItem room_number={room.room_number} room_name={room.room_name} price={room.price} room_type={room.room_type} status={room.status} />
        ))}
      </div>
    </div>
  )
}

export default RoomsContainer