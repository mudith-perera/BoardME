import React,{useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BoardingHouseAddForm = () => {

  
  //const res = await axios.post("http://127.0.0.1:8000/api/get-users");
  
  const [cookie] = useCookies(['']);
  
  const [ownerEmail, setOwnerEmail] = useState(cookie.LoggedUser[7]);
  const [ownerName, setOwnerName] = useState(cookie.LoggedUser[1] + " " + cookie.LoggedUser[2]);
  const [ownerPhone, setOwnerPhone] = useState(cookie.LoggedUser[6]);
  const [fullAddress, setFullAddress] = useState("");
  const [city, setCity] = useState("");
  const [town, setTown] = useState("");
  const [province, setProvince] = useState("");
  const [houseType, setHouseType] = useState("room");
  const [bathroomStatus, setBathroomStatus] = useState("attached");
  const [capacity, setCapacity] = useState("");

  const reset = e => {
    setOwnerEmail('');
    setOwnerName('');
    setOwnerPhone('');
    setFullAddress('');
    setCity('');
    setTown('');
    setProvince('');
    setHouseType('');
    setBathroomStatus('');
    setCapacity('');
}

  const notifSuccess = () => toast.success("Boarding House Added Successfully 👍");
  const notifError = () => toast.error("Error While adding the Boarding House 😥");

  const saveBoardingHouse = async (e) => {
    e.preventDefault();
    const formData = { ownerEmail,ownerName,ownerPhone,fullAddress,city,town,province,houseType,bathroomStatus,capacity};

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/add-boarding-houses',formData);
      if (res.data.status === 200) 
        {
          console.log(res.data.message);
          notifSuccess();//Load toastify Alert     
          reset();
        }
    } catch (err) {
        notifError();
    }
  }

  return(
  <div className="container py-5">
            <ToastContainer/>
            <div className="card">
              <div className="card-header">
                <h4>
                  Enter Boarding House Details
                </h4>
              </div>
                <div className="card-body">
                <form onSubmit={saveBoardingHouse} className="row g-2">

                <div className="col-md-4 form-group">
                    <label className="form-label" >Owner Email</label>
                    <input type="text"
                      name="ownerEmail"
                      onChange={(e) => setOwnerEmail(e.target.value)}
                      value={ownerEmail}
                      className="form-control " id="validationDefault03" disabled
                    />
                  </div>
                  <div className="col-md-4 form-group">
                    <label className="form-label" >Owner Name</label>
                    <input type="text"
                      name="ownerName"
                      onChange={(e) => setOwnerName(e.target.value)}
                      value={ownerName}
                      className="form-control " id="validationDefault03" disabled
                    />
                  </div>
                  <div className="col-md-3 form-group">
                    <label className="form-label" >Owner Phone</label>
                    <input type="text"
                      name="ownerPhone"
                      onChange={(e) => setOwnerPhone(e.target.value)}
                      value={ownerPhone}
                      className="form-control " id="validationDefault03" disabled
                    />
                  </div>
                  <div className="col-md-8">
                    <label className="form-label">Full Address</label>
                    <input type="text"
                      name="fullAddress"
                      onChange={(e) => setFullAddress(e.target.value)}
                      value={fullAddress}
                      className="form-control" 
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">City</label>
                    <input type="text"
                      name="city"
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                      className="form-control" id="validationDefault03" required
                    />
                    </div>
                    <div className="col-md-4">
                    <label className="form-label">Town</label>
                    <input
                      type="text"
                      name="town"
                      onChange={(e) => setTown(e.target.value)}
                      value={town}
                      className="form-control" id="validationDefault03" required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Province</label>
                    <input
                      type="text"
                      name="province"
                      onChange={(e) => setProvince(e.target.value)}
                      value={province}
                      className="form-control" id="validationDefault03" required
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Capacity</label>
                    <input
                      type="text"
                      name="capacity"
                      onChange={(e) => setCapacity(e.target.value)}
                      value={capacity}
                      className="form-control" id="validationDefault03" required
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">House Type</label>
                      <select className="form-control" id="validationDefault03" required name="houseType" onChange={(e) => setHouseType(e.target.value)}>
                        <option value="room">Room</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                      </select>
                  </div>

                  <div className="col-md-3">
                    <label className="form-label">Bathroom Status</label>
                      <select className="form-control" id="validationDefault03" required name="bathroomStatus" onChange={(e) => setBathroomStatus(e.target.value)}>
                        <option value="attached">Attached</option>
                        <option value="notAttached">Not Attached</option>
                      </select>
                  </div>

                  <div className="col-md-3">
                    <label className="form-label">Upload Images</label>
                    <input type="file"  />
                    
                  </div>

                  <div className="col-md-11 py-4">
                    <button type="submit" className="btn btn-primary float-right">
                      Save
                    </button>
                    <Link to={"/bho-home"} className="btn btn-warning float-end">
                    Back
                  </Link>
                  </div>
                  
                </form>
              </div>
            </div>
      </div>
  );
}

export default BoardingHouseAddForm;


// todo
// back function
// get owners details when adding a boarding house