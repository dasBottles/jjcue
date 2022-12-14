import React from "react";
import { Grid } from "@mui/material/";
import Item from "./Item";
const items = [
  {
    id: 1,
    name: "Item 1",
    description: "This is an item description.",
    category: "cues",
    price: "$5",
  },
  {
    id: 2,
    name: "Item 2",
    description: "This is an item description.",
    category: "cueCase",
    price: "$15",
  },
];

export default function Items() {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
