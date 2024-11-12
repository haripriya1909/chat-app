import { Box, Modal } from "@mui/material";
import React from "react";

import { IconModalType } from "./index.iterface";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
type Props = {
  icon: JSX.Element;
  title: string;
  modalType: IconModalType;
};

const AppModal: React.FC<Props> = ({ icon, title }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // fetch user contacts in realtime from firestore

  return (
    <div>
      <div onClick={handleOpen}>{icon}</div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={boxStyle}>
          <h1 className="text-xl font-bold">{title}</h1>
        </Box>
      </Modal>
    </div>
  );
};

export default AppModal;
