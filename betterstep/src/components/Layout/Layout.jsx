import Head from 'next/head'
import Navbar from '../Navbar/Navbar'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        {children}
        <Navbar />
      </main>
    </>
  )
}
