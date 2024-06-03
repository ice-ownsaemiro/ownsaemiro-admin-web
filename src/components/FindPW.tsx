import { useState } from "react";
import axios from 'axios';

import '../css/Signup.css';
import logo from '../assets/logo_login.svg'
import error from '../assets/logo_error.svg';

function FindPW(){
  /* 판매자 비밀번호 찾기 위한 useState */
  const [isSellerSignup, setIsSellerSignup] = useState(true);
  /* 관리자 비밀번호 찾기 위한 useState */
  const [isManagerSignup, setIsManagerSignup] = useState(false);

  const [name, setName] = useState('');
  const [ID, setID] = useState('');

  const [isIDError, setIsIDError] = useState<boolean | null>(null);

  const handleSubmit = () => {
    setIsIDError(true);
    // axios.get(`https://api/auth/findPW`)
    // .then((res)=>{
    //   // res.data를 이용한 비밀번호 찾기 기능 추가
    // })
    // .catch((e)=>{
    //   alert(e);
    // })
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
            setID("");
          }}>판매자</button>
        <button className={`tablinks ${isManagerSignup ? 'tab-active':''}`}
          onClick={()=>{
            setIsManagerSignup(true);
            setIsSellerSignup(false);

            setName("");
            setID("");
          }}>관리자</button>
      </div>

      <form className="form">
        <div className="login-label">이름</div>
        <div style={{display:"flex"}}>
          <input
            className="login-text"
            type="text"
            placeholder="이름(실명)을 입력해주세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="login-label">아이디</div>
        <input
          className="login-text"
          type="PW"
          placeholder="사용할 아이디를 입력해주세요."
          value={ID}
          onChange={(e) => setID(e.target.value)}
        />
        {
          isIDError ?
          <div className="error">
            <img src={error} alt="체크 출력 실패" style={{marginRight:"5px"}}/>
            <div>존재하지 않는 아이디입니다.</div>
          </div> : <div/>
        }
      </form>
      <button type="button" className="signup-end" onClick={handleSubmit} disabled={name === '' || ID === ''}>비밀번호 찾기</button>
    </div>
  );
}

export default FindPW;