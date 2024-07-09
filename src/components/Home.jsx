import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import robo from './robo.png';

const Home = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlelog = () => {
    navigate('/login');
  };

  const handlestart = () => {
    navigate('/hero');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }

    // localStorage.clear();  // to remove data from localstorage
  }, []);

  return (
    <div className='h-[100vh] bg-gradient-to-r from-blue-600 to-cyan-300'>
      <Navbar />
      <div className='flex flex-col h-[85vh] justify-between overflow-x-hidden'>
        <div>
          <p className='md:text-[3.5rem] m-8 py-5 px-5 text-[2rem]'>
            Transform Your Ideas into Reality with Advanced AI Prompt Engineering
          </p>
        </div>
        <div className='flex justify-between md:mb-20 md:px-20 px-10 '>
          <div>
            {isAuthenticated ? (
              <button className='bg-blue-200 rounded-3xl h-[10vh] w-[25vw] md:text-xl md:w-[9vw] md:h-[8vh] text-sm bottom-24 border border-black relative  md:top-24 md:bottom-0' onClick={handlestart}>Get started</button>
            ) : (
              <button  className='bg-blue-200 rounded-3xl h-[10vh] w-[25vw] md:text-xl md:w-[9vw] md:h-[8vh] text-sm bottom-24 border border-black relative  md:top-24 md:bottom-0'onClick={handlelog}>Login</button>
            )}
          </div>
          <div className='md:block hidden text-xl font-bold  px-2 '>
            <img src={robo} alt="robo" className=' mix-blend-multiply ' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
