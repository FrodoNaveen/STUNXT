import React from "react";
import ProfileData from "../data/ProfileData";
import Time from "./Time";
import dartIMG from "../images/dart_img.svg";
import { IoMdSettings } from "react-icons/io";

const ProfileSidebar = () => {
  return (
    <div className="fixed-elements">
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="container-fluid">
          <Time />
        </div>

        <div className="offcanvas-header">
          <div className="profile d-flex justify-content-between">
            <div>
              {ProfileData.map((profile) => (
                <div key={profile.id}>
                  <div
                    className="d-flex align-items-center container-fluid"
                    style={{
                      width: "324px",
                      height: "90px",
                      borderRadius: "20px",
                      background: "#FFFFFF",
                    }}
                  >
                   
                    <img
                      src={profile.userAvatar}
                      alt={profile.username}
                      width={"50px"}
                      height={"50px"}
                      style={{ marginRight: "10px" }}
                    />
                    <div>
                      <h5 className="offcanvas-title">{profile.username}</h5>
                      <small>{profile.usertype}</small>
                      <small>@{profile.userID}</small>
                    </div>
                  </div>
                </div>
              ))}
              <div className="scrollable-content">
                <div
                  className="d-flex align-items-center container-fluid"
                  style={{
                    width: "324px",
                    maxHeight: "80vh",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "350px",
                  }}
                >
                  <img
                    src={dartIMG}
                    width={"70px"}
                    height={"70px"}
                    style={{ marginRight: "20px" }}
                  />
                  <div>
                    <h1
                      style={{
                        fontSize: "24px",
                        fontFamily: "Urbanist",

                        fontWeight: "700",
                        lineHeight: "22px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      Achieve your Goals
                    </h1>
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        letterSpacing: "0em",
                        color: "#5A5A5A"
                      }}
                    >
                      Start completing goals and get new badges and reward
                      points
                    </span>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center container-fluid"
                  style={{
                    width: "324px",
                    height: "100px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={dartIMG}
                    width={"70px"}
                    height={"70px"}
                    style={{ marginRight: "20px" }}
                  />
                  <div>
                    <h1 style={{
                        fontSize: "24px",
                        fontFamily: "Urbanist",

                        fontWeight: "700",
                        lineHeight: "22px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}>Refer and earn</h1>
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "19px",
                        letterSpacing: "0em",
                        textAlign: "bottom",
                        color: "#5A5A5A"
                      }}
                    >
                      Refer your friends and get rewards worth 2000rs
                    </span>
                  </div>
                </div>
                <div
                  className="container"
                  style={{
                    fontFamily: "Urbanist",
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "21.6px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    width: "324px",
                    height: "64",
                  }}
                >
                  <IoMdSettings /> Settings
                </div>
                <footer
                  className="container-fluid d-flex"
                  style={{
                    width: "96px",
                    height: "22px",
                    fontFamily: "Urbanist",
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "22px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    marginTop: "20px",
                  }}
                >
                  Version1.0.1
                </footer>
              </div>
            </div>
            <div className="close-button-container">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
