import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from 'react';
import "./Auth.css";

import Auth from "../../components/Auth/Auth";
import { signup } from "../../apis/fakeStoreApis";

function Signup() {
  const navigator = useNavigate();
  const authRef = useRef(null);

  async function handleAuth(formDetails) {
    try {
      await axios.post(signup(), {
        username: formDetails.username,
        email: formDetails.email,
        password: formDetails.password,
      });
      navigator("/signin");
    } catch (error) {
      authRef.current.resetFormData();
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="home-title text-center">Welcome to Shop Cart</h2>
      </div>
      <div className="login-wrapper" id="loginForm">
        <h4 className="text-center">Signup</h4>
        <Auth onSubmit={handleAuth} ref={authRef} />
        <div className="signup-btn text-center" id="showSignupBtn">
          <Link to="/signin">Already have an Account? Sign In Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;