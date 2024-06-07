import * as Styled from "./style";
import { useRecoilValue } from "recoil";
import { useFetchRegisterDetailEvent } from "@/hooks/useFetchRegisterDetailEvent";
import { adminRegisterDetailState } from "@/atoms/atoms";

interface Props {
  id: number;
  open: boolean;
  handleClose: () => void;
}

export default function Modal({ id, open, handleClose }: Props) {
  const state = useRecoilValue(adminRegisterDetailState);

  useFetchRegisterDetailEvent(id);

  if (!open) return null;

  return (
    <Styled.ModalOverlay>
      <Styled.ModalContent>
        <Styled.FormContainer>
          <Styled.Label>공연명</Styled.Label>
          <Styled.Info>{state.name}</Styled.Info>

          <Styled.Label>공연 날짜</Styled.Label>
          <Styled.Info>{state.duration}</Styled.Info>

          <Styled.Label>공연 시간</Styled.Label>
          <Styled.Info>{state.running_time} 분</Styled.Info>

          <Styled.Label>공연 장소</Styled.Label>
          <Styled.Info>{state.address}</Styled.Info>

          <Styled.Label>주최자 닉네임</Styled.Label>
          <Styled.Info>{state.host_nickname}</Styled.Info>

          <Styled.Label>공연 설명</Styled.Label>
          <Styled.Description>{state.description}</Styled.Description>

          <Styled.ButtonContainer>
            <Styled.ClosedButton onClick={handleClose}>
              닫기
            </Styled.ClosedButton>
          </Styled.ButtonContainer>
        </Styled.FormContainer>
      </Styled.ModalContent>
    </Styled.ModalOverlay>
  );
}
