import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import back_logo from "../../../assets/logo_back.svg";
import "../../../css/EventForm.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-40%, -50%)",
  maxWidth: "1400px",
  maxHeight: "880px",
  width: "80vw",
  height: "70vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

interface EventModalProps {
  open: boolean;
  handleClose: () => void;
  item: {
    id: number;
    applicant: string;
    username: string;
    eventName: string;
    requestDate: string;
    eventDate: string;
    status: string;
    eventStartDate: string;
    eventEndDate: string;
    eventTime: string;
    eventPlace: string;
    eventPlanner: string;
    eventNumber: string;
    eventAge: string;
    eventExplain: string;
  } | null;
}

const EventModal: React.FC<EventModalProps> = ({ open, handleClose, item }) => {
  console.log("Modal open:", open);
  console.log("Modal item:", item);

  if (!item) return null;

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
          <div className="text-display">{item.eventName}</div>
        </div>

        <div className="event-form">
          <label htmlFor="eventDate" className="label">
            공연 날짜
          </label>
          <div className="text-display-fit">{item.eventStartDate}</div>
          <text className="text-style"> ~ </text>
          <div className="text-display-fit">{item.eventEndDate}</div>
          <label htmlFor="eventTime" className="label-middle">
            공연 시간
          </label>
          <div className="text-display-fit">{item.eventTime}</div>
          <text className="text-style">분</text>
          <label htmlFor="eventPlace" className="label-middle">
            공연 장소
          </label>
          <div className="text-display">{item.eventPlace}</div>
        </div>
        <div className="event-form">
          <label htmlFor="eventPlanner" className="label">
            주최/기획
          </label>
          <div className="text-display-fit">{item.eventPlanner}</div>
          <label htmlFor="eventNumberr" className="label">
            대표자 전화번호
          </label>
          <div className="text-display-fit">{item.eventNumber}</div>
          <label htmlFor="eventAge" className="label">
            관람등급
          </label>
          <div className="text-display-fit">{item.eventAge}</div>
        </div>
        <div className="event-form-explain">
          <label htmlFor="eventExplain" className="label-fit">
            공연내용 요약
          </label>
          <div className="text-display-explain">{item.eventExplain}</div>
        </div>

        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={handleClose} sx={{ mr: 1 }}>
            승인
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            거절
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EventModal;
