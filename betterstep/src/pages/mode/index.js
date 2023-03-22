import Button from '@/components/Button/Button'
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'
import styles from "../../styles/choosemode/choosemode.module.css"
import Explore from './explore'

export default function Choice() {
    function handleQuest() {
        alert('Quests are coming soon!')
    }
    return (
        <>
            <>
                
                {/*<Button className={styles.choosebtn}>
                    <Link className={styles.link} href="/mode/explore">
                        Explore
                    </Link>
                </Button>
                <Button className={styles.choosebtn} onClick={handleQuest}>
                    <Link href="#" className={styles.link}>
                        Quest
                    </Link>
    </Button>*/}
    <Explore/>
            </>
        </>
    )
}