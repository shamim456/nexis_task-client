import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Component/SignIn/SignIn";
import Signup from "./Component/Signup/Signup";
import AttendanceInfo from "./Component/AttendanceInfo/AttendanceInfo";
import Home from "./Component/home/Home";
import NavBar from "./Component/Shared/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/test"
          element={<AttendanceInfo></AttendanceInfo>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
