import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo txt.png";
import logoloader from "../images/s logo.png";
import "./Loader.css";

const LogoLoader = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState();

  useEffect(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10 && hours <= 12) {
      setTime(`${hours}:0${minutes}`);
    } else if (minutes < 10 && hours > 12) {
      setTime(`${hours - 12}:0${minutes}`);
    } else {
      setTime(`${hours}:${minutes}`);
    }

    // Automatically navigate to the welcome page after 3 seconds (adjust the delay as needed)
    const navigationTimeout = setTimeout(() => {
      navigate("/welcome");
    }, 3000); // 3000 milliseconds (3 seconds)

    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(navigationTimeout);
    };
  }, [navigate]);

  return (
    <div className="container card mt-5 phoneSize">
      <div className="container bg-white m-2">
        <span className="float-start">
          <b>{time}</b>
        </span>
        <div className="float-end d-flex justify-content-around">
          <span>
            <i className="fa-solid fa-signal" style={{ color: "#000000" }}></i>
          </span>
          <span className="navicons">
            <i className="fa-solid fa-wifi" style={{ color: "#000000" }}></i>
          </span>
          <span className="navicons">
            <i
              className="fa-solid fa-battery-full"
              style={{ color: "#000000" }}
            ></i>
          </span>
        </div>
      </div>
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="loader-container">
        <img src={logoloader} className="loader-logo" alt="logo" />
      </div>
    </div>
  );
};

export default LogoLoader;
