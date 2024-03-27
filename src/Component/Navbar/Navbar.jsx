import React from 'react';
import { FcMenu } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import Img from "../../Assets/Profile.png";







const Navbar = () => {

  return (
    <div className='bg-blue-950 h-screen w-full flex flex-col justify-evenly items-center p-4 md:w-[90%] '>
      <ul className=' h-[100%] w-full text-[1.2rem] flex flex-col justify-center items-center  gap-8  md:gap-14 p-2 md:text-3xl'>
        <div className='cursor-pointer  flex items-center justify-center p-2 rounded-xl hover:bg-slate-300'>
          <Link to="/"><FcHome /></Link>
        </div>
        <div className='cursor-pointer  flex items-center justify-center p-2 rounded-xl hover:bg-slate-300'>
          <Link to="/Search"><FcSearch /></Link>
        </div>
        <div className='cursor-pointer  flex items-center justify-center p-2 rounded-xl hover:bg-slate-300'>
          <Link to="/Profile"><FcBusinessman /></Link>
        </div>
        <div className='cursor-pointer  flex items-center justify-center p-2 rounded-xl hover:bg-slate-300'>
          <Link to="/About"><FcInfo /></Link>
        </div>
        <div className='cursor-pointer  flex items-center justify-center p-2 rounded-xl hover:bg-slate-300'>
          <Link to="/Setting"><FcSettings /></Link>
        </div>
      </ul>
      <div className='h-[22%]  flex items-center justify-center p-2'>
        <div className='h-[22px] w-[22px]  flex items-center justify-center  border-2 border-black rounded-full p-[2px] cursor-pointer md:h-[40px] md:w-[40px]'>
          <img className='h-[18px] w-[18px] flex items-center justify-center  object-contain md:h-[38px] md:w-[38px] ' src={Img} alt="" />
        </div>
      </div>

    </div>
  );
}

export default Navbar;
