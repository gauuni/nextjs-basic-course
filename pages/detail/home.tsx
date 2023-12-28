import type { ReactElement } from "react";

import Layout from "@/components/landing_page/layout";
import { NextPageWithLayout } from "../_app";
import { Box, Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import useSWR from "swr";

interface User {
  name: string;
}

interface MovieList {
  results: Movie[];
}

interface Movie {
  id: string;
  title: string;
  poster_path: string;
}

const HomeDetail: NextPageWithLayout = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, isLoading, error } = useSWR<MovieList>(
    "/movie/upcoming",
    fetcher
  );
  console.log(data);
  return (
    <>
      {/* <TextField
        variant="outlined"
        placeholder="Search"
        size="small"
      ></TextField> */}
      <Box sx={{ color: "black" }}>Home Detail</Box>
      <Stack gap={4}>
        {data?.results.map((movie) => (
          <Stack key={movie.id} direction="row" alignItems="center">
            <Box sx={{ flexGrow: 1 }}>{movie.title}</Box>
            <Box
              component="img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={100}
            />
          </Stack>
        ))}
      </Stack>
    </>
  );
};

HomeDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomeDetail;
