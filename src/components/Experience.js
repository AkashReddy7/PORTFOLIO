import React from 'react'

const Experience = () => {
    return (
        <div name='experience' className='bg-lb h-[100%] flex flex-col items-center  '>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className=' text-4xl sm:text-5xl font-bold mb-5 mt-[80px] md:mt-[120px]'>Experience</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[130px] sm:w-[170px] mb-[50px]' />
                <div className='mt-[10px] grid grid-cols-1 px-6'>
                   
                    <div className='mb-[30px] text-[24px] sm:text-[30px] font-bold'> Experience :</div>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[50px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>Celebal Technologies (May 2024-July 2024) </h1>
                        <h6 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>Role: Web developer Internship</h6>
                        <p className='text-[14px] sm:text-[17px]'>This is 2 months remote Internship as a web developer. Here I Developed and maintained responsive websites using HTML, CSS, and JavaScript.</p>
                    </div>
                    <br/>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[50px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>Rourkela Steel Plant (May 2024 - July 2024)</h1>
                        <h6 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>role: Summer Vocational Internship</h6>
                        <p className='text-[14px] sm:text-[17px]'>Repair, Rewinding, and Testing of all Electrical Equipment like AC‐ HT and LT Motors, DC Motors, Turbo Generators, and Power
Control Transformers </p>
                    </div>
                    <br/>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[50px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>Visakhapatnam Steel Plant(june 2023-July 2023) </h1>
                        <h6 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>role: Summer Vocational Internship</h6>
                        <p className='text-[14px] sm:text-[17px]'>Internship in the protection of transformer, Process Automation, and Reading of Schematics, Acquired Knowledge in Programming of PLCs and DCS concept of Pneumatic Systems, and Also Studied the functionality of Various instruments, and participated in Troubleshooting.

</p>
                    </div>
                    <br/>
                    <div className='mb-[30px] text-[24px] sm:text-[30px] font-bold'>Education Qualification :</div>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[30px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>B.Tech- Electrical Engineering</h1>
                            <div className='flex justify-between'>
                            <p className='text-[15px] sm:text-[18px]'>National institute of technology, Rourkela</p>
                            <p className='text-[15px] sm:text-[18px]'>2021 - 2025</p>
                        </div>
                    </div>
                    <br/>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[30px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>Intermediate </h1>
                            <div className='flex justify-between'>
                            <p className='text-[15px] sm:text-[18px]'>Sri Chaitanya Jr College, Visakhapatnam</p>
                            <p className='text-[15px] sm:text-[18px]'>2018 - 2020</p>
                        </div>
                    </div>
                    <br/>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[30px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>High school Education</h1>
                            <div className='flex justify-between'>
                            <p className='text-[15px] sm:text-[18px]'>Ravindra Bharathi school,visakhapatnam</p>
                            <p className='text-[15px] sm:text-[18px]'>2018</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
