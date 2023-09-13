import Time from "./Time";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";

const Events = () => {
  return (
    <div className="mainContainer bg-body-secondary card mt-5 phoneSize">
      <Time />
      <MenuBar />

      <Navbar />
    </div>
  );
};
export default Events;
