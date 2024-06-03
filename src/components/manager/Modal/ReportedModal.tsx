import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import X_logo from "../../../assets/logo_X.svg";
import "../../../css/EventForm.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-40%, -50%)",
  maxWidth: "640px",
  maxHeight: "480px",
  width: "80vw",
  height: "70vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  borderRadius: "16px",
};

interface ReportedModalProps {
  open: boolean;
  handleClose: () => void;
  item: {
    id: number;
    applicant: string;
    username: string;
    reportID: string;
    reportDate: string;
    reportReason: string;
  } | null;
}

const ReportedModal: React.FC<ReportedModalProps> = ({
  open,
  handleClose,
  item,
}) => {
  console.log("Modal open:", open);
  console.log("Modal item:", item);

  if (!item) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={handleClose}
            style={{ border: "0", backgroundColor: "transparent" }}
          >
            <img src={X_logo} alt="Close" />
          </button>
        </div>
        <div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "8px",
              color: "#576FD7",
              borderBottom: "1px solid #E5E5E5",
              paddingBottom: "3px",
            }}
          >
            신고내용
          </div>
          <div style={{ fontSize: "14px", color: "#666" }}>
            {item.reportReason}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ReportedModal;
