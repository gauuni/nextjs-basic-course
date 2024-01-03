import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const LearnMoreSection = () => {
  return (
    <Box>
      <Typography sx={{ fontSize: "42px", width: 2 / 3 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Stack mt={4} direction="row" justifyContent="space-between" gap={12}>
        <Box sx={{ width: 1 / 3 }}>
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
            Learn More
          </Button>
        </Box>
        <Stack direction="row" gap={10} alignItems="center">
          <Box
            component="img"
            sx={{
              width: 1 / 2,
              height: "auto"
            }}
            alt=""
            src="./img_learn_more.png"
          />
          <Typography sx={{ width: 1 / 2 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LearnMoreSection;
