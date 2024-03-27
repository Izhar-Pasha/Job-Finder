import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import About from "./Component/About/About";
import Search from "./Component/Job/Job";
import Profile from "./Component/Profile/Profile";
import Home from "./Component/Home/Home";
import Setting from "./Component/Setting/Setting";


function App() {
  return (
    <Router>
      <div className="flex justify-evenly">
        <div className="md:w-[10%] w-[15%] sticky top-0">
          <Navbar />
        </div>
        <div className="h-screen w-[100%] overflow-y-scroll overflow-hidden ">
          <div className=" w-[100%]">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Search" element={<Search />} />
            <Route exact path="/Profile" element={<Profile />} />
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
