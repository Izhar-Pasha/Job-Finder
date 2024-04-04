import React from 'react';
import { FcLike } from "react-icons/fc";

const Setting = () => {
  return (
    <div className='h-screen bg-slate-100  '>
      <div className='flex flex-col justify-center items-center gap-10 md:gap-6 text-lg md:text-sm'>
        <ul className='w-[95%] '>
          <h1 className='text-2xl font-semibold m-2 md:text-2xl'>Notification Setting:</h1>
          <li><b>1.</b> Preferences for job alerts.</li>
          <li><b>2.</b> Frequency of job alert (daily, weekly, etc.)</li>
        </ul>
        <ul className='w-[95%]  '>
          <h1 className='text-2xl font-semibold m-2  md:text-2xl'>Privacy:</h1>
          <li><b>1.</b> Profile View control</li>
          <li><b>2.</b> Anonymize the profile</li>
        </ul>
        <ul className='w-[95%] '>
          <h1 className='text-2xl font-semibold m-2  md:text-2xl'> Subscription Settings:</h1>
          <li><b>1.</b> Payment methods and billing information.</li>
          <li><b>2.</b> Subscription plans and renewals.</li>
        </ul>
        <ul className='w-[95%] '>
          <h1 className='text-2xl font-semibold m-2  md:text-2xl'>Account Setting:</h1>
          <li><b>1.</b> Password change.</li>
          <li><b>2.</b> Two-factor authentication setup.</li>
          <li><b>3.</b> Activity review.</li>
          <li><b>4.</b> Delete my Account.</li>
        </ul>

        <div className='border-2 rounded-2xl border-blue-400 hover:border-blue-700  w-[60%] cursor-pointer mt-8 md:w-[30%]'>
          <h1 className='text-xl font-semibold text-center'>LOGOUT</h1>
        </div>

        <div>
        <p className='text-[1.2rem] font-semibold flex flex-col items-center justify-center  md:text-[.9rem] text-black w-full'>&copy; Izhar Pasha </p>
        <p className='flex items-center gap-1 text-base justify-center md:text-xs'>Made With <FcLike/> </p>
      </div>
      </div>
      
    </div>
  )
}

export default Setting;