import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";

import useStyles from "./styles";

import { AddShoppingCart } from "@mui/icons-material";

const Item = ({ item }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="" title={item.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography varient="h5" gutterBottom>
            {item.name}
          </Typography>
          <Typography gutterBottom>{item.price}</Typography>
        </div>
        <Typography varient="h2" color="textSecondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aira-label="Add to Card" color="primary">
          {" "}
        </IconButton>
        <AddShoppingCart />
      </CardActions>
    </Card>
  );
};

export default Item;
