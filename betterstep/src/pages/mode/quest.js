// quest mode view
import Layout from "@/components/Layout/Layout";
import Map from "@/components/Map/Map";
import Link from "next/link";
import Button from "@/components/Button/Button";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
// import styles from "../../components/Comingsoon/ComingSoon.module.css"

export default function Quest() {
    return (
        <>
            <Map />
            <ComingSoon heading="Coming soon!">
                <div className={styles.content}>
                    <p className={styles.comingsoon}>Questmode is coming soon, stay tuned!</p>
                    <Link className={styles.gobtn} href="/mode/explore">
                        <Button >Go explore!</Button>
                    </Link>
                </div>
            </ComingSoon>
        </>
    )
}