import React from 'react'

const Setting = () => {
  return (
    <div className='h-screen bg-slate-100 '>
    <div className='flex flex-col justify-center items-center gap-7 text-xs md:text-sm'>
      <ul className='w-[95%] '>
        <h1 className='text-base font-semibold m-2 md:text-2xl'>Notification Setting:</h1>
        <li><b>1.</b> Preferences for job alerts.</li>
        <li><b>2.</b> Frequency of job alert (daily, weekly, etc.)</li>
      </ul>
      <ul className='w-[95%]  '>
      <h1 className='text-base font-semibold m-2  md:text-2xl'>Privacy:</h1>
        <li><b>1.</b> Profile View control</li>
        <li><b>2.</b> Anonymize the profile</li>
      </ul>
      <ul className='w-[95%] '>
      <h1 className='text-base font-semibold m-2  md:text-2xl'> Subscription Settings:</h1>
        <li><b>1.</b> Payment methods and billing information.</li>
        <li><b>2.</b> Subscription plans and renewals.</li>
      </ul>
      <ul className='w-[95%] '>
      <h1 className='text-base font-semibold m-2  md:text-2xl'>Account Setting:</h1>
        <li><b>1.</b> Password change.</li>
        <li><b>2.</b> Two-factor authentication setup.</li>
        <li><b>3.</b> Activity review.</li>
        <li><b>4.</b> Delete my Account.</li>
      </ul>

      <div className='border-2 rounded-2xl border-blue-400 hover:border-blue-700  w-[80%] cursor-pointer mt-8 md:w-[40%]'>
        <h1 className='text-lg font-semibold text-center'>LOGOUT</h1>
      </div>
    </div>
    </div>
  )
}

export default Setting;