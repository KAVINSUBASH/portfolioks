import React from 'react'
import Leet from '../assets/leet1.png';
import Hanker from '../assets/H1.png';
import Cred from '../assets/cred.png'
import Ude from '../assets/U1.png';
const Certification = () => {
  return (
    <div name='certificate' className='w-full md:h-screen text-gray-300 bg-[#090918]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Certificates</p>
                <p className='py-6'>Check out some of my achievements</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <a href='https://leetcode.com/kavinramasamy201/'><img className="w-20 mx-auto" src={Leet} alr="html"/>
                <p className='my-4'>Leetcode</p></a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href='https://www.hackerrank.com/profile/kavinramasamy201'><img className="w-20 mx-auto" src={Hanker} alr="html"/>
                <p className='my-4'>HackerRank</p></a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href='https://www.credly.com/users/kavinsubash-k-r/badges'><img className="w-20 mx-auto" src={Cred} alr="html"/>
                <p className='my-4'>Credly</p></a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={Ude} alr="html"/>
                <p className='my-4'>Udemy</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Certification