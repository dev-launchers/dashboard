import React from "react";
import { AppProps } from "next/app";
import Script from "next/script";
import { Refine } from "@pankod/refine";
import routerProvider from "@pankod/refine-nextjs-router";
import "@pankod/refine/dist/styles.min.css";
import { DataProvider } from "src/dataProvider";
// import { DataProvider } from "@pankod/refine-strapi";
import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import theme from "../styles/theme";
import { UserDataProvider } from "src/context/UserDataContext";
import {ProjectList} from "@components/dashboard/list";
import { env } from "src/utils/EnvironmentVariables";

const CustomDashboardPage = () => <div> Custom Dashboard Page </div>;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const dataProvider = DataProvider(env().STRAPI_URL);
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider}
      resources={[{ name: "projects", list: ProjectList }]}
      DashboardPage={CustomDashboardPage}
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
          </Script>
          <UserDataProvider> 
          <Header />
          <Component {...pageProps} />
          <Footer />
          </UserDataProvider> 
      </ThemeProvider>
    </Refine>
  );
}

export default MyApp;
