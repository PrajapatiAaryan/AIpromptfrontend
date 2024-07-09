import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-600 to-cyan-300 border border-black overflow-x-hidden '>
      <Navbar/>
       <div className='flex flex-col gap-5 h-[85vh] '>
        <div className="first   mt-5 px-6 py-4 flex flex-col gap-4">
          <h1 className=' font-bold text-[2rem]'>About us</h1>
          <p className='text-xl'> 
          Welcome to AI Prompt Engineer! We are dedicated to unlocking the full potential of artificial intelligence through expert prompt engineering. Our mission is to empower individuals and businesses by providing innovative solutions that transform ideas into reality.
          </p>
        </div>
        <div className="second   px-6 py-4 flex flex-col gap-3">
          <h1 className=' font-bold text-[2rem]' >Our Mission</h1>
          <p className='text-xl'>
          Our mission is to revolutionize the way people interact with AI by crafting precise and effective prompts. We strive to make AI technology accessible and valuable to everyone, fostering creativity and efficiency in various fields.
          </p>
        </div>
        <div className="Third  px-6 py-4 flex flex-col gap-2">
          <h1 className=' font-bold text-[2rem]'>What We Do</h1>
          <h3 className='font-bold text-[1.5rem]'>At AI Prompt Engineer, we specialize in:</h3>
          <ul className='text-[1.2rem]'>
            <li><b>Custom Prompt Engineering:</b> Tailored prompts designed to meet your specific needs and objectives.</li>
            <li><b>Consulting Services:</b> Expert advice on how to optimize AI usage for your projects.</li>
            <li><b>Educational Resources: </b>Tutorials, guides, and workshops to help you master prompt engineering.</li>
          </ul>
        </div>
       </div>
    </div>
  )
}

export default About
