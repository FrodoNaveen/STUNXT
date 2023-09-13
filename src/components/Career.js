import Time from "./Time";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";

const Career = () => {

  const index = 4
  return (
    <div className="mainContainer bg-body-secondary card mt-5 phoneSize">
      <Time />
      <MenuBar />
      <h1>Career</h1>
      <Navbar index={index} />
    </div>
  );
};
export default Career;
