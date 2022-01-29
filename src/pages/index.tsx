import { GetServerSideProps } from "next";
export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";

export const getServerSideProps: GetServerSideProps = async (context) => {

  const {req} = context;

  const isAuthenticated = !!req.cookies.token;

if (!isAuthenticated) {
  // TODO: unauthenticated users get redirected to the signing up page!
 return ({props: {}});
}


  return {
    props: {},
  };
};
