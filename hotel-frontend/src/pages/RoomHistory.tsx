import { useParams } from "react-router"
import RoomHistoryContainer from "../components/Rooms/RoomHistoryContainer"

const RoomHistory = () => {
  const {room_number} = useParams()
  return (
    <RoomHistoryContainer room_number={room_number} />
  )
}

export default RoomHistory