import { useNavigate } from "react-router"

const RoomItem = (props: any) => {
    const { room_number, room_name, price, room_type, status } = props
    const navigate = useNavigate()
    let description
    switch (room_type) {
        case "basic":
            description = "Experience simplicity and comfort in our cozy basic room, perfect for a peaceful retreat."
            break;
        case "family":
            description = "Create cherished memories with your loved ones in our spacious family room."
            break;
        case "luxury":
            description = "Elevate your stay with our luxurious room, where opulence meets comfort, ensuring a truly lavish experience."
            break;
        case "suite":
            description = "Indulge in the epitome of luxury in our exquisite suite, offering unparalleled elegance for an unforgettable getaway."
            break;
        default:
            break;
    }

    return (
        <div className="flex flex-col rounded-xl shadow-md bg-white w-[280px] h-max">
            <div className="w-full h-[50%]">
                <img src="/assets/room.jpg" className="rounded-t-xl w-[280px]" alt="" />
            </div>
            <div className="w-full h-[50%] p-[5%] flex flex-col items-center">
                <div className="flex justify-between w-full font-semibold text-[1.3rem]">
                    <div className="flex flex-col">
                        <span>{room_name}</span>
                        <span className="text-[.8rem] text-greys-etherium">{room_type[0].toUpperCase() + room_type.substring(1)} room</span>
                    </div>
                    <span>$ {price}</span>
                </div>
                <span className="w-full text-[.8rem]">Room {room_number}</span>
                <p className="w-full py-[3%]">
                    {description}
                </p>
                <button
                    className={`cursor-default [border:none] py-[.8rem] w-[100%] rounded-3xs flex justify-center ${status == "booked" ? 'bg-primary-red' : "bg-others-green"}`}
                >
                    <b className="relative text-[1.2rem] text-whites-plain">
                        {status[0].toUpperCase() + status.substring(1)}
                    </b>
                </button>
                {/* <span className="text-[.9rem] text-primary-red mt-[1rem] w-full cursor-pointer hover:underline">View details...</span> */}
                <span className="text-[.9rem] text-primary-red mt-[1rem] w-full cursor-pointer hover:underline" onClick={() => { navigate(`/bookings/${room_number}`) }}>View booking history...</span>
            </div>
        </div>
    )
}

export default RoomItem