import React from 'react';

const Hero = () => {
  return (
    <div className="text-center mt-20 mb-6"> {/* Adjusted margin */}
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
        LegalEase
      </h1>
      <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
        We provide expert legal advice and solutions for all your legal needs.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Our team of experienced attorneys is here to help you navigate complex legal issues with ease.
      </p>
    </div>
  );
};

export default Hero;
