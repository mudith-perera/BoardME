import React,{useState} from "react";
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const BHOViewForm = () =>{

  const [cookie] = useCookies(['']);
  const [firstname, setfirstname] = useState(cookie.LoggedUser[1]);
  const [lastname, setlastname] = useState(cookie.LoggedUser[2]);
  const [nic, setnic] = useState(cookie.LoggedUser[3]);
  const [address, setaddress] = useState(cookie.LoggedUser[5]);
  const [phone, setphone] = useState(cookie.LoggedUser[6]);
  const [email, setemail] = useState(cookie.LoggedUser[7]);

  return(
    <div className="container py-5">
            
            <div className="card">
              <div className="card-header">
                <h4>
                  Your Info  
                </h4>
              </div>
                <div className="card-body">
                <form  className="row g-2">

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
                  
                  
                  
                  
                  
                  
                  
                  <div className="col-md-11">
                    
                    
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

export default BHOViewForm;