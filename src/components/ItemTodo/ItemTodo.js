import React from "react";
import { Box, Checkbox, Typography, IconButton, Paper } from "@mui/material";

import { yellow } from "@mui/material/colors";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalEditTodo from "./../modal/index";

const ItemTodo = ({ todo, handleDelete , handleEdit , todoList  }) => {
  const [open, setOpen] = React.useState(false);
  const handleModal = () => {
    setOpen(true);
  };
  const handleClose =()=> {
    setOpen(!open);
  }

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "gray",
        height: "35px",
      }}
      elevation={0}
    >
      <Checkbox
        // checked={checked}
        // onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{
          color: yellow[800],
          "&.Mui-checked": {
            color: yellow[600],
          },
        }}
      />
      <Typography>{todo}</Typography>
      <Box>
        <IconButton onClick={() => handleDelete(todo)}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          onClick={handleModal}
        >
          <EditIcon />
        </IconButton>
     <ModalEditTodo handleEdit={handleEdit}  todo={todo} todoList={todoList} handleClose={handleClose} open={open}  />
      </Box>
    </Paper>
  );
};

export default ItemTodo;
