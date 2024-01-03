import React from "react";
import TopBar from "./TopBar";
import { Box, Container, Stack } from "@mui/material";
import TopSection from "./TopSection";
import LearnMoreSection from "./LearnMoreSection";
import Opportunity from "./Opportunity";

const LandingPage = () => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#080809", width: "100vw" }}>
      <Stack p={4} gap={4}>
        <TopBar />
        <TopSection />
        <LearnMoreSection />
        <Opportunity />
      </Stack>
    </Container>
  );
};

export default LandingPage;
