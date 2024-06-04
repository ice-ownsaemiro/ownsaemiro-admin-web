import React from "react";
import TitleRectangle from "../components/startpage_comp/TitleRectangle";
import FindPW from "../components/startpage_comp/FindPW";

function Managerfindpw() {
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
        <FindPW />
        <TitleRectangle />
      </div>
    </div>
  );
}

export default Managerfindpw;
