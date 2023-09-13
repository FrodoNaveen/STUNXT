import Time from "./Time";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import filterlogo from "../images/Home/filterlogo.svg"
import event3 from "../images/Home/Event3.png"
import savelogo from "../images/Home/savelogo.svg"

const Events = () => {

  const index = 2

  const eventHeader = ["Events", "Registered", "Attended", "Wishlist"]
  const eventCategories = ["All", "Categories1", "Categories2", "Categories3", "Categories4", "Categories5"]

  const [selectEventHeader, setSelectEventHeader] = useState()


  function changeEventHeader(ele) {
    setSelectEventHeader(ele)
  }

  useEffect(() => {
    setSelectEventHeader("Events")
  }, [])
  return (
    <div className="mainContainer bg-body-secondary card mt-5 phoneSize">
      <Time />

      {/* EventHeader */}
      <div className=" container bg-white pt-3 pb-2" style={{ boxShadow: "0px 15px 10px -15px #111" }}>
        <div className=" card-fluid d-flex justify-content-around text-center">
          {eventHeader.map((ele, index) => (
            <div>
              {selectEventHeader === ele ? <span style={{ color: "#00d970" }} onClick={() => changeEventHeader(ele)}><b>{ele}</b></span>
                : <span style={{ color: "#00000099" }} onClick={() => changeEventHeader(ele)}>{ele}</span>
              }
            </div>
          ))}
        </div>
      </div>



      {/* Search input and filter icon */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-9">
            <input className="form-control rounded-4 borderWhite text-start" placeholder="Search State here..." style={{ height: "60px", paddingRight: "20px" }} />
          </div>
          <div className="col-3">
            <div className="card rounded-4 borderWhite" style={{ height: "60px", width: "60px" }}>
              <img className="m-auto cursorPointer" src={filterlogo} alt="filter logo" style={{ height: "24px", width: "24px" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Event categories */}
      <div className="conatiner-fluid mt-4 me-2">
        <div className="d-flex scrollHide" style={{ overflow: "auto" }}>
          {eventCategories.map((ele) => (
            <div>
              <small className="card ms-3 p-1 borderWhite cursorPointer">{ele}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="container scrollHide" style={{ overflow: "scroll" }}>
        {/* all events */}
        <div className="b_100">
          <div className="container-fluid bg-white mt-3">
            <div className="pt-3 pb-3">
              <div className="row">
                <div className="col-4">
                  <img src={event3} alt="eventimage" style={{ width: "100px", height: "100px" }} />
                </div>
                <div className="col-8 ps-0">
                  <div className="float-start">
                    <small>Category</small>
                  </div>
                  <div className="float-end">
                    <small><img className="text-danger" src={savelogo} alt="savelogo" /></small>
                  </div>

                  <br />
                  <b>Event Title</b>
                  <br />
                  <small><i class="fa-regular fa-calendar"></i> 12/12/2023</small>
                  <br />
                  <small><i class="fa-solid fa-location-dot"></i> SNS college</small>
                </div>

              </div>
            </div>
          </div>
          <div className="container-fluid bg-white mt-3">
            <div className="pt-3 pb-3">
              <div className="row">
                <div className="col-4">
                  <img src={event3} alt="eventimage" style={{ width: "100px", height: "100px" }} />
                </div>
                <div className="col-8 ps-0">
                  <div className="float-start">
                    <small>Category</small>
                  </div>
                  <div className="float-end">
                    <small><img className="text-danger" src={savelogo} alt="savelogo" /></small>
                  </div>

                  <br />
                  <b>Event Title</b>
                  <br />
                  <small><i class="fa-regular fa-calendar"></i> 12/12/2023</small>
                  <br />
                  <small><i class="fa-solid fa-location-dot"></i> SNS college</small>
                </div>

              </div>
            </div>
          </div>
          <div className="container-fluid bg-white mt-3">
            <div className="pt-3 pb-3">
              <div className="row">
                <div className="col-4">
                  <img src={event3} alt="eventimage" style={{ width: "100px", height: "100px" }} />
                </div>
                <div className="col-8 ps-0">
                  <div className="float-start">
                    <small>Category</small>
                  </div>
                  <div className="float-end">
                    <small><img className="text-danger" src={savelogo} alt="savelogo" /></small>
                  </div>

                  <br />
                  <b>Event Title</b>
                  <br />
                  <small><i class="fa-regular fa-calendar"></i> 12/12/2023</small>
                  <br />
                  <small><i class="fa-solid fa-location-dot"></i> SNS college</small>
                </div>

              </div>
            </div>
          </div>
          <div className="container-fluid bg-white mt-3">
            <div className="pt-3 pb-3">
              <div className="row">
                <div className="col-4">
                  <img src={event3} alt="eventimage" style={{ width: "100px", height: "100px" }} />
                </div>
                <div className="col-8 ps-0">
                  <div className="float-start">
                    <small>Category</small>
                  </div>
                  <div className="float-end">
                    <small><img className="text-danger" src={savelogo} alt="savelogo" /></small>
                  </div>

                  <br />
                  <b>Event Title</b>
                  <br />
                  <small><i class="fa-regular fa-calendar"></i> 12/12/2023</small>
                  <br />
                  <small><i class="fa-solid fa-location-dot"></i> SNS college</small>
                </div>

              </div>
            </div>
          </div>

          <div className="container-fluid bg-white mt-3">
            <div className="pt-3 pb-3">
              <div className="row">
                <div className="col-4">
                  <img src={event3} alt="eventimage" style={{ width: "100px", height: "100px" }} />
                </div>
                <div className="col-8 ps-0">
                  <div className="float-start">
                    <small>Category</small>
                  </div>
                  <div className="float-end">
                    <small><img className="text-danger" src={savelogo} alt="savelogo" /></small>
                  </div>

                  <br />
                  <b>Event Title</b>
                  <br />
                  <small><i class="fa-regular fa-calendar"></i> 12/12/2023</small>
                  <br />
                  <small><i class="fa-solid fa-location-dot"></i> SNS college</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar index={index} />
    </div >
  );
};
export default Events;
