import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import "../../assets/styles/Dashboard.css";

import Tooltip from "@mui/material/Tooltip";

import Logo from "../../assets/images/logo.png";
import { Outlet } from "react-router-dom";
import Zoom from "@mui/material/Zoom";
import { Typography } from "@mui/material";

function ResponsiveAppBar() {
  return (
    <Box>
      <AppBar id="appBar">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                img: { width: "35px" },
              }}
            >
              <Tooltip
                title="Voltar para o início"
                placement="bottom"
                TransitionComponent={Zoom}
                sx={{ borderRadius: "50px", padding: "5px" }}
              >
                <IconButton href="/alloNeStore">
                  <img src={Logo} alt="Logo" />
                  <Typography color="#fff" fontSize={20} fontWeight={900}>
                    AlloNe Store
                  </Typography>
                </IconButton>
              </Tooltip>
            </Box>

            <Box className="navButtons">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Tooltip
                  title="Voltar ao topo"
                  placement="bottom"
                  TransitionComponent={Zoom}
                  sx={{ borderRadius: "50px", padding: "5px" }}
                >
                  <IconButton href="#home">
                    <Typography color="#fff" fontSize={20} fontWeight={900}>
                      Home
                    </Typography>
                  </IconButton>
                </Tooltip>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Tooltip
                  title="Sobre nós"
                  placement="bottom"
                  TransitionComponent={Zoom}
                  sx={{ borderRadius: "50px", padding: "5px" }}
                >
                  <IconButton href="#sobre">
                    <Typography color="#fff" fontSize={20} fontWeight={900}>
                      Sobre
                    </Typography>
                  </IconButton>
                </Tooltip>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Tooltip
                  title="Principais produtos"
                  placement="bottom"
                  TransitionComponent={Zoom}
                  sx={{ borderRadius: "50px", padding: "5px" }}
                >
                  <IconButton href="#destaques">
                    <Typography color="#fff" fontSize={20} fontWeight={900}>
                      Destaques
                    </Typography>
                  </IconButton>
                </Tooltip>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Tooltip
                  title="Nossos produtos"
                  placement="bottom"
                  TransitionComponent={Zoom}
                  sx={{ borderRadius: "50px", padding: "5px" }}
                >
                  <IconButton href="#produtos">
                    <Typography color="#fff" fontSize={20} fontWeight={900}>
                      Produtos
                    </Typography>
                  </IconButton>
                </Tooltip>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Tooltip
                  title="Formas de contato"
                  placement="bottom"
                  TransitionComponent={Zoom}
                  sx={{ borderRadius: "50px", padding: "5px" }}
                >
                  <IconButton href="#contato">
                    <Typography color="#fff" fontSize={20} fontWeight={900}>
                      Contato
                    </Typography>
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}

export default ResponsiveAppBar;
