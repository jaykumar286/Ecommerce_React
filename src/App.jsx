import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie'
import { jwtDecode } from "jwt-decode";
import axios from "axios";
// CSS imports
import "./App.css";

// Custom components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainRoutes from "./routes/MainRoutes";
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useCookies(['jwt-token']);
  
  function accessToken() {
    axios.get(`${import.meta.env.VITE_FAKE_STORE_API}/accesstoken`, {withCredentials: true})
    .then((res) => {
      setToken('jwt-token', res.data.token, {httpOnly: true});
      const tokenDetails = jwtDecode(res.data.token);
      setUser(tokenDetails);
    });
  }

  useEffect(() => {
    accessToken();
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app-wrapper">
        {/* Common header for all pages */}
        <Header color="light" light={true} expand="md" container="md" />

        <MainRoutes />

        {/* Common footer for all pages */}
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
