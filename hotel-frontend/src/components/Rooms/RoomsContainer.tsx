import { useState } from "react"
import RoomItem from "./RoomItem"

const RoomsContainer = () => {
  const [searchValue, setSearchValue] = useState("")
  const [roomType, setRoomType] = useState("")

  return (
    <div className="pt-[2rem]">
      <span className="text-primary-red font-bold text-[3rem]">Rooms</span>

      <div className="FILTER flex items-center gap-[2rem] py-[3rem]">
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




      <div className="grid grid-cols-4 gap-y-[3rem] pb-[2rem] gap-x-3">
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
      </div>
    </div>
  )
}

export default RoomsContainer