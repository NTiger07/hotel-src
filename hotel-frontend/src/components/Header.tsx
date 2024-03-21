import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="h-[13vh] shadow-lg bg-white flex items-center px-[5%] justify-between">
            <span className="font-bold text-[2.2rem] font-poppins">Hotel Management System</span>

            <div className="flex items-center justify-between w-[20%] text-[1.3rem]">
                <span className="text-black cursor-pointer" onClick={() => navigate("/rooms")}>Rooms</span>
                <span className="text-black cursor-pointer" onClick={() => navigate("/bookings")}>Bookings</span>
            </div>
        </div>
    )
}

export default Header