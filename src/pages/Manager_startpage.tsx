import React from "react";
import { Link } from "react-router-dom";
import TitleRectangle from "../components/startpage_comp/TitleRectangle";
import TitleContainer from "../components/startpage_comp/TitleContainer";
import logo from ".././assets/logo_main.svg";

function ManagerStartPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#E2E9F0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "end" }}>
        <TitleContainer />
        <img
          src={logo}
          alt="로고 출력 실패"
          style={{
            width: "25vw",
            height: "25vh",
            position: "absolute",
            top: "200px",
            right: "10%",
            zIndex: "10",
          }}
        />
        <Link to="/manager_loginpage" className="start-button">
          시작하기
        </Link>
        <TitleRectangle />
      </div>
    </div>
  );
}

export default ManagerStartPage;
