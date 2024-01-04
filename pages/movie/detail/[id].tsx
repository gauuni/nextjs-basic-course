import type { ReactElement } from "react";

import Layout from "@/components/RootLayout";
import { NextPageWithLayout } from "../../_app";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import AboutNestedLayout from "@/components/AboutNestedLayout";
import { useRouter } from "next/router";
import { Movie } from "@/models/Movie";

import useSWR from "swr";
import MovieCard from "@/components/movie/MovieCard";
import config from "@/config";
import { PlayArrow } from "@mui/icons-material";

const Detail: NextPageWithLayout = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, isLoading, error } = useSWR<Movie>(
    `/movie/${id}?language=en-US&append_to_response=videos,credits`
  );
  const teaserVideo = data?.videos.results.find(
    (video) => video.name == "Teaser"
  );

  // console.log(teaserKey);

  if (isLoading)
    return (
      <Typography sx={{ color: "red", fontSize: "80px" }}>
        loading ...
      </Typography>
    );

  if (error) return <Typography sx={{ color: "red" }}>error</Typography>;

  if (!data) {
    return <></>;
  }

  return (
    // <Grid container>
    <Stack p={2} gap={2}>
      <Typography variant="h4">{data.title}</Typography>
      <Stack direction="row" gap={2}>
        <Box
          component="img"
          src={config.image_path + data.poster_path}
          sx={{
            width: 1 / 2,
            objectFit: "cover"
          }}
        />
        <Stack>
          {data.popularity}
          <Box>Genre: {data.genres.map((genre) => genre.name).join(", ")}</Box>
          <Box>Running time: {data.runtime}</Box>
          <Box>Director</Box>
          <Box>
            Actors:{" "}
            {Array.from(
              { length: 5 },
              (x, i) => data.credits.cast[i].original_name
            ).join(", ")}
          </Box>
        </Stack>
      </Stack>

      <Box>
        <Typography sx={{ fontSize: "22px" }}>Overview</Typography>
        <Box component="div" sx={{ overflowY: "scroll" }}>
          {data.overview}
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: `url('https://i.ytimg.com/vi/${teaserVideo?.key}/hqdefault.jpg')`,
          width: 1,
          height: {
            xs: "141px",
            sm: "300px"
          },
          backgroundPosition: "center center",
          backgroundRepeat: "false",
          backgroundSize: "cover",
          justifyContent: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Link
          href={`https://www.youtube.com/watch?v=Fbb4e_Q6wR8`}
          target="_blank"
          rel="noopener"
        >
          <Box
            bgcolor="white"
            borderRadius={12}
            width={40}
            height={40}
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              opacity: "50%"
            }}
          >
            <PlayArrow />
          </Box>
        </Link>
      </Box>
    </Stack>
    // </Grid>
  );
};

Detail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Detail;
