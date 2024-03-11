import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import ReactImg from '../assets/react.png';
import Java from '../assets/java.png';
import Javascript from '../assets/javascript.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/python.png';
import Sql from '../assets/mysql.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#090918] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div >
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={HTML} alr="html"/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={CSS} alr="html"/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={Javascript} alr="html"/>
                <p className='my-4'>Javascript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={ReactImg} alr="html"/>
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={Python} alr="html"/>
                <p className='my-4'>Python</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={Java} alr="html"/>
                <p className='my-4'>Java</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={Mongo} alr="html"/>
                <p className='my-4'>MongoDB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={Sql} alr="html"/>
                <p className='my-4'>MYSQL</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills