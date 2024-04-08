import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FcBusiness } from "react-icons/fc";
import { TbBrandReactNative } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { SiPaloaltosoftware } from "react-icons/si";

const Software = () => {
    return (
        <div className='p-2 bg-slate-100 flex flex-col gap-4'>
          <Link to="/Search">
            <div className=' h-10 flex gap-2 items-center text-base font-semibold p-2 cursor-pointer'>
        <p><MdOutlineKeyboardBackspace /></p><p>BACK</p>
            </div></Link>

            <div className=' flex justify-evenly items-center '>
                <div>
                    <p className='text-8xl bg-red-700 rounded-lg p-2'><SiPaloaltosoftware /></p>
                </div>
                <div className='w-[70%]'>
                    <h1 className='text-xl m-1 font-bold'>Software Developer (Fresher)</h1>
                    <p className='text-base flex gap-2 items-center font-semibold text-slate-600'><FcBusiness />Fresher</p>
                    <p className='text-base flex gap-2 items-center font-semibold text-slate-600'><CiLocationOn /> Bengaluru</p>
                </div>
            </div>

            <div className='text-xs md:text-[0.9rem] ms-6'>
                <h1 className='text-xl m-1 font-bold'> Job Description:</h1>

                <p className='w-[100%]'>
                    As a Software Developer at our company, you will be part of a dynamic team responsible for designing, developing, testing, and maintaining software applications. This role is ideal for fresh graduates who are passionate about coding and eager to embark on a rewarding career in software development.
                </p>

                <h1 className='text-xl m-1 font-bold'>Responsibilities:</h1>
                <ol className='list-decimal m-2'>
                    <li>
                    Coding and Development: Write clean, efficient, and maintainable code using programming languages such as Java, Python, C++, or others as required by the project.
                    </li>
                    <li>
                    Software Design: Collaborate with senior developers and project managers to understand project requirements and translate them into technical specifications and software designs.
                    </li>
                    <li>
                    Testing and Debugging: Conduct unit testing and debugging to ensure software meets quality standards and functional requirements
                    </li>
                    <li>
                    Documentation: Document code consistently throughout the development process and create technical documentation for reference and reporting purposes.
                    </li>
                    <li>
                    Continuous Learning: Stay updated on emerging technologies, industry trends, and best practices in software development. Willingness to learn and adapt to new technologies is crucial.
                    </li>
                    <li>
                    Team Collaboration: Work closely with cross-functional teams including designers, testers, and product managers to deliver high-quality software solutions within project timelines.
                    </li>
                    <li>
                    Problem Solving: Analyze and troubleshoot technical issues, proposing effective solutions to ensure smooth software functionality.
                    </li>
                    <li>
                        Code Review: Participate in code reviews to ensure code quality, maintainability, and adherence to coding standards.
                    </li>
                </ol>

                <h1 className='text-xl m-1 font-bold'>
                Qualifications and Skills:
                </h1>
                <ul className='list-decimal m-2'>
                    <li>
                    Bachelor's Degree in Computer Science, Software Engineering, or a related field.
                    </li>
                    <li>
                    Programming Skills: Proficiency in at least one programming language such as Java, Python, C++, or others.
                    </li>
                    <li>
                    Problem-Solving Abilities: Strong analytical and problem-solving skills with a keen attention to detail.
                    </li>
                    <li>
                    Team Player: Ability to work collaboratively in a team environment and communicate effectively.
                    </li>
                    <li>
                    Learning Agility: Eagerness to learn and adapt to new technologies and frameworks.
                    </li>
                    <li>
                    Time Management: Ability to manage multiple tasks and prioritize work effectively to meet deadlines.
                    </li>
                    <li>
                    Good Communication: Excellent verbal and written communication skills in English.
                    </li>
                    <li>
                    Internships/Projects: Any relevant internships, projects, or extracurricular activities demonstrating software development skills would be advantageous.
                    </li>
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

export default Software;