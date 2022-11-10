import React, { useState } from "react";
import Box from "@mui/material/Box";
import AddTodo from "../components/addtodo";
import TodoList from "../components/todolist";
import Footer from "../components/footer";

const Home = () => {
  const [addTodo, setAddTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleDelete = (todo) => {
    setTodoList(todoList.filter((elem) => elem !== todo));
  };
  const handleEdit = (todo, newTodo) => {
    const target = todoList.findIndex((elem) => elem === todo);
    setTodoList([...todoList.splice(target, 1, newTodo)]);
    console.log(todoList)

  };

  return (
    <Box >
      <AddTodo
        todoList={todoList}
        setTodoList={setTodoList}
        setAddTodo={setAddTodo}
      />
      <TodoList
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        addTodo={addTodo}
        todoList={todoList}
      />
   
    </Box>
  );
};

export default Home;
