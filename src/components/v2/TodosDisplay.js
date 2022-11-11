import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalEditTodo from "../modal/ModalEditTodo";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Stack } from "@mui/material/";

const TodosDisplay = (props) => {
  const { todos, handleToggleCheck, handleEditTodo, handleDeleteTodo } = props;
  return (
   
      <List sx={{ width: "100%", maxWidth: 360}}>
        <Stack bgcolor= "background.paper"   spacing={2}>
          {todos.map((todo) => {
            return (
              <Todo
              
                key={todo.id}
                todo={todo}
                handleToggleCheck={() => handleToggleCheck(todo.id)}
                handleEditTodo={handleEditTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            );
          })}
        </Stack>
      </List>
   
  );
};

const Todo = (props) => {
  const { todo, handleToggleCheck, handleEditTodo, handleDeleteTodo } = props;
  const { id, text, checked } = todo;
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <ListItem
      
        secondaryAction={
          <Box>
            <IconButton onClick={() => handleDeleteTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => setOpen(true)}>
              <EditIcon />
            </IconButton>
          </Box>
        }
        disablePadding
      >
        <ListItemButton onClick={handleToggleCheck} role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
      <ModalEditTodo
        open={open}
        handleClose={() => setOpen(false)}
        todo={todo}
        handleEditTodo={handleEditTodo}
      />
      
    </Box>
  );
};

export default TodosDisplay;
