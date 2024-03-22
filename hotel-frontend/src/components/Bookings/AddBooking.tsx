import axios from "axios"
import dayjs from "dayjs"
import { useState } from "react"
import { toast } from "react-toastify"
import { DateRange, Range } from "react-date-range"

const AddBooking = (props: any) => {
    const { setIsVisible, getBookings } = props

    const [selectionRange, setSelectionRange] = useState<Range>(
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    )

    const [newBooking, setNewBooking] = useState({
        client_name: "",
        room_number: 0,
    })

    const newBookingObject = {
        client_name: newBooking.client_name,
        room_number: newBooking.room_number,
        checkInDate: dayjs(selectionRange.startDate).format("DD-MM-YYYY"),
        checkOutDate: dayjs(selectionRange.endDate).format("DD-MM-YYYY"),
    }

    const addBooking = () => {
        axios
            .post(`${import.meta.env.VITE_LOCAL_URL}bookings/add`, newBookingObject)
            .then(() => {
                toast.info("New Booking Added")
                setIsVisible(false)
                getBookings()
            })
            .catch((err) => {
                console.error(err)
                if (err.response.data == "Room not found") {
                    toast.error("Room doesn't exist")
                    setIsVisible(false)
                }
            })
    }
    return (
        <div className="w-[50vw] p-[3rem] h-[80vh] overflow-visible absolute gap-3 z-50 bg-white rounded-lg shadow-lg flex flex-col items-center justify-between text-light-black font-medium">

            <div className="NAME flex items-center w-full justify-between">
                <span>Client name</span>
                <input
                    className="outline-none w-[50%] bg-whites-plain rounded-6xs box-border flex flex-row py-[2%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                    type="text"
                    value={newBooking.client_name}
                    onChange={(e) => setNewBooking({ ...newBooking, client_name: e.target.value })}
                    placeholder="Enter client name"
                    required
                />
            </div>


            <div className="NUMBER w-full flex items-center justify-between">
                <span>Room number</span>
                <input
                    className="outline-none w-[20%] bg-whites-plain rounded-6xs box-border flex flex-row py-[2%] pr-0 pl-[4%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                    type="number"
                    onChange={(e) => setNewBooking({ ...newBooking, room_number: Number(e.target.value) })}
                    placeholder="Room no."
                    required
                />
            </div>

            <div className="flex items-center w-full justify-between">
                <DateRange
                    ranges={[selectionRange]}
                    onChange={(changes) => setSelectionRange(changes.selection)}
                    minDate={new Date}
                />

                <div className="w-[20%] ml-[.7rem] flex justify-center items-center mt-[2rem]">
                    <button
                        className="cursor-pointer bg-[transparent] h-[3rem] w-[100%] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-primary-red"
                        onClick={addBooking}
                    >
                        <img src="/icons/add-red.svg" alt="" />
                        <b className="relative text-base text-primary-red text-center">
                            Add
                        </b>
                    </button>
                </div>

            </div>


        </div>
    )
}

export default AddBooking
