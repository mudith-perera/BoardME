import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from './Components/NavBar.js';
import Footer from './Components/Footer.js';

import Home from './pages/Home.js';
import SignUp from './pages/SignUp.js';
import Login from './pages/Login.js';
import  FnQ  from './pages/fnq.js';
import BPlace1 from './Components/Home/BoardingPlaces/BPlace1.js';
import UC from './pages/UnderConstruction.js';

import BHOHome from "./pages/BoardingHouseOwner/BHOHome.js";
import AddBoadingHouse from './pages/BoardingHouse/AddBoardingHouse.js'
import ViewBHO from "./pages/BoardingHouseOwner/ViewBHO.js";

import StudentHome from "./pages/Student/StudentHome.js";

import TeacherLecturerHome from "./pages/TeacherLecturer/TeacherLecturerHome.js";

import RegularHome from "./pages/Regular/RegularHome.js";

import HomeMainElements from './Components/Home/HomeMainElements.js';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/sign-up" element={<SignUp/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/fnq" element={<FnQ/>}/>
        <Route exact path="/uc" element={<UC/>}/>
        <Route exact path="/bplace1" element={<BPlace1/>}/>

        <Route exact path="/bho-home" element={<BHOHome/>}/>
        <Route exact path="bho-home/add-boading-house" element={<AddBoadingHouse/>}/>
        <Route exact path="bho-home/view-personal-details" element={<ViewBHO/>}/>

        <Route exact path="/student-home" element={<StudentHome/>}/>

        <Route exact path="/teacher-lecturer-home" element={<TeacherLecturerHome/>}/>

        <Route exact path="/regular-home" element={<RegularHome/>}/>

        <Route exact path="/element/:id" element={<HomeMainElements/>}/>
      </Routes>
      <Footer/>
    </Router>


  );
}

export default App;
