import Time from "./Time";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";

const Network = () => {

  const index = 3
  return (
    <div className="mainContainer bg-body-secondary card mt-5 phoneSize">
      <Time />
      <MenuBar />
      <h1>Network</h1>
      <Navbar index={index} />
    </div>
  );
};
export default Network;
