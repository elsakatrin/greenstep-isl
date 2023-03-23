import styles from './Badges.module.css'
import Image from 'next/image'
import badge from "../../public/badge.svg"

// To Do List:
// Create API route for getting badges
// Create a function for getting the badges
// Create a function for displaying the badges

export default function Badges() {
  return (
    <>
      <div className={styles.badgeWrapper}>
        
        <h2 className={styles.txt}>Your Badges</h2>

        <div className={styles.icon}>
          <Image src={badge} alt="Badge" width={115} height={70}/>
        </div>
        
        <p className={styles.txtsm} >You don't have any badges yet, start exploring to earn your badge!</p>
        
      </div>
    </>
  )
}
