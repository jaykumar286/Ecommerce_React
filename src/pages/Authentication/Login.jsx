import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useContext } from 'react';
import { jwtDecode } from "jwt-decode";

import Auth from "../../components/Auth/Auth";
import { signin } from "../../apis/fakeStoreApis";

import "./Auth.css";
import UserContext from "../../context/UserContext";


function Login() {
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);
  const [cookies, setCookie, removeCookie] = useCookies(['jwt-token']);

  async function handleSubmit(formDetails) {
    try {
        const response = await axios.post(signin(), {
            username: formDetails.username,
            email: formDetails.email,
            password: formDetails.password,
          });
          setCookie('jwt-token',response.data.token);
          setUser(jwtDecode(response.data.token));
          navigate("/")
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="home-title text-center">Welcome to Shop Cart</h2>
      </div>
      <div className="login-wrapper" id="loginForm">
        <h4 className="text-center">Login</h4>
        <Auth onSubmit={handleSubmit} />
        <div className="signup-btn text-center" id="showSignupBtn">
          <Link to="/signup">Donot have an Account? Sign Up Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
