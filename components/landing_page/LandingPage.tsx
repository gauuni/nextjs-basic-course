import React from "react";
import TopBar from "./TopBar";
import { Box } from "@mui/material";

const LandingPage = () => {
  return (
    <Box sx={{ bgcolor: "#080809", width: "100vw", height: "100vh" }}>
      <TopBar />
    </Box>
  );
};

export default LandingPage;
