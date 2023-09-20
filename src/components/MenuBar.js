import profileicon from "../images/Menubar/Ellipse 19.svg";
import searchicon from "../images/Menubar/search.svg";
import notificationicon from "../images/Menubar/notifications.svg";
import forum from "../images/Menubar/forum.svg";
import proirityhigh from "../images/Menubar/priority_high.svg";
import greenicon from "../images/Menubar/Rectangle 378.svg";
import './MenuBar.css'; // Import your CSS file for MenuBar styles
import { useState } from "react";

const MenuBar = () => {
  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false);

  // Function to open the profile sidebar
  const openProfileSidebar = () => {
    setIsProfileSidebarOpen(true);
  };

  // Function to close the profile sidebar
  const closeProfileSidebar = () => {
    setIsProfileSidebarOpen(false);
  };

  return (
    <nav className="navbar bg-white navbar-white pt-3">
      <div className="container-fluid ">
        <div className="d-flex justify-content-start align-items-center position-relative">
          <div style={{ marginRight: "0px" }}></div>

          {/* Profile Icon (Left) */}
          <a className="navbar-profile" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <img
              src={profileicon}
              alt="Avatar Logo"
              style={{ width: "40px" }}
              className="rounded-pill"

            />


            {/* Priority High Icon (Inside Profile Icon) */}
            <div
              className="priority-icon"
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                backgroundColor: "#f2f2f2", // Gray background color
                borderRadius: "50%", // Make it round
                width: "15px", // Adjust the width and height as needed
                height: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={proirityhigh}
                alt="Priority High"
                style={{
                  filter: "brightness(0)", // Make the icon black
                  width: "10px", // Adjust the icon size
                }}
              />
            </div>
          </a>
        </div>

        <div style={{ width: "200px" }} class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
            </div>
            <div class="dropdown mt-3">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Dropdown button
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          {/* Search Icon */}
          <a className="navbar-search" href="#">
            <img src={searchicon} alt="Search Logo" />
          </a>
          <div style={{ marginRight: "20px" }}></div>
          {/* Notification Icon */}
          <a className="navbar-notification" href="#">
            <img src={notificationicon} alt="Notify Logo" />
          </a>
          <div style={{ marginRight: "20px" }}></div>
          {/* Forum Icon */}
          <a className="navbar-forum" href="#" style={{ position: "relative" }}>
            <img src={forum} alt="Forum Logo" />
            {/* Green Round Icon (Top Right Inside Forum Icon) */}
            <div
              className="green-icon"
              style={{
                position: "absolute",
                top: "-10px", // Adjust the positioning as needed
                right: "5px", // Adjust the positioning as needed
              }}
            >
              <img
                src={greenicon}
                alt="Green Icon"
                style={{
                  borderRadius: "50%", // Make it round
                  width: "13px", // Adjust the width and height as needed
                  height: "13px",
                }}
              />
            </div>
          </a>
          <div style={{ marginRight: "10px" }}></div>
        </div>
      </div>
      {/* Profile Sidebar Overlay */}
      {isProfileSidebarOpen && (
        <div className="profile-sidebar-overlay" onClick={openProfileSidebar}></div>
      )}

      {/* Profile Sidebar */}
      {isProfileSidebarOpen && (
        <div className="profile-sidebar">
          {/* Sidebar content goes here */}
          <div>Profile Sidebar Content</div>
          <button onClick={closeProfileSidebar}>Close Sidebar</button>
        </div>
      )}
    </nav>
  );
};

export default MenuBar;
