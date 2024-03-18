import { ToastContainer } from 'react-toastify'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Bookings from './pages/Bookings'
import RoomHistory from './pages/RoomHistory'

function App() {

  return (
    <div className='relative h-[100vh] font-lexend'>
      <div className='absolute'>
        <ToastContainer position='top-center' />
      </div>
      <Header />
      <div className="w-[100%] overflow-x-hidden px-[3%]">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/bookings/:room_number' element={<RoomHistory />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
