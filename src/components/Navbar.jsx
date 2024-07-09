import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import close from './close.png'
import menu from './menu.png'
  // Importing icons

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div>
        <nav className='flex justify-between border border-black bg-gradient-to-r from-blue-700 to-blue-900 px-7 py-5 h-[15vh] '>
          <div className="logo md:text-[2.5rem] text-[1.8rem] flex justify-center items-center text-white">
            <h1>AI Prompt Engineer</h1>
          </div>
          <ul className='hidden md:flex gap-[10%] md:justify-end items-center md:text-2xl w-[60%] text-white  md:pr-20 '>
            <li><NavLink to="/"className={(e)=>`${ e.isActive?"actives":""} hover:text-gray-400 flex flex-col gap-3`}  >Home <div className='h-1  hidden op bg-blue-600 rounded-xl'></div></NavLink></li>
            <li><NavLink to="/about" className={(e)=>`${ e.isActive?"actives":""} hover:text-gray-400 flex flex-col gap-3`}>About<div className='h-1  hidden op bg-blue-600 rounded-xl'></div></NavLink></li>
            {/* <li><NavLink to="/login" className={(e)=>`${ e.isActive?"actives":""} hover:text-gray-400 flex flex-col gap-3`}>Login<div className='h-1  hidden op bg-blue-600 rounded-xl'></div></NavLink></li> */}
            <li><NavLink to="/hero" className={(e)=>`${ e.isActive?"actives":""} hover:text-gray-400 flex flex-col gap-3`}>Hero <div className='h-1  hidden op bg-blue-600 rounded-xl'></div></NavLink></li>
          </ul>
          <div className='md:hidden flex justify-center items-center text-lg'>
            <button className='text-xl text-white' onClick={toggleSidebar}>
            <img src={menu} alt="close" className=' h-10' />
            </button>
         
          </div>
        </nav>
      </div>

      {sidebarOpen && (
        <div className='fixed inset-0 bg-gradient-to-r from-blue-700 to-blue-900 flex flex-col items-start p-5 z-50'>
          <div className="logo text-[2rem] flex w-full justify-between items-center text-gray-800 mb-5">
            <h1>AI Prompt Engineer</h1>
            <button className='text-sm text-white' onClick={toggleSidebar}>
            <img src={close} alt="close" className=' h-10' />
            </button>
          </div>
          <ul className='flex flex-col gap-8 text-white mt-20 text-2xl  '> 
            <li><NavLink to="/" className="hover:text-gray-400"  onClick={toggleSidebar}>Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-gray-400" onClick={toggleSidebar}>About</NavLink></li>
            <li><NavLink to="/login" className="hover:text-gray-400" onClick={toggleSidebar}>Login</NavLink></li>
            <li><NavLink to="/hero" className="hover:text-gray-400" onClick={toggleSidebar}>Hero</NavLink></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
