import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";
import { Raleway } from "next/font/google";
import "@fontsource/raleway/100.css";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import axios from "axios";
import { SWRConfig } from "swr";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "san-serif"].join(",")
  }
});


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  axios.defaults.baseURL = "https://api.themoviedb.org/3/";
  axios.defaults.headers.common["Authorization"] =
  "Bearer " + process.env.ACCESS_TOKEN;

  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <ThemeProvider theme={theme}>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            axios.get(resource, init).then((res) => res.data)
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
}
