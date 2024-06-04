import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Manager_signup";
import FindPW from "./pages/Manager_findpw";
import MainPage1 from "./pages/Manager_mainpage";
import StartPage from "./pages/Manager_startpage";
import ManagerLoginPage from "./pages/Manager_loginpage";
import MainPage from "./components/MainPage";
import TitleRectangle from "./components/startpage_comp/TitleRectangle";
import "./css/StartPage.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/manager_loginpage" element={<ManagerLoginPage />} />
      <Route path="/manager_signup" element={<Signup />} />
      <Route path="/manager_findPW" element={<FindPW />} />
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/mainpage1" element={<MainPage1 />} />

    </Routes>
  );
}

export default App;
