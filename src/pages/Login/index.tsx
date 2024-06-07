import LargeRectangle from "@/components/Common/Rectangle/Large";
import MiddleRectangle from "@/components/Common/Rectangle/Middle";
import LoginContainer from "@/components/Login";
import * as Styled from "./style";

export default function LoginPage() {
  return (
    <Styled.Container>
      <Styled.input>
        <LoginContainer />
        <MiddleRectangle />
        <LargeRectangle />
      </Styled.input>
    </Styled.Container>
  );
}
