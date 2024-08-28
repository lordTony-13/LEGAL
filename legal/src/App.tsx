import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Use correct path for icons
import './index.css'; // Ensure this path is correct

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [question, setQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = () => {
    // Update the state with the question text
    setSubmittedQuestion(question);
    setQuestion(''); // Clear the input field after submission
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="p-4 flex justify-end">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="focus:outline-none fixed top-4 right-4"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-300" />
          )}
        </button>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center mb-6">
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

        <div className="w-full max-w-md bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            value={question}
            onChange={handleQuestionChange}
            placeholder="Ask your question..."
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          />
          <button
            onClick={handleSubmit}
            className="w-full mt-4 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Submit
          </button>
        </div>

        {/* Display submitted question */}
        {submittedQuestion && (
          <div className="mt-6 text-center text-gray-900 dark:text-gray-100">
            <p className="text-lg font-semibold">You asked:</p>
            <p className="text-lg">{submittedQuestion}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
