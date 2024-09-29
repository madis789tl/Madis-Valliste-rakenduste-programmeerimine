import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type UpdateCatProps = {
  fetchCats: () => void;
  id: string;
};

const UpdateCat = ({ fetchCats, id }: UpdateCatProps) => {
  const [name, setName] = useState("");

  const updateCat = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8080/cats/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
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

    updateCat(id);
    setTimeout(fetchCats, 100);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleUpdate}>
        <TextField
          label="Cat name"
          onChange={(event) => setName(event.target.value)}
        />
        <Button type="submit">Update</Button>
      </form>
    </Box>
  );
};

export default UpdateCat;
