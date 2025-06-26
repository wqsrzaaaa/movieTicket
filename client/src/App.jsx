import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Home from '../pages/Home/Home';
import Footer from '../component/Footer';
import DetailPage from '../pages/MovieDetails/DetailPage';
import FirstPgBooking from '../pages/Booknow/FirstPgBooking';
import MyBookings from '../pages/Booknow/MyBookings';
import AdminShow from '../pages/adminsec/adminShow';

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mybooking" element={<MyBookings />} />
        <Route path="/admin" element={<AdminShow />} />
        <Route path="/movie/:id" element={<DetailPage />} />
        <Route path="/movie/:id/:id" element={<FirstPgBooking />} />
        <Route path="/about" />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
