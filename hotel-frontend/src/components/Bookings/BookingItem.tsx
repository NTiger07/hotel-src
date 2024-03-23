import dayjs from "dayjs";
import { useMemo } from "react";

type BookingProps = {
    id: number,
    room_number: number,
    room_name: string,
    room_type: string,
    client: string,
    checkin: Date,
    checkout: Date,
    status: string

}
const BookingItem = (props: BookingProps) => {
    const { id, room_number, room_name, room_type, client, checkin, checkout, status } = props
    const setBackdropStyle = useMemo(() => {
        if (id % 2 == 0) {
            return { backgroundColor: "#f9f9f9" };
        }
        return { backgroundColor: "#fff" };
    }, [id]);


    return (
        <div className="w-full flex items-center py-[1.3%] px-[3%]" style={setBackdropStyle}>

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
                    className="w-[22px] h-[20px]"
                    alt=""
                />
            </div>
        </div >
    )
}

export default BookingItem