import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import MovieDetails from './pages/MovieDetails'
import Movies from './pages/Movies'
import Layouts from './pages/admin/Layouts'
import Dashboard from './pages/admin/Dashboard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
      <Toaster />
      
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/favorite' element={<Favorite />} />

        <Route path='/admin/*' element={<Layouts/>}>
          <Route index  element={<Dashboard/>} />
          <Route path='add-shows' element={<AddShows/>} />
          <Route path='list-shows' element={<ListShows/>} />
          <Route path='list-bookings' element={<ListBookings/>} />
        </Route>

      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
