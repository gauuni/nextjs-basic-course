import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const TopBar = () => {
  const menus = ["How it works", "Service", "Blog", "Support", "About Us"];
  return (
    <AppBar position="static" sx={{ bgcolor: "transparent", p: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <LibraryMusicIcon />
          <Typography variant="h6">Mowy</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Stack direction="row" gap={2}>
            {menus.map((menu) => (
              <Link underline="none" color="white" href="#" key={menu}>
                {menu}
              </Link>
            ))}
          </Stack>

          <Button
            variant="outlined"
            sx={{
              border: 1,
              borderColor: "white",
              color: "white",
              p: 2,
            }}
          >
            Download now
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default TopBar;
