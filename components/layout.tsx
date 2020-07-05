import { Fragment } from 'react'
import Head from 'next/head'

import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>GitHub Profile</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="An attempt to improve GitHub profile page"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      <main className="flex flex-col flex-auto justify-center items-center mt-4 mr-4 mb-10 ml-4 md:mr-10 md:ml-10 space-y-10">{children}</main>
      <Footer />
    </Fragment>
  )
}