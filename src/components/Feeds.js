import Time from "./Time";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";

const Feeds = () => {

  const index = 1
  return (
    <div className="mainContainer bg-body-secondary card mt-5 phoneSize">
      <Time />
      <MenuBar />
      <h1>Feeds</h1>
      <Navbar index={index} />
    </div>
  );
};
export default Feeds;
