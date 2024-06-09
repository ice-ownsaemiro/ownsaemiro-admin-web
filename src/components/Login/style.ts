// src/components/LogIn/style.ts
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  padding: 40px 60px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  width: 100%;
  img {
    color: #576fd7;
  }

  .seller-page {
    margin-left: auto;
    margin-top: 10px;
    padding: 5px 25px;
    border: 0px;
    border-radius: 5px;
    background-color: #f0f0f0;
    color: #576fd7;
    font-weight: bold;
    transition:
      background-color 0.5s,
      color 0.5s;
  }
`;

export const FormContainer = styled.form`
  .login-text {
    border-radius: 5px;
    border: 2px solid #e5e5e5;
    font-size: 17px;
    color: #555;
    width: 400px;
    height: 30px;
    padding: 5px 8px;
    outline-color: #576fd7;
    margin-top: 5px;
  }

  .login-button {
    width: 100%;
    height: 45px;
    background-color: #576fd7;
    font-size: 22px;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    border: 0px solid #fff;
    margin-top: 15px;
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  .signup-button {
    width: 115px;
    height: 30px;
    background-color: transparent;
    border: 0px;
    border-radius: 5px;
    font-size: 15px;
    color: #999;
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: #576fd7;
      transition:
        background-color 0.3s,
        color 0.3s;
    }
  }
`;

export const RegisterButton = styled.button`
  width: 115px;
  height: 30px;
  background-color: transparent;
  border: 0px;
  border-radius: 5px;
  font-size: 13px;
  color: #999;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 30px;

  &:hover {
    color: #576fd7;
    transition:
      background-color 0.3s,
      color 0.3s;
  }
`;
