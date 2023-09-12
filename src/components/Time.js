import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    let date = new Date();
    let hours = date.getHours();

    let minutes = date.getMinutes();
    if (minutes < 10 && hours <= 12) {
      setTime(`${hours}:0${minutes}`);
    } else if (minutes < 10 && hours > 12) {
      setTime(`${hours - 12}:0${minutes}`);
    } else if (minutes > 10 && hours > 12) {
      setTime(`${hours - 12}:${minutes}`);
    } else {
      setTime(`${hours}:${minutes}`);
    }
  }, []);

  return (
    <div className="container bg-white p-2">
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
  );
};
export default Time;
