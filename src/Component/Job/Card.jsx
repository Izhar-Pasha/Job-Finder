import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FcBusiness } from "react-icons/fc";
import { RiHomeOfficeFill } from "react-icons/ri";
import Photo1 from "../../Assets/photo1.jpg";
import { Link } from 'react-router-dom';


const card = () => {


  return (
    <div>

      {/* JOBS */}
      <div className='h-auto w-[100%] flex flex-wrap items-center justify-center gap-[10px] md:gap-12'>


        <Link to="/Reactjs">
          <div className="h-[110px] w-[150px] md:h-[150px] md:w-[250px]  flex flex-col items-start justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl p-[2px] gap-2 md:p-2 md:flex md:items-center ">
            <div className="flex gap-3 items-center">
              <img src={Photo1} alt="" className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]  border-2 border-black" />
              <h3 className="text-[0.7rem] md:text-[1.2rem] font-semibold">React Developer</h3>
            </div>
            <div className='flex flex-wrap justify-start gap-[5px] items-start  w-full'>
              <span className="flex gap-4 items-center md:text-lg text-[0.6rem] md:mx-1"><CiLocationOn /> <p>Bengaluru</p></span>
              <span className="flex gap-4 items-center md:text-lg text-[0.6rem]"><FcBusiness /> <p> 1 - 2 yrs</p></span>
              <span className="flex gap-4 items-center md:text-lg text-[0.6rem] "><RiHomeOfficeFill /> <p> XYZ Company</p></span>
            </div>
          </div>
        </Link>

        <Link to="/Angular">
           <div className="h-[110px] w-[150px] md:h-[150px] md:w-[250px]  flex flex-col items-start justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl p-[2px] gap-2 md:p-2 md:flex md:items-center ">
          <div className="flex gap-3 items-center">
            <img src={Photo1} alt="" className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]  border-2 border-black" />
            <h3 className="text-[0.7rem] md:text-[1.1rem] font-semibold">Angular Developer</h3>
          </div>
          <div className='flex flex-wrap justify-start gap-[5px] items-start  w-full'>
            <span className="flex gap-4 items-center md:text-lg text-[0.6rem] md:mx-1"><CiLocationOn /> <p>Bengaluru</p></span>
            <span className="flex gap-4 items-center md:text-lg text-[0.6rem]"><FcBusiness /> <p> 2 -3 yrs</p></span>
            <span className="flex gap-4 items-center md:text-lg text-[0.6rem] "><RiHomeOfficeFill /> <p> XYZ Company</p></span>
          </div>
        </div>
      </Link>

      <Link to="/Software">
      <div className="h-[110px] w-[150px] md:h-[150px] md:w-[250px]  flex flex-col items-start justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl p-[2px] gap-2 md:p-2 md:flex md:items-center ">
        <div className="flex gap-3 items-center">
          <img src={Photo1} alt="" className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]  border-2 border-black" />
          <h3 className="text-[0.7rem] md:text-[1.1rem] font-semibold">Software Developer</h3>
        </div>
        <div className='flex flex-wrap justify-start gap-[5px] items-start  w-full'>
          <span className="flex gap-4 items-center md:text-lg text-[0.6rem] md:mx-1"><CiLocationOn /> <p>Bengaluru</p></span>
          <span className="flex gap-4 items-center md:text-lg text-[0.6rem]"><FcBusiness /> <p>Fresher</p></span>
          <span className="flex gap-4 items-center md:text-lg text-[0.6rem] "><RiHomeOfficeFill /> <p> XYZ Company</p></span>
        </div>
      </div>
      </Link>


      <div className="h-[110px] w-[150px] md:h-[150px] md:w-[250px]  flex flex-col items-start justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl p-[2px] gap-2 md:p-2 md:flex md:items-center ">
        <div className="flex gap-3 items-center">
          <img src={Photo1} alt="" className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]  border-2 border-black" />
          <h3 className="text-[0.7rem] md:text-[1.2rem] font-semibold">Angular Deveper</h3>
        </div>
        <div className='flex flex-wrap justify-start gap-[5px] items-start  w-full'>
          <span className="flex gap-4 items-center md:text-lg text-[0.6rem] md:mx-1"><CiLocationOn /> <p>Bengaluru</p></span>
          <span className="flex gap-4 items-center md:text-lg text-[0.6rem]"><FcBusiness /> <p>  4 - 5yrs</p></span>
          <span className="flex gap-4 items-center md:text-lg text-[0.6rem] "><RiHomeOfficeFill /> <p> XYZ Company</p></span>
        </div>
      </div>

    </div>



    </div >
  )
}

export default card;