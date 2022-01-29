import React from "react";
import { AppProps } from "next/app";
import Script from "next/script";
import { Refine } from "@pankod/refine";
import routerProvider from "@pankod/refine-nextjs-router";
import "@pankod/refine/dist/styles.min.css";
import axios from "axios";
import { DataProvider } from "@pankod/refine-strapi";
import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import theme from "../styles/theme";
import { UserDataProvider } from "src/context/UserDataContext";
import {ProjectList} from "@components/dashboard/list";
import { env } from "src/utils/EnvironmentVariables";
import { EditProject } from '@components/dashboard/EditProject';
import { ShowProject } from '@components/dashboard/ShowProject';

const CustomDashboardPage = () => <div> Custom Dashboard Page </div>;
const axiosInstance = axios.create();
axiosInstance.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const dataProvider = DataProvider(env().STRAPI_URL,axiosInstance);
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider}
<<<<<<< HEAD
      resources={[{ name: "projects", list: PostList, edit: EditProject, show: ShowProject }]}
=======
      resources={[{ name: "projects", list: ProjectList }]}
      DashboardPage={CustomDashboardPage}
>>>>>>> 48629a1bf3489a1a3d42746cfc7f2611de1398cc
      warnWhenUnsavedChanges={true}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-599284852"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-599284852');
            `}
<<<<<<< HEAD
        </Script>
        <UserDataProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </UserDataProvider>
=======
          </Script>
          <UserDataProvider> 
          <Header />
          <Component {...pageProps} />
          <Footer />
          </UserDataProvider> 
>>>>>>> 48629a1bf3489a1a3d42746cfc7f2611de1398cc
      </ThemeProvider>
    </Refine>
  );
}

export default MyApp;
