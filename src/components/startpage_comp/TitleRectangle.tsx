import React from 'react';
import styled from 'styled-components';

const Rectangle13 = styled.div`
  position: absolute;
  left: -180px;
  bottom: 40px;
  width: 100vw;
  height: 30vh;
  border-radius: 500px;
  background: linear-gradient(90deg, rgba(87, 111, 215, 30%), #576fd7);
  transform: rotate(-5deg);
`;

const Rectangle24 = styled.div`
  position: absolute;
  left: 50px;
  bottom: 0px;
  z-index: 0;
  width: 90vw;
  height: 25vh;
  border-radius: 500px;
  background: linear-gradient(90deg, #677ddd, #2240aa);
  transform: rotate(20.74deg);
`;

const TitleRectangle: React.FC = () => (
  <div>
    <Rectangle13 />
    <Rectangle24 />
  </div>
);

export default TitleRectangle;
