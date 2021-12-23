import { GetServerSideProps } from "next";
export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
import { DataProvider } from "src/dataProvider";
// import { DataProvider } from "@pankod/refine-strapi";
import axios from "axios";
import nookies from "nookies";
import {TOKEN_KEY } from "src/constants";
import { env } from "src/utils/EnvironmentVariables";


const axiosInstance = axios.create();
axiosInstance.defaults.withCredentials=true;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {req} = context;
  const isAuthenticated = !!req.cookies.token;
  
  if (!isAuthenticated) {
     // TODO: unauthenticated users get redirected to the signing up page!
    return ({props: {}});
  }

  const { query } = context;
  try {
    const cookies = nookies.get(context);
     if (cookies[TOKEN_KEY]) {
      axiosInstance.defaults.headers = {
        Authorization: `Bearer ${cookies[TOKEN_KEY]}`,
      };
    }
      const data = await DataProvider(env().STRAPI_URL, axiosInstance).getList({
      resource: query["resource"] as string,
    });
 
    return {
      props: {
        initialData: data,
      },
    };
  } catch (error) {
    console.log(error)
    return { props: {} };
  }
};