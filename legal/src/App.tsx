import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import { Model } from './components/Model';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <Hero />
        <Highlights />
      </div>
    </div>
  );
}

export default App;
