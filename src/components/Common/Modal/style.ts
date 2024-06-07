import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Info = styled.div`
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  background-color: #f1f3f5;
`;

export const Description = styled.div`
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  background-color: #f8f9fa;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const ClosedButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #576fd7;
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;
