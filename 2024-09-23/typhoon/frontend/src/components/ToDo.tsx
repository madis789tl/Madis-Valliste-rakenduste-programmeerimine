import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitTodo from "./SubmitTodo";
import UpdateTodo from "./UpdateTodo";

type TodoSingle = {
  id: number;
  title: string;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
};

const Todo = () => {
  const [todo, setTodo] = useState<TodoSingle[]>([]);

  const fetchTodo = async () => {
    const response = await fetch("http://localhost:8080/todo");
    const data = await response.json();

    setTodo(data);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  function deleteTodo(id: number) {
    fetch("http://localhost:8080/todo/" + id, { method: "DELETE" })
      .then((response) => response.json())
      .then((json) => {
        setTodo(json);
      });
  }

  return (
    <Box>
      <Typography variant="h3">Todo</Typography>
      <List>
        {todo.map((todo) => (
          <ListItem key={todo.id}>
            {todo.title} |{todo.priority}|{" "}
            <Button onClick={() => deleteTodo(todo.id)}>Delete</Button> |{" "}
            <UpdateTodo fetchTodo={fetchTodo} id={todo.id} />
          </ListItem>
        ))}
      </List>
      <SubmitTodo fetchTodo={fetchTodo} />
    </Box>
  );
};

export default Todo;
