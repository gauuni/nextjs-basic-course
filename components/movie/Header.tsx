import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import AvatarView from "./AvatarView";

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>This header</Typography>
          <AvatarView />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
