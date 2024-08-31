import React from 'react';

interface ModelProps {
  answer: string;
}

export const Model: React.FC<ModelProps> = ({ answer }) => {
  return (
    <div className="mt-10 text-center text-gray-900 dark:text-gray-100">
      <p className="text-xl font-semibold mb-4">The answer is:</p>
      <div className="w-full max-w-5xl mx-auto bg-white dark:bg-slate-800 p-10 rounded-lg shadow-lg">
        <p className="text-lg text-justify">{answer}</p>
      </div>
    </div>
  );
};
