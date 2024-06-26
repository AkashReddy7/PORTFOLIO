import React from 'react'
import elect from "../assests/electro.png"
const AboutMe = () => {
    return (
        <div name='about' className='bg-lb h-[100%] px-6 flex flex-col items-center ' style={{backgroundImage:{elect}}}>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-3 divide-y mt-[80px] md:mt-[120px]'>About Me</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[120px] sm:w-[150px] mb-[50px]' />
                <div className='m-0 box_shadow'>
                    <p className='text-xl mb-5 mt-[20px] '>Hi, I'm Akash Reddy Pitta, a passionate Web Developer and Software Developer about software development.</p>
                    <p className='text-xl mb-5'>I am currently working in the domains of Frontend web development and technical.I like to spend my leisure time in travel and exploration</p>
                    <p className='text-xl mb-5'>I am currently pursuing by B.Tech Final Year in Electrical Engineering at NIT Rourkela and expect to graduate by 2025.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
