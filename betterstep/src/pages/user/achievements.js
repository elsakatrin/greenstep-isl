import Layout from "@/components/Layout/Layout"
import Badges from "@/components/Badges/Badges"
import styles from "../../components/Badges/Badges.module.css"

// user management view?
// fetch current user data
// create form to update user data

export default function Achievements() {
    return (
        <>
            <Layout title="Achievements">
                <h1 className={styles.h1}>Badges & Achievements</h1>
                <Badges />
            </Layout>
        </>
    )
}