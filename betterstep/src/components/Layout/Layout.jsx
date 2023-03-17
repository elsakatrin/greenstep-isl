import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'
import bg from '/src/public/background-wave.svg'
import { useRouter } from 'next/router'

export default function Layout({ children, title }) {
  const { asPath } = useRouter()

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
        {asPath != '/' && <Navbar />}
      </main>
    </>
  )
}
