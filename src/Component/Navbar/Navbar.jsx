import React from 'react';
import { FcSettings } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import Img from "../../Assets/Profile.png";






const Navbar = () => {

  return (
    <div className='bg-blue-950 h-[95%] w-[96%] flex flex-row md:flex-col justify-evenly items-center p-4 rounded-[20px] md:w-[90%] '>
      <ul className=' h-[100%] w-full text-[1.6rem] flex md:flex-col justify-start items-center  gap-6   md:gap-12 p-2 md:text-[1.6em]'>
      <Link to="/"><div className='cursor-pointer  flex items-center justify-center p-2 rounded-xl hover:bg-slate-300'>
         <FcHome />
        </div></Link>

        <Link to="/Search"> <div className='cursor-pointer  flex items-center justify-center p-2 rounded-xl hover:bg-slate-300'>
          <FcSearch />
        </div></Link>

        <Link to="/Profile"><div className='cursor-pointer  flex items-center justify-center p-2 rounded-xl hover:bg-slate-300'>
         <FcBusinessman />
        </div></Link>

        <Link to="/About"> <div className='cursor-pointer  flex items-center justify-center p-2 rounded-xl hover:bg-slate-300'>
          <FcInfo />
        </div></Link>

        <Link to="/Setting"> <div className='cursor-pointer  flex items-center justify-center p-2 rounded-xl hover:bg-slate-300'>
         <FcSettings />
        </div></Link>

      </ul>
      <div className='h-[22%] flex  items-center justify-center p-2 '>
        <div className='h-[35px] w-[35px]  flex items-center justify-center  border-2 border-black rounded-full p-[2px] cursor-pointer md:h-[40px] md:w-[40px]'>
          <img className='h-[35px] w-[35px] flex items-center justify-center  object-contain md:h-[38px] md:w-[38px] ' src={Img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
