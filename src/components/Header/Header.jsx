import { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { useCookies } from "react-cookie";
import UserContext from "../../context/UserContext";
// CSS import
import "./Header.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt-token"]);
  const toggle = () => setIsOpen(!isOpen);
  const { user,setUser } = useContext(UserContext);


  function logout() {
    removeCookie('jwt-token', {httpOnly: true});
    axios.get(`${import.meta.env.VITE_FAKE_STORE_API}/logout`, {withCredentials: true});
    setUser(null);
  }

  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand id="title">
          <Link to="/">Shop Cart</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar style={{ marginRight: "2rem" }}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Cart</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {cookies["jwt-token"] ? (
                    <Link
                      to="/signin"
                      onClick={logout}
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link to="/signin">Login</Link>
                  )}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarText>{user && user.user}</NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
