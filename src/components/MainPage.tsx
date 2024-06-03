import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo_main.svg";
import register from "../assets/logo_register.svg";
import ban from "../assets/logo_ban.svg";
import declare from "../assets/logo_declare.svg";
import logout from "../assets/logo_logout.svg";
import sellhis from "..//assets/logo_sellhis.svg";
import sellreq from "..//assets/logo_sellreq.svg";
import EventRequestList from "./manager/EventRequestList";
import BannedUserList from "./manager/BannedUserList";
import ReportedUserList from "./manager/ReportedUserList";
import EventModal from "./manager/Modal/EventModal";
import SelledHistory from "./seller/SelledHistory";
import SellRequest from "./seller/SellRequest";

import "../css/MainPage.css";

function MainPage() {
  const location = useLocation();
  const { loginType } = location.state || {};

  return (
    <div className="container">
      {loginType === "manager" ? <Manager /> : <Seller />}
    </div>
  );
}

export default MainPage;

function Manager() {
  const [isRegister, setIsRegister] = useState(true); // 행사 등록 요청 목록 useState
  const [isBan, setIsBan] = useState(false); // 사용자 정지 목록 useState
  const [isDeclare, setIsDeclare] = useState(false); // 사용자 신고 목록 useState

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
            className={`menu-select ${isRegister ? "active" : ""}`}
            onClick={() => {
              setIsRegister(true);
              setIsBan(false);
              setIsDeclare(false);
            }}
          >
            <img src={register} alt="등록 사진 실패" className="menu-image" />
            <div className="menu-item">행사 등록 요청 목록</div>
          </div>
          <div
            className={`menu-select ${isBan ? "active" : ""}`}
            onClick={() => {
              setIsRegister(false);
              setIsBan(true);
              setIsDeclare(false);
            }}
          >
            <img src={ban} alt="정지 사진 실패" className="menu-image" />
            <div className="menu-item">사용자 정지 목록</div>
          </div>
          <div
            className={`menu-select ${isDeclare ? "active" : ""}`}
            onClick={() => {
              setIsRegister(false);
              setIsBan(false);
              setIsDeclare(true);
            }}
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
              if (confirm("로그아웃 하시겠습니까?")) {
                navigate("/");
              }
            }}
          />
        </div>
      </aside>
      {isRegister && <EventRequestList />}
      {isBan && <BannedUserList />}
      {isDeclare && <ReportedUserList />}
    </>
  );
}
function Seller() {
  const [isSelled, setIsSelled] = useState(true); // 판매 이력 useState
  const [isSellRequest, setIsSellRequest] = useState(false); // 판매 요청 useState

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
            className={`menu-select ${isSelled ? "active" : ""}`}
            onClick={() => {
              setIsSelled(true);
              setIsSellRequest(false);
            }}
          >
            <img
              src={sellhis}
              alt="판매 이력 사진 실패"
              className="menu-image"
            />
            <div className="menu-item">판매 이력</div>
          </div>
          <div
            className={`menu-select ${isSellRequest ? "active" : ""}`}
            onClick={() => {
              setIsSelled(false);
              setIsSellRequest(true);
            }}
          >
            <img
              src={sellreq}
              alt="판매 요청 사진 실패"
              className="menu-image"
            />
            <div className="menu-item">판매 요청</div>
          </div>
        </div>
        <div className="user">
          <span className="username">판매자 님</span>
          <img
            src={logout}
            alt="로그아웃 사진 실패"
            className="logout-button"
            onClick={() => {
              if (confirm("로그아웃 하시겠습니까?")) {
                navigate("/");
              }
            }}
          />
        </div>
      </aside>
      {isSelled && <SelledHistory />}
      {isSellRequest && <SellRequest />}
    </>
  );
}
