import RoomItem from "./RoomItem"

const RoomsContainer = () => {
  return (
    <div className="pt-[2rem]">
      <span className="text-primary-red font-bold text-[3rem]">Rooms</span>
      <div className="flex items-center">
        <select name="diet">
          <option value="">All</option>
          <option value="basic">Basic</option>
          <option value="family">Family</option>
          <option value="luxury">Luxury</option>
          <option value="suite">Suite</option>
        </select>

        <div>
          <input 
          type="search" 
          className="pl-[20px] w-[100%] text-[1.2rem] outline-none appearance-none"
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