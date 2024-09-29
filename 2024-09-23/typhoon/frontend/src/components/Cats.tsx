import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat";
import UpdateCat from "./UpdateCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:8080/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  function deleteCat(id: string) {
    fetch("http://localhost:8080/cats/" + id, { method: "DELETE" })
      .then((response) => response.json())
      .then((json) => {
        setCats(json);
      });
  }

  return (
    <Box>
      <Typography variant="h3">Cats</Typography>
      <List>
        {cats.map((cat) => (
          <ListItem key={cat.id}>{JSON.stringify(cat)}</ListItem>
        ))}
      </List>
      <Button onClick={() => deleteCat(cat.id)}>Delete</Button> |{" "}
      <SubmitCat fetchCats={fetchCats} />
    </Box>
  );
};

export default Cats;
