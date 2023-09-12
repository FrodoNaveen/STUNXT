import Time from "./Time";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";


const Home = () => {


  return (

    <div className="mainContainer bg-body-secondary card mt-5 phoneSize">
      <Time />
      <MenuBar />
      <div className="container" style={{ overflow: "scroll" }}>
        <div className="card bg-white mt-3" style={{ borderColor: "white" }}>
          <div className="row">
            <div className="col-3 m-auto">
              <p className="text-center" style={{ color: "#4d4d4d" }}>
                <i class="fa-solid fa-certificate fa-2xl" style={{ color: "#00d970" }}></i>
              </p>
            </div>
            <div className="col-9 mt-2">
              <span className="text-start" style={{ color: "#4d4d4d" }}>
                <b>Phone number</b>
              </span>
              <p><small className="text-start" style={{ color: "#636363" }}>
                Please confirm your country code and enter your phone number
              </small></p>
            </div>

          </div>

        </div>


      </div>
      <Navbar />
    </div >
  );


};
export default Home;