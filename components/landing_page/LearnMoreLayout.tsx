import React from "react";
import Footer from "./Footer";
import { Box, Stack } from "@mui/material";

export default function LearnMoreLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // return (
  //   <html lang="en">
  //     <body></body>
  //   </html>

  // );

  return (
    <main>
      <Stack alignItems="center">
        <Box bgcolor="red"> {children}</Box>
      </Stack>
    </main>
  );
}
