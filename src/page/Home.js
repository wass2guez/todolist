import React from "react";
import { v4 as generateId } from "uuid";
import { Container } from "@mui/material";
import AddTodo from "../components/v2/AddTodo";
import TodosDisplay from "../components/v2/TodosDisplay";

const Home = () => {
  const [todos, setTodos] = React.useState([]);

  // {
  //   id : id,
  //   text: " blabla"
  // }
  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        id: generateId(),
        text: newTodo,
        checked: false,
      },
    ]);
  };

  const handleToggleCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }
        return todo;
      })
    );
  };

  const handleEditTodo = (id,newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text: newText,
          };
        }
        return todo;
      })
    );
  };

  // const [addTodo, setAddTodo] = useState("");
  // const [todoList, setTodoList] = useState([]);

  // const handleDelete = (todo) => {
  //   setTodoList(todoList.filter((elem) => elem !== todo));
  // };
  // const handleEdit = (todo, newTodo) => {
  //   const target = todoList.findIndex((elem) => elem === todo);
  //   setTodoList(todoList.splice(target, 1, newTodo));
  //   console.log(todoList)

  // };
  console.log(todos);

  return (
    <Container maxWidth="xs" sx={{ pt: 20 }}>
      <AddTodo onAddTodo={addTodo} />
      <TodosDisplay
        todos={todos}
        handleToggleCheck={handleToggleCheck}
        handleEditTodo={handleEditTodo}
      />
    </Container>
  );
};

export default Home;
