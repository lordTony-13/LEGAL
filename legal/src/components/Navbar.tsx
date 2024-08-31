import React, { useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-300 dark:bg-gray-800 shadow-lg rounded-lg px-8 py-3 w-11/12 max-w-9xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
        <a href="#" className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="law.png"
              alt="Logo"
            />
          </a>
          <div className="hidden md:flex ml-10 space-x-4">
            <a href="#" className="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </a>
            <a href="#" className="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Team
            </a>
            <a href="#" className="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </a>
            <a href="#" className="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Calendar
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <button onClick={toggleDarkMode} className="text-gray-800 dark:text-gray-300  hover:bg-gray-700 hover:text-white rounded-full">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}
