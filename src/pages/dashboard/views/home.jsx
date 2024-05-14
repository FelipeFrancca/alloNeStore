import React from "react";
import { Box, Typography } from "@mui/material";
import "../../../assets/styles/home.css";

import Headphones from "../../../assets/images/headphones.png"

export default function Home() {
  return (
    <Box className="container">
      <Box className="container">
        <Box className="topic1">
          <Typography className="topic1Text1">Atendemos todas as suas demandas</Typography>
          <Typography className="topic1Text2">Os melhores produtos custo beneficio do mercado!</Typography>
        </Box>
        <Box className="topic2">
          <img src={Headphones} alt="Fones" />
        </Box>
      </Box>
    </Box>
  );
}
