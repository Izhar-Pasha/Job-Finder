import React from "react";
import { FcSearch } from "react-icons/fc";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import Photo1 from "../../Assets/photo1.jpg";
import Photo2 from "../../Assets/photo2.jpg";
import Photo3 from "../../Assets/photo3.jpg";
import Photo4 from "../../Assets/photo4.png";
import Photo5 from "../../Assets/photo5.jpg";
import { CiLocationOn } from "react-icons/ci";
import { FcBusiness } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import Amazon from "../../Assets/Amazon.jpeg";
import TCS from "../../Assets/TCS.jpeg";
import Micro from "../../Assets/Microsoft .jpeg";
import Google from "../../Assets/Google.jpeg";
import Skel from "../../Assets/SkelTech.jpeg";
import { MdWorkHistory } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import S1 from "../../Assets/S1.jpeg";
import S2 from "../../Assets/S2.jpeg";
import S3 from "../../Assets/S3.jpeg";
import S4 from "../../Assets/S4.jpeg";




function Home() {
    return (
        <div className="bg-slate-100 w-[100%] flex  items-center justify-center ">
            <div className="w-[98%] flex flex-col items-center justify-center  md:gap-8 ">

                <div className="h-[80px] w-[100%] bg-blue-950 flex items-center justify-center gap-3 md:gap-10 p-3 md:sticky top-0 rounded-lg hover:bg-blue-79  ">
                    <h1 className="  text-lg font-bold font-mono text-white md:me-40 md:text-2xl ">GETHIRED.COM</h1>
                    <input type="search" className=" rounded-2xl p-[08px] w-[20%] cursor-pointer outline-none invisible md:w-[20%] md:p-[10px] md:visible " placeholder="Search" />
                    <p className="text-2xl cursor-pointer"><FcSearch /></p>
                    <p className="text-2xl cursor-pointer"><IoNotificationsCircleOutline className="text-white" /></p>
                </div>

                <div className="h-[100px]  w-[100%] flex items-center justify-center  gap-10">
                    <div className="h-[60px] w-[37%] bg-slate-200 border-2 flex items-center justify-center gap-3 rounded-2xl cursor-pointer p-2">
                        <GrUserWorker className="text-red-500 text-lg" />
                        <p className="text-xs p-1 font-semibold md:text-xl">Based on your profile</p>
                    </div>
                    <div className="h-[60px] w-[37%] bg-slate-200 border-2 flex items-center justify-center gap-3 rounded-2xl cursor-pointer p-2">
                        <MdWorkHistory className="text-red-600 text-lg" />
                        <p className="text-xs  p-1 font-semibold md:text-xl">Recent Applied</p>
                    </div>
                </div>

                <div className="h-[200px] w-[100%] flex flex-col justify-center items-start gap-4  md:gap-10">
                    <div className="flex flex-col p-2 gap-2 ">
                        <div className="md:text-2xl text-base font-semibold">TOP CATEGORIES</div>
                        <div className="h-[4px] w-[35%] bg-blue-600 rounded-xl"></div>
                    </div>
                    <div className=" h-[100px]  w-[100%] gap-1 flex justify-center items-center p-2 overflow-y-scroll  md:gap-7  ">

                        <div className="h-[80px] w-[23%] md:w-[200px]   flex  items-center justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl ">
                            <h3 className="md:text-lg text-[0.55rem] font-semibold">Software Engineer</h3>
                        </div>
                        <div className="h-[80px] w-[23%] md:w-[200px]   flex  items-center justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl">
                            <h3 className="md:text-lg text-[0.55rem] font-semibold">Front End Develop</h3>
                        </div>
                        <div className="h-[80px] w-[23%] md:w-[200px]   flex  items-center justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl">
                            <h3 className="md:text-lg text-[0.55rem] font-semibold">Back End Developer</h3>
                        </div>
                        <div className="h-[80px]  w-[23%] md:w-[200px]   flex  items-center justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl">
                            <h3 className="md:text-lg text-[0.55rem] font-semibold">UX/UI Designer</h3>
                        </div>
                        <div className="h-[80px]  w-[23%] md:w-[200px]  flex  items-center justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl">
                            <h3 className="md:text-lg text-[0.55rem] font-semibold">Devops Engineer</h3>
                        </div>
                    </div>
                </div>
                {/* RECENT POSTED */}
                <div className=" h-[250px] w-[100%] flex flex-col justify-center items-start gap-10">
                    <div className="flex flex-col p-2 gap-2 cursor-pointer ">
                        <div className="md:text-2xl font-semibold">RECENT POSTED</div>
                        <div className="h-[4px] w-[35%] bg-blue-600 rounded-xl "></div>
                    </div>
                    <div className="h-[100px]  w-[100%]  gap-3 flex justify-center items-center p-2 ">

                        <div className="flex  gap-4 overflow-x-scroll overflow-hidden w-[80%] md:overflow-hidden md:w-[80%]">

                            <div className="h-[130px] w-[200px]  flex flex-col items-start justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl p-7 gap-2 md:p-2 md:flex md:items-center ">
                                <div className="flex gap-3 items-center">
                                    <img src={Photo1} alt="" className="h-[40px] w-[40px] border-2 border-black" />
                                    <h3 className="text-[0.7rem] md:text-[0.8rem] font-semibold">Angular Deveper</h3>
                                </div>
                                <div>
                                    <span className="flex gap-4 items-center md:text-base text-xs"><CiLocationOn /> <p>Bengaluru</p></span>
                                    <span className="flex gap-4 items-center md:text-base text-xs"><FcBusiness /> <p> Fresher</p></span>
                                </div>
                            </div>

                            <div className="h-[130px] w-[200px]  flex flex-col items-start justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl p-7 md:p-2 gap-2 ">
                                <div className="flex gap-3 items-center">
                                    <img src={Photo2} alt="" className="h-[40px] w-[40px] border-2 border-black" />
                                    <h3 className="text-[0.7rem] md:text-[0.8rem] font-semibold">React Deveper</h3>
                                </div>
                                <div>
                                    <span className="flex gap-4 items-center md:text-base text-xs"><CiLocationOn /> <p>Bengaluru</p></span>
                                    <span className="flex gap-4 items-center md:text-base text-xs"><FcBusiness /> <p>1 - 2 Yrs</p></span>
                                </div>
                            </div>

                            <div className="h-[130px] w-[200px]  flex flex-col items-start justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl p-7 md:p-2 gap-2 ">
                                <div className="flex gap-3 items-center">
                                    <img src={Photo3} alt="" className="h-[40px] w-[40px] border-2 border-black" />
                                    <h3 className="text-[0.7rem] md:text-[0.8rem] font-semibold">Backend developer</h3>
                                </div>
                                <div>
                                    <span className="flex gap-4 items-center md:text-base text-xs"><CiLocationOn /> <p>Bengaluru</p></span>
                                    <span className="flex gap-4 items-center md:text-base text-xs"><FcBusiness /> <p>2 - 4 Yrs</p></span>
                                </div>
                            </div>

                            <div className="h-[130px] w-[200px]  flex flex-col items-start justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl p-7 md:p-2 gap-2 ">
                                <div className="flex gap-3 items-center">
                                    <img src={Photo4} alt="" className="h-[40px] w-[40px] border-2 border-black" />
                                    <h3 className="text-[0.7rem] md:text-[0.8rem] font-semibold">Web Designer</h3>
                                </div>
                                <div>
                                    <span className="flex gap-4 items-center"><CiLocationOn /> <p>Bengaluru</p></span>
                                    <span className="flex gap-4 items-center"><FcBusiness /> <p>1 - 3 Yrs</p></span>
                                </div>
                            </div>

                            <div className="h-[130px] w-[200px]  flex flex-col items-start justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl p-7 md:p-2 gap-2 ">
                                <div className="flex gap-3 items-center">
                                    <img src={Photo5} alt="" className="h-[40px] w-[40px] border-2 border-black" />
                                    <h3 className="text-[0.7rem] md:text-[0.8rem] font-semibold">Software Engineer</h3>
                                </div>
                                <div>
                                    <span className="flex gap-4 items-center md:text-base text-xs"><CiLocationOn /> <p>Bengaluru</p></span>
                                    <span className="flex gap-4 items-center md:text-base text-xs"><FcBusiness /> <p>4 - 5 Yrs</p></span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[10%]  flex items-center justify-center ">
                            <p className="text-blue-500 text-xs cursor-pointer  font-semibold md:text-base hover:text-blue-800  hover:font-semibold">View More...</p>
                        </div>
                    </div>

                </div>

                {/* TOP COMPANIES */}
                <div className="h-[200px] w-[100%] flex flex-col justify-center items-start gap-3 m-5">
                    <div className="flex flex-col p-2 gap-2 ">
                        <div className="md:text-2xl text-base font-semibold">TOP COMPANIES</div>
                        <div className="h-[4px] w-[35%] bg-blue-600 rounded-xl"></div>
                    </div>
                    <div className="flex justify-evenly items-center w-full ">
                        <div className="flex  p-2   gap-4 overflow-x-scroll overflow-hidden w-[80%] md:overflow-hidden md:w-[80%]">

                            <div className="h-[140px] w-[180px]  flex flex-col items-center justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl gap-4">
                                <img src={Amazon} alt="" className="h-[40px] w-[40px] border-2 border-red-300" />
                                <h3>Amazon</h3>
                                <div className="flex items-center gap-2">
                                    <span><FaStar className="text-yellow-500" /></span>
                                    <p>4.1</p> |
                                    <p className="bg-yellow-300 rounded-lg text-orange-700 font-semibold md:text-[0.6rem] text-[0.4rem] p-1">Corporate</p>
                                </div>
                            </div>

                            <div className="h-[140px] w-[180px] p-2 flex flex-col items-center justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl gap-4">
                                <img src={TCS} alt="" className="h-[40px] w-[40px] border-2 border-blue-300" />
                                <h3>TCS</h3>
                                <div className="flex items-center gap-2">
                                    <span><FaStar className="text-yellow-500" /></span>
                                    <p>3.8</p> |
                                    <p className="bg-yellow-300 rounded-lg text-orange-700 font-semibold md:text-[0.6rem] text-[0.4rem] p-1">Corporate</p>
                                </div>
                            </div>

                            <div className="h-[140px] w-[180px] p-2 flex flex-col items-center justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl gap-4">
                                <img src={Google} alt="" className="h-[40px] w-[40px] border-2 border-orange-300" />
                                <h3>Google</h3>
                                <div className="flex items-center gap-2">
                                    <span><FaStar className="text-yellow-500" /></span>
                                    <p>4.4</p> |
                                    <p className="bg-yellow-300 rounded-lg text-orange-700 font-semibold md:text-[0.6rem] text-[0.4rem] p-1">Corporate</p>
                                </div>
                            </div>

                            <div className="h-[140px] w-[180px] p-2 flex flex-col items-center justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl gap-4">
                                <img src={Micro} alt="" className="h-[40px] w-[40px] border-2 border-sky-300 " />
                                <h3>MicroSoft</h3>
                                <div className="flex items-center gap-2">
                                    <span><FaStar className="text-yellow-500" /></span>
                                    <p>4.3</p> |
                                    <p className="bg-yellow-300 rounded-lg text-orange-700 font-semibold md:text-[0.6rem] text-[0.4rem] p-1">Corporate</p>
                                </div>
                            </div>

                            <div className="h-[140px] w-[180px] p-2 flex flex-col items-center justify-center bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl gap-4">
                                <img src={Skel} alt="" className="h-[40px] w-[40px] border-2 border-sky-300 object-cover" />
                                <h3>SkelTech</h3>
                                <div className="flex items-center gap-2">
                                    <span><FaStar className="text-yellow-500" /></span>
                                    <p>3.9</p> |
                                    <p className="bg-yellow-300 rounded-lg text-orange-700 font-semibold md:text-[0.6rem] text-[0.4rem] p-1">Corporate</p>
                                </div>
                            </div>


                        </div>
                        <div className="w-[10%]  flex items-center justify-center ">
                            <p className="text-blue-500 text-xs cursor-pointer  font-semibold md:text-base hover:text-blue-800  hover:font-semibold">View More...</p>
                        </div>
                    </div>
                </div>
                {/* SUCCESS STORIES */}
                <div className=" h-[300px] w-[100%] flex flex-col justify-center items-start gap-2 md:gap-10  ">
                    <div className="flex flex-col p-2 gap-2 ">
                        <div className="md:text-2xl text-base font-semibold">SIMILAR PROFILES</div>
                        <div className="h-[4px] w-[35%] bg-blue-600 rounded-xl"></div>
                    </div>
                    <div className="flex justify-evenly items-center w-full ">
                        <div className="flex  p-2  gap-4 overflow-x-scroll  w-[100%] md:overflow-hidden md:w-[80%] md:gap-20">

                            <div className="ml-2 md:h-[160px] md:w-[15%]  flex flex-col items-center justify-evenly bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl  md:p-2  ">
                                <div className=" h-[100px] w-[80px]   flex flex-col items-center justify-evenly gap-2 md:p-2">
                                    <img src={S1} alt="" className="md:h-[60px] md:w-[60px] h-[40px] w-[40px] border-2 rounded-[50%] border-black " />
                                    <h3 className="w-full text-[0.5rem] md:text-[0.8rem] font-bold">Andrew Alfred</h3>
                                    <span className="w-full  flex items-center justify-center md:text-xs  text-[0.5rem] text-slate-600"><p>FrontEnd Developer</p></span>
                                </div>
                            </div>

                            <div className="md:h-[160px] md:w-[15%]   flex flex-col items-center justify-evenly bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl  md:p-2  ">
                                <div className=" h-[100px] w-[80px]   flex flex-col items-center justify-evenly gap-2 md:p-2">
                                    <img src={S2} alt="" className="md:h-[60px] md:w-[60px] h-[40px] w-[40px] border-2 rounded-[50%] border-black " />
                                    <h3 className="w-full text-[0.5rem] md:text-[0.8rem] font-bold">David</h3>
                                    <span className="w-full  flex items-center justify-center md:text-xs  text-[0.5rem] text-slate-600"><p>Backend Engineer</p></span>
                                </div>
                            </div>

                            <div className="md:h-[160px] md:w-[15%]  flex flex-col items-center justify-evenly bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl  md:p-2  ">
                                <div className=" h-[100px] w-[80px]   flex flex-col items-center justify-evenly gap-2 md:p-2">
                                    <img src={S3} alt="" className="md:h-[60px] md:w-[60px] h-[40px] w-[40px]  border-2 rounded-[50%] border-black mb-2" />
                                    <h3 className="w-full text-[0.5rem] md:text-[0.8rem] font-bold">Emilly Fernandis</h3>
                                    <span className="w-full  flex items-center justify-center md:text-xs  text-[0.5rem] text-slate-600"><p>UI UX Deisgn</p></span>
                                </div>
                            </div>

                            <div className="md:h-[160px] md:w-[15%]  flex flex-col items-center justify-evenly bg-slate-200 hover:bg-slate-300 border-2 text-center rounded-xl  md:p-2  ">
                                <div className=" h-[100px] w-[80px]   flex flex-col items-center justify-evenly gap-2 md:p-2">
                                    <img src={S4} alt="" className="md:h-[60px] md:w-[60px] h-[40px] w-[40px] border-2 rounded-[50%] border-black md:mb-2" />
                                    <h3 className="w-full text-[0.5rem] md:text-[0.8rem] font-bold">Rahzi Pasha</h3>
                                    <span className="w-full  flex items-center justify-center md:text-xs  text-[0.5rem] text-slate-600"><p>Software Engineer</p></span>
                                </div>
                            </div>


                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
}

export default Home;
