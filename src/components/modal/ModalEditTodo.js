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

export default function BasicModal({ open, handleClose, todo,todoList, handleEdit }) {
  const [newTodo, setNewTodo] = React.useState();
  const handleEditTodo = (e) => {
    e.preventDefault()
    handleClose();
    handleEdit(todo , newTodo);
   
    console.log(todoList)
  };
  const handleChange = (e)=> {
    setNewTodo(e.target.value)
  }

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
        <form onSubmit={handleEditTodo}>
          <TextField
          onChange={handleChange}
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue={todo}
            variant="filled"
          />
        </form>
      </Box>
    </Modal>
  );
}