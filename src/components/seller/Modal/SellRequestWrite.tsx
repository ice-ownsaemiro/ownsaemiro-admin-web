import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import back_logo from "../../../assets/logo_back.svg";
import "../../../css/EventForm.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "1400px",
  maxHeight: "880px",
  width: "80vw",
  height: "70vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

interface SellRequestWriteProps {
  open: boolean;
  handleClose: () => void;
  handleSave: (newItem: any) => void;
}

const SellRequestWrite: React.FC<SellRequestWriteProps> = ({
  open,
  handleClose,
  handleSave,
}) => {
  const [eventName, setEventName] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventPlace, setEventPlace] = useState("");
  const [eventPlanner, setEventPlanner] = useState("");
  const [eventNumber, setEventNumber] = useState("");
  const [eventAge, setEventAge] = useState("");
  const [eventExplain, setEventExplain] = useState("");

  const handleSubmit = () => {
    const newItem = {
      id: Math.random(), // You might want to replace this with a proper ID generation method
      applicant: "",
      username: "",
      eventName,
      requestDate: new Date().toISOString().split("T")[0],
      eventDate: `${eventStartDate} ~ ${eventEndDate}`,
      status: "승인 대기",
      eventStartDate,
      eventEndDate,
      eventTime,
      eventPlace,
      eventPlanner,
      eventNumber,
      eventAge,
      eventExplain,
    };
    handleSave(newItem);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Button sx={{ mt: 2 }} onClick={handleClose}>
          <img
            src={back_logo}
            alt="Back Logo"
            style={{ marginTop: "10px", marginLeft: "10px" }}
          />
        </Button>
        <div className="event-form">
          <label htmlFor="eventName" className="label">
            공연명
          </label>
          <input
            type="text"
            className="text-display"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        <div className="event-form">
          <label htmlFor="eventDate" className="label">
            공연 날짜
          </label>
          <input
            type="date"
            className="text-display-fit"
            value={eventStartDate}
            onChange={(e) => setEventStartDate(e.target.value)}
          />
          <span className="text-style"> ~ </span>
          <input
            type="date"
            className="text-display-fit"
            value={eventEndDate}
            onChange={(e) => setEventEndDate(e.target.value)}
          />
          <label htmlFor="eventTime" className="label-middle">
            공연 시간
          </label>
          <input
            type="text"
            className="text-display-fit"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
          <span className="text-style">분</span>
          <label htmlFor="eventPlace" className="label-middle">
            공연 장소
          </label>
          <input
            type="text"
            className="text-display"
            value={eventPlace}
            onChange={(e) => setEventPlace(e.target.value)}
          />
        </div>

        <div className="event-form">
          <label htmlFor="eventPlanner" className="label">
            주최/기획
          </label>
          <input
            type="text"
            className="text-display-fit"
            value={eventPlanner}
            onChange={(e) => setEventPlanner(e.target.value)}
          />
          <label htmlFor="eventNumber" className="label">
            대표자 전화번호
          </label>
          <input
            type="text"
            className="text-display-fit"
            value={eventNumber}
            onChange={(e) => setEventNumber(e.target.value)}
          />
          <label htmlFor="eventAge" className="label">
            관람등급
          </label>
          <input
            type="text"
            className="text-display-fit"
            value={eventAge}
            onChange={(e) => setEventAge(e.target.value)}
          />
        </div>

        <div className="event-form-explain">
          <label htmlFor="eventExplain" className="label-fit">
            공연내용 요약
          </label>
          <textarea
            className="text-display-explain2"
            value={eventExplain}
            onChange={(e) => setEventExplain(e.target.value)}
            maxLength={500}
            style={{ height: "480px" }}
          />
        </div>

        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={handleSubmit} sx={{ mr: 1 }}>
            저장
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            취소
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SellRequestWrite;
