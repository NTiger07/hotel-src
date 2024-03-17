import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

const AddRoom = (props: any) => {

    const { setIsVisible } = props
    const [newRoom, setNewRoom] = useState({
        name: "",
        type: "",
        price: 0,
    })


    const newRoomObject = {
        room_name: newRoom.name,
        price: newRoom.price,
        room_type: newRoom.type
    }

    const addRoom = () => {
        axios
            .post(`${import.meta.env.VITE_LOCAL_URL}rooms/add`, newRoomObject)
            .then(() => {
                toast.info("New Room Added")
                setIsVisible(false)
                // getRooms()
            })
            .catch((err) => {
                console.error(err)
            })
    }


    return (
        <div className="w-[50vw] p-[3rem] h-[50vh] absolute gap-3 z-50 bg-white rounded-lg shadow-lg flex flex-col items-center justify-between text-light-black font-medium">

            <div className="NAME flex items-center w-full justify-between">
                <span>Room name</span>
                <input
                    className="outline-none w-[50%] bg-whites-plain rounded-6xs box-border flex flex-row py-[2%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                    type="text"
                    defaultValue={newRoom.name}
                    onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
                    placeholder="Enter room name"
                    required
                />
            </div>

            <div className="TYPE flex w-full items-center justify-between">
                <span>Room type</span>
                <select className="py-[.5rem] cursor-pointer px-[.6rem] text-[1.1rem] outline-none border rounded-md bg-transparent border-greys-etherium"
                    onChange={(e) => setNewRoom({ ...newRoom, type: e.target.value })}
                >
                    <option value="basic">Basic</option>
                    <option value="family">Family</option>
                    <option value="luxury">Luxury</option>
                    <option value="suite">Suite</option>
                </select>
            </div>

            <div className="PRICE w-full flex items-center justify-between">
                <span>Price</span>
                <input
                    className="outline-none w-[20%] bg-whites-plain rounded-6xs box-border flex flex-row py-[2%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                    type="number"
                    onChange={(e) => setNewRoom({ ...newRoom, price: Number(e.target.value) })}
                    placeholder="Price"
                    required
                />
            </div>

            <div className="w-[20%] ml-[.7rem] flex justify-center items-center">
                <button
                    className="cursor-pointer bg-[transparent] h-[3rem] w-[100%] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-primary-red"
                    onClick={addRoom}
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

export default AddRoom