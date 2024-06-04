import React from "react";
import TitleRectangle from "../components/startpage_comp/TitleRectangle";
import Login from "../components/startpage_comp/Login";

function ManagerLoginPage() {
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Login />
        <TitleRectangle />
      </div>
    </div>
  );
}

export default ManagerLoginPage;
