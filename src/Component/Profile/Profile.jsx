import React from 'react';
// import Prof from "../../Assets/Prof.jpg";
// import amazon from "../../Assets/amazon.svg";
// import infosys from "../../Assets/info.svg";
// import microsoft from "../../Assets/microsoft.svg";
// import Edu from "../../Assets/Educt.logo.jpg";
// import cert from "../../Assets/Certificate.jpg";
import amazon from "../../Assets/Amazon.jpeg";
import microsoft from "../../Assets/Microsoft .jpeg";
import infosys from "../../Assets/Infosys.jpeg";
import Edu from "../../Assets/Edu .jpeg";
import cert from "../../Assets/Cert.jpeg";
import Prof from "../../Assets/Profile.png";
import { useState } from 'react';





const Profile = () => {
  const [action, setAction] = useState("Login");

  return (

    <div className=' h-screen bg-slate-100 w-[100%]  flex flex-col md:flex-row items-center  md:gap-10 gap-5  overflow-y-scroll  '>
      <h1 className='text-black md:h-[400px] h-auto w-auto md:w-[10%] text-center  mt-20 font-serif font-semibold'>User Profile</h1>

      <div className='h-full md:h-[580px] md:w-[25%] bg-white w-[85%] py-5 md:flex items-center justify-center flex flex-row gap-5 rounded-lg'>
        <div className=" w-[85%] gap-10">
          <div className='flex items-center justify-evenly flex-row md:flex-col gap-3'>

            <div className=' bg-red-800 md:h-[145px] md:w-[145px]  rounded-[50%]  p-1 flex items-center justify-center '>
              <img src={Prof} alt="-" className=' md:h-[130px] md:w-[130px] rounded-[50%]' />
            </div>
            <div className=' flex items-center justify-center flex-col text-center gap-[0.9px]'>
              <h1 className='md:text-xl text-base text-blue-900 font-bold'>IZHAR PASHA</h1>
              <p className='md:text-sm text-sm text-slate-600 font-semibold'>Front End Developer</p>
              <p className='text-black md:text-base text-[0.5rem] '>Develop responsive software applications using React JS and Tailwind CSS, matching exact look, feel and UI experience of the design. Motivated to combine the art of design with art of programming </p>
            </div>

          </div>

          <div className='flex items-start justify-center flex-col gap-3 mt-5'>
            <h1 className=' md:text-[16px] text-[12px] font-semibold'>SKILLS :</h1>
            <div className='md:gap-5 gap-2 text-center flex flex-wrap'>
              <p className='bg-slate-200 border-[1px] rounded-lg text-black p-1 md:text-[12px] text-[8px] border-slate-400 '>React JS</p>
              <p className='bg-slate-200 border-[1px] rounded-lg text-black p-1 md:text-[12px] text-[8px] border-slate-400'>Tailwind CSS</p>
              <p className='bg-slate-200 border-[1px] rounded-lg text-black p-1 md:text-[12px] text-[8px] border-slate-400'>JavaScript</p>
              <p className='bg-slate-200 border-[1px] rounded-lg text-black p-1 md:text-[12px] text-[8px] border-slate-400'>Node JS</p>
              <p className='bg-slate-200 border-[1px] rounded-lg text-black p-1 md:text-[12px] text-[8px] border-slate-400'>SASS</p>
              <p className='bg-slate-200 border-[1px] rounded-lg text-black p-1 md:text-[12px] text-[8px] border-slate-400'>Materail UI</p>
              <p className='bg-slate-200 border-[1px] rounded-lg text-black p-1 md:text-[12px] text-[8px] border-slate-400'>BootStrap</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-5 '>
        <div className='md:h-[200px] md:w-[530px] w-[85%] bg-white flex  items-center justify-center rounded-lg py-4 m-2 '>

          <div className='flex items-start justify-center flex-col gap-5 w-[80%]  '>
            <div className='font-semibold md:text-xl text-xs'>BASIC INFORMATION :</div>
            <div className='flex gap-10 '>
              <div className='flex flex-col '>
                <p className='text-slate-500 md:text-base text-xs'>Age:</p>
                <p className='md:text-base text-[0.6rem]'>24 Years</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-slate-500 md:text-base text-xs'>Years of Experience:</p>
                <p className='md:text-base text-[0.6rem]'>2 Years</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-slate-500 md:text-base text-xs'>CTC:</p>
                <p className='md:text-base text-[0.6rem]'>4 LPA</p>
              </div>
            </div>
            <div className='flex gap-5 md:gap-10'>
              <div className='flex flex-col '>
                <p className='text-slate-500 md:text-base text-xs'>Location:</p>
                <p className='md:text-base text-[0.6rem]'>Bengaluru, Karnataka</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-slate-500 md:text-base text-xs'>Availability:</p>
                <p className='md:text-base text-[0.6rem]'>Full Time</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-slate-500 md:text-base text-xs'>Expected CTC:</p>
                <p className='md:text-base text-xs'>6-8 LPA</p>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION, EXP DETAILS */}

        <div className=' bg-white md:h-[380px] md:w-[480px] h-[300px] w-[85%] rounded-xl flex flex-col justify-center items-center   '>

          <div className='flex flex-col items-center justify-center   md:h-[100px] w-[80%]  gap-2  md:gap-4'>
            <div className='flex md:gap-10 gap-4'>
              <p className='md:text-xl text-xs cursor-pointer' onClick={() => setAction("Exp")}>Experience</p>
              <p className='md:text-xl text-xs cursor-pointer' onClick={() => setAction("Edu")}>Education</p>
              <p className='md:text-xl text-xs cursor-pointer ' onClick={() => setAction("Cert")}>Certification</p>
            </div>

            <div className='w-[100%] h-[2px] bg-black'></div>

          </div>

          {/* CONTAINER */}
          <div className='md:h-[350px] h-[240px] w-[90%] flex rounded-2xl p-2 ' >
            {action === "Exp" ? (<div id='Exp' className=' h-auto   w-[100%]  '>
              <div className='flex items-center justify-between gap-5 md:mb-6 mb-4' >
                <div className=' p-2 border-[1px] border-black h-[55px] w-[55px] rounded-[50%]  flex items-center justify-center'>
                  <img src={microsoft} alt="-" className='  h-[55px] w-[100%]   object-contain rounded-lg ' />
                </div>
                <div className='mr-25'>
                  <p className='text-black font-semibold text-xs md:text-base'>Microsoft</p>
                  <p className='text-slate-600 text-[0.6rem] md:text-xs'>Lead - Front End Developer</p>
                  <p className='text-slate-600 text-[0.6rem] md:text-sm'>2021 - Presend</p>
                </div>
                <div>
                  <p className='text-blue-800 font-semibold cursor-pointer text-xs md:text-sm'>View Projects</p>
                </div>
              </div>
              <div className='flex items-center justify-between gap-5 md:mb-6 mb-4' >
                <div className=' p-2 border-[1px] border-black h-[55px] w-[55px] rounded-[50%]  flex items-center justify-center'>
                  <img src={infosys} alt="-" className='   h-[55px] w-[100%]   object-contain rounded-lg ' />
                </div>
                <div className='mr-25'>
                  <p className='text-black font-semibold  text-xs md:text-base'>Infosys</p>
                  <p className='text-slate-600 text-[0.6rem] md:text-xs'>Junior - Front End Developer</p>
                  <p className='text-slate-600 text-[0.6rem] md:text-sm'>2019 - 2021</p>
                </div>
                <div>
                  <p className='text-blue-800 font-semibold cursor-pointer text-xs md:text-sm'>View Projects</p>
                </div>
              </div>
              <div className='flex items-center justify-between gap-5 md:mb-6 mb-4' >
                <div className=' p-2 border-[1px] border-black h-[55px] w-[55px] rounded-[50%]   flex items-center justify-center'>
                  <img src={amazon} alt="-" className='   h-[55px] w-[100%]   object-contain rounded-lg ' />
                </div>
                <div className='mr-25'>
                  <p className='text-black  font-semibold  text-xs md:text-base'>Amazon</p>
                  <p className='text-slate-600 text-[0.6rem] md:text-xs'>Associate - Front End Developer</p>
                  <p className='text-slate-600 text-[0.6rem] md:text-sm'>2016 - 2019</p>
                </div>
                <div>
                  <p className='text-blue-800 font-semibold cursor-pointer text-xs md:text-sm' >View Projects</p>
                </div>
              </div>
            </div>) : null}

            {/* EDUCATION */}

            {action === "Edu" ? (<div id='Edu' className='bg-white md:h-[100%] rounded-lg md:w-[100%] flex items-center justify-center '>
              <div className='flex  items-center justify-center gap-5 bg-slate-200 p-3 rounded-lg hover:bg-slate-300 ease-in-out '>
                <div className=' bg-blue-500 h-[60px] w-[60px]  rounded-[50%]  flex items-center justify-center'>
                  <img src={Edu} alt="-" className=' h-[60px] w-[60px] rounded-[50%] p-[0.09rem]' />
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-2'>
                  <h2 className='text-xs md:text-lg font-bold'>Mechanical Engineering</h2>
                  <h4 className='text-xs md:text-base '>In Diploma</h4>
                  <h2 className='text-xs md:text-lg font-bold'>Vet Bvl Polytechnic</h2>
                </div>
              </div>
            </div>) : null}


            {/* CERTIFICATION */}

            {action === "Cert" ? (<div id='Cert' className='bg-white h-[100%] rounded-lg w-[100%] flex flex-col items-center justify-center md:gap-8 gap-4 '>
              <div className=' w-[90%] md:w-[80%] flex items-center gap-5 p-3 bg-slate-200 rounded-lg hover:bg-slate-300 ease-in-out '>
                <div className=' bg-sky-500 h-[70px] w-[70px]    flex items-center justify-center '>
                  <img src={cert} alt="-" className=' h-[70px] w-[70px] border-2 border-sky-700  object-cover' />
                </div>
                <div className='flex flex-col items-center justify-center gap-2 text-xs'>
                  <h2 className='text-sm md:text-lg font-bold'>Front End Developer</h2>
                  <p>2015 - 2016</p>
                </div>
              </div>

              <div className='w-[90%] md:w-[80%] flex items-center gap-5 p-3 bg-slate-200 rounded-lg hover:bg-slate-300 ease-in-out '>
                <div className=' bg-sky-500 h-[70px] w-[70px]     flex items-center justify-center '>
                  <img src={cert} alt="-" className=' h-[70px] w-[70px] border-2 border-sky-700  object-cover' />
                </div>
                <div className='flex flex-col items-center justify-center gap-2 text-xs'>
                  <h2 className='text-sm md:text-lg font-bold'>Mern Stack</h2>
                  <p>2015 - 2016</p>
                </div>
              </div>
            </div>) : null}

          </div>
        </div>
      </div>

    </div>

  )
}

export default Profile;