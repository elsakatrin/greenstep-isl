import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.mainWrapper}>
        {children}
        <Navbar />
      </main>
    </>
  )
}
