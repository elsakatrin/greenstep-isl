import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'
import bg from '/src/public/background-wave.svg'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main
        className={styles.mainWrapper}
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        {children}
        <Navbar />
      </main>
    </>
  )
}
