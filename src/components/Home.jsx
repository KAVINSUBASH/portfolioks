import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#090918]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray-300'>Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>KavinSubash</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a FrontEnd Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Pre-final year CSE student. Driven by a passion for innovation, 
                I eagerly embrace challenges to continually expand my skills and knowledge, 
                poised to make impactful contributions to the ever-evolving field of computer science.</p>
            <div>
                <button className='text-white group border-2 px-6 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Certifications 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home