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
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        placeholder="Add your new todo here"
        value={value}
        onChange={handleChange}
      />
      <Button type="submit">Add</Button>
    </Box>
  );
};

export default AddTodo;
