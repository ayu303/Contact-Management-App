import React, { useState } from 'react';


import ChartsAndMaps from './pages/ChartsAndMaps';
import Contacts from './pages/Contacts';

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'contacts' | 'chartsAndMaps'>('contacts');
  const [navbarText, setNavbarText] = useState('My Dashboard');

  const handleContactsClick = () => {
    setCurrentPage('contacts');
    setNavbarText('Contact Page');
  };

  const handleChartsAndMapsClick = () => {
    setCurrentPage('chartsAndMaps');
    setNavbarText('Charts and Maps Page');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 h-screen w-64 ">
        {/* Sidebar Content */}
        <div className="h-screen flex flex-col justify-between">
          {/* Sidebar Header */}
          <div className="p-4">
            <h1 className="text-white text-xl font-semibold">Dashboard</h1>
          </div>
          {/* Sidebar Links */}
          <nav className="space-y-2 flex-grow  pt-8 ">
            <button
              onClick={handleContactsClick}
              className="block p-4 text-gray-300 hover:bg-gray-700 w-full transition duration-300 ease-in-out transform hover:-translate-y-1 text-lg"
            >
              Contacts
            </button>
            <button
              onClick={handleChartsAndMapsClick}
              className="block p-4 text-gray-300 hover:bg-gray-700 w-full transition duration-300 ease-in-out transform hover:-translate-y-1 text-lg"
            >
              Charts and Maps
            </button>
          </nav>
         
         
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-grow">
        {/* Navbar */}
        <nav className="bg-gray-900 p-5 ">
          <div className="container mx-auto flex justify-between items-center ">
            <h1 className="text-white text-3xl font-bold text ">{navbarText}</h1>
           
          </div>
        </nav>
        {/* Main Content Area */}
        <div className="p-8">
          {/* Displaying Different Components Based on Current Page */}
          {currentPage === 'contacts' && <Contacts />}
          {currentPage === 'chartsAndMaps' && <ChartsAndMaps />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
