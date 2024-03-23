import axios from "axios";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

type BookingProps = {
    id: string,
    index: number,
    room_number: number,
    room_name: string,
    room_type: string,
    client: string,
    checkin: Date,
    checkout: Date,
    status: string,
    getBookings: () => void,
}
const BookingItem = (props: BookingProps) => {
    const { id, index, room_number, room_name, room_type, client, checkin, checkout, status, getBookings } = props
    const [isVisible, setIsVisible] = useState(false)

    const setBackdropStyle = useMemo(() => {
        if (index % 2 == 0) {
            return { backgroundColor: "#f9f9f9" };
        }
        return { backgroundColor: "#fff" };
    }, [index]);

    const cancelAppointment = () => {
        axios
            .post(`${import.meta.env.VITE_LOCAL_URL}bookings/cancel/${id}`)
            .then(() => {
                toast.info("Appointment cancelled")
                setIsVisible(false)
                getBookings()
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <div className="relative w-full flex items-center py-[1.3%] px-[3%]" style={setBackdropStyle}>
            {isVisible && status == "cancelled" ? <div className="absolute right-0 z-50 top-[42%] shadow-lg bg-white rounded-lg p-[1rem] POPUP cursor-pointer" onClick={cancelAppointment}>
                Cancel Appointment
            </div> : null}

            <span className="w-[25%] text-[1.1rem]">{client}</span>
            <span className="w-[12%]">Room {room_number}</span>
            <div className="w-[15.5%] flex flex-col">
                <span>{room_name}</span>
                <span className="text-[.9rem] text-greys-etherium">{room_type[0].toUpperCase() + room_type.substring(1)} room</span>
            </div>
            <span className="w-[17%]">{dayjs(checkin).format("DD-MM-YYYY")}</span>
            <span className="w-[17%]">{dayjs(checkout).format("DD-MM-YYYY")}</span>
            <span className="w-[15.5%]">{status[0].toUpperCase() + status.substring(1)}</span>
            <div className="relative w-[2.5%] flex justify-center">
                <img
                    src="/icons/double-arrow.svg"
                    className="w-[22px] h-[20px] cursor-pointer"
                    alt=""
                    onClick={() => { setIsVisible(!isVisible) }}
                />
            </div>
        </div >
    )
}

export default BookingItem