import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const TarjetaPersonaMin = () => {
  return (
    <Stack direction="row" spacing={2} style={{marginLeft:10}}>
      <Avatar
        alt="Remy Sharp"
        src="https://res.cloudinary.com/dt9pw5bcd/image/upload/v1654023157/Jorge_ngg8zi.png"
        sx={{ width: 56, height: 56 }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography>Jorge Albornos</Typography>
        <Typography color="text.secondary">
          Area: Desarrollo Font End
        </Typography>
      </Box>
    </Stack>
  );
};

export default TarjetaPersonaMin;
