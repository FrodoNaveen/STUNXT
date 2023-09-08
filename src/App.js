import { Routes, Route } from "react-router-dom"
import './App.css';
import Welcome from "./components/Welcome";
import Welcomee2 from "./components/Welcomee2";
import Welcome3 from "./components/Welcome3";
import Agreepage from "./components/Agreepage";
import Verification from "./components/Verification.js";
import Otppage from "./components/Otppage";
import Personaldetailspage1 from "./components/Personaldetailspage1";
import Personaldetailspage2 from "./components/Personaldetailspage2";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Welcome />}></Route>
        <Route path="/*" element={<Welcome />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/welcome2" element={<Welcomee2 />}></Route>
        <Route path="/welcome3" element={<Welcome3 />}></Route>
        <Route path="/agree" element={<Agreepage />}></Route>
        <Route path="/verification" element={<Verification />}></Route>
        <Route path="/otp" element={<Otppage />}></Route>
        <Route path="personaldetailspage" element={<Personaldetailspage1 />}></Route>
        <Route path="personaldetailspage2" element={<Personaldetailspage2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
