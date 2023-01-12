import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Aos from "aos";
import "aos/dist/aos.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([""]);

  const navigate = useNavigate();

  const notifError = () => toast.error("Incorrect Username or password 😥");
  useEffect(() => {
    removeCookie("LoggedUser");
    Aos.init({ duration: 900});
  });

  const getUserEmail = async (e) => {
    e.preventDefault();

    const formData = { email, password };

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/get-user-for-email-password",
        formData
      );

      const loggedUserDetails = [
        res.data.message[0].id,
        res.data.message[0].firstname,
        res.data.message[0].lastname,
        res.data.message[0].nic,
        res.data.message[0].schoolUniversity,
        res.data.message[0].address,
        res.data.message[0].phone,
        res.data.message[0].email,
        res.data.message[0].guadianName,
        res.data.message[0].guadianPhone,
        res.data.message[0].password,
        res.data.message[0].userType,
        res.data.message[0].created_at,
        res.data.message[0].updated_at
      ];
      
      if (res.data.status === 200) {
        if (res.data.message[0].email.length === 0) {
          notifError();
        } else {
          //Setting the logged in User Details to a Cookie

          setCookie("LoggedUser", loggedUserDetails, { path: "/" });

          if (res.data.message[0].userType === "student") {
            navigate("/student-home");
          } else if (res.data.message[0].userType === "boardingOwner") {
            navigate("/bho-home");
          } else if (res.data.message[0].userType === "teacher") {
            navigate("/teacher-lecturer-home");
          } else if (res.data.message[0].userType === "regular") {
            navigate("/regular-home");
          }
        }
      }
    } catch (err) {
      notifError();
    }
  };

  return ( 
    <div data-aos="flip-right" className="container py-4">
      <ToastContainer />
      <div className="d-flex justify-content-center">
        <div
          className="card py-3 px-3"
          style={{ width: "28rem" }}
          border="primary"
        >
          <form onSubmit={getUserEmail}>
            <h4 className="mb-4 text-center">Enter Your Credentials</h4>
            <div className="form-outline mb-4">
              <input
                type="email"
                id="validationDefault02"
                name="email"
                className="form-control"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label className="form-label">Email address</label>
            </div>

            <div className="form-outline mb-2">
              <input
                type="password"
                id="validationDefault03"
                name="password"
                className="form-control"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label className="form-label">Password</label>
            </div>

            <div className="row mb-4">
              <div className="text-center">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <div className="form-outline text-center">
              <input type="submit" className="btn btn-primary btn-block mb-4" />
            </div>

            <div className="text-center">
              <p>
                Not a member? <a href="sign-up">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
