import { Stack, Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const menuItems = [
    { label: `About`, url: `/about` },
    { label: `Contact`, url: `/contact` }
  ];
  const [currentMenu, setCurrentMenu] = useState(0);
  const router = useRouter();

  const navigatePage = () => {
    router.push;
  };
  return (
    <Stack direction="row">
      {menuItems.map((item, index) => (
        <Button
          sx={{
            color: `${currentMenu == index ? "red" : "gray"}`,
            p: 2,
            width: "80px",
            textAlign: "center"
          }}
          onClick={() => {
            setCurrentMenu(index);
            router.push(item.url);
          }}
          key={index}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );
};

export default Header;
