import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_main.svg";
import register from "../assets/logo_register.svg";
import ban from "../assets/logo_ban.svg";
import declare from "../assets/logo_declare.svg";
import logout from "../assets/logo_logout.svg";
import EventRequestList from "./manager/EventRequestList";
import BannedUserList from "./manager/BannedUserList";
import ReportedUserList from "./manager/ReportedUserList";
import "../css/MainPage.css";

function MainPage() {
  const [activeMenu, setActiveMenu] = useState("register");

  const renderContent = () => {
    switch (activeMenu) {
      case "register":
        return <EventRequestList />;
      case "ban":
        return <BannedUserList />;
      case "declare":
        return <ReportedUserList />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Manager
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default MainPage;

interface ActiveMenuProps{
  activeMenu:any;
  setActiveMenu:any;
}

function Manager({ activeMenu, setActiveMenu }:ActiveMenuProps) {
  const navigate = useNavigate();

  return (
    <>
      <aside className="sidebar">
        <img
          src={logo}
          alt="로고 출력 실패"
          style={{
            width: "60px",
            height: "60px",
            margin: "10px 10px 80px 10px",
          }}
        />
        <div>
          <div
            className={`menu-select ${activeMenu === "register" ? "active" : ""}`}
            onClick={() => setActiveMenu("register")}
          >
            <img src={register} alt="등록 사진 실패" className="menu-image" />
            <div className="menu-item">행사 등록 요청 목록</div>
          </div>
          <div
            className={`menu-select ${activeMenu === "ban" ? "active" : ""}`}
            onClick={() => setActiveMenu("ban")}
          >
            <img src={ban} alt="정지 사진 실패" className="menu-image" />
            <div className="menu-item">사용자 정지 목록</div>
          </div>
          <div
            className={`menu-select ${activeMenu === "declare" ? "active" : ""}`}
            onClick={() => setActiveMenu("declare")}
          >
            <img src={declare} alt="신고 사진 실패" className="menu-image" />
            <div className="menu-item">사용자 신고 목록</div>
          </div>
        </div>
        <div className="user">
          <span className="username">관리자 님</span>
          <img
            src={logout}
            alt="로그아웃 사진 실패"
            className="logout-button"
            onClick={() => {
              if (window.confirm("로그아웃 하시겠습니까?")) {
                navigate("/");
              }
            }}
          />
        </div>
      </aside>
    </>
  );
}
