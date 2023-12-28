import React from "react";
import Footer from "./Footer";
import { Box, Stack } from "@mui/material";

export default function AboutNestedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const menu = ["contact", "blog"];

  return (
    <main>
      <Stack direction="row">
        <Stack>
          {" "}
          {menu.map((item) => (
            <Box bgcolor="red" key={item}>
              {item}
            </Box>
          ))}
        </Stack>
        <Box>{children}</Box>
      </Stack>
    </main>
  );
}
