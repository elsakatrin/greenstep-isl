import Layout from "@/components/Layout/Layout"
import Button from "@/components/Button/Button"
import Link from "next/link"
import styles from "../../styles/userpage/userpage.module.css"
// user management view?

export default function User() {
    return (
        <>
            <Layout title="User">
                <h1 className={styles.h1}>User</h1>
                <Link className={styles.btntext} href="/user/settings">
                    <Button className={styles.userbtn}>
                        Settings
                    </Button>
                </Link>
                <Link className={styles.btntext} href="/user/achievements">
                    <Button className={styles.userbtn}>
                        Achievements
                    </Button>
                </Link>

            </Layout>
        </>
    )
}