import React from "react";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import {MY_NAME} from "../constants";

export default function layout({ children }){
  return (
    <div
      className="relative flex flex-col min-h-screen transition-all duration-300 ease-out"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <Head>
        <title>{MY_NAME}</title>
      </Head>
      <Navbar />
      <main className="flex flex-col justify-center px-8 mb-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};