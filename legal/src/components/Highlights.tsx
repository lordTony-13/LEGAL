import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Model } from './Model';
import VideoPlayer from './VideoPlayer';

const Highlights = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/ask', { question });
      setAnswer(response.data.answer);
      setVideoPlaying(true); // Start video playback when answer is received
    } catch (error) {
      console.error('Error asking question:', error);
    }
  };

  const speakText = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Clear any ongoing speech

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 1.3; // Adjust the speech rate for a more natural speed

      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('Zira') || voice.gender === 'female');
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      } else {
        utterance.voice = voices.find(voice => voice.lang === 'en-US');
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        setVideoPlaying(true); // Ensure video is playing when speech starts
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        setVideoPlaying(false); // Stop video playback when speech ends
      };

      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Text-to-speech is not supported in this browser.');
    }
  }, []);

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setVideoPlaying(false);
    }
  };

  useEffect(() => {
    if (answer) {
      speakText(answer);
    }
  }, [answer, speakText]);

  const handleVideoTimeUpdate = (currentTime: number) => {
    setVideoTime(currentTime);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg mb-8">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question..."
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
        />
        <button
          className="w-full mt-4 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {isSpeaking && (
          <button
            className="w-full mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={stopSpeech}
          >
            Stop
          </button>
        )}
      </div>

      <div className="w-full max-w-3xl">
        <div className="flex flex-col items-center">
          <VideoPlayer
            src="/her.mp4" // Path relative to public folder
            isPlaying={videoPlaying}
            onTimeUpdate={handleVideoTimeUpdate}
            loop={isSpeaking} // Loop video while speaking
          />
        </div>
        {answer && <Model answer={answer} />}
      </div>
    </div>
  );
};

export default Highlights;
