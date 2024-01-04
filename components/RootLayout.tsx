import React, { useState } from "react";
import Footer from "./landing_page/Footer";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";
import Link from "next/link";
import { title } from "process";
import { useRouter } from "next/router";
import { Person } from "@mui/icons-material";
import axios from "axios";
import useSWR, { Fetcher } from "swr";
import { FetcherResponse } from "swr/_internal";
import { setCookie } from "cookies-next";
import { useParams, useSearchParams } from "next/navigation";
import Header from "./movie/Header";

interface MenuItemObject {
  title: string;
  url: string;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const menu: MenuItemObject[] = [
    { title: "home", url: "/movie/home" },
    { title: "about", url: "/movie/about/contact" },
    { title: "learn more", url: "/movie/learn-more" }
  ];

  const [currentMenu, setCurrentMenu] = useState(0);
  const router = useRouter();

  return (
    <main>
      <Header />
      <Stack m={2} alignItems="center" gap={2}>
        <Stack direction="row" gap={1}>
          {menu.map((item, index) => (
            <Box key={item.url}>
              <Button
                variant="text"
                onClick={() => {
                  setCurrentMenu(index);
                  router.push(item.url);
                }}
                sx={{
                  backgroundColor: `${
                    currentMenu == index ? "black" : "white"
                  }`,
                  color: `${currentMenu == index ? "white" : "gray"}`
                }}
              >
                {item.title.toUpperCase()}
              </Button>
            </Box>
          ))}
        </Stack>
      </Stack>
      <Box component="div">{children}</Box>
      {/* <Toolbar />
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>This footer</Toolbar>
      </AppBar> */}
    </main>
  );
}
