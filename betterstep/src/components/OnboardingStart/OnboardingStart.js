import styles from './OnboardingStart.module.css'
import Button from "@/components/Button/Button"
import Link from "next/link"
//This is the screen after you have finished all the onboarding screens and this one gives you a button that you can click to onto the landing page 
export default function OnboardingStart({ heading, children }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{heading}</h1>
            <Link className={styles.readybtn} href="/mode">
                <Button id={styles.readybtn}>
                    <p className={styles.bodytxt} >Get started!</p>
                </Button>
            </Link>

        </div>

    )
}
