import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/StartPage.css";
import logo from "../../assets/logo_login.svg";

function LogIn() {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (ID === "managerID" && PW === "managerPW") {
      alert("관리자 로그인 성공");
      navigate("/mainpage1");
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div className="login">
      <div>
        <div style={{ display: "flex" }}>
          <img
            src={logo}
            alt="로고 출력 실패"
            style={{ marginBottom: "30px", color: "#576FD7" }}
          />
          <div style={{ marginLeft: "auto", marginTop: "10px" }}>
            {/* 관리자 선택 버튼 */}
            <text
              className="manager-page"
            >
              {" "}
              관리자로 로그인{" "}
            </text>
          </div>
        </div>

        {/* ID, PW 입력 Form */}
        <form onSubmit={handleLogin}>
          <div>
            <div style={{ color: "#999" }}>아이디</div>
            <input
              type="text"
              name="ID"
              className="login-text"
              value={ID}
              onChange={(e) => {
                setID(e.target.value);
              }}
            />
          </div>
          <div style={{ marginTop: "25px" }}>
            <div style={{ color: "#999" }}>비밀번호</div>
            <input
              type="password"
              name="PW"
              className="login-text"
              value={PW}
              onChange={(e) => {
                setPW(e.target.value);
              }}
            />
          </div>
          <p>
            <input type="submit" value="로그인" className="login-button" />
          </p>
        </form>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            className="signup-button right-align"
            onClick={() => {
              navigate("/manager_signup");
            }}
          >
            회원가입
          </button>
          |
          <button
            className="signup-button left-align"
            onClick={() => {
              navigate("/manager_findPW");
            }}
          >
            비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
