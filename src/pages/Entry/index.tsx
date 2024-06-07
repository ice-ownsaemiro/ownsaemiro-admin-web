import { useNavigate } from "react-router-dom";
import * as Styled from "./style";
import logo from "@/assets/logo_main.svg";
import MiddleRectangle from "@/components/Common/Rectangle/Middle";
import LargeRectangle from "@/components/Common/Rectangle/Large";

export default function EntryPage() {
  const navigate = useNavigate();

  const handleStartButton = () => {
    navigate("/login");
  };

  return (
    <Styled.Container>
      <Styled.Title>
        <Styled.TitleContainerWrapper>
          <Styled.TitleTextMedium>안심 거래 플랫폼</Styled.TitleTextMedium>
          <Styled.TitleFlexContainer>
            <Styled.TitleTextLarge>온새미로</Styled.TitleTextLarge>
            <Styled.TitleTextSmall>OWNSAEMIRO</Styled.TitleTextSmall>
          </Styled.TitleFlexContainer>
        </Styled.TitleContainerWrapper>
        <div>
          <MiddleRectangle />
          <LargeRectangle />
        </div>
        <Styled.Image src={logo} alt="로고 출력 실패" />
        <Styled.Button onClick={handleStartButton}>시작하기</Styled.Button>
      </Styled.Title>
    </Styled.Container>
  );
}
