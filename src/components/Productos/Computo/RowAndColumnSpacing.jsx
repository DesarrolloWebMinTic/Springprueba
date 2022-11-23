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

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function RowAndColumnSpacing() {
    return (
    <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
            <Item>Memoria RAM 16GB</Item>
        </Grid>
        <Grid xs={6}>
            <Item>Memoria RAM 8GB</Item>
        </Grid>
        <Grid xs={6}>
            <Item>Memoria RAM 6GB</Item>
        </Grid>
        <Grid xs={6}>
            <Item>Memoria RAM 4GB</Item>
        </Grid>
        </Grid>
    </Box>
    );
}
