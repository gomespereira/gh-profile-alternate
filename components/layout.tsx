import { Fragment } from 'react'
import Head from 'next/head'

import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>GitHub Profile</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="flex flex-col flex-auto justify-center items-center m-4">{children}</main>
      <Footer />
    </Fragment>
  )
}