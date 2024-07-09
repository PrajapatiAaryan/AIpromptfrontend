import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Hero = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null); // Track which button was clicked

  const handleCopy = (item, index) => {
    navigator.clipboard.writeText(item);
    setCopiedIndex(index); // Set the copied index
    setTimeout(() => setCopiedIndex(null), 3000); // Reset after 3 seconds
  };

  async function handleGenerate() {
    setQuestion('');

    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB45HCsZQcZicQOTUjXmAg2GxpvGq7nndg",
      method: "post",
      data: {
        contents: [
          {
            parts: [{ text: `give 5 best prompts for this "${question}". Separate each prompt with "|||". Do not include commas within prompts and end each prompt with a period.` }]
          },
        ],
      },
    });

    const ans = response.data.candidates[0].content.parts[0].text;
    const ans2 = ans.split("|||");
    setAnswer(ans2);
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-600 to-cyan-300'>
      <Navbar />
      <div className='flex items-center flex-col gap-9 h-[85vh] text-gray-900'>
        <div className='md:text-[3rem] text-[1.5rem]'>
          <h1>Enter Your Prompt</h1>
        </div>
        <div className='flex w-full md:w-[80%] py-3 md:px-5 justify-center border border-black gap-5 px-2'>
          <textarea
            placeholder='Enter Your Prompt'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className='w-[80%] bg-gradient-to-r from-blue-600 to-cyan-400 px-4 text-[1rem] flex justify-center resize-none'
          ></textarea>
          <button
            className='rounded-xl border border-black bg-gradient-to-r from-blue-600 to-green-300 md:h-[8vh] md:w-[10vw] md:text-[1.2rem] font-bold px-2'
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
        <div id="answers" className='border border-black h-full md:w-[80%] md:px-5 overflow-auto no-scrollbar mb-7 w-full'>
          <ul className='flex flex-col gap-5 md:gap-2 md:px-4 pt-6 md:text-[1.2rem] text-[1rem] pb-1 px-2'>
            {answer.map((item, index) => (
              <li key={index} className='prompt-item border border-black px-3 py-3 flex justify-between gap-2'>
                {item}
                <button
                  className={`copy-button border border-black text-center rounded-xl px-2 md:hidden md:h-8 h-[4vh] ${copiedIndex === index ? 'bg-green-500' : 'bg-blue-700'}`}
                  onClick={() => handleCopy(item, index)}
                >
                  {copiedIndex === index ? 'Copied!' : 'Copy'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
