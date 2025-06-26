import React, { useRef, useState } from 'react';
import { Star, Calendar } from 'lucide-react';
import { dummyShowsData } from '../../src/assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const AddShows = () => {
  const dateRef = useRef(null);
  const [inputDate, setInputDate] = useState('');
  const [showDates, setShowDates] = useState([]);

  const handleAddDate = () => {
    if (inputDate && !showDates.includes(inputDate)) {
      setShowDates((prev) => [...prev, inputDate]);
      setInputDate('');
    }
  };

  console.log('ShowDates:', showDates);

  return (
    <div className="w-full px-6 py-4 text-white">
      <div className="text-2xl mb-6">
        Add <span className="text-red-400 font-bold underline">Shows</span>
      </div>

      <p className="font-bold text-lg mb-4">Now Playing Movies</p>

      <Swiper slidesPerView={4} className="pb-8 w-[160vh] h-90">
        {dummyShowsData.map((movie, index) => (
          <SwiperSlide key={index} className="w-70">
            <div className="w-60 h-70 relative overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group rounded-lg">
              <img
                className="w-full h-full object-cover"
                src={movie.backdrop_path}
                alt={movie.title}
              />
              <div className="absolute bottom-[-100%] left-0 w-full p-4 backdrop-blur-md bg-white/10 border-t border-white/20 rounded-t-lg transition-all duration-300 ease-in-out group-hover:bottom-0">
                <h2 className="text-xl font-bold mb-1 truncate">{movie.title}</h2>
                <p className="text-sm text-gray-200 mb-2">
                  Released: {movie.release_date}
                </p>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 w-5 h-5" />
                  <p className="text-sm">{movie.vote_average} / 10</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full mt-10">
        <div className="mb-6">
          <p className="font-bold">Show Price</p>
          <div className="relative mt-2 w-40">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">Rs</span>
            <input
              type="number"
              className="w-full pl-9 p-2 rounded border border-gray-300"
              placeholder="Enter price"
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="font-bold">Select Date & Time</p>
          <div className="relative mt-2 w-65">
            <input
              ref={dateRef}
              type="date"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
              className="w-full pr-32 p-2 rounded border border-gray-300 text-white bg-transparent"
            />
            <Calendar
              onClick={() => dateRef.current?.click()}
              className="absolute right-29 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
            />
            <button
              onClick={handleAddDate}
              className="absolute right-3 bg-red-400 p-1 pl-4 pr-4 rounded-lg top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
            >
              Add time
            </button>
          </div>
        </div>

        <div className="mt-5 flex gap-3 flex-wrap">
          {showDates.map((date, idx) => (
            <div
              key={idx}
              className="bg-red-300/25 font-semibold border border-red-700/10 px-3 py-2 rounded-md text-sm"
            >
              {date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddShows;
