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

    {/* LOGOUT BUTTON  */}
        <button
          class="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
        onClick={()=>{alert("You Can't Logout Admin!")}}>
          <div
            class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
          >
            <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              ></path>
            </svg>
          </div>
          <div
            class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            Logout
          </div>
        </button>


        <div>
          <p className='text-[1.2rem] font-semibold flex  items-center justify-center gap-2  md:text-[.9rem] text-black w-full'>&copy; Izhar Pasha Made With <FcLike /> </p>
        </div>
      </div>

    </div>
  )
}

export default Setting;