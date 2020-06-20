import Head from 'next/head'

import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>GitHub Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}