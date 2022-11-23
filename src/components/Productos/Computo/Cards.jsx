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
import TablatImg from "./TabletPC_64GB.jpg";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function Cards({ producto }) {
  console.log(producto);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="250"
        // image="https://s1.eestatic.com/2021/12/03/actualidad/631948900_217191977_1024x576.jpg"
        image={TablatImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> precio: {producto.precio} </Button>
        <Button size="small"> sku: {producto.sku} </Button>
      </CardActions>

      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">
          Agregar al carrito
          <AddShoppingCartIcon />
        </Button>
      </CardActions>

      <CardActions>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              <Item>1</Item>
            </Grid>
            <Grid xs={6}>
              <Item>2</Item>
            </Grid>
            <Grid xs={6}>
              <Item>3</Item>
            </Grid>
            <Grid xs={6}>
              <Item>4</Item>
            </Grid>
          </Grid>
        </Box>
      </CardActions>
    </Card>
  );
}
