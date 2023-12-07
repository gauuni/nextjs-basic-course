import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

function LeftSideBox() {
  return (
    <Stack gap={3}>
      <Typography
        sx={{
          fontSize: "60px",
          lineHeight: "70px"
        }}
      >
        Enjoy the music and connect with people.
      </Typography>
      <Typography variant="subtitle2" sx={{ color: "#c2c2c2" }}>
        Making music accessible for all. Join the largest music event ever made
        by humanity. Download the app and we do the rest.
      </Typography>
      <Stack direction="row" gap={2}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "purple",
            borderRadius: 100,
            py: "12px",
            px: "32px"
          }}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "white",
            color: "white",
            borderRadius: 100,
            py: "12px",
            px: "32px"
          }}
        >
          Watch video
        </Button>
      </Stack>
      <Box pt={5}>
        <Typography>Collaboration Partners</Typography>
        <Stack direction="row" gap={4} pt={2}>
          <Typography> Facebook </Typography>
          <Typography> Twitter </Typography>
          <Typography> Youtube </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

const TopSection = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <LeftSideBox />
        </Box>
        <Box>
          <Box
            component="img"
            sx={{
              width: 1,
              height: "auto"
            }}
            alt=""
            src="./img_phone_top.png"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default TopSection;
