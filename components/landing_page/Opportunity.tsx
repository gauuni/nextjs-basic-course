import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography
} from "@mui/material";
import React from "react";

function Item() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Stack alignItems="center">
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
}

type ItemData = {
  image: string;
  title: string;
  subtitle: string;
};

const Opportunity = () => {
  const list = [
    {
      image: "",
      title: "1",
      subtitle: ""
    },
    {
      image: "",
      title: "2",
      subtitle: ""
    },
    {
      image: "",
      title: "3",
      subtitle: ""
    }
  ];
  return (
    <Box>
      <Stack alignItems="center">
        <Typography variant="h2">The best B2B - B2C opportunities</Typography>
        <Typography variant="body1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s
        </Typography>

        <Stack mt={4} direction="row" gap={4}>
          {list.map((item) => (
            <Item key={item.title} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Opportunity;
