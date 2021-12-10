import React from "react";
import { AppProps } from "next/app";

import { Refine } from "@pankod/refine";
import routerProvider from "@pankod/refine-nextjs-router";

import "@pankod/refine/dist/styles.min.css";
import { DataProvider } from "@pankod/refine-strapi";
import strapiAuthProvider from "src/authProvider";
import { API_URL } from "src/constants";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { authProvider, axiosInstance } = strapiAuthProvider(API_URL);
  const dataProvider = DataProvider(API_URL, axiosInstance);
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
