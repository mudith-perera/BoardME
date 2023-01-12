import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

const BHOHomeMain = () => {

  const [cookie] = useCookies(['']);
  const [username] = useState((cookie.LoggedUser[1]).toUpperCase()  + " " + (cookie.LoggedUser[2]).toUpperCase());

  return (
    <div className="container py-5">
      
        
        <div className="card">
        <div className="card-header"><h4>Welcome : {username} </h4></div>
        <div className="card-body">
          <div className="col-md-4 py-3">
            <Link to={'add-boading-house'} className="btn btn-dark btn-lg ">
              Add a Boarding House
            </Link>
          </div>
          <div className="col-md-4 py-3">
            <Link to={''} className="btn btn-light btn-lg ">
              View Boarding Houses
            </Link>
          </div>
          <div className="col-md-4 py-3">
            <Link to={'view-personal-details'} className="btn btn-dark btn-lg ">
              View Personal Info
            </Link>
          </div>
          <div className="col-md-4 py-3">
            <Link to={''} className="btn btn-light btn-lg ">
              Update Personal Info
            </Link>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default BHOHomeMain;
