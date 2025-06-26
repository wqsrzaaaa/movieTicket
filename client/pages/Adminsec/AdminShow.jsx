import React, { useState } from 'react'
import Dashboard from './Dashboard'
import AddShows from './AddShows'
import ListShows from './ListShows'
import ListBooking from './ListBooking'

const AdminShow = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'addShows':
        return <AddShows />;
      case 'listShows':
        return <ListShows />;
      case 'listBooking':
        return <ListBooking />;
      default:
        return <Dashboard />;
    }
  };
  return (

    <>
    <div className='w-full text-white z-999 absolute top-0 left-0 h-[80px] flex items-center pl-9 border-b-1 border-zinc-600'>
      <h1 className='w-40 text-xl'> <span className='text-red-700'>Q</span>uickShow </h1>
    </div>



    <div className="flex bg-black mt-20 text-white">
      <div className="w-64 p-6 overflow-hidden space-y-4">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
       <ul className="space-y-2">
  <li
    className={`cursor-pointer p-3 ${activeTab === 'dashboard' ? 'font-bold text-white' : ''}`}
    style={activeTab === 'dashboard' 
      ? { backgroundColor: 'rgb(43, 22, 22)', borderRight: '15px solid #bc5c5c'  }
      : {}}
    onClick={() => setActiveTab('dashboard')}
  >
    Dashboard
  </li>
  <li
    className={`cursor-pointer p-3 ${activeTab === 'addShows' ? 'font-bold text-white' : ''}`}
    style={activeTab === 'addShows' 
      ? { backgroundColor: 'rgb(43, 22, 22)', borderRight: '15px solid #bc5c5c' }
      : {}}
    onClick={() => setActiveTab('addShows')}
  >
    Add Shows
  </li>
  <li
    className={`cursor-pointer p-3 ${activeTab === 'listShows' ? 'font-bold text-white' : ''}`}
    style={activeTab === 'listShows' 
      ? { backgroundColor: 'rgb(43, 22, 22)', borderRight: '15px solid #bc5c5c' }
      : {}}
    onClick={() => setActiveTab('listShows')}
  >
    List Shows
  </li>
  <li
    className={`cursor-pointer p-3 ${activeTab === 'listBooking' ? 'font-bold text-white' : ''}`}
    style={activeTab === 'listBooking' 
      ? { backgroundColor: 'rgb(43, 22, 22)', borderRight: '15px solid #bc5c5c' }
      : {}}
    onClick={() => setActiveTab('listBooking')}
  >
    List Booking
  </li>
</ul>


      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {renderComponent()}
      </div>
    </div>
    </>

  );
};

export default AdminShow;
