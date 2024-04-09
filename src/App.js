import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import About from "./Component/About/About";
import Search from "./Component/Job/Job";
import Profile from "./Component/Profile/Profile";
import Home from "./Component/Home/Home";
import Setting from "./Component/Setting/Setting";
import Reactjs from "./Component/Home/Apply/React";
import Apply from "./Component/Home/Apply/Apply";
import Angular from "./Component/Home/Apply/Angular";
import Software from "./Component/Home/Apply/Software";


function App() {

  return (
    <Router basename="/Job-Finder">
      <div className="h-screen flex flex-col-reverse justify-evenly md:flex md:flex-row">
        <div className="md:w-[10%]  w-[100%] flex items-center justify-center sticky top-0">
          <Navbar />
        </div>
        <div className="w-[100%] overflow-y-scroll overflow-hidden ">
          <div className=" w-[100%]">
            <Routes>
              
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Search" element={<Search />} />
              <Route exact path="/Profile" element={<Profile />} />
              <Route exact path="/Reactjs" element={<Reactjs />} />
              <Route exact path="/Angular" element={<Angular />} />
              <Route exact path="/Software" element={<Software />} />
              <Route exact path="/Apply" element={<Apply />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Setting" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
