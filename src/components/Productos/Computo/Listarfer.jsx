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
//import TablatImg from "./TabletPC_64GB.jpg";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import RowAndColumnSpacing from "./RowAndColumnSpacing";

export default function Listarfer() {
  function renderCards() {
    return products.map((producto) => {
      return <Cards producto={producto} />;
    });
  }
  return <div>{renderCards ()}</div>;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
