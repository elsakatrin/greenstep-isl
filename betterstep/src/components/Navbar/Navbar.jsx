import styles from './Navbar.module.css'
import Link from 'next/link'
import Button from '../Button/Button'

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navigation}>
        <Link href="/mode">
          <Button>Back</Button>
        </Link>
        <Link href="/about">
          <Button>About</Button>
        </Link>
        <Link href="/user">
          <Button>User</Button>
        </Link>
        <Button>List</Button>
      </nav>
    </div>
  )
}
