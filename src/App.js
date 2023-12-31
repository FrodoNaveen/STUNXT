import { Routes, Route } from "react-router-dom";
import "./App.css";
import LogoLoader from "./components/LogoLoader";
import Welcome from "./components/Welcome";
import Welcomee2 from "./components/Welcomee2";
import Welcome3 from "./components/Welcome3";
import Agreepage from "./components/Agreepage";
import Verification from "./components/Verification.js";
import Otppage from "./components/Otppage";
import Personaldetailspage1 from "./components/Personaldetailspage1";
import Personaldetailspage2 from "./components/Personaldetailspage2";
import Loginas from "./components/Loginas";
import CollegeStudent from "./components/CollegeStudent";
import CollegeStaff from "./components/CollegeStaff";
import CollegeStaff2 from "./components/StaffPage2";
import CompanyDetails from "./components/CompanyDetails";
import Home from "./components/Home";
import Feeds from "./components/Feeds";
import Events from "./components/Events";
import Network from "./components/Network";
import Career from "./components/Career";
import EventDetailsPage from "./components/EventDetailsPage";
import ProfilePage from "./components/ProfilePage";
import ChatBox from "./components/ChatBox";
import GoalsPage from "./components/GoalsPage";
import Level1 from "./components/Levels/Level1";
import Level2 from "./components/Levels/Level2";
import Level3 from "./components/Levels/Level3";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<LogoLoader />}></Route>
        <Route path="/*" element={<LogoLoader />}></Route>
        <Route path="/logoloader" element={<LogoLoader />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/welcome2" element={<Welcomee2 />}></Route>
        <Route path="/welcome3" element={<Welcome3 />}></Route>
        <Route path="/agree" element={<Agreepage />}></Route>
        <Route path="/verification" element={<Verification />}></Route>
        <Route path="/otp" element={<Otppage />}></Route>
        <Route
          path="/personaldetailspage"
          element={<Personaldetailspage1 />}
        ></Route>
        <Route
          path="/personaldetailspage2"
          element={<Personaldetailspage2 />}
        ></Route>
        <Route path="/loginaspage" element={<Loginas />}></Route>
        <Route path="/student" element={<CollegeStudent />}></Route>
        <Route path="/staff" element={<CollegeStaff />}></Route>
        <Route path="/staff2" element={<CollegeStaff2 />}></Route>
        <Route path="/companylogin" element={<CompanyDetails />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/feeds" element={<Feeds />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/network" element={<Network />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/eventdetailspage" element={<EventDetailsPage />}></Route>
        <Route path="/profilepage" element={<ProfilePage />}></Route>
        <Route path="/chatbox" element={<ChatBox />}></Route>
        <Route path="/goalspage" element={<GoalsPage />}></Route>
        <Route path="/level1" element={<Level1 />}></Route>
        <Route path="/level2" element={<Level2 />}></Route>
        <Route path="/level3" element={<Level3 />}></Route>

      </Routes>
    </div>
  );
}

export default App;
