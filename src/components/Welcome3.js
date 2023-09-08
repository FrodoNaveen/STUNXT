import { useNavigate } from "react-router-dom";
import Time from "./Time";
import girlchat from "../images/74908-girl-chatting-with-online-friends.png";

const Welcome3 = () => {
  const navigate = useNavigate();

  function goToPreviousPage() {
    navigate("/welcome2");
  }

  function goToAgreePage() {
    navigate("/agree");
  }

  return (

    <div className="container card mt-5 phoneSize">
      <Time />
      <div className="container bg-body-tertiary welcomeBody">
        <p className="cursorPointer mt-5" onClick={goToPreviousPage}>
          <i
            className="fa-solid fa-arrow-left"
            style={{ color: "#000000" }}
          ></i>
        </p>
        <img
          className="img-fluid mx-auto d-block welcomeImage"
          alt="logo"
          src={girlchat}
        />
        <div className="text-center mt-5">
          <h5 className="welcomeImage text-secondary">
            <b>Sample heading 3</b>
          </h5>
          <p className="mt-3">Sample text for onboarding screen</p>
        </div>
        <div className="text-center mt-5">
          <span className="m-2">
            <i
              className="fa-solid fa-circle fa-2xs"
              style={{ color: "#e6e6e6" }}
            ></i>
          </span>
          <span className="m-2 page">
            <i
              className="fa-solid fa-circle fa-xs"
              style={{ color: "#e6e6e6" }}
            ></i>
          </span>
          <span className="m-2">
            <i
              className="fa-solid fa-circle fa-2xs"
              style={{ color: "#00d970" }}
            ></i>
          </span>
        </div>
        <div className="mt-5">
          <button className="btn w-100 rounded-5 continueBtn" onClick={goToAgreePage}><b>Continue</b></button>
        </div>
      </div>
    </div>
  );
};
export default Welcome3;
