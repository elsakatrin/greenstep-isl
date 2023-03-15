import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import LoginView from '@/components/Login/Login'


// TO DO
// Check if location is enabled

export default function Home() {
  return (
    <>
      <Head>
        <title>BetterStep</title>
        <meta name="description" content="Explore the world better" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <LoginView />
      </main>
    </>
  )
}
