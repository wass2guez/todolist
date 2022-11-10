import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
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

export default function ModalEditTodo({
  open,
  handleClose,
  todo,
  handleEditTodo,
}) {
  const [value, setValue] = React.useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditTodo(todo.id, value);

    handleClose();
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{ color: "red" }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          EDIT YOUR TODO
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField value={value} onChange={handleChange} variant="filled" />
        </form>
      </Box>
    </Modal>
  );
}
