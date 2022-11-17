import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import products from "../../../assets/productos.json";

import Cards from "./Cards";

import TablatImg from "./TabletPC_64GB.jpg";

export default function Listarfer() {
  function renderCards() {
    return products.map((producto) => {
      return <Cards producto={producto} />;
    });
  }

  return <div>{renderCards()}</div>;
}
