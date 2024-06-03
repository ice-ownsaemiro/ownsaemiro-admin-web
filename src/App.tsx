import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

import Signup from './components/Signup';
import FindPW from './components/FindPW';
import LogIn from './components/Login';
import MainPage from './components/MainPage';

import './css/StartPage.css';
import logo from './assets/logo_main.svg';

// Vite는 참조할 때 절대경로로 입력해야함
// 환경변수 : VITE_API_KEY = ''로 사용

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div style={{display: "flex", justifyContent: "center", height:"100vh", backgroundColor:"#E2E9F0"}}>
            {
              showForm ? (
                <div style={{display: "flex", alignItems: "center"}}>
                  <LogIn/>
                </div>
              ) : (
                <div style={{display: "flex", alignItems: "end"}}>
                  <TitleContainer/>
                  <img src={logo} alt="로고 출력 실패" style={{width: "25vw", height: "25vh", position:"absolute", top:"200px", right:"10%", zIndex:"10"}}/>
                  
                  <button className="start-button" onClick={()=>{setShowForm(true);}}>시작하기</button>
                </div>
              )
            }
            <TitleRectangle/>
          </div>
        }/>
        <Route path="/signup" element={
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", height:"100vh", backgroundColor:"#E2E9F0"}}>
            <Signup/>
            <TitleRectangle/>
          </div>
        }/>
        <Route path="/findPW" element={
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", height:"100vh", backgroundColor:"#E2E9F0"}}>
            <FindPW/>
            <TitleRectangle/>
          </div>
        }/>
        <Route path="/mainpage" element={
          <MainPage/>
        }/>
      </Routes>
    </>
  );
}

function TitleContainer(){
  let Titlecontainer = styled.div`
    position: absolute;
    top: 200px;
    left: 15%;
    z-index: 5;
    display: grid;
    align-items: center;
  `;
  
  let Title = styled.div`
    font-weight: bold;
    color: #555;
  `;

  return (
    <Titlecontainer>
      <Title style={{fontSize:"1.7vw", marginLeft:"0.5vw"}}>안심 거래 플랫폼</Title>
      <div style={{display:"flex", alignItems:"end"}}>
        <Title style={{fontSize:"5vw", margin:"0px"}}>온새미로</Title>
        <Title style={{fontSize:"1.5vw", marginLeft:"15px", marginBottom:"5px"}}>OWNSAEMIRO</Title>
      </div>
    </Titlecontainer>
  )
}

function TitleRectangle() {
  let Rectangle13 = styled.div`
    position: absolute;
    left: -180px;
    bottom: 40px;

    width: 100vw;
    height: 30vh;
    border-radius: 500px;

    background: linear-gradient(90deg, rgba(87, 111, 215, 30%), #576FD7);
    transform: rotate(-5deg);
  `;

  let Rectangle24 = styled.div`
    position: absolute;
    left: 50px;
    bottom: 0px;
    z-index: 0;

    width: 90vw;
    height: 25vh;
    border-radius: 500px;

    background: linear-gradient(90deg, #677DDD, #2240AA);
    transform: rotate(20.74deg);
  `;

  return (
    <div>
      {/* 왼쪽 위에서 오른쪽 아래로 내려가는 도형 */}
      <Rectangle13/>
      {/* 왼쪽 아래에서 오른쪽 위로 올라가는 도형 */} 
      <Rectangle24/>
    </div>
  );
};

export default App;
