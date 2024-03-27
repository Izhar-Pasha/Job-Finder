import React from 'react';


const About = () => {
    return (
        <div className='h-screen bg-slate-100 flex  items-center justify-center p-2'>
            <div className='bg-white  flex flex-col items-start justify-center gap-5 p-3 md:p-5 border-2 rounded-xl w-[100%] md:h-[250px] md:w-[80%]'>
                <h1 className='font-bold  text-2xl '>ABOUT</h1>
                <p className='md:text-sm font-semibold text-slate-600 text-xs '>Welcome to <b>GetHired.Com</b>, your gateway to a world of career opportunities. As a showcase of my expertise in Frontend Development, this platform offers a glimpse into the future of job searching. With thousands of job listings tailored to your interests and skills, GetHired.Com empowers job seekers to take control of their career journey. While not currently active, this project serves as a testament to the seamless integration of cutting-edge technology and user-centric design. Explore our platform and envision the possibilities that lie ahead in your professional endeavors.</p>
            </div>
        </div>
    )
}

export default About;