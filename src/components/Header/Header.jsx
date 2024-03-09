import { useState } from 'react';
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
} from 'reactstrap';
import { useCookies } from "react-cookie";

// CSS import
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['jwt-token']);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand id="title">
          <Link to="/">Shop Cart</Link>

        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar style={{marginRight: '2rem'}}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Cart</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {
                    cookies["jwt-token"] ? <Link to="/signin" onClick={()=>removeCookie("jwt-token")}>Logout</Link> : <Link to="/signin">Login</Link>
                  }
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarText>Username</NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;