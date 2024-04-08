import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FcBusiness } from "react-icons/fc";
import { TbBrandReactNative } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from "react-icons/md";


const react = () => {
    return (
        <div className='p-2 bg-slate-100 flex flex-col gap-4'>
            <Link to="/Search">
            <div className=' h-10 flex gap-2 items-center text-base font-semibold p-2 cursor-pointer'>
        <p><MdOutlineKeyboardBackspace /></p><p>BACK</p>
            </div></Link>

            <div className=' flex justify-evenly items-center '>
                <div>
                    <p className='text-8xl bg-red-700 rounded-lg '><TbBrandReactNative /></p>
                </div>
                <div className='w-[70%]'>
                    <h1 className='text-xl m-1 font-bold'>React Developer</h1>
                    <p className='text-base flex gap-2 items-center font-semibold text-slate-600'><FcBusiness /> 1 - 2 years</p>
                    <p className='text-base flex gap-2 items-center font-semibold text-slate-600'><CiLocationOn /> Bengaluru</p>
                </div>
            </div>

            <div className='text-xs md:text-[0.9rem] ms-6'>
                <h1 className='text-xl m-1 font-bold'> Job Description:</h1>

                <p className='w-[100%]'>
                    We are seeking a talented and enthusiastic React.js Developer with 1-2 years of hands-on experience to join our dynamic team. As a React.js Developer, you will be responsible for developing user interfaces for web applications using React.js and its ecosystem. You will work closely with our engineering team to implement innovative solutions and enhance the overall user experience of our products.
                </p>

                <h1 className='text-xl m-1 font-bold'>Responsibilities:</h1>
                <ol className='list-decimal m-2'>
                    <li>
                        Develop new user-facing features using React.js.
                    </li>
                    <li>
                        Build reusable components and front-end libraries for future use.
                    </li>
                    <li>
                        Optimize components for maximum performance across a vast array of web-capable devices and browsers.
                    </li>
                    <li>
                        Collaborate with cross-functional teams to define, design, and ship new features.
                    </li>
                    <li>
                        Translate designs and wireframes into high-quality code.
                    </li>
                    <li>
                        Ensure the technical feasibility of UI/UX designs.
                    </li>
                    <li>
                        Troubleshoot and debug issues that arise during development and in production.
                    </li>
                    <li>
                        Stay updated with the latest trends and best practices in front-end development.
                    </li>
                </ol>

                <h1 className='text-xl m-1 font-bold'>
                    Requirements:
                </h1>
                <ul className='list-decimal m-2'>
                    <li>
                        Bachelor's degree in Computer Science, Engineering, or a related field.
                    </li>
                    <li>
                        1-2 years of experience in building responsive web applications using React.js.
                    </li>
                    <li>
                        Strong proficiency in JavaScript, including DOM manipulation and JavaScript object model.
                    </li>
                    <li>
                        Experience with popular React.js workflows (such as Redux, Flux, or Context API).
                    </li>
                    <li>
                        Knowledge of modern authorization mechanisms, such as JSON Web Token.
                    </li>
                    <li>
                        Understanding of front-end build tools, such as Webpack, Babel, and NPM.
                    </li>
                    <li>
                        Excellent problem-solving skills and attention to detail.
                    </li>
                </ul>
                <h1 className='text-xl m-1 font-bold'>
                    Nice to Have:
                </h1>

                <ul className='list-decimal m-2'>
                    <li>Experience with server-side technologies like Node.js.</li>
                    <li>Knowledge of CSS pre-processing platforms, such as SASS or LESS.</li>
                    <li>Familiarity with Agile/Scrum methodologies.</li>
                    <li> Contributions to open-source projects or personal projects showcasing your skills.</li>
                    <li> Experience with testing frameworks such as Jest, Enzyme, or Cypress.</li>
                </ul>
                <h1 className='text-xl m-1 font-bold'>Benefits:</h1>
                <ul className='list-decimal m-2'>
                    <li>Competitive salary package.</li>
                    <li>Flexible working hours and remote work options.</li>
                    <li>Health insurance and other benefits.</li>
                    <li>Opportunities for professional growth and development.</li>
                    <li>Collaborative and innovative work environment.</li>
                    <li>Regular team outings and social events.</li>
                </ul>
            </div>

            <div className='flex justify-evenly sticky top-0 mt-5 mb-5'>
                <button
                    class="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Similar Jobs
                </button>
                <button
                    class="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add to List
                </button>

                <Link to="/Apply"><button
                    class="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Apply
                </button></Link>


            </div>
        </div>
    )
}

export default react