import Layout from "@/components/Layout/Layout"
import Button from "@/components/Button/Button"
import Link from "next/link"
import Logo from '@/components/Logo/Logo'
import styles from "../../styles/userpage/userpage.module.css"
import Badges from "@/components/Badges/Badges"


export default function User() {
    return (
        <>
            <Layout title="User">
                <div className={styles.logoplace}>
            <Logo/>
                </div>
          <div className={styles.container}>
          <h1 className={styles.h1}>This is your space!</h1>
          <Badges />
          </div>

            </Layout>
        </>
    )
}