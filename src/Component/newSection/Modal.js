import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import ModalBox from "./BoxModal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#eee",
  border: "1px solid #eee",
  boxShadow: 24,
  p: 4,
};

const Modals = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [handle, setHandle] = React.useState(<ModalBox />);
  return (
    <div>
      <Button onClick={handleOpen} style={{color:"white"}}>start now </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="d-flex">
          <Button>{handle} </Button>

          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: "20px",
              width: "160px",
              color: "#4785f1",
              mt: 2,
            }}
          >
            <Link
              to="/Team"
              style={{
                textDecoration: "none",
                color: "#4785f1",
              }}
            >
              Be instructor
            </Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Modals;
