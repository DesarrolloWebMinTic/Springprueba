import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="E:\Sprintprueba\src\components\Productos\Computo\TabletPC_64GB.html"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tableta PC 64GB
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1.Sistema operativo: android 6.0.cpu: mt6580, quad core. gpu: mali-400. memoria de operación (ram): 2g ddr3. memoria corporal: nano-flash 32g (puede utilizar menos de este valor, porque el espacio de software móvil).
          2.Expansión máxima de almacenamiento: tarjeta tf 64g. modo de red: gsm / tipo: quad core.
          3.Tamaño de la memoria - rom: 64 gb rom (almacenamiento interno + almacenamiento de la tableta + sistema utilizando algo de almacenamiento).
          4.Modo de red: gsm / wcdma / td-scdma. frecuencia de red: 900/1800/1900 ghz.
          5.Número de tarjeta sim: doble tarjeta de espera dual. tamaño de la tarjeta sim: ranura estándar para tarjeta sim (25 mm × 15 mm × 0,8 mm).
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Precio 5425</Button>
        <Button size="small">SKU: 87659875</Button>
      </CardActions>
      
      <CardActions>
      <Button size="small">Compartir</Button>
      <Button size="small">Agregar al carrito<AddShoppingCartIcon /></Button>
      </CardActions>
    </Card>
    );
}