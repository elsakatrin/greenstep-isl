import Button from '@/components/Button/Button'
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'
import styles from "../../styles/choosemode/choosemode.module.css"

export default function Choice() {
    return (
        <>
            <Layout title="Choice">
                <h1 className={styles.h1}>Choose mode</h1>
                <Button className={styles.choosebtn}>
                    <Link className={styles.link} href="/mode/explore">
                        Explore
                    </Link>
                </Button>
                <Button className={styles.choosebtn}>
                    <Link className={styles.link} href="/mode/quest">
                        Quest
                    </Link>
                </Button>
            </Layout>
        </>
    )
}