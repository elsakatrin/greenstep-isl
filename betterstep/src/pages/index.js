import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Map from '@/components/Map/Map'
import Spinner from '@/components/Spinner/Spinner'
import Navbar from '@/components/Navbar/Navbar'

import LoginView from '@/components/Login/Login'


export default function Home() {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  // })

  // if (!isLoaded) return <Spinner />

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
