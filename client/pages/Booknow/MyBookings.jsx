import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MyBookings = () => {
  const location = useLocation();
  const { movie, selectedDates, selectedSeats } = location.state || {};

  const [isPaid, setIsPaid] = useState(false);
console.log(movie);

  useEffect(() => {
    const paidStatus = localStorage.getItem('bookingPaid');
    setIsPaid(paidStatus === 'true');
  }, []);

  const handlePayment = () => {
    setIsPaid(true);
    localStorage.setItem('bookingPaid', 'true');
    alert('Payment successful!');
  };

  if (!movie || !selectedDates || !selectedSeats) {
    return <div className="p-6 text-red-500">No booking details found.</div>;
  }

  return (
    <div className="min-h-screen p-8 mt-20 ">
      <h1 className="text-3xl font-bold mb-6">🎟️ My Booking Details</h1>

      <div className="backdrop-blur-md bg-red-200/10  shadow-xl rounded-2xl p-6 space-y-4 items-center flex gap-3 text-white">
        <div className='w-[130px] h-[150px]'>
          <img className='w-full h-full object-cover' src={movie.backdrop_path} alt="" />
        </div>
        <div>
          <div>
            <span className="font-semibold">Movie:</span> {movie.title}
          </div>
          <div>
            <span className="font-semibold">Duration:</span> {movie.runtime} min
          </div>
          <div>
            <span className="font-semibold">Showtime:</span> {selectedDates}
          </div>
          <div>
            <span className="font-semibold">Selected Seats:</span>{' '}
            {selectedSeats.join(', ')}
          </div>
          <div>
            <span className="font-semibold">Payment Status:</span>{' '}
            {isPaid ? (
              <span className="text-green-600 font-bold">Paid ✅</span>
            ) : (
              <span className="text-red-500 font-bold">Not Paid ❌</span>
            )}
          </div>

          {!isPaid && (
            <button
              onClick={handlePayment}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              Pay Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
