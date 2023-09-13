import Time from "./Time";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";

const Events = () => {

  const index = 2
  return (
    <div className="mainContainer bg-body-secondary card mt-5 phoneSize">
      <Time />
      <MenuBar />
      <h1>Events</h1>
      <Navbar index={index} />
    </div>
  );
};
export default Events;
