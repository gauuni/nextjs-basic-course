import { useState, type ReactElement } from "react";

import Layout from "@/components/RootLayout";
import { NextPageWithLayout } from "../_app";
import { Box, Grid, TextField, Typography } from "@mui/material";
import useSWR from "swr";
import { useRouter } from "next/router";
import { MovieList, Movie } from "@/models/Movie";
import MovieCard from "@/components/movie/MovieCard";
import axios from "axios";

const HomeDetail: NextPageWithLayout = () => {
  const { data, isLoading, error } = useSWR<MovieList>("/movie/upcoming");
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<Movie[]>(
    data?.results ?? []
  );

  if (isLoading) {
    return (
      <Typography sx={{ color: "red", fontSize: "30px" }}>
        loading ...
      </Typography>
    );
  } else {
    // setSearchResults(data?.results ?? []);
  }

  return (
    <Box>
      <Box px={2}>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          fullWidth
          // onChange={(e) => {
          //   setSearchResults(
          //     data?.results.filter((item) =>
          //       item.title
          //         .toLowerCase()
          //         .includes(e.currentTarget.value.toLowerCase())
          //     ) ?? []
          //   );
          // }}
        />
      </Box>
      <Grid bgcolor="pink" p={2} container spacing={2} alignContent="center">
        {data?.results.map((movie) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={3}
            key={movie.id}
            alignItems="center"
          >
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

HomeDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomeDetail;
