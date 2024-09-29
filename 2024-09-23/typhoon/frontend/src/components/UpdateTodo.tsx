import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

type UpdateTodoProps = {
  fetchTodo: () => void;
  id: number;
};

const UpdateTodo = ({ fetchTodo, id }: UpdateTodoProps) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const updateTodo = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/todo/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, priority: priority }),
      });

      if (response.ok) {
        console.log("Success", response);
        // Snackbar success
      } else {
        console.warn("No success");
        // Snackbar
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleUpdate = (event: React.FormEvent) => {
    event.preventDefault();

    updateTodo(id);
    setTimeout(fetchTodo, 100);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleUpdate}>
        <TextField
          label="Title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          label="Priority"
          onChange={(event) => setPriority(event.target.value)}
        />
        <Button type="submit">Update</Button>
      </form>
    </Box>
  );
};

export default UpdateTodo;
