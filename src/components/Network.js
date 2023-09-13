import Time from "./Time";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";

const Network = () => {
  return (
    <div className="mainContainer bg-body-secondary card mt-5 phoneSize">
      <Time />
      <MenuBar />

      <Navbar />
    </div>
  );
};
export default Network;
