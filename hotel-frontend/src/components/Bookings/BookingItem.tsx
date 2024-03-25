import axios from "axios";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import Dialog from '@mui/material/Dialog';

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
        <div className="w-full flex items-center py-[1.3%] px-[3%]" style={setBackdropStyle}>

            <Dialog
                open={isVisible}
                onClose={() => setIsVisible(false)}
            >
                <div className="p-[1.5rem] h-max flex flex-col gap-[1rem]">
                    <h1 className="font-semibold text-[1.5rem] text-center">Cancel Booking</h1>
                    <span className="font-medium text-[1.2rem]">Are you sure you want to cancel this booking?</span>
                    <div className="flex items-center justify-center gap-[30px]">
                        <button
                            className="cursor-pointer py-[10px] px-[30px] bg-[transparent] rounded-3xs flex flex-row items-start justify-start border-[1px] border-solid border-primary-red"
                            onClick={() => setIsVisible(false)}
                        >
                            <b className="relative text-base text-primary-red text-left">
                                No
                            </b>
                        </button>

                        <button
                            className="cursor-pointer [border:none] py-[10px] px-[30px] bg-primary-red rounded-3xs flex flex-row items-start justify-start"
                            onClick={cancelAppointment}
                        >
                            <b className="relative text-base text-whites-plain text-left">
                                Yes
                            </b>
                        </button>
                    </div>
                </div>

            </Dialog>
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
                    src="/icons/vectorX.svg"
                    className={`w-[12px] h-[12px] cursor-pointer ${status == "in-progress" ? "" : "hidden"}`}
                    alt=""
                    onClick={() => setIsVisible(true)}
                />
            </div>
        </div >
    )
}

export default BookingItem