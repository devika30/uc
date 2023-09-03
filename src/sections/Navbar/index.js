import React, { useState } from "react";
import LinkWithDropdown from "../../components/common/LinkWithDropdown";
import Button from "../../components/common/Button";
import logo from "../../images/uclogo.svg";
import { servicesData, hireDevsData } from "./data";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navDropdown, setNavDropdown] = useState(null);
  const toggleMenu = () => {
    if (!isOpen) {
      setNavDropdown(null);
    }
    setIsOpen(!isOpen);
  };

  const toggleChildDropdown = (data) => {
    setNavDropdown((prevData) => (prevData === data ? null : data));
  };

  return (
    <nav className="navbar ">
      <div className="navbar-container">
        <div className="navbar-lhs">
          <div className="navbar-logo-container ">
            <img className="navbar-logo" src={logo} alt="Unico Connect" />
          </div>
          <div className="navbar-hamburger" onClick={toggleMenu}>
            <HamburgerIcon />
          </div>
        </div>
        <div className={`navbar-rhs ${isOpen ? "show" : ""}`}>
          <div className="navbar-links">
            <LinkWithDropdown
              label="Services"
              data={servicesData}
              onClick={() => toggleChildDropdown("services")}
            />
            {servicesData && navDropdown === "services" ? (
              <div className="navbar-dropdown-mobile">
                {servicesData.map((data) => (
                  <div>{data}</div>
                ))}
              </div>
            ) : null}
            <LinkWithDropdown
              label="Hire Developers"
              data={hireDevsData}
              columns={3}
              onClick={() => toggleChildDropdown("hireDev")}
            />
            {hireDevsData && navDropdown === "hireDev" ? (
              <div className="navbar-dropdown-mobile">
                {hireDevsData.map((data) => (
                  <div>{data}</div>
                ))}
              </div>
            ) : null}
            <LinkWithDropdown link="#" label="Case Study" />
            <LinkWithDropdown link="#" label="Pricing Plan" />
            <LinkWithDropdown link="#" label="No Code Tools" />
            <LinkWithDropdown link="#" label="About Us" />
          </div>
          <Button label="Get in touch" onClick={() => {}} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
