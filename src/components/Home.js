import React from 'react'
import Akash07 from '../assests/Akash73.jpg'
import Slide from 'react-reveal/Flip';

const Home = () => {
    return (
        <div name='home' className='bg-lb h-[100%] bg-[#eff9ff] px-4 w-[100%] lg:h-screen items-center flex justify-center'>
            <div className='flex w-[100%] items-center flex-col lg:flex-row justify-between md:w-[90%] lg:w-[70%] mt-[130px] md:mt-[180px] mb-[80px]'>

                <div className='md:h-[200px] md:w-[700px] mb-11 lg:mr-44 '>
                    <Slide top>
                        <h1 className='text-grey text-[25px] lg:text-5xl font-bold mb-5 '>Hello everyone, I'm <span className='text-[#fd7014]'>Akash Reddy</span></h1>
                        <h2 className='text-xl mt-10 md:text-2xl font-[600] text-[#fd7014] '>a <span className='text-black'>Passionate Web Developer and Software Developer. </span></h2>
                    </Slide>
                    <Slide top>
                        <div className='bg-lb flex mt-10'>
                            <a href='https://drive.google.com/file/d/1SCyPAyrq509IQAmKmJErPEA4OejzvK9c/view?usp=drivesdk' target='_blank' rel="noreferrer" className='bg-nav text-midnight font-[500] mr-3 w-[50%] bg-midnight-800 text-white px-3 py-2 rounded-sm hover:cursor-pointer text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' >Resume</a>
                            <a href='https://github.com/AkashReddy7' target='_blank' rel="noreferrer" className='bg-nav text-midnight  font-[500] ml-3 w-[50%] bg-gray-800 text-white px-3 py-2 rounded-sm hover:cursor-pointer text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' >Github</a>
                        </div>
                    </Slide>
                </div>
                <div className='box_shadow rounded-full'>
                    <img className='rounded-full w-[300px]' src={Akash07} alt='Kalp' />
                </div>
            </div>
        </div>
    )
}

export default Home
