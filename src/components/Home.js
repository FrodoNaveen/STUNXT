import Time from "./Time";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";


const Home = () => {


  return (

    <div className="bg-body-secondary card mt-5 phoneSize">
      <Time />
      <MenuBar />
      <Navbar />
    </div >
  );


};
export default Home;