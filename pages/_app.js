import React from "react";
import Head from "next/head";
import { ThemeProvider } from "../ThemeContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps}></Component>
      </ThemeProvider>
    </>
  );
}
