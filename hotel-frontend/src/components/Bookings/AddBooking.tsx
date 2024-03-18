import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import axios from "axios"
import dayjs from "dayjs"
import { useState } from "react"
import { toast } from "react-toastify"

const AddBooking = (props: any) => {
    const { setIsVisible, getBookings } = props
    const [newBooking, setNewBooking] = useState({
        client_name: "",
        room_number: 0,
        // room_type: "",
        checkInDate: "",
        checkOutDate: "",
    })

    const newBookingObject = {
        client_name: newBooking.client_name,
        room_number: newBooking.room_number,
        // room_type: newBooking.room_type,
        checkInDate: newBooking.checkInDate,
        checkOutDate: newBooking.checkOutDate,
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
            })
    }
    return (
        <div className="w-[50vw] p-[3rem] h-[65vh] absolute gap-3 z-50 bg-white rounded-lg shadow-lg flex flex-col items-center justify-between text-light-black font-medium">

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

            {/* <div className="TYPE flex w-full items-center justify-between">
                <span>Room type</span>
                <select className="py-[.5rem] cursor-pointer px-[.6rem] text-[1.1rem] outline-none border rounded-md bg-transparent border-greys-etherium"
                    value={newBooking.room_type}
                    onChange={(e) => setNewBooking({ ...newBooking, room_type: e.target.value })}
                >
                    <option value="basic">Basic</option>
                    <option value="family">Family</option>
                    <option value="luxury">Luxury</option>
                    <option value="suite">Suite</option>
                </select>
            </div> */}



            <div className="CHECKIN w-full flex items-center justify-between">
                <span>Check-In Date</span>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        disablePast
                        label="Check-In Date"
                        value={dayjs(newBooking.checkInDate)}
                        onChange={(time) => setNewBooking({ ...newBooking, checkInDate: dayjs(time, 'DD-MM-YYYY').format('DD-MM-YYYY') })}
                        format="DD-MM-YYYY"
                    />
                </LocalizationProvider>
            </div>


            <div className="CHECKOUT w-full flex items-center justify-between">
                <span>Check-Out Date</span>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        disablePast
                        label="Check-Out Date"
                        value={dayjs(newBooking.checkOutDate)}
                        onChange={(time) => setNewBooking({ ...newBooking, checkOutDate: dayjs(time, 'DD-MM-YYYY').format('DD-MM-YYYY') })}
                        format="DD-MM-YYYY"
                    />
                </LocalizationProvider>


            </div>

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
    )
}

export default AddBooking