import { ToastContainer } from 'react-toastify'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Bookings from './pages/Bookings'

function App() {

  return (
    <div className='relative overflow-hidden h-[100vh] font-lexend'>
      <div className='absolute'>
        <ToastContainer position='top-center' />
      </div>
      <Header />
      <div className="w-[100%] overflow-x-hidden bg-[#b1aaaace]">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/bookings' element={<Bookings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
