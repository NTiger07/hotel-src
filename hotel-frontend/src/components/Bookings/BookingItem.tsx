import { useMemo } from "react";

type BookingProps = {
    id: number
}
const BookingItem = (props: BookingProps) => {
    const { id } = props
    const setBackdropStyle = useMemo(() => {
        if (id % 2 == 0) {
            // even number
            return { backgroundColor: "#f9f9f9" };
        }
        return { backgroundColor: "#fff" };
    }, [id]);


    return (
        <div className="w-full flex items-center py-[1.3%] px-[3%]" style={setBackdropStyle}>

            <span className="w-[20%]">Olaleru Favour</span>
            <div className="w-[20%] flex flex-col">
                <span>Room 1</span>
                <span className="text-[.9rem] text-greys-etherium">Deluxe Suite</span>

            </div>
            <span className="w-[20%]">21st February, 2024</span>
            <span className="w-[20%]">14th March, 2024</span>
            <span className="w-[20%]">Completed</span>
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