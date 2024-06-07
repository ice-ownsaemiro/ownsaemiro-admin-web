// src/components/Signup/Signup.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo_login.svg";
import check from "@/assets/logo_check.svg";
import error from "@/assets/logo_error.svg";
import * as Styled from "./style";
import { instance } from "@/apis/axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isIdCheck, setIsIdCheck] = useState<boolean | null>(null);
  const [isPasswordCheck, setIsPasswordCheck] = useState<boolean | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const handleSerialIdCheck = async () => {
    try {
      const response = await instance.get(`/api/auth/check?serial_id=${id}`);

      if (response.data.data.available) {
        setIsIdCheck(true);
      } else {
        setIsIdCheck(false);
      }
    } catch (error) {
      setIsIdCheck(false);
    }
  };

  const handleSubmit = async () => {
    if (
      isIdCheck &&
      password === confirmPassword &&
      phoneNumber &&
      nickname &&
      name
    ) {
      try {
        const response = await instance.post("/api/auth/sign-up", {
          name: name,
          serial_id: id,
          password: password,
          phone_number: phoneNumber,
          nickname: nickname,
          role: "SELLER",
        });

        if ((response.status = 200)) {
          alert("회원가입 완료되었습니다.\n\n로그인 해주세요.");
          navigate("/");
        } else {
          alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
      } catch (error) {
        console.error("회원가입 요청 실패", error);
        alert("회원가입 요청 중 오류가 발생했습니다.");
      }
    } else {
      alert("입력 정보를 다시 확인해주세요.");
    }
  };

  return (
    <Styled.SignupContainer>
      <img
        src={logo}
        alt="로고 출력 실패"
        style={{ margin: "15px", color: "#576FD7" }}
      />

      <Styled.FormContainer>
        {/* 이름 */}
        <Styled.LoginLabel>이름</Styled.LoginLabel>
        <Styled.LoginInput
          style={{ width: "240px" }}
          type="text"
          placeholder="이름(실명)을 입력해주세요."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        {/* 아이디 */}
        <Styled.LoginLabel>아이디</Styled.LoginLabel>
        <div style={{ display: "flex" }}>
          <Styled.LoginInput
            style={{ width: "240px" }}
            type="text"
            placeholder="사용할 아이디를 입력해주세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Styled.SignupCheckButton type="button" onClick={handleSerialIdCheck}>
            중복확인
          </Styled.SignupCheckButton>
        </div>
        {
          // 아이디 체크 완료 상태 출력
          isIdCheck === true ? (
            <Styled.CheckContainer>
              <img src={check} alt="체크 출력 실패" />
              <div>사용 가능한 아이디입니다.</div>
            </Styled.CheckContainer>
          ) : isIdCheck === false ? (
            <Styled.ErrorContainer>
              <img src={error} alt="체크 출력 실패" />
              <div>이미 사용 중인 아이디입니다.</div>
            </Styled.ErrorContainer>
          ) : (
            <div />
          )
        }

        {/* 비밀번호 */}
        <Styled.LoginLabel>비밀번호</Styled.LoginLabel>
        <Styled.LoginInput
          style={{ width: "320px", marginBottom: "10px" }}
          type="password"
          placeholder="영문+숫자 조합 8자리 이상 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Styled.LoginInput
          style={{ width: "320px" }}
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setIsPasswordCheck(true);
          }}
        />
        {password !== confirmPassword && isPasswordCheck !== null ? (
          <Styled.ErrorContainer>
            <img src={error} alt="체크 출력 실패" />
            <div>비밀번호를 다시 입력해주세요.</div>
          </Styled.ErrorContainer>
        ) : password === confirmPassword && isPasswordCheck !== null ? (
          <Styled.CheckContainer>
            <img src={check} alt="체크 출력 실패" />
            <div>비밀번호가 일치합니다.</div>
          </Styled.CheckContainer>
        ) : (
          <div />
        )}
        <Styled.LoginLabel>닉네임</Styled.LoginLabel>
        <Styled.LoginInput
          style={{ width: "240px" }}
          type="text"
          placeholder="사용할 닉네임을 입력해주세요."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Styled.LoginLabel>전화번호</Styled.LoginLabel>
        <Styled.LoginInput
          style={{ width: "240px" }}
          type="text"
          placeholder="전화번호를 입력해주세요."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Styled.FormContainer>
      <Styled.SignupEndButton
        type="button"
        onClick={handleSubmit}
        disabled={!isIdCheck || password !== confirmPassword}
      >
        시작하기
      </Styled.SignupEndButton>
    </Styled.SignupContainer>
  );
}
