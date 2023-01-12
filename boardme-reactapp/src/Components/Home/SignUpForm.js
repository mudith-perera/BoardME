import React,{useState,useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Aos from "aos";
import "aos/dist/aos.css";

const SignUpForm = () => {
  useEffect(() => {
    Aos.init({ duration: 1000});
    getLocation();
  });

  const [one, set1] = useState("");
  const [two, set2] = useState("");
  const [location, setLocation] = useState("");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    set1(position.coords.latitude);
    set2(position.coords.longitude);
    setLocation( "Dialog Axiata PLC  lat : " + two + " , log : " + one); 
    //console.log(location);
    
  }

  // const reverseGeo = async (e) => {
  //   setLocation(await axios.post('https://maps.googleapis.com/maps/api/geocode/json?latlng='+one+','+two));
  // }
  
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [nic, setnic] = useState("");
  const [schoolUniversity, setschoolUniversity] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [guadianName, setguadianName] = useState("");
  const [guadianPhone, setguadianPhone] = useState("");
  const [password, setpassword] = useState("");
  const [userType, setuserType] = useState("student");

  const notifSuccess = () => toast.success(firstname +" added Successfully");
  const notifError = () => toast.error("Error While adding the User 😥");
  const navigate = useNavigate();

  const saveStudent = async (e) => {
    e.preventDefault();
    const formData = { firstname, lastname,nic,schoolUniversity,address,phone,email,guadianName,guadianPhone,password,userType };
    
    
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/add-users',formData);
      
      if (res.data.status === 200) 
        {
          console.log(res.data.message);
          notifSuccess();//Load toastify Alert

          setTimeout(() => {
            navigate("/login");
          }, 3000);
          
        }
    } catch (err) {
        notifError();
    }
  }
  
  return(
  <div data-aos="zoom-in-up" className="container py-5">
            <ToastContainer/>
            <div className="card">
              <div className="card-header">
                <h4>
                  Enter Your Data  
                </h4>
              </div>
                <div className="card-body">
                <form onSubmit={saveStudent} className="row g-2">

                <div className="col-md-4 form-group">
                    <label className="form-label" >First Name</label>
                    <input type="text"
                      name="firstname"
                      onChange={(e) => setfirstname(e.target.value)}
                      value={firstname}
                      className="form-control " id="validationDefault03" required
                    />

                    
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Last Name</label>
                    <input type="text"
                      name="lastname"
                      onChange={(e) => setlastname(e.target.value)}
                      value={lastname}
                      className="form-control" 
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">NIC</label>
                    <input type="text"
                      name="nic"
                      onChange={(e) => setnic(e.target.value)}
                      value={nic}
                      className="form-control" id="validationDefault03" required
                    />
                    </div>
                    <div className="col-md-8">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      name="address"
                      onChange={(e) => setaddress(e.target.value)}
                      value={address}
                      className="form-control" id="validationDefault03" required
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Telephone No</label>
                    <input
                      type="text"
                      name="phone"
                      onChange={(e) => setphone(e.target.value)}
                      value={phone}
                      className="form-control" id="validationDefault03" required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      name="email"
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                      className="form-control" id="validationDefault03" required
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">User Type</label>
                      <select className="form-control" id="validationDefault03" required name="userType" onChange={(e) => setuserType(e.target.value)}>
                        <option value="student">Boarder : Student</option>
                        <option value="teacher">Boarder : Teacher/Lecturer</option>
                        <option value="regular">Boarder : Regular</option>
                        <option value="boardingOwner">Boarding House Renter</option>
                      </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label "hidden={userType === 'regular' || userType === 'boardingOwner' ? true : false}>School / University</label>
                    <input
                      type="text"
                      name="schoolUniversity"
                      onChange={(e) => setschoolUniversity(e.target.value)}
                      value={schoolUniversity}
                      className="form-control"
                      hidden={userType === 'regular' || userType === 'boardingOwner' ? true : false}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" hidden={userType === 'regular' || userType === 'boardingOwner' || userType === 'teacher'? true : false}>Guadian's Name</label>
                    <input
                      type="text"
                      name="guadianName"
                      onChange={(e) => setguadianName(e.target.value)}
                      value={guadianName}
                      className="form-control"
                      hidden={userType === 'regular' || userType === 'boardingOwner' || userType === 'teacher'? true : false}
                    />
                  </div>
                  <div className="col-md-5">
                    <label className="form-label " hidden={userType === 'regular' || userType === 'boardingOwner' || userType === 'teacher'? true : false}>Guadian's Phone</label>
                    <input
                      type="text"
                      name="guadianPhone"
                      onChange={(e) => setguadianPhone(e.target.value)}
                      value={guadianPhone}
                      className="form-control"
                      hidden={userType === 'regular' || userType === 'boardingOwner' || userType === 'teacher'? true : false}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Password</label>
                    <input
                      type="text"
                      name="password"
                      onChange={(e) => setpassword(e.target.value)}
                      value={password}
                      className="form-control" id="validationDefault03" required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="text"
                      name="confirmPassword"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Location : {location}</label>
                  </div>
                  <div className="col-md-11">
                    <button type="submit" className="btn btn-primary float-right">
                      Save
                    </button>
                    
                    <Link to={"/"} className="btn btn-warning float-end">
                    Back
                  </Link>
                  </div>
                  
                </form>
              </div>
            </div>
      </div>
  );
}

export default SignUpForm;