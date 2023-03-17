import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import LoginView from '@/components/Login/Login'
import Layout from '@/components/Layout/Layout'


// TO DO
// Check if location is enabled

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenStep</title>
        <meta name="description" content="Explore the world better" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <main className={styles.main}>
        <Layout>
          <LoginView />
        </Layout>
      </main>
    </>
  )
}
