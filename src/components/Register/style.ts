import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  margin: 0;
  padding: 35px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const TabLink = styled.button`
  width: 220px;
  padding: 10px 20px;
  margin: 20px 10px;
  border: 3px solid transparent;
  background: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #999;

  &:hover {
    border-bottom: 3px solid #3f51b5;
  }

  &.tab-active {
    border-bottom: 3px solid #3f51b5;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginLabel = styled.div`
  font-size: 17px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #999;
`;

export const LoginInput = styled.input`
  border-radius: 5px;
  border: 2px solid #e5e5e5;
  font-size: 17px;
  color: #555;
  width: 320px;
  height: 30px;
  padding: 5px 8px;
  outline-color: #576fd7;
  margin-bottom: 15px;
`;

export const SignupCheckButton = styled.button`
  height: 45px;
  color: white;
  font-size: 17px;
  background-color: #576fd7;
  border: none;
  border-radius: 10px;
  margin-left: 10px;
  padding: 5px 20px;
  cursor: pointer;
`;

export const SignupEndButton = styled.button`
  color: white;
  font-size: 20px;
  margin-top: 50px;
  background-color: #576fd7;
  width: 70%;
  border: none;
  border-radius: 50px;
  padding: 15px 90px;
  cursor: pointer;

  &:disabled {
    background-color: #e5e5e5;
    transition: background-color 0.3s;
  }
`;

export const CheckContainer = styled.div`
  display: flex;
  color: #1ace22;
  margin: 5px;

  img {
    margin-right: 5px;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  color: #e87c7b;
  margin: 5px;

  img {
    margin-right: 5px;
  }
`;
