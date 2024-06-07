import MiddleRectangle from "@/components/Common/Rectangle/Middle";
import * as Styled from "./style";
import LargeRectangle from "@/components/Common/Rectangle/Large";
import Signup from "@/components/Register";

export default function RegisterPage() {
  return (
    <Styled.Container>
      <Styled.input>
        <Signup />
        <MiddleRectangle />
        <LargeRectangle />
      </Styled.input>
    </Styled.Container>
  );
}
