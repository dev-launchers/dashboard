import { GetServerSideProps } from "next";
export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
import { checkAuthentication } from "@pankod/refine-nextjs-router";
import { DataProvider } from "@pankod/refine-strapi";

import axios from "axios";
import nookies from "nookies";

import { API_URL, TOKEN_KEY } from "src/constants";
import strapiAuthProvider from "src/authProvider";

const axiosInstance = axios.create();

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { authProvider } = strapiAuthProvider(API_URL);
  const { isAuthenticated, ...props } = await checkAuthentication(
    authProvider,
    context
  );

  if (!isAuthenticated) {
    return props;
  }

  const { query } = context;

  try {
    const cookies = nookies.get(context);
    if (cookies[TOKEN_KEY]) {
      axiosInstance.defaults.headers = {
        Authorization: `Bearer ${cookies[TOKEN_KEY]}`,
      };
    }

    const data = await DataProvider(API_URL, axiosInstance).getList({
      resource: query["resource"] as string,
    });

    return {
      props: {
        initialData: data,
      },
    };
  } catch (error) {
    return { props: {} };
  }
};
