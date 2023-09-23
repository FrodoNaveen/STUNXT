import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileData from "../data/ProfileData";
import { MdEdit } from "react-icons/md";
import { HiShare } from "react-icons/hi";
import { LuGraduationCap } from "react-icons/lu";
import { BsPlus } from "react-icons/bs";
import proirityhigh from "../images/Profile/Group 166.svg";
import dartIMG from "../images/dart_img.svg";
import { useState, useEffect } from "react";
import Time from "./Time";

const ProfilePage = () => {
  let navigate = useNavigate();

  const ProfileCategories = [
    "Post",
    "Experience",
    "Education",
    "Skills",
    "Certification",
  ];

  const [selectProfileCategories, setSelectProfileCategories] =
    useState("Post");
  const [userPost, setUserPost] = useState(ProfileData.userPost || []);

  function changeProfileCategories(ele) {
    setSelectProfileCategories(ele);
  }

  useEffect(() => {
    setSelectProfileCategories("Post");
  }, []);

  function goBack() {
    navigate("/home");
  }

  return (
    <div
      className="mainContainer card phoneSize"
      style={{ background: "#F9F9F9" }}
    >
      <Time />
      <div
        className="container-fluid bg-white"
        style={{ boxShadow: "0px 15px 10px -15px #111" }}
      >
        <div className="row mb-3">
          <div className="col-12 mt-3">
            <div className="float-start">
              <i
                className="fa-solid fa-arrow-left cursorPointer"
                style={{ color: "#000000" }}
                onClick={goBack}
              ></i>
              <b className="ms-3">Profile</b>
            </div>
            <div className="float-end me-2">
              <b>...</b>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-white rounded-3 mt-2 pb-3"
        // style={{ height: "242px", width: "388px" }}
      >
        <div className="row-3 mb-3 mt-3">
          <div className="col-12">
            <div className="float-start">
              <div
                className="avatar-container"
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={ProfileData.userAvatar}
                  alt="userAvatar"
                  style={{ height: "90px", width: "90px", borderRadius: "50%" }}
                />
                {/* Priority High Icon (Inside Avatar Icon) */}
                <div
                  className="priority-icon"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={proirityhigh}
                    alt="Priority High"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-3 float-end">
              <HiShare
                style={{ height: "20px", width: "30px", marginRight: "10px" }}
              />
              <MdEdit
                style={{ height: "20px", width: "30px", marginLeft: "5px" }}
              />
            </div>
            <div className="row pt-3">
              <b style={{ fontSize: "18px" }}>{ProfileData.username}</b>
              <br />
              <small className="text-muted" style={{ fontSize: "15px" }}>
                {ProfileData.usertype} @{ProfileData.userID}
              </small>
            </div>
          </div>
        </div>
        <br />

        <div>
          <p className="text-muted">
            <i className="fa-solid fa-location-dot"></i>{" "}
            {ProfileData.userLocation}
          </p>

          <div className="">
            <p className="text-muted">
              <LuGraduationCap /> {ProfileData.userEducation}
            </p>
          </div>
        </div>
        <div className="container text-start mt-3 no-wrap">
          <div className="row" style={{ fontSize: "16px", color: "#00D970" }}>
            <div className="col-3">
              <b>{ProfileData.userPosts} Posts</b>
            </div>
            <div className="col">
              <b>{ProfileData.userFollowers} Followers</b>
            </div>
            <div className="col">
              <b>{ProfileData.userFollowing} Following</b>
            </div>
          </div>
        </div>
      </div>

      {/* Achieve your goals */}
      <div className="container-fluid bg-white mt-2 rounded-3">
        <div className="row pt-4 pb-4">
          <div className="col-3">
            <img src={dartIMG} alt="dartimage" />
          </div>
          <div className="col-9">
            <b>Achieve Your Goals</b>
            <br />
            <small className="text-muted">
              Start completing goals and get a new batches and reward points
            </small>
          </div>
        </div>
      </div>

      {/* {categories} */}
      <div className="mb-2">
        <div className="container-fluid d-flex scrollHide no-wrap scroll mt-4 justify-content-around text-center">
          {ProfileCategories.map((ele, index) => (
            <div key={index}>
              {selectProfileCategories === ele ? (
                <small
                  className="card p-1 cursorPointer"
                  style={{
                    backgroundColor: "#00D9701A",
                    borderColor: "#00d970",
                  }}
                  onClick={() => changeProfileCategories(ele)}
                >
                  {ele}
                </small>
              ) : (
                <small
                  className="card p-1 borderWhite cursorPointer"
                  onClick={() => changeProfileCategories(ele)}
                >
                  {ele}
                </small>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* {Experience Edit section} */}
      {selectProfileCategories === "Experience" && (
        <div className="ms-3 mt-2 row">
          <div className="col-8">
            <h6>Experience ({ProfileData.userTotalExperience})</h6>
          </div>
          <div className="col ps-4 d-flex align-items-center">
            <div
              className="rounded-circle p-1"
              style={{
                border: "2px solid #D9D9D9",
                backgroundColor: "#D9D9D9",
                width: "auto",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "-20px",
              }}
            >
              <BsPlus />
            </div>
            <div
              className="rounded-circle p-1"
              style={{
                border: "2px solid #D9D9D9",
                backgroundColor: "#D9D9D9",
                width: "auto",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <MdEdit />
            </div>
          </div>
        </div>
      )}

      {/* {Post section} */}
      <div
        className="container-fluid"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        {selectProfileCategories === "Post" && (
          <div className="d-flex flex-wrap">
            {userPost.map((post, index) => (
              <div
                className="card bg-white mt-3 ms-1 cursorPointer"
                key={index}
              >
                <img src={post} alt={`Post ${index}`} />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Experience */}
      {selectProfileCategories === "Experience" && (
        <div
          className="container-fluid"
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          <div className="b_100">
            {ProfileData.userExperiences.map((ele, index) => (
              <div
                className="container-fluid bg-white mt-2 mb-2 cursorPointer"
                key={index}
              >
                <div className="pt-3 pb-3">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={ele.expImage}
                        alt="careerimage"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <div className="col-8 ps-0">
                      <b style={{ color: "#1EB7CD" }}>{ele.expType} </b>
                      <br />
                      <b>{ele.expTitle}</b>
                      <br />
                      <small style={{ color: "#666666" }}>
                        {ele.expDate} ({ele.expTotal})
                      </small>
                      <br />
                      <small style={{ color: "#666666" }}>
                        {ele.expLocation}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
