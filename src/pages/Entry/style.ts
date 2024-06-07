import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #e2e9f0;
  overflow: hidden;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  align-items: end;
`;

export const Image = styled.img`
    width: 35vw;
    height: 35vh;
    position: absolute;
    top: 200px;
    right: 10%;
    z-index: 10;
`;

export const Button = styled.button`
  margin-bottom: 100px;
  z-index: 10;
  display: flex;
  font-size: 22px;
  font-weight: bold;
  color: white;
  background-color: transparent;
  border: 2px solid;
  padding: 8px 10px;
  border-radius: 15px;
  cursor: pointer;
  justify-content: flex-end;
  transition: background-color 0.3s;
  width: auto;
  &:hover {
    background-color: #357ab8;
    border: 2px solid #357ab8;
  }
`;

export const TitleContainerWrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 15%;
  z-index: 5;
  display: grid;
  align-items: center;
`;

export const TitleTextLarge = styled.div`
  font-size: 5vw;
  margin: 0px;
  font-weight: bold;
  color: #555;
`;

export const TitleTextMedium = styled.div`
  font-size: 1.7vw;
  margin-left: 0.5vw;
  font-weight: bold;
  color: #555;
`;

export const TitleTextSmall = styled.div`
  font-size: 1.5vw;
  margin-left: 15px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

export const TitleFlexContainer = styled.div`
  display: flex;
  align-items: end;
`;