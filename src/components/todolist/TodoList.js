import React from 'react'
import { Box , Stack} from '@mui/material';
import ItemTodo from '../ItemTodo/ItemTodo';

const TodoList = ({todoList , handleDelete , handleEdit }) => {
   


  return (
    <Box>
      <Stack spacing={2}>
        
     {todoList.map((todo , key)=><ItemTodo key={key}  handleEdit={handleEdit} todoList={todoList} handleDelete={handleDelete}  todo={todo} /> )}
      </Stack>
    </Box>
  )
}

export default TodoList