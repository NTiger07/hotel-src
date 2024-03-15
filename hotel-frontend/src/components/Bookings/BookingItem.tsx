import { useMemo } from "react";

type BookingProps = {
    id: number
}
const BookingItem = (props: BookingProps) => {
    const { id } = props
    const setBackdropStyle = useMemo(() => {
        if (id % 2 == 0) {
            return { backgroundColor: "#f9f9f9" };
        }
        return { backgroundColor: "#fff" };
    }, [id]);


    return (
        <div className="w-full flex items-center py-[1.3%] px-[3%]" style={setBackdropStyle}>

            <span className="w-[25%] text-[1.1rem]">Olaleru Favour</span>
            <span className="w-[12%]">Room 1</span>
            <div className="w-[15.5%] flex flex-col">
                <span>Deluxe Suite</span>
                <span className="text-[.9rem] text-greys-etherium">Luxury room</span>
            </div>
            <span className="w-[17%]">21st February, 2024</span>
            <span className="w-[17%]">14th March, 2024</span>
            <span className="w-[15.5%]">Completed</span>
            <div className="relative w-[2.5%] flex justify-center cursor-pointer">
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