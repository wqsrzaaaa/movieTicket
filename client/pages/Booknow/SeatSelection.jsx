import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const columns = Array.from({ length: 18 }, (_, i) => i + 1);

const SeatSelection = () => {
  const navigation = useNavigate()
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selecone, setselecone] = useState(false)


    const location = useLocation()
  const { movie, selectedDates } = location.state || {}

  

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  const renderSeat = (row, col) => {
    const seatId = `${row}${col}`;
    const isSelected = selectedSeats.includes(seatId);
    const isHidden = (row === 'A' || row === 'B') && col > 9;

    if (isHidden) return null;


    return (
      <div
        key={seatId}
        onClick={() => toggleSeat(seatId)}
        className={`w-9 h-9 m-1 flex items-center justify-center text-xs font-semibold rounded 
        border cursor-pointer transition 
        ${isSelected ? 'bg-red-400 text-black' : 'text-red-400 border-red-400 hover:bg-red-300 hover:text-black'}`}
      >
        {seatId}
      </div>
    );
  };

  const renderRowWithMiddleGap = (row) => {
    return (
      <div key={row} className="flex justify-center ">
        <div className="flex">
          {columns.slice(0, 9).map((col) => renderSeat(row, col))}
        </div>

        <div className="w-[100px]" />

        <div className="flex">
          {columns.slice(9).map((col) => renderSeat(row, col))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-black text-white flex flex-col items-center justify-center p-6 space-y-4">
        {['A', 'B'].map((row) => (
          <div key={row} className="flex justify-center">
            {columns.slice(0, 9).map((col) => renderSeat(row, col))}
          </div>
        ))}

        {['C', 'D'].map((row) => renderRowWithMiddleGap(row))}

        <div className="h-6" />

        {['E', 'F', 'G'].map((row) => renderRowWithMiddleGap(row))}
      </div>
      <div className='w-full h-[120px] flex flex-col items-end gap-5 pr-20 justify-center' >
        {selecone && <p>Please select seats for checkout</p>}
        <button onClick={() => {
          if (selectedSeats.length > 0) {
            setselecone(false)
            navigation(`/mybooking`, {
              state: {
                selectedSeats,
                 selectedDates,
                movie 
              }
            })
          } else {
            setselecone(true)
          }
        }}
          className='bg-red-400 p-4 rounded-full font-bold pl-8 pr-8'>Proceed to checkout</button>
      </div >
    </>

  );
};

export default SeatSelection;
