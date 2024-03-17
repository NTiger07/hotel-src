const RoomItem = () => {
    return (
        <div className="flex flex-col rounded-xl shadow-md bg-white w-[280px] h-max">
            <div className="w-full h-[50%]">
                <img src="/assets/room.jpg" className="rounded-t-xl w-[280px]" alt="" />
            </div>
            <div className="w-full h-[50%] p-[5%] flex flex-col items-center">
                <div className="flex justify-between w-full font-semibold text-[1.3rem]">
                    <div className="flex flex-col">
                        <span>Deluxe Suite</span>
                        <span className="text-[.8rem] text-greys-etherium">Luxury room</span>
                    </div>
                    <span>$ 100</span>
                </div>
                <span className="w-full text-[.8rem]">Room 1</span>
                <p className="w-full py-[3%]">spacious and luxurious suite
                    with stunning views. Enjoy the
                    comfort and elegance of this
                    beautiful...
                </p>
                <button
                    className="cursor-default [border:none] py-[.8rem] w-[100%] bg-primary-red rounded-3xs flex justify-center"
                >
                    <b className="relative text-[1.2rem] text-whites-plain">
                        Booked
                    </b>
                </button>
                {/* <span className="text-[.9rem] text-primary-red mt-[1rem] w-full cursor-pointer hover:underline">View details...</span> */}
                <span className="text-[.9rem] text-primary-red mt-[1rem] w-full cursor-pointer hover:underline">View booking history...</span>
            </div>
        </div>
    )
}

export default RoomItem