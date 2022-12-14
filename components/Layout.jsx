import Head from "next/head";
import React from "react";
import Header from "./Header";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Mifa Abiyyu" : "Mifa Abiyyu"}</title>
        <meta name='description' content='E-commerce' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col justify-between'>
        <header>
          <Header />
        </header>
        <main className=''>{children}</main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>
          <p>Copyright @ 2022 Mifa Abiyyu</p>
        </footer>
      </div>
    </>
  );
}
