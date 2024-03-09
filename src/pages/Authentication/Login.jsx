import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

import Auth from "../../components/Auth/Auth";
import { signin } from "../../apis/fakeStoreApis";

import "./Auth.css";


function Login() {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(['jwt-token']);

  async function handleSubmit(formDetails) {
    try {
        const response = await axios.post(signin(), {
            username: formDetails.username,
            email: formDetails.email,
            password: formDetails.password,
          });
          setCookie('jwt-token',response.data.token,{httpOnly:true}) 
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
