import { Movie } from "@/models/Movie";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton
} from "@mui/material";

import { Favorite } from "@mui/icons-material";
import { useRouter } from "next/router";
import config from "@/config";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  const router = useRouter();
  console.log(movie.poster_path);
  return (
    <Card
      sx={{ minHeight: "500px" }}
      onClick={() => {
        router.push(`/movie/detail/${movie.id}`);
      }}
    >
      <CardMedia
        component="img"
        image={config.image_path + movie.poster_path}
        alt=""
        width={1}
        sx={{
          // minHeight: "273",
          objectFit: "fill"
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {movie.title} {movie.id}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};

export default MovieCard;
