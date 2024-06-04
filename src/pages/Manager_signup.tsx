import React from "react";
import TitleRectangle from "../components/startpage_comp/TitleRectangle";
import Signup from "../components/startpage_comp/Signup";

function Managersignup() {
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
        <TitleRectangle />
        <Signup />
      </div>
    </div>
  );
}

export default Managersignup;
