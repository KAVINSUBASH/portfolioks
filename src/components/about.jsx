import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#090918] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Kavin, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>
                    Diligent and driven Computer Science and Engineering student eager to 
                    leverage academic foundation and hands-on experience in software development, 
                    systems analysis, and engineering principles to contribute effectively to a dynamic team. 
                    Seeking internship opportunities to apply theoretical knowledge in practical settings, while further 
                    refining technical skills and gaining valuable industry insight. Passionate about tackling complex problems, 
                    innovating solutions, and continuously learning in a fast-paced environment.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About