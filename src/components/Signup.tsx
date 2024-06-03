import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";

import '../css/Signup.css';
import logo from '../assets/logo_login.svg'
import check from '../assets/logo_check.svg';
import error from '../assets/logo_error.svg';

function Signup(){
  /* 판매자 회원가입을 위한 useState */
  const [isSellerSignup, setIsSellerSignup] = useState(true);
  /* 관리자 회원가입을 위한 useState */
  const [isManagerSignup, setIsManagerSignup] = useState(false); 

  const [name, setName] = useState(''); // 이름 저장
  const [email, setEmail] = useState(''); // 이메일 저장
  const [saveID, setSaveID] = useState(''); // saveID 저장
  const [savePW, setSavePW] = useState(''); // savePW 저장
  const [confirmPW, setConfirmPW] = useState(''); // savePW 일치 저장
  
  /* 이메일 인증을 위한 useState */
  const [isEmailCheck, setIsEmailVerified] = useState<boolean | null>(null); // 처음에는 인증 상태가 없기 때문에 null로 설정
  /* saveID 중복 체크를 위한 useState */
  const [isIDCheck, setIsIdUnique] = useState<boolean | null>(null); // 처음에는 인증 상태가 없기 때문에 null로 설정
  /* savePW 일치 체크를 위한 useState */
  const [isPWCheck, setIsPWCheck] = useState<boolean | null>(null);

  const navigate = useNavigate();

  const handleEmailVerification = () => {
    // GET : 서버로부터 데이터 가져오기
    // POST : 서버로 데이터 보내기

    setIsEmailVerified(true);
    // axios.post("http://api/auth/sign-in", {
    //   ID: saveID,
    //   PW: savePW
    // })
    // .then((res)=>{
    //     console.log(res);
    // })
    // .catch((e)=>{
    //   alert(e);
    // })
  };

  const handleIDCheck = () => {
    setIsIdUnique(true);
    // axios.get(`https://api/auth/check?serial_id=${saveID}`)
    // .then((res)=>{
    //   // res.data를 이용한 중복되는 아이디 체크 기능 추가
    // })
    // .catch((e)=>{
    //   alert(e);
    // })
  };

  const handleSubmit = () => {
    if (isEmailCheck && isIDCheck && savePW === confirmPW) {
      // axios.post("http://api/auth/sign-up", {
      //   ID: saveID,
      //   PW: savePW
      // })
      // .then((res)=>{
      //     console.log(res);
      // })
      // .catch((e)=>{
      //   alert(e);
      // })
      alert("회원가입 완료되었습니다.\n\n로그인 해주세요.");
      navigate('/');
    } else {
      alert("Form validation failed");
    }
  };

  return (
    <div className="signup">
      <img src={logo} alt="로고 출력 실패" style={{margin:"15px", color:"#576FD7"}}/>
      <div className="tab">
        <button className={`tablinks ${isSellerSignup ? 'tab-active':''}`}
          onClick={()=>{
            setIsSellerSignup(true);
            setIsManagerSignup(false);

            setName("");
            setEmail("");
            setSaveID("");
            setSavePW("");
            setConfirmPW("");
          }}>판매자</button>
        <button className={`tablinks ${isManagerSignup ? 'tab-active':''}`}
          onClick={()=>{
            setIsManagerSignup(true);
            setIsSellerSignup(false);

            setName("");
            setEmail("");
            setSaveID("");
            setSavePW("");
            setConfirmPW("");
          }}>관리자</button>
      </div>
      <form className="form">
        {/* 이름 */}
        <div className="login-label">이름</div>
        <input
          className="login-text"
          style={{width:"240px"}}
          type="text"
          placeholder="이름(실명)을 입력해주세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* 이메일 */}
        <div className="login-label">이메일</div>
        <div style={{display:"flex"}}>
          <input
            className="login-text"
            style={{width:"320px"}}
            type="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" className="signup-check" onClick={handleEmailVerification}>인증하기</button>
        </div>
        { // 이메일 인증 완료 시 출력
          isEmailCheck ? 
          <div className="check">
            <img src={check} alt="체크 출력 실패" style={{marginRight:"5px"}}/>
            <div>인증이 완료되었습니다.</div>
          </div> : <div/>
        }

        {/* 아이디 */}
        <div className="login-label">아이디</div>
        <div style={{display:"flex"}}>
          <input
            className="login-text"
            style={{width:"240px"}}
            type="text"
            placeholder="사용할 아이디를 입력해주세요."
            value={saveID}
            onChange={(e) => setSaveID(e.target.value)}
          />
          <button type="button" className="signup-check" onClick={handleIDCheck}>중복확인</button>
        </div>
        { // 아이디 체크 완료 상태 출력
          isIDCheck === true ? 
          <div className="check">
            <img src={check} alt="체크 출력 실패" style={{marginRight:"5px"}}/>
            <div>사용 가능한 아이디입니다.</div>
          </div> : 
          isIDCheck === false ? (
            <div className="error">
              <img src={error} alt="체크 출력 실패" style={{marginRight:"5px"}}/>
              <div>이미 사용 중인 아이디입니다.</div>
            </div>
          ) : <div/>
        }

        {/* 비밀번호 */}
        <div className="login-label">비밀번호</div>
        <input
          className="login-text"
          style={{width:"320px", marginBottom:"10px"}}
          type="password"
          placeholder="영문+숫자 조합 8자리 이상 입력해주세요."
          value={savePW}
          onChange={(e) => setSavePW(e.target.value)}
        />
        <input
          className="login-text"
          style={{width:"320px"}}
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPW}
          onChange={
            (e) => {
              setConfirmPW(e.target.value);
              setIsPWCheck(true);
            }
          }
        />
        {
          (savePW !== confirmPW) && isPWCheck !== null ?
          <div className="error">
            <img src={error} alt="체크 출력 실패" style={{marginRight:"5px"}}/>
            <div>비밀번호를 다시 입력해주세요.</div>
          </div> : 
          (savePW === confirmPW) && isPWCheck !== null ?
          <div className="check">
            <img src={check} alt="체크 출력 실패" style={{marginRight:"5px"}}/>
            <div>비밀번호가 일치합니다.</div>
          </div> : <div/>
        }
      </form>
      <button type="button" className="signup-end" onClick={handleSubmit} disabled={!isEmailCheck || !isIDCheck || savePW !== confirmPW}>시작하기</button>
    </div>
  );
}

export default Signup;