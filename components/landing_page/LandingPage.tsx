import React from "react";
import TopBar from "./TopBar";
import { Box, Container } from "@mui/material";
import TopSection from "./TopSection";
import LearnMoreSection from "./LearnMoreSection";

const LandingPage = () => {
  return (
    <Container sx={{ bgcolor: "#080809", width: "100vw", height: "100vh" }}>
      <Box p={4}>
        <TopBar />
        <TopSection />
        <LearnMoreSection />
      </Box>
    </Container>
  );
};

export default LandingPage;
