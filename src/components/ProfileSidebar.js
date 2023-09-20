import React from "react";
import { Offcanvas } from "react-bootstrap"; // Import Offcanvas from react-bootstrap
import profileicon from "../images/Menubar/Ellipse 19.svg";
import proirityhigh from "../images/Menubar/priority_high.svg";
import "./ProfileSidebar.css";

const ProfileSidebar = ({ show, onHide }) => { 
  return (
    
    <Offcanvas show={show} onHide={onHide} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Profile</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Profile Content Goes Here */}
        
        <div className="d-flex align-items-center">
          <img src={profileicon} alt="Avatar Logo" style={{ width: "40px" }} className="rounded-pill" />
          <div className="priority-icon">
            <img src={proirityhigh} alt="Priority High" style={{ filter: "brightness(0)", width: "10px" }} />
          </div>
        </div>
        {/* Add more profile information here */}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ProfileSidebar;
