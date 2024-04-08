import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FcBusiness } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaAngular } from "react-icons/fa6";


const Angular = () => {
    return (
        <div className='p-2 bg-slate-100 flex flex-col gap-4'>
            <Link to="/Search">
            <div className=' h-10 flex gap-2 items-center text-base font-semibold p-2 cursor-pointer'>
        <p><MdOutlineKeyboardBackspace /></p><p>BACK</p>
            </div></Link>

            <div className=' flex justify-evenly items-center '>
                <div>
                    <p className='text-8xl bg-red-700 rounded-lg '><FaAngular /></p>
                </div>
                <div className='w-[70%]'>
                    <h1 className='text-xl m-1 font-bold'>Angular Developer</h1>
                    <p className='text-base flex gap-2 items-center font-semibold text-slate-600'><FcBusiness /> 2 - 3 years</p>
                    <p className='text-base flex gap-2 items-center font-semibold text-slate-600'><CiLocationOn /> Bengaluru</p>
                </div>
            </div>

            <div className='text-xs md:text-[0.9rem] ms-6'>
                <h1 className='text-xl m-1 font-bold'> Job Description:</h1>

                <p className='w-[100%]'>
                We are seeking a skilled Angular Developer with 2-3 years of experience to join our dynamic team. As an Angular Developer, you will be responsible for developing robust, scalable, and high-quality web applications using Angular framework. Your primary focus will be to implement innovative solutions and enhancements to meet our clients' requirements. You will collaborate closely with cross-functional teams including UI/UX designers, backend developers, and project managers to deliver exceptional user experiences.
                </p>

                <h1 className='text-xl m-1 font-bold'>Responsibilities:</h1>
                <ol className='list-decimal m-2'>
                    <li>
                    Develop and maintain responsive web applications using Angular framework.
                    </li>
                    <li>
                    Collaborate with UI/UX designers to translate design wireframes into interactive web applications.
                    </li>
                    <li>
                    Implement clean, efficient, and maintainable code following best practices and coding standards.
                    </li>
                    <li>
                    Ensure the technical feasibility of UI/UX designs and optimize application performance.
                    </li>
                    <li>
                    Work closely with backend developers to integrate front-end components with server-side logic.
                    </li>
                    <li>
                    Stay up-to-date with the latest trends, technologies, and best practices in Angular development.
                    </li>
                    <li>
                    Communicate effectively with team members and stakeholders to clarify requirements and project status.
                    </li>
                    <li>
                    Continuously seek opportunities for process improvement and contribute to the enhancement of development practices within the team.
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
                    2-3 years of hands-on experience in Angular development.
                    </li>
                    <li>
                    Proficiency in HTML5, CSS3, JavaScript, TypeScript, and related web technologies.
                    </li>
                    <li>
                    Strong understanding of Angular concepts such as components, services, directives, routing, and state management.
                    </li>
                    <li>
                    Experience with RESTful APIs integration and asynchronous programming.
                                  </li>
                    <li>
                    Familiarity with version control systems such as Git.
                    </li>
                    <li>
                    Solid understanding of responsive web design principles and cross-browser compatibility.
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

export default Angular;