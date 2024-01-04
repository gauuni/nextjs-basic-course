import {
  AppBar,
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import Header from "./Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box component="main">
      <AppBar>
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            This is header
          </Typography>
          <Header />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box component="nav" sx={{ p: 2 }}>
        <TextField
          id="outlined-basic"
          placeholder="Search"
          fullWidth
          size="small"
        />
        <Box sx={{ bgcolor: "gray", mt: 2 }}>{children}</Box>
      </Box>
      <Toolbar />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Typography>This is footer</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainLayout;
