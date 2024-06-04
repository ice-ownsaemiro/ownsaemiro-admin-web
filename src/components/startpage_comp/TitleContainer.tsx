import React from 'react';
import styled from 'styled-components';

const TitleContainerWrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 15%;
  z-index: 5;
  display: grid;
  align-items: center;
`;

const TitleText = styled.div`
  font-weight: bold;
  color: #555;
`;

const TitleContainer: React.FC = () => (
  <TitleContainerWrapper>
    <TitleText style={{ fontSize: '1.7vw', marginLeft: '0.5vw' }}>안심 거래 플랫폼</TitleText>
    <div style={{ display: 'flex', alignItems: 'end' }}>
      <TitleText style={{ fontSize: '5vw', margin: '0px' }}>온새미로</TitleText>
      <TitleText style={{ fontSize: '1.5vw', marginLeft: '15px', marginBottom: '5px' }}>
        OWNSAEMIRO
      </TitleText>
    </div>
  </TitleContainerWrapper>
);

export default TitleContainer;
