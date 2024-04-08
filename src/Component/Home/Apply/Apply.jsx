import React from 'react';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';

const Apply = () => {

    return (
        <div className='h-screen flex justify-evenly flex-col p-2'>
            <Link to="/Reactjs">
                <div className=' h-10 flex gap-2 items-center text-base font-semibold p-2 cursor-pointer'>
                    <p><MdOutlineKeyboardBackspace /></p><p>BACK</p>
                </div></Link>
            <div class="flex flex-col items-center justify-center h-screen dark p-3">
                <div class="w-full max-w-md bg-gray-500 rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-bold text-gray-100 mb-4">Job Application Form</h2>

                    <form class="flex flex-col">
                        <input placeholder="Full Name" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                        <input placeholder="Email" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
                        <input placeholder="Phone Number" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                        <input placeholder="LinkedIn Profile URL" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                        <textarea placeholder="Cover Letter" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" name="cover_letter"></textarea>
                        <input placeholder="Resume" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="file" />

                        <button class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit" onClick={() => { alert('Sucessfully Applied') }}>Apply</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Apply;