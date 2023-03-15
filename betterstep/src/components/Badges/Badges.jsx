import styles from './Badges.module.css'

// To Do List:
// Create API route for getting badges
// Create a function for getting the badges
// Create a function for displaying the badges

export default function Badges() {
  return (
    <>
      <div className={styles.badgeWrapper}>
        <h2>Your Badges</h2>
        <ul>
          <li>No</li>
          <li>Badges</li>
          <li>Yet</li>
          <li>:P</li>
        </ul>
      </div>
    </>
  )
}
