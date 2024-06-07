import React, { useState } from "react";
import back_logo from "@/assets/logo_back.svg";
import * as Styled from "./style";
import { instance } from "@/apis/axios";
import { useRecoilValue } from "recoil";
import { userNicknameState } from "@/atoms/atoms";

interface SellRequestWriteProps {
  open: boolean;
  handleClose: () => void;
  handleSave: (newItem: any) => void;
}

export const SellRequestWrite: React.FC<SellRequestWriteProps> = ({
  open,
  handleClose,
  handleSave,
}) => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [seat, setSeat] = useState("");
  const [runningTime, setRunningTime] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("MUSICAL");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [eventImage, setEventImage] = useState<File | null>(null);
  const username = useRecoilValue(userNicknameState);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEventImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    const requestJson = {
      event_name: name,
      start_date: startDate,
      end_date: endDate,
      seat_cnt: seat,
      price: price,
      running_time: runningTime,
      address: address,
      category: category,
      description: description,
      host_name: username.nickname,
      rating: rating,
    };

    console.log(requestJson);

    if (eventImage) {
      formData.append("image", eventImage as Blob);
    }
    formData.append(
      "data",
      new Blob([JSON.stringify(requestJson)], { type: "application/json" })
    );

    try {
      const response = await instance.post("/api/seller/apply", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("신청이 완료되었습니다.");

        const newItem = response.data.data;

        handleSave(newItem);
        handleClose();
      } else {
        alert("신청에 실패했습니다.");
      }
    } catch (error) {
      console.error("신청 요청 실패", error);
      alert("신청 요청 중 오류가 발생했습니다.");
    }
  };

  if (!open) return null;

  return (
    <Styled.ModalOverlay>
      <Styled.ModalContent>
        <Styled.CloseButton onClick={handleClose}>
          <img src={back_logo} alt="Back Logo" />
        </Styled.CloseButton>
        <Styled.FormContainer>
          <Styled.Label htmlFor="eventName">공연명</Styled.Label>
          <Styled.Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Styled.Label htmlFor="eventDate">공연 날짜</Styled.Label>
          <Styled.DateRangeContainer>
            <Styled.Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span> ~ </span>
            <Styled.Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Styled.DateRangeContainer>

          <Styled.Label htmlFor="eventTime">공연 시간</Styled.Label>
          <Styled.TimeContainer>
            <Styled.Input
              type="text"
              value={runningTime}
              onChange={(e) => setRunningTime(e.target.value)}
            />
            <span>분</span>
          </Styled.TimeContainer>

          <Styled.Label htmlFor="eventPlace">공연 장소</Styled.Label>
          <Styled.Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Styled.AdditionalInfoContainer>
            <Styled.Label htmlFor="eventAge">관람등급</Styled.Label>
            <Styled.Input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </Styled.AdditionalInfoContainer>

          <Styled.AdditionalInfoContainer>
            <Styled.Label>가격</Styled.Label>
            <Styled.Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Styled.AdditionalInfoContainer>

          <Styled.AdditionalInfoContainer>
            <Styled.Label>좌석 수</Styled.Label>
            <Styled.Input
              type="number"
              value={seat}
              onChange={(e) => setSeat(e.target.value)}
            />
          </Styled.AdditionalInfoContainer>

          <Styled.AdditionalInfoContainer>
            <Styled.Label>종류</Styled.Label>
            <Styled.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="MUSICAL">뮤지컬</option>
              <option value="EXHIBITION">전시</option>
              <option value="THEATER">연극</option>
              <option value="CONCERT">콘서트</option>
              <option value="SPORT">스포츠</option>
            </Styled.Select>
          </Styled.AdditionalInfoContainer>

          <Styled.ExplainContainer>
            <Styled.Label htmlFor="eventExplain">공연내용 요약</Styled.Label>
            <Styled.Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={500}
            />
          </Styled.ExplainContainer>

          <Styled.AdditionalInfoContainer>
            <Styled.Label htmlFor="eventImage">공연 이미지</Styled.Label>
            <Styled.Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Styled.AdditionalInfoContainer>

          <Styled.ButtonContainer>
            <Styled.SaveButton onClick={handleSubmit}>저장</Styled.SaveButton>
            <Styled.ClosedButton onClick={handleClose}>
              취소
            </Styled.ClosedButton>
          </Styled.ButtonContainer>
        </Styled.FormContainer>
      </Styled.ModalContent>
    </Styled.ModalOverlay>
  );
};
