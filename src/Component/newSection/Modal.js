import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import "./NewSection.css";
const style = {
  position: "absolute",
  top: "75%",
  left: "70%",
  transform: "translate(-50%, -50%)",
  padding: "10px",
  width: 400,
  background: "#eee",
  border: "1px solid #eee",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const Modals = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen} style={{ color: "white" ,textAlign:"center"}}>
        start now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="d-flex buttons-modal">
          <>
            <div class="dropdown">
              <button class="dropbtn">Courses</button>
              <div class="dropdown-content">
                <Link to="/">web debvelopment</Link>
                <Link to="#">Mobile development</Link>
                <Link to="#">game development</Link>
                <Link to="#">data science</Link>
              </div>
            </div>
          </>

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
