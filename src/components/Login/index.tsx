import * as Styled from "./style";
import logo from "@/assets/logo_login.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { instance } from "@/apis/axios";

interface LoginFormProps {
  serial_id: string;
  password: string;
}

export default function LoginContainer() {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginFormProps>({
    serial_id: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("serial_id", form.serial_id);
    formData.append("password", form.password);

    try {
      const response = await instance.post("/api/auth/sign-in", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("로그인 성공");
        navigate("/main");
      } else if (response.status === 401) {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("로그인 요청 실패", error);
      alert("로그인 요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <Styled.LoginContainer>
      <Styled.LogoContainer>
        <img src={logo} alt="로고 출력 실패" />
      </Styled.LogoContainer>
      <Styled.FormContainer onSubmit={handleSubmit}>
        <div>
          <div style={{ color: "#999" }}>아이디</div>
          <input
            type="text"
            name="serial_id"
            className="login-text"
            value={form.serial_id}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginTop: "25px" }}>
          <div style={{ color: "#999" }}>비밀번호</div>
          <input
            type="password"
            name="password"
            className="login-text"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <p>
          <input type="submit" value="로그인" className="login-button" />
        </p>
      </Styled.FormContainer>

      <Styled.ButtonContainer>
        <Styled.RegisterButton onClick={() => navigate("/register")}>
          회원가입
        </Styled.RegisterButton>
      </Styled.ButtonContainer>
    </Styled.LoginContainer>
  );
}
