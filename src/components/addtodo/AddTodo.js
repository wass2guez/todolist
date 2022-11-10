import React, { useState } from "react";
import { Box, InputAdornment, TextField } from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AddTodo = ({ todoList ,setAddTodo, setTodoList }) => {
 const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        setAddTodo(input)
        
       //to save all todo inputs in tab
        setTodoList([...todoList ,input ])
setInput('')

    }
    const handleChange = (e)=> {
        setInput(e.target.value)

    }

  return (
    <form onSubmit={handleSubmit}>
      <Box >
        <TextField
        value={input}
        onChange={handleChange}
       
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddCircleOutlineIcon
                  sx={{ color: "white", fontSize: "30px" }}
                />
              </InputAdornment>
            ),
          }}
       
          sx={{
            width: "25",
            backgroundColor: "darkgray",
          }}
          label="Create a new Todo"
          color="secondary"
          focused
        />
      </Box>
    </form>
  );
};

export default AddTodo;
