import { Box, Button, TextField } from "@mui/material";
import React from "react";




const AddTodo = (props) => {
  const { onAddTodo } = props;

  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(value);
    setValue("");
  };

  return (
    <Box sx={{display :'flex' , alignItems : 'center' , pt : '20px'}} component="form" onSubmit={handleSubmit}>
      <TextField
        inputProps={{ style: { fontFamily: 'Arial ', color: 'white'}}}
        style={{ flex: 1, margin: '0 20px 0 0', color: 'white'}}
    color="success"
    
        placeholder="Add your new todo here"
        value={value}
        onChange={handleChange}
      />
      <Button sx={{color : 'white' , pr:'50px'}} type="submit">Add</Button>
    </Box>
  );
};

export default AddTodo;
